import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';

function ViewAllProductsCategory() {
  const [data, setData] = useState([]);
  const { productcategory } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/product/?category=${productcategory}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [productcategory]);

  const getIDFromUrl = (id) => {
    if (!id) return "";
    const segments = id.split("/");
    return segments[segments.length - 2];
  };

  const displayAllProducts = () => {
    return (
      <div className="container custom-box">
        <h1>All Products In Category: {productcategory}</h1>
        <div className="row">
          {data.map((product, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Price: </strong>€{product.price}</li>
                    <li className="list-group-item"><strong>Category: </strong><Link to={`/category/${product.category.split('/').filter(part => !!part).pop()}`}>{product.category.split('/').filter(part => !!part).pop()}</Link></li>
                  </ul>
                  <div className="button-container">
                    <Link to={`/product/${getIDFromUrl(product.url)}`} className="btn btn-primary mr-2">View Product Information</Link>        
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return displayAllProducts();
}

export default ViewAllProductsCategory;