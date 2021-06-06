import axios from 'axios';
import qs from 'qs';
import url from 'url';
// import { APP_ID } from '../commons/constants';
// import { logout } from '../utils/authenticate';
import { ACCESS_TOKEN, APP_ID } from '../commons/constant';
import getData from 'lodash/get';


const fetch = async (endpoint, config, authenticate, props) => {
  let token = null;
  if (authenticate) {
    token = authenticate;
  } else {
    token = await localStorage.getItem(ACCESS_TOKEN);
  }
  config.data =
    typeof config.data === 'object' ? JSON.stringify(config.data) : config.data;
  config.headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'x-access-token': token,
    'app-id': `${APP_ID}`,
  };
  const { method = 'GET', headers, data } = config;
  try {
    const instance = axios.create({
      timeout: 50000,
      headers,
    });
    const response = await instance(endpoint, {
      method,
      data,
    });

    return response;
  } catch (error) {
    // if (getData(error, 'response.status', '') == 401 ) {
    //   logout();
    // }
    
    throw  getData(error, 'response');
  }
};

const get = (endpoint, query, authenticate) => {
  if (query) {
    let parts = url.parse(endpoint, true);
    parts.query = { ...parts.query, ...query };
    parts.search = qs.stringify(parts.query);
    endpoint = url.format(parts);
  }
  return fetch(endpoint, { method: 'GET' }, authenticate);
};

const post = (endpoint, data, authenticate) => {
  return fetch(endpoint, { method: 'POST', data }, authenticate);
};

const put = (endpoint, data, authenticate) => {
  return fetch(endpoint, { method: 'PUT', data }, authenticate);
};

const patch = (endpoint, data, authenticate) => {
  return fetch(endpoint, { method: 'PATCH', data }, authenticate);
};

const del = (endpoint, data, authenticate) => {
  return fetch(endpoint, { method: 'DELETE', data }, authenticate);
};

const uploadFile = async (endpoint, data) => {
  let token = await localStorage.getItem(ACCESS_TOKEN);
  let headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    'x-access-token': token,
    // 'app-id': `${APP_ID}`,
  };
  try {
    const instance = axios.create({
      timeout: 10000,
      headers,
    });
    const response = await instance(endpoint, {
      method: 'POST',
      data,
    });
    return response;
  } catch (error) {
    // if (getData(error, 'response.status', '') == 401 ) {
    //   logout();
    // }
    throw  getData(error, 'response');
  }
}

export { get, put, post, patch, del, uploadFile };
