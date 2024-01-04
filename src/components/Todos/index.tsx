'use client';

import query from "@/graphql";
import { useQuery } from "@apollo/client";

export default function Todo() {
  const { data, error, loading } = useQuery(query);
  console.log(loading, data, error)
  return (
    <>
      {loading && <span>Loading...</span>}
    </>
  )
}
