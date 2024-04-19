/** @type {import('./$types').Actions} */
// this file is used to write "actions" which interface with frontend DOM and API endpoints | actions are stored in key value structure format
export const actions = {
      default: async ({ request }) => {
            const formData = await request.formData();
            const email = formData.get('email');
            const name = formData.get('name');
            const phone = formData.get('phone');
            // Process the form data and perform actions
            console.log(email, name, phone)
            return { success: true };
      }
};