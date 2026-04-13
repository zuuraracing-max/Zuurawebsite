// import React, { useEffect, useRef, useState } from 'react';
// import './App.css';
// import Background from './components/Background';
// import logoImg from './logoz.png'; // ← place your logo PNG at src/assets/logo.png

// /* ── Helper: letter-highlighted brand name ── */
// const BrandLetters = () => (
//   <>
//     <span className="hl">Z</span>
//     <span className="dim">U</span>
//     <span className="dim">U</span>
//     <span className="hl">R</span>
//     <span className="dim">A</span>
//     <span className="sp"> </span>
//     <span className="hl">R</span>
//     <span className="dim">A</span>
//     <span className="dim">C</span>
//     <span className="hl">I</span>
//     <span className="dim">N</span>
//     <span className="dim">G</span>
//   </>
// );

// /* ══════════════════════════════════════
//    INTRO OVERLAY — full screen logo pop
// ══════════════════════════════════════ */
// const IntroOverlay = ({ visible }) => {
//   if (!visible) return null;
//   return (
//     <div className="intro-overlay" id="introOverlay">
//       <div className="intro-logo-wrap">
//         <img className="intro-logo-img" src={logoImg} alt="ZUURA Racing" />
//         <div className="intro-brand-name"><BrandLetters /></div>
//         <div className="intro-tagline">Engineering Excellence at Full Throttle</div>
//       </div>
//     </div>
//   );
// };

// /* ══════════════════════════════════════
//    SECTIONS
// ══════════════════════════════════════ */
// const HomeSection = () => (
//   <section id="home">
//     <div className="home-meta">
//       <div className="home-meta-dot" />
//       <div className="home-meta-text">Student Racing Team</div>
//       <div className="home-meta-dot" style={{ background: 'rgba(212,160,23,.3)' }} />
//       <div className="home-meta-text">Est. 2024</div>
//     </div>
//     <div className="logo-container">
//       <div className="logo-ring" />
//       <div className="logo-ring" />
//       <img className="logo-img" src={logoImg} alt="ZUURA Racing Logo" />
//     </div>
//     {/* Brand name below logo — gold highlighted letters */}
//     <div className="home-brand-label">
//       <BrandLetters />
//     </div>
//     <div className="scroll-hint">
//       <span>Scroll</span>
//       <div className="scroll-arrow" />
//     </div>
//   </section>
// );

// const AboutSection = () => (
//   <section id="about">
//     {/* LEFT — text */}
//     <div className="about-left">
//       <div className="section-eyebrow fade-in">01 — About</div>
//       <h1 className="hero-headline fade-in">
//         BUILT<br />
//         <span className="outline">TO</span><br />
//         RACE
//       </h1>
//       <p className="hero-desc fade-in">
//         Where engineering meets ambition. ZUURA Racing is a student-run motorsport team designing
//         and competing with formula vehicles built entirely in-house — from chassis to control systems.
//       </p>
//       <div className="hero-stats fade-in">
//         {[['42+','Active Members'],['3+','Vehicles Built'],['7+','Competitions'],['4+','Awards Won']].map(([n,l]) => (
//           <div className="hero-stat" key={l}>
//             <div className="hero-stat-num">{n}</div>
//             <div className="hero-stat-label">{l}</div>
//           </div>
//         ))}
//       </div>
//       <div className="hero-btns fade-in">
//         <button className="btn-gold" onClick={() => document.getElementById('cars').scrollIntoView({ behavior: 'smooth' })}>
//           Explore Our Cars
//         </button>
//         <button className="btn-ghost" onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })}>
//           Join The Team
//         </button>
//       </div>
//     </div>
//     {/* RIGHT — YouTube video, autoplay muted loop, no controls */}
//     <div className="about-right fade-in delay-2">
//       <div className="yt-embed-wrapper">
//         <iframe
//           src="https://www.youtube.com/embed/Gjhb-jiVqZY?autoplay=1&mute=1&loop=1&playlist=Gjhb-jiVqZY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1&fs=0"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//           title="ZUURA Racing on track"
//         />
//       </div>
//       <div className="yt-video-label">ZUURA Racing · On Track</div>
//     </div>
//   </section>
// );

