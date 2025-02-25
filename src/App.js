import './App.css';
import { ReactDOM } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Container from './Layouts/Container';
import HomePage from './Layouts/HomePage';
import FourOhFour from './Layouts/FourOhFour';
import ViewAllCategories from './components/view-all-categories';
import ViewAllProductsCategory from './components/view-all-products-category';
import ViewAllCustomers from './components/view-all-customers';
import ViewSingleCustomer from './components/view-single-customer';
import ViewAllOrdersStatus from './components/view-all-orders-status';
import AllOrderInfo from './components/all-order-info';
import ViewAllOrders from './components/view-all-orders';
import ViewSingleProduct from './components/view-single-product';
import ViewSingleCategory from './components/view-single-category';
import ViewAllStatus from './components/view-all-status';
// WHEN creating routes, make sure to place them 
// BEFORE the FourOhFour page
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} >
          <Route index element={<HomePage />} />
          <Route path="*" element={<FourOhFour />} />
          <Route path="/category" element={ 
        <div>
          <ViewAllCategories />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
          } />
          <Route path="/productcategory/:productcategory" element={
        <div>
          <ViewAllProductsCategory />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/category/:category" element={
        <div>
          <ViewSingleCategory />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        </Route>
        <Route path="/customers" element={
        <div>
          <ViewAllCustomers />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/customer/:customer" element={
        <div>
          <ViewSingleCustomer />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/product/:product" element={
        <div>
          <ViewSingleProduct />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/statuslist" element={
        <div>
          <ViewAllStatus />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/ordersstatus/:status" element={
        <div>
          <ViewAllOrdersStatus />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/orderinfo/:order" element={
          <div>
            <AllOrderInfo />
            <Link to="/" className="btn btn-primary create-button">Return Home</Link>
          </div>
        } />
      <Route path="/orders" element={
        <div>
          <ViewAllOrders />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
