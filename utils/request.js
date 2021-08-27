import axios from 'axios';
import cookie from 'js-cookie';
import { baseUrl } from './urls';

function getAccessToken() {
  return cookie.get('auth_token') === undefined
    ? ''
    : cookie.get('auth_token');
}

function clearAccessToken() {
  cookie.remove('auth_token');
}

function apiRequest(url, params, query = null) {
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
    Accept: 'application/json',
  };
  let requestUrl = '';
  if (query === null) {
    requestUrl = baseUrl + url.relativeUrl;
  } else {
    requestUrl = baseUrl + url.relativeUrl + query;
  }

  return axios({
    method: url.method,
    url: requestUrl,
    data: params,
    headers,
  });
}

export { apiRequest, clearAccessToken, getAccessToken };
