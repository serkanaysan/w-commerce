import React, { Component } from 'react'

export const AppContext = React.createContext()

class AppProvider extends Component {

    constructor(props) {
        super(props)
        // async state setter 
        this.setAsyncState = (props) => {
            return new Promise((resolve, reject) => {
                this.setState(props, resolve())
            })
        }

        // init state
        const initState = {
            ready: false,
            loading: false,
        }
        this.state = { ...initState }
        this.init()
    }

    /**
     * init
     * @returns {undefined}
     */
    async init() {
        await this.setAsyncState({ ready: true })
    }

    render() {
        const { ready, loading } = this.state
        return (
            <AppContext.Provider
                value={{
                    ready,
                    loading
                }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

const AppContextComsumer = AppContext.Consumer

export default AppProvider
export { AppContextComsumer }