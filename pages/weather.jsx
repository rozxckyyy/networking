import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '820c40edd20e547b89c46200a500f6a2';

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      return (
        <View style={styles.container}>
          <Text>{error}</Text>
        </View>
      );
    }
  };

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (weatherData?.message) {
    return (
      <View style={styles.container}>
        <Text>{weatherData.message}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{weatherData?.name}</Text>
      <Text style={styles.temperature}>{Math.round(weatherData?.main?.temp)}°C</Text>
      <Text style={styles.weatherDescription}>{weatherData?.weather[0]?.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weatherDescription: {
    fontSize: 18,
  },
});