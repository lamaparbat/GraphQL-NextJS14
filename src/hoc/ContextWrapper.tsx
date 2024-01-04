'use client';

import React from 'react';

import client from '@/config/graphql';
import { ApolloProvider } from '@apollo/client';

const ContextWrapper = ({ children }: any) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default ContextWrapper;