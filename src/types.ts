export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  age: string;
  image: string;
  features: string[];
  ingredients: string;
  benefits: string[];
  preparation: string[];
  nutrition: { label: string; value: string }[];
  category: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
