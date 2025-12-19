import { useEffect, useState } from "react";
import api from "../api/api"; // Make sure baseURL is http://localhost:5000/api
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token"); // JWT from login
        if (!token) {
          setError("You must be logged in to view products.");
          setLoading(false);
          return;
        }

        const { data } = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>{product.name}</Link> - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
