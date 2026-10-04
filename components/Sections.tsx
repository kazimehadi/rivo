'use client'
import {useI18n} from '../lib/i18n'
import {Socials} from './Socials'
export function Marquee(){
  const {t}=useI18n(),row=t('mq').split('|').map(w=><span key={w} className="mx-6">{w} <i className="not-italic text-teal">✦</i></span>)
  return(<div aria-hidden className="overflow-hidden whitespace-nowrap bg-navy py-4 font-display text-2xl font-medium text-white md:text-[28px]"><div className="mq inline-block">{row}{row}{row}{row}</div></div>)
}
export function About(){
  const {t}=useI18n()
  return(<section id="about" className="mx-3 rounded-[32px] bg-navy py-16 text-white md:mx-4 md:rounded-[44px] md:py-24"><div className="mx-auto max-w-[1180px] px-5 md:px-6">
    <h2 className="max-w-3xl text-4xl !text-white md:text-6xl">{t('about_h')}</h2><p className="mt-4 max-w-xl text-slate-300">{t('about_p')}</p>
    <div className="mt-10 grid gap-7 md:grid-cols-3">{['f1','f2','f3'].map(k=><div key={k} className="border-t border-white/20 pt-4 text-slate-300"><b className="mb-1 block font-display text-2xl font-semibold text-teal">{t(k+'t')}</b>{t(k+'d')}</div>)}</div></div></section>)
}
export function Footer(){
  const {t}=useI18n()
  return(<footer id="contact" className="px-5 pb-10 pt-20 text-center md:pt-24"><h2 className="text-[clamp(38px,7.5vw,100px)]">{t('foot_h')}</h2>
    <div className="mt-7 flex flex-col items-center gap-5"><a className="btn-teal" href="https://wa.me/8801677878818" target="_blank" rel="noopener">{t('wa_btn')}</a><Socials size={52}/></div>
    <small className="mt-14 block text-slate-500">{t('rights')}</small></footer>)
}
