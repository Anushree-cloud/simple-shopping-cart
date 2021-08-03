import { BiLike } from 'react-icons/bi'

export default ({ cart, goToListingPage, goToCheckoutPage, onRemove }) => {
    const grandTotal = cart.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);
  
    return (
      <div className="container">
        <h2>Cart</h2>
        <button onClick={goToListingPage}>Back to listing</button>
        {cart.length !== 0 ? (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <p>Product name</p>
                  </th>
                  <th>
                    <p>Quantity</p>
                  </th>
                  <th>
                    <p>Individual Price</p>
                  </th>
                  <th>
                    <p>Subtotal</p>
                  </th>
                  <th>
                    <p>Action</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem) => {
                  return (
                    <tr className="cart-item" key={cartItem.id}>
                      <td>
                        <p>{cartItem.product_name}</p>
                      </td>
                      <td>
                        <p>{cartItem.qty}</p>
                      </td>
                      <td>
                        <p>${cartItem.price}</p>
                      </td>
                      <td>
                        <p>${cartItem.qty * cartItem.price}</p>
                      </td>
                      <td>
                        <button className="dlt-btn" onClick={() => onRemove(cartItem.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
  
            <div>
              <h3>Grand total: ${grandTotal}</h3>
              <button onClick={goToCheckoutPage} className="co-btn">Check out <BiLike /></button>
            </div>
          </>
        ) : (
          <div className="cart-noItem">
            <p>Nothing to Show!</p>
          </div>
        )}
      </div>
    );
  };
  