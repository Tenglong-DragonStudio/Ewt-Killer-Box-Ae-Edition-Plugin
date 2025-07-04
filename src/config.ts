import * as process from "node:process";

let config = {
    "animate": {
        "analyze_slide_toggle": 300,
        "window_surface": 200,
        "scrollbar_slide_from_zero": 700,
        "scrollbar_0p_to_20p": 400,
        "scrollbar_20p_to_40p": 300,
        "scrollbar_40p_to_60p": 200,
        "scrollbar_60p_to_80p": 100,
        "scrollbar_80p_to_100p": 50
    },
    "last-build-time":"2025.07.03",
    // "mip": "http://127.0.0.1:8000",
    // "payip": "http://127.0.0.1:8001",
    "mip": "https://api.olcoursekb.top/ekb",
    "payip": "https://api.olcoursekb.top/pay",
    "version": 25011
}

export default config