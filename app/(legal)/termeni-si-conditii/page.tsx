import { Metadata } from 'next';
import { legalContent } from '@/lib/content/legal';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Termeni și Condiții - ${SITE_NAME}`,
  description: 'Termeni și condiții de utilizare - Selmaster Vest',
};

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          {legalContent.terms.title}
        </h1>
        <div
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: legalContent.terms.content }}
        />
      </div>
    </div>
  );
}

