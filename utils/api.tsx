const apiKey = "8eab43e7";
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}`

export const fetchMovies = async (title:string, year?:number) => {
    const res = await fetch(`${baseUrl}&s=${title}`)
    const data = await res.json();
    return data;
}

export const fetchSingleMovie = async (id:number) => {
    const res = await fetch(`${baseUrl}&i=${id}&plot=full`)
    const data = await res.json();
    return data;
}