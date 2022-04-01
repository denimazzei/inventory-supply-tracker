import React from 'react'

class StockDetail extends React.Component{
    state = {
        show: true
    }


    render(){
        const {name, total, stockEvents} = this.props
        const {show} = this.state
        return(
        <div className="StockDetail" onClick={()=> this.setState({show: !show})}>
            <h2>Product: {name} | Total: {total}</h2>
            {show &&
            <div>
            {stockEvents.map(event => (
                <div className="StockEventsTable_Card">
                    <p>Id: {event.id}</p>
                    <p>Type: {event.type}</p>
                    <p>Product Name: {event.product.name}</p>
                    <p>SKU: {event.product.sku}</p>
                    <p>Quantity: {event.qty}</p>
                </div>
                ))}
               </div>
            }
        </div>
        )
    } 
}

    

export default StockDetail