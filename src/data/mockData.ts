import { Product, Purchase } from '../types/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Quinoa',
    category: 'Grains',
    price: 5.99,
    sustainabilityScore: 9.2,
    healthScore: 9.5,
    description: 'Sustainably sourced organic quinoa',
    ingredients: ['100% Organic Quinoa'],
    environmentalImpact: 'Low water usage, sustainable farming practices',
    healthImpact: 'High in protein, fiber, and essential nutrients'
  },
  {
    id: '2',
    name: 'Plant-based Protein Bar',
    category: 'Snacks',
    price: 2.99,
    sustainabilityScore: 8.5,
    healthScore: 8.0,
    description: 'Natural protein bar made from plant sources',
    ingredients: ['Dates', 'Almonds', 'Pea Protein', 'Cocoa'],
    environmentalImpact: 'Minimal processing, recyclable packaging',
    healthImpact: 'Good source of protein and healthy fats'
  }
];

export const purchaseHistory: Purchase[] = [
  {
    id: '1',
    productId: '1',
    date: new Date('2024-03-15'),
    quantity: 2,
    totalPrice: 11.98
  },
  {
    id: '2',
    productId: '2',
    date: new Date('2024-03-14'),
    quantity: 3,
    totalPrice: 8.97
  }
];