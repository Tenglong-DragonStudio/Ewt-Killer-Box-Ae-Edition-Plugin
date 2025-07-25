export const SGM_xmlhttpRequest = typeof GM_xmlhttpRequest == "undefined" ? GM.xmlHttpRequest : GM_xmlhttpRequest
export const SGM_getValue = typeof GM_getValue == "undefined" ? GM.getValue : GM_getValue
export const SGM_setValue = typeof GM_setValue == "undefined" ? GM.setValue : GM_setValue

export const SGM_info = typeof GM_info == "undefined" ? GM.info : GM_info

export const swindow = typeof unsafeWindow != "undefined" ? unsafeWindow : window
export const SGM_registerMenuCommand =
    typeof GM_registerMenuCommand == "undefined" ?
        (typeof GM.registerMenuCommand == "undefined" ? ()=>{
            console.log("抱歉，您的浏览器不支持GM_registerMenuCommand.")
            return -1
        } : GM.registerMenuCommand) :
        GM_registerMenuCommand
export const SGM_unregisterMenuCommand =
    typeof GM_unregisterMenuCommand == "undefined" ?
        (typeof GM.unregisterMenuCommand == "undefined" ? (s:number)=>{
            console.log("抱歉，您的浏览器不支持GM_unregisterMenuCommand.")
            return -1
        } : GM.unregisterMenuCommand) :
        GM_unregisterMenuCommand