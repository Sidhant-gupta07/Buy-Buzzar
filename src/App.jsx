import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart/Cart";
import { Home } from "./Pages/Home/Home";
import Products from "./Components/Products/Products";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import toast, { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
function App() {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)
const [invalid, setInvalid] = useState("*Invalid Promo-Code*")

const [userName, setUserName] = useState("")


  // Add To Cart Function

  const AddToCart = (product) => {
    const isProductExist = cart.find((findItem) => findItem.id === product.id);
    if (isProductExist) {
      const updateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updateCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("Product added to cart sucessfully")
    }
  };

  // handle Increase To Cart Function

  const handleIncrease = (id) => {
    const incQuantity = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(incQuantity);
  };

  // handle Decrease To Cart Function

  const handleDecrease = (id) => {
    const decQuantity = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(decQuantity);
  };

  // handle Remove To Cart Function

  const handleRemove = (id) => {
    const updateByFilter = cart.filter((filterItem)=> filterItem.id !== id)
    setCart(updateByFilter);
  }

  // Calculate Total Cost of Products in Cart Section

  const getTotalPRice = ()=> {
    const totalPrice =  cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price * cartReduceItem.quantity
    }, 0)
    return totalPrice - discount
  }

  // Apply Coupon Function

const applyPromoCode = () => {
  if (promoCode === "DISCOUNT10") {
    setDiscount(getTotalPRice()*0.1)
    setPromoCode("")
  }else{
setInvalid(invalid)
  }
}

// User Name Display

useEffect(()=> {
onAuthStateChanged(auth, (user)=>{
  if (user) {
    setUserName(user.displayName)
  }else{
    setUserName("")
  }
})
}, [])


  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar cart = {cart} userName={userName}/>
          <Routes>
            <Route path="/" element={<Home AddToCart={AddToCart}/>} />
            <Route
              path="/Cart"
              element={
                <Cart
                  cart={cart}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                  handleRemove={handleRemove}
                  getTotalPRice = {getTotalPRice}
                  applyPromoCode = {applyPromoCode}
                  promoCode = {promoCode}
                  setPromoCode = {setPromoCode}
                  invalid = {invalid}
                />
              }
            />
            <Route
              path="/allproducts"
              element={<Products AddToCart={AddToCart} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:productId" element={<SingleProduct AddToCart={AddToCart}/>} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Toaster/>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
