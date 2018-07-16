import React, { Component } from 'react'
import Login from './routes/login'
import Layout from './routes/Layout'

class App extends Component {
    render() {
        return (
            <Layout>
                <Login />
            </Layout>
        )
    }
}

export default App
