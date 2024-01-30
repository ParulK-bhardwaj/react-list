import React from 'react';
import './Product.css'

function rating(rating) {
    const roundedRating = Math.round(rating);
    return '★'.repeat(roundedRating);
}

function Product({ product }) {

    const className = product.units === 0 ? "disabled" : "product";
    
    return (
        <div key={product.id} className={className}>
            <h3 className="pname">{product.name}</h3>
            <p className="pprice">{product.price}</p>
            <p className="pcat">{product.category}</p>
            <p className="punits">Units:{product.units}</p>
            <p className="prating">{rating(product.rating)}</p>
        </div>
    );
}
export default Product;