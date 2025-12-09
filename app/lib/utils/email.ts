import { Resend } from 'resend';
import { companyInfo } from '../content/company';
import { ContactFormData, QuoteFormData } from './validation';

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const resend = getResend();
    if (!resend) {
      console.error('RESEND_API_KEY is not set');
      return {
        success: false,
        message: 'Configurația email nu este disponibilă. Vă rugăm să ne contactați direct.',
      };
    }

    await resend.emails.send({
      from: 'Selmaster Contact <onboarding@resend.dev>',
      to: companyInfo.email,
      subject: `Contact nou de la ${data.name}`,
      html: `
        <h2>Mesaj nou de contact</h2>
        <p><strong>Nume:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ''}
        <p><strong>Mesaj:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return {
      success: true,
      message: 'Mesajul a fost trimis cu succes! Vă vom contacta în curând.',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou sau să ne contactați direct.',
    };
  }
}

export async function sendQuoteEmail(data: QuoteFormData): Promise<{ success: boolean; message: string }> {
  try {
    const resend = getResend();
    if (!resend) {
      console.error('RESEND_API_KEY is not set');
      return {
        success: false,
        message: 'Configurația email nu este disponibilă. Vă rugăm să ne contactați direct.',
      };
    }

    await resend.emails.send({
      from: 'Selmaster Quote <onboarding@resend.dev>',
      to: companyInfo.email,
      subject: `Solicitare ofertă de la ${data.name}`,
      html: `
        <h2>Solicitare ofertă nouă</h2>
        <p><strong>Nume:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        ${data.product ? `<p><strong>Produs:</strong> ${data.product}</p>` : ''}
        ${data.quantity ? `<p><strong>Cantitate:</strong> ${data.quantity}</p>` : ''}
        <p><strong>Mesaj:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return {
      success: true,
      message: 'Solicitarea de ofertă a fost trimisă cu succes! Vă vom contacta în curând.',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'A apărut o eroare la trimiterea solicitării. Vă rugăm să încercați din nou sau să ne contactați direct.',
    };
  }
}

