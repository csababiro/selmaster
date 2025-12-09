import { NextResponse } from 'next/server';
import { sendQuoteEmail } from '@/lib/utils/email';
import { quoteFormSchema } from '@/lib/utils/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validationResult = quoteFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, message: 'Datele introduse nu sunt valide.' },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendQuoteEmail(validationResult.data);

    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 500 });
    }
  } catch (error) {
    console.error('Error processing quote form:', error);
    return NextResponse.json(
      { success: false, message: 'A apărut o eroare la procesarea formularului.' },
      { status: 500 }
    );
  }
}

