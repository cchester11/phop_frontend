import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load ({ params }) {
      if(params) {
            const image = decodeURIComponent(params.slug)

            return { image }
      }

      error(404, "No Image Provided");
}