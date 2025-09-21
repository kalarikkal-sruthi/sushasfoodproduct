import axios from "axios";
import { clearCart } from "./cartSlice";

export const openRazorpay = async (
  orderData,
  token,
  dispatch,
  navigate,
  setPopupMessage,
  setShowPopup
) => {
  try {
    if (!token) {
      setPopupMessage("User not authenticated. Please login again.");
      setShowPopup(true);
      return;
    }

    const { data } = await axios.post(
      "https://admin.sushasfoodproducts.com/api/create-order",
      { amount: orderData.amount },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log("Razorpay Order Created:", data);

    const options = {
      key: data.key,
      amount: data.amount,
      currency: data.currency,
      order_id: data.order_id,
      name: "Sushas Food Products",
      description: "Order Payment",
      handler: async function (response) {
        try {
          const verifyRes = await axios.post(
            "https://admin.sushasfoodproducts.com/api/verify-payment",
            {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          if (verifyRes.data.status === "success") {
            const finalOrderData = {
              ...orderData,
              payment_method: "RAZORPAY",
              payment_status: "PAID",
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
            };

            await axios.post(
              "https://admin.sushasfoodproducts.com/api/store_order_user",
              finalOrderData,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );

            dispatch(clearCart());
            navigate("/order-confirmation");
          } else {
            console.log("Payment verification failed:", verifyRes.data);
            setPopupMessage("Payment verification failed. Please try again.");
            setShowPopup(true);
          }
        } catch (err) {
          console.error(
            "Error verifying/storing order:",
            err.response?.data || err.message
          );
          setPopupMessage("Error while storing order. Try again.");
          setShowPopup(true);
        }
      },
      theme: { color: "#5caf47" },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      console.error("Payment Failed:", response.error);
      setPopupMessage("Payment failed: " + response.error.description);
      setShowPopup(true);
    });

    rzp.open();
  } catch (err) {
    console.error("Error opening Razorpay:", err.response?.data || err.message);
    setPopupMessage("Unable to initiate payment. Please try again.");
    setShowPopup(true);
  }
};
