import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { companyInfo } from '@/lib/content/company';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Depozit Cherestea Rășinoase
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Având experiența de peste 22 de ani în acest domeniu, compania noastră asigură servicii de cea mai înaltă calitate și un loc în fruntea firmelor de profil din Oradea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/produse">
              <Button variant="secondary" size="lg">
                Vezi Produsele
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                Contactează-ne
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

