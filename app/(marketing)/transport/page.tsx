import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Transport - ${SITE_NAME}`,
  description: 'Servicii de transport rutier internațional și intern pentru produse lemnoase',
};

export default function TransportPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Transport Rutier Internațional</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dacă aveți nevoie de transport pentru marfa Dvs, Selmaster Vest Srl vă pune la dispoziție camioanele disponibile și potrivite mărfii exact la locul de încărcare indicat de Dvs. în România sau oriunde în Europa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card title="Transport Intern">
            <p className="text-gray-700 mb-4">
              Oferim servicii de transport în toată România, cu camioane adaptate tipului de marfă și nevoilor dumneavoastră.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Livrare rapidă și sigură în toată țara</li>
              <li>• Camioane potrivite mărfii</li>
              <li>• Prețuri competitive</li>
              <li>• Termene de livrare flexibile</li>
              <li>• Asigurare marfă inclusă</li>
            </ul>
          </Card>

          <Card title="Transport Internațional">
            <p className="text-gray-700 mb-4">
              Transportăm produsele dumneavoastră în toată Europa, cu respectarea tuturor standardelor de calitate și a legislației în vigoare.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Transport în toată Europa</li>
              <li>• Documentație completă și legală</li>
              <li>• Asigurare marfă</li>
              <li>• Tracking în timp real</li>
              <li>• Suport pentru vamă și documente</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <Card title="De Ce Să Ne Alegeți?">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experiență</h4>
                <p className="text-gray-700 text-sm">
                  Peste 22 de ani de experiență în transportul produselor lemnoase
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Fiabilitate</h4>
                <p className="text-gray-700 text-sm">
                  Livrări la timp, cu respectarea termenelor convenite
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Flexibilitate</h4>
                <p className="text-gray-700 text-sm">
                  Soluții adaptate nevoilor specifice ale fiecărui client
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Prețuri Competitive</h4>
                <p className="text-gray-700 text-sm">
                  Oferte personalizate pentru fiecare transport
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contactează-ne pentru Ofertă</h3>
            <p className="text-gray-700 mb-6">
              Pentru a primi o ofertă personalizată pentru serviciile noastre de transport, vă rugăm să ne contactați.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Solicită Ofertă Transport
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}

