"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ArrowLeft, ArrowRight, Expand } from "lucide-react";
import styles from "./proof-pages.module.css";

const moments = [
  { src: "/images/workshop-speaker.webp", alt: "A participant presenting to the group during a Speech Factory workshop", title: "The courage to take the floor.", label: "Speaking practice" },
  { src: "/images/group-coaching.webp", alt: "Jeremiah facilitating a conversation with workshop participants around a table", title: "Ideas made stronger, together.", label: "Group learning" },
  { src: "/images/team-culture.webp", alt: "The Speech Factory team discussing ideas in a recording session", title: "Good work starts with listening.", label: "Behind the scenes" },
];

export function WorkGallery() {
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (active !== null && !dialog.current?.open) dialog.current?.showModal();
  }, [active]);
  function close() { dialog.current?.close(); setActive(null); lastTrigger.current?.focus(); }
  return <>
    <div className={styles.gallery}>{moments.map((moment, index) => <button key={moment.src} className={styles.galleryItem} onClick={event => {lastTrigger.current = event.currentTarget; setActive(index);}} aria-label={`Enlarge: ${moment.title}`} data-reveal>
      <div className={styles.galleryPhoto}><Image src={moment.src} alt={moment.alt} fill sizes="(max-width: 700px) 90vw, 33vw" /><span className={styles.expand}><Expand size={18}/></span></div>
      <span className={styles.micro}>{moment.label}</span><strong>{moment.title}</strong><ArrowUpRight className={styles.galleryArrow} size={22}/>
    </button>)}</div>
    <dialog ref={dialog} className={styles.lightbox} onCancel={event=>{event.preventDefault();close();}} onClick={event=>{if(event.target === event.currentTarget)close();}} onKeyDown={event=>{if(active===null)return;if(event.key==='ArrowRight')setActive((active+1)%moments.length);if(event.key==='ArrowLeft')setActive((active+moments.length-1)%moments.length);}} aria-label="The Speech Factory photo gallery">
      {active !== null && <div className={styles.lightboxBody}><button onClick={close} aria-label="Close gallery" className={styles.close}><X/></button><div className={styles.lightboxPhoto}><Image src={moments[active].src} alt={moments[active].alt} fill sizes="90vw"/></div><div className={styles.lightboxCaption}><button aria-label="Previous photo" onClick={()=>setActive((active+moments.length-1)%moments.length)}><ArrowLeft/></button><p>{moments[active].title}<small>{active+1} / {moments.length}</small></p><button aria-label="Next photo" onClick={()=>setActive((active+1)%moments.length)}><ArrowRight/></button></div></div>}
    </dialog>
  </>;
}

export function ReadingProgress() {
  const progress = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    let frame = 0;
    function update(){ const total=document.documentElement.scrollHeight-window.innerHeight; if(progress.current)progress.current.style.transform=`scaleX(${total>0?window.scrollY/total:0})`; frame=0; }
    function request(){ if(!frame)frame=requestAnimationFrame(update); }
    update(); window.addEventListener('scroll',request,{passive:true});window.addEventListener('resize',request);
    return ()=>{window.removeEventListener('scroll',request);window.removeEventListener('resize',request);cancelAnimationFrame(frame);};
  },[]);
  return <div ref={progress} className={styles.progress} aria-hidden="true"/>;
}
