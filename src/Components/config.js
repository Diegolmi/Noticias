export const categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
export const getApiUrl = categoria => `https://newsapi.org/v2/top-headlines?category=${categoria}&country=ar&apiKey=31b67895e76146a394e7aa2ce586091f`