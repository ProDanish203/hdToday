import { SearchBar } from "@/components";
import { fetchMovies } from "@/utils/api";
import Link from "next/link";

const Movies = async ({searchParams}:any) => {
  
  // const res = await fetchMovies(searchParams.title?.split(" ").join("+") || "Lord+Of+The+Rings");
  const res = await fetchMovies(JSON.stringify(searchParams.title) || "Lord+Of+The+Rings");
  const data = res.Search;

  return (
    <>
    <section className='min-h-[90vh] bg-bg py-10 md:px-10 px-3'>
      <SearchBar/>

      <div className="mt-10">
        <h3 className='text-3xl font-semibold'>Results: </h3>
      </div>

      <div className='cards flex flex-wrap w-full items-center justify-start gap-3 mt-10 px-2'>
      {
      !data ? (
      <div className="text-center md:text-5xl text-3xl font-bold w-full">
      No Results
      </div>
      ) :(
        <>
        {data?.map((item:any, index:number) => (
          <div key={item.imdbID}
          className="card max-w-[250px] min-w-[150px] w-full relative overflow-hidden md:mb-10 h-[330px] rounded-md shadow-md md:px-1 pb-2"
          >
            <Link href={`/movies/${item.imdbID}`}>
              <img src={item.Poster} alt={item.Title} title={item.Title} className="object-cover rounded-md h-[250px] w-full"/>
            </Link>
            <div className="mt-2 ">
              <Link href={`/movies/${item.imdbID}`}>
                <h2 className="text-[18px] mb-2 truncate" title={item.Title}>
                  {item.Title}
                </h2>
              </Link>
              <div className="flex items-center justify-between gap-2">
                <p>{item.Year}</p>
                <span
                className="p-0.5 px-1 rounded-md border-2 border-gray-400 bg-gray-200"
                >{item.Type}</span>
              </div>
            </div>

          </div>           
        ))}
        </>
      )}
      </div>

    </section>
    </>
  )
}

export default Movies;