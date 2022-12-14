import { CartIcon } from "../icons";
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../redux/modalFeatures";
import CartItem from "./CartItem";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const handleClick = () => {
    dispatch(setOpen());
  };
  if (amount < 1) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.length > 0 &&
          cartItems?.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={handleClick}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