// const CarsSection = () => (
//   <section id="cars">
//     <div className="section-eyebrow fade-in">02 — Cars</div>
//     <div className="cars-header">
//       <h2 className="cars-headline fade-in">Our <span>Machines</span></h2>
//       <p className="cars-sub fade-in">Every car we build is a full engineering program — chassis, powertrain, electronics, and aerodynamics, all student-designed and fabricated.</p>
//     </div>
//     <div className="car-cards">
//       <div className="car-card fade-in">
//         <div className="car-card-img">
//           <div className="car-img-number">01</div>
//           <span className="car-badge">Flagship</span>
//         </div>
//         <div className="car-card-info">
//           <div className="car-tag">Formula SAE · Combustion</div>
//           <div className="car-name">ZR-01 <em>Prototype</em></div>
//           <p className="car-desc">Our flagship open-wheel formula vehicle. Custom space-frame chassis, high-revving powertrain, full aerodynamic package via CFD. Refined through two seasons of international competition.</p>
//           <div className="car-specs">
//             {[['200+','HP','Power'],['380','KG','Weight'],['3.2s','','0-100'],['1.8G','','Lateral G']].map(([v,u,l]) => (
//               <div key={l}><div className="car-spec-val">{v}</div><div className="car-spec-unit">{u}</div><div className="car-spec-label">{l}</div></div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="car-card fade-in delay-1">
//         <div className="car-card-img">
//           <div className="car-img-number">E1</div>
//           <span className="car-badge electric">EV Concept</span>
//         </div>
//         <div className="car-card-info">
//           <div className="car-tag">EV Concept · Zero Emission</div>
//           <div className="car-name">ZR-E1 <em>Electric</em></div>
//           <p className="car-desc">All-electric racing concept. High-voltage battery pack, in-house motor controller, regenerative braking — all student-designed. Our transition into sustainable high-performance motorsport.</p>
//           <div className="car-specs">
//             {[['240','KW','Peak Power'],['340','KG','Target Wt.'],['2.8s','','0-100']].map(([v,u,l]) => (
//               <div key={l}><div className="car-spec-val">{v}</div><div className="car-spec-unit">{u}</div><div className="car-spec-label">{l}</div></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="car-cta-bar fade-in">
//       <span>Want to work on these machines?</span>
//       <button className="btn-gold" onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })}>
//         Join The Engineering Team
//       </button>
//     </div>
//   </section>
// );

// const ContestsSection = () => (
//   <section id="contests">
//     <div className="section-eyebrow fade-in">03 — Contests</div>
//     <h2 className="contests-headline fade-in">Race <span>History</span></h2>
//     <p className="contests-sub fade-in">Competing on the world stage. From Formula SAE Michigan to Shell Eco-Marathon Asia, ZUURA has proven itself at the highest levels of student motorsport.</p>
//     <div className="contest-list">
//       {[
//         { year:'2024', loc:'Michigan, USA', badge:'Formula SAE', name:'Formula SAE Michigan', desc:'International debut at the most prestigious student racing event globally. Competing among 120+ universities, ZR-01 completed all dynamic events and placed top 30%. Judges commended chassis architecture and manufacturing quality in Design Event.', tags:[{l:'Top 30% Overall',c:'highlight'},{l:'120+ Teams',c:''},{l:'Design Recognition',c:'award'}] },
//         { year:'2024', loc:'Asia-Pacific', badge:'Eco-Marathon', name:'Shell Eco-Marathon Asia', desc:"A landmark achievement — winning Best Fuel Economy in the prototype category. Our obsessive focus on weight reduction and combustion mapping produced a result surpassing established multi-year programs.", tags:[{l:'1st Fuel Economy',c:'highlight'},{l:'⭐ Award Winner',c:'award'}] },
//         { year:'2025', loc:'Silverstone, UK', badge:'Formula Student', name:'Formula Student UK — Silverstone', desc:"Competing at one of motorsport's most iconic circuits. ZR-01 impressed across design and dynamic events. Judges highlighted our aerodynamic coherence and driver-first packaging philosophy.", tags:[{l:'Silverstone Circuit',c:''},{l:'Design Commendation',c:'award'}] },
//         { year:'2025', loc:'Upcoming', badge:'FSAE Electric', name:'Formula SAE Electric — ZR-E1 Debut', desc:"The most anticipated chapter in ZUURA's story. ZR-E1 will debut at FSAE Electric 2025 — our transition into sustainable high-performance motorsport. Battery integration and motor calibration underway.", tags:[{l:'Upcoming',c:''}] },
//       ].map((c, i) => (
//         <div className={`contest-item fade-in delay-${i}`} key={c.name}>
//           <div className="contest-year-col">
//             <div className="contest-year">{c.year}</div>
//             <div className="contest-loc">📍 {c.loc}</div>
//           </div>
//           <div className="contest-body">
//             <span className="contest-type-badge">{c.badge}</span>
//             <div className="contest-name">{c.name}</div>
//             <p className="contest-desc">{c.desc}</p>
//             <div className="contest-tags">
//               {c.tags.map(t => <span className={`contest-tag ${t.c}`} key={t.l}>{t.l}</span>)}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// const DepartmentsSection = () => (
//   <section id="departments">
//     <div className="section-eyebrow fade-in">04 — Team</div>
//     <h2 className="dept-headline fade-in">Depart<span>ments</span></h2>
//     <p className="dept-intro fade-in">Passionate, driven students ready to build, race, and leave a mark on motorsport.</p>
//     <div className="dept-more-than fade-in">MORE THAN A CLUB</div>
//     <p className="dept-more-desc fade-in">ZUURA is a professional-grade racing team run entirely by students. Joining means real ownership — designing actual race parts, managing budgets, competing internationally. No motorsport experience required — just ambition and dedication.</p>
//     <div className="dept-label fade-in">Open Departments</div>
//     <div className="dept-grid fade-in">
//       {[
//         { icon:'⚙️', name:'Chassis',          desc:'Chassis, suspension, braking, and powertrain. Real CAD and fabrication work.' },
//         { icon:'⚡', name:'Electrical',           desc:'Harnesses, ECU, battery systems, and race telemetry hardware.' },
//         { icon:'</>',name:'Software',             desc:'Embedded systems, dashboards, lap simulation, EV controls.' },
//         { icon:'🌀', name:'Aerodynamics',         desc:'CFD, wing design, downforce optimization — pure applied fluid dynamics.' },
//         { icon:'📊', name:'Management',  desc:'Sponsors, budgets, cost reports, strategic planning.' },
//         { icon:'📸', name:'Media & Comms',        desc:'Photography, social content, branding, storytelling.' },
//       ].map(d => (
//         <div className="dept-card" key={d.name}>
//           <div className="dept-icon">{d.icon}</div>
//           <div className="dept-name">{d.name}</div>
//           <div className="dept-desc">{d.desc}</div>
//         </div>
//       ))}
//     </div>
//     <div className="dept-apply-box fade-in">
//       <div className="dept-apply-title">READY TO APPLY?</div>
//       <p className="dept-apply-desc">Open to all enrolled students regardless of faculty. Just the drive to be part of something extraordinary.</p>
//       <button className="btn-gold">Apply Now →</button>
//     </div>
//   </section>
// );

