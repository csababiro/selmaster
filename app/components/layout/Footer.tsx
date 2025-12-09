import Link from 'next/link';
import { companyInfo } from '@/lib/content/company';
import { FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-4">{companyInfo.name}</h3>
            <p className="mb-4">{companyInfo.description}</p>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Telefon:</span>{' '}
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white">
                  {companyInfo.phone}
                </a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white">
                  {companyInfo.email}
                </a>
              </p>
              <p>
                <span className="font-medium">Adresă:</span> {companyInfo.address}
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Link-uri Rapide</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.main.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>Copyright {currentYear} by {companyInfo.name}, toate drepturile rezervate</p>
        </div>
      </div>
    </footer>
  );
}

