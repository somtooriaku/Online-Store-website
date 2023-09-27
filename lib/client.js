import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'n50u2p2m',
  dataset: 'production',
  apiVersion: '2023-06-15',
  useCdn: true,
  token: 'skMbBtyNGsgAnxeBULLzypwkqKRqQFjxeERuRRSdAkfnAbQcCg3VcGpLzY95yyIXbi8dOde7CUMAECpGwIoJ8FxvyFJay0JpNM0okdrZUM9PRXpQy18c0JxVNA8UNy3VDRddHxBFZJfQShTpig5mVl5aqwRuKponkFTkUkHwZ62dsLUdLykx',
}
);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);