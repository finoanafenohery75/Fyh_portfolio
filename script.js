:root{
  --blue: #185fa5;
  --blue-dark: #0F4278;
  --blue-light: #EAF2FB;
  --bg: #ffffff;
  --bg-alt: #F4F8FC;
  --text: #16202B;
  --muted: #5C6B7C;
  --border: #E1E9F1;
  --shadow: 0 12px 32px rgba(15, 66, 120, 0.08);
}

* { margin:0; padding:0; box-sizing:border-box; }

html{ scroll-behavior:smooth; }

body{
  font-family:'Manrope', sans-serif;
  color:var(--text);
  background:var(--bg);
  line-height:1.6;
}

h1,h2,h3{ font-family:'Space Grotesk', sans-serif; color:var(--text); }
a{ text-decoration:none; }
ul{ list-style:none; }

/* ---------- Reveal animation ---------- */
.reveal{ opacity:0; transform:translateY(22px); transition:opacity .7s ease, transform .7s ease; }
.reveal.show{ opacity:1; transform:none; }

/* ---------- Navbar ---------- */
.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:16px 8%;
  position:sticky;
  top:0;
  background:rgba(255,255,255,0.95);
  backdrop-filter:blur(8px);
  border-bottom:1px solid var(--border);
  z-index:200;
}
.logo{ font-family:'Space Grotesk', sans-serif; font-size:21px; font-weight:700; }
.logo span{ color:var(--blue); }
.nav-links{ display:flex; gap:34px; }
.nav-link{
  color:var(--muted); font-weight:600; font-size:14.5px; position:relative; padding:6px 0; transition:color .2s;
}
.nav-link::after{
  content:''; position:absolute; left:0; bottom:0; width:0; height:2px; background:var(--blue); transition:width .25s;
}
.nav-link:hover{ color:var(--blue); }
.nav-link.active{ color:var(--blue); }
.nav-link.active::after{ width:100%; }

.burger{ display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:6px; }
.burger span{ width:24px; height:2px; background:var(--text); border-radius:2px; }

@media (max-width:760px){
  .burger{ display:flex; }
  .nav-links{
    position:fixed; top:64px; right:0; height:calc(100vh - 64px); width:220px;
    background:#fff; flex-direction:column; gap:0; padding:20px 0;
    box-shadow:-8px 0 24px rgba(0,0,0,.08);
    transform:translateX(100%); transition:transform .3s ease;
  }
  .nav-links.open{ transform:translateX(0); }
  .nav-links li{ width:100%; }
  .nav-link{ display:block; padding:14px 28px; }
  .nav-link::after{ display:none; }
}

/* ---------- Hero ---------- */
.hero{
  background:linear-gradient(180deg, var(--blue-light) 0%, #ffffff 100%);
  padding:90px 20px 100px;
  text-align:center;
}
.hero-inner{ max-width:640px; margin:0 auto; }
.avatar{
  width:190px; height:190px;
  border-radius:50%;
  object-fit:cover;
  border:6px solid #ffffff;
  box-shadow:0 0 0 4px var(--blue), var(--shadow);
  margin-bottom:26px;
}
.hero h1{ font-size:32px; font-weight:700; }
.hero .role{ color:var(--blue); font-weight:600; font-size:15.5px; margin-top:8px; }
.hero .bio{ color:var(--muted); font-size:15.5px; margin-top:20px; }
.hero-actions{ display:flex; gap:14px; justify-content:center; margin-top:32px; flex-wrap:wrap; }

.btn{
  display:inline-block;
  font-weight:700;
  font-size:14px;
  padding:14px 30px;
  border-radius:9px;
  transition:transform .2s, box-shadow .2s, opacity .2s;
}
.btn-primary{ background:var(--blue); color:#fff; box-shadow:0 10px 22px rgba(24,95,165,.28); }
.btn-primary:hover{ transform:translateY(-2px); box-shadow:0 14px 28px rgba(24,95,165,.35); }
.btn-outline{ border:1.5px solid var(--blue); color:var(--blue); background:#fff; }
.btn-outline:hover{ background:var(--blue-light); }

/* ---------- Sections ---------- */
.section{ padding:90px 8%; max-width:1040px; margin:0 auto; }
.section.alt{ background:var(--bg-alt); max-width:100%; padding:90px 0; }
.section-inner{ max-width:1040px; margin:0 auto; padding:0 8%; }

.eyebrow{
  text-align:center; color:var(--blue); font-weight:700; font-size:12.5px;
  letter-spacing:.12em; text-transform:uppercase; margin-bottom:10px;
}
.section h2{ text-align:center; font-size:30px; font-weight:700; margin-bottom:48px; }

/* ---------- Compétences ---------- */
.comp-grid{
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  gap:24px;
}
@media (max-width:700px){ .comp-grid{ grid-template-columns:1fr; } }

.comp-card{
  background:#fff;
  border:1px solid var(--border);
  border-radius:16px;
  padding:28px 26px;
  box-shadow:var(--shadow);
  transition:transform .25s, box-shadow .25s;
}
.comp-card:hover{ transform:translateY(-5px); box-shadow:0 18px 40px rgba(15,66,120,.14); }

.comp-icon{
  width:46px; height:46px;
  background:var(--blue-light);
  color:var(--blue);
  border-radius:12px;
  display:flex; align-items:center; justify-content:center;
  font-size:18px; font-weight:700;
  margin-bottom:16px;
}
.comp-card h3{ font-size:16px; font-weight:700; margin-bottom:14px; }

.chips{ display:flex; flex-wrap:wrap; gap:8px; }
.chips span{
  background:var(--blue-light);
  color:var(--blue-dark);
  font-size:13px;
  font-weight:600;
  padding:7px 13px;
  border-radius:20px;
  border:1px solid #DCE9F7;
}

/* ---------- Expérience (timeline) ---------- */
.timeline{ display:flex; flex-direction:column; gap:0; }
.tl-item{
  display:grid; grid-template-columns:90px 1fr; gap:24px;
  padding:26px 0; border-bottom:1px solid var(--border);
}
.tl-item:last-child{ border-bottom:none; }
@media (max-width:560px){ .tl-item{ grid-template-columns:1fr; gap:8px; } }

.tl-year{
  font-size:26px; font-weight:700; color:var(--blue);
}
.tl-content h3{ font-size:17px; font-weight:700; margin-bottom:6px; }
.tl-place{ color:var(--muted); font-size:13px; margin-bottom:12px; font-weight:600; }
.tl-content ul{ display:flex; flex-direction:column; gap:7px; }
.tl-content li{
  font-size:14.5px; color:var(--muted); padding-left:18px; position:relative;
}
.tl-content li::before{ content:'▸'; position:absolute; left:0; color:var(--blue); }

/* ---------- Contact ---------- */
.contact-section{ text-align:center; }
.contact-text{ color:var(--muted); font-size:15.5px; margin-bottom:28px; }

/* ---------- Footer ---------- */
footer{
  text-align:center;
  padding:28px;
  color:var(--muted);
  font-size:13px;
  border-top:1px solid var(--border);
}

/* ---------- Back to top ---------- */
.to-top{
  position:fixed; right:24px; bottom:24px;
  width:44px; height:44px; border-radius:50%;
  background:var(--blue); color:#fff; border:none;
  font-size:18px; cursor:pointer;
  box-shadow:0 10px 24px rgba(24,95,165,.35);
  opacity:0; pointer-events:none; transform:translateY(10px);
  transition:opacity .3s, transform .3s;
  z-index:150;
}
.to-top.show{ opacity:1; pointer-events:auto; transform:none; }
