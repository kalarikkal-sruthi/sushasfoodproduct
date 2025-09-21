import { api } from "../utils/api";

export const createOrderApi = async (orderData, token) => {
  const response = await api.post("/store_order_user", orderData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getOrdersApi = async (userId, token) => {
  const response = await api.get(`/orders/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getOrderItemsApi = async (orderId, token) => {
  try {
    const response = await api.get(`/order/${orderId}/items`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("API Response for order items:", response.data);
    return { orderId, items: response.data };
  } catch (error) {
    console.error(
      "API Error fetching order items:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const cancelOrderApi = async (orderId, token) => {
  const response = await api.post(
    `/order/cancel/${orderId}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const returnOrderItemApi = async (orderItemId, reason, token) => {
  const response = await api.post(
    `/order/item/return`,
    {
      order_item_id: orderItemId,
      reason,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

export async function createRazorpayOrder(amount) {
  try {
    const { data } = await api.post("/api/create-order", { amount });
    console.log("Order Created:", data);
    return data;
  } catch (err) {
    console.error("Create order failed", err);
    throw err;
  }
}
