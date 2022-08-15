import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';





function MyApp({ Component, pageProps }) {

    NProgress.configure({ showSpinner: false });

    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    });
  
    Router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });


  return (
    <>
    <Head>
            <title>Real Estate</title>
            <link rel="icon" href="/favicon.jpg" />
        </Head>
        
        <ChakraProvider>
        <Box maxWidth='1200px' m='auto' bg='gray.50'>
            <header>
                <Navbar />
            </header>
            <main>
                <Component {...pageProps}/>
            </main>
            <footer>
                {<Footer/>}
            </footer>
        </Box>
        </ChakraProvider>
        </>
  )
}


export default MyApp
