import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "IPL 2027 Teams & Squads: Complete Players List and Team Changes",
  description: "IPL 2027 teams and squads complete breakdown — player retentions, releases, trades, and auction overview for all 10 franchises.",
  alternates: {
    canonical: "/ipl-2027-teams-squads",
  },
};

export default function Ipl2027TeamsSquadsBlogPage() {
  const iplTeamsAtAGlance = [
    { no: 1, team: "Chennai Super Kings", status: "To be finalized" },
    { no: 2, team: "Delhi Capitals", status: "To be finalized" },
    { no: 3, team: "Gujarat Titans", status: "To be finalized" },
    { no: 4, team: "Kolkata Knight Riders", status: "To be finalized" },
    { no: 5, team: "Lucknow Super Giants", status: "To be finalized" },
    { no: 6, team: "Mumbai Indians", status: "To be finalized" },
    { no: 7, team: "Punjab Kings", status: "To be finalized" },
    { no: 8, team: "Rajasthan Royals", status: "To be finalized" },
    { no: 9, team: "Royal Challengers Bengaluru", status: "To be finalized" },
    { no: 10, team: "Sunrisers Hyderabad", status: "To be finalized" },
  ];

  const statusMeanings = [
    { status: "Rumoured", meaning: "No official confirmation" },
    { status: "Reported", meaning: "Media reports indicate a possible move" },
    { status: "Agreed", meaning: "Reported agreement but awaiting formal confirmation" },
    { status: "Confirmed", meaning: "Officially announced" },
    { status: "Final Squad", meaning: "Player appears in the franchise's official squad" },
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
                <span className={styles.date}>September 16, 2026</span>
              </div>

              {/* Title */}
              <h1 className={styles.articleTitle}>
                IPL 2027 Teams & Squads: Complete Players List and Team Changes
              </h1>

              {/* Banner Image */}
              <div className={styles.bannerContainer}>
                <Image
                  src="/banners/ipl_2027_teams_squads_thumbnail.png"
                  alt="IPL 2027 Teams & Squads Complete Players List Banner"
                  fill
                  priority
                  className={styles.bannerImage}
                />
              </div>

              {/* Body Text */}
              <div className={styles.content}>
                <p>
                  The IPL 2027 teams and squads will take shape through player retentions, releases, trades and the auction process. With the 2027 season marking the 20th edition of the Indian Premier League, squad-building decisions will be an important part of the preparation for the tournament.
                </p>

                <p className={styles.introParagraph}>
                  The official IPL 2027 squads have not yet been finalized, so this guide focuses on the current franchise structure, how squads are assembled and the types of changes fans should follow as the 2027 season approaches.
                </p>

                <p>
                  For general cricket and tournament information, readers can also visit Tigers365ID.
                </p>

                {/* Section 1: IPL 2027 Teams at a Glance */}
                <h2 className={styles.sectionHeading}>
                  IPL 2027 Teams at a Glance
                </h2>
                <p>The current IPL structure consists of 10 franchises:</p>

                <div className={styles.tableWrapper}>
                  <table className={styles.statsTable}>
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>IPL Team</th>
                        <th>IPL 2027 Squad Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {iplTeamsAtAGlance.map((row) => (
                        <tr key={row.no}>
                          <td>{row.no}</td>
                          <td><strong>{row.team}</strong></td>
                          <td>{row.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>The final 2027 squad lists will depend on the official retention, release, trade and auction processes.</p>

                {/* Section 2: How IPL 2027 Squads Are Built */}
                <h2 className={styles.sectionHeading}>
                  How IPL 2027 Squads Are Built
                </h2>
                <p>An IPL squad does not come together through the auction alone.</p>
                <p>The overall process involves several stages:</p>

                <div className={styles.flowBox}>
                  Existing Squad → Retentions → Releases → Trades → Auction → Final Squad
                </div>

                <p>Each stage can change the players available to a franchise.</p>

                <h3 className={styles.subSectionHeading}>Retentions</h3>
                <p>Teams can retain players they want to continue with, according to the rules established for IPL 2027.</p>

                <h3 className={styles.subSectionHeading}>Releases</h3>
                <p>Players who are not retained can potentially enter the auction pool.</p>

                <h3 className={styles.subSectionHeading}>Trades</h3>
                <p>Eligible players can move between franchises through the official trading process.</p>

                <h3 className={styles.subSectionHeading}>Auction</h3>
                <p>Teams then compete for players available in the finalized auction pool.</p>

                {/* Franchise Detailed Analysis */}
                <div className={styles.franchiseCard}>
                  <h3 className={styles.franchiseTitle}>Chennai Super Kings</h3>
                  <p>
                    Chennai Super Kings have traditionally placed considerable emphasis on squad continuity and experienced players. For IPL 2027, the final CSK squad will depend on the franchise's retention and release decisions, subsequent trades and auction recruitment.
                  </p>
                  <p><strong>Key squad areas to follow include:</strong></p>
                  <ul className={styles.bulletList}>
                    <li>Opening batting</li>
                    <li>Middle-order depth</li>
                    <li>All-rounders</li>
                    <li>Spin bowling</li>
                    <li>Pace bowling</li>
                    <li>Wicketkeeping options</li>
                  </ul>
                  <p>The final player list should be confirmed through official franchise and IPL announcements.</p>
                </div>

                <div className={styles.franchiseCard}>
                  <h3 className={styles.franchiseTitle}>Delhi Capitals</h3>
                  <p>
                    Delhi Capitals will enter the 2027 squad-building process with decisions to make across their batting and bowling departments.
                  </p>
                  <p><strong>Areas fans can monitor include:</strong></p>
                  <ul className={styles.bulletList}>
                    <li>Top-order batting</li>
                    <li>Middle-order options</li>
                    <li>Indian domestic talent</li>
                    <li>Fast bowling</li>
                    <li>Spin resources</li>
                    <li>Wicketkeeping</li>
                  </ul>
                  <p>Any confirmed player changes should be distinguished from reported transfer discussions.</p>
                </div>

                <div className={styles.franchiseCard}>
                  <h3 className={styles.franchiseTitle}>Gujarat Titans</h3>
                  <p>
                    Gujarat Titans have established themselves as one of the newer IPL franchises and will continue developing their squad around a combination of established players and emerging talent.
                  </p>
                  <p><strong>For IPL 2027, attention will focus on:</strong></p>
                  <ul className={styles.bulletList}>
                    <li>Top-order stability</li>
                    <li>Finishing options</li>
                    <li>All-rounders</li>
                    <li>Fast bowling</li>
                    <li>Spin bowling</li>
                    <li>Squad depth</li>
                  </ul>
                  <p>The final Gujarat Titans squad will become clearer after the retention and auction stages.</p>
                </div>

                <div className={styles.franchiseCard}>
                  <h3 className={styles.franchiseTitle}>Kolkata Knight Riders</h3>
                  <p>
                    Kolkata Knight Riders will also need to assess their existing squad before the 2027 season.
                  </p>
                  <p><strong>T20 squad planning can involve evaluating:</strong></p>
                  <ul className={styles.bulletList}>
                    <li>Opening combinations</li>
                    <li>Middle-order batting</li>
                    <li>Finishers</li>
                    <li>Pace options</li>
                    <li>Spin combinations</li>
                    <li>Overseas players</li>
                  </ul>
                  <p>The franchise's final squad will depend on its decisions during the player-management period.</p>
                </div>

                <div className={styles.franchiseCard}>
                  <h3 className={styles.franchiseTitle}>Lucknow Super Giants</h3>
                  <p>
                    Lucknow Super Giants will be another franchise to watch during the IPL 2027 squad-building process.
                  </p>
                  <p><strong>Potential areas of consideration include:</strong></p>
                  <ul className={styles.bulletList}>
                    <li>Opening batters</li>
                    <li>Middle-order players</li>
                    <li>Wicketkeepers</li>
                    <li>Pace bowlers</li>
                    <li>Spinners</li>
                    <li>All-rounders</li>
                  </ul>
                  <p>The official player list will only become final after all applicable squad-building stages are completed.</p>
                </div>

                <div className={styles.franchiseCard}>
                  <h3 className={styles.franchiseTitle}>Mumbai Indians</h3>
                  <p>
                    Mumbai Indians have a long history of developing and using players across different stages of their careers.
                  </p>
                  <p><strong>For IPL 2027, supporters will be able to follow the franchise's decisions involving:</strong></p>
                  <ul className={styles.bulletList}>
                    <li>Established Indian players</li>
                    <li>Young domestic cricketers</li>
                    <li>Overseas players</li>
                    <li>Fast bowlers</li>
                    <li>All-rounders</li>
                    <li>Specialist batters</li>
                  </ul>
                  <p>Any major squad changes should be verified through official announcements.</p>
                </div>

                <div className={styles.franchiseCard}>
                  <h3 className={styles.franchiseTitle}>Punjab Kings</h3>
                  <p>
                    Punjab Kings will also assess their existing squad before the 2027 auction.
                  </p>
                  <p><strong>The franchise could potentially need to balance several areas, including:</strong></p>
                  <ul className={styles.bulletList}>
                    <li>Batting depth</li>
                    <li>Finishing ability</li>
                    <li>Fast bowling</li>
                    <li>Spin bowling</li>
                    <li>All-round options</li>
                    <li>Backup wicketkeeping</li>
                  </ul>
                  <p>The final squad will depend on the team's retention, release, trade and auction decisions.</p>
                </div>

                <div className={styles.franchiseCard}>
                  <h3 className={styles.franchiseTitle}>Rajasthan Royals</h3>
                  <p>
                    Rajasthan Royals have historically placed significant emphasis on young domestic talent alongside experienced international players.
                  </p>
                  <p><strong>Their IPL 2027 squad-building process will therefore be worth following for:</strong></p>
                  <ul className={styles.bulletList}>
                    <li>Emerging Indian players</li>
                    <li>Top-order batters</li>
                    <li>All-rounders</li>
                    <li>Fast bowlers</li>
                    <li>Spin options</li>
                    <li>Overseas talent</li>
                  </ul>
                  <p>The official franchise announcements will determine which players remain with the team.</p>
                </div>

                <div className={styles.franchiseCard}>
                  <h3 className={styles.franchiseTitle}>Royal Challengers Bengaluru</h3>
                  <p>
                    Royal Challengers Bengaluru will approach IPL 2027 with its own squad requirements and player-management strategy.
                  </p>
                  <p><strong>Areas to follow include:</strong></p>
                  <ul className={styles.bulletList}>
                    <li>Opening partnerships</li>
                    <li>Middle-order batting</li>
                    <li>Finishing roles</li>
                    <li>Pace bowling</li>
                    <li>Spin bowling</li>
                    <li>Overseas-player balance</li>
                  </ul>
                  <p>The franchise's final 2027 squad cannot be confirmed until the official process is complete.</p>
                </div>

                <div className={styles.franchiseCard}>
                  <h3 className={styles.franchiseTitle}>Sunrisers Hyderabad</h3>
                  <p>
                    Sunrisers Hyderabad will also have several decisions to make before the 2027 season.
                  </p>
                  <p><strong>T20 squad planning may involve evaluating:</strong></p>
                  <ul className={styles.bulletList}>
                    <li>Opening batters</li>
                    <li>Middle-order power</li>
                    <li>All-rounders</li>
                    <li>New-ball bowling</li>
                    <li>Death bowling</li>
                    <li>Spin resources</li>
                  </ul>
                  <p>The final squad will emerge through the official IPL player-management process.</p>
                </div>

                {/* Section 3: IPL 2027 Squad Changes */}
                <h2 className={styles.sectionHeading}>
                  IPL 2027 Squad Changes
                </h2>
                <p>
                  One of the most interesting parts of the IPL off-season is tracking how squads change from one season to the next.
                </p>
                <p>Changes can occur through four major mechanisms.</p>

                <ol className={styles.numberedList}>
                  <li>
                    <strong>Retained Players:</strong> Players kept by their current franchises form part of the team's continuing core.
                  </li>
                  <li>
                    <strong>Released Players:</strong> Players released by franchises can potentially become available for other teams.
                  </li>
                  <li>
                    <strong>Trades:</strong> An approved player trade can move a player directly from one franchise to another.
                  </li>
                  <li>
                    <strong>Auction Signings:</strong> Teams can fill remaining squad positions through the official auction.
                  </li>
                </ol>
                <p>These four mechanisms together determine the final squad.</p>

                {/* Section 4: Indian and Overseas Players */}
                <h2 className={styles.sectionHeading}>
                  Indian and Overseas Players
                </h2>
                <p>IPL squads generally combine Indian domestic and international talent.</p>

                <h3 className={styles.subSectionHeading}>Indian Players</h3>
                <p>
                  Domestic Indian players are particularly important because franchises need a deep pool of players who can contribute throughout a long tournament.
                </p>
                <p>They can include:</p>
                <ul className={styles.bulletList}>
                  <li>Capped players</li>
                  <li>Uncapped players</li>
                  <li>Emerging cricketers</li>
                  <li>Domestic specialists</li>
                  <li>Young prospects</li>
                </ul>

                <h3 className={styles.subSectionHeading}>Overseas Players</h3>
                <p>International players can provide experience and specialist T20 skills.</p>
                <p>
                  Depending on the final rules and player availability, overseas recruitment can include players from major cricket-playing nations.
                </p>
                <p>However, international commitments can affect a player's availability during the IPL.</p>

                {/* Section 5: Why Squad Balance Matters */}
                <h2 className={styles.sectionHeading}>
                  Why Squad Balance Matters
                </h2>
                <p>T20 cricket requires teams to cover several specialist roles.</p>
                <p>A balanced squad generally needs options for:</p>

                <div className={styles.flowBox}>
                  Opening → Middle Order → Finishing → Wicketkeeping → Pace → Spin → All-Round Contributions
                </div>

                <p>A team may therefore need more than one player for particular roles.</p>
                <p>Injuries, international commitments and player availability can also make squad depth important.</p>

                {/* Section 6: IPL 2027 Squads: What to Track */}
                <h2 className={styles.sectionHeading}>
                  IPL 2027 Squads: What to Track
                </h2>
                <p>Fans following the 2027 team lists should pay attention to the following information.</p>
                <ul className={styles.bulletList}>
                  <li><strong>Retention List:</strong> Which players remain with each franchise?</li>
                  <li><strong>Release List:</strong> Which players become available for the next stage?</li>
                  <li><strong>Trade List:</strong> Which players officially move between franchises?</li>
                  <li><strong>Auction List:</strong> Which players are available for selection?</li>
                  <li><strong>Final Squad:</strong> Which players ultimately make the franchise's completed squad?</li>
                </ul>

                {/* Section 7: Confirmed vs Reported Squad Changes */}
                <h2 className={styles.sectionHeading}>
                  Confirmed vs Reported Squad Changes
                </h2>
                <p>During the IPL off-season, numerous player-movement reports can circulate online.</p>
                <p>It is useful to separate them into different categories:</p>

                <div className={styles.tableWrapper}>
                  <table className={styles.statsTable}>
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      {statusMeanings.map((row, idx) => (
                        <tr key={idx}>
                          <td><strong>{row.status}</strong></td>
                          <td>{row.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>This distinction helps avoid confusion when following IPL 2027 team changes.</p>

                {/* Section 8: When Will the IPL 2027 Squads Be Finalized? */}
                <h2 className={styles.sectionHeading}>
                  When Will the IPL 2027 Squads Be Finalized?
                </h2>
                <p>
                  The final squads will become clear only after the relevant retention, release, trade and auction processes are completed.
                </p>
                <p>Before then, team lists can change several times.</p>
                <p>For example:</p>

                <div className={styles.flowBox}>
                  Player retained → Trade completed → Auction requirement changes → Final squad updated
                </div>

                <p>Therefore, an early projected squad should not be treated as the definitive IPL 2027 player list.</p>

                {/* Section 9: FAQ Section */}
                <h2 className={styles.sectionHeading}>
                  IPL 2027 Teams & Squads FAQs
                </h2>

                <div className={styles.faqList}>
                  <div className={styles.faqItem}>
                    <h3>How many teams are currently in the IPL?</h3>
                    <p>The current IPL structure consists of 10 franchises.</p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>Has the IPL 2027 squad list been finalized?</h3>
                    <p>No. The complete 2027 squads are not yet finalized.</p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>When will the IPL 2027 teams announce retained players?</h3>
                    <p>The official retention timetable will determine when franchises announce their retained players.</p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>Can players move between IPL teams before the auction?</h3>
                    <p>Eligible players can potentially be transferred through the official trade mechanism, subject to IPL rules and approval.</p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>Can released players join another IPL team?</h3>
                    <p>Released players can potentially become part of the auction pool, subject to the applicable regulations.</p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>Will IPL 2027 squads include overseas players?</h3>
                    <p>Yes, franchises can have overseas players subject to the IPL's applicable squad and playing-XI regulations and individual player availability.</p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>Where can fans check the final IPL 2027 squads?</h3>
                    <p>The official IPL and franchise announcements should be used to verify the final player lists.</p>
                  </div>
                </div>

                {/* Section 10: Conclusion */}
                <h2 className={styles.sectionHeading}>
                  Conclusion
                </h2>
                <p>
                  The IPL 2027 teams and squads will develop through a series of important decisions rather than being determined by the auction alone.
                </p>
                <p>
                  Retentions, releases, trades and auction selections will collectively shape the final 10 franchise squads. For fans, following each stage separately provides a clearer picture of how teams are preparing for the 20th IPL season.
                </p>
                <p>
                  Until the official announcements are made, projected player lists should be treated as unconfirmed. The definitive IPL 2027 squads will only be known once the complete player-management process has concluded.
                </p>
                <p>
                  For general cricket and tournament information, readers can also visit Tigers365ID.
                </p>

                {/* Disclaimer */}
                <div className={styles.disclaimerBox}>
                  <strong>Disclaimer:</strong> This article is provided strictly for informational and educational purposes. Tigers365ID does not promote, endorse, or encourage betting or gambling in India. Readers should use sports information responsibly and comply with all applicable laws and regulations.
                </div>
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
