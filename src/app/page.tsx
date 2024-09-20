import Image from "next/image";
import Book from "./book-client";
import { client } from "@/sanity/lib/client";

export default async function Home() {
    let query=`*[_type=="books"]{
        book_name
}`;

const res=await client.fetch(query);
  console.log(res);

  return (
    
    <div> Book   </div>
  );
}
