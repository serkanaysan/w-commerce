import User from "./user";

export default class Modules {
    constructor(app) {
        this.modules = [
            new User(app)
        ]
    }
}