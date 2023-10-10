import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clentac - Professional Cleaning Services',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="css/bootstrap.min.css"/>
        <link rel="stylesheet" href="css/animate.min.css"/>
        <link rel="stylesheet" href="css/magnific-popup.css"/>
        <link rel="stylesheet" href="css/fontawesome-all.min.css"/>
        <link rel="stylesheet" href="css/odometer.css"/>
        <link rel="stylesheet" href="css/jarallax.css"/>
        <link rel="stylesheet" href="css/swiper-bundle.min.css"/>
        <link rel="stylesheet" href="css/BeerSlider.css"/>
        <link rel="stylesheet" href="css/tg-cursor.css"/>
        <link rel="stylesheet" href="css/slick.css"/>
        <link rel="stylesheet" href="css/default.css"/>
        <link rel="stylesheet" href="css/aos.css"/>
        <link rel="stylesheet" href="css/style.css"/>
        <link rel="stylesheet" href="css/responsive.css"/>
      </head>
      <body className={inter.className}>{children}
      <Header/>
      <Navbar/>
      <Footer/>
      </body>
    </html>
  )
}
