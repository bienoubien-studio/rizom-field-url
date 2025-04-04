
import { collection, defineConfig } from 'rizom';
import { text } from 'rizom/fields';

const Pages = collection('pages', {
	group: 'content',
  url: (doc) => doc.title,
	fields: [text('title').isTitle()]
});

export default defineConfig({
  database: 'rizom-field-url.sqlite',
  collections: [Pages],
  areas: []
});
