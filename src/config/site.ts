export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

const publicSiteUrl = import.meta.env.PUBLIC_SITE_URL ?? 'https://automationarchitech.com';

export const siteConfig = {
  title: 'Automation Architech',
  description:
    'Data pipelines, automated reporting and workflow automation for marketing, sales and ops teams that have outgrown Coda, Airtable, Google Sheets and Zapier.',
  url: publicSiteUrl,
  email: 'hello@automationarchitech.com',
  logo: '/images/logo.png',
  ogImage: '/images/og-default.png',
  social: [
    { label: 'Medium', href: 'https://medium.com/automation-architech', icon: 'lucide:book-open' },
    { label: 'Facebook', href: 'https://www.facebook.com/automationarchitech', icon: 'lucide:facebook' }
  ],
  navigation: <NavLink[]>[
    { label: 'Home', href: '/#home' },
    { label: 'Services', href: '/#services' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Case Studies', href: '/case-studies/' },
    { label: 'Insights', href: '/blog/' },
    { label: 'Contact', href: '/#contact' }
  ],
  services: [
    {
      slug: 'llm-applications',
      name: 'LLM Applications',
      headline: 'AI copilots that understand your workflows.',
      description:
        'Custom ChatGPT-style copilots, knowledge assistants, and workflow copilots grounded in your data.',
      icon: 'brain',
      link: '/services/llm-applications/'
    },
    {
      slug: 'data-pipelines',
      name: 'Data Pipelines & Scrapers',
      headline: 'Operational data streams engineered for reliability.',
      description:
        'Streaming + batch ETL, scraping frameworks, and validation layers that keep analytics trustworthy.',
      icon: 'database',
      link: '/services/data-pipelines/'
    },
    {
      slug: 'system-workflows',
      name: 'System Workflows',
      headline: 'APIs and automations that tie platforms together.',
      description:
        'Zapier/n8n orchestration, custom webhooks, and event-driven middleware for cross-product flows.',
      icon: 'workflow',
      link: '/services/system-workflows/'
    }
  ]
};
