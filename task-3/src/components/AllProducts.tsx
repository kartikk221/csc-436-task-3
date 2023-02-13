import React, { useMemo } from 'react';
import { products } from '../data/products';

export function render_product({ id, name, price, onSale }) {
    return (
        <div
            key={id}
            className="card"
            style={{
                background: 'rgb(46 46 46)',
                margin: '1.5rem',
                padding: '0.5rem',
                borderRadius: '1rem',
            }}
        >
            <h2>{name}</h2>
            <h3>
                ${price.toFixed(2)} {onSale ? <span style={{ color: 'red' }}>On Sale!</span> : null}
            </h3>
        </div>
    );
}

export default function AllProducts() {
    const components = useMemo(() => products.map(render_product), []);

    return (
        <div
            className="card"
            style={{
                marginTop: '0rem',
                paddingTop: '0rem',
            }}
        >
            <h1>2. All Products</h1>
            {components}
        </div>
    );
}
