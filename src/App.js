import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="home-page">
      <h1>Shop System - CA298 Exam</h1>
      <h2><i>Created by Jake Farrell</i></h2>
        <Link to="/categories" className="btn btn-primary create-button">View All Categories</Link>
        <Link to="/customers" className="btn btn-primary create-button">View All Customers</Link>
        <Link to="/products" className="btn btn-primary create-button">View All Products</Link>
        <Link to="/orders" className="btn btn-primary create-button">View All Orders</Link>
        <Link to="/create-category" className="btn btn-primary create-button">Create New Category</Link>
        <Link to="/create-product" className="btn btn-primary create-button">Create New Product</Link>
        <Link to="/create-customer" className="btn btn-primary create-button">Create New Customer</Link>
        <Link to="/create-order" className="btn btn-primary create-button">Create New Order</Link>
        <Link to="/create-order-items" className="btn btn-primary create-button">Add Item To Order</Link>
    </div>
  );
}

export default App;
