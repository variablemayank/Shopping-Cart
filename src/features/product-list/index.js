import React from 'react'
import ProductListItem from './product-list-item'
import {connect} from 'react-redux'
import {cartItemsWithQuantities} from '../cart';
import './style.css'

function ProductList(props) {
  return <div className="product-listing">
    {
      props.products.map( product =>
        <ProductListItem 
         {...product}
        addToCart = {props.addToCart}
        cart = {props.cart}
         />)
    }
  </div>
}

function mapStateToProps(state){
  return {
    cart:state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({type:'ADD',payload:item})
    },
    removeFromCart: (item) => {
      dispatch({type:'REMOVE',payload:item})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)