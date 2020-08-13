import axios from 'axios';

const imgApi = (query, page = 0) => {
  const key = '16836748-77bdb9d8e6a7ff11ccb0a1780';
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};
export default {
  imgApi,
};
