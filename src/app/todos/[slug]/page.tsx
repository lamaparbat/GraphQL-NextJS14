'use client';

import { query } from "@/graphql/query";
import { useQuery } from "@apollo/client";

export default function Todo({ searchParams, params}: any) {
  const { data, loading } = useQuery(query);

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
