import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelected from "../../../hook/useSelected";
import useTitle from "../../../hook/useTitel";

const Payment = () => {
  useTitle("Payment");
  const [select] = useSelected();
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
  const total = select.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full ms-10">
      <h2 className="text-3xl font-bold">Payment Now!!</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm select={select} price={total} />
      </Elements>
    </div>
  );
};

export default Payment;
