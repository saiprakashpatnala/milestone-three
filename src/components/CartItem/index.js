import CartContext from '../../Context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItemDetails} = props
      const {id, brand, image, name, weight, quantity} = cartItemDetails
      console.log(quantity)
      const onClickDecrement = () => {
        decrementCartItemQuantity(id)
      }
      const onClickIncrement = () => {
        incrementCartItemQuantity(id)
      }

      const totalPrice = weight * quantity

      return (
        <li className="cart-item">
          <div className="cart-item-details-container">
            <img src={image} alt="productImage" className="product-image" />
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{name}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickDecrement}
              >
                -
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickIncrement}
              >
                +
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {totalPrice}/-</p>
            </div>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
