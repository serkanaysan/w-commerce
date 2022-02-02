import DataBase from "./database"
import Modules from "./modules"

export default class Server {
    constructor(app) {
        this.database = new DataBase()
        this.modules = new Modules(app)
    }

    async init() {
        await this.database.init()
    }
}