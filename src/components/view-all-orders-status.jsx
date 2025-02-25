import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ViewAllOrdersStatus() {
  const [data, setData] = useState([]);
  const { status } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/order?status=${status}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const getIDFromUrl = (id) => {
    if (!id) return "";
    const segments = id.split("/");
    return segments[segments.length - 2];
  };

  const displayAllOrders = () => {
    return (
      <div className="container custom-box">
        <h1>All Orders For Status: {status}</h1>
        <div className="row">
          {data.map((order, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Order #{order.url.split('/').filter(part => !!part).pop()}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Date Ordered: </strong>{order.date_ordered}</li>
                    <li className="list-group-item"><strong>Shipping Address: </strong>{order.shipping_addr}</li>
                    <li className="list-group-item"><strong>Status: </strong>{order.status}</li>
                  </ul>
                  <div className="button-container">
                    <Link to={`/customer/${getIDFromUrl(order.customer)}`} className="btn btn-primary mr-2">View Customer Information</Link>
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

export default ViewAllOrdersStatus;