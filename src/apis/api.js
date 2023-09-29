import axios from 'axios';

const base_url = '';
const headers = {};

export async function postData({ endpoint = '', formData = {} }) {
  const url = `${base_url}/${endpoint}`;
  try {
    const response = axios.post(url, formData, { headers: headers });
    if (response.status) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

function joinParams(options = {}) {
  return Object.keys(options)
    .map((k) => `${k}=${options[k]}`)
    .join('&');
}

export async function getData({ endpoint = '', options = {} }) {
  const url = `${base_url}/${endpoint}?${joinParams(options)}`;
  try {
    const response = axios.get(url, { headers: headers });
    if (response.status) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}
