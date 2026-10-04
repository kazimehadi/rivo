'use client'
import {useEffect,useState} from 'react'
import {AnimatePresence,motion,useScroll,useSpring} from 'framer-motion'
import {useCart} from '../lib/store'
import {useI18n} from '../lib/i18n'
import {Socials} from './Socials'
export default function Header(){
  const {scrollYProgress}=useScroll(),w=useSpring(scrollYProgress,{stiffness:120,damping:25})
  const {t,n,lang}=useI18n(),count=useCart(s=>s.items.reduce((a,i)=>a+i.qty,0)),toggle=useCart(s=>s.toggle),setLang=useCart(s=>s.setLang),[menu,setMenu]=useState(false)
  useEffect(()=>{document.documentElement.lang=lang},[lang])
  const links=[['#shop','nav_shop'],['#about','nav_about'],['#contact','nav_contact']]
  return(<><header className="sticky top-0 z-50 border-b border-navy/10 bg-[#F5F6F6]/90 backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-4 md:h-[72px] md:px-6">
      <a href="#top" className="flex items-center gap-2 text-xl font-bold tracking-[.14em] text-navy md:text-[22px]"><span className="h-[42px] w-10 mix-blend-multiply" style={{background:'url(/logo.jpg) -85.5px -24.75px/211px auto'}}/>RIVO</a>
      <nav className="hidden gap-8 text-[15px] font-medium md:flex">{links.map(([h,k])=><a key={k} href={h} className="hover:text-deep">{t(k)}</a>)}</nav>
      <div className="flex items-center gap-2">
        <div className="relative flex rounded-full bg-navy/10 p-1 text-xs font-bold">{(['en','bn'] as const).map(l=>(<button key={l} onClick={()=>setLang(l)} className="relative px-3 py-1.5" aria-label={l==='en'?'English':'বাংলা'}>{lang===l&&<motion.span layoutId="lang" className="absolute inset-0 rounded-full bg-navy"/>}<span className={`relative ${lang===l?'text-white':''}`}>{l==='en'?'EN':'বাং'}</span></button>))}</div>
        <button onClick={()=>toggle(true)} aria-label={t('cart')} className="btn-navy !px-4 !py-2.5">{t('cart')}<b className="ml-2 grid h-[22px] min-w-[22px] place-items-center rounded-full bg-teal text-xs text-navy">{n(count)}</b></button>
        <button onClick={()=>setMenu(m=>!m)} aria-label={t('menu')} className="grid h-11 w-11 place-content-center gap-1.5 md:hidden"><motion.span animate={{rotate:menu?45:0,y:menu?4:0}} className="block h-0.5 w-6 bg-navy"/><motion.span animate={{rotate:menu?-45:0,y:menu?-4:0}} className="block h-0.5 w-6 bg-navy"/></button>
      </div></div><motion.div style={{scaleX:w}} className="h-[3px] origin-left bg-teal"/></header>
    <AnimatePresence>{menu&&<motion.div initial={{opacity:0,y:-24}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-24}} className="fixed inset-0 z-40 flex flex-col justify-between bg-navy px-6 pb-10 pt-28 md:hidden">
      <nav className="flex flex-col gap-5">{links.map(([h,k])=><a key={k} href={h} onClick={()=>setMenu(false)} className="font-display text-5xl font-semibold text-white">{t(k)}</a>)}</nav><Socials size={52}/></motion.div>}</AnimatePresence></>)
}
