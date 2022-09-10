import React, { Component } from "react";
import data from '../data'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid font-bold text-xl mt-3">
          Feature Product
        </div>
        <div className="flex row-span-2 w-">
            {data.product.map((product,index) => {
                return (<div className=" items-center w-96 border-4 border-gray-600 justify-between ml-5 mt-3" key={index}>
                <div className="w-full max-w-sm">
                  <img src={product.img} alt={product.name} />
                </div>
                <div>
                  <p className="font-bold text-lg text-center mt" >{product.name}</p>
                  <p className="font-bold text-md text-center mb-3">{product.price}$</p>
                  <button className="text-md bg-gray-300 border-2 border-gray-600 ml-44 mb-2">Buy</button>
                </div>
              </div>)
            })}
        </div>
        
        
      </div>
    );
  }
}
