import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Orders from './orders'
import Items from './items'

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Orders} />
      <Route path='/orders' component={Orders} />
      <Route path='/items' component={Items} />
    </Switch>
  </main>
)

export default Router
