import React, { useMemo } from 'react';
import { products } from '../data/products';
import { render_product } from './AllProducts';

export default function AscendingProducts() {
    const components = useMemo(() => [...products].sort((a, b) => a.price - b.price).map(render_product), []);
    return (
        <div
            className="card"
            style={{
                marginTop: '0rem',
                paddingTop: '0rem',
            }}
        >
            <h1>3. Sorted Products (In Ascending Order)</h1>
            {components}
        </div>
    );
}
