
import Banner from "./components/Banner";
import Cards from "./components/Cards";



export default function Home() {
  return (
    <div  id="home">
      
      <div className="flex flex-col items-center justify-center mt-40 space-y-4">
        <h1 className="text-4xl font-bold text-myRed text-center px-2">A World of Sweet Delight at DoniaSweets</h1>
        <p className="text-center text-xl text-gray-500 px-2">
          At <span className="text-myRed font-bold">DoniaSweets</span>, we believe in making every occasion sweeter with our carefully crafted, high-quality confections.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Banner />
      </div>

      <div className="flex flex-col items-center justify-center mt-10 space-y-4" id="cakes">
        <h1 className="text-4xl font-bold text-myRed text-center">Signature Cakes</h1>
      </div>
      <div className="p-10 flex">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Cards />
        </div>
      </div>
      
    </div>
  );
}

