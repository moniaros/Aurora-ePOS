import React, { Fragment as F } from 'react'
import Header from './header'
import { Container } from 'reactstrap'

export default (props) => {
    return (
        <F>
            <Header />
            <main>
                <Container>
                    {props.children}
                </Container>
            </main>
        </F>
    )
}
