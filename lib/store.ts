import {create} from 'zustand'
import {persist} from 'zustand/middleware'
export type Item={id:number;size:string;qty:number}
export type Lang='en'|'bn'
type S={items:Item[];open:boolean;lang:Lang;add:(id:number,size:string)=>void;change:(i:number,d:number)=>void;toggle:(o:boolean)=>void;setLang:(l:Lang)=>void}
export const useCart=create<S>()(persist(set=>({items:[],open:false,lang:'en',
 add:(id,size)=>set(s=>({open:true,items:s.items.some(x=>x.id===id&&x.size===size)?s.items.map(x=>x.id===id&&x.size===size?{...x,qty:x.qty+1}:x):[...s.items,{id,size,qty:1}]})),
 change:(i,d)=>set(s=>({items:s.items.map((x,k)=>k===i?{...x,qty:x.qty+d}:x).filter(x=>x.qty>0)})),
 toggle:o=>set({open:o}),setLang:l=>set({lang:l})}),{name:'rivo-cart',partialize:s=>({items:s.items,lang:s.lang}),skipHydration:true}))
