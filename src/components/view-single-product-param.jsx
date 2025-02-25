import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function ViewSingleProductParam( { product }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/product/${product}/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [product]);

  const getIDFromUrl = (id) => {
    if (!id) return "";
    const segments = id.split("/");
    return segments[segments.length - 2];
  };

  const displayProduct = () => {
    return (
      <div className="container custom-box single-box">
        <h1>Product Information</h1>
        <div className="row">
          <div className="col-md6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Price: </strong>€{data.price}</li>
                    <li className="list-group-item"><strong>Category: </strong><Link to={`/category/${getIDFromUrl(data.category)}`}>{getIDFromUrl(data.category)}</Link></li>
                  </ul>
                  <div className="button-container">
                    <Link to={`/product/${getIDFromUrl(data.url)}`} className="btn btn-primary mr-2">View Product Information</Link>        
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )};

  return displayProduct();
}

export default ViewSingleProductParam;