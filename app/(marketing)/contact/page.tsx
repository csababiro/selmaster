import { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Card } from '@/components/ui/Card';
import { companyInfo } from '@/lib/content/company';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Contact - ${SITE_NAME}`,
  description: 'Contactați Selmaster Vest pentru produse lemnoase, oferte și informații',
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contactează-ne!</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pentru orice întrebare, sugestie sau nelămurire privind produsele noastre, livrarea, plata sau politica noastră de confidențialitate contactați-ne completând formularul de mai jos, sau pe numărul de telefon. Ne bucurăm să fim alături de dumneavoastră!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card title="Informații de Contact">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                <a href={`tel:${companyInfo.phone}`} className="text-blue-600 hover:text-blue-700">
                  {companyInfo.phone}
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <a href={`mailto:${companyInfo.email}`} className="text-blue-600 hover:text-blue-700">
                  {companyInfo.email}
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Adresă</h4>
                <p className="text-gray-700">{companyInfo.address}</p>
              </div>
            </div>
          </Card>

          <Card title="Formular de Contact">
            <ContactForm />
          </Card>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card title="Solicită Ofertă">
            <p className="text-gray-700 mb-4">
              Completați formularul de mai jos pentru a solicita o ofertă personalizată pentru produsele noastre.
            </p>
            <QuoteForm />
          </Card>
        </div>
      </div>
    </div>
  );
}

