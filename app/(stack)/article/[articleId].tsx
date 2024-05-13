import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Article() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text>Article</Text>
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
});
