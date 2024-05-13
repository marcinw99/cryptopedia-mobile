export enum ArticleId {
  WHAT_IS_CRYPTO = 'WHAT_IS_CRYPTO',
  BITCOIN_ORIGINS = 'BITCOIN_ORIGINS',
  SATOSHI_NAKAMOTO = 'SATOSHI_NAKAMOTO',
  WEB_3 = 'WEB_3',
  ETHEREUM = 'ETHEREUM',
  DAPPS_FOUNDATIONS = 'DAPPS_FOUNDATIONS',
  DEFI_INTRO = 'DEFI_INTRO',
  DEFI_BENEFITS = 'DEFI_BENEFITS',
  DEFI_PROJECTS = 'DEFI_PROJECTS',
  NFT_INTRO = 'NFT_INTRO',
  NFT_BENEFITS = 'NFT_BENEFITS',
  NFT_MARKETS = 'NFT_MARKETS',
  SMART_CONTRACTS_INTRO = 'SMART_CONTRACTS_INTRO',
  SMART_CONTRACTS_USE_CASES = 'SMART_CONTRACTS_USE_CASES',
}

interface SectionConfig {
  title: string;
  data: {
    label: string;
    articleId: ArticleId;
  }[];
}

export const sectionsConfig: SectionConfig[] = [
  {
    title: 'Crypto',
    data: [
      { label: 'What is Crypto?', articleId: ArticleId.WHAT_IS_CRYPTO },
      { label: 'Bitcoin origins', articleId: ArticleId.BITCOIN_ORIGINS },
      { label: 'Satoshi Nakamoto', articleId: ArticleId.SATOSHI_NAKAMOTO },
    ],
  },
  {
    title: 'Blockchain',
    data: [
      { label: 'Web 3.0', articleId: ArticleId.WEB_3 },
      { label: 'Ethereum ecosystem', articleId: ArticleId.ETHEREUM },
      { label: 'dApps foundations', articleId: ArticleId.DAPPS_FOUNDATIONS },
    ],
  },
  {
    title: 'Defi',
    data: [
      { label: 'Introduction to Defi', articleId: ArticleId.DEFI_INTRO },
      { label: 'Features of Defi', articleId: ArticleId.DEFI_BENEFITS },
      { label: 'Projects in Defi', articleId: ArticleId.DEFI_PROJECTS },
    ],
  },
  {
    title: 'NFTs',
    data: [
      { label: 'What are NFTs?', articleId: ArticleId.NFT_INTRO },
      { label: 'Benefits of NFTs', articleId: ArticleId.NFT_BENEFITS },
      { label: 'Marketplaces for NFTs', articleId: ArticleId.NFT_MARKETS },
    ],
  },
  {
    title: 'Smart Contracts',
    data: [
      { label: 'Introduction to Smart Contracts', articleId: ArticleId.SMART_CONTRACTS_INTRO },
      { label: 'Use cases of Smart Contracts', articleId: ArticleId.SMART_CONTRACTS_USE_CASES },
    ],
  },
];

