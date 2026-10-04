'use client'
import {useEffect} from 'react'
import Lenis from 'lenis'
export default function SmoothScroll(){
  useEffect(()=>{const l=new Lenis({anchors:true});let r=0;const f=(t:number)=>{l.raf(t);r=requestAnimationFrame(f)};r=requestAnimationFrame(f);return()=>{cancelAnimationFrame(r);l.destroy()}},[])
  return null
}
