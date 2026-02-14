import React ,{useState , useEffect}from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Orders = () => {
const [allOrders, setAllOrders] = useState([]);

  useEffect(() =>{
    axios.get("https://stock-trading-platform-iwbx.onrender.com/allOrders").then((res) =>{
      console.log(res.data);
      setAllOrders(res.data);
    });
  } , []);

  return (
    <>
    <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
            
          </tr>
          </thead>
          <tbody>
          {allOrders.map((stock, index) => {
    

            return (
              <tr key={index} >
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    <div className="orders">
      <div className="no-orders">
        <p>Want to place new orders</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
    </>
  );
};

export default Orders;