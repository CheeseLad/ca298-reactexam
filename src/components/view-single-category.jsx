import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ViewSingleCategory() {
  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/category/${category}/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [category]);

  const displayCategory = () => {
    return (
      <div className="container custom-box single-box">
        <h1>Category Information</h1>
        <div className="row">
          <div className="col-md6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{data.display_name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Shortcode: </strong>{data.shortcode}</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    )};

  return displayCategory();
}

export default ViewSingleCategory;