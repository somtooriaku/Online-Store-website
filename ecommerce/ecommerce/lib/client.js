import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient(
    {
  projectId: 's40dy5br',
  dataset: 'production',
  apiVersion: '2023-06-15',
  useCdn: true,
  token: 'skmiodXtAvSxYXHcrGBGQsMWiusLGPv7cSCPBmqDo31RHxXYgbkoLs12bo1nQ3FTU9F7VTha8tYSc6d3znQwzlNiXLWzRGKkPAGA67GGhf5Ln4z6Iv0LzW2zF1rLJT0FfDMD9oQymHZbn2keafYSSOtuAI5E5LpCMPobwLqzx9rOcjTZq25t',
}
);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);