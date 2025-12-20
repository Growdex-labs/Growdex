

// Responsivness
import React from "react";
// import Azonto_Logo from "../../../Assets/Azonto_logo.png";
import { Link } from "react-router-dom";
import frame3 from "../../../assets/gg_facebook.png"
import frame2 from "../../../assets/prime_twitter (1).png"
import frame5 from "../../../assets/ri_linkedin-fill.png"
import frame4 from "../../../assets/mingcute_instagram-fill.png"
import logo from "../../../assets/Frame 1686560934.png"

export default function Footer() {
  const [openModal, setOpenModal] = React.useState(null);

const modalContent = {
  privacy: {
    title: "Privacy Policy",
    content: `Privacy Policy for Growdex
Last Updated: December 2025

Growdex ("we", "our", "us") provides an AI-powered advertising platform and marketing services that help businesses create, launch, manage, and optimize digital advertising campaigns across multiple platforms.

This Privacy Policy explains how we collect, use, store, and protect your data when you use our products, website, and services.

By using Growdex, you agree to the terms in this Privacy Policy.

1. Information We Collect

1.1 Information You Provide
• Account Information: Name, email address, phone number, business name, password.
• Billing Information: Payment details when funding your Growdex wallet or paying for services.
• Business Information: Ad account IDs, social media handles, business category, marketing goals.

1.2 Information Collected Automatically
• Device information (browser, device model, IP address)
• Usage logs (pages visited, actions performed on the platform)
• Cookies and tracking technologies
• System diagnostics for performance and security monitoring

1.3 Third-Party Platform Data
When you connect advertising accounts (e.g., TikTok, Meta), we may receive:
• Ad performance metrics
• Audience insights
• Creative assets
• Campaign configuration details
• Spend and billing data
• OAuth access tokens (securely stored and encrypted)

We only access data you explicitly authorize.

2. How We Use Your Information

2.1 Provide and Improve Our Services
• Enable ad creation, publishing, and campaign management
• Provide budgeting, wallet functionality, and billing
• Show analytics, insights, and performance reports
• Offer AI-driven recommendations and optimizations
• Maintain platform security and prevent fraud

2.2 Communication
• Product updates
• Account alerts
• Security notifications
• Marketing or promotional content (optional)

2.3 Compliance
• Meet legal, regulatory, and API partner (TikTok/Meta) requirements
• Enforce terms and policies
• Respond to support requests

3. How We Share Your Information

We do not sell your data.

We only share information with:
• Advertising platforms (Meta, TikTok) to run your campaigns
• Payment processors to handle billing securely
• Cloud hosting providers (AWS, GCP, or equivalent)
• Analytics and error monitoring tools

We will never share your information with unauthorized third parties.

4. Data Security

We use industry-standard security practices including:
• Encryption (in transit and at rest)
• OAuth 2.0 secure authentication
• Regular system monitoring and audits
• Role-based access control
• Secure cloud infrastructure

However, no system is 100% secure. We work continually to improve our safeguards.

5. Data Retention

We keep your information only as long as necessary:
• Account data: retained while your account is active
• Ad platform tokens: deleted immediately upon disconnection
• Usage logs: kept for system improvement and monitoring
• Legal/financial records: retained as required by law

You can request deletion of your account and associated data at any time.

6. Your Rights

Depending on your region, you may have rights to:
• Access your data
• Update or correct your data
• Request deletion
• Export your data
• Withdraw consent for marketing
• Disconnect third-party ad accounts

To exercise these rights, contact: privacy@growdex.ai

7. Children's Privacy

Growdex is not intended for children under 18.
We do not knowingly collect data from minors.

8. International Data Transfers

Your data may be stored or processed in regions outside your home country.
We use secure, compliant data transfer mechanisms.

9. Third-Party Links

Our website or dashboards may contain links to external websites.
We are not responsible for their privacy practices.

10. Updates to This Privacy Policy

We may update this policy occasionally.
We will notify users of major changes via email or dashboard notifications.

11. Contact Us

For questions, concerns, or data requests:
Email: privacy@growdex.ai
Company: Growdex Labs Ltd.
Address: 40, Obeagu Street, Otuku Emene, Enugu State, Nigeria`
  },
  terms: {
    title: "Terms of Use",
    content: `Terms of Use for Growdex
Last Updated: December 2025

Welcome to Growdex ("Growdex", "we", "our", "us"). These Terms of Use ("Terms") govern your access and use of our website, platform, mobile services, and any related products or tools (collectively, the "Services").

By accessing or using Growdex, you confirm that you have read, understood, and agreed to these Terms.

If you do not agree, please discontinue use.

1. Eligibility

To use Growdex, you must:
• Be at least 18 years old
• Have the legal authority to enter into these Terms
• Use the Services in compliance with applicable laws and advertising platform policies (TikTok, Meta, etc.)

2. Account Registration

You must create an account to use certain features.

You agree to:
• Provide accurate and complete information
• Keep your login credentials secure
• Notify us of any unauthorized access

You are responsible for all activity under your account.

3. Use of the Services

3.1 Acceptable Use
You agree not to:
• Misuse or interfere with the platform
• Upload harmful or malicious content
• Run misleading, fraudulent, or illegal ads
• Reverse-engineer or attempt to extract source code
• Abuse APIs or data access

We may suspend or deactivate your account for violations.

3.2 Ad Platform Compliance
When connecting TikTok, Meta, or any third-party platform, you must comply with:
• Their ads policies
• Their API terms
• Their community standards

Growdex is not responsible for penalties from misuse or non-compliant ads.

4. Wallet & Payments

Growdex provides a unified spending wallet for multi-platform advertising.

4.1 Funding
You may add funds using accepted payment methods. All deposits are final.

4.2 Billing Integration
Ad spend on connected platforms will be deducted from your Growdex wallet.

4.3 Refunds
Refunds are not guaranteed. They may be issued only in cases of:
• Platform system error
• Double charges
• Proven unauthorized transactions

Advertising performance is not grounds for refunds.

5. Campaign Management

You authorize Growdex to:
• Create and manage campaigns on your behalf
• Access your ad account data
• Provide optimization suggestions
• Automate certain actions (optional features)

You retain full responsibility for:
• Content of your ads
• Budget decisions
• Targeting choices
• Compliance with all advertising rules

6. Data & Privacy

Your data is handled according to our Privacy Policy, which forms part of these Terms.

By using our Services, you agree that:
• We may access and process third-party platform data you authorize
• We may use anonymized data to improve platform performance
• We do not sell user data

7. Intellectual Property

Growdex owns:
• The platform
• Logos, trademarks, brand assets
• Algorithms, dashboards, and features
• Website content and documentation

You may not:
• Copy
• Modify
• Resell
• Distribute
• Reverse engineer

any part of Growdex without permission.

8. Third-Party Integrations

We integrate with platforms like TikTok and Meta.

We are not responsible for:
• Their downtime
• Their policy changes
• API limitations
• Delays or errors caused by them

Usage is subject to their terms.

9. Disclaimer of Warranties

Growdex is provided "as is" and "as available" without guarantees.

We do not promise:
• Guaranteed ad results
• Perfect accuracy
• Uninterrupted availability
• Error-free performance

You use the platform at your own risk.

10. Limitation of Liability

To the fullest extent permitted by law, Growdex is not liable for:
• Loss of revenue
• Poor advertising performance
• Data loss
• Downtime
• Platform errors
• Business interruption

Our total liability is limited to the amount you paid us in the last 3 months.

11. Termination

We may suspend or terminate your account if:
• You violate these Terms
• You misuse APIs or data
• You run prohibited or harmful content
• You engage in fraud

You may also delete your account at any time.

12. Changes to Terms

We may update these Terms occasionally.
Continued use of Growdex after changes indicates acceptance.

13. Governing Law

These Terms are governed by the laws of Nigeria, unless otherwise specified.

14. Contact

For questions or concerns:
Email: legal@growdex.ai
Company: Growdex Labs Ltd.
Address: 40, Obeagu Street, Otuku Emene, Enugu State, Nigeria`
  },
  cookie: {
    title: "Cookie Policy",
    content: `Cookie Policy
Last Updated: December 2025

This Cookie Policy explains how Growdex ("we", "our", "us") uses cookies and similar tracking technologies when you visit our website or use our platform ("Services").

By continuing to browse our site or use our platform, you agree to the use of cookies as described in this policy.

1. What Are Cookies?

Cookies are small text files stored on your device when you visit a website.

They help us:
• Remember your preferences
• Improve website performance
• Analyze user behavior
• Personalize your experience

Cookies do not give us access to your device or personal files.

2. Types of Cookies We Use

2.1 Essential Cookies
These are necessary for the website to function.

They enable:
• Login and authentication
• Security
• Navigation
• Basic platform operations

You cannot disable essential cookies.

2.2 Performance & Analytics Cookies
These help us understand:
• How visitors use our website
• Which pages are most viewed
• Where users drop off
• How we can improve speed and experience

We may use tools such as:
• Google Analytics
• In-app behavior analytics
• Dashboard usage metrics

All data is anonymized.

2.3 Functionality Cookies
These cookies remember your:
• Preferences
• Language
• Saved settings
• User interface choices

They make your experience smoother but are not strictly required.

2.4 Advertising & Marketing Cookies
These cookies help us:
• Understand which campaigns bring visitors
• Track performance of Growdex marketing
• Deliver relevant ads across platforms

We may use:
• Meta Pixel
• TikTok Pixel
• Google Ads cookies
• LinkedIn Insight Tag

These tools only track website behavior for marketing purposes.

2.5 Third-Party Cookies
Third parties may place cookies on your device when you:
• Interact with embedded videos
• Connect ad accounts (Meta, TikTok, etc.)
• Use social sharing tools

These cookies follow the privacy policies of those third parties.

3. How We Use Cookies

We use cookies to:
• Authenticate users
• Prevent fraud
• Improve product performance
• Provide analytics for platform improvement
• Enable ad performance tracking
• Remember user preferences
• Personalize product experience

We do not use cookies to store sensitive personal information.

4. Managing Cookies

You can choose to:
• Accept or reject non-essential cookies
• Disable cookies through your browser settings
• Clear stored cookies at any time

Please note that disabling essential or functional cookies may affect your ability to use parts of our platform.

5. Data Privacy

Cookie data may be combined with account information you provide, but only in accordance with our Privacy Policy.

We do not sell or misuse cookie data.

6. Updates to This Policy

We may update this Cookie Policy occasionally.
We will notify users of significant changes on the website or via email.

7. Contact Us

If you have questions about this Cookie Policy, please contact:
Email: privacy@growdex.ai
Company: Growdex Technologies Ltd.
Address: 40, OBEAGU STREET, OTUKU EMENE, ENUGU STATE, NIGERIA`
  },
};
const modalRef = React.useRef();

React.useEffect(() => {
  if (openModal && modalRef.current) {
    // Scroll smoothly to modal container
    modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}, [openModal]);


  return (
    <div className="w-full bg-white overflow-hidden">

     <footer className="bg-white  text-gray-700 max-w-7xl mx-auto">

     <div className="pt-10 xl:pt-16 px-6 xl:ml-8 flex flex-col xl:flex-row justify-between items-start w-full gap-3 xl:gap-70">

  {/* Logo & Description */}
 {/* Logo & Description */}
<div className="max-w-md space-y-6 mb-14 xl:mb-0">
<div className="flex justify-start gap-2">
  <img src={logo} alt="" />
<Link to="/">

  <h2 className="text-xl font-bold text-black">Growdex</h2>
    {/* <img src={Azonto_Logo} alt="Azonto Logo" className="w-44 h-auto" /> */}
  </Link>
</div>

  {/* Mobile: Single line */}
  {/* <p className="text-gray-600 text-sm  mt-6 block md:hidden">
    Transaction life-cycle management solution for your business.
  </p> */}

  {/* Desktop: With line breaks */}
  <p className="text-gray-600 text-xs mt-2">
  Connect and manage your campaigns <br /> across all major social and ad platforms, <br /> seamlessly, powerfully, and in one place
  </p>

  {/*  Company Address */}

  {/* <p className="text-black text-sm mt-24 ">
 <span className="font-bold"> Contact us: <br /></span>
    12 Ikorodu Road, Maryland, Lagos, Nigeria
  </p> */}
</div>


  {/* Link Sections */}
  <div className="flex flex-col xl:flex-col flex-1 gap-6">
  <div className="grid grid-cols-1 xl:grid-cols-4 gap-10 md:gap-4">
    {/* Product */}
    <div>
      <h4 className="font-semibold mb-4 text-black text-xl">Product</h4>
      <ul className="space-y-3 text-sm whitespace-nowrap text-gray-600">
        <li>Waitlist</li>
        <li>Pricing (Coming Soon)</li>
        <li>Features</li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h4 className="font-semibold mb-4 text-black text-xl">Company</h4>
      <ul className="space-y-3 text-sm text-gray-600 whitespace-nowrap">
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h4 className="font-semibold mb-4 text-black text-xl">Resources</h4>
      <ul className="space-y-3 text-sm text-gray-600">
        <li>Newsletter</li>
        <li>Pricing</li>
        <li>FAQ</li>
      </ul>
    </div>

   {/* Follow us */}
<div>
  <h4 className="font-semibold mb-4 text-black text-xl md:text-xl">Follow Us</h4>
  <ul className="space-y-3 text-sm text-gray-600">
    <div className="flex justify-start xl:justify-start mt-2 md:mt-4 space-x-12 md:space-x-6">
      <a
        href="https://www.facebook.com/share/15LvScWKn7/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={frame3}
          alt="Facebook"
          className="w-7 h-7 md:w-4 md:h-4"
        />
      </a>
      <a
        href="https://x.com/growdexhq?s=21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={frame2}
          alt="Twitter/X"
          className="w-7 h-7 md:w-4 md:h-4"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/growdexhq/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={frame5}
          alt="LinkedIn"
          className="w-7 h-7 md:w-4 md:h-4"
        />
      </a>
      <a
        href="https://www.instagram.com/growdexhq/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={frame4}
          alt="Instagram"
          className="w-7 h-7 md:w-4 md:h-4"
        />
      </a>
    </div>
  </ul>
</div>

  </div>






</div>

  {/* <div className="flex jusify-center mt-24 space-x-6">
  <img src={frame3} alt="" className="w-6 h-6" />
  <img src={frame2} alt="" className="w-6 h-6" />
</div> */}
</div>


{/* Bottom Bar */}
<div className="border-t border-gray-300 py-6 mt-4 md:px-8">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start text-sm text-gray-500 gap-4">
  <div className="flex flex-row items-center flex-wrap gap-x-2 gap-y-2">
  <button onClick={() => setOpenModal("privacy")} className="hover:text-black text-black font-semibold text-xs">
    Privacy Policy
  </button>
  {/* <span className="text-gray-800 hidden md:inline">|</span> */}
  <span className="text-gray-800 md:inline">|</span>

  <button onClick={() => setOpenModal("terms")} className="hover:text-black text-black font-semibold text-xs">
    Terms & Conditions
  </button>
  {/* <span className="text-gray-800 hidden md:inline">|</span> */}
  <span className="text-gray-800 md:inline">|</span>

  <button onClick={() => setOpenModal("cookie")} className="hover:text-black text-black font-semibold text-xs">
    Cookie Policy
  </button>
</div>

    <div className="text-gray-800 flex flex-col">
    © 2025 Growdex LLC.
   <span className="mt-2"> Built with ❤️ for MSMEs, founders, and modern marketers.</span>
   {/* <span className="text-gray-800 md:hidden"> All Rights Reserved</span> */}
    </div>
  </div>
</div>

</footer>
{openModal && (
  <div ref={modalRef} className="fixed inset-0 z-50 backdrop-blur-sm bg-black/50 flex justify-center items-center px-4">

    <div className="bg-white text-black rounded-lg shadow-xl w-full max-w-2xl p-6 relative max-h-[85vh] overflow-y-auto">
      <div className="flex justify-between items-center border-b pb-3 mb-4 sticky top-0 bg-white z-10">
        <h2 className="text-xl font-semibold">{modalContent[openModal].title}</h2>
        <button
          onClick={() => setOpenModal(null)}
          className="text-black hover:text-red-500 font-bold text-2xl leading-none"
        >
          &times;
        </button>
      </div>
      <div className="text-gray-700 text-sm leading-relaxed">
        <pre className="whitespace-pre-wrap font-sans text-sm">{modalContent[openModal].content}</pre>
      </div>
    </div>
  </div>
)}


   </div>

  );
}