const articlesCollection = [
  {
    id: ArticleId.WHAT_IS_CRYPTO,
    title: 'What Is Crypto',
    content:
      "Cryptocurrency, often simply referred to as crypto, is a form of digital or virtual currency that uses cryptography as a means of security. It's often decentralized and built on a distributed ledger technology called a blockchain.",
  },
  {
    id: ArticleId.BITCOIN_ORIGINS,
    title: 'Bitcoin Origins',
    content:
      'Bitcoin, the first and the most well-known cryptocurrency, was created by an unknown person or group of people using the name Satoshi Nakamoto and was released as free software in 2009. The Bitcoin system works without a central repository or single administrator, which has led to it being categorized as a decentralized virtual currency.',
  },
  {
    id: ArticleId.SATOSHI_NAKAMOTO,
    title: 'Satoshi Nakamoto',
    content:
      'Satoshi Nakamoto is the name used by the presumed pseudonymous person or persons who developed Bitcoin and authored the Bitcoin whitepaper. Nakamoto also devised the first blockchain database in the process of developing Bitcoin.',
  },
  {
    id: ArticleId.WEB_3,
    title: 'Web 3',
    content:
      'As the third generation of the internet, Web 3.0, often referred to as the Semantic Web or the intelligent web, includes the internet of things (IoT), artificial intelligence (AI)-powered search algorithms, and blockchain-based property rights and smart contracts.',
  },
  {
    id: ArticleId.ETHEREUM,
    title: 'Ethereum',
    content:
      'Ethereum is an open-source, blockchain-based platform that enables developers to build and launch their own decentralized applications (dApps). It is currently the second-largest cryptocurrency platform by market capitalization, behind Bitcoin.',
  },
  {
    id: ArticleId.DAPPS_FOUNDATIONS,
    title: 'DApps Foundations',
    content:
      'Decentralized applications, or dApps, are applications that run on a peer-to-peer network instead of a single computer or server. They function through smart contracts on the blockchain, ensuring that all data and operations are shared across all nodes on the network.',
  },
  {
    id: ArticleId.DEFI_INTRO,
    title: 'Defi Intro',
    content:
      'Decentralized Finance, frequently referred to as DeFi, seeks to use technology to remove intermediaries between parties in a financial transaction. Thanks to blockchain technology and the advent of digital currencies, DeFi applications aim to disrupt the traditional financial world.',
  },
  {
    id: ArticleId.DEFI_BENEFITS,
    title: 'Defi Benefits',
    content:
      'DeFi cuts out intermediaries like banks and traditional financial institutions, increasing the potential for high returns for investors. Apart from offering the potential for higher profits, users of DeFi platforms are also able to maintain full privacy and security of their funds.',
  },
  {
    id: ArticleId.DEFI_PROJECTS,
    title: 'Defi Projects',
    content:
      'There is a wide range of DeFi projects in the blockchain space today, offering a myriad of services, from lending and borrowing platforms, decentralized exchanges, derivative platforms to payment networks, asset management platforms, and others.',
  },
  {
    id: ArticleId.NFT_INTRO,
    title: 'Nft Intro',
    content:
      'Non-fungible tokens, or NFTs, represent a type of digital asset. What makes NFTs unique compared to cryptocurrencies, for instance, is that they are not mutually interchangeable. This is due to the fact that NFTs have distinguishing information recorded in their smart contracts.',
  },
  {
    id: ArticleId.NFT_BENEFITS,
    title: 'Nft Benefits',
    content:
      'NFTs have specific advantages such as their potential as a platform for digital art, which can benefit artists in a significant way. It is also noted for its ability to establish clear ownership of digital assets.',
  },
  {
    id: ArticleId.NFT_MARKETS,
    title: 'Nft Markets',
    content:
      'As the NFT ecosystem evolves, a myriad of NFT marketplaces has sprung up, providing a platform for users to mint, buy, sell, and trade NFTs. These marketplaces have boosted the visibility and accessibility of NFTs, contributing significantly to their ongoing surge in popularity.',
  },
  {
    id: ArticleId.SMART_CONTRACTS_INTRO,
    title: 'Smart Contracts Intro',
    content:
      'Smart contracts are self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code. They automatically execute transactions without requiring a third-party intermediary.',
  },
  {
    id: ArticleId.SMART_CONTRACTS_USE_CASES,
    title: 'Smart Contracts Use Cases',
    content:
      'Smart contracts could be used in a variety of fields, including real estate, healthcare, and the legal field. From creating insurance policies that automatically pay out upon verifying a claim, to facilitating real estate transactions that automatically transfer property rights.',
  },
];

interface Article {
  id: ArticleId;
  title: string;
  content: string;
}

type ArticlesConfig = {
  [key in ArticleId]: Article;
};

const articlesConfig: ArticlesConfig = articlesCollection.reduce<ArticlesConfig>((acc, article) => {
  acc[article.id] = article;
  return acc;
}, {} as ArticlesConfig);

export const getArticle = (articleId: ArticleId): Article => articlesConfig[articleId];
