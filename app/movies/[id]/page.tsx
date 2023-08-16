import { fetchSingleMovie } from "@/utils/api";

const SingleMovie = async ({params}:any) => {
  
  const id = params.id;
  const res = await fetchSingleMovie(id);
  const {Title, Type, Actors, Writer, Director, Poster, Rated, Country, Genre, Plot, Language, imdbRating, imdbVotes, Runtime, Year} = res;
  return (
    <>
    <main className='min-h-[90vh] bg-bg'>

    <div className="row flex flex-wrap w-full min-h-[80vh] justify-center items-center gap-4 py-5 pt-10 md:px-10 px-3">

      <div className="col2 w-full flex justify-center items-center rounded-lg relative">
        <img src={Poster} alt={Title} className="object-contain w-[500px] h-[600px]"/>
      </div>

      <div className="col1">
        
        <p className="text-text text-lg capitalize">/{Type}</p>

        <div className="flex items-center justify-between gap-2 flex-wrap mb-10">
         <h2 className="sm:text-4xl text-xl font-semibold ">{Title}</h2>
          <p>Rated: <span className="font-semibold">{Rated}</span></p>
        </div>

        <p className="text-md font-semibold mb-3">
          Rating: {imdbRating} <span className="text-sm font-thin">/{imdbVotes} votes</span>
        </p>

        <p>
          <span className="text-lg font-semibold">Plot:</span> {Plot}
        </p>

        <div className="w-full md:mt-10 mt-5">
          <p><span className="font-semibold">Released:</span> {Year}</p>
          <p><span className="font-semibold">Duration:</span> {Runtime}</p>

          <p><span className="font-semibold">Genre:</span> {Genre}</p>
          <p><span className="font-semibold">Country:</span> {Country}</p>

          <p><span className="font-semibold">Cast:</span> {Actors}</p>
          <p><span className="font-semibold">Language:</span> {Language}</p>

          <p><span className="font-semibold">Writer:</span> {Writer}</p>
          <p><span className="font-semibold">Director:</span> {Director}</p>
        </div>

      </div>

    </div>

    </main>
    </>
  )
}

export default SingleMovie;
