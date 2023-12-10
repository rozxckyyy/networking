import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const Chuck = () => {
  const [chuckData, setChuckData] = useState(null);

  useEffect(() => {
	fetchChuckData();
  }, []);

  const fetchChuckData = async () => {
	const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			'X-RapidAPI-Key': 'ecebbc3d37msh46d451d422c56b3p11e393jsn62b7b8413db6',
			'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
		}
	};
    try {
		const response = await fetch(url, options);
		const data = await response.json();
		setChuckData(data)
    } catch (error) {
      return (
        <View style={styles.container}>
          <Text>{error}</Text>
        </View>
      );
    }
  };

  if (!chuckData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (chuckData?.message) {
    return (
      <View style={styles.container}>
        <Text>{chuckData.message}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
		<Button title='get facts' onPress={() => fetchChuckData()} color='black'></Button>
      <Text style={styles.text}>{chuckData?.value}</Text>
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