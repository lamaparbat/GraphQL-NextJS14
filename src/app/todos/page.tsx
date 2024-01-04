'use client';


import { useQuery } from "@apollo/client";
import { query } from "@/graphql/query/todos";

export default function Todo() {
  const { data, loading } = useQuery(query);
console.log(data)
  return (
    <>
      {loading && <span>Loading...</span>}
      <ul className="p-10">
        {
          data?.getTodos?.map((todo: any, i: number) => (
            <li className=" border-b-0 border-white p-2">{i}:  {todo?.title}</li>
          ))
        }
      </ul>
    </>
  )
}
