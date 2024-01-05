'use client';

import { GetTodosByIdQuery } from "@/graphql/query";
import { useQuery } from "@apollo/client";

export default function Todo({ searchParams, params}: any) {
  const { slug } = params ?? {};
  
  const { data, loading } = useQuery(GetTodosByIdQuery, { 
    variables: { id: slug}
  });
  const details = data?.getTodosById;

  return (
    <>
      {loading && <span>Loading...</span>}
      <li className=" border-b-0 border-white p-2">{details?._id}:  <b>{details?.title}</b></li>
    </>
  )
}
