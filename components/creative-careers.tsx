import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import styles from "./creative-careers.module.css";

const editingPhoto = "https://images.pexels.com/photos/11063289/pexels-photo-11063289.jpeg?auto=compress&cs=tinysrgb&w=1600";
const craft = [
  { title: "Make the visual language.", label: "Content creation & design", items: ["Create graphics and visual assets for social media, programmes, campaigns and the website.", "Develop creative concepts that support our brand and communication goals.", "Create and adapt content for Instagram, LinkedIn, Facebook and YouTube.", "Keep The Speech Factory’s visual identity consistent across every format."] },
  { title: "Find the story in the footage.", label: "Video editing", items: ["Edit short-form videos for Reels, TikTok, YouTube Shorts and LinkedIn.", "Edit longer-form videos and recorded content when required.", "Add captions, text, transitions, music and other visual elements with purpose.", "Repurpose existing footage into engaging new content."] },
  { title: "Give good content a life.", label: "Social media & content management", items: ["Support the planning and execution of our content calendar.", "Prepare and publish approved content across relevant platforms.", "Stay up to date with content and social media trends, and suggest ideas to grow our reach and engagement.", "Review content performance and identify opportunities to improve."] },
  { title: "Take it through to the finish.", label: "Collaboration & project support", items: ["Work with the Programme Manager on campaigns, launches, events and creative projects.", "Take briefs, manage assigned tasks and meet agreed deadlines.", "Receive feedback openly and put it into practice.", "Keep creative files and content assets organised."] },
];

export function CareersOpening() {
  return <section className={styles.opening}>
    <div className={styles.wrap}>
      <div className={styles.topline}><span>THE SPEECH FACTORY / CAREERS</span><span>02 OPEN ROLES · REMOTE</span></div>
      <div className={styles.intro}><h1>Good ideas need<br /><em>people who make.</em></h1><p>We help people communicate with clarity, confidence and impact. Join the team bringing that work to more people, through strong relationships and content worth paying attention to.</p></div>
      <div className={styles.roles}>
        <a href="#creative-associate"><span>01 / CREATE</span><h2>Creative Associate <ArrowUpRight aria-hidden="true" /></h2><p>Part-time · Remote</p><small>Apply by 23 October 2026</small></a>
        <a href="#business-development"><span>02 / CONNECT</span><h2>Business Development Associate <ArrowUpRight aria-hidden="true" /></h2><p>Full-time · Remote</p><small>Apply by 15 October 2026, AoE</small></a>
      </div>
    </div>
  </section>;
}

export function CreativeRole() {
  return <article id="creative-associate" className={styles.creative}>
    <header className={styles.roleHero}>
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>01 / CREATIVE ASSOCIATE</p>
        <div className={styles.heroTitle}><h2>From first idea<br />to <em>final cut.</em></h2><div><p className={styles.badge}>PART-TIME · REMOTE</p><p>Bring your eye, your ideas and your follow-through. Help shape how The Speech Factory looks, sounds and connects.</p><a className={styles.yellowButton} href="#creative-apply">Apply for Creative Associate <ArrowDown size={18} aria-hidden="true" /></a></div></div>
        <div className={styles.collage}>
          <figure className={styles.editing}><Image src={editingPhoto} alt="Video editing software on a desktop monitor and laptop" fill unoptimized className={styles.photo} sizes="(max-width: 700px) 100vw, 65vw" /><figcaption>THE CRAFT / EDITING & DESIGN</figcaption></figure>
          <figure className={styles.podcast}><Image src="/images/podcast.webp" alt="Jeremiah and Susane recording a conversation for The Speech Factory" fill unoptimized className={styles.photo} sizes="(max-width: 700px) 50vw, 30vw" /><figcaption>OUR WORLD / HUMAN STORIES</figcaption></figure>
          <div className={styles.captionTile}><span>Think it.</span><span>Make it.</span><span>Make it matter.</span></div>
        </div>
        <p className={styles.credit}>Editing photograph: <a href="https://www.pexels.com/photo/computer-and-a-laptop-with-editing-software-11063289/" target="_blank" rel="noreferrer">Amar Preciado / Pexels</a>. Podcast photograph: The Speech Factory.</p>
      </div>
    </header>
    <div className={styles.wrap}>
      <section className={styles.overview}><div><p className={styles.eyebrow}>THE ROLE</p><h3>A creative eye.<br />An owner’s mindset.</h3></div><div><p>The Creative Associate supports our content and creative work across video, graphic design and social media. You’ll help us create engaging content, strengthen our online presence and bring ideas to life.</p><p>This is a hands-on role for someone who enjoys visual storytelling and turning ideas into engaging digital experiences. You’ll work closely with the <strong>Programme Manager</strong> on day-to-day content needs and execution, and with the <strong>Founder</strong> on creative projects and campaigns.</p><p>Take a brief. Bring your own ideas. Follow through to a strong final product.</p></div></section>
      <section className={styles.craft}><p className={styles.eyebrow}>YOUR CREATIVE REMIT</p><h3>Four ways to leave your mark.</h3>{craft.map((area,i)=><div className={styles.craftRow} key={area.label}><span className={styles.number}>0{i+1}</span><div><p className={styles.eyebrow}>{area.label}</p><h4>{area.title}</h4></div><ul>{area.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</section>
      <section className={styles.fit}><div><p className={styles.eyebrow}>WHAT YOU BRING</p><h3>Taste. Skill.<br />Care for the details.</h3><ul><li>A strong creative eye and an understanding of visual storytelling.</li><li>Confidence with graphic design, video editing, social media and digital content.</li><li>Initiative, organisation and the ability to manage multiple projects independently.</li><li>Openness to feedback, a willingness to learn and ideas you can turn into action.</li><li>Ownership of the quality of your work, from idea to execution.</li></ul></div><div><p className={styles.eyebrow}>EXPERIENCE & QUALIFICATIONS</p><h3>Let your work<br />do the talking.</h3><ul><li>Proven experience in graphic design and video editing.</li><li>A strong portfolio showing both design and video work.</li><li>Proficiency in tools such as Canva, Adobe Photoshop, Illustrator, Descript or CapCut.</li><li>Experience creating content for social media.</li><li>Strong communication and organisational skills.</li></ul><p className={styles.note}>We’re more interested in what you can create than simply how many years you’ve worked in a creative role.</p></div></section>
    </div>
    <section id="creative-apply" className={styles.apply}><div className={styles.wrap}><div className={styles.applyGrid}><div><p className={styles.eyebrow}>YOUR NEXT CREATIVE PROJECT STARTS HERE</p><h3>Show us what<br /><em>you can make.</em></h3><p>Creative Associate · Part-time · Remote</p><p className={styles.deadline}>Applications close <strong>23 October 2026</strong></p></div><div><h4>Send us these three things.</h4><ol><li>Your current CV.</li><li>A brief cover letter explaining why you’re interested and what you would bring to The Speech Factory.</li><li>A portfolio or links to your previous <strong>design and video work</strong>.</li></ol><a className={styles.darkButton} href="mailto:management@thespeechfactory.org?subject=Application%3A%20Creative%20Associate"><Mail size={18} aria-hidden="true" /> Apply for Creative Associate</a><a className={styles.email} href="mailto:management@thespeechfactory.org">management@thespeechfactory.org</a><p className={styles.small}>Attach your CV and cover letter, and include your portfolio links before sending.</p></div></div></div></section>
  </article>;
}
