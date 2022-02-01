

export default class User {
    constructor(app) {
        this.app = app
        this.app.use('/api/user', require('./api/user'))
    }
}