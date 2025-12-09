import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getCategoryById, getProductsByCategory, productCategories } from '@/lib/content/products';
import { SITE_NAME } from '@/lib/constants';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

// Required for static export - generate all category paths at build time
export function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getCategoryById(category);
  
  if (!categoryData) {
    return {
      title: `Categorie - ${SITE_NAME}`,
    };
  }

  return {
    title: `${categoryData.name} - ${SITE_NAME}`,
    description: categoryData.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryData = getCategoryById(category);
  const products = getProductsByCategory(category);

  if (!categoryData) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/produse" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            ← Înapoi la Produse
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{categoryData.name}</h1>
          <p className="text-lg text-gray-600 max-w-3xl">{categoryData.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} title={product.name} description={product.description}>
              {product.specifications && (
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Specificații:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <li key={key}>
                        <span className="font-medium">{key}:</span> {value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-4">
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Solicită Ofertă
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

