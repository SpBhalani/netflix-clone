const API_KEY = "9ee7d4025353ca17d143cc05bf1b0eb7";

const request = {
    fetchTrending : `/trending/all/day?api_key=${API_KEY}`,
    fetchOriginals : `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchAction:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance : `/discover/movie?api_key=${API_KEY}&with_genres=10749` ,
    fetchDocumentory: `/discover/movie?api_key=${API_KEY}&with_genres=99`  
}
export default request;