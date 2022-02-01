

export default class User {
    constructor(app) {
        this.app = app
        //this.app.use(require('./api'))

        this.app.use(require('./api'))

        //app.use(require('./api'))

        // const api = require('./api')
        // console.log('api', api)
    }

}