export const categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
export const paises = ['ae', 'ar','at','au', 'be', 'bg', 'br','ca','fr','gb','ie','it','jp','rs','ru','us','ve','za']
export const getApiUrl = (categoria, pais) => `https://newsapi.org/v2/top-headlines?category=${categoria}&country=${pais}&apiKey=31b67895e76146a394e7aa2ce586091f`