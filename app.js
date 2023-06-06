import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';

const chapters = [
  {
    id: 1,
    title: 'Chapter 1',
    content:
      'This is the content of Chapter 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Chapter 2',
    content:
      'This is the content of Chapter 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Chapter 3',
    content:
      'This is the content of Chapter 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleChapterPress = (chapter) => {
    setSelectedChapter(chapter);
  };

  const handleSwitchChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, darkMode && styles.headerTextDark]}>Book App</Text>
        <Switch
          value={darkMode}
          onValueChange={handleSwitchChange}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.chapterList}>
          {chapters.map((chapter) => (
            <TouchableOpacity
              key={chapter.id}
              onPress={() => handleChapterPress(chapter)}
              style={[styles.chapterItem, selectedChapter === chapter && styles.selectedChapterItem]}
            >
              <Text style={styles.chapterTitle}>{chapter.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.chapterContent}>
          {selectedChapter ? (
            <>
              <Text style={[styles.chapterTitle, darkMode && styles.chapterTitleDark]}>
                {selectedChapter.title}
              </Text>
              <Text style={[styles.chapterText, darkMode && styles.chapterTextDark]}>
                {selectedChapter.content}
              </Text>
            </>
          ) : (
            <Text style={styles.placeholderText}>Select a chapter to view its content.</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  containerDark: {
    backgroundColor: '#222',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTextDark: {
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  chapterList: {
    flex: 1,
    paddingRight: 16,
    marginRight: 16,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  chapterItem: {
    paddingVertical: 8,
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  selectedChapterItem: {
    backgroundColor: '#ddd',
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  chapterTitleDark: {
    color: '#fff',
  },
  chapterContent: {
    flex: 2,
    paddingLeft: 16,
  },
  chapterText: {
    fontSize: 16,
    lineHeight: 24,
  },
  chapterTextDark: {
    color: '#fff',
  },
  placeholderText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default App;
