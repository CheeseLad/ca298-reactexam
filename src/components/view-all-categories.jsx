import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewAllCategories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/category/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const displayAllCategories = () => {
    return (
      <div className="container custom-box">
        <h1>All Categories</h1>
        <div className="row">
          {data.map((category, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{category.display_name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Shortcode: </strong>{category.shortcode}</li>
                  </ul>
                  <div className="button-container">
                    <Link to={`/productcategory/${category.shortcode}`} className="btn btn-primary mr-2">View Products In Category</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return displayAllCategories();
}

export default ViewAllCategories;