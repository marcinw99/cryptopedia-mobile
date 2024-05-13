import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Article() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.backPressableContainer}>
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [styles.backPressable, pressed && styles.backPressablePressed]}
          >
            <Text style={styles.backPressableLabel}>Back</Text>
          </Pressable>
        </View>
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
  backPressableContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  backPressable: {
    padding: 12,
    margin: 8,
    borderRadius: 12,
  },
  backPressablePressed: {
    backgroundColor: '#ddd',
  },
  backPressableLabel: {
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
