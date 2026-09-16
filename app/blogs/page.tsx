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
                {/* Blog Card 1 - Newest */}
                <div className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/banners/ipl_2027_teams_squads_thumbnail.png"
                      alt="IPL 2027 Teams & Squads"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.cardImage}
                      priority
                    />
                    <div className={styles.tag}>IPL 2027</div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.date}>September 16, 2026</div>
                    <h2 className={styles.cardTitle}>
                      IPL 2027 Teams & Squads: Complete Players List & Team Changes
                    </h2>
                    <p className={styles.cardExcerpt}>
                      The IPL 2027 teams and squads will take shape through player retentions, releases, trades and the auction process. Explore how all 10 franchises build their teams for the 20th IPL season.
                    </p>
                    <div className={styles.cardFooter}>
                      <Link href="/ipl-2027-teams-squads" className="btn-primary">
                        Show More
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Blog Card 2 */}
                <div className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/banners/banner1.png"
                      alt="Jasprit Bumrah Faces Crucial Fitness Test"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.cardImage}
                      priority
                    />
                    <div className={styles.tag}>Cricket News</div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.date}>September 4, 2026</div>
                    <h2 className={styles.cardTitle}>
                      Jasprit Bumrah Faces Crucial Fitness Test as India Prepare for a Packed Cricket Calendar
                    </h2>
                    <p className={styles.cardExcerpt}>
                      Jasprit Bumrah's fitness has once again become one of the biggest talking points surrounding Indian cricket, with the premier fast bowler facing an important assessment ahead of India's upcoming T20I commitments...
                    </p>
                    <div className={styles.cardFooter}>
                      <Link href="/jasprit-bumrah-fitness-test" className="btn-primary">
                        Show More
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Blog Card 2 */}
                <div className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/banners/ipl_caps_winners_thumbnail.png"
                      alt="IPL Orange Cap & Purple Cap Winners"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.cardImage}
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
