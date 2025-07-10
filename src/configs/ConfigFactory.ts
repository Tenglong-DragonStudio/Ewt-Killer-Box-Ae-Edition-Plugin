import {ConfigManager, ValueSelectionObject} from "@/configs/ConfigManager";
import {SGM_getValue, SGM_registerMenuCommand, SGM_setValue, SGM_unregisterMenuCommand} from "@/utils/function";
import {dict} from "@/type";

export class ConfigFactory {
    private readonly configManager: ConfigManager
    public constructor() {
        this.configManager = new ConfigManager()

        this.configManager.register<boolean>({
            name: "拦截ewt收集数据(可能会影响浏览器性能!)",
            id: "kewt.config.ic_collect_data",
            value: true
        })

    }

    public async loadConfig() {
        let conf = await SGM_getValue("kewt.config")
        let res = {}
        if(conf != undefined)
            res = <dict>(JSON.parse(<string>conf))
        this.configManager.loadConfig(res)
        await this.saveConfig()
    }

    public getValue<T extends boolean|string|number|Array<ValueSelectionObject>>(key:string) {
        return this.configManager.getValue<T>(key).value
    }
    public async setValue<T>(key:string,value:T) {
        this.configManager.setValue<T>(key,value)
        await this.saveConfig()
    }

    public async saveConfig() {
        SGM_setValue("kewt.config", JSON.stringify(this.configManager.getAllConfigs()))
    }

    public async setBooleanToSlideBar(key: string, func?: SlideBarFunc) {
        let target = this.configManager.getValue<boolean>(key)
        if(target == undefined) return

        let id = await SGM_registerMenuCommand(target.name+ ":" + target.value.toString(),async () => {
            await click(this)
        })
        async function click(fac:ConfigFactory) {
            await fac.setValue<boolean>(key,!(target.value))
            if(func) func()
            SGM_unregisterMenuCommand(id)
            id = await SGM_registerMenuCommand(target.name+ ":" + target.value.toString(),async () => {
                await click(fac)
            })
        }

    }
}

interface SlideBarFunc {
    (): void
}