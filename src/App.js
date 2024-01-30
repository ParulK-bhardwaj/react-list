import { useState } from 'react';
import './App.css';
import {data,  categoriesUnique } from './data'
import CategoryButton from './CategoryButton/CategoryButton';
import Product from './Product/Product';

function App() {

  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  const handleCategoryClick = (categoryName) => {
    if (categoryName === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories(categories => {
        if (categories.includes(categoryName)) {
          return categories.filter(category => category !== categoryName);
        } else {
          return [...categories.filter(category => category !== "All"), categoryName];
        }
      });
    }
  };

  const filteredData = selectedCategories.includes("All") ? data : data.filter(product => selectedCategories.includes(product.category));

  const totalSum = data.reduce((sum, product) => {
    const price = parseFloat(product.price.slice(1));
    return sum + price;
  }, 0);

  const selectedSum = filteredData.reduce((sum, product) => {
    const price = parseFloat(product.price.slice(1));
    return sum + price;
  }, 0);

  const productsPerCategory = data.reduce((counts, product) => {
    const category = product.category;
    counts[category] = (counts[category] || 0) + 1;
    return counts;
  }, {});

  return (
    <div className="App">
      <div className='CategoryList'>
        <CategoryButton
          label="All"
          onClick={() => handleCategoryClick("All")}
          isSelected={selectedCategories.includes("All")}
          count={data.length}
        />
        {categoriesUnique.map((category, index) => (
          <CategoryButton 
            key={index} 
            label={category}
            onClick={() => handleCategoryClick(category)}
            isSelected={selectedCategories.includes(category)}
            count={productsPerCategory[category]} />
        ))
        }
      </div>
      <div className='Total'>
        <h1>Total (All Products): ${totalSum.toFixed(2)}</h1>
        <h2>Total (Selected Products): ${selectedSum.toFixed(2)}</h2>
      </div>
      <div className='ProductList'>
        {filteredData.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;