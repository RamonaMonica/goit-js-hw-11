
const apiKey = '41047672-9f467c2c15573cbfffd855f4e'; 

export const fetchImages = async (query, page = 1) => {
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
