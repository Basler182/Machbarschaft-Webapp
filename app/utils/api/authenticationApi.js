/**
 * HTTP request to perform login. Request is not cached and credentials are included to enable receiving cookie (see: https://github.com/github/fetch/issues/386)
 * @param email is the email address of the user to be authenticated
 * @param password is the password of the user to be authenticated
 * @returns {Promise<Response>} the unparsed response of the backend
 */
import apiUrl from './apiUrl';
import { objectToFormUrlEncoded } from './formUrlEncoder';

export const putLogin = (email, password) => {
  const endpoint = `${apiUrl()}auth/login`;

  const tmp = { email, password };
  const formBody = objectToFormUrlEncoded(tmp);

  return fetch(endpoint, {
    method: 'PUT',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    credentials: 'include',
    body: formBody,
  }).then((res) => res);
};

/**
 * HTTP request to perform user lookup (i.e. 'who is authenticated?')
 * @returns {Promise<Response>} the unparsed response of the backend (contains user information)
 */
export const getAuthenticate = () => {
  const endpoint = `${apiUrl()}auth/authenticate`;

  return fetch(endpoint, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
  }).then((res) => res);
};

/**
 * HTTP request to invalidate (logout) a user
 * @returns {Promise<Response>} the unparsed response of the backend
 */
export const putLogout = () => {
  const endpoint = `${apiUrl()}auth/logout`;

  return fetch(endpoint, {
    method: 'PUT',
    cache: 'no-cache',
    credentials: 'include',
  }).then((res) => res);
};
