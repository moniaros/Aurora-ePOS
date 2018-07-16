import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import { createStore } from 'redux'
import auroraEPos from './modules/reducers'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'

const store = createStore(auroraEPos)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
