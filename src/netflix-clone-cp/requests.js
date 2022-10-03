const API_KEY = "b5d0de38dbe4ff4bb1cae576ea3649ab";


const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
    fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchAdventure: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
    fetchMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
    fetchCrime: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
    fetchSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
    fetchRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
}

export default requests;

// this is a functional module not a component