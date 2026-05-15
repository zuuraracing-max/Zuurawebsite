import { useState, useEffect, useRef } from "react";
import img_bhuvan from "./Bhuvan.jpeg";
import img_arnav from "./GROUP FOTU/Anav Mendiratta.jpg";
import img_sou from "./GROUP FOTU/Soumya Ranjan Moharana.jpg";
import img_geo from "./Georgy.jpeg";
import img_shantanu from "./GROUP FOTU/Shanthanu Rege.jpg";
import img_isha from "./GROUP FOTU/Isha.jpg";
import img_tarun from "./GROUP FOTU/Tarun Balamurugan.jpg";
import img_seshanth from "./GROUP FOTU/Seshant P.jpg";
import img_dusht from "./GROUP FOTU/Shourya.jpg";
import img_swagat from "./GROUP FOTU/Swagat.jpg";
import img_daksh from "./GROUP FOTU/Daksh.jpeg";
import img_khyati from "./GROUP FOTU/Khyati.jpeg";
import img_abhi_p from "./GROUP FOTU/Abhinav Pramod.jpg";
import img_vp from "./GROUP FOTU/Vetrivel.jpg";
import img_gaurav from "./GROUP FOTU/S.Gaurav Raghavendhar.jpg";
import img_prasanna from "./GROUP FOTU/Prasanna. S.jpg";
import img_bhaavya from "./GROUP FOTU/Bhaavya Sri.jpg";
import img_shrengeeth from "./GROUP FOTU/SrengeethRakkesh R.jpg";
import img_shaahid from "./GROUP FOTU/Mohammed Shaahid M.jpg";
import img_megh from "./GROUP FOTU/Megh C singhi.jpg";
import img_anumith from "./GROUP FOTU/Anumith.jpg";
import img_abhi_k from "./GROUP FOTU/Krishna Abhinav Nippani.jpg";
import img_sreeparvathi from "./GROUP FOTU/Sreeparvathi Devesh.jpg";
import img_rahul_u from "./GROUP FOTU/Rahul U.jpg";
import img_ankit from "./GROUP FOTU/Ankit.jpg";
import img_sharath from "./GROUP FOTU/Sharath Atchayan.jpg";
import img_jaishith from "./GROUP FOTU/Jaishith R.jpg";
import img_avaneesh from "./GROUP FOTU/Avaneesh.jpg";
import img_sumit from "./GROUP FOTU/Sumit Rohan.jpg";
import img_irfan from "./GROUP FOTU/Irfan.jpg";
import img_akhil from "./GROUP FOTU/Akhil Kumar.jpg";
import img_trishank from "./GROUP FOTU/Bala Trishank.jpg";
import kw_img from "./KWKeizerAluminumWheels.jpeg";
import mrf_img from "./MRF.jpg.jpeg";
import matlab_img from "./MATLAB.png";
import ric_img from "./Ricardo.jpg.jpeg";
import things_img from "./ThingSpeak.png";
import ppt_img from "./PPT Power Tools.png";
import ping_img from "./Pingel.png";
import ansys_img from "./Ansys.png";
import solidworks_img from "./DS SolidWorks.png";
import altium_img from "./Altium.png";
import agni_img from "./Agni Motors.png";
import adv_img from "./Advanced Composites.jpeg";
import asap_img from "./ASAP Motorsports.png";
import bender_img from "./Bender.png";
import kelly_img from "./Kelly.jpg.jpeg";
import flauta_img from "./Flauta Customs.jpg.jpeg";
import img_sreeram from "./GROUP FOTU/Sreeram Pichaimani.jpg";
import cust_img from "./CustomWorks.png";
import drex_img from "./Drexler Automotive.png";
import img_jasi from "./GROUP FOTU/Jaskaran Singh.jpg";
import img_srish from "./GROUP FOTU/Srishtee Gupta.jpg";
import img_soumya_p from "./GROUP FOTU/Soumya Porwall.jpeg";
import diff_img from "./Differenz System.png";
import LOGO_IMG from "./Logo.png";
import ig from "./ig.png";
import li from "./linkedin.png";
import yt from "./youtube.png";
import img_zfr01 from "./zfr01.png";
import img_zfr02 from "./zfr02.png";
import img_zfr03 from "./zfr03.png";
import img_zfr04 from "./zfr04.png";
import img_zfr05 from "./zfr05.png";
import img_zfr06 from "./zfr06.png";
import img_zfr07 from "./zfr07.png";
import img_zfr08 from "./zfr08.png";

const GOLD = "#D4A017";
const GOLD_DIM = "rgba(212,160,23,.18)";
const GOLD_MID = "rgba(212,160,23,.45)";
const BG = "#080706";
const TEXT = "#e8e0d0";
const MUTED = "rgba(232,224,208,.45)";

//Responsive hook
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return isMobile;
}

// ─── Sponsors ──────────────────────────────────────────────────────────────────
const SPONSORS_DATA = [
  { tier:"Title",     name:"KW Keizer Aluminium Wheels", url:"https://keizerwheels.com/",                  img:kw_img,         tagline:"Aluminium Supply Partner",               color:"#e60028" },
  { tier:"Premier",   name:"MRF",                    url:"https://www.mrftyres.com/",                      img:mrf_img,        tagline:"",                                       color:"#c8102e" },
  { tier:"Premier",   name:"MATLAB",                 url:"https://in.mathworks.com/products/matlab.html",  img:matlab_img,     tagline:"MATLAB & Simulink Partner",              color:"#f0c000" },
  { tier:"Premier",   name:"Ricardo",                url:"https://www.ricardo.com/en",                     img:ric_img,        tagline:"",                                       color:"#003087" },
  { tier:"Premier",   name:"ThingSpeak",             url:"https://thingspeak.mathworks.com/",              img:things_img,     tagline:"",                                       color:"#cc0000" },
  { tier:"Official",  name:"PPT Power Tools",        url:"https://www.powertextools.com/#/home",            img:ppt_img,        tagline:"",                                       color:"#007dc3" },
  { tier:"Official",  name:"Pingel",                 url:"https://pingelonline.com/",                      img:ping_img,       tagline:"",                                       color:"#ffa500" },
  { tier:"Official",  name:"ANSYS",                  url:"https://www.ansys.com",                          img:ansys_img,      tagline:"Simulation Software Partner",            color:"#ffb71b" },
  { tier:"Official",  name:"DS SolidWorks",          url:"https://www.solidworks.com",                     img:solidworks_img, tagline:"",                                       color:"#e2231a" },
  { tier:"Official",  name:"Altium",                 url:"https://www.altium.com/in",                      img:altium_img,     tagline:"",                                       color:"#a5005a" },
  { tier:"Official",  name:"Agni Motors",            url:"https://www.agnimotors.com/",                    img:agni_img,       tagline:"",                                       color:"#e03200" },
  { tier:"Supporting",name:"Advanced Composites",    url:"https://www.advancedcomposites.com/",             img:adv_img,        tagline:"",                                       color:"#cc0000" },
  { tier:"Supporting",name:"ASAP Motorsports",       url:"https://asap-motorsports.com/",                  img:asap_img,       tagline:"",                                       color:"#cc0032" },
  { tier:"Supporting",name:"Bender",                 url:"https://www.bender-in.com/",                     img:bender_img,     tagline:"",                                       color:"#4a4a4a" },
  { tier:"Supporting",name:"Kelly",                  url:"https://kellycontroller.com/",                   img:kelly_img,      tagline:"",                                       color:"#e4003b" },
  { tier:"Supporting",name:"Flauta Customs",         url:"https://www.flautacustoms.com/",                 img:flauta_img,     tagline:"",                                       color:"#e8440e" },
  { tier:"Knowledge", name:"CustomWorks",            url:"https://www.customworksrc.com/",                 img:cust_img,       tagline:"",                                       color:"#00b0aa" },
  { tier:"Knowledge", name:"Drexler Automotive",     url:"https://www.drexler-automotive.com/en/",         img:drex_img,       tagline:"",                                       color:"#0076a8" },
  { tier:"Knowledge", name:"Differenz System",       url:"https://www.differenzsystem.com",                img:diff_img,       tagline:"Data Acquisition & Telemetry Partner",   color:"#0076a8" },
];

const TIER_CONFIG = {
  "Title":      { label:"Title Sponsors",      accent:GOLD,                  cardH:160 },
  "Premier":    { label:"Premier Partners",    accent:"rgba(212,160,23,.7)", cardH:130 },
  "Official":   { label:"Official Sponsors",   accent:"rgba(212,160,23,.5)", cardH:110 },
  "Supporting": { label:"Supporting Sponsors", accent:"rgba(212,160,23,.35)",cardH:96  },
  "Knowledge":  { label:"Knowledge Partners",  accent:"rgba(212,160,23,.25)",cardH:96  },
};
const TIER_ORDER = ["Title","Premier","Official","Supporting","Knowledge"];

// ─── Gold Cursor (desktop only) ────────────────────────────────────────────────
function GoldCursor({ isMobile }) {
  const dotRef = useRef(null), ringRef = useRef(null);
  const pos = useRef({x:0,y:0}), ring = useRef({x:0,y:0}), raf = useRef(null);
  useEffect(() => {
    if (isMobile) return;
    const move = e => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);
    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * .12;
      ring.current.y += (pos.current.y - ring.current.y) * .12;
      if (dotRef.current)  dotRef.current.style.transform  = `translate(${pos.current.x-5}px,${pos.current.y-5}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ring.current.x-18}px,${ring.current.y-18}px)`;
      raf.current = requestAnimationFrame(tick);
    };
    tick();
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf.current); };
  }, [isMobile]);
  if (isMobile) return null;
  return (<>
    <div ref={ringRef} style={{position:"fixed",top:0,left:0,width:36,height:36,borderRadius:"50%",border:"1.5px solid rgba(212,160,23,.6)",pointerEvents:"none",zIndex:99999,willChange:"transform"}}/>
    <div ref={dotRef}  style={{position:"fixed",top:0,left:0,width:10,height:10,borderRadius:"50%",background:GOLD,pointerEvents:"none",zIndex:99999,boxShadow:"0 0 10px rgba(212,160,23,.9),0 0 24px rgba(212,160,23,.4)",willChange:"transform"}}/>
  </>);
}

