import { SafeAreaView, SectionList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useLinkProps } from '@react-navigation/native';
import { sectionsConfig } from '@/constants/data';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.heading}>CRYPTOPEDIA</Text>
        <SectionList
          style={styles.listContainer}
          sections={sectionsConfig}
          renderItem={({ item }) => {
            const linkProps = useLinkProps({ to: `/article/${item.articleId}` });
            return (
              <TouchableHighlight {...linkProps} style={styles.listItemContainer} underlayColor="#C6ABFF">
                <View>
                  <Text style={styles.listItemLabel}>{item.label}</Text>
                </View>
              </TouchableHighlight>
            );
          }}
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
  },
  listItemLabel: {
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
