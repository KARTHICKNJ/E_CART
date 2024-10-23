import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Api.css';

const FetchApi = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = async () => {
    let finalData = await axios.get(`https://dummyjson.com/products/search?q=${input}`);
    setData(finalData.data.products);
  };

  useEffect(() => {
    if (input) {
      fetchData();
    } else {
      setInput("");
    }
  }, [input]);

  return (
    <>
      <center>
        <h1>FETCH DATA</h1>
        <div>
          <h1>LIST OF PRODUCTS</h1>
          <input
            type="text"
            placeholder="SEARCH PRODUCTS"
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="productList">
            {data.map((item, index) => {
              const { title, description, price, thumbnail, category } = item;
              return (
                <div key={index} className="productCard">
                  <img src={thumbnail} alt={title} />
                  <div className="productDetails">
                    <h2>{title}</h2>
                    <p className="description">{description}</p>
                    <p className="category">{category}</p>
                    <p className="price">${price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </center>
    </>
  );
};

export default FetchApi;
