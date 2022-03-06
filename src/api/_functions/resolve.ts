import { AxiosResponse } from 'axios';
import { Resolved } from '../_types';

export const resolve = async (promise: Promise<AxiosResponse>): Promise<Resolved> => {
  const resolved: Resolved = { data: null, error: null };

  try {
    const data = await promise;
    resolved.data = data.data;
  } catch (error: any) {
    resolved.error = error;
  }
  return resolved;
};
