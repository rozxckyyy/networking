import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

const data = [
  'Weather',
  'Jokes',
  'Chuck Norris'
]

export const Home = ({navigation}) => {
	return (
		<View style={styles.container}>
			<FlatList
			style={styles.list}
			data={data}
			renderItem={({item}) => (
			<TouchableOpacity key={item} style={styles.btn} onPress={() => navigation.navigate(item)}>
				<Text>{item}</Text>
			</TouchableOpacity>
			)}/>
		</View>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
  },
  list: {
	marginTop: 50,
	width: '100%',
	padding: 20
  },
  btn: {
	alignItems: 'center',
	width: '100%',
	backgroundColor: '#DDDDDD',
	padding: 20,
	marginTop: 20
  }
});
