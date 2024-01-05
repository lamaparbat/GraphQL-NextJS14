'use client';


import { useQuery } from "@apollo/client";
import { GetAllTodosQuery } from "@/graphql/query/todos";
import Link from "next/link";

export default function Todo() {
  const { data, loading } = useQuery(GetAllTodosQuery);
  console.log(data)
  return (
    <>
      {loading && <span>Loading...</span>}
      <ul className="p-10">
        {
          data?.getTodos?.map((todo: any, i: number) => (
            <div className="flex">
              <li className=" border-b-0 border-white p-2">{i}:  {todo?.title}</li>
              <Link href={`/todos/${todo?._id}`} className="text-blue-500 underline" >Details</Link>
            </div>
          ))
        }
      </ul>
    </>
  )
}
