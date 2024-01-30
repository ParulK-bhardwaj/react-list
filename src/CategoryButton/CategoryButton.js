import React from 'react';
import './CategoryButton.css'

function CategoryButton({ label, onClick, key, isSelected, count }) {
    let className = isSelected ? "selected-category" : "";
    className = label === "All" && !isSelected ? "all" : className;

    return (
        <button key={key} className={className} onClick={onClick}>
            {label} {<span className="badge">{count}</span>}
        </button>
    );
}

export default CategoryButton;
