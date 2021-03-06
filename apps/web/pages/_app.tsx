import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { setConfig } from 'cloudinary-build-url';

import AuthProvider from 'src/components/AuthProvider';
import Layout from 'src/components/Layout/Layout';

import useApollo from '@/hooks/useApollo';

import './styles.css';

setConfig({
  cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
});

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const client = useApollo(pageProps);
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default CustomApp;
