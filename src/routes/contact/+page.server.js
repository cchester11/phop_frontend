/** @type {import('./$types').Actions} */
// this file is used to write "actions" which interface with frontend DOM and API endpoints | actions are stored in key value structure format
export const actions = {
      default: async ({ request, event }) => {
            const formData = await request.formData();
            const email = formData.get('email');
            const name = formData.get('name');
            const phone = formData.get('phone');
            // Process the form data and perform actions
            const response = await fetch('http://localhost/api/contact', {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: {
                        name: JSON.stringify(name),
                        email: JSON.stringify(email),
                        phone: JSON.stringify(phone)
                  }
            })

            return response.json();
      }
};