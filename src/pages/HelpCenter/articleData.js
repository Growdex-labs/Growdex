// Article bodies are block lists so the page renders any article without
// per-article markup: p | h2 | h3 | ul.
const firstCampaignBody = [
  {
    type: "p",
    text: "Launching your first marketing campaign doesn't have to be complicated. Whether you're promoting a product, announcing an event, or trying to generate leads, Growdex provides two simple ways to get started: AI Campaign Builder and Manual Campaign Builder.",
  },
  {
    type: "p",
    text: "This guide walks you through both options so you can create and launch your first campaign with confidence.",
  },
  { type: "h2", text: "What is a Campaign?" },
  {
    type: "p",
    text: "A campaign is a coordinated marketing effort designed to achieve a specific goal, such as:",
  },
  {
    type: "ul",
    items: [
      "Increasing sales",
      "Generating leads",
      "Driving website traffic",
      "Growing your email list",
      "Promoting a new product or service",
      "Building brand awareness",
    ],
  },
  {
    type: "p",
    text: "With Growdex, your campaign brings together your messaging, audience, channels, and performance tracking into one place.",
  },
  { type: "h2", text: "Before You Begin" },
  { type: "p", text: "Before creating a campaign, make sure you have:" },
  {
    type: "ul",
    items: [
      "A clear campaign objective",
      "Your product or service information",
      "Images or creative assets (optional but recommended)",
      "An idea of your target audience",
    ],
  },
  {
    type: "p",
    text: "Having these ready will make campaign creation much faster.",
  },
  { type: "h2", text: "Option 1: Create a Campaign with AI" },
  {
    type: "p",
    text: "If you're looking for the fastest way to launch, the AI Campaign Builder is the best place to start.",
  },
  { type: "h3", text: "Step 1: Open Campaigns" },
  {
    type: "p",
    text: "From your dashboard, navigate to Campaigns and click Create Campaign.",
  },
  { type: "h3", text: "Step 2: Select AI Campaign Builder" },
  { type: "p", text: "Choose AI Builder when prompted." },
  { type: "h3", text: "Step 3: Describe Your Business" },
  { type: "p", text: "Tell Growdex about:" },
  {
    type: "ul",
    items: [
      "Your business",
      "What you're promoting",
      "Your campaign goal",
      "Your target audience/industry",
    ],
  },
];

const placeholderBody = (title) => [
  {
    type: "p",
    text: `This guide walks you through ${title.toLowerCase()} step by step.`,
  },
  { type: "h2", text: "Before You Begin" },
  {
    type: "p",
    text: "Make sure you're signed in to Growdex and have access to the account you want to work with.",
  },
];

export const articles = [
  {
    slug: "getting-started-with-growdex",
    title: "Getting Started with Growdex",
    subtitle:
      "Set up your account, connect a platform, and get your first campaign live.",
    topic: "getting-started",
    body: placeholderBody("getting started with Growdex"),
  },
  {
    slug: "connecting-your-meta-account",
    title: "Connecting Your Meta Account",
    subtitle:
      "Link your Meta ad account so Growdex can publish and track campaigns.",
    topic: "integrations",
    body: placeholderBody("connecting your Meta account"),
  },
  {
    slug: "connecting-your-tiktok-account",
    title: "Connecting Your TikTok Account",
    subtitle:
      "Link your TikTok ad account so Growdex can publish and track campaigns.",
    topic: "integrations",
    body: placeholderBody("connecting your TikTok account"),
  },
  {
    slug: "creating-your-first-campaign",
    title: "Creating Your First Campaign",
    subtitle:
      "Learn how to create your first campaign using Growdex's AI and Manual Campaign Builders.",
    topic: "campaign-creation",
    body: firstCampaignBody,
  },
];

export const findArticle = (slug) =>
  articles.find((article) => article.slug === slug);

export const articlePath = (slug) => `/blog/article/${slug}`;
