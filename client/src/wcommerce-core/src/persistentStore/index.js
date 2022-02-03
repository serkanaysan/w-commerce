const KEY_THEME = 'theme'

export default class PersistentStore {
    constructor() {
        this.getItem = (key) => {
            return JSON.parse(localStorage.getItem(key))
        }
        this.setItem = (key, value) => {
            if(value) {
                localStorage.setItem(key, JSON.stringify(value))
            }
            else {
                localStorage.removeItem(key)
            }
        }
    }

    /**
     * get theme
     * @returns {any}
     */
    getTheme() {
        return this.getItem(KEY_THEME)
    }

    /**
     * set theme
     * @param {String} value 
     */
    setTheme(value) {
        this.setItem(KEY_THEME, value)
    }
}