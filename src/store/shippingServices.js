import axios from "axios";
export const calculateShippingApi = async (token, payload) => {
  try {
    const res = await axios.post(
      "https://admin.sushasfoodproducts.com/api/calculate-shipping",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Shipping API Response:", res.data);

    if (res.data.error || res.data.status === "error") {
      throw new Error(res.data.message || "Shipping calculation failed");
    }

    return res.data;
  } catch (err) {
    console.error("Shipping API Error:", err.response?.data || err.message);
    throw err;
  }
};