//Canvas Road
function RoadCanvas() {
  const cvRef = useRef(null), animRef = useRef(null), st = useRef({off:0,streaks:[]});
  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const ctx = cv.getContext("2d");
    const resize = () => { cv.width = window.innerWidth; cv.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    st.current.streaks = Array.from({length:70}, () => ({
      x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight,
      speed: .5+Math.random()*2.5, len: 40+Math.random()*120,
      opacity: .1+Math.random()*.35, isGold: Math.random()>.7
    }));
    const draw = () => {
      const W=cv.width, H=cv.height, VP={x:W*.5, y:H*.5};
      st.current.off = (st.current.off+1.4)%80;
      ctx.fillStyle = BG; ctx.fillRect(0,0,W,H);
      const dl = (x1,y1,x2,y2,col,w=1) => { ctx.strokeStyle=col; ctx.lineWidth=w; ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke(); };
      const sp = W*.55;
      dl(VP.x-sp,H,VP.x,VP.y,"rgba(212,160,23,.18)",1.5);
      dl(VP.x+sp,H,VP.x,VP.y,"rgba(212,160,23,.18)",1.5);
      for (let i=1;i<=5;i++) {
        const f=i/6;
        dl(VP.x,VP.y,VP.x-sp*f,H-(H-VP.y)*(1-f*.7),`rgba(212,160,23,${.04+f*.06})`,.5);
        dl(VP.x,VP.y,VP.x+sp*f,H-(H-VP.y)*(1-f*.7),`rgba(212,160,23,${.04+f*.06})`,.5);
      }
      for (let i=0;i<16;i++) {
        const t0=((i/16)+st.current.off/(80*16))%1, t1=(((i+.45)/16)+st.current.off/(80*16))%1;
        dl(VP.x,VP.y+(H-VP.y)*t0,VP.x,VP.y+(H-VP.y)*t1,`rgba(212,160,23,${.08+t0*.25})`,.8);
      }
      st.current.streaks.forEach(s => {
        s.y -= s.speed; if (s.y+s.len<0) { s.y=H+s.len; s.x=Math.random()*W; }
        const g = ctx.createLinearGradient(s.x,s.y,s.x,s.y+s.len);
        g.addColorStop(0,"transparent");
        g.addColorStop(.5, s.isGold?`rgba(212,160,23,${s.opacity})`:`rgba(255,255,255,${s.opacity*.7})`);
        g.addColorStop(1,"transparent");
        ctx.strokeStyle=g; ctx.lineWidth=.7; ctx.beginPath(); ctx.moveTo(s.x,s.y); ctx.lineTo(s.x,s.y+s.len); ctx.stroke();
      });
      const vg = ctx.createRadialGradient(VP.x,VP.y,0,VP.x,VP.y,Math.max(W,H)*.75);
      vg.addColorStop(0,"transparent"); vg.addColorStop(1,"rgba(8,7,6,.82)");
      ctx.fillStyle=vg; ctx.fillRect(0,0,W,H);
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener("resize",resize); };
  },[]);
  return <canvas ref={cvRef} style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0}}/>;
}