// const JoinSection = () => (
//   <section id="join">
//     <div className="section-eyebrow fade-in">05 — Join</div>
//     <h2 className="join-headline fade-in">JOIN <span>ZUURA</span></h2>
//     <p className="join-sub fade-in">Passionate, driven students ready to build, race, and leave a mark on motorsport.</p>
//     <div className="join-cta-group fade-in">
//       {[['Join The Team','#departments'],['Become a Sponsor','#sponsors'],['Contact Us','#contact']].map(([l,h]) => (
//         <button className="join-cta-link" key={l} onClick={() => document.querySelector(h).scrollIntoView({ behavior:'smooth' })}>
//           <span className="label">{l}</span><span className="arrow">→</span>
//         </button>
//       ))}
//     </div>
//     <div style={{ marginTop:'72px' }}>
//       <h2 className="join-build-headline fade-in">RACE WITH US.<br /><span>BUILD WITH US.</span></h2>
//       <p className="join-build-desc fade-in">Whether you're a student chasing real engineering experience, an industry partner, or a motorsport enthusiast — there's a place in the ZUURA garage.</p>
//     </div>
//   </section>
// );

// const SponsorsSection = () => (
//   <section id="sponsors">
//     <div className="section-eyebrow fade-in">06 — Sponsors</div>
//     <h2 className="sponsors-headline fade-in">Our <span>Partners</span></h2>
//     <p className="sponsors-sub fade-in">Backed by organisations who invest in tomorrow's engineers — today.</p>
//     <div className="why-sponsor-headline fade-in">WHY SPONSOR ZUURA?</div>
//     <p className="why-sponsor-desc fade-in">Partnering with ZUURA means your brand appears at international Formula SAE and Formula Student competitions — live in front of thousands of spectators, judges, and industry leaders.</p>
//     <div className="why-grid fade-in">
//       {[['🌍','International Exposure','Live at Formula SAE, Formula Student UK, Shell Eco-Marathon'],['🎓','Talent Pipeline','Direct access to top-performing engineering students'],['🤝','CSR Partnership','Visible, meaningful investment in STEM education'],['📣','Brand Visibility','Livery, kit, digital, and social media placement']].map(([i,t,d]) => (
//         <div className="why-card" key={t}><div className="why-icon">{i}</div><div className="why-title">{t}</div><div className="why-desc">{d}</div></div>
//       ))}
//     </div>
//     {[['★ GOLD','Gold Partner — Primary car livery, race kit, competition banners, full media','title',['YOUR BRAND HERE','PARTNER SLOT'],'Gold Partner'],
//       ['SILVER','Silver Partner — Secondary livery, event banners, social features','major',['SPONSOR SLOT','SPONSOR SLOT','SPONSOR SLOT'],'Silver Partner'],
//       ['BRONZE','Supporting Sponsors','general',['SLOT','SLOT','SLOT','SLOT','SLOT'],'Supporter']
//     ].map(([badge,desc,cls,slots,type]) => (
//       <div key={badge}>
//         <div className="tier-label"><span className="tier-badge">{badge}</span> {desc}</div>
//         <div className={`sponsors-grid ${cls}`}>
//           {slots.map((s,i) => <div className="sponsor-card" key={i}><div className="sponsor-logo-mock">{s}</div><div className="sponsor-type">{type}</div></div>)}
//         </div>
//       </div>
//     ))}
//     <div className="sponsor-cta-box fade-in">
//       <div><h3>Become a <span>Partner</span></h3><p>Put your brand on the track. Contact us to discuss sponsorship packages.</p></div>
//       <button className="btn-gold" onClick={() => document.getElementById('contact').scrollIntoView({ behavior:'smooth' })}>Sponsor ZUURA →</button>
//     </div>
//   </section>
// );

