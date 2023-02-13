import React, { useMemo } from 'react';
import { products } from '../data/products';
import { render_product } from './AllProducts';

export default function SaleProducts() {
    const components = useMemo(() => products.filter(({ onSale }) => onSale).map(render_product), []);
    return (
        <div
            className="card"
            style={{
                marginTop: '0rem',
                paddingTop: '0rem',
            }}
        >
            <h1>4. On Sale Products</h1>
            {components}
        </div>
    );
}
