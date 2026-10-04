const P:Record<string,string>={wa:'M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.4A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.2z',
fb:'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z'}
const LINKS=[['wa','https://wa.me/8801677878818','WhatsApp','bg-[#25D366]'],['fb','https://facebook.com/rivo.bd','Facebook','bg-[#1877F2]'],['ig','https://instagram.com/rivo.bd','Instagram','bg-[linear-gradient(45deg,#f9a825,#d62976,#4f5bd5)]']]
export function Icon({k}:{k:string}){
  return k==='ig'?<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
  :<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden><path d={P[k]}/></svg>
}
export function Socials({size=44}:{size?:number}){
  return(<div className="flex gap-3">{LINKS.map(([k,h,l,c])=>(<a key={k} href={h} target="_blank" rel="noopener" aria-label={l} data-cursor="" className={`grid place-items-center rounded-full text-white transition hover:-translate-y-1 hover:shadow-lg ${c}`} style={{width:size,height:size}}><Icon k={k}/></a>))}</div>)
}
export function WAFloat(){
  return(<a href="https://wa.me/8801677878818" target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"><Icon k="wa"/></a>)
}
