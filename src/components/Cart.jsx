const Cart = (props) => {
    const {quantity = 0, handleBasketShow} = props;

    return <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
        <i className="small material-icons">add_shopping_cart</i>
        {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
    
}

export {Cart}