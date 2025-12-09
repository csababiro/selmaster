import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { companyInfo } from '@/lib/content/company';

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Despre Noi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{companyInfo.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card title="Ce Facem">
            <ul className="space-y-2 text-gray-700">
              <li>• Producem și comercializăm cherestea din speciile de rășinoase molid și brad</li>
              <li>• Lambriuri rășinoase</li>
              <li>• Brichete din fag RUF</li>
              <li>• Peleti rășinoase A1 EnPlus</li>
            </ul>
          </Card>

          <Card title="Misiune și Valori">
            <p className="text-gray-700 mb-4">{companyInfo.mission}</p>
            <ul className="space-y-2 text-gray-700">
              {companyInfo.values.map((value, index) => (
                <li key={index}>• {value}</li>
              ))}
            </ul>
          </Card>

          <Card title="De Ce Noi?">
            <p className="text-gray-700">
              Având experiența de peste 22 de ani în acest domeniu, compania noastră asigură servicii de cea mai înaltă calitate și un loc în fruntea firmelor de profil din Oradea, dispunând de cel mai mare stoc de produse lemnoase de pe piața actuală.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/despre-noi">
            <Button size="lg">Află Mai Mult</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

