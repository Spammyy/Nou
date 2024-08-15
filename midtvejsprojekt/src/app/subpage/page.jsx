import Link from "next/link";
import { getData } from "./data";

const Page = async ({ searchParams }) => {
  const id = searchParams.id;

  const data = await getData(id);
  const subimg = [
    "whatwedo-small.png",
    "maintainable-small.png",
    "getintouch-small.png"
  ];
  const emails = ["it@coolish.com", "pr@coolish.com", "mn@coolish.com"];
  let colors = "";
  if(id == "66b9d1984e9e4d5c528d8fe9"){

    colors = "bg-gradient-to-b from-slate-100 to-sky-200";

  }
  
  if(id == "65ba293a4e9df836af9e1127"){

    colors = "bg-gradient-to-b to-amber-700 from-slate-50";

  }
  if(id == "64b9d1224e9e4d5c528d8fe6"){

    colors = "bg-gradient-to-b to-sky-700 from-zinc-50";

  }




  return (
    <div className={colors}>
    <div className="w-4/5 mx-auto pt-7 ">
      <div>
        <figure>
          <Link href={"/"}>
            <img
              className="w-24"
              src={"assets/img/" + data.subpage.back}
              alt="Back Button"
            />
          </Link>
        </figure>
      </div>
      <div className="flex mx-auto mt-7">
        <div className="w-1/3">
          <figure>
            <img
              className="object-cover w-2/3"
              src={"assets/img/" + data.subpage.banner}
              alt="Banner"
            />
          </figure>
        </div>
        <div className="flex-col justify-center w-2/3 p-4 ">
          <h1 className="mb-10 text-3xl font-bold">{data.subpage.title}</h1>
          <p className="pb-20 text-lg">{data.subpage.text}</p>
          <div className="flex">
            {subimg.map((item, index) => (
              <img className="w-full p-10 pb-3" src={"assets/img/" + item} key={index} />
            ))}
          </div>
          <div className="flex m-auto space-x-5 justify-evenly">
            {emails.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            </div>
            <p className="w-40 mt-10 ml-auto text-lg font-bold text-center text-white bg-black">{data.text}</p> 
        </div>
      </div>
    </div>   
    </div>
  );
};

export default Page;
