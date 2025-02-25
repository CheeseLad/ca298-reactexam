import { Link } from "react-router-dom";

function ViewAllStatus() {



  const displayAllOrders = () => {
    const choices = {
      "O": "ORDERED",
      "P": "PROCESSING",
      "S": "SHIPPED",
      "D": "DELIVERED",
    };
  
    return (
      <div className="container custom-box">
        <h1>List Of Status Values For Orders</h1>
        <div className="row">
          {Object.keys(choices).map((key, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Status: {choices[key]}</h5>
                  <ul className="list-group list-group-flush">
                  </ul>
                  <div className="button-container">
                    <Link to={`/ordersstatus/${key}`} className="btn btn-primary mr-2">View Orders With Status: {choices[key]}</Link>
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

export default ViewAllStatus;