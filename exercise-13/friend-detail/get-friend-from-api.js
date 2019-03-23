import axios from 'axios';

export default async function(friendId) {
  const response = await axios.get(`/api/friends/${friendId}`);

  return response.data;
}