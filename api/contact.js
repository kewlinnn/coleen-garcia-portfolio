// API route handler for contact form submissions
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Destructure name, email, and message from the request body
    const { name, email, message } = req.body || {};

    // Validate that all required fields are present
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Send email using MailerSend API
    const response = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        // Use API key from environment variables for authentication
        Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Set sender email and name
        from: { email: process.env.FROM_EMAIL, name: "Portfolio Contact" },
        // Set recipient email and name
        to: [{ email: process.env.TO_EMAIL, name: "Me" }],
        // Set reply-to address to the user's email and name
        reply_to: { email, name },
        // Email subject includes sender's name
        subject: `New message from ${name}`,
        // Plain text version of the message
        text: message,
        // HTML version of the message
        html: `
          <h3>New portfolio message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p>${message}</p>
        `,
      }),
    });

    // If the response is not OK, throw an error with the message from MailerSend
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "MailerSend error");
    }

    // Respond with success if email was sent
    return res.status(200).json({ ok: true });
  } catch (err) {
    // Handle errors and respond with a 500 status code
    return res.status(500).json({ error: err.message });
  }
}
