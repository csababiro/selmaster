import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { companyInfo } from '@/lib/content/company';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Despre Noi - ${SITE_NAME}`,
  description: 'Despre Selmaster Vest - Experiență de peste 22 de ani în domeniul produselor lemnoase',
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Despre Noi</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{companyInfo.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card title="Ce Facem">
            <ul className="space-y-3 text-gray-700">
              <li>• Producem și comercializăm cherestea din speciile de rășinoase molid și brad</li>
              <li>• Lambriuri rășinoase</li>
              <li>• Brichete din fag RUF</li>
              <li>• Peleti rășinoase A1 EnPlus</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Calitatea rămâne caracteristica definitorie a companiei Selmaster, produsele lemnoase fiind importate din Ucraina și prelucrate prin linii de tăiere de ultima generație.
            </p>
          </Card>

          <Card title="Misiune și Valori">
            <p className="text-gray-700 mb-4">{companyInfo.mission}</p>
            <h4 className="font-semibold text-gray-900 mb-2">Valorile de bază ale companiei noastre sunt:</h4>
            <ul className="space-y-2 text-gray-700">
              {companyInfo.values.map((value, index) => (
                <li key={index}>• {value}</li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <Card title="De Ce Noi?">
            <p className="text-gray-700 mb-4">
              Având experiența de peste 22 de ani în acest domeniu, compania noastră asigură servicii de cea mai înaltă calitate și un loc în fruntea firmelor de profil din Oradea, dispunând de cel mai mare stoc de produse lemnoase de pe piața actuală, colaborând cu importante firme de construcții.
            </p>
            <p className="text-gray-700">
              Clienții noștri au beneficiat întotdeauna de <strong>cele mai bune prețuri, de transportul produselor</strong> și <strong>cele mai rapide termene de livrare.</strong>
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card title="Calitate Optimă">
            <p className="text-gray-700">
              Calitatea rămâne caracteristica definitorie a companiei Selmaster, produsele lemnoase fiind importate din Ucraina și prelucrate prin linii de tăiere de ultima generație.
            </p>
          </Card>

          <Card title="Experiență">
            <p className="text-gray-700">
              Cu peste 22 de ani de experiență în domeniu, ne-am construit o reputație solidă bazată pe încredere, calitate și promptitudine.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

