import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[90vh] relative bg-hero md:bg-center bg-right-top bg-cover bg-no-repeat">
    <div className="w-full min-h-[80vh] md:px-10 px-5 py-10 flex lg:flex-row flex-col items-center justify-center gap-4">

      <div className="flex-1">
        <h2 className="md:text-7xl text-4xl font-bold text-bg mb-5">
        "Unleash the Magic"
        </h2>

        <p className="text-bg md:text-lg text-md">
        Discover a realm of blockbuster hits and timeless classics at <span className="text-secondary">HDToday</span>. Immerse yourself in cinematic wonders and embark on a journey of limitless entertainment.
        </p>

        <Link href="/movies">
          <button className="text-bg bg-primary shadow-md rounded-full px-10 py-2.5 my-5 mt-8">
            Explore Movies
          </button>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center w-full rounded-lg">
        <Image src="/hero-image.jpg" width={600} height={600} alt="logo" className="object-contain rounded-md"/>
      </div>
    </div>

    </main>
  )
}
