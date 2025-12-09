import { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { productCategories } from '@/lib/content/products';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Produse - ${SITE_NAME}`,
  description: 'Produse lemnoase de înaltă calitate: cherestea, lambriuri, brichete, peleti',
};

export default function ProductsPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Produsele Noastre</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferim o gamă largă de produse lemnoase de înaltă calitate, importate și prelucrate conform celor mai înalte standarde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <Card key={category.id} title={category.name} description={category.description}>
              <p className="text-gray-600 mb-4 text-sm">
                {category.products.length} {category.products.length === 1 ? 'produs' : 'produse'} disponibile
              </p>
              <Link href={`/produse/${category.id}`}>
                <Button variant="outline" className="w-full">
                  Vezi Produse
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

