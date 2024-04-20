/** @type {import('./$types').Actions} */
// this file is used to write "actions" which interface with frontend DOM and API endpoints | actions are stored in key value structure format
export const actions = {
      default: async ({ request, event }) => {
            try {
                  const formData = await request.formData();
                  const email = formData.get('email');
                  const name = formData.get('name');
                  const phone = formData.get('phone');

                  // Process the form data and perform actions
                  const response = await fetch('http://localhost:5173/api/contact', {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                              name,
                              email,
                              phone
                        })
                  });

                  if (!response.ok) {
                        throw new Error('Failed to send email');
                  }

                  return await response.json();
            } catch (error) {
                  // Handle errors here
                  console.error('Error sending email:', error);
                  return { error: 'Error sending email' };
            }
      }
};
