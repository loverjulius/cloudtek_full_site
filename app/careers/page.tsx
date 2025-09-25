// ---------- app/careers/page.tsx ----------
import styles from "./CareersPage.module.css";


export default function CareersPage() {
return (
<main className={styles.root}>
<section className={styles.hero}>
<div className={`${styles.container} ${styles.center}`}>
<p className={styles.eyebrow}>Careers at Cloud Tek Computing</p>
<h1 className={styles.headline}>
Discover your future at Cloud Tek Computing — where innovation meets opportunity.
</h1>
<p className={styles.lede}>
At <strong>Cloud Tek Computing</strong>, we are dedicated to building an inclusive and empowering workplace. As an
<strong> equal opportunity employer</strong>, we welcome applicants from all backgrounds.
</p>
<p className={styles.lede}>
Here, you’ll find <strong>limitless opportunities for growth, career advancement,</strong> and professional development at every
stage of your journey.
</p>
<p className={styles.lede}>
Join our team and work alongside some of the <strong>brightest innovators in the industry</strong> — together, we’ll shape the
future of technology and deliver meaningful impact.
</p>


<div className={styles.ctaRow}>
<a
className={`${styles.btn} ${styles.btnPrimary}`}
href="https://www.linkedin.com/company/cloud-tek-computing"
target="_blank"
rel="noopener noreferrer"
>
Apply Now
</a>
<a className={`${styles.btn} ${styles.btnGhost}`} href="#benefits">Explore Benefits</a>
</div>
</div>
</section>


<section id="benefits" className={styles.section}>
<div className={styles.container}>
<h2 className={styles.sectionTitle}>Benefits</h2>
<ul className={styles.cardGrid}>
<li className={styles.card}>
<h3 className={styles.cardTitle}>Paid Time Off (PTO)</h3>
<p className={styles.cardBody}>Receive a competitive PTO package aligned with industry standards.</p>
</li>
<li className={styles.card}>
<h3 className={styles.cardTitle}>Birthday Off</h3>
<p className={styles.cardBody}>Enjoy a paid day off to celebrate your special day.</p>
</li>
<li className={styles.card}>
<h3 className={styles.cardTitle}>Paid Federal Holidays</h3>
<p className={styles.cardBody}>All standard federal holidays observed with pay.</p>
</li>
<li className={styles.card}>
<h3 className={styles.cardTitle}>Paid Training & Certifications</h3>
<p className={styles.cardBody}>
Advance your career with company-sponsored training and certifications <span className={styles.muted}>(eligibility requirements apply)</span>.
</p>
</li>
</ul>
</div>
</section>
</main>
);
}
