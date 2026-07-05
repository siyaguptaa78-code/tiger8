"use client";
import React from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./InfoSection.module.css";

export default function InfoSection() {
  const getWhatsAppLink = (textMsg: string) => {
    return `${SITE_CONFIG.whatsappLink}?text=${encodeURIComponent(textMsg)}`;
  };

  return (
    <section className={styles.infoSection} id="about">
      <div className="container">
        
        {/* =========================================================
            SECTION 1: TIGER365 ID PROVIDER INTRO
            ========================================================= */}
        <div className={`${styles.sectionBlock} ${styles.introBlock}`}>
          <h1 className={styles.mainTitle}>
            Tiger365 ID Provider: Get Your Tiger365 Login and Start Betting on India’s Most Trusted Platform
          </h1>
          <p className={styles.paragraph}>
            Are you looking for an effortless, quick and safe way to get your tiger365 or tigerexch365 betting ID? Then, you are in the right place. Being one of India’s leading casino and sports betting ID providers on the tiger exchange network, we give our players the opportunity to connect to our WhatsApp support team and start enjoying your favorite Indian casino games and sports betting markets on the tiger365 app and website with ease.
          </p>
          <p className={styles.paragraph}>
            We endeavor to offer you a convenient and user-friendly betting experience on the tiger365 app and website with a strong emphasis on security. Whether you love playing Teen Patti, Andar Bahar, Roulette, Slots or you want to bet on live cricket, football, kabaddi, your journey to these betting and gaming adventures begins with your tiger365 login. And we are here to help you right away.
          </p>
          <p className={styles.paragraph}>
            This landing page presents all the vital information about Tiger365 that you ought to know before you start betting and playing Indian casino games on the website or the mobile app. You will find out how to get tiger365 pro account, why the tigerexch365 online betting platform is so popular in India, how you can get your tigerexch365 ID at any time, the list of games you can play on the app and website, how deposits and withdrawals work and why Indians continue to use this online betting service with confidence and convenience to engage in sports betting and casino gaming. All this information is presented in a simplified and straight-to-the-point manner so that you can understand everything without getting stuck in any of the details.
          </p>
        </div>

        {/* =========================================================
            SECTION 2: WHAT IS TIGER365 PRO & POPULARITY
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={styles.twoColRow}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>What Is Tiger365 pro and Why Is It So Popular in India?</h2>
              <p className={styles.paragraph}>
                Tiger365 is among the fastest-growing online casino and sports betting platforms that provide Indian players with the opportunity to enjoy betting and gaming on the highly reliable tigerexch365 network. Tiger365 website and app offer Indian players a convenient, quick and smooth experience when it comes to making deposits and withdrawals, diverse betting and gaming options, and enhanced security. This online betting portal was created with Indian players in mind, which is why it has several attractive features that have contributed to its popularity among local bettors who love sports betting and casino gaming.
              </p>
              <p className={styles.paragraph}>
                Here are some of the reasons why Tiger365 Pro is so popular in India:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <strong>User-friendly interface:</strong> Tiger365 website and app have been designed in a way that makes it super easy for every player to navigate the site and bet without getting stuck in any of the details
                </li>
                <li>
                  <strong>Wide range of betting options:</strong> Available on the highly reliable tigerexch365 network, Tiger365 offers Indians a wide range of sports betting and casino options, including popular Indian casino games such as Teen Patti, Andar Bahar, Jhandi Munda and live Matka, exciting sports betting options such as all variants of cricket betting including the IPL, test matches, world cup, and ranji, football betting, kabaddi betting and many other sports betting options.
                </li>
                <li>
                  <strong>Fast and secure:</strong> On Tiger365, deposits and withdrawals are made fast and securely, so that Indian players can enjoy seamless betting and gaming without any disruptions.
                </li>
                <li>
                  <strong>24×7 betting:</strong> Cricket, football, and other sports betting options are available around the clock, while the live casino options are available at all times, allowing Indian players to enjoy betting and gaming at any time they are free.
                </li>
                <li>
                  <strong>Live casino options:</strong> Tiger365 offers Indian players the chance to play exciting real-time casino games from the comfort of their homes with the convenience of the mobile app, where they can interact with real-life dealers.
                </li>
              </ul>
              <p className={styles.paragraph}>
                To enjoy all these exciting features and benefits of sports betting and casino gaming on Tiger365, you need a verified tiger365 login ID, which is what we offer.
              </p>
              <div className={styles.ctaBoxLeft}>
                <a 
                  href={getWhatsAppLink("Hi! I want to get my Tiger365 login ID.")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  PLAY NOW
                </a>
              </div>
            </div>
            <div className={styles.colImg}>
              <Image 
                src={SITE_CONFIG.images.aboutImage}
                alt="What Is Tiger365 pro"
                width={1024}
                height={1536}
                className={styles.responsiveImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 3: GET TIGER365 ID INSTANTLY ON WHATSAPP
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={`${styles.twoColRow} ${styles.rowReverse}`}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Get Your Tiger365 ID Instantly on WhatsApp</h2>
              <p className={styles.paragraph}>
                We make it super easy for you to get your tiger365 ID because we understand that as a player, you want a fuss-free and quick experience. That is why we have done away with the complicated registration process because everything is done on WhatsApp, making the whole process faster and more convenient. To get your tiger365 pro account opened, all you need to do is:
              </p>
              <ul className={styles.bulletList}>
                <li>Click on the WhatsApp chat button on this website</li>
                <li>Send us a message indicating that you want to open an account</li>
                <li>Our support executives will get in touch with you to generate your ID</li>
              </ul>
              <p className={styles.paragraph}>
                Once you have your <strong>tiger365 login ID</strong>, you can use it to log in to the tiger365 website or the mobile app and start betting right away.
              </p>
              <p className={styles.paragraph}>
                And that is all there is to it! It does not get any simpler than this. So, there is no need to go through the hassle of contacting other unreliable ID providers when you can get your verified ID instantly with us on WhatsApp. Apart from speed and convenience, you also get total confidentiality and security since we ensure that your personal information is protected at all times.
              </p>
              <div className={styles.ctaBoxLeft}>
                <a 
                  href={getWhatsAppLink("Hi! I want to get a Tiger365 ID on WhatsApp.")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  PLAY NOW
                </a>
              </div>
            </div>
            <div className={styles.colImg}>
              <Image 
                src={SITE_CONFIG.images.whatsappPromo}
                alt="Get Tiger365 ID Instantly on WhatsApp"
                width={1024}
                height={748}
                className={styles.responsiveImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 4: FOUR KEY STATS GRID
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🏆</div>
              <h3>10000+ Betting ID's</h3>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🏏</div>
              <h3>Online Cricket Betting</h3>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🎮</div>
              <h3>10000+ Active Players</h3>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>💬</div>
              <h3>Personalized 247 Support</h3>
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 5: WHY CHOOSE US AS YOUR TIGEREXCH365 ID PROVIDER
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitleCenter}>Why Choose Us as Your Tigerexch365 ID Provider</h2>
          <p className={styles.paragraphCenter}>
            When looking for an ID provider, there are several crucial factors that need to be taken into consideration. These include speed, reliability, and confidentiality, among others. We have all these features at your disposal, making us your best option when it comes to getting a tigerexch365 ID. Here are some of the reasons why you should choose us:
          </p>
          <ul className={styles.bulletList}>
            <li><strong>Instant tiger365 ID creation:</strong> We offer faster ID generation once you contact us on WhatsApp. Our support agents will get in touch with you and create your tiger365 login right away, without any hassles</li>
            <li><strong>Total privacy & security:</strong> We take your privacy seriously, which is why your information is secure with us at all times. So, you can use our services with confidence, knowing that everything is done discreetely and securely</li>
            <li><strong>24×7 WhatsApp support:</strong> We are always available to offer our players the support they need, whether it is regarding the tiger365 app, deposits, withdrawals, or anything else. So, you can contact us anytime you need assistance without having to wait until the next day</li>
            <li><strong>Top-quality services:</strong> We are a reliable and professional tigerexch365 ID provider, giving you a reason to choose us over other providers. Our expertise enables us to help you faster and solve problems efficiently whenever you encounter one</li>
            <li><strong>Better support for all customers:</strong> We offer better customer support, meaning that we provide quality assistance to both new and existing customers. For new customers, we offer guidance as they get started with sports betting and casino gaming, while for the existing ones, we offer faster support whenever they need assistance</li>
          </ul>
          <div className={styles.ctaBoxCenter}>
            <a 
              href={getWhatsAppLink("Hi! I want to play on Tiger365.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              PLAY NOW
            </a>
          </div>
        </div>

        {/* =========================================================
            SECTION 6: LOGIN GUIDE FOR NEW USERS
            ========================================================= */}
        <div className={`${styles.sectionBlock} ${styles.guideBlock}`}>
          <h2 className={styles.sectionTitle}>Tiger365 Login Guide for New Users</h2>
          <p className={styles.paragraph}>
            After getting your Tiger365 ID, the next step is to use it to log in to the website and start betting. However, everything is super simple and straightforward since Tiger365 has been designed to suit the needs of first-time users. Here is a step-by-step guide on how to log in to Tiger365:
          </p>
          <ul className={styles.bulletList}>
            <li>Go to the official website of Tiger365</li>
            <li>Enter your <strong>Tiger365 login</strong> username</li>
            <li>Enter your password</li>
            <li>Click on the log in button and start betting or playing your favorite games</li>
          </ul>
          <p className={styles.paragraph}>
            The same steps apply when logging in to the Tiger365 app. In case you happen to forget your password or other login details, you can contact our support team on WhatsApp, and they will help you right away.
          </p>
        </div>

        {/* =========================================================
            SECTION 7: TIGER365 APP MOBILE BETTING
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={styles.twoColRow}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Tiger365 App: The Most Convenient Way to Enjoy Casino Games and Sports Betting</h2>
              <p className={styles.paragraph}>
                The Tiger365 mobile app has been developed to make it easier for Indians to enjoy all their favorite games and sports betting options on their mobile devices. The app is powerful but super simple to use, which is why most Indians who love to play casino games and sports betting choose it over other apps. When our team creates your tiger365 ID, you can start using it to log in to the Tiger365 app and start enjoying casino games and sports betting right away.
              </p>
              <p className={styles.paragraph}>
                The Tiger365 app has been designed for Indian users who want to enjoy the best of both worlds, including a variety of Indian casino games and sports betting options. As such, the app has several awesome features, including:
              </p>
              <ul className={styles.bulletList}>
                <li>Fast and secure tiger365 login</li>
                <li>Access to betting options, including cricket, football, and kabaddi betting</li>
                <li>Wide range of Indian casino games</li>
                <li>Easy deposits and withdrawals</li>
                <li>Lightweight but powerful application that works on all android devices</li>
                <li>Simple and intuitive interface with excellent graphics</li>
                <li>Live odds and match updates</li>
                <li>Better, safer wallet system</li>
                <li>24×7 WhatsApp support</li>
              </ul>
              <p className={styles.paragraph}>
                The Tiger365 app offers numerous benefits to sports bettors and casino gamers, including making it easier to play all your favorite games and sports betting options on the go. With such an awesome app, you can enjoy playing cricket matches and casino games such as Teen Patti whenever you are free.
              </p>
            </div>
            <div className={styles.colImg}>
              <Image 
                src={SITE_CONFIG.images.appPromo}
                alt="Tiger365 Mobile App"
                width={1024}
                height={1536}
                className={styles.responsiveImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 8: GAMES YOU CAN PLAY
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitleCenter}>Games You Can Play on Tiger365 and TigerExch365</h2>
          <p className={styles.paragraphCenter}>
            The Tiger365 online platform offers you one of the widest selections of casino games and sports betting options in the business. Available on the highly reliable tigerexch365 network, the online portal provides you with both Indian and international casino games and sports betting options. Once you get your tiger365 login ID, you can start accessing all the games right away.
          </p>
        </div>

        {/* =========================================================
            SECTION 9: INDIAN CASINO GAMES
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={`${styles.twoColRow} ${styles.rowReverse}`}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Indian Casino Games on Tiger365</h2>
              <p className={styles.paragraph}>
                Indian players love their local games such as Teen Patti, Andar Bahar, Jhandi Munda, and live Matka. Fortunately, the tiger365 app provides you with all these games in one place, making it super simple to enjoy them all without switching between multiple platforms. What is more, the games have been developed to be super simple to play, making them perfect for novice and experienced players.
              </p>
              <div className={styles.gameDetailList}>
                <div className={styles.gameDetailItem}>
                  <strong>Teen Patti:</strong>
                  <p>This is a popular 3-card Indian game that has been played for decades. It is a very exciting and fast-paced game and super simple to learn and play, making it the most popular Indian casino game at tiger365 pro.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Andar Bahar:</strong>
                  <p>Another exciting and super simple card game that is super popular among Indian casino game lovers, especially newcomers</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Jhandi Munda:</strong>
                  <p>One of the most popular dice games from the north-eastern states of India. It is very exciting and super simple to play.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Live Matka:</strong>
                  <p>This is a form of lottery betting that has been around for a long time and has a decent following among Indian lottery lovers. At tiger365, you can enjoy playing live Matka.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Rummy:</strong>
                  <p>This is a very popular card game among Indians, and it is super exciting to play. At tiger365, you can play different forms of Rummy.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Indian Roulette:</strong>
                  <p>One of the most exciting table games that Indian players love to play at online casinos.</p>
                </div>
              </div>
            </div>
            <div className={styles.colImg}>
              <Image 
                src={SITE_CONFIG.images.casinoPromo}
                alt="Indian Casino Games on Tiger365"
                width={1024}
                height={1536}
                className={styles.responsiveImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 10: INTERNATIONAL CASINO GAMES
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitleCenter}>International Casino Games on TigerExch365</h2>
          <p className={styles.paragraphCenter}>
            In addition to the Indian casino games mentioned above, Tiger365 also offers you a wide range of top international casino games that utilize the latest graphics technology and realistic features to provide you with an exciting casino experience. Some of the international casino games you can enjoy at Tiger365 include:
          </p>
          <div className={styles.casinoGrid}>
            <div className={styles.casinoCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2025/11/game.png"
                alt="Blackjack Icon"
                width={64}
                height={64}
                className={styles.casinoIcon}
              />
              <h3>Blackjack</h3>
            </div>
            <div className={styles.casinoCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2025/11/game-1.png"
                alt="Baccarat Icon"
                width={64}
                height={64}
                className={styles.casinoIcon}
              />
              <h3>Baccarat</h3>
            </div>
            <div className={styles.casinoCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2025/11/jackpot-machine-2.png"
                alt="Slots Icon"
                width={64}
                height={64}
                className={styles.casinoIcon}
              />
              <h3>Slots</h3>
            </div>
            <div className={styles.casinoCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2025/11/roulette-1.png"
                alt="Roulette Icon"
                width={64}
                height={64}
                className={styles.casinoIcon}
              />
              <h3>Roulette</h3>
            </div>
            <div className={styles.casinoCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2025/11/casino-chip.png"
                alt="Poker Icon"
                width={64}
                height={64}
                className={styles.casinoIcon}
              />
              <h3>Poker</h3>
            </div>
            <div className={styles.casinoCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2025/11/poker-table.png"
                alt="Live Casino Tables Icon"
                width={64}
                height={64}
                className={styles.casinoIcon}
              />
              <h3>Live tables</h3>
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 11: WHY INDIAN PLAYERS LOVE TIGER365
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitleCenter}>Why Indian Players Love Tiger365 and TigerExch365</h2>
          <p className={styles.paragraphCenter}>
            Indian players love Tiger365 for several reasons, making it one of the most popular online sports betting and casino platforms in the country. The reason why Tiger365 continues to be popular among Indians is that it has been specifically designed to meet the needs and expectations of local players, including offering them a super simple interface, making it easy to navigate the website and start betting and playing casino games immediately.
          </p>
          <div className={styles.loveReasonsList}>
            <div className={styles.loveReasonItem}>
              <strong>Simple interface:</strong>
              <p>The website and app have a very simple interface, making it super simple to navigate and start betting or playing your favorite games</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>Indian games:</strong>
              <p>Tiger365 includes some of the most popular Indian casino games such as Teen Patti, Andar Bahar, Jhandi Munda, and others that Indian players love</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>Super-fast deposits and withdrawals:</strong>
              <p>Tiger365 has a very efficient payment system that allows you to make deposits and withdrawals super-fast and securely</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>No technical hassles:</strong>
              <p>Tiger365 has been developed to be very simple to use without any technical hassles. As such, you do not need to have any technical knowledge to use it. You simply use your tiger365 pro ID to make a deposit, and you start betting right away</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>Trusted ID providers:</strong>
              <p>Indian players can use our trusted services to get their tiger365 login IDs, which come with 24×7 WhatsApp support</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>No extra charges:</strong>
              <p>Tiger365 is very transparent about all its charges, and there are no extra fees when making deposits and withdrawals</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>Works on all mobile devices:</strong>
              <p>The tiger365 app works on all android mobile devices, making it super simple to use it on your favorite device</p>
            </div>
          </div>
          <p className={styles.paragraphCenter}>
            As mentioned above, Indians love Tiger365 because it has been developed to suit their specific needs and preferences. It offers them a variety of both Indian and international casino games and sports betting options. It also provides them with a super-simple interface that makes it easy to navigate and start betting and playing their favorite games immediately after logging in with their tiger365 login credentials. Another advantage of using Tiger365 is that it allows them to make deposits and withdrawals super-fast and securely. It also offers Indians a super-fast and convenient way to get their tiger365 IDs from trusted ID providers on the tigerexch365 network.
          </p>
        </div>

        {/* =========================================================
            SECTION 12: DEPOSITS & WITHDRAWALS ON TIGER365
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={styles.twoColRow}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Deposits and Withdrawals on Tiger365</h2>
              <p className={styles.paragraph}>
                When it comes to making deposits and withdrawals on Tiger365, it is important to understand that the online portal offers you a wide range of trusted payment options that enable you to make deposits and process withdrawals super-fast and securely. So, when you want to make a deposit, you simply choose from the wide range of trusted payment options available on the website. You can also use these trusted options to process withdrawals right away, without hassles or delays.
              </p>
              <p className={styles.paragraph}>
                The wide range of trusted payment options available when making deposits and withdrawals on Tiger365 include:
              </p>
              <ul className={styles.bulletList}>
                <li>UPI</li>
                <li>PhonePe</li>
                <li>Google Pay</li>
                <li>Paytm</li>
                <li>Bank transfers</li>
              </ul>
              <p className={styles.paragraph}>
                As such, it is super simple to make deposits and start betting or playing your favorite casino games on Tiger365 right away. You can also process withdrawals using the same options anytime you want to withdraw your winnings.
              </p>
              <p className={styles.paragraph}>
                In addition to offering you a wide range of trusted payment options, Tiger365 also ensures that the process of making deposits and withdrawals is very fast and smooth. So, once you make a deposit, it is credited to your account almost immediately, enabling you to start betting or play your favorite casino games right away. The same applies when it comes to withdrawals, since the process takes very short to complete, so you start enjoying your winnings almost right away. What is more, our expert support agents are always available to help you with deposits, withdrawals, and anything else you might need assistance with. You can contact them on WhatsApp anytime you need help.
              </p>
            </div>
            <div className={styles.colImg}>
              <Image 
                src={SITE_CONFIG.images.withdrawalPromo}
                alt="Deposits and Withdrawals on Tiger365"
                width={1024}
                height={1024}
                className={styles.responsiveImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 13: RESPONSIBLE GAMING ON TIGER365
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={`${styles.twoColRow} ${styles.rowReverse}`}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Responsible Gaming on Tiger365</h2>
              <p className={styles.paragraph}>
                While betting and playing casino games can be very exciting, it is important to know when to stop in order to enjoy the experience without running into any financial trouble. The best way to do that is to set a limit on how much you are willing to spend and stick to it at all times. This way, you will never find yourself in a situation where you are tempted to chase losses or bet more than you intend to. Remember, gambling should be seen as a means of entertainment, not as a way of making money.
              </p>
              <p className={styles.paragraph}>
                If at any point you feel that you are losing control or find it difficult to stop, you can contact our support agents on WhatsApp, and they will help you. They are available 24×7 to help you in any way they can, and they always put your comfort and well-being first.
              </p>
            </div>
            <div className={styles.colImg}>
              <Image 
                src={SITE_CONFIG.images.responsiblePromo}
                alt="Responsible Gaming on Tiger365"
                width={1024}
                height={1024}
                className={styles.responsiveImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 14: TRUSTED PATH TO TIGER365
            ========================================================= */}
        <div className={`${styles.sectionBlock} ${styles.introBlock}`}>
          <h2 className={styles.sectionTitleCenter}>Your Trusted Path to Tiger365 Starts Here</h2>
          <p className={styles.paragraphCenter}>
            Choosing Tiger365 as your preferred online sports betting and online casino gaming platform is the best decision you can make, considering the fact that it offers you a wide variety of both Indian and international sports betting and casino gaming options. You can enjoy live cricket matches and bet on them, play your favorite Indian casino games such as Teen Patti, Andar Bahar, Jhandi Munda, and others, and enjoy playing international casino games such as Blackjack, Baccarat, Slots, Roulette, Poker, and many other exciting options. All you need to do is get your tiger365 login ID and start enjoying everything Tiger365 has to offer. To get your tiger365 login ID, you can contact our customer support team on WhatsApp and get it right away.
          </p>
        </div>

      </div>
    </section>
  );
}
