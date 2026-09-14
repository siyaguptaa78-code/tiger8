"use client";
import { useState } from "react";
import styles from "./FAQSection.module.css";
import { SITE_CONFIG } from "@/config/constants";

const faqs = [
  {
    q: "What is Tiger365?",
    a: "Tiger365 is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
  },
  {
    q: "How does a Tiger365 ID work?",
    a: "An account ID is generally used to identify a user account. Refer to Tiger365's current account instructions and terms for the exact process."
  },
  {
    q: "How can I access Tiger365?",
    a: "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
  },
  {
    q: "What sports are available on Tiger365?",
    a: "Available sports can change. Check the current sports or gaming section on the website for the latest list and availability."
  },
  {
    q: "Does Tiger365 provide live sports information?",
    a: "Check the site's current sports section for any live-event information and the terms that apply to its use."
  },
  {
    q: "How can I get help with my Tiger365 account?",
    a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
  },
  {
    q: "How do I find Tiger365 login information?",
    a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
  },
  {
    q: "What payment options are supported?",
    a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
  },
  {
    q: "What should I do if I have trouble accessing my account?",
    a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
  },
  {
    q: "Where can I find the latest Tiger365 updates?",
    a: "Refer to Tiger365's current website information and terms for the most accurate answer."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-padding ${styles.section}`} id="faq">
      <div className="container">
        <h2 className="section-title text-center">
          Frequently Asked Questions
        </h2>
        
        <div className={styles.faqWrapper}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
            >
              <div 
                className={styles.faqQuestion} 
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.q}</h3>
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </div>
              <div className={styles.faqAnswer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
