'use client'
import {useState} from 'react'
import Image from 'next/image'
import {AnimatePresence,motion,useSpring} from 'framer-motion'
import {PRODUCTS,orderLink,type Cat,type Product} from '../lib/products'
import {useCart} from '../lib/store'
import {useI18n} from '../lib/i18n'
const cats:Cat[]=['shirt','pant','check'],hero:Record<Cat,string>={shirt:'/products/navy-shirt.jpg',pant:'/products/grey-pant.jpg',check:'/products/blue-stripe.jpg'}
function Card({p,open}:{p:Product;open:(p:Product)=>void}){
  const {lang,tk}=useI18n(),rx=useSpring(0,{stiffness:150,damping:15}),ry=useSpring(0,{stiffness:150,damping:15}),name=lang==='bn'?p.bn:p.en
  return(<motion.div layout initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.9}} role="button" tabIndex={0} data-cursor="View" onClick={()=>open(p)} onKeyDown={e=>e.key==='Enter'&&open(p)}
    onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();ry.set(((e.clientX-r.left)/r.width-.5)*10);rx.set(-((e.clientY-r.top)/r.height-.5)*10)}} onMouseLeave={()=>{rx.set(0);ry.set(0)}}
    style={{rotateX:rx,rotateY:ry,transformPerspective:800}} className="group rounded-2xl bg-white p-2.5 shadow-sm transition-shadow hover:shadow-2xl hover:shadow-navy/20 md:rounded-[22px] md:p-3.5">
    <motion.div layoutId={`img-${p.id}`} className="relative aspect-[3/4] overflow-hidden rounded-xl md:rounded-2xl"><Image src={p.img} alt={name} fill sizes="(max-width:768px) 50vw,25vw" className="object-cover transition duration-500 group-hover:scale-105"/></motion.div>
    <h3 className="mx-1 mt-3 font-sans text-sm font-bold text-ink md:text-[15px]">{name}</h3><p className="mx-1 mt-1 font-bold text-deep">{tk(p.price)}</p></motion.div>)
}
export default function Shop(){
  const {lang,t,tk}=useI18n(),[f,setF]=useState<'all'|Cat>('all'),[sel,setSel]=useState<Product|null>(null),[size,setSize]=useState('L'),add=useCart(s=>s.add)
  const open=(p:Product)=>{setSize('L');setSel(p)}
  return(<section id="shop" className="mx-auto max-w-[1180px] px-4 py-16 md:px-6 md:py-24">
    <h2 className="max-w-3xl text-4xl md:text-7xl">{t('cats_h')}</h2>
    <div className="noscroll -mx-4 mt-8 flex snap-x gap-4 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">{cats.map(c=>(<a key={c} href="#grid" data-cursor="Shop" onClick={()=>setF(c)} className="group relative aspect-[4/5] min-w-[72%] snap-center overflow-hidden rounded-[28px] md:min-w-0"><Image src={hero[c]} alt="" fill sizes="(max-width:768px) 72vw,380px" className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent"/><h3 className="absolute bottom-5 left-5 right-5 text-3xl !text-white">{t('cat_'+c)}</h3></a>))}</div>
    <div id="grid" className="noscroll mt-14 flex scroll-mt-24 gap-2 overflow-x-auto pb-1">{(['all',...cats] as const).map(c=>(<button key={c} onClick={()=>setF(c)} className="relative shrink-0 whitespace-nowrap rounded-full border-[1.5px] border-navy/20 px-5 py-2.5 text-[13px] font-bold">{f===c&&<motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-navy"/>}<span className={`relative ${f===c?'text-white':''}`}>{c==='all'?t('all'):t('cat_'+c)}</span></button>))}</div>
    <motion.div layout className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:gap-5 lg:grid-cols-4"><AnimatePresence mode="popLayout">{PRODUCTS.filter(p=>f==='all'||p.cat===f).map(p=><Card key={p.id} p={p} open={open}/>)}</AnimatePresence></motion.div>
    <AnimatePresence>{sel&&<motion.div key="ov" className="fixed inset-0 z-[90] bg-navy/50" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSel(null)}/>}
    {sel&&<motion.div key="m" exit={{opacity:0}} className="pointer-events-none fixed inset-0 z-[100] grid place-items-end md:place-items-center md:p-4">
      <motion.div initial={{opacity:0,y:60}} animate={{opacity:1,y:0}} className="pointer-events-auto grid max-h-[92vh] w-full max-w-3xl gap-5 overflow-auto rounded-t-[28px] bg-white p-5 md:grid-cols-2 md:gap-7 md:rounded-[28px] md:p-7">
        <motion.div layoutId={`img-${sel.id}`} className="relative aspect-[4/5] max-h-[42vh] w-full overflow-hidden rounded-2xl md:max-h-none"><Image src={sel.img} alt={lang==='bn'?sel.bn:sel.en} fill sizes="(max-width:768px) 100vw,420px" className="object-cover"/></motion.div>
        <div><button onClick={()=>setSel(null)} aria-label="Close" className="float-right grid h-10 w-10 place-items-center text-xl">✕</button>
          <p className="font-bold text-deep">{t('cat_'+sel.cat)}</p><h2 className="my-1.5 text-3xl md:text-4xl">{lang==='bn'?sel.bn:sel.en}</h2><p className="mb-2.5 text-xl font-bold text-deep">{tk(sel.price)}</p><p>{lang==='bn'?sel.dbn:sel.den}</p>
          <p className="mb-2 mt-5 font-bold">{t('size')}</p><div className="flex gap-2">{['M','L','XL'].map(s=><button key={s} onClick={()=>setSize(s)} className={`h-12 w-14 rounded-xl border-[1.5px] font-bold transition ${size===s?'border-navy bg-navy text-white':'border-navy/20 hover:border-teal'}`}>{s}</button>)}</div>
          <div className="mt-6 flex flex-wrap gap-2.5"><button onClick={()=>{add(sel.id,size);setSel(null)}} className="btn-navy">{t('add')}</button>
          <a href={orderLink([{id:sel.id,size,qty:1}])} target="_blank" rel="noopener" className="btn-teal">{t('order')}</a></div></div></motion.div></motion.div>}</AnimatePresence>
  </section>)
}
