'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'1rem'}}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <div style={{height:32,width:32,borderRadius:12,background:'linear-gradient(135deg,#38bdf8,#6366f1)'}}/>
          <span style={{fontWeight:600}}>Cloud Tek Computing LLC</span>
        </div>
        <div className="text-muted" style={{fontSize:'14px'}}>© {new Date().getFullYear()} Cloud Tek Computing LLC. All rights reserved.</div>
      </div>
    </footer>
  );
}
