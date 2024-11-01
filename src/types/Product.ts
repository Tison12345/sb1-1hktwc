export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  sustainabilityScore: number;
  healthScore: number;
  description: string;
  ingredients: string[];
  environmentalImpact: string;
  healthImpact: string;
}

export interface Purchase {
  id: string;
  productId: string;
  date: Date;
  quantity: number;
  totalPrice: number;
}