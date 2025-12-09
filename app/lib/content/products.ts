import { Product, ProductCategory } from './types';

export const products: Product[] = [
  {
    id: 'cheresta-rasinoase',
    name: 'Cherestea Rășinoase',
    category: 'cheresta',
    description: 'Cherestea din speciile de rășinoase molid și brad, prelucrată prin linii de tăiere de ultima generație.',
    images: ['https://www.selmaster.ro/uploaded_files/ggg(2).png'],
    specifications: {
      'Specie': 'Molid și Brad',
      'Calitate': 'Premium',
      'Prelucrare': 'Linii de tăiere de ultima generație'
    }
  },
  {
    id: 'lambriuri-rasinoase',
    name: 'Lambriuri Rășinoase',
    category: 'lambriuri',
    description: 'Lambriuri de înaltă calitate din rășinoase.',
    images: ['https://www.selmaster.ro/uploaded_files/ggg(2).png'],
    specifications: {
      'Material': 'Rășinoase',
      'Calitate': 'Premium'
    }
  },
  {
    id: 'brichete-fag-ruf',
    name: 'Brichete din Fag RUF',
    category: 'brichete',
    description: 'Brichete din fag RUF de înaltă calitate.',
    images: ['https://www.selmaster.ro/uploaded_files/ggg(2).png'],
    specifications: {
      'Material': 'Fag',
      'Tip': 'RUF'
    }
  },
  {
    id: 'peleti-rasinoase',
    name: 'Peleti Rășinoase A1 EnPlus',
    category: 'peleti',
    description: 'Peleti rășinoase de calitate A1 EnPlus.',
    images: ['https://www.selmaster.ro/uploaded_files/ggg(2).png'],
    specifications: {
      'Calitate': 'A1 EnPlus',
      'Material': 'Rășinoase'
    }
  }
];

export const productCategories: ProductCategory[] = [
  {
    id: 'cheresta',
    name: 'Cherestea',
    description: 'Cherestea de înaltă calitate din rășinoase',
    products: products.filter(p => p.category === 'cheresta')
  },
  {
    id: 'lambriuri',
    name: 'Lambriuri',
    description: 'Lambriuri din rășinoase',
    products: products.filter(p => p.category === 'lambriuri')
  },
  {
    id: 'brichete',
    name: 'Brichete',
    description: 'Brichete din fag RUF',
    products: products.filter(p => p.category === 'brichete')
  },
  {
    id: 'peleti',
    name: 'Peleti',
    description: 'Peleti rășinoase A1 EnPlus',
    products: products.filter(p => p.category === 'peleti')
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getCategoryById(id: string): ProductCategory | undefined {
  return productCategories.find(c => c.id === id);
}

