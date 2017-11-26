import React from 'react'

import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'

import Orders from './containers/orders'
import createStore from './store'

const store = createStore()

const App = () => (
  <Provider store={store}>
    <div className='ui raised very padded text container segment center'>
      <Orders />
    </div>
  </Provider>
)

export default App
