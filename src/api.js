export const ENDPOINT = 'https://pixabay.com/api/';
export const API_KEY = '41047672-9f467c2c15573cbfffd855f4e';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};

