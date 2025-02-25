import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewAllOrdersCustomer({ customer, name }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/order?customer=${customer}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [customer]);

  const getIDFromUrl = (id) => {
    if (!id) return "";
    const segments = id.split("/");
    return segments[segments.length - 2];
  };

  const displayAllOrders = () => {
    console.log(data);
    return (
      <div className="container custom-box">
        <h1>All Orders By {name}</h1>
        <div className="row">
          {data.map((order, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Order #{getIDFromUrl(order.customer)}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Date Ordered: </strong>{order.date_ordered}</li>
                    <li className="list-group-item"><strong>Shipping Address: </strong>{order.shipping_addr}</li>
                    <li className="list-group-item"><strong>Status: </strong>{order.status}</li>
                  </ul>
                  <div className="button-container">
                  <Link to={`/orderinfo/${getIDFromUrl(order.url)}`} className="btn btn-primary mr-2">View Order Information</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return displayAllOrders();
}

export default ViewAllOrdersCustomer;