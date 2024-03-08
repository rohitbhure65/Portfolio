import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rohit Bhure',
  description: 'Passionate Btech student with a keen interest in web development, eager to build engaging user experiences and create visually appealing websites.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="ROPijUA4ZNBrZdH-FYm_xJoKl8eN9PjNgv8t021I7Ds" />
        <meta name="keyword" content="rohit bhure" />
        <meta name='url' content='https://rohitbhure.vercel.app/' />
        <meta http-equiv="content-language" content="en-us" />
        <meta name="owner" content="Rohit Bhure" />
        <meta property="title" content="Rohit Bhure PortFolio" />
        <meta name='email' content='rohitbhure.cse@gmail.com' />
        <meta name='phone_number' content='8839178090' />

        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Rohit Bhure" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://rohitbhure.vercel.app/" />
        <meta property="og:title" content="Rohit Bhure PortFolio" />
        <meta property="og:description" content="Passionate Btech student with a keen interest in web development, eager to build engaging user experiences and create visually appealing websites." />
        {/* <meta property="og:image" content="<?php echo weburl; ?>/images/project/<?php echo $row['image']; ?>" /> */}
        <meta name='og:email' content='rohitbhure.cse@gmail.com' />
        <meta name='og:phone_number' content='8839178090' />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rohitbhure.vercel.app/" />
        <meta property="twitter:title" content="Rohit Bhure" />
        <meta property="twitter:description" content="Passionate Btech student with a keen interest in web development, eager to build engaging user experiences and create visually appealing websites." />
        {/* <meta property="twitter:image" content="<?php echo weburl; ?>/images/project/<?php echo $row['image']; ?>" /> */}
      </Head>
      <body className={inter.className}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BYKK8NBH86"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BYKK8NBH86');
          `}
        </Script>
      </body>
    </html>
  )
}
