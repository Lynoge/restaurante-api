import React, { Component } from 'react'

export default class Orders extends Component {
  componentDidMount () {
    const { getOrders } = this.props
    getOrders()
  }

  render () {
    const { orders } = this.props

    if (orders.requestStatus.loading) {
      return <p>Carregando</p>
    } else {
      return (
        <ul>
          { orders.orders.map(order => <li>{ order.name }</li>) }
        </ul>
      )
    }
  }
}
