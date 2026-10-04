'use client'
import {useEffect} from 'react'
import Image from 'next/image'
import {AnimatePresence,motion} from 'framer-motion'
import {useCart} from '../lib/store'
import {useI18n} from '../lib/i18n'
import {PRODUCTS,orderLink} from '../lib/products'
export default function Cart(){
  const {items,open,change,toggle}=useCart(),{t,n,tk,lang}=useI18n()
  useEffect(()=>{useCart.persist.rehydrate()},[])
  const total=items.reduce((a,i)=>a+PRODUCTS.find(p=>p.id===i.id)!.price*i.qty,0)
  return(<AnimatePresence>{open&&<>
    <motion.div key="o" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>toggle(false)} className="fixed inset-0 z-[90] bg-navy/45"/>
    <motion.aside key="d" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{type:'spring',damping:32,stiffness:280}} className="fixed right-0 top-0 z-[100] flex h-full w-full flex-col gap-4 bg-white p-5 sm:w-[420px] sm:p-6">
      <div className="flex items-center justify-between"><h3 className="text-3xl">{t('cart_title')}</h3><button onClick={()=>toggle(false)} aria-label="Close" className="grid h-10 w-10 place-items-center">✕</button></div>
      <div className="flex-1 overflow-auto">{items.length?items.map((i,k)=>{const p=PRODUCTS.find(x=>x.id===i.id)!;return(<div key={k} className="grid grid-cols-[64px_1fr] items-center gap-3.5 border-b border-slate-200 py-3"><div className="relative h-20 w-16 overflow-hidden rounded-lg"><Image src={p.img} alt="" fill sizes="64px" className="object-cover"/></div>
        <div><b>{lang==='bn'?p.bn:p.en}</b><small className="block text-slate-500">{t('size')} {i.size}, {tk(p.price)}</small><div className="mt-1.5 inline-flex items-center gap-3 rounded-full border border-slate-300 px-1 font-bold"><button className="h-8 w-8" onClick={()=>change(k,-1)} aria-label="Less">−</button>{n(i.qty)}<button className="h-8 w-8" onClick={()=>change(k,1)} aria-label="More">+</button></div></div></div>)}):<p className="py-8 text-slate-500">{t('cart_empty')}</p>}</div>
      <div className="flex justify-between text-lg"><span>{t('total')}</span><b>{tk(total)}</b></div>
      <a href={items.length?orderLink(items):undefined} target="_blank" rel="noopener" className={`btn-teal ${items.length?'':'pointer-events-none opacity-40'}`}>{t('order')}</a>
    </motion.aside></>}</AnimatePresence>)
}
