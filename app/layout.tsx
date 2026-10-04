import './globals.css'
import type {Metadata,Viewport} from 'next'
import {Bricolage_Grotesque,Hind_Siliguri,Manrope} from 'next/font/google'
import SmoothScroll from '../components/SmoothScroll'
import Cursor from '../components/Cursor'
import Cart from '../components/Cart'
import {WAFloat} from '../components/Socials'
const display=Bricolage_Grotesque({subsets:['latin'],variable:'--display'})
const bn=Hind_Siliguri({subsets:['bengali','latin'],weight:['400','500','600','700'],variable:'--bn'})
const sans=Manrope({subsets:['latin'],variable:'--sans'})
export const metadata:Metadata={title:"Rivo | Men's wear, Dhaka",description:'Formal shirts and pants. Order on WhatsApp.',icons:{icon:'/logo.jpg'}}
export const viewport:Viewport={width:'device-width',initialScale:1}
export default function Layout({children}:{children:React.ReactNode}){
  return(<html lang="en" className={`${display.variable} ${bn.variable} ${sans.variable}`}><body><SmoothScroll/><Cursor/>{children}<Cart/><WAFloat/></body></html>)
}