// const ContactSection = () => (
//   <section id="contact">
//     <div className="section-eyebrow fade-in">07 — Contact</div>
//     <h2 className="contact-headline fade-in">GET IN <span>TOUCH</span></h2>
//     <p className="contact-sub fade-in">Questions, sponsorship, media, or collaboration — we respond within 48 hours.</p>
//     <div className="contact-grid">
//       <div className="fade-in">
//         <div className="contact-info-title">LET'S TALK</div>
//         <p className="contact-info-desc">Whether you're a student eager to join, an industry professional exploring partnership, or a fan — reach out and we'll respond within 48 hours.</p>
//         <div className="contact-details">
//           {[['✉','Email','contact@zuura-racing.edu'],['📍','Location','Faculty of Engineering, Building 7 — University Campus'],['🕐','Hours','Mon–Fri · 14:00–22:00'],['📞','Phone','+1 (555) 000-ZUURA']].map(([icon,label,val]) => (
//             <div className="contact-detail" key={label}>
//               <div className="contact-detail-icon">{icon}</div>
//               <div><div className="contact-detail-label">{label}</div><div className="contact-detail-val">{val}</div></div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="contact-form-group fade-in delay-1">
//         <div className="form-row">
//           <div className="form-field"><label>Full Name</label><input type="text" placeholder="Your name" /></div>
//           <div className="form-field"><label>Email</label><input type="email" placeholder="your@email.com" /></div>
//         </div>
//         <div className="form-field">
//           <label>Inquiry Type</label>
//           <select><option value="">Select type</option><option>Join the team</option><option>Sponsorship</option><option>Media / Press</option><option>General</option></select>
//         </div>
//         <div className="form-field"><label>Message</label><textarea placeholder="Tell us more about your inquiry..." /></div>
//         <button className="btn-gold" style={{ width:'100%' }}>Send Message →</button>
//       </div>
//     </div>
//   </section>
// );

// /* ══════════════════════════════════════
//    MAIN APP
// ══════════════════════════════════════ */
// function App() {
//   const cursorRef   = useRef(null);
//   const ringRef     = useRef(null);
//   const [navOpen, setNavOpen]         = useState(false);
//   const [activeSection, setActive]    = useState('home');
//   const [showIntro, setShowIntro]     = useState(true);

//   /* Cursor */
//   useEffect(() => {
//     const move = (e) => {
//       if (cursorRef.current) { cursorRef.current.style.left = e.clientX + 'px'; cursorRef.current.style.top = e.clientY + 'px'; }
//       if (ringRef.current)   setTimeout(() => { if(ringRef.current){ ringRef.current.style.left = e.clientX+'px'; ringRef.current.style.top = e.clientY+'px'; } }, 80);
//     };
//     window.addEventListener('mousemove', move);
//     return () => window.removeEventListener('mousemove', move);
//   }, []);

