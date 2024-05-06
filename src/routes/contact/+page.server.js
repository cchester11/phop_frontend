/** @type {import('./$types').Actions} */
// this file is used to write "actions" which interface with frontend DOM and API endpoints | actions are stored in key value structure format
export const actions = {
      default: async ({ request, event }) => {
            try {
                  const formData = await request.formData();
                  const email = formData.get('email');
                  const name = formData.get('name');
                  const phone = formData.get('phone');

                  // Input validation
                  if (!email || !name || !phone) {
                        throw new Error('Please provide all required fields');
                  }

                  // Validate email format
                  if (!validateEmail(email)) {
                        throw new Error('Invalid email format');
                  }

                  // Sanitize input
                  if (!sanitizeName(name)) {
                        throw new Error('Invalid Name')
                  }
                  if (!sanitizePhone(phone)) {
                        throw new Error('Invalid Phone Number')
                  }

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

// validate email
function validateEmail(string) {
      // will return a boolean value
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(string)
};

// ensure that input is not malicious 
function sanitizeName(input) {
      if (typeof input !== 'string') {
            throw new Error('Input must be a string');
      }
      return true;
};

function sanitizePhone(input) {
      // will return a boolean value
      const phoneNumberRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
      return phoneNumberRegex.test(input)
};