import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ViewAllOrdersCustomer from "./view-all-orders-customer";

function ViewSingleCustomer() {
  const [data, setData] = useState([]);
  const { customer } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/customer/${customer}/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [customer]);

  const displayCustomer = () => {
    return (
      <div>
      <div className="container custom-box single-box">
        <h1>Customer Information</h1>
        <div className="row">
          <div className="col-md6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Email: </strong>{data.email}</li>
                    <li className="list-group-item"><strong>Address: </strong>{data.address}</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <ViewAllOrdersCustomer customer={customer} name={data.name} />
      </div>
    )};

  return displayCustomer();
}

export default ViewSingleCustomer;