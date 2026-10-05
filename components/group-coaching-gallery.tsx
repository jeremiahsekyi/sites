import Image from "next/image";
import styles from "./pilot.module.css";
const moments = [
 {image:"shared-moments",title:"Room to be yourself.",alt:"Two participants laughing together during speaking practice",style:styles.galleryWide},
 {image:"learn-together",title:"Learn from each other.",alt:"A coach and participants listening and discussing around a table",style:styles.gallerySmall},
 {image:"confidence-in-practice",title:"Confidence, in practice.",alt:"A smiling participant beside a microphone during a speaking session",style:styles.galleryPortrait},
 {image:"coach-in-action",title:"Guidance you can put to work.",alt:"A coach demonstrating a speaking technique beside microphones",style:styles.gallerySmall},
];
export function GroupCoachingGallery(){return <section className={`${styles.wrap} ${styles.sessionGallery}`} aria-labelledby="session-gallery-heading"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Moments from our past sessions</p><h2 id="session-gallery-heading">The practice. The people.<br/><em>The energy that brings it together.</em></h2></div><p>A glimpse of the speaking practice, feedback and connection behind our academy. The Class of 2027 brings this spirit to our online group coaching programme.</p></div><div className={styles.galleryGrid}>{moments.map((moment)=><figure className={`${styles.galleryMoment} ${moment.style}`} key={moment.image} data-reveal="scale"><Image src={`/images/academy/${moment.image}.webp`} alt={moment.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 45vw"/><figcaption>{moment.title}</figcaption></figure>)}</div></section>;}
