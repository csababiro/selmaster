import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/utils/email';
import { contactFormSchema } from '@/lib/utils/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, message: 'Datele introduse nu sunt valide.' },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendContactEmail(validationResult.data);

    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 500 });
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, message: 'A apărut o eroare la procesarea formularului.' },
      { status: 500 }
    );
  }
}

