export class MutexLock {
    lock: boolean
    constructor() {
        this.lock = false

    }

    MutexLock() {
        this.lock = true
    }

    MutexUnlock() {
        this.lock = false
    }

    GetMutexLockStatus() {
        return this.lock
    }

}