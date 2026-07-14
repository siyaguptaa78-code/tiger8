import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "IPL Orange Cap & Purple Cap Winners (2008–2026)",
  description: "Every IPL Orange Cap and Purple Cap winner from 2008 to 2026 — including Vaibhav Sooryavanshi's record-breaking 2026 season. Full year-by-year lists with runs and wickets.",
  alternates: {
    canonical: "/ipl-orange-cap-purple-cap-winners",
  },
};

export default function IplWinnersBlogPage() {
  const orangeCapWinners = [
    { year: 2008, player: "Shaun Marsh", team: "Kings XI Punjab", score: 616 },
    { year: 2009, player: "Matthew Hayden", team: "Chennai Super Kings", score: 572 },
    { year: 2010, player: "Sachin Tendulkar", team: "Mumbai Indians", score: 618 },
    { year: 2011, player: "Chris Gayle", team: "Royal Challengers Bangalore", score: 608 },
    { year: 2012, player: "Chris Gayle", team: "Royal Challengers Bangalore", score: 733 },
    { year: 2013, player: "Michael Hussey", team: "Chennai Super Kings", score: 733 },
    { year: 2014, player: "Robin Uthappa", team: "Kolkata Knight Riders", score: 660 },
    { year: 2015, player: "David Warner", team: "Sunrisers Hyderabad", score: 562 },
    { year: 2016, player: "Virat Kohli", team: "Royal Challengers Bangalore", score: 973 },
    { year: 2017, player: "David Warner", team: "Sunrisers Hyderabad", score: 641 },
    { year: 2018, player: "Kane Williamson", team: "Sunrisers Hyderabad", score: 735 },
    { year: 2019, player: "David Warner", team: "Sunrisers Hyderabad", score: 692 },
    { year: 2020, player: "KL Rahul", team: "Kings XI Punjab", score: 670 },
    { year: 2021, player: "Ruturaj Gaikwad", team: "Chennai Super Kings", score: 635 },
    { year: 2022, player: "Jos Buttler", team: "Rajasthan Royals", score: 863 },
    { year: 2023, player: "Shubman Gill", team: "Gujarat Titans", score: 890 },
    { year: 2024, player: "Virat Kohli", team: "Royal Challengers Bengaluru", score: 741 },
    { year: 2025, player: "Sai Sudharsan", team: "Gujarat Titans", score: 759 },
    { year: 2026, player: "Vaibhav Sooryavanshi", team: "Rajasthan Royals", score: 776 },
  ];

  const purpleCapWinners = [
    { year: 2008, player: "Sohail Tanvir", team: "Rajasthan Royals", score: 22 },
    { year: 2009, player: "RP Singh", team: "Deccan Chargers", score: 23 },
    { year: 2010, player: "Pragyan Ojha", team: "Deccan Chargers", score: 21 },
    { year: 2011, player: "Lasith Malinga", team: "Mumbai Indians", score: 28 },
    { year: 2012, player: "Morne Morkel", team: "Delhi Daredevils", score: 25 },
    { year: 2013, player: "Dwayne Bravo", team: "Chennai Super Kings", score: 32 },
    { year: 2014, player: "Mohit Sharma", team: "Chennai Super Kings", score: 23 },
    { year: 2015, player: "Dwayne Bravo", team: "Chennai Super Kings", score: 26 },
    { year: 2016, player: "Bhuvneshwar Kumar", team: "Sunrisers Hyderabad", score: 23 },
    { year: 2017, player: "Bhuvneshwar Kumar", team: "Sunrisers Hyderabad", score: 26 },
    { year: 2018, player: "Andrew Tye", team: "Kings XI Punjab", score: 24 },
    { year: 2019, player: "Imran Tahir", team: "Chennai Super Kings", score: 26 },
    { year: 2020, player: "Kagiso Rabada", team: "Delhi Capitals", score: 30 },
    { year: 2021, player: "Harshal Patel", team: "Royal Challengers Bangalore", score: 32 },
    { year: 2022, player: "Yuzvendra Chahal", team: "Rajasthan Royals", score: 27 },
    { year: 2023, player: "Mohammed Shami", team: "Gujarat Titans", score: 28 },
    { year: 2024, player: "Harshal Patel", team: "Punjab Kings", score: 24 },
    { year: 2025, player: "Prasidh Krishna", team: "Gujarat Titans", score: 25 },
    { year: 2026, player: "Kagiso Rabada", team: "Gujarat Titans", score: 29 },
  ];

  return (
    <div className="main-wrapper">
      <Navbar />
      <WhatsAppFloat />

      <div className={styles.articleLayoutWrapper}>
        <div className="layout-content-area">
          {/* Moving Marquee live ticker */}
          <div className="live-ticker-banner">
            <div className="ticker-text">
              PLAY HERE ALL YOUR FAVORITE SPORTS BACK & LAY EXCHANGE MARKETS AND INTERNATIONAL CASINO GAMES (247), THANK YOU. GET INSTANT WHATSAPP ID NOW! 🔥
            </div>
          </div>

          <article className={styles.articleSection}>
            <div className="container">
              {/* Category & Date */}
              <div className={styles.metaHeader}>
                <span className={styles.category}>Cricket Insights</span>
                <span className={styles.separator}>•</span>
                <span className={styles.date}>Last updated: 10 July 2026</span>
              </div>

              {/* Title */}
              <h1 className={styles.articleTitle}>
                IPL Orange Cap & Purple Cap Winners (2008–2026)
              </h1>

              {/* Banner Image */}
              <div className={styles.bannerContainer}>
                <Image
                  src="/banners/ipl_caps_winners_thumbnail.png"
                  alt="IPL Orange Cap & Purple Cap Winners Banner"
                  fill
                  priority
                  className={styles.bannerImage}
                />
              </div>

              {/* Body Text */}
              <div className={styles.content}>
                <p className={styles.introParagraph}>
                  Two caps, one season-long race each. The Orange Cap goes to the IPL's leading run-scorer, the Purple Cap to its leading wicket-taker — and in 2026 the Orange Cap went to a teenager who'd won the U19 World Cup barely three months earlier. Every winner of both caps since the IPL began:
                </p>

                {/* Orange Cap Section */}
                <h2 className={styles.sectionHeading}>
                  Orange Cap Winners: Year by Year
                </h2>
                
                <div className={styles.tableWrapper}>
                  <table className={styles.statsTable}>
                    <thead>
                      <tr>
                        <th>Year</th>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Runs</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orangeCapWinners.map((winner) => (
                        <tr key={winner.year} className={winner.year === 2026 ? styles.latestHighlight : ""}>
                          <td>{winner.year}</td>
                          <td>{winner.player}</td>
                          <td>{winner.team}</td>
                          <td className={styles.scoreCol}>{winner.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Purple Cap Section */}
                <h2 className={styles.sectionHeading}>
                  Purple Cap Winners: Year by Year
                </h2>

                <div className={styles.tableWrapper}>
                  <table className={styles.statsTable}>
                    <thead>
                      <tr>
                        <th>Year</th>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Wickets</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purpleCapWinners.map((winner) => (
                        <tr key={winner.year} className={winner.year === 2026 ? styles.latestHighlight : ""}>
                          <td>{winner.year}</td>
                          <td>{winner.player}</td>
                          <td>{winner.team}</td>
                          <td className={styles.scoreCol}>{winner.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Article Detailed Analysis */}
                <h2 className={styles.sectionHeading}>
                  The 2026 Caps: Sooryavanshi and Rabada
                </h2>
                <p>
                  The Orange Cap race of 2026 was a coronation. Vaibhav Sooryavanshi — fresh from his 175 in the U19 World Cup final in February — piled up 776 runs and collected the Orange Cap, MVP and Emerging Player awards in one sweep. No cricketer has ever compressed a youth-to-superstar arc into a single spring like that.
                </p>
                <p>
                  The Purple Cap went to Kagiso Rabada with 29 wickets from 17 games — his second, six years after his first in 2020, with RCB's Bhuvneshwar Kumar a close runner-up on 28.
                </p>

                <h2 className={styles.sectionHeading}>
                  Cap Records Worth Knowing
                </h2>
                <p>
                  Kohli's 973 runs in 2016 remains the Everest — no one has come within 80 runs of it since. David Warner's three Orange Caps are the most by any batter. On the bowling side, Dwayne Bravo's 32 wickets in 2013 and Harshal Patel's 32 in 2021 share the single-season record, and Bravo, Bhuvneshwar, Harshal and now Rabada are the only two-time Purple Cap winners. And a quirk: Sunrisers Hyderabad batters won four Orange Caps in five years (2015–2019); no franchise has dominated a cap like that since.
                </p>

                {/* FAQ Section */}
                <h2 className={styles.sectionHeading}>
                  Orange Cap & Purple Cap FAQs
                </h2>

                <div className={styles.faqList}>
                  <div className={styles.faqItem}>
                    <h3>Who won the Orange Cap in IPL 2026?</h3>
                    <p>Vaibhav Sooryavanshi of Rajasthan Royals, with 776 runs — he also won MVP and Emerging Player.</p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>Who won the Purple Cap in IPL 2026?</h3>
                    <p>Kagiso Rabada, with 29 wickets — his second Purple Cap after 2020.</p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>What is the Orange Cap and Purple Cap?</h3>
                    <p>Season-long awards for the IPL's leading run-scorer (Orange) and leading wicket-taker (Purple), worn on-field by the current leader during the season.</p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>Who has won the most Orange Caps?</h3>
                    <p>David Warner, with three (2015, 2017, 2019). Chris Gayle and Virat Kohli have two each.</p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>What is the record for most runs in an IPL season?</h3>
                    <p>Virat Kohli's 973 in 2016 — still untouched a decade later.</p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>What is the record for most wickets in an IPL season?</h3>
                    <p>32 — shared by Dwayne Bravo (2013) and Harshal Patel (2021).</p>
                  </div>
                </div>

                {/* Footer updated note */}
                <p className={styles.lastUpdatedText}>
                  Last updated: 10 July 2026 — includes IPL 2026. Updated live during each season, final after every edition. Stats per official records.
                </p>
              </div>

              {/* Conversion CTA Block */}
              <div className={styles.ctaCard}>
                <h3>Get Your Verified Tiger365 ID Instantly!</h3>
                <p>
                  Play with trust, fast deposits, and instant withdrawals on India's most secure sports exchange platform. Start betting on all cricket tournaments now!
                </p>
                <div className={styles.ctaBtnWrapper}>
                  <WhatsAppButton className={styles.ctaBtn}>
                    💬 Chat on WhatsApp for ID
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </article>

          <Footer />
        </div>
      </div>
    </div>
  );
}
