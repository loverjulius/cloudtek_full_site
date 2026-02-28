// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, BadgeCheck } from "lucide-react";
import styles from "./HomePage.module.css";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function Page() {
  const prefersReduced = useReducedMotion();

  // ✨ Put 1–5 images here (recommended: 3)
  // Make sure these exist in /public/images/
  const heroImages = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Rotate every 6s (disabled for reduced-motion)
  useEffect(() => {
    if (prefersReduced || heroImages.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(t);
  }, [prefersReduced, heroImages.length]);

  // ✅ Typed variants (removes squiggly underlines)
  const fadeVariant: Variants = {
    hidden: { opacity: 0 },
    show:   { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
    exit:   { opacity: 0, transition: { duration: 1.2, ease: "easeIn" } },
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    show:   { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.12 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main>
      <section id="home" className={styles.hero} aria-label="Cloud Tek Computing hero">
        {/* Rotating backgrounds */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={styles.heroBgWrapper}
            variants={fadeVariant}
            initial="hidden"
            animate="show"
            exit="exit"
            aria-hidden
          >
            <Image
              src={heroImages[index]}
              alt=""
              fill
              priority
              sizes="100vw"
              className={styles.heroBg}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay (improves legibility) */}
        <div className={styles.overlay} aria-hidden />

        {/* Foreground content */}
        <motion.div
          className={styles.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={container}
        >
          <motion.span className={styles.badge} variants={fadeUp}>
            <BadgeCheck size={16} />
            <span>Virginia-based, Woman Operated Small Business</span>
          </motion.span>

          <motion.h1 className={styles.headline} variants={fadeUp}>
            Modernize with confidence.<br /> Deliver secure, compliant, mission-aligned IT solutions.
          </motion.h1>
          {/*

          <motion.p className={styles.heroText} variants={fadeUp}>
            Cloud Tek Computing helps U.S. federal programs—especially revenue and public-facing missions—
            transition from legacy platforms to secure, cloud-native architectures. We pair decades of enterprise
            production-support expertise with modern AWS engineering to ensure resilient, high-performing systems that scale.
          </motion.p>
          */}

          <motion.div className={styles.ctaRow} variants={fadeUp}>
            <Link href="/contact" className="btn btn-primary" aria-label="Start a conversation with Cloud Tek">
              Start a conversation
            </Link>
            <Link href="/services" className="btn btn-primary" aria-label="Explore Cloud Tek services">
              Explore services
            </Link>
          </motion.div>

          
        </motion.div>
      </section>


      {/* === Why Cloud Tek (Credibility) === 
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Cloud Tek</h2>
          <div className={styles.statsRow}>
            {[
              {h:"19+ years",p:"Supporting federal mission systems"},
              {h:"99.9%+",p:"Filing-season uptime track record"},
              {h:"WOSB",p:"Woman-Owned Small Business"},
              {h:"AWS",p:"Cloud-native expertise"},
            ].map(s => (
              <div className={styles.stat} key={s.h}>
                <div className={styles.statH}>{s.h}</div>
                <div className={styles.statP}>{s.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

          {/* === Services Pillars === 
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <div className={styles.cards3}>
            {[
              {title: "Legacy Modernization", desc: "..", items: [".."]},
              {title: "Cloud-Native Platforms", desc: "Resilient, scalable foundations.", items: [".."]},
              {title: "Data & Streaming", desc: "Real-time pipelines for analytics and mission decisions.", items: [".."]},
              {title: "Governance & Compliance", desc: "Audit-ready delivery agency standards.", items: [".."]},
            ].map(card => (
              <div key={card.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
                <ul className={styles.cardList}>
                  {card.items.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>  */}

      

      {/* === Final CTA Band === 
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.ctaHeadline}>Ready to modernize your mission-critical systems?</h2>
          <div className={styles.ctaRow}>
            <a href="/contact" className="btn btn-primary">Schedule a consultation</a>
            <a href="/services" className="btn btn-primary">View services</a>
          </div>
        </div>
      </section>*/}

    </main>
  );
}
