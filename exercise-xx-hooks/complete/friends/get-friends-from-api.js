import axios from 'axios';

export default async function() {
  const response = await axios.get('/api/friends');

  return response.data;
}