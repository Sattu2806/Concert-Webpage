import Image from 'next/image'
import Container from './components/Container'
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero"
import Section from './components/Hero/Section'
import Service from './components/Services/Service'
import Book from './components/Book/Book'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <div>
    <Container>
      <div className=' relative '>
        <Navbar/>
        <svg className='absolute top-0 left-0 right-0 bottom-0 -z-20 w-full h-auto opacity-20 ' width="1502" height="1145" viewBox="0 0 1502 1145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L181.247 1119.45L329.925 1L496.52 1119.45L653.09 1L835.258 1144L987.988 1L1160.34 1119.45L1289.61 1L1501 1119.45M1 1119.45L165.462 1L349.549 1119.45L496.52 1L653.09 1119.45L815.633 1L1009.53 1119.45L1160.34 1L1348.27 1119.45L1501 1" stroke="url(#paint0_linear_420_4)"/>
        <defs>
        <linearGradient id="paint0_linear_420_4" x1="751" y1="1" x2="751" y2="1144" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.72"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        </defs>
        </svg>
          <Hero/>
      </div>
      <Section/>
      <hr className='w-full mt-16' />
      <Service/>
      <Book/>
    </Container>
    <Footer/>
    </div>
  )
}


