import axios from 'axios';
import { resolve } from '../_functions/resolve';
import { Resolved } from '../_types';

const githubAPIUri = 'https://api.github.com/search';

// getUser retrieves a list of users by the passed in userQuery parameter
export const getUser = async (userQuery: string) :Promise<Resolved> => resolve(axios.get(`${githubAPIUri}/users`, {
  params: {
    q: encodeURI(userQuery), sort: 'followers', order: 'asc', per_page: 20,
  },
}));

// getRepositoriesByUser retrieves a list of repositories for a given user sorted by the most number
// of stars
export const getRepositoriesByUser = async (userQuery: string) :Promise<Resolved> => resolve(axios.get(`${githubAPIUri}/repositories`, {
  params: {
    q: encodeURI(`user:${userQuery}`), sort: 'stars', order: 'desc', per_page: 10,
  },
}));
