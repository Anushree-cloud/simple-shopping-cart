import CartButton from "./CartButton";
import { Gi3DGlasses } from 'react-icons/gi'

export default ({ products, addToCart, goToCartPage, cartLength }) => {
  return (
    <>
      <div>
        <div className="btn-container">
          <div className="logo">
            <p className="logo-icon"><Gi3DGlasses/></p>
            <p className="logo-text">Shopping App</p>
          </div>
          
          <CartButton 
            goToCartPage={goToCartPage} 
            cartLength={cartLength} 
            bgColor={cartLength > 0 ? "green" : "red"}
          />
        </div>
        <div className="card-container">
          {products.map((product) => {
            return (
              <div className="card" key={product.id}>
                <img src={product.imgUrl} className="card-img"></img>
                <div className="card-body">
                  <h4>{product.product_name}</h4>
                  <p>${product.price}</p>
                  <button
                    className="btn add-btn"
                    onClick={() => {
                      addToCart(product.id);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
