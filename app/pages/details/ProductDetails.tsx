import React, { useState } from "react";
import useCountCartItems from "~/store/cart/countCartItems";

const product = {
  productID: 1,
  name: "Beach-Themed Resin Decor Piece",
  price: 1000,
  rating: 4.3,
  reviewCount: 38,
  imageUrl:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  description: `Bring a touch of the ocean into your space with this handcrafted piece featuring a beautiful beach-themed resin design on the top surface. Each item is individually poured, layered, and finished to create a smooth, glass-like finish with realistic wave textures and coastal colors. No two pieces are ever the same, making your item completely unique.

Crafted with high-quality resin, pigments, and fine details, this piece is both decorative and functional. It adds a calm, coastal aesthetic to any room and makes a thoughtful gift for anyone who loves the sea, beach décor, or handmade art.`,
  reviews: [
    {
      id: 1,
      name: "Alice",
      rating: 5,
      comment: "Very comfortable and stylish!",
    },
    {
      id: 2,
      name: "Bob",
      rating: 4,
      comment: "Good quality, but a bit tight.",
    },
  ],
};

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.538 1.118l-3.388-2.461a1 1 0 00-1.176 0l-3.388 2.46c-.783.57-1.838-.197-1.538-1.119l1.287-3.973a1 1 0 00-.364-1.118L2.037 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
    </svg>
  );
}

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCountCartItems();
  const { productID, price, imageUrl, name } = product;

  const decreaseQty = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const increaseQty = () => {
    setQuantity((q) => q + 1);
  };

  const addToCart = () => {
    addItem({ productID, name, price, imageUrl, quantity });
    setQuantity(1);
    alert("Added to cart");
  };

  return (
    <div className="md:p-6 bg-white rounded-lg md:shadow-md mt-5">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={"/beach.jpg"}
            alt={product.name}
            className="rounded-lg w-full "
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl text-green-600 font-semibold mb-4">
              {product.price.toFixed(2)} BDT
            </p>

            {/* Rating */}
           {/*  <div className="flex items-center mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} filled={i <= Math.floor(product.rating)} />
              ))}
              <span className="ml-3 text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div> */}

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={decreaseQty}
                className="px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100 transition"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <input
                type="text"
                readOnly
                value={quantity}
                className="w-12 text-center text-lg font-semibold border-l border-r border-gray-300 outline-none cursor-pointer"
              />
              <button
                onClick={increaseQty}
                className="px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="bg-gray-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition cursor-pointer"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
     {/*  <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
        {product.reviews.length === 0 ? (
          <p className="text-gray-500 italic">No reviews yet.</p>
        ) : (
          <ul className="space-y-6">
            {product.reviews.map((review) => (
              <li
                key={review.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} filled={i <= review.rating} />
                  ))}
                  <span className="ml-3 font-semibold text-gray-800">
                    {review.name}
                  </span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
}

export default ProductDetails;
