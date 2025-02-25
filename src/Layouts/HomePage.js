import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function HomePage(){
    return (
        <div className="home-page">
        <h1>Shop System - CA298 Exam</h1>
        <h2><i>Created by Jake Farrell</i></h2>
          <Link to="/category" className="btn btn-primary create-button">View All Categories And Products Inside</Link>
          <Link to="/statuslist" className="btn btn-primary create-button">View All Orders By Status</Link>
          <Link to="/customers" className="btn btn-primary create-button">View All Customers</Link>
          <Link to="/orders" className="btn btn-primary create-button">View All Orders</Link>
      </div>
    )
}