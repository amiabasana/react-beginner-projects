import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`, {signal: controller.signal}
        );
        const result = await response.json();

        if (result && result.products && result.products.length) {
          setProducts((prevData) => [...prevData, ...result.products]);
          setLoading(false);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
        setError(error.message);
      }
        setLoading(false);
      }
    };
    fetchProducts();
    return () => controller.abort();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading data please wait...!!!</div>;
  }

  if (error) {
    return <div>Error Occurred:{error}</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div key={index} className="product">
                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
                <span>Price: {item.price}</span>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disable} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disable ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
