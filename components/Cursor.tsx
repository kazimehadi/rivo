'use client'
import {useEffect,useState} from 'react'
import {motion,useMotionValue,useSpring} from 'framer-motion'
export default function Cursor(){
  const x=useMotionValue(-100),y=useMotionValue(-100),sx=useSpring(x,{damping:26,stiffness:320}),sy=useSpring(y,{damping:26,stiffness:320})
  const [label,setLabel]=useState(''),[hov,setHov]=useState(false)
  useEffect(()=>{
    const m=(e:MouseEvent)=>{x.set(e.clientX);y.set(e.clientY)}
    const o=(e:MouseEvent)=>{const t=e.target as HTMLElement;setLabel((t.closest('[data-cursor]') as HTMLElement|null)?.dataset.cursor||'');setHov(!!t.closest('a,button'))}
    addEventListener('mousemove',m);addEventListener('mouseover',o)
    return()=>{removeEventListener('mousemove',m);removeEventListener('mouseover',o)}
  },[x,y])
  const d=label?86:hov?52:36
  return(<div className="[@media(hover:none)]:hidden">
    <motion.div style={{x,y}} className="pointer-events-none fixed left-0 top-0 z-[200] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-navy"/>
    <motion.div style={{x:sx,y:sy}} className="pointer-events-none fixed left-0 top-0 z-[200]">
      <motion.div animate={{width:d,height:d,backgroundColor:label?'rgba(31,181,176,.92)':'rgba(31,181,176,0)'}} className="-translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full border-[1.5px] border-teal text-xs font-bold text-white">{label}</motion.div>
    </motion.div></div>)
}
