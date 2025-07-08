export const SGM_xmlhttpRequest = typeof GM_xmlhttpRequest == "undefined" ? GM.xmlHttpRequest : GM_xmlhttpRequest
export const SGM_getValue = typeof GM_getValue == "undefined" ? GM.getValue : GM_getValue
export const SGM_setValue = typeof GM_setValue == "undefined" ? GM.setValue : GM_setValue

export const SGM_info = typeof GM_info == "undefined" ? GM.info : GM_info

export const swindow = typeof unsafeWindow != "undefined" ? unsafeWindow : window
export const SGM_registerMenuCommand = typeof GM_registerMenuCommand == "undefined" ? GM.registerMenuCommand : GM_registerMenuCommand
export const SGM_unregisterMenuCommand = typeof GM_unregisterMenuCommand == "undefined" ? GM.unregisterMenuCommand : GM_unregisterMenuCommand