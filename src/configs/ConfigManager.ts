import {dict, TDict} from "@/type";

export class ConfigManager {
    private readonly configs: TDict<Property<any>>;

    public constructor() {
        this.configs = {}
    }

    public register<T extends boolean | string | number | Array<any>>(config: Property<T>) {
        this.configs[config.id] = config
    }

    public getValue<T extends boolean | string | number | Array<any>>(key: string): Property<T> {
        return this.configs[key]
    }

    public loadConfig(localconfig: dict) {
        for(let i in this.configs) {
            if(localconfig[i] == undefined //本身不存在
                || typeof localconfig[i] != typeof this.configs[i].value) continue
            else this.configs[i].value = localconfig[i]
        }
    }
    
    public setValue<T>(key: string,value: T) {
        if(this.configs[key] != undefined && typeof value == typeof this.configs[key].value) {
            this.configs[key].value = value
        }

    }

    public getAllConfigs() {
        let res:dict = {}
        for(let i in this.configs) {
            res[i] = this.configs[i].value
        }
        return res
    }
}

export interface Property<T extends boolean | string | number | Array<ValueSelectionObject>> {
    name: string,
    id: string,
    value: T
}

export interface ValueSelectionObject {
    name: string,
    selected: boolean
}