import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Sva polja su obavezna' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'DAEK Techvision Portfolio <onboarding@resend.dev>',
      to: 'daektechvision@gmail.com',
      subject: `Nov kontakt sa portfolio sajta: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            Nova poruka sa kontakt forme
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Ime:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Poruka:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #4f46e5; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="text-align: center; color: #666; font-size: 12px; margin-top: 30px;">
            <p>Ova poruka je poslata sa DAEK Techvision portfolio sajta</p>
            <p>Vreme: ${new Date().toLocaleString('sr-RS')}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Greška pri slanju poruke', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Poruka uspešno poslata!', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));

    return NextResponse.json(
      {
        error: 'Greška pri slanju poruke. Pokušajte ponovo kasnije.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined,
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
