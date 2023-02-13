import React, { useMemo } from 'react'
import { products } from '../data/products';

export default function TotalCost() {
  const total_cost = useMemo(() => 
    products.reduce((total, product) => total + product.price, 0)
  , [products]);

  return (
    <div className="card" style={{
      marginBottom: '0rem',
      paddingBottom: '0rem'
    }}>
        <h1>1. Total Cost: ${total_cost.toFixed(2)}</h1>
      </div>
  )
}
