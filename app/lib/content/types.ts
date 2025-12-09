// Type definitions for content data

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  specifications?: Record<string, string>;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  values: string[];
  mission: string;
  certificates?: string[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
  timestamp?: Date;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  product?: string;
  quantity?: string;
  message: string;
  timestamp?: Date;
}

