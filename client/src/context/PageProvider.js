import React, { Component } from 'react'
import wcommerceCore from '../wcommerce-core'

export const AppContext = React.createContext()

class AppProvider extends Component {

    constructor(props) {
        super(props)
        
        // init state
        const initState = {
            ready: false,
            loading: false,
            theme: wcommerceCore.persistentStore.getTheme(),
            wcommerceCore: null
        }
        this.state = { ...initState }
    }

    componentDidMount() {
        // async state setter 
        this.setAsyncState = (props) => { return new Promise((resolve, reject) => { this.setState(props, resolve()) })}        
        this.init()
    }

    /**
     * init
     * @returns {undefined}
     */
    async init() {
        await wcommerceCore.init()
        await this.setAsyncState({ ready: true, wcommerceCore })
    }

    render() {
        const { ready, loading, theme } = this.state
        return (
            <AppContext.Provider
                value={{
                    ready,
                    loading,
                    theme,
                    setTheme: (theme) => this.setState({ theme }),
                    wcommerceCore
                }}>
                {ready && this.props.children}
            </AppContext.Provider>
        )
    }
}

const AppContextComsumer = AppContext.Consumer

export default AppProvider
export { AppContextComsumer }