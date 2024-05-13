import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { RouteProp, useRoute } from '@react-navigation/core';
import { RootStackParamList } from '@/constants/typings';
import { getArticle } from '@/constants/data';

export default function Article() {
  const router = useRouter();
  const route = useRoute<RouteProp<RootStackParamList, 'Article'>>();
  const { articleId } = route.params;

  const article = getArticle(articleId);

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
        <View style={styles.articleWrapper}>
          <Text style={styles.articleTitle}>{article.title}</Text>
          <Text style={styles.articleContent}>{article.content}</Text>
        </View>
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
  articleWrapper: {
    marginTop: 16,
    paddingHorizontal: 12,
  },
  articleTitle: {
    fontSize: 24,
  },
  articleContent: {
    marginTop: 32,
    fontSize: 16,
    letterSpacing: 1.2,
  },
});
