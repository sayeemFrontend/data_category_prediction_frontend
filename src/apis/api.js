import axios from 'axios';

const base_url = 'http://134.209.97.28:8000';
const headers = {};

function joinParams(options = {}) {
  return Object.keys(options)
    .map((k) => `${k}=${options[k]}`)
    .join('&');
}

export async function getData({ endpoint = '', options = {} }) {
  const url = `${base_url}/${endpoint}?${joinParams(options)}`;
  try {
    const response = await axios.get(url, { headers: headers });
    if (response.status) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}
