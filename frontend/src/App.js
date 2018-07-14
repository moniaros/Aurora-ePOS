import React, { Component, Fragment } from 'react'
import Login from './routes/login'
import Header from './routes/header'
import { Container } from 'reactstrap'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Container>
                    <Login />
                </Container>
            </Fragment>
        )
    }
}

export default App
