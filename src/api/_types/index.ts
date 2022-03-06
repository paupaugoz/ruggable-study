import { AxiosError } from 'axios';

export enum SearchType {
    user = 'user',
    repositories = 'repositories'
}

export type Resolved = {
    data: any;
    error?: AxiosError | null;
}
