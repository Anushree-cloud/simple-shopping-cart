import CartButton from "./CartButton";

export default ({ products, addToCart, goToCartPage, cartLength }) => {
  return (
    <>
      <div>
        <div className="btn-container">
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
                <div className="card-body">
                  <h4>{product.product_name}</h4>
                  <p>${product.price}</p>
                  <button
                    className="add-btn"
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
