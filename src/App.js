import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleItemsChange } from "./redux/features";
import Modal from "./components/Modal";
import { getCartItems } from "./redux/features";
function App() {
  const { cartItems, loading, error } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleItemsChange());
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading....</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="loading">
        <h4>Opps Some Error Occured Try Reloading in 15 minutes </h4>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      {isOpen && <Modal />}
      <CartContainer />
    </>
  );
}
export default App;
