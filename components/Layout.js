// components/Layout.js
import React from 'react';
import headerStyles from '../styles/Header.module.css';
import footerStyles from '../styles/Footer.module.css';

export default function Layout({ children }) {
  return (
    <>
      {/* Top Bar */}
      <div className={headerStyles.topBar}>
        {/* Left: logo image */}
        <div className={headerStyles.logoImage}>
          <img src="/images/logo.png" alt="Site Logo" />
        </div>

        {/* Center: text */}
        <h1 className={headerStyles.logoText}>LOGO</h1>

        {/* Right: controls */}
        <div className={headerStyles.topControls}>
          <input
            type="text"
            placeholder="Search"
            className={headerStyles.search}
          />
          <button aria-label="Wishlist" className={headerStyles.iconBtn}>
            ❤️
          </button>
          <button aria-label="Cart" className={headerStyles.iconBtn}>
            🛒
          </button>
          <button aria-label="Account" className={headerStyles.iconBtn}>
            👤
          </button>
          <select aria-label="Language" className={headerStyles.lang}>
            <option value="ENG">ENG</option>
            <option value="US">US</option>
            <option value="AME">AME</option>
          </select>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={headerStyles.mainNav}>
        {['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US'].map((link) => (
          <a key={link} href="#" className={headerStyles.navLink}>
            <b>{link}</b>
          </a>
        ))}
      </nav>

      {/* Page content */}
      <main className="container">{children}</main>

      {/* Footer */}
      <footer className={footerStyles.footer}>
        <div className={footerStyles.footerContent}>
          {/* Newsletter / Contact / Currency Row */}
          <div className={footerStyles.topFooter}>
            <div className={footerStyles.newsletter}>
              <h3>BE THE FIRST TO KNOW</h3>
              <p>Sign up for updates from mettā muse.</p>
              <div className={footerStyles.subscribeForm}>
                <input type="email" placeholder="Enter your e-mail…" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
            <div className={footerStyles.contact}>
              <h3>CONTACT US</h3>
              <p>+44 221 133 5360</p>
              <p>customercare@mettāmuse.com</p>
              <h3>CURRENCY</h3>
              <p className={footerStyles.currency}>
                <span className={footerStyles.flag}>🇺🇸</span> USD
              </p>
              <small>
                Transactions completed in Euros; hover for reference.
              </small>
            </div>
          </div>

          <hr className={footerStyles.divider} />

          {/* Links / Social / Payments */}
          <div className={footerStyles.bottomFooter}>
            <div className={footerStyles.column}>
              <h4>mettā muse</h4>
              {[
                'About Us',
                'Stories',
                'Artisans',
                'Boutiques',
                'Contact Us',
                'EU Compliance Docs',
              ].map((text) => (
                <a key={text} href="#">
                  {text}
                </a>
              ))}
            </div>
            <div className={footerStyles.column}>
              <h4>QUICK LINKS</h4>
              {[
                'Orders & Shipping',
                'Join/Login as a Seller',
                'Payment & Pricing',
                'Return & Refunds',
                'FAQs',
                'Privacy Policy',
                'Terms & Conditions',
              ].map((text) => (
                <a key={text} href="#">
                  {text}
                </a>
              ))}
            </div>
            <div className={footerStyles.column}>
              <h4>FOLLOW US</h4>
              <div className={footerStyles.social}>
                <a href="#" aria-label="Instagram">
                  📷
                </a>
                <a href="#" aria-label="LinkedIn">
                  🔗
                </a>
              </div>
              <h4 style={{ marginTop: '1.5rem' }}>mettā muse ACCEPTS</h4>
              <div className={footerStyles.payments}>
                <img src="/images/gpay.png" alt="Google Pay" />
                <img src="/images/mastercard.png" alt="Mastercard" />
                <img src="/images/paypal.png" alt="PayPal" />
                <img src="/images/amexpay.png" alt="Amex" />
                <img src="/images/applepay.png" alt="Apple Pay" />
                <img src="/images/shopifypay.png" alt="Shopify Pay" />
              </div>
            </div>
          </div>

          <div className={footerStyles.copy}>
            Copyright © 2023 mettāmuse. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}