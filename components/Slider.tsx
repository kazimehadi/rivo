'use client'
import {useEffect,useState} from 'react'
import Image from 'next/image'
import {AnimatePresence,motion} from 'framer-motion'
import {useI18n} from '../lib/i18n'
const S=[{img:'/products/combo-1.jpg',t:'s1t',s:'s1s'},{img:'/products/combo-2.jpg',t:'s2t',s:'s2s'}]
const V={enter:(d:number)=>({x:d>=0?'100%':'-100%'}),center:{x:0},exit:(d:number)=>({x:d>=0?'-30%':'30%',opacity:0})}
export default function Slider(){
  const {t}=useI18n(),[[i,dir],set]=useState<[number,number]>([0,0])
  const go=(d:number)=>set(([k])=>[(k+d+S.length)%S.length,d])
  useEffect(()=>{const id=setTimeout(()=>go(1),5500);return()=>clearTimeout(id)},[i])
  const s=S[i]
  return(<div className="relative mt-8 h-[78vh] min-h-[460px] overflow-hidden rounded-[24px] bg-navy md:mt-12 md:h-[70vh] md:rounded-[32px]" data-cursor="Drag">
    <AnimatePresence initial={false} custom={dir}>
      <motion.div key={i} custom={dir} variants={V} initial="enter" animate="center" exit="exit" transition={{duration:.7,ease:[.2,.8,.2,1]}} drag="x" dragConstraints={{left:0,right:0}} dragElastic={.2} onDragEnd={(_,{offset})=>Math.abs(offset.x)>60&&go(offset.x<0?1:-1)} className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2"><Image src={s.img} alt={t(s.t)} fill priority sizes="(max-width:768px) 100vw,600px" className="object-cover"/></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent md:bg-gradient-to-r md:from-navy md:via-navy md:to-transparent md:[background-size:55%_100%] md:bg-no-repeat"/>
        <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-6 text-white md:w-1/2 md:justify-center md:p-14">
          <h2 className="text-4xl !text-white md:text-6xl">{t(s.t)}</h2><p className="max-w-sm text-slate-200">{t(s.s)}</p>
          <a href="#shop" className="btn-teal mt-2 w-fit">{t('look')}</a></div>
      </motion.div></AnimatePresence>
    <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 md:bottom-7 md:right-7">
      {S.map((_,k)=><button key={k} aria-label={`Slide ${k+1}`} onClick={()=>set([k,k>i?1:-1])} className={`h-2 rounded-full transition-all ${k===i?'w-8 bg-teal':'w-2 bg-white/60'}`}/>)}
      <button aria-label="Previous" onClick={()=>go(-1)} className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-teal hover:text-navy">←</button>
      <button aria-label="Next" onClick={()=>go(1)} className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-teal hover:text-navy">→</button></div>
  </div>)
}
