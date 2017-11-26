import React, { Component } from 'react'

import Loader from '../../components/loader.js'

export default class Orders extends Component {
  componentDidMount() {
    const { getOrders } = this.props
    getOrders()
  }

  render() {
    const { orders } = this.props

    if (orders.requestStatus.loading) {
      return <Loader />
    }

    else {
      return (
<table className="ui celled table">
  <thead>
    <tr><th>Código</th>
    <th>Items</th>
    <th>Valor</th>
  </tr></thead>
  <tbody>
          { orders.orders.map(order =>
        <tr>
      <td>{ order.id }
      </td>
      <td>{ order.items }</td>
      <td>{ order.value }</td>
    </tr>) }
          </tbody>
          </table>
      )
    }
  }
}
