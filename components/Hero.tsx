'use client'
import {motion} from 'framer-motion'
import {useI18n} from '../lib/i18n'
import Slider from './Slider'
export default function Hero(){
  const {t,lang}=useI18n(),h=t('h1')
  return(<section id="top" className="mx-auto max-w-[1180px] px-4 pb-10 pt-8 md:px-6 md:pt-14">
    <div className="grid items-end gap-6 md:grid-cols-[1.7fr_1fr] md:gap-10">
      <h1 key={lang} aria-label={h} className="text-[clamp(38px,7vw,88px)]">{h.split(' ').map((w,i)=>(<span key={i} className="mr-[.22em] inline-block overflow-hidden pb-[.1em] align-bottom"><motion.span className="inline-block" initial={{y:'115%'}} animate={{y:0}} transition={{duration:.8,delay:.05+i*.07,ease:[.2,.8,.2,1]}}>{w}</motion.span></span>))}</h1>
      <div><p className="mb-5 text-base text-slate-600 md:text-lg">{t('sub')}</p>
        <div className="flex flex-wrap gap-3"><a href="#shop" data-cursor="Shop" className="btn-navy">{t('cta_shop')}</a><a href="https://wa.me/8801677878818" target="_blank" rel="noopener" className="btn-ghost">{t('cta_chat')}</a></div></div>
    </div><Slider/></section>)
}
