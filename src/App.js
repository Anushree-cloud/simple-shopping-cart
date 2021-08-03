import { useState } from "react";
import ProductListing from "./component/ProductList";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import Success from "./component/Success";

const products = [
  {
    id: 1,
    product_name: "Product1",
    price: 400
  },
  {
    id: 2,
    product_name: "Product2",
    price: 500
  },
  {
    id: 3,
    product_name: "Product3",
    price: 300
  }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState("listing")
  // const [isCartPage, setIsCartPage] = useState(false);

  function addToCart(productId) {
    let cartItem = {}; ///ekhane
    let newCartArray = [...cart];

    let product = products.find((element) => {
      return element.id === productId;
    });
    //find the product, not duplicate
    let productIndex = cart.findIndex((cartArrayItem) => {
      return cartArrayItem.id === productId;
    });

    //added qty property (If product cart e nathake then?)

    if (productIndex !== -1) {
      cartItem = newCartArray[productIndex];
      cartItem.qty = cartItem.qty + 1; //modifying quantity
      newCartArray[productIndex] = cartItem;
    } else {
      newCartArray.push({
        ...product,
        qty: 1
      });
    }

    //updated the cart
    setCart([...newCartArray]);
  }


  //clear all cart-items
  function clearAllCartItems() {
    setCart([])
  }

  //remove cart-items
  function removeCartItem(productId) {
    setCart(cart.filter((cartArrayItem) => cartArrayItem.id !== productId));
  }


  //traverse between pages
  function goToPage (pageName) {
    setCurrentPage(pageName)
  }

  return (
    <>

      {
        currentPage === "cart" && 
        <Cart
          cart={cart}
          goToListingPage={() => goToPage("listing")}
          goToCheckoutPage={() => goToPage("checkout")}
          clearAllCartItems={clearAllCartItems}
          onRemove={removeCartItem}
        />
      }

      {
        currentPage === "listing" &&
        <ProductListing
          products={products}
          addToCart={addToCart}
          goToCartPage={() => goToPage("cart")}
          cartLength={cart.length}
        />
      }

      {
        currentPage === "checkout" && 
        <Checkout goToSuccessPage={() => goToPage("success")} />
      }
      {
        currentPage === "success" && 
        <Success goToListingPage={() => goToPage("listing")} />
      }

    </>
  );
}

