import { useEffect, useState } from "react";
import Card from "~/components/Card";
import Title from "~/components/Title";
import axiosInstance from "~/utilities/axiosInstance";

interface Product {
  _id: string;
  productName: string;
  productImage: string;
  price: number;
  availableCopies: number;
}

function Popular() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await axiosInstance.get("/best-selling");
        setProducts(response.data || []);
      } catch (err) {
        setError("Failed to load popular products.");
        console.error("Popular API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPopular();
  }, []);

  return (
    <div>
      <Title title="Popular" />

      {loading && <p className="text-gray-600">Loading...</p>}

      {!loading && error && (
        <p className="text-red-500">{error}</p>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <Card
              key={product._id}
              productID={product._id}
              name={product.productName}
              price={product.price}
              imageUrl={product.productImage}
              quantity={product.availableCopies}
            />
          ))}
        </div>
      )}

      {
        products.length===0 && <p>No products to show.</p>
      }
    </div>
  );
}

export default Popular;

