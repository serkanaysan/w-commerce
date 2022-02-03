import PersistentStore from './src/persistentStore'

class WCommerceCore {
    constructor() {
        this.persistentStore = new PersistentStore()
    }

    async init() {
        
    }
}

const wcommerceCore = new WCommerceCore()
export default wcommerceCore