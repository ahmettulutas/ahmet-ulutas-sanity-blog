import createImageUrlBuilder from '@sanity/image-url';

import { dataset, projectId } from '../env';
import { getClient } from './client';
const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const getSanityImageConfig = () => getClient();

export const urlForImage = (source: any) =>
  imageBuilder.image(source).auto('format').fit('max');
