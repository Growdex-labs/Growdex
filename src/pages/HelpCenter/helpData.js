import iconGettingStarted from "../../assets/New Design/growdex-help-icon-getting-started.png";
import iconCampaigns from "../../assets/New Design/growdex-help-icon-campaigns.png";
import iconAi from "../../assets/New Design/growdex-help-icon-ai.png";
import iconAnalytics from "../../assets/New Design/growdex-help-icon-analytics.png";
import iconBilling from "../../assets/New Design/growdex-help-icon-billing.png";
import iconIntegrations from "../../assets/New Design/growdex-help-icon-integrations.png";

// Shared by the hub grid and the topic pages, so a card and the page it opens
// can't disagree about its title, icon or tile colour.
export const topics = [
  {
    slug: "getting-started",
    title: "Getting Started",
    body: "Everything you need to set up your Growdex account and launch your first campaign.",
    icon: iconGettingStarted,
    tile: "bg-[#EFE0FB]",
    featured: {
      title: "Getting Started with Growdex",
      body: "Set up your account, connect a platform, and get your first campaign live.",
    },
  },
  {
    slug: "campaign-creation",
    title: "Campaign Creation",
    body: "Learn how to create, edit, duplicate, and publish campaigns using Growdex.",
    icon: iconCampaigns,
    tile: "bg-[#FEF3D7]",
    featured: {
      title: "Creating Your First Campaign",
      body: "Learn how to create your first campaign using Growdex's AI and Manual Campaign Builders.",
    },
  },
  {
    slug: "ai-features",
    title: "AI Features",
    body: "Discover how to use AI Chat, AI Campaign Builder, AI Copy Generation, and optimization recommendations.",
    icon: iconAi,
    tile: "bg-[#F3E6FD]",
    featured: {
      title: "Working with the AI Campaign Builder",
      body: "Generate a full campaign from a single prompt, then refine it however you like.",
    },
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    body: "Understand your campaign performance, reporting dashboards, and optimization insights.",
    icon: iconAnalytics,
    tile: "bg-[#E3EDFB]",
    featured: {
      title: "Reading Your Performance Dashboard",
      body: "Understand every metric on the dashboard and what to act on first.",
    },
  },
  {
    slug: "billing-subscription",
    title: "Billing & Subscription",
    body: "Manage your plan, payments, invoices, and account upgrades.",
    icon: iconBilling,
    tile: "bg-[#E3EDFB]",
    featured: {
      title: "Managing Your Subscription",
      body: "Upgrade, downgrade, or update payment details without losing your work.",
    },
  },
  {
    slug: "integrations",
    title: "Integrations",
    body: "Connect your Meta and TikTok accounts and start publishing campaigns.",
    icon: iconIntegrations,
    tile: "bg-[#E4F5E4]",
    featured: {
      title: "Connecting Your Meta Account",
      body: "Link your Meta ad account so Growdex can publish and track campaigns.",
    },
  },
];

export { articles as popularArticles } from "./articleData.js";

export const findTopic = (slug) => topics.find((topic) => topic.slug === slug);

export const HELP_HUB_PATH = "/blog";
export const topicPath = (slug) => `${HELP_HUB_PATH}/topic/${slug}`;
