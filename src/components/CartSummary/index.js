// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const getTotal = (total, item) => {
        const productPrice = item.price * item.quantity

        return total + productPrice
      }
      const totalPrice = cartList.reduce(getTotal, 0)

      return (
        <div>
          <h1 className="order">
            Order Total: <span className="total-price">Rs {totalPrice}</span>
          </h1>
          <p className="cart-count">{cartList.length} items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
