import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import ViewSingleProductParam from "./view-single-product-param";

function AllOrderInfo() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const { order } = useParams();
  const [order2, setOrder2] = useState(null);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/order/${order}/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [order]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/orderitem/?order=${order}`)
      .then((response) => response.json())
      .then((data2) => setData2(data2));
  }, [order]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/order/${order}`)
      .then(response => response.json())
      .then(orderData => {
        setOrder2(orderData);
        fetch(`${process.env.REACT_APP_API_URL}/api/orderitem/?order=${order}`)
          .then(response => response.json())
          .then(orderItems => {
            setProducts(orderItems);
            Promise.all(orderItems.map(item =>
              fetch(item.product)
                .then(response => response.json())
            ))
              .then(productsData => {
                const updatedProducts = productsData.map((productData, index) => ({
                  ...orderItems[index],
                  product: productData
                }));
                setProducts(updatedProducts);
                const totalPrice = updatedProducts.reduce((acc, productItem) => {
                  return acc + parseFloat(productItem.product.price) * productItem.quantity;
                }, 0);
                setTotalPrice(totalPrice);
              });
          });
      });
  }, [order]);
  const getIDFromUrl = (id) => {
    if (!id) return "";
    const segments = id.split("/");
    return segments[segments.length - 2];
  };

  const displayOrder = () => {
    return (
        <div>
      <div className="container custom-box single-box">
        <h1>Order Information</h1>
        <div className="row">
          <div className="col-md6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order #{getIDFromUrl(data.url)}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Date Ordered: </strong>{data.date_ordered}</li>
                    <li className="list-group-item"><strong>Shipping Address: </strong>{data.shipping_addr}</li>
                    <li className="list-group-item"><strong>Status: </strong>{data.status}</li>
                  </ul>
                  <div className="button-container">
                    <Link to={`/customer/${getIDFromUrl(data.customer)}`} className="btn btn-primary mr-2">View Customer Information</Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-box">
        <h1>All Items In Order #{order}</h1>
        <div className="row">
          {data2.map((order, index) => (
            <div className="col-lg-4 mb-4" key={index}>
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title">Item #{getIDFromUrl(order.url)}</h5>
                          <ul className="list-group list-group-flush">
                              <li className="list-group-item"><strong>Quantity: </strong>{order.quantity}</li>
                          </ul>
                          <ViewSingleProductParam product={getIDFromUrl(order.product)} />
                      </div>
                  </div>
              </div>
              
          ))}
        </div>
      </div>
      <div className="container custom-box single-box">
        <h1>Total Price Of Items</h1>
        <div className="row">
          <div className="col-md6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">€{totalPrice}</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )};

  return displayOrder();
}

export default AllOrderInfo;