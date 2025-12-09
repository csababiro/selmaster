import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { productCategories } from '@/lib/content/products';

export function ProductsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produsele Noastre</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferim o gamă largă de produse lemnoase de înaltă calitate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {productCategories.map((category) => {
            const firstProduct = category.products[0];
            return (
              <Card key={category.id} title={category.name} description={category.description}>
                {firstProduct?.images && firstProduct.images.length > 0 && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={firstProduct.images[0]}
                      alt={category.name}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <Link href={`/produse/${category.id}`}>
                  <Button variant="outline" className="w-full mt-4">
                    Vezi Produse
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/produse">
            <Button size="lg">Vezi Toate Produsele</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

