import React from "react";

function OrderDetails() {
  const orders = [
      {
        id: "ORD123",
        date: "2025-07-25",
        total: "₹999",
        status: "Delivered",
      },
      {
        id: "ORD124",
        date: "2025-07-28",
        total: "₹499",
        status: "Shipped",
      },
    ];
  return (
    <div>
      {" "}
      <section
        className="p-4 border rounded"
        aria-labelledby="orders-section-heading"
      >
        <h2 id="orders-section-heading" className="h5">
          Order History
        </h2>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <ul className="list-group" aria-label="Order List">
            {orders.map((order) => (
              <li
                key={order.id}
                className="list-group-item d-flex justify-content-between"
              >
                <div>
                  <strong>Order ID:</strong> {order.id} <br />
                  <strong>Date:</strong> {order.date}
                </div>
                <div>
                  <strong>Total:</strong> {order.total} <br />
                  <strong>Status:</strong> {order.status}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default OrderDetails;
