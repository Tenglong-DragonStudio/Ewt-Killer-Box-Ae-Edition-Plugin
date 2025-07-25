import * as process from "node:process";

let app_config = {
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
    "last-build-time":"2025.07.22",
    "backup_server": {
        "mip": "https://api2.olcoursekb.top/ekb",
        "payip": "https://api2.olcoursekb.top/pay",
    },
    "mip": "https://api.olcoursekb.top/ekb",
    "payip": "https://api.olcoursekb.top/pay",
    // "mip": "http://127.0.0.1:8000",
    // "payip": "http://127.0.0.1:8001",
    "version": 25019
}

export default app_config