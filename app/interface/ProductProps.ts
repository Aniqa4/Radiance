export interface ProductProps {
  _id: string;
  productName: string;
  productImage: string;
  price: number;
  discountedPrice: number | null;
  finalPrice: number;
  categoryName: string;
  categoryID: string;
  availableCopies: number;
  soldCopies: number | null;
  description: string;
  featured: boolean;
}
