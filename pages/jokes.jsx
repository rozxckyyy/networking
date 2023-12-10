import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const Jokes = () => {
  const [jokeData, setJokeData] = useState(null);

  useEffect(() => {
	fetchJokeData();
  }, []);

  const fetchJokeData = async () => {
	const url = 'https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&safe-mode';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ecebbc3d37msh46d451d422c56b3p11e393jsn62b7b8413db6',
			'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
		}
	};
    try {
		const response = await fetch(url, options);
		const data = await response.json();
		setJokeData(data)
    } catch (error) {
      return (
        <View style={styles.container}>
          <Text>{error}</Text>
        </View>
      );
    }
  };

  if (!jokeData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (jokeData?.message) {
    return (
      <View style={styles.container}>
        <Text>{jokeData.message}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
		<Button title='get joke' onPress={() => fetchJokeData()} color='black'></Button>
		<Text style={styles.text}>{jokeData?.setup}</Text>
		<Text style={styles.text}>{jokeData?.delivery}</Text>
      <Text style={styles.text}>{jokeData?.joke}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});