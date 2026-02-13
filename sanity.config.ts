// sanity.config.ts (add at top and update schema)
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import note from './sanity/schemas/note';

export default defineConfig({
  name: 'syntax-orchard',
  title: 'The Syntax Orchard',
  projectId: 'm55iuxch',
  dataset: 'production',

  plugins: [
    structureTool(),
  ],

  schema: {
    types: [note],
  },
});