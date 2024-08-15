import { AllData } from "./data";
import Link from "next/link";


const Page = async () => {
  const data = await AllData();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-sky-200">
    <header>
        <figure className="pt-6 ml-10">
          <img src="/assets/img/logo-final.png" alt="Logo" className="h-32"/>  
        </figure>
    </header>
    <main>
      <div className="flex p-8">  
      {data &&
        data.map((item, index) => (
          <div className="w-1/3">
          <Link
          key={item._id}
          href={{
            pathname:'subpage',
            query: {id: item._id}
          }}>
          <img className="w-1/2 m-auto " src={"/assets/img/" + item.img} alt="Front Image" key={item._id}/>
          </Link>
          </div>
        ))} 
      </div>
        <p className="w-64 pr-6 mt-10 ml-auto mr-12 text-lg font-semibold text-right text-white bg-black">And yet... more to come</p>      
    </main>
    </div>
  );
};
export default Page;
