import React from 'react';
import './App.css';
import StockEventsTable from './components/StockEventsTable'

// 2 data types

//products will need id, name, SKU, thumbnail
const fetchedProducts = [
  {id: 1, name: "25-Card MLB Starter Kit", sku: 12345, thumbnail: ""},
  {id: 2, name: "10-Card Pokemon Starter Kit", sku: 6789, thumbnail: ""}
]

//stockEvents

const fetchedStockEvents = [
  {id: 1, type: 'add', qty: 100, product: fetchedProducts[0]},
  {id: 2, type: 'remove', qty: -20, product: fetchedProducts[0]},
  {id: 3, type: 'remove', qty: -10, product: fetchedProducts[0]},
  {id: 4, type: 'add', qty: 120, product: fetchedProducts[1]},
  {id: 5, type: 'remove', qty: -45, product: fetchedProducts[1]},

   //type: 'add' || 'remove'
]

//Fetch all stock evenets

//separate by different products

//display them


function App() {
  return (
    <div className="App">
      <h1>The Supply Demand App </h1>

      <StockEventsTable 
      products={fetchedProducts} 
      stockEvents={fetchedStockEvents} 
      />
    </div>
  );
}

export default App;
