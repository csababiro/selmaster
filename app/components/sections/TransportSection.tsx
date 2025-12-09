import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function TransportSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transport Rutier Internațional</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dacă aveți nevoie de transport pentru marfa Dvs, Selmaster Vest Srl vă pune la dispoziție camioanele disponibile și potrivite mărfii exact la locul de încărcare indicat de Dvs. în România sau oriunde în Europa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card title="Transport Intern">
            <p className="text-gray-700 mb-4">
              Oferim servicii de transport în toată România, cu camioane adaptate tipului de marfă.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Livrare rapidă și sigură</li>
              <li>• Camioane potrivite mărfii</li>
              <li>• Prețuri competitive</li>
            </ul>
          </Card>

          <Card title="Transport Internațional">
            <p className="text-gray-700 mb-4">
              Transportăm produsele dumneavoastră în toată Europa, cu respectarea tuturor standardelor de calitate.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Transport în toată Europa</li>
              <li>• Documentație completă</li>
              <li>• Asigurare marfă</li>
            </ul>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/transport">
            <Button size="lg">Află Mai Mult</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

