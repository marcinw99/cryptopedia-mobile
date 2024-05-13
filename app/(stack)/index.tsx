import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const sections = [
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

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.heading}>CRYPTOPEDIA</Text>
        <SectionList
          style={styles.listContainer}
          sections={sections}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <Text style={styles.listItemLabel}>{item.label}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item) => `article-tile${item.articleId}`}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#7132f4',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#7132f4',
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  listContainer: {
    marginTop: 32,
    flex: 1,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'normal',
    padding: 12,
    backgroundColor: '#ddd',
  },
  listItemContainer: {
    margin: 8,
    padding: 4,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  listItemLabel: {
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
