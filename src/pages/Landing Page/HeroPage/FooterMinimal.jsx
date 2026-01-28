import React, { useState, useRef, useEffect } from "react";
import logo from "../../../assets/Frame 1686560934.png";
import facebookIcon from "../../../assets/gg_facebook.png";
import twitterIcon from "../../../assets/prime_twitter (1).png";
import linkedinIcon from "../../../assets/ri_linkedin-fill.png";
import instagramIcon from "../../../assets/mingcute_instagram-fill.png";

function FooterSection({ title, children }) {
  return (
    <div>
      <div className="text-sm font-semibold text-gray-900">{title}</div>
      <div className="mt-2 h-[2px] w-10 bg-[#FFE95C]" />
      <div className="mt-4 space-y-3 text-sm text-gray-500">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <a href={href} className="block hover:text-gray-700">
      {children}
    </a>
  );
}

export default function FooterMinimal() {
  const [openModal, setOpenModal] = useState(null);

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

We will never share information with unauthorized third parties.

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
Address: 40, Obeagu Street, Otuku Emene, Enugu State, Nigeria`,
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
`,
    },
    cookie: {
      title: "Cookie Policy",
      content: `Cookie Policy
Last Updated: December 2025

This Cookie Policy explains how Growdex ("we", "our", "us") uses cookies and similar tracking technologies when you visit our website or use our platform ("Services").
`,
    },
  };

  const modalRef = useRef();

  useEffect(() => {
    if (openModal && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [openModal]);

  return (
    <>
      <div className="w-full py-10 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: Logo + contact + socials */}
          <div className="max-w-md flex flex-col">
            <div className="flex items-start gap-3">
              <img
                src={logo}
                alt="Growdex"
                className="h-10 w-10 object-contain grayscale opacity-60"
                draggable={false}
              />
              <div className="leading-tight">
                <div className="text-xs font-medium text-gray-500">
                  Contact us
                </div>
                <a
                  href="mailto:hello@growdex.ai"
                  className="mt-1 block text-2xl sm:text-3xl font-semibold tracking-tight text-gray-400 hover:text-gray-500"
                >
                  hello@growdex.ai
                </a>
              </div>
            </div>

            <div className="mt-36">
              {/* Desktop socials */}
              <div className="mt-10 hidden lg:block">
                <div className="text-xs font-semibold text-gray-800">
                  Follow us on socials:
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href="https://x.com/growdexhq?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="opacity-90 hover:opacity-100"
                  >
                    <img src={linkedinIcon} alt="" className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/growdexhq?igsh=MTd2eXZodm83eWh5cA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="opacity-90 hover:opacity-100"
                  >
                    <img src={instagramIcon} alt="" className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/growdexhq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="opacity-90 hover:opacity-100"
                  >
                    <img src={facebookIcon} alt="" className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1FfTsmVb9m/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="opacity-90 hover:opacity-100"
                  >
                    <img src={twitterIcon} alt="" className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Desktop copyright (Figma: under logo/socials on left) */}
              <div className="border-t mt-4 border-t-gray-400 pt-4 hidden lg:block text-sm text-gray-700">
                <div className="font-semibold">©2025 Growdex Labs Limited</div>
                <div className="mt-2">
                  Built with <span className="text-red-500">♥</span> for MSMEs,
                  founders, and modern marketers.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Links */}
          <div className="w-full lg:max-w-3xl">
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-3">
              {/* Column 1 */}
              <div className="space-y-10">
                <FooterSection title="Product">
                  <FooterLink href="#how-it-works">How it Works</FooterLink>
                  <FooterLink href="#features">Features</FooterLink>
                  <FooterLink href="#pricing">Pricing</FooterLink>
                  <FooterLink href="#waitlist-banner">
                    Join the Waitlist
                  </FooterLink>
                </FooterSection>

                <FooterSection title="Agency">
                  <FooterLink href="/agency">Growdex Agency</FooterLink>
                  <FooterLink href="/agency#services">Services</FooterLink>
                  <FooterLink href="/agency#case-studies">
                    Case Studies
                  </FooterLink>
                  <FooterLink href="#waitlist-banner">
                    Book a Free Strategy Call
                  </FooterLink>
                </FooterSection>
              </div>

              {/* Column 2 */}
              <div className="space-y-10">
                <FooterSection title="Resources">
                  <FooterLink href="#">Help Center</FooterLink>
                  <FooterLink href="#">Documentation</FooterLink>
                  <FooterLink href="#faqs">FAQs</FooterLink>
                  <FooterLink href="mailto:hello@growdex.ai">
                    Contact Support
                  </FooterLink>
                </FooterSection>

                <FooterSection title="Resources">
                  <FooterLink href="#">Help Center</FooterLink>
                  <FooterLink href="#">Documentation</FooterLink>
                  <FooterLink href="#faqs">FAQs</FooterLink>
                  <FooterLink href="mailto:hello@growdex.ai">
                    Contact Support
                  </FooterLink>
                </FooterSection>
              </div>

              {/* Column 3 */}
              <div className="space-y-10">
                <FooterSection title="Company">
                  <FooterLink href="#who-we-are">About Us</FooterLink>
                  <FooterLink href="/blog">Blog</FooterLink>
                  <FooterLink href="#">Careers</FooterLink>
                  <FooterLink href="#">Community</FooterLink>
                </FooterSection>

                <FooterSection title="Legal">
                  <button
                    onClick={() => setOpenModal("privacy")}
                    className="block hover:text-gray-700 text-left text-sm text-gray-500 bg-transparent border-0 cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                  <button
                    onClick={() => setOpenModal("terms")}
                    className="block hover:text-gray-700 text-left text-sm text-gray-500 bg-transparent border-0 cursor-pointer"
                  >
                    Terms of Use
                  </button>
                  <button
                    onClick={() => setOpenModal("cookie")}
                    className="block hover:text-gray-700 text-left text-sm text-gray-500 bg-transparent border-0 cursor-pointer"
                  >
                    Cookie Policy
                  </button>
                </FooterSection>
              </div>
            </div>

            {/* Mobile socials + copyright at the bottom */}
            <div className="mt-10 lg:hidden">
              <div className="text-xs font-semibold text-gray-800">
                Follow us on socials:
              </div>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://x.com/growdexhq?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="opacity-90 hover:opacity-100"
                >
                  <img src={linkedinIcon} alt="" className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/growdexhq?igsh=MTd2eXZodm83eWh5cA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="opacity-90 hover:opacity-100"
                >
                  <img src={instagramIcon} alt="" className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/growdexhq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="opacity-90 hover:opacity-100"
                >
                  <img src={facebookIcon} alt="" className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1FfTsmVb9m/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="opacity-90 hover:opacity-100"
                >
                  <img src={twitterIcon} alt="" className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-700">
                <div className="font-semibold">©2025 Growdex Labs Limited</div>
                <div className="mt-2">
                  Built with <span className="text-red-500">♥</span> for MSMEs,
                  founders, and modern marketers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 backdrop-blur-sm bg-black/50 flex justify-center items-center px-4"
        >
          <div className="bg-white text-black rounded-lg shadow-xl w-full max-w-2xl p-6 relative max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3 mb-4 sticky top-0 bg-white z-10">
              <h2 className="text-xl font-semibold">
                {modalContent[openModal].title}
              </h2>
              <button
                onClick={() => setOpenModal(null)}
                className="text-black hover:text-red-500 font-bold text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <div className="text-gray-700 text-sm leading-relaxed">
              <pre className="whitespace-pre-wrap font-sans text-sm">
                {modalContent[openModal].content}
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
