import React, { useState, useMemo } from "react";
import Card from "~/components/Card";
const allProducts = [
  {
    productID: 1,
    categoryID: 1,
    name: "Leather Jacket",
    price: 150,
    quantity: 5,
    dateAdded: "2025-07-15",
    categoryName: "Miniature Trophy",
  },
  {
    productID: 2,
    categoryID: 2,
    name: "Running Shoes",
    price: 90,
    quantity: 0,
    dateAdded: "2025-06-01",
    categoryName: "Miniature Trophy",
  },
  {
    productID: 3,
    categoryID: 3,
    name: "Baseball Cap",
    price: 25,
    quantity: 10,
    dateAdded: "2025-08-05",
    categoryName: "Miniature Trophy",
  },
  {
    productID: 4,
    categoryID: 4,
    name: "Jeans",
    price: 70,
    quantity: 3,
    dateAdded: "2025-08-01",
    categoryName: "Miniature Trophy",
  },
  {
    productID: 5,
    categoryID: 5,
    name: "Sneakers",
    price: 85,
    quantity: 2,
    dateAdded: "2025-07-30",
    categoryName: "Miniature Trophy",
  },
];

export default function Categories({
  categoryID,
  categoryName,
}: {
  categoryID: number | undefined;
  categoryName: string | undefined;
}) {
  const [filter, setFilter] = useState("default");

  const filteredProducts = useMemo(() => {
    let products = allProducts.filter((p) => p.categoryID === categoryID);

    switch (filter) {
      case "price-low":
        products = [...products].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        products = [...products].sort((a, b) => b.price - a.price);
        break;
      case "in-stock":
        products = products.filter((p) => p.quantity > 0);
        break;
      case "default":
      default:
        // no sorting or filtering, show all
        break;
    }

    return products;
  }, [filter, categoryID]);

  return (
    <div>
      {/* Title and Filter Dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-5 mb-8 gap-4">
        <h1 className="text-3xl font-bold">{categoryName}</h1>
        <div>
          <label htmlFor="filter" className="sr-only">
            Filter Products
          </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="in-stock">In Stock</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center mt-20 italic">
            No products available.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <Card
              key={product.productID}
              productID={product.productID}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              imageUrl="/goldenBall.png"
            />
          ))
        )}
      </div>
    </div>
  );
}
