import { API_BASE_URL } from './constants';
import { createHttpClient } from './createHttpClient';

export const httpClient = createHttpClient(API_BASE_URL);
