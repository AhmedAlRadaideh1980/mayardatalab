import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  message: string;
  fileName?: string;
  fileData?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, institution, message, fileName, fileData }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission from:", email);

    // Prepare email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Institution:</strong> ${institution}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      ${fileName ? `<p><strong>Attached File:</strong> ${fileName}</p>` : ''}
    `;

    // Prepare email options
    const emailOptions: any = {
      from: "Contact Form <onboarding@resend.dev>",
      to: ["radaidehstat@yahoo.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: emailHtml,
      reply_to: email,
    };

    // Add attachment if file exists
    if (fileData && fileName) {
      // Extract base64 data from data URL
      const base64Data = fileData.split(',')[1];
      emailOptions.attachments = [
        {
          filename: fileName,
          content: base64Data,
        },
      ];
    }

    const emailResponse = await resend.emails.send(emailOptions);

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
