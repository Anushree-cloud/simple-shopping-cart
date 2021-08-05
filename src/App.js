import { useState } from "react";
import ProductListing from "./component/ProductList";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import Success from "./component/Success";

const products = [
  {
    id: 1,
    imgUrl: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8f01d1e9-48f4-4e55-886d-0b255b9bbf24.png?v=1625046257",
    product_name: "BoAt Storm",
    price: 400
  },
  {
    id: 2,
    imgUrl: "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/325918/8682048_800.jpg",
    product_name: "Behringer U-Phoria UM2",
    price: 500
  },
  {
    id: 3,
    imgUrl: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/616b4ead-bbd9-4a16-aeab-8d331a16f697.png?v=1627120825",
    product_name: "BoAt Airdopes 131",
    price: 300
  },
  {
    id: 4,
    imgUrl: "https://m.media-amazon.com/images/I/71-dg81FrpL._SL1500_.jpg",
    product_name: "Sony ZV1",
    price: 400
  },
  {
    id: 5,
    imgUrl: "https://flightmusic.com/wp-content/uploads/2017/10/FLIGHT-NUB-310_10.jpg",
    product_name: "Flight NUB310 Baritone Ukelele",
    price: 500
  },
  {
    id: 6,
    imgUrl: "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/17607529_fpx.tif?$filterlrg$&wid=327",
    product_name: "Puffer Hooded Jacket",
    price: 300
  },
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
        <Checkout goToSuccessPage={() => goToPage("success")} goToCartPage={() => goToPage("cart")} clearAllCartItems={clearAllCartItems} />
      }
      {
        currentPage === "success" && 
        <Success goToListingPage={() => goToPage("listing")} />
      }

    </>
  );
}

