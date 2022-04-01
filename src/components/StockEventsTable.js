import React from 'react'

function StockEventsTable(props) {
    const {products, stockEvents} = props
   
    return(
      <div className="StockEventsTable">
        {products.map(product => {
          const {id} = product

          const relevantStockEvents = stockEvents.filter(se => se.product.id === product.id)

          const stockTotal = relevantStockEvents.reduce((accumulator, currentElement)=> {
            return accumulator + currentElement.qty  
          }, 0)

          return(
            <div className="StockEventTable_ProductsContainer">
              <h2>Product: {product.name} | Total: {stockTotal}</h2>
              {relevantStockEvents.map(event => (
              <div className="StockEventsTable_Card">
                <p>Id: {event.id}</p>
                <p>Type: {event.type}</p>
                <p>Product Name: {event.product.name}</p>
                <p>SKU: {event.product.sku}</p>
                <p>Quantity: {event.qty}</p>
              </div>
            ))}
          </div>
          )
        })}
        
        </div>
        
    )
  }


  export default StockEventsTable;