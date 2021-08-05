import { AiOutlineShoppingCart } from 'react-icons/ai'

export default ({ goToCartPage, cartLength, bgColor }) => {
    return (
      <button 
        onClick={goToCartPage}
        className="cart-btn btn"
        style={{backgroundColor: bgColor}}
          >< AiOutlineShoppingCart /> Cart ({cartLength})
      </button>
    )
  };
  