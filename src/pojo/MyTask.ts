export interface MyTask {
    tid: string,
    finish: boolean,
    type: string,
    start_time: number,
    prog: {
        "do": number,
        all: number
    }
}