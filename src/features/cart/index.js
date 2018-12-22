import React from 'react'
import { connect } from 'react-redux'

function Cart(props) {
  return <div className='cart'>
    { props.cart.map(item =>
      <div>
        { item.name } - { item.price }
      </div>)}
  </div>
}

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (value) => {
      dispatch({ type: 'ADD', payload: value })
    },
    remove: (index) => {
      dispatch({ type: 'REMOVE', payload: index }) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)