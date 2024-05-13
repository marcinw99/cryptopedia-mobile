interface SectionConfig {
  title: string;
  data: {
    label: string;
    articleId: string;
  }[];
}

export const sectionsConfig: SectionConfig[] = [
  {
    title: 'Crypto',
    data: [
      { label: 'What is Crypto?', articleId: 'WHAT_IS_CRYPTO' },
      { label: 'Bitcoin origins', articleId: 'BITCOIN_ORIGINS' },
      { label: 'Satoshi Nakamoto', articleId: 'SATOSHI_NAKAMOTO' },
    ],
  },
  {
    title: 'Blockchain',
    data: [
      { label: 'Web 3.0', articleId: 'WEB_3' },
      { label: 'Ethereum ecosystem', articleId: 'ETHEREUM' },
      { label: 'dApps foundations', articleId: 'DAPPS_FOUNDATIONS' },
    ],
  },
  {
    title: 'Defi',
    data: [
      { label: 'Introduction to Defi', articleId: 'DEFI_INTRO' },
      { label: 'Features of Defi', articleId: 'DEFI_BENEFITS' },
      { label: 'Projects in Defi', articleId: 'DEFI_PROJECTS' },
    ],
  },
  {
    title: 'NFTs',
    data: [
      { label: 'What are NFTs?', articleId: 'NFT_INTRO' },
      { label: 'Benefits of NFTs', articleId: 'NFT_BENEFITS' },
      { label: 'Marketplaces for NFTs', articleId: 'NFT_MARKETS' },
    ],
  },
  {
    title: 'Smart Contracts',
    data: [
      { label: 'Introduction to Smart Contracts', articleId: 'SMART_CONTRACTS_INTRO' },
      { label: 'Use cases of Smart Contracts', articleId: 'SMART_CONTRACTS_USE_CASES' },
    ],
  },
];

const articlesConfig = {
  WEB_3: {
    id: 'WEB_3',
    content: 'TBD',
  },
};
