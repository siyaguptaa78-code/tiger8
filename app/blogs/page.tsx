import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "IPL Orange Cap & Purple Cap Winners (2008–2026) | Tiger365 Blogs",
  description: "Stay updated with the latest sports insights, tournament statistics, guides, and articles on Tiger365.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogsPage() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <WhatsAppFloat />

      <div className={styles.blogsLayoutWrapper}>
        <div className="layout-content-area">
          {/* Moving Marquee live ticker */}
          <div className="live-ticker-banner">
            <div className="ticker-text">
              PLAY HERE ALL YOUR FAVORITE SPORTS BACK & LAY EXCHANGE MARKETS AND INTERNATIONAL CASINO GAMES (247), THANK YOU. GET INSTANT WHATSAPP ID NOW! 🔥
            </div>
          </div>

          <section className={styles.blogsSection}>
            <div className="container">
              <h1 className={styles.pageTitle}>
                Tiger365 <span>Blogs</span>
              </h1>
              <p className={styles.subtitle}>
                Your ultimate guide to tournament stats, sports insights, and platform tutorials.
              </p>

              <div className={styles.grid}>
                {/* Blog Card 1 */}
                <div className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/banners/ipl_caps_winners_thumbnail.png"
                      alt="IPL Orange Cap & Purple Cap Winners"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.cardImage}
                      priority
                    />
                    <div className={styles.tag}>Cricket</div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.date}>July 10, 2026</div>
                    <h2 className={styles.cardTitle}>
                      IPL Orange Cap & Purple Cap Winners (2008–2026)
                    </h2>
                    <p className={styles.cardExcerpt}>
                      Two caps, one season-long race each. The Orange Cap goes to the IPL's leading run-scorer, the Purple Cap to its leading wicket-taker — and in 2026 the Orange Cap went to a teenager who'd won the U19 World Cup barely three months earlier...
                    </p>
                    <div className={styles.cardFooter}>
                      <Link href="/ipl-orange-cap-purple-cap-winners" className="btn-primary">
                        Show More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}
