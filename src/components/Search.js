import React from 'react';
import SearchNews from '../containers/SearchNews';

const Categories = () => {
  return (
    <div>
      <h1>By Category </h1>
      <div className="right menu">
        <div className="item">
          <SearchNews />
        </div>
     </div>
    </div>
  );
};

export default Categories;