//Sponsor Strip
function SponsorStrip() {
  const items = [...SPONSORS_DATA,...SPONSORS_DATA,...SPONSORS_DATA];
  return (
    <div style={{width:"100%",background:"rgba(8,7,6,.98)",borderTop:"1px solid rgba(212,160,23,.2)",borderBottom:"1px solid rgba(212,160,23,.2)",overflow:"hidden"}}>
      <div style={{textAlign:"center",fontSize:".6rem",letterSpacing:".55em",color:"rgba(212,160,23,.4)",textTransform:"uppercase",padding:"10px 0 4px",borderBottom:"1px solid rgba(212,160,23,.07)"}}>Our Partners &amp; Sponsors</div>
      <div style={{overflow:"hidden",position:"relative",height:88}}>
        <div style={{position:"absolute",left:0,top:0,bottom:0,width:40,background:"linear-gradient(to right,rgba(8,7,6,1),transparent)",zIndex:2,pointerEvents:"none"}}/>
        <div style={{position:"absolute",right:0,top:0,bottom:0,width:40,background:"linear-gradient(to left,rgba(8,7,6,1),transparent)",zIndex:2,pointerEvents:"none"}}/>
        <div style={{display:"flex",alignItems:"center",animation:"sponsorScroll 40s linear infinite",width:"max-content",height:"100%"}}>
          {items.map((sp,i) => (
            <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"center",minWidth:130,height:68,margin:"0 4px",borderRadius:4,border:"1px solid rgba(212,160,23,.12)",background:"rgba(255,255,255,.025)",padding:"8px 14px",flexShrink:0,position:"relative"}}>
              <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(to right,transparent,${sp.color}66,transparent)`}}/>
              {sp.img
                ? <img src={sp.img} alt={sp.name} style={{maxHeight:44,maxWidth:110,objectFit:"contain",filter:`drop-shadow(0 0 8px ${sp.color}55)`}}/>
                : <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:".9rem",letterSpacing:".1em",color:sp.color}}>{sp.name}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//Navigation
const ALL_PAGES   = ["home","cars","departments","team","contests","flagship","history","news","sponsors","contact"];
const PAGE_LABELS = ["Home","Legacy Builds","Departments","Team","Contests","Workshops","Track Record","Updates","Sponsors","Contact"];

function Nav({ activePage, setActivePage }) {
  const [open, setOpen] = useState(false);
  const bs = i => ({
    display:"block", width:26, height:2, background:GOLD, transition:"all .35s cubic-bezier(.4,0,.2,1)",
    transform: open ? (i===0?"translateY(8px) rotate(45deg)":i===2?"translateY(-8px) rotate(-45deg)":"none") : "none",
    opacity: open && i===1 ? 0 : 1
  });
  return (<>
    <button onClick={() => setOpen(!open)} style={{position:"fixed",top:20,left:20,zIndex:1000,width:44,height:44,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:6,background:"transparent",border:"none",cursor:"pointer",padding:0}}>
      {[0,1,2].map(i => <span key={i} style={bs(i)}/>)}
    </button>
    <div onClick={() => setOpen(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.55)",zIndex:990,opacity:open?1:0,pointerEvents:open?"all":"none",transition:"opacity .35s"}}/>
    <nav style={{position:"fixed",top:0,left:0,height:"100vh",width:"min(320px,85vw)",background:"rgba(8,7,6,.97)",borderRight:`1px solid ${GOLD_DIM}`,zIndex:995,transform:open?"translateX(0)":"translateX(-100%)",transition:"transform .4s cubic-bezier(.4,0,.2,1)",padding:"60px 28px 40px",display:"flex",flexDirection:"column",gap:4,backdropFilter:"blur(20px)",overflowY:"auto"}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4}}>
        <img src={LOGO_IMG} alt="ZUURA" style={{width:36,height:36,objectFit:"contain",filter:"drop-shadow(0 0 8px rgba(212,160,23,.6))"}}/>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.6rem",letterSpacing:".2em",color:TEXT}}>ZUURA<span style={{color:GOLD}}> RACING</span></div>
      </div>
      <div style={{fontSize:".58rem",letterSpacing:".5em",color:MUTED,textTransform:"uppercase",marginBottom:16}}></div>
      <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:2,flex:1}}>
        {ALL_PAGES.map((p,i) => (
          <li key={p}>
            <button onClick={() => { setActivePage(p); setOpen(false); }} style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",padding:"11px 0",fontFamily:"'Barlow Condensed',sans-serif",fontSize:"1.05rem",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:activePage===p?GOLD:MUTED,background:"transparent",border:"none",borderBottom:`1px solid ${activePage===p?GOLD_DIM:"transparent"}`,cursor:"pointer",transition:"all .25s"}}>
              {PAGE_LABELS[i]}<span style={{opacity:activePage===p?1:0}}>▶</span>
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => { setActivePage("contact"); setOpen(false); }} style={{marginTop:12,padding:13,background:GOLD,color:BG,fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:".9rem",letterSpacing:".2em",textTransform:"uppercase",border:"none",cursor:"pointer"}}>Join The Team</button>
    </nav>
    {/* Top-right logo pill — kept for branding on non-home pages */}
    <div style={{position:"fixed",top:20,right:16,zIndex:100,display:"flex",alignItems:"center",gap:8}}>
      <img src={LOGO_IMG} alt="ZUURA" style={{width:30,height:30,objectFit:"contain",filter:"drop-shadow(0 0 6px rgba(212,160,23,.7))"}}/>
      <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.05rem",letterSpacing:".2em",color:TEXT}}>ZUURA <span style={{color:GOLD}}>RACING</span></div>
    </div>
  </>);
}

//Shared UI
function Ring({ size, delay, opacity }) {
  return <div style={{position:"absolute",width:size,height:size,borderRadius:"50%",border:`1px solid rgba(212,160,23,${opacity})`,animation:`ringPulse 4s ease-out ${delay}s infinite`,pointerEvents:"none"}}/>;
}

function Eyebrow({ children, center }) {
  return (
    <div style={{fontSize:".65rem",letterSpacing:".45em",color:GOLD,textTransform:"uppercase",marginBottom:16,display:"flex",alignItems:"center",gap:12,justifyContent:center?"center":"flex-start"}}>
      <span style={{display:"block",width:24,height:1,background:GOLD}}/>{children}
    </div>
  );
}

function InnerPage({ eyebrow, headline, sub, children }) {
  return (
    <div style={{position:"relative",zIndex:1,padding:"90px 5vw 70px",maxWidth:1400,margin:"0 auto"}}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.2rem,7vw,4.8rem)",lineHeight:.95,margin:"10px 0 16px"}}>{headline}</h2>
      <p style={{color:MUTED,fontSize:"clamp(.9rem,1vw,1rem)",lineHeight:1.75,maxWidth:660,marginBottom:36}}>{sub}</p>
      {children}
    </div>
  );
}

function GoldBtn({ children, onClick }) {
  return <button onClick={onClick} style={{padding:"13px 28px",background:GOLD,color:BG,fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:".9rem",letterSpacing:".18em",textTransform:"uppercase",border:"none",cursor:"pointer"}}>{children}</button>;
}
function GhostBtn({ children, onClick }) {
  return <button onClick={onClick} style={{padding:"12px 28px",background:"transparent",color:GOLD,fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:".9rem",letterSpacing:".18em",textTransform:"uppercase",border:`1px solid ${GOLD}`,cursor:"pointer"}}>{children}</button>;
}

//Team Data
const DEPARTMENTS = [
  { id:"board",      icon:"",   order:1, name:"Board",            tagline:"", desc:"", members:[{name:"Duggi Bhuvan Reddy",role:"Team Captain",img:img_bhuvan},{name:"Soumya Ranjan Moharana",role:"Vice Captain",img:img_sou},{name:"Arnav Mendiratta",role:"Team Manager",img:img_arnav},{name:"Isha Prajapati",role:"Deputy Team Manager",img:img_isha}] },
  { id:"aero",       icon:"💨", order:2, name:"Aerodynamics",     tagline:"Shape the Air, Shape the Lap Time", desc:"Aerodynamics Department concentrates on utilizing the flow of air to ensure that vehicles have maximum grip and speed. We have two important forces to strike a balance; create downforce to enhance cornering stability and reduce drag to maintain high-speed efficiency. We design and optimize high-performance components such as wings, diffusers and bodywork using state-of-the-art computational fluid dynamics (CFD) and precision modeling. All curves will be designed in such a way that the car will be stabilized on the track giving the driver the assurance to take the car as far as it will go. Closing the gap between fluid theory and track performance we transform air resistance to a practical competitive edge. Finally, our department will ensure that the car is attached to the tarmac, and that it offers the required traction to cut important seconds off our lap times and push the limits of automotive engineering.", members:[{name:"Soumya Porwal",role:"Aerodynamics Lead",img:img_soumya_p},{name:"Shanthanu Nitin Rege",role:"HVAC LEAD",img:img_shantanu},{name:"Shourya Sanjay Hawal",role:"",img:img_dusht},{name:"Sreeparvathi Devesh",role:"",img:img_sreeparvathi},{name:"Mohammed Shaahid M",role:"",img:img_shaahid}] },
  { id:"chassis",    icon:"⚙️", order:3, name:"Chassis",          tagline:"The Backbone of Every Build",       desc:"Before the engine screams and the tires grip, there's something stronger holding it all together — the chassis. Not just metal and welds, but the core of precision, control, and pure performance. Every line is calculated, every joint is intentional, built to take on forces most never see. Meet the Chassis Team — the ones who turn raw ideas into a machine that doesn't just move, but dominates. From late-night CAD sessions to sparks flying in fabrication, this is where concepts become carbon and steel reality. Rigidity over compromise. Strength over shortcuts. Because when the car hits the track at full throttle, there's no room for error — only trust in what's built beneath. This isn't just a structure. It's the spine of speed, the cage of control, and the silent force behind every lap.", members:[{name:"Georgy Mathew",role:"Department Head",img:img_geo},{name:"Prasanna S",role:"",img:img_prasanna},{name:"Megh C Singhi",role:"",img:img_megh},{name:"Vetrivel VP",role:"",img:img_vp},{name:"Jasakaran Singh",role:"",img:img_jasi}] },
  { id:"powertrain", icon:"🔧", order:4, name:"Drivetrain",       tagline:"Raw Power, Precisely Delivered",    desc:"The drivetrain division deals with the development of the power transfer mechanism which transfers the force produced by the engine or the motor from the source of generation to the wheel ends of the vehicle. This section of the department is vital in defining the performance and efficiency levels of the vehicles being developed. Some of the main elements under this department include transmission gears, differential gears, drive shafts, and associated components. Gear ratios and torque distribution form some of the major considerations of this division to optimize vehicle performance with regard to acceleration and maximum velocity. Drivetrain division may also collaborate with vehicle dynamics division in sports car design and development and other advanced automotive designs.", members:[{name:"Anumith M",role:"Department Head",img:img_anumith},{name:"Daksh Jain",role:"",img:img_daksh},{name:"SrengeethRakkesh R",role:"",img:img_shrengeeth},{name:"Krishna Abhinav Nippani",role:"",img:img_abhi_k}] },
  { id:"electronics",icon:"⚡", order:5, name:"Electrical",       tagline:"The Nervous System of the Car",     desc:"The electrical department is the backbone of the car. Every system on a formula EV runs through it — from the high-voltage architecture that actually drives the wheels, to the sensor networks that tell the team what the car is doing at any given moment. The team handles everything from schematic design and PCB layout to wiring, firmware, and track-side debugging. When something goes wrong during a run, it's usually electrical that figures it out first. The work is unglamorous a lot of the time — hours of continuity checks, thermal testing, and CAN bus debugging before the car ever sees the track. But it's also the department where a bad decision can either kill a lap time or fail scrutineering entirely. The electrical team doesn't just support the car; in a lot of ways, they define what it's capable of.", members:[{name:"Avaneesh",role:"Department Head",img:img_avaneesh},{name:"Ankit",role:"",img:img_ankit},{name:"Abhinav Pramod",role:"",img:img_abhi_p},{name:"Rahul U",role:"",img:img_rahul_u},{name:"Seshanth P",role:"",img:img_seshanth},{name:"Swagat Mallik",role:"",img:img_swagat},{name:"Tharun Balamurugan",role:"",img:img_tarun},{name:"K Bala Trishank",role:"",img:img_trishank},{name:"Sreeram Pichaimani",role:"",img:img_sreeram}] },
  { id:"suspension", icon:"🔩", order:6, name:"Vehicle Dynamics", tagline:"Control at Every Corner",           desc:"The Vehicle Dynamics (VD) Department in Zuura is responsible for shaping how the car behaves on track, ensuring optimal performance, stability, and control. It focuses on the design and development of suspension systems, steering geometry, and tire selection to maximize grip and responsiveness under varying conditions. The team uses simulations, data analysis, and real-world testing to fine-tune parameters such as weight distribution, damping, and kinematics. By working closely with other engineering divisions, VD ensures that vehicle characteristics align with overall design goals and competition requirements. Through a balance of analytical precision and practical validation, the department plays a key role in delivering a car that is predictable, efficient, and competitive on the track.", members:[{name:"Sumit Rohan",role:"Department Head",img:img_sumit},{name:"S. Gaurav Raghavendhar",role:"",img:img_gaurav},{name:"Sharath Atchayam",role:"",img:img_sharath},{name:"Jaishith R",role:"",img:img_jaishith},{name:"Bhaavya Sri",role:"",img:img_bhaavya}] },
  { id:"business",   icon:"📊", order:7, name:"Management",       tagline:"The Engine Off the Track",          desc:"The Management Department in Zuura ensures the project runs smoothly beyond the technical build. It coordinates planning, budgeting, sponsorship, marketing, and team operations. This department secures funding by reaching out to sponsors, maintaining partnerships, and managing financial resources responsibly. It also handles branding and public relations, including social media strategy, content creation, and event promotion to enhance the team's visibility. Internally, management organizes timelines, tracks progress, and facilitates communication between engineering and non-technical divisions to keep everyone aligned with goals and deadlines. Additionally, it oversees logistics such as travel, competition registrations, and documentation. By balancing organizational structure with creative outreach, the Management Department plays a critical role in ensuring the team is financially sustainable, professionally represented, and competitively prepared.", members:[{name:"Md. Irfan",role:"Department Head",img:img_irfan},{name:"Akhil Kumar",role:"",img:img_akhil},{name:"Khyati Chaturvedi",role:"",img:img_khyati},{name:"Srishtee Gupta",role:"Software",img:img_srish}] },
];

//Cars
const CARS_DATA = [
  { id:"zfr01", img:img_zfr01, num:"01", badge:"", bc:GOLD, tag:"FS-JAPAN · 2014",                         name:"ZFR-01", desc:"Most cost efficient car in the event." },
  { id:"zfr02", img:img_zfr02, num:"02", badge:"", bc:"#3af",tag:"FS-JAPAN & FDC · 2015",                  name:"ZFR-02", desc:"Improved Documentation." },
  { id:"zfr03", img:img_zfr03, num:"03", badge:"", bc:MUTED, tag:"FS-ITALY · 2016",                        name:"ZFR-03", desc:"Revamped Powertrain — 20% lighter than ZFR-02." },
  { id:"zfr04", img:img_zfr04, num:"04", badge:"", bc:MUTED, tag:"FSAE-AUSTRALASIA · 2017",                name:"ZFR-04", desc:"First Indian team ever to clear technical inspection. 16th rank among CVs." },
  { id:"zfr05", img:img_zfr05, num:"05", badge:"", bc:MUTED, tag:"FSAE-AUSTRALASIA · 2018",                name:"ZFR-05", desc:"7th in Business Presentation · 10th in Cost Analysis · 13th rank overall among CVs." },
  { id:"zfr06", img:img_zfr06, num:"06", badge:"", bc:MUTED, tag:"FFS-INDIA · 2018",                       name:"ZFR-06", desc:"1st in overall Static Events · 2nd in Design Evaluation · 2nd in Sales Presentation · 7th rank overall." },
  { id:"zfr07", img:img_zfr07, num:"07", badge:"", bc:MUTED, tag:"FSAE-AUSTRALASIA · 2019 & 2022 | FFS-INDIA", name:"ZFR-07", desc:"Special Appreciation Award: Custom Harness. 13th overall CVs · 2nd Design Evaluation · 5th overall rank." },
  { id:"zfr08", img:img_zfr08, num:"08", badge:"", bc:MUTED, tag:"Formula Imperial · 2023",               name:"ZFR-08", desc:"1st in Business Plan and Cost · 3rd overall among CVs · 7th overall rank." },
];

//Contests
const CONTESTS_DATA = [
  { name:"Supra SAE India 2024",   type:"National",      url:"https://www.suprasaeindia.org/" },
  { name:"FMAE FFS India 2024",    type:"National",      url:"https://www.fmae.in/" },
  { name:"Formula Imperial",       type:"National",      url:"https://www.formulaimperial.in/" },
  { name:"FSAE-AUSTRALASIA",       type:"International", url:"https://www.fsae.com.au/" },
  { name:"FS-ITALY",               type:"International", url:"https://www.formulastudent.it/" },
  { name:"FS-JAPAN",               type:"International", url:"https://www.formulastudent.jp/" },
  { name:"FDC",                    type:"International", url:"https://www.fdc.com/" },
];

//News
const NEWS_ITEMS = [
  { id:1, category:"Competition", date:"Mar 2025", tag:"Upcoming", tagColor:GOLD,    title:"ZR-02 Electric Enters Final Assembly Phase",   summary:"Our electric car has passed structural validation and is now in final assembly.", detail:"The ZR-02 represents our most ambitious build yet.", icon:"🏎️" },
  { id:2, category:"Recruitment", date:"Feb 2025", tag:"Open",     tagColor:"#4CAF50",title:"2025 Recruitment Drive Now Open",              summary:"Applications open for the 2025-26 season across all departments.", detail:"Engineering and business roles available.", icon:"🎓" },
  { id:3, category:"Workshop",    date:"Jan 2025", tag:"Completed",tagColor:MUTED,    title:"CFD Workshop: Aerodynamics Sprint Training",   summary:"30 team members completed a two-day intensive CFD training using ANSYS Fluent.", detail:"Covered boundary layer meshing and drag-to-downforce optimisation.", icon:"💨" },
];

//Home
function HomePage({ setActivePage }) {
  const isMobile = useIsMobile();
  return (
    <div style={{position:"relative",zIndex:1}}>
      {/* Hero */}
      <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>

        {/*
          ── CHANGE 1: "ZUURA Formula Racing" title block now sits ABOVE the logo ──
          Previously this was a fixed top-right corner pill inside <Nav>.
          Now it lives here, centred, with its own fade-in animation.
        */}
        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          gap:6,
          marginBottom:24,
          animation:"fadeUp .9s ease 1s both",
          zIndex:4,
          position:"relative",
        }}>
          {/* decorative top line */}
          <div style={{width:48,height:1,background:`linear-gradient(to right,transparent,${GOLD},transparent)`,marginBottom:4}}/>
          {/* main title */}
          <div style={{
            fontFamily:"'Bebas Neue',sans-serif",
            fontSize:"clamp(1.8rem,5vw,3.2rem)",
            letterSpacing:".22em",
            color:TEXT,
            lineHeight:1,
            textAlign:"center",
          }}>
            ZUURA&nbsp;<span style={{color:GOLD}}>Formula Racing</span>
          </div>
          {/* decorative bottom line */}
          <div style={{width:48,height:1,background:`linear-gradient(to right,transparent,${GOLD},transparent)`,marginTop:4}}/>
        </div>

        {/* Logo + rings */}
        <div style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:"min(600px,90vw)",height:"min(600px,90vw)",animation:"logoPop 1.5s cubic-bezier(.22,1,.36,1) both",zIndex:2}}>
          <div style={{position:"absolute",inset:0,borderRadius:"50%",background:"radial-gradient(ellipse at center,rgba(212,160,23,.22) 0%,rgba(212,160,23,.12) 30%,rgba(212,160,23,.04) 60%,transparent 75%)",animation:"glowPulse 3s ease-in-out infinite"}}/>
          <Ring size="min(440px,74vw)" delay={1.7} opacity={0.35}/>
          <Ring size="min(560px,85vw)" delay={2}   opacity={0.18}/>
          <Ring size="min(680px,96vw)" delay={3.2} opacity={0.09}/>
          <img src={LOGO_IMG} alt="ZUURA Formula Racing" style={{width:"clamp(260px,55vw,520px)",height:"auto",display:"block",margin:"0 auto",filter:"drop-shadow(0 0 50px rgba(212,160,23,.9)) drop-shadow(0 0 120px rgba(212,160,23,.5))",animation:"logoFloat 4.5s ease-in-out 1.5s infinite",position:"relative",zIndex:3}}/>
        </div>

        {/* Scroll indicator */}
        <div style={{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,animation:"fadeUp .8s ease 2.8s both",zIndex:2}}>
          <span style={{fontSize:".6rem",letterSpacing:".52em",color:"rgba(212,160,23,.75)",textTransform:"uppercase"}}>Scroll</span>
          <div style={{width:1,height:36,background:"linear-gradient(to bottom,rgba(212,160,23,.85),transparent)",animation:"scrollPulse 1.8s ease-in-out infinite"}}/>
        </div>
      </div>

      {/* About section */}
      <div style={{padding:"60px 5vw",background:"linear-gradient(180deg,rgba(8,7,6,0) 0%,#080706 20%)"}}>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?40:60,alignItems:"center",maxWidth:1200,margin:"0 auto"}}>
          <div>
            <Eyebrow>01 — About</Eyebrow>
            <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(3rem,12vw,7rem)",lineHeight:.9,letterSpacing:".02em",marginBottom:24}}>
              BUILT<br/><span style={{WebkitTextStroke:"1px rgba(212,160,23,.5)",color:"transparent"}}>TO</span><br/><span style={{color:GOLD}}>RACE</span>
            </h1>
            <p style={{maxWidth:440,fontSize:"clamp(.9rem,1vw,1rem)",color:MUTED,lineHeight:1.8,marginBottom:28}}>Where engineering meets ambition. ZUURA Racing is a student-run motorsport team designing and competing with formula vehicles built entirely in-house.</p>

            {/* Stats */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:1,marginBottom:28}}>
              {[["32+","Active Members"],["8+","Vehicles Built"],["7+","Competitions"],["4+","Awards Won"]].map(([n,l],i) => (
                <div key={i} style={{padding:"16px 18px",border:`1px solid ${GOLD_DIM}`,background:"rgba(212,160,23,.02)"}}>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"2rem",color:GOLD,lineHeight:1}}>{n}</div>
                  <div style={{fontSize:".62rem",letterSpacing:".28em",color:MUTED,textTransform:"uppercase",marginTop:2}}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <GoldBtn onClick={() => setActivePage("cars")}>Explore Our Cars</GoldBtn>
              <GhostBtn onClick={() => setActivePage("team")}>Meet The Team</GhostBtn>
            </div>
          </div>

          {/* Video embed */}
          {!isMobile && (
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:12}}>
              <div style={{width:"100%",maxWidth:280,aspectRatio:"9/16",borderRadius:12,overflow:"hidden",border:`1px solid ${GOLD_DIM}`,boxShadow:`0 0 40px rgba(212,160,23,.12),0 24px 60px rgba(0,0,0,.7)`,background:"#111"}}>
                <iframe title="Zuura" src="" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen style={{width:"100%",height:"100%",border:"none",display:"block"}}/>
              </div>
              <div style={{fontSize:".62rem",letterSpacing:".4em",color:MUTED,textTransform:"uppercase"}}>ZUURA Racing in Action</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

//Cars
function CarsPage({ highlightCar }) {
  const isMobile = useIsMobile();
  const cardRefs = useRef({});
  useEffect(() => {
    if (highlightCar && cardRefs.current[highlightCar]) {
      setTimeout(() => cardRefs.current[highlightCar].scrollIntoView({ behavior:"smooth", block:"center" }), 200);
    }
  }, [highlightCar]);

  return (
    <InnerPage eyebrow="02 — Cars" headline={<>Our <span style={{color:GOLD}}>Machines</span></>} sub="Every car we build is a full engineering program — student-designed and fabricated from scratch.">
      <div style={{display:"flex",flexDirection:"column",gap:2}}>
        {CARS_DATA.map(c => {
          const isHi = highlightCar === c.id;
          return (
            <div key={c.id} ref={el => cardRefs.current[c.id]=el}
              style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"260px 1fr",background:isHi?"rgba(212,160,23,.07)":"rgba(255,255,255,.02)",border:isHi?`1px solid ${GOLD}`:`1px solid ${GOLD_DIM}`,boxShadow:isHi?"0 0 32px rgba(212,160,23,.25)":"none",transition:"all .4s"}}>
              <div style={{background:"linear-gradient(135deg,#111008,#1a1408)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:isMobile?180:200,position:"relative",overflow:"hidden"}}>
                <img src={c.img} alt={c.name} style={{width:"100%",height:"100%",objectFit:"cover",opacity:.85}}/>
                <div style={{position:"absolute",fontFamily:"'Bebas Neue',sans-serif",fontSize:"5rem",color:"rgba(212,160,23,.13)",lineHeight:1,pointerEvents:"none"}}>{c.num}</div>
                {isHi && <div style={{position:"absolute",top:10,left:10,padding:"3px 10px",background:GOLD,color:BG,fontSize:".55rem",letterSpacing:".3em",textTransform:"uppercase",fontWeight:700}}>🏁 Competed Here</div>}
              </div>
              <div style={{padding:isMobile?"20px":"28px 32px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <div style={{fontSize:isMobile?".82rem":"1.05rem",color:GOLD,letterSpacing:".3em",marginBottom:6}}>{c.tag}</div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1.5rem,4vw,2.1rem)",letterSpacing:".06em",marginBottom:8}}>{c.name}</div>
                <p style={{fontSize:"clamp(.85rem,.92vw,.95rem)",color:MUTED,lineHeight:1.7}}>{c.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </InnerPage>
  );
}

//Departments
function DepartmentsPage({ setActivePage, setTeamDept }) {
  const isMobile = useIsMobile();
  return (
    <InnerPage eyebrow="04 — Departments" headline={<>The <span style={{color:GOLD}}>Disciplines</span></>} sub="Six specialized engineering departments. Click any to meet the people who make it happen.">
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:12,marginTop:32}}>
        {DEPARTMENTS.map(d => (
          <button key={d.id} onClick={() => { setTeamDept(d.id); setActivePage("team"); }}
            style={{padding:"28px 22px",border:`1px solid ${GOLD_DIM}`,background:"rgba(255,255,255,.015)",cursor:"pointer",textAlign:"left",transition:"all .3s",width:"100%",position:"relative",overflow:"hidden",outline:"none"}}>
            <div style={{fontSize:"1.9rem",marginBottom:10}}>{d.icon}</div>
            <div style={{fontSize:".62rem",letterSpacing:".4em",color:GOLD,textTransform:"uppercase",marginBottom:6}}>Dept {String(d.order).padStart(2,"0")}</div>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.2rem",letterSpacing:".08em",color:TEXT,marginBottom:8}}>{d.name}</div>
            <p style={{fontSize:".85rem",color:MUTED,lineHeight:1.55,marginBottom:12}}>{d.tagline}</p>
            <div style={{fontSize:".62rem",letterSpacing:".28em",color:GOLD,textTransform:"uppercase"}}>Meet The Team →</div>
          </button>
        ))}
      </div>
    </InnerPage>
  );
}

//Team
function TeamPage({ activeDept, setActiveDept }) {
  const isMobile = useIsMobile();
  const dept = DEPARTMENTS.find(d => d.id === activeDept) || null;
  return (
    <div style={{position:"relative",zIndex:1,padding:"90px 5vw 70px",maxWidth:1400,margin:"0 auto"}}>
      <Eyebrow>05 — Team</Eyebrow>

      <div style={{display:"flex",flexWrap:isMobile?"nowrap":"wrap",gap:6,marginBottom:36,overflowX:isMobile?"auto":"visible",paddingBottom:isMobile?4:0}}>
        <button onClick={() => setActiveDept(null)} style={{padding:"9px 18px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:600,fontSize:".88rem",letterSpacing:".12em",textTransform:"uppercase",background:!activeDept?GOLD:"transparent",color:!activeDept?BG:MUTED,border:`1px solid ${!activeDept?GOLD:GOLD_DIM}`,cursor:"pointer",transition:"all .25s",flexShrink:0,whiteSpace:"nowrap"}}>All</button>
        {DEPARTMENTS.map(d => (
          <button key={d.id} onClick={() => setActiveDept(d.id)} style={{padding:"9px 18px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:600,fontSize:".88rem",letterSpacing:".12em",textTransform:"uppercase",background:activeDept===d.id?GOLD:"transparent",color:activeDept===d.id?BG:MUTED,border:`1px solid ${activeDept===d.id?GOLD:GOLD_DIM}`,cursor:"pointer",transition:"all .25s",flexShrink:0,whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:6}}>
            <span>{d.icon}</span>{d.name}
          </button>
        ))}
      </div>

      {dept && (
        <div style={{border:`1px solid ${GOLD_DIM}`,padding:"24px 28px",background:"rgba(212,160,23,.03)",marginBottom:36,display:"flex",alignItems:"flex-start",gap:20,flexWrap:"wrap"}}>
          <div style={{fontSize:"2.8rem"}}>{dept.icon}</div>
          <div style={{flex:1,minWidth:200}}>
            <div style={{fontSize:".62rem",letterSpacing:".5em",color:GOLD,textTransform:"uppercase",marginBottom:4}}>Department {String(dept.order).padStart(2,"0")}</div>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1.6rem,4vw,2.6rem)",letterSpacing:".06em",lineHeight:1,marginBottom:6}}>{dept.name}</h2>
            <p style={{fontSize:"clamp(.85rem,.92vw,.92rem)",color:MUTED,lineHeight:1.7,maxWidth:600}}>{dept.desc}</p>
          </div>
        </div>
      )}

      {(dept ? [dept] : DEPARTMENTS).map(d => (
        <div key={d.id} style={{marginBottom:dept?0:52}}>
          {!dept && (
            <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:20,paddingBottom:12,borderBottom:`1px solid ${GOLD_DIM}`}}>
              <span style={{fontSize:"1.6rem"}}>{d.icon}</span>
              <div>
                <div style={{fontSize:".58rem",letterSpacing:".5em",color:GOLD,textTransform:"uppercase",marginBottom:2}}>Dept {String(d.order).padStart(2,"0")}</div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.35rem",letterSpacing:".06em"}}>{d.name}</div>
              </div>
              <div style={{marginLeft:"auto",textAlign:"right"}}>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.6rem",color:GOLD,lineHeight:1}}>{d.members.length}</div>
                <div style={{fontSize:".55rem",letterSpacing:".28em",color:MUTED,textTransform:"uppercase"}}>Members</div>
              </div>
            </div>
          )}
          <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(auto-fill,minmax(180px,1fr))",gap:12}}>
            {d.members.map((m,mi) => (
              <div key={mi} style={{border:`1px solid ${GOLD_DIM}`,background:"rgba(255,255,255,.02)",overflow:"hidden",position:"relative"}}>
                <div style={{width:"100%",aspectRatio:"1/1",background:"linear-gradient(135deg,#0f0d08,#1c1808)",position:"relative"}}>
                  {m.img
                    ? <img src={m.img} alt={m.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                    : <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}><span style={{fontSize:"2rem",opacity:.3}}>👤</span></div>}
                  {mi===0 && <div style={{position:"absolute",top:8,right:8,padding:"2px 8px",background:GOLD,color:BG,fontSize:".5rem",letterSpacing:".28em",textTransform:"uppercase",fontWeight:700}}>Lead</div>}
                </div>
                <div style={{padding:"12px 14px"}}>
                  <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:"clamp(.92rem,2.5vw,1.02rem)",color:TEXT,marginBottom:2}}>{m.name}</div>
                  <div style={{fontSize:".62rem",letterSpacing:".28em",color:GOLD,textTransform:"uppercase"}}>{m.role}</div>
                  <div style={{fontSize:".58rem",letterSpacing:".22em",color:MUTED,textTransform:"uppercase",marginTop:2}}>{d.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

//Contests
function ContestsPage() {
  return (
    <InnerPage eyebrow="03 — Contests" headline={<>Where We <span style={{color:GOLD}}>Compete</span></>} sub="From regional circuits to international tracks, ZUURA takes on the best student engineering teams in the world.">
      <div style={{display:"flex",flexDirection:"column",gap:2,marginTop:16}}>
        {CONTESTS_DATA.map((c,i) => (
          <a key={i} href={c.url} target="_blank" rel="noopener noreferrer"
            style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"clamp(20px,4vw,36px) clamp(20px,5vw,44px)",border:`1px solid ${GOLD_DIM}`,background:"rgba(255,255,255,.02)",textDecoration:"none",transition:"all .25s",position:"relative",overflow:"hidden"}}
            onMouseEnter={e => { e.currentTarget.style.background="rgba(212,160,23,.06)"; e.currentTarget.style.borderColor=GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,.02)"; e.currentTarget.style.borderColor=GOLD_DIM; }}>
            <div>
              <div style={{fontSize:".62rem",letterSpacing:".4em",color:MUTED,textTransform:"uppercase",marginBottom:8}}>{c.type}</div>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1.5rem,5vw,2.9rem)",letterSpacing:".06em",color:TEXT,lineHeight:1}}>{c.name}</div>
            </div>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1rem,2vw,1.15rem)",letterSpacing:".2em",color:GOLD,flexShrink:0,marginLeft:16}}>VISIT ↗</span>
          </a>
        ))}
      </div>
    </InnerPage>
  );
}

//Flagship
function FlagshipPage() {
  const isMobile = useIsMobile();
  return (
    <InnerPage eyebrow="06 — Flagship" headline={<>Formulathon <span style={{color:GOLD}}></span></>} sub="Our defining annual challenge.">
      <div style={{border:`1px solid ${GOLD_DIM}`,padding:"clamp(24px,5vw,44px)",borderRadius:6,background:"rgba(212,160,23,.03)",marginBottom:36,maxWidth:860}}>
        <div style={{fontSize:".62rem",letterSpacing:".5em",color:GOLD,textTransform:"uppercase",marginBottom:8}}>Main Event · Annual</div>
        <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1.6rem,5vw,2.6rem)",marginBottom:10}}>VIT CHENNAI</h3>
        <p style={{fontSize:"clamp(.88rem,.95vw,.95rem)",color:MUTED,lineHeight:1.75}}>Formulathon is ZUURA's flagship competition.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(3,1fr)":"repeat(3,1fr)",border:`1px solid ${GOLD_DIM}`}}>
        {[["100+","Teams"],["2","Days"],["Top 40%","Best Finish"]].map(([v,l],i) => (
          <div key={i} style={{padding:"22px 16px",borderRight:i<2?`1px solid ${GOLD_DIM}`:"none",textAlign:"center"}}>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1.5rem,4vw,2.1rem)",color:GOLD,lineHeight:1}}>{v}</div>
            <div style={{fontSize:".6rem",letterSpacing:".28em",color:MUTED,textTransform:"uppercase",marginTop:4}}>{l}</div>
          </div>
        ))}
      </div>
    </InnerPage>
  );
}

//History
function HistoryPage() {
  const isMobile = useIsMobile();
  const items = [
    { year:"2013", title:"Team Founded",       desc:"A group of engineering students form ZUURA Racing." },
    { year:"2014", title:"ZFR-01 Built",        desc:"First car completed. FS-JAPAN — most cost efficient car." },
    { year:"2015", title:"FS-JAPAN & FDC",      desc:"ZFR-02 with improved documentation." },
    { year:"2016", title:"FS-ITALY",            desc:"ZFR-03: revamped powertrain, 20% lighter." },
    { year:"2017", title:"FSAE-AUSTRALASIA",    desc:"ZFR-04: first Indian team to clear technical inspection." },
    { year:"2018", title:"ZFR-05 & ZFR-06",     desc:"Multiple podiums at FSAE-AUSTRALASIA and FFS-INDIA." },
    { year:"2019", title:"FSAE-AUSTRALASIA",    desc:"ZFR-07: Special Appreciation Award, 13th rank." },
    { year:"2022", title:"FFS-INDIA",           desc:"ZFR-07: 2nd Design Evaluation, 5th overall." },
    { year:"2023", title:"Formula Imperial",    desc:"ZFR-08: 1st Business Plan, 3rd CVs, 7th overall." },
    { year:"2024", title:"Supra SAE & FMAE FFS INDIA", desc:"Secured 22nd rank in Supra SAE and 2nd rank in FMAE FFS INDIA." },
  ];

  if (isMobile) {
    return (
      <InnerPage eyebrow="07 — History" headline={<>Our <span style={{color:GOLD}}>Journey</span></>} sub="From a sketch on a whiteboard to the national stage.">
        <div style={{position:"relative",paddingLeft:32,marginTop:16}}>
          <div style={{position:"absolute",left:12,top:0,bottom:0,width:1,background:`linear-gradient(to bottom,transparent,${GOLD_MID},transparent)`}}/>
          {items.map((item,i) => (
            <div key={i} style={{position:"relative",marginBottom:28}}>
              <div style={{position:"absolute",left:-20,top:6,width:10,height:10,borderRadius:"50%",background:GOLD,border:`2px solid ${BG}`,boxShadow:`0 0 8px rgba(212,160,23,.7)`}}/>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.6rem",color:GOLD,lineHeight:1}}>{item.year}</div>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1rem",letterSpacing:".06em",marginBottom:4}}>{item.title}</div>
              <p style={{fontSize:".85rem",color:MUTED,lineHeight:1.6}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </InnerPage>
    );
  }

  return (
    <InnerPage eyebrow="07 — History" headline={<>Our <span style={{color:GOLD}}>Journey</span></>} sub="From a sketch on a whiteboard to the national stage.">
      <div style={{position:"relative",maxWidth:800,margin:"32px auto 0",padding:"0 16px"}}>
        <div style={{position:"absolute",left:"50%",top:0,bottom:0,width:1,background:`linear-gradient(to bottom,transparent,${GOLD_MID},transparent)`,transform:"translateX(-50%)"}}/>
        {items.map((item,i) => {
          const left = i%2===0;
          return (
            <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 20px 1fr",gap:20,alignItems:"center",marginBottom:36}}>
              {left ? (<>
                <div style={{textAlign:"right"}}><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"2.1rem",color:GOLD}}>{item.year}</div></div>
                <div style={{width:10,height:10,borderRadius:"50%",background:GOLD,border:`2px solid ${BG}`,boxShadow:`0 0 10px rgba(212,160,23,.7)`,justifySelf:"center"}}/>
                <div style={{background:"rgba(212,160,23,.03)",border:`1px solid ${GOLD_DIM}`,borderRadius:4,padding:"14px 18px"}}>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.05rem",letterSpacing:".06em",marginBottom:4}}>{item.title}</div>
                  <p style={{fontSize:".88rem",color:MUTED,lineHeight:1.6}}>{item.desc}</p>
                </div>
              </>) : (<>
                <div style={{background:"rgba(212,160,23,.03)",border:`1px solid ${GOLD_DIM}`,borderRadius:4,padding:"14px 18px",textAlign:"right"}}>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.05rem",letterSpacing:".06em",marginBottom:4}}>{item.title}</div>
                  <p style={{fontSize:".88rem",color:MUTED,lineHeight:1.6}}>{item.desc}</p>
                </div>
                <div style={{width:10,height:10,borderRadius:"50%",background:GOLD,border:`2px solid ${BG}`,boxShadow:`0 0 10px rgba(212,160,23,.7)`,justifySelf:"center"}}/>
                <div style={{textAlign:"left"}}><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"2.1rem",color:GOLD}}>{item.year}</div></div>
              </>)}
            </div>
          );
        })}
      </div>
    </InnerPage>
  );
}

//News/
function NewsPage() {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const cats = ["All",...[...new Set(NEWS_ITEMS.map(n => n.category))]];
  const filtered = filter==="All" ? NEWS_ITEMS : NEWS_ITEMS.filter(n => n.category===filter);

  if (selected) {
    const n = NEWS_ITEMS.find(x => x.id===selected);
    return (
      <div style={{position:"relative",zIndex:1,padding:"90px 5vw 70px",maxWidth:860,margin:"0 auto"}}>
        <button onClick={() => setSelected(null)} style={{display:"flex",alignItems:"center",gap:8,background:"transparent",border:"none",color:GOLD,fontSize:".78rem",letterSpacing:".3em",textTransform:"uppercase",cursor:"pointer",marginBottom:32,padding:0}}>← Back to News</button>
        <div style={{fontSize:".62rem",letterSpacing:".5em",color:GOLD,textTransform:"uppercase",marginBottom:10,display:"flex",alignItems:"center",gap:10}}>
          <span style={{padding:"3px 10px",background:GOLD_DIM,color:GOLD}}>{n.category}</span>
          <span style={{color:MUTED}}>{n.date}</span>
        </div>
        <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1.9rem,6vw,3.6rem)",lineHeight:1,marginBottom:20}}>{n.title}</h1>
        <div style={{width:48,height:2,background:GOLD,marginBottom:24}}/>
        <p style={{fontSize:"clamp(.95rem,1.05vw,1.05rem)",color:TEXT,lineHeight:1.85,marginBottom:20}}>{n.summary}</p>
        <p style={{fontSize:"clamp(.88rem,.95vw,.95rem)",color:MUTED,lineHeight:1.85}}>{n.detail}</p>
      </div>
    );
  }

  return (
    <InnerPage eyebrow="08 — News" headline={<>Latest <span style={{color:GOLD}}>Updates</span></>} sub="Announcements, results, recruitment drives and everything happening at ZUURA Racing.">
      <div style={{display:"flex",flexWrap:isMobile?"nowrap":"wrap",gap:6,marginBottom:28,overflowX:isMobile?"auto":"visible",paddingBottom:isMobile?4:0}}>
        {cats.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} style={{padding:"8px 16px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:600,fontSize:".85rem",letterSpacing:".12em",textTransform:"uppercase",background:filter===cat?GOLD:"transparent",color:filter===cat?BG:MUTED,border:`1px solid ${filter===cat?GOLD:GOLD_DIM}`,cursor:"pointer",transition:"all .25s",flexShrink:0,whiteSpace:"nowrap"}}>{cat}</button>
        ))}
      </div>

      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(auto-fill,minmax(320px,1fr))",gap:12}}>
        {filtered.map(n => (
          <button key={n.id} onClick={() => setSelected(n.id)} style={{border:`1px solid ${GOLD_DIM}`,background:"rgba(255,255,255,.02)",padding:0,cursor:"pointer",textAlign:"left",outline:"none",display:"flex",flexDirection:"column"}}>
            <div style={{padding:"12px 16px",background:"rgba(212,160,23,.05)",borderBottom:`1px solid ${GOLD_DIM}`,display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:"1.5rem"}}>{n.icon}</span>
              <div>
                <div style={{fontSize:".56rem",letterSpacing:".4em",color:GOLD,textTransform:"uppercase"}}>{n.category}</div>
                <div style={{fontSize:".56rem",letterSpacing:".28em",color:MUTED,textTransform:"uppercase"}}>{n.date}</div>
              </div>
              <span style={{marginLeft:"auto",padding:"2px 8px",fontSize:".52rem",letterSpacing:".32em",textTransform:"uppercase",color:n.tagColor,border:`1px solid ${n.tagColor}`,opacity:.85,flexShrink:0}}>{n.tag}</span>
            </div>
            <div style={{padding:"16px 18px 20px",flex:1,display:"flex",flexDirection:"column"}}>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1.05rem,3vw,1.25rem)",letterSpacing:".05em",marginBottom:8,lineHeight:1.15}}>{n.title}</div>
              <p style={{fontSize:"clamp(.82rem,.88vw,.88rem)",color:MUTED,lineHeight:1.65,flex:1}}>{n.summary}</p>
              <div style={{marginTop:12,fontSize:".62rem",letterSpacing:".28em",color:GOLD,textTransform:"uppercase"}}>Read More →</div>
            </div>
          </button>
        ))}
      </div>
    </InnerPage>
  );
}

//Sponsors
function SponsorsPage() {
  const isMobile = useIsMobile();
  return (
    <div style={{position:"relative",zIndex:1,padding:"90px 5vw 0",maxWidth:1400,margin:"0 auto"}}>
      <Eyebrow>09 — Sponsors</Eyebrow>
      <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.2rem,7vw,4.8rem)",lineHeight:.95,margin:"10px 0 16px"}}>Our <span style={{color:GOLD}}>Partners</span></h2>
      <p style={{color:MUTED,fontSize:"clamp(.9rem,1vw,1rem)",lineHeight:1.75,maxWidth:660,marginBottom:48}}>ZUURA Racing exists because of the extraordinary support of our sponsors.</p>

      {TIER_ORDER.map(tier => {
        const tc = TIER_CONFIG[tier];
        const group = SPONSORS_DATA.filter(s => s.tier===tier);
        const cols = isMobile ? (tier==="Title"?1:2) : (tier==="Title"?2:tier==="Premier"?3:tier==="Official"?3:tier==="Supporting"?4:2);
        return (
          <div key={tier} style={{marginBottom:56}}>
            <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:24}}>
              <div style={{flex:1,height:1,background:`linear-gradient(to right,${tc.accent},transparent)`}}/>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.05rem",letterSpacing:".28em",color:tc.accent,textTransform:"uppercase",whiteSpace:"nowrap",padding:"0 6px"}}>{tc.label}</div>
              <div style={{flex:1,height:1,background:`linear-gradient(to left,${tc.accent},transparent)`}}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:`repeat(${cols},1fr)`,gap:12}}>
              {group.map((sp,i) => (
                <a key={i} href={sp.url} target="_blank" rel="noopener noreferrer"
                  style={{display:"flex",flexDirection:"column",border:`1px solid rgba(212,160,23,.15)`,background:"rgba(255,255,255,.02)",overflow:"hidden",textDecoration:"none",transition:"all .3s",position:"relative"}}>
                  <div style={{height:2,background:`linear-gradient(to right,${sp.color},${sp.color}55,transparent)`}}/>
                  <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px 16px",minHeight:isMobile?80:tc.cardH,background:"linear-gradient(135deg,rgba(255,255,255,.02),rgba(255,255,255,.005))"}}>
                    {sp.img
                      ? <img src={sp.img} alt={sp.name} style={{maxHeight:isMobile?44:60,maxWidth:"100%",objectFit:"contain",filter:`drop-shadow(0 0 10px ${sp.color}55)`}}/>
                      : <div style={{textAlign:"center",fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.15rem",color:sp.color}}>{sp.name}</div>}
                  </div>
                  <div style={{borderTop:`1px solid rgba(212,160,23,.1)`,padding:"10px 14px",background:"rgba(8,7,6,.6)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div>
                      <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:"clamp(.85rem,.92vw,.92rem)",color:TEXT,lineHeight:1.2}}>{sp.name}</div>
                      {sp.tagline && <div style={{fontSize:".58rem",letterSpacing:".22em",color:MUTED,textTransform:"uppercase",marginTop:2}}>{sp.tagline}</div>}
                    </div>
                    <div style={{fontSize:".75rem",color:sp.color,opacity:.7}}>↗</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}

      <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(3,1fr)":"repeat(6,1fr)",border:`1px solid ${GOLD_DIM}`,marginBottom:60}}>
        {[["19","Total"],["1","Title"],["4","Premier"],["6","Official"],["5","Supporting"],["3","Knowledge"]].map(([v,l],i) => (
          <div key={i} style={{padding:"18px 10px",borderRight:i<5?`1px solid ${GOLD_DIM}`:"none",borderBottom:isMobile&&i<3?`1px solid ${GOLD_DIM}`:"none",textAlign:"center"}}>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.7rem",color:GOLD,lineHeight:1}}>{v}</div>
            <div style={{fontSize:".56rem",letterSpacing:".25em",color:MUTED,textTransform:"uppercase",marginTop:3}}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{position:"relative",padding:"clamp(32px,6vw,60px)",marginBottom:0,background:"linear-gradient(135deg,rgba(212,160,23,.06),rgba(212,160,23,.02),rgba(212,160,23,.06))",border:`1px solid ${GOLD_DIM}`,overflow:"hidden"}}>
        <div style={{position:"relative",zIndex:1,textAlign:"center",maxWidth:800,margin:"0 auto"}}>
          <img src={LOGO_IMG} alt="ZUURA" style={{width:60,height:60,objectFit:"contain",filter:"drop-shadow(0 0 20px rgba(212,160,23,.7))",marginBottom:20}}/>
          <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1.7rem,5vw,3.6rem)",letterSpacing:".06em",lineHeight:.95,marginBottom:24}}>Thank You To Our <span style={{color:GOLD}}>Supporters</span></h3>
          <p style={{fontSize:"clamp(.88rem,.95vw,.95rem)",color:MUTED,lineHeight:1.85}}>Every lap we run, every component we design — none of it would be possible without our partners. You are part of the ZUURA family.</p>
          <div style={{marginTop:32,display:"flex",flexDirection:"column",alignItems:"center",gap:8}}>
            <div style={{width:1,height:32,background:`linear-gradient(to bottom,${GOLD},transparent)`}}/>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.25rem",letterSpacing:".25em",color:GOLD}}>ZUURA Racing</div>
            <div style={{fontSize:".62rem",letterSpacing:".4em",color:MUTED,textTransform:"uppercase"}}>Est. 2013</div>
          </div>
        </div>
      </div>
    </div>
  );
}

//Contact
function ContactPage() {
  const isMobile = useIsMobile();
  const [form, setForm] = useState({name:"",email:"",phone:"",org:"",subject:"",role:"",message:""});
  const [sent, setSent] = useState(false);
  const handle = e => setForm(f => ({...f,[e.target.name]:e.target.value}));
  const submit = () => { setSent(true); setTimeout(() => setSent(false),3500); };
  const inp = {background:"rgba(255,255,255,.04)",border:`1px solid ${GOLD_DIM}`,padding:"12px 16px",color:TEXT,fontFamily:"'Rajdhani',sans-serif",fontSize:"clamp(.88rem,.95vw,.95rem)",outline:"none",width:"100%",boxSizing:"border-box",transition:"border-color .25s"};

  return (
    <div style={{position:"relative",zIndex:1,padding:"90px 5vw 70px",maxWidth:1400,margin:"0 auto"}}>
      <Eyebrow>10 — Contact</Eyebrow>
      <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.2rem,7vw,4.8rem)",lineHeight:.95,margin:"10px 0 36px"}}>Get In <span style={{color:GOLD}}>Touch</span></h2>

      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:1,marginBottom:36}}>
        {[
          {icon:"📧",label:"Email Us",     val:"admin@zuuraracing.com", sub:""},
          {icon:"📍",label:"Find Us",      val:"VIT, Chennai",          sub:"Open Mon–Sat, 9AM–8PM"},
          {icon:"📱",label:"Social Media", val:"",                      sub:"Instagram · LinkedIn · YouTube"},
        ].map(({icon,label,val,sub},i) => (
          <div key={i} style={{padding:"24px 24px",border:`1px solid ${GOLD_DIM}`,background:"rgba(255,255,255,.02)",display:"flex",flexDirection:"column",gap:8}}>
            <span style={{fontSize:"1.7rem"}}>{icon}</span>
            <div style={{fontSize:".62rem",letterSpacing:".42em",color:GOLD,textTransform:"uppercase"}}>{label}</div>
            <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:"clamp(.92rem,1.05vw,1rem)",color:TEXT}}>{val}</div>
            <div style={{fontSize:".82rem",color:MUTED}}>{sub}</div>
            {label==="Social Media" && (
              <div style={{display:"flex",gap:12,marginTop:4}}>
                <a href="https://www.instagram.com/zuuraformularacing/" target="_blank" rel="noopener noreferrer"><img src={ig} alt="Instagram" style={{width:30}}/></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={li} alt="LinkedIn"  style={{width:30}}/></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src={yt} alt="YouTube"   style={{width:30}}/></a>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1.5fr 1fr",gap:32,alignItems:"start"}}>
        <div style={{border:`1px solid ${GOLD_DIM}`,padding:"clamp(24px,5vw,40px)",background:"rgba(255,255,255,.015)"}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1.4rem,3vw,1.6rem)",letterSpacing:".1em",marginBottom:6}}>Send Us A Message</div>
          <p style={{fontSize:"clamp(.85rem,.9vw,.88rem)",color:MUTED,marginBottom:24,lineHeight:1.6}}>Whether joining, sponsoring or collaborating — we'll get back to you.</p>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:10,marginBottom:10}}>
            <input name="name"  value={form.name}  onChange={handle} placeholder="Full Name *"      style={inp}/>
            <input name="email" value={form.email} onChange={handle} placeholder="Email Address *"  style={inp}/>
            <input name="phone" value={form.phone} onChange={handle} placeholder="Phone Number"     style={inp}/>
            <input name="org"   value={form.org}   onChange={handle} placeholder="Organisation"     style={inp}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:10,marginBottom:10}}>
            <select name="subject" value={form.subject} onChange={handle} style={{...inp,appearance:"none"}}>
              <option value="">Subject *</option><option>Join The Team</option><option>Sponsorship Inquiry</option><option>Media / Press</option><option>General Inquiry</option>
            </select>
            <select name="role" value={form.role} onChange={handle} style={{...inp,appearance:"none"}}>
              <option value="">Department Interest</option>
              {DEPARTMENTS.map(d => <option key={d.id}>{d.name}</option>)}
            </select>
          </div>
          <textarea name="message" value={form.message} onChange={handle} placeholder="Your Message *" rows={5} style={{...inp,resize:"vertical",marginBottom:14}}/>
          <button onClick={submit} style={{width:"100%",padding:14,background:sent?"#2a8a3e":GOLD,color:BG,fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:"clamp(.88rem,.95vw,.95rem)",letterSpacing:".2em",textTransform:"uppercase",border:"none",cursor:"pointer",transition:"background .3s"}}>
            {sent ? "✓ Message Sent!" : "Send Message →"}
          </button>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:20}}>
          <div style={{border:`1px solid ${GOLD_DIM}`,padding:"24px 24px",background:"rgba(212,160,23,.03)",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:12}}>
            <img src={LOGO_IMG} alt="ZUURA" style={{width:64,height:64,objectFit:"contain",filter:"drop-shadow(0 0 20px rgba(212,160,23,.8))"}}/>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.6rem",letterSpacing:".15em"}}>ZUURA <span style={{color:GOLD}}>RACING</span></div>
            <p style={{fontSize:".88rem",color:MUTED,lineHeight:1.7}}>"We don't just build cars. We build engineers."</p>
          </div>
          <div style={{border:`1px solid ${GOLD_DIM}`,padding:"22px 24px",background:"rgba(255,255,255,.015)"}}>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.15rem",letterSpacing:".1em",marginBottom:16,color:GOLD}}>FAQ</div>
            {[
              ["When can I join?","Applications open each February and August."],
              ["Do I need experience?","No! Drive to learn is what matters."],
              ["How much time?","~8–15 hours/week during build season."],
              ["Can companies sponsor?","Yes — contact us with 'Sponsorship Inquiry'."],
            ].map(([q,a],i) => (
              <div key={i} style={{paddingBottom:12,marginBottom:12,borderBottom:i<3?`1px solid ${GOLD_DIM}`:"none"}}>
                <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:"clamp(.88rem,.95vw,.92rem)",color:TEXT,marginBottom:3}}>{q}</div>
                <p style={{fontSize:"clamp(.8rem,.85vw,.84rem)",color:MUTED,lineHeight:1.6}}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

//Footer
function Footer({ setActivePage }) {
  const isMobile = useIsMobile();
  const NAV_GROUPS = [
    { title:"Navigate", links:[{label:"Home",page:"home"},{label:"Cars",page:"cars"},{label:"Departments",page:"departments"},{label:"Team",page:"team"}] },
    { title:"Compete",  links:[{label:"Contests",page:"contests"},{label:"Flagship",page:"flagship"},{label:"History",page:"history"},{label:"News",page:"news"}] },
    { title:"Connect",  links:[{label:"Join Team",page:"contact"},{label:"Sponsor Us",page:"sponsors"},{label:"Press",page:"contact"},{label:"Partnerships",page:"contact"}] },
  ];
  return (
    <footer style={{position:"relative",zIndex:1}}>
      <SponsorStrip/>
      <div style={{borderTop:`1px solid ${GOLD_DIM}`,padding:"48px 5vw 28px"}}>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1.4fr 1fr 1fr 1fr",gap:isMobile?32:40,marginBottom:40}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
              <img src={LOGO_IMG} alt="ZUURA" style={{width:34,height:34,objectFit:"contain",filter:"drop-shadow(0 0 8px rgba(212,160,23,.6))"}}/>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.4rem",letterSpacing:".2em"}}>ZUURA <span style={{color:GOLD}}>RACING</span></div>
            </div>
            <p style={{fontSize:"clamp(.82rem,.88vw,.86rem)",color:MUTED,lineHeight:1.6,marginBottom:16,maxWidth:280}}>Student-run formula racing team. Engineering excellence — on and off the track.</p>
            <div style={{display:"flex",gap:10}}>
              <a href="https://www.instagram.com/zuuraformularacing/" target="_blank" rel="noopener noreferrer"><img src={ig} alt="Instagram" style={{width:28}}/></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={li} alt="LinkedIn"  style={{width:28}}/></a>
              <a href="https://www.youtube.com/"  target="_blank" rel="noopener noreferrer"><img src={yt} alt="YouTube"  style={{width:28}}/></a>
            </div>
          </div>
          {!isMobile && NAV_GROUPS.map(({title,links}) => (
            <div key={title}>
              <div style={{fontSize:".62rem",letterSpacing:".42em",color:GOLD,textTransform:"uppercase",marginBottom:14}}>{title}</div>
              <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:8}}>
                {links.map(({label,page}) => (
                  <li key={label}><button onClick={() => setActivePage(page)} style={{background:"none",border:"none",padding:0,fontSize:".86rem",color:MUTED,cursor:"pointer",textAlign:"left"}} onMouseEnter={e=>e.currentTarget.style.color=GOLD} onMouseLeave={e=>e.currentTarget.style.color=MUTED}>{label}</button></li>
                ))}
              </ul>
            </div>
          ))}
          {isMobile && (
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}}>
              {NAV_GROUPS.map(({title,links}) => (
                <div key={title}>
                  <div style={{fontSize:".58rem",letterSpacing:".38em",color:GOLD,textTransform:"uppercase",marginBottom:10}}>{title}</div>
                  <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:7}}>
                    {links.map(({label,page}) => (
                      <li key={label}><button onClick={() => setActivePage(page)} style={{background:"none",border:"none",padding:0,fontSize:".84rem",color:MUTED,cursor:"pointer",textAlign:"left"}}>{label}</button></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:12,paddingTop:20,borderTop:`1px solid ${GOLD_DIM}`}}>
          <span style={{fontSize:".72rem",color:"rgba(232,224,208,.25)"}}>by Srishtee Gupta; © ZUURA Racing. All rights reserved.</span>
          <div style={{display:"flex",gap:20}}>
            {["Privacy","Terms","Media"].map(l => <button key={l} onClick={() => setActivePage("contact")} style={{background:"none",border:"none",fontSize:".72rem",color:"rgba(232,224,208,.25)",cursor:"pointer",padding:0}}>{l}</button>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

//CSS
const STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@300;400;500;600;700&family=Barlow+Condensed:wght@300;600;700&display=swap');
  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { background:#080706; }
  @media (hover:hover) { a, button { cursor:none!important; } }

  @keyframes logoPop {
    0%   { transform:scale(.05) rotate(-20deg); opacity:0; filter:brightness(4) blur(24px); }
    45%  { transform:scale(1.22) rotate(4deg);  opacity:1; filter:brightness(2.5) blur(0); }
    65%  { transform:scale(.92) rotate(-2deg);  filter:brightness(1.3); }
    80%  { transform:scale(1.05) rotate(1deg); }
    92%  { transform:scale(.98) rotate(0); }
    100% { transform:scale(1) rotate(0); opacity:1; filter:brightness(1); }
  }
  @keyframes logoFloat {
    0%,100% { transform:translateY(0); }
    50%      { transform:translateY(-10px); }
  }
  @keyframes ringPulse {
    0%   { transform:scale(.85); opacity:.9; }
    100% { transform:scale(1.6);  opacity:0; }
  }
  @keyframes glowPulse {
    0%,100% { opacity:.7; }
    50%      { opacity:1; }
  }
  @keyframes scrollPulse {
    0%,100% { opacity:.3; }
    50%      { opacity:1; }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(14px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes sponsorScroll {
    0%   { transform:translateX(0); }
    100% { transform:translateX(-33.333%); }
  }

  ::-webkit-scrollbar { width:4px; height:4px; }
  ::-webkit-scrollbar-track { background:transparent; }
  ::-webkit-scrollbar-thumb { background:rgba(212,160,23,.3); border-radius:2px; }
`;

//APP ROOT
export default function ZuuraRacingApp() {
  const isMobile = useIsMobile();
  const [activePage,    setActivePage]    = useState("home");
  const [teamDept,      setTeamDept]      = useState(null);
  const [highlightCar,  setHighlightCar]  = useState(null);

  const go = page => {
    setActivePage(page);
    window.scrollTo({ top:0, behavior:"smooth" });
    if (page !== "cars") setHighlightCar(null);
  };

  return (<>
    <style>{STYLE}</style>
    <GoldCursor isMobile={isMobile}/>
    <div style={{minHeight:"100vh",background:BG,color:TEXT,fontFamily:"'Rajdhani',sans-serif",overflowX:"hidden"}}>
      <RoadCanvas/>
      <Nav activePage={activePage} setActivePage={go}/>
      <div style={{position:"relative",zIndex:1}}>
        {activePage==="home"        && <HomePage       setActivePage={go}/>}
        {activePage==="cars"        && <CarsPage        highlightCar={highlightCar}/>}
        {activePage==="departments" && <DepartmentsPage setActivePage={go} setTeamDept={setTeamDept}/>}
        {activePage==="team"        && <TeamPage        activeDept={teamDept} setActiveDept={setTeamDept}/>}
        {activePage==="contests"    && <ContestsPage/>}
        {activePage==="flagship"    && <FlagshipPage/>}
        {activePage==="history"     && <HistoryPage/>}
        {activePage==="news"        && <NewsPage/>}
        {activePage==="sponsors"    && <SponsorsPage/>}
        {activePage==="contact"     && <ContactPage/>}
      </div>
      <Footer setActivePage={go}/>
    </div>
  </>);
}