//   /* Hide intro overlay after animation (~3.4s) */
//   useEffect(() => {
//     const t = setTimeout(() => setShowIntro(false), 3400);
//     return () => clearTimeout(t);
//   }, []);

//   /* Scroll: active nav + fade-in */
//   useEffect(() => {
//     const sectionIds = ['home','about','cars','contests','departments','join','sponsors','contact'];
//     const onScroll = () => {
//       let cur = 'home';
//       sectionIds.forEach(id => { const el = document.getElementById(id); if (el && window.scrollY >= el.offsetTop - 220) cur = id; });
//       setActive(cur);
//       document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
//         if (el.getBoundingClientRect().top < window.innerHeight * .88) el.classList.add('visible');
//       });
//     };
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const closeNav = () => setNavOpen(false);
//   const navItems = [['home','Home'],['cars','Cars'],['contests','Contests'],['departments','Departments'],['sponsors','Sponsors'],['contact','Contact']];

//   return (
//     <>
//       {/* Full-screen intro pop */}
//       <IntroOverlay visible={showIntro} />

//       {/* Cursors */}
//       <div className="cursor" ref={cursorRef} />
//       <div className="cursor-ring" ref={ringRef} />

//       {/* Animated background */}
//       <Background />

//       {/* Hamburger */}
//       <button className={`hamburger-btn${navOpen ? ' open' : ''}`} onClick={() => setNavOpen(v => !v)} aria-label="Menu">
//         <span /><span /><span />
//       </button>

//       {/* Nav overlay + panel */}
//       <div className={`nav-overlay${navOpen ? ' open' : ''}`} onClick={closeNav} />
//       <nav className={`nav-panel${navOpen ? ' open' : ''}`}>
//         <div className="nav-panel-logo">ZUURA<span> RACING</span></div>
//         <div className="nav-panel-tagline">Student Racing Team · Est. 2024</div>
//         <ul className="nav-links">
//           {navItems.map(([id, label]) => (
//             <li key={id}>
//               <a href={`#${id}`} className={activeSection === id ? 'active' : ''} onClick={closeNav}>
//                 {label} <span className="arrow">▶</span>
//               </a>
//             </li>
//           ))}
//         </ul>
//         <button className="nav-join" onClick={() => { closeNav(); document.getElementById('join').scrollIntoView({ behavior:'smooth' }); }}>
//           Join The Team
//         </button>
//       </nav>

//       {/* Brand top-right */}
//       <div className="brand-header">ZUURA <mark>RACING</mark></div>

//       {/* Sections */}
//       <HomeSection />
//       <AboutSection />
//       <CarsSection />
//       <ContestsSection />
//       <DepartmentsSection />
//       <JoinSection />
//       <SponsorsSection />
//       <ContactSection />

//      {/* Footer */}
//       <footer>
//         <div className="footer-top">
//           <div>
//             <div className="footer-logo">ZUURA <span>RACING</span></div>
//             <div className="footer-tagline">Engineering Excellence at Full Throttle</div>
//             <div className="footer-socials">
//               <a className="footer-social" href="#">in</a>
//               <a className="footer-social" href="#">f</a>
//               <a className="footer-social" href="#">ig</a>
//             </div>
//           </div>
//           <div>
//             <div className="footer-col-title">Navigate</div>
//             <ul className="footer-col-links">
//               {navItems.map(([id,l]) => <li key={id}><a href={`#${id}`}>{l}</a></li>)}
//             </ul>
//           </div>
//           <div>
//             <div className="footer-col-title">Team</div>
//             <ul className="footer-col-links">
//               <li><a href="#join">Join Us</a></li>
//               <li><a href="#contact">Contact Us</a></li>
//               <li><a href="#sponsors">Partner With Us</a></li>
//             </ul>
//           </div>
//           <div>
//             <div className="footer-col-title">Contact</div>
//             <div className="footer-contact-item">✉ contact@zuura-racing.edu</div>
//             <div className="footer-contact-item">📍 Faculty of Engineering, Building 7</div>
//             <div className="footer-contact-item">🕐 Mon–Fri · 14:00–22:00</div>
//             <div className="footer-contact-item">📞 +1 (555) 000-ZUURA</div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <div className="footer-copy">© 2025 ZUURA Racing. All rights reserved. A student special team of the Faculty of Engineering.</div>
//           <div className="footer-legal">
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms of Use</a>
//             <a href="#">Sitemap</a>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }


import ZuuraRacingApp from './ZuuraRacingApp';


export default function App() {
  return <ZuuraRacingApp />;
}