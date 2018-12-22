import React from 'react'

export default function ProductListItem(props) {
  const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]
  return <div className= "product-list-item">
    <h3>{props.name}</h3>
    <img 
      height={100}
      title={props.name}
      src={`/products/${props.image}`}
    />
  
    <div>{ props.description }</div>
  
    <div>${ props.price }</div>
    <div><button onClick ={ ()=> props.addToCart(props.product)}>Add to cart({thisItemInCart&&thisItemInCart.quantity||0})</button></div>
  </div>
}