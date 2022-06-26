export type Category = {
  id: number;
  name: string;
  image: string;
};

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
}

export interface ProductsRequest {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}
