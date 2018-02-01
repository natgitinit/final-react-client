const NYT_API_KEY = process.env.REACT_APP_API_KEY

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'
                 + `api-key=${NYT_API_KEY}&q=`;



 export function searchQuery(query) {
   return fetch(BASE_URL.concat(query))
   .then(res => res.json())
 }
