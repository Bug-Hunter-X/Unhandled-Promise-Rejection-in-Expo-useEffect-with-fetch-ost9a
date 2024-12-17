import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function App() {
  const [resource, setResource] = React.useState(null);

  React.useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((json) => setResource(json.results));
  }, []);

  if (!resource) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {resource.map((item) => (
        <View style={styles.item} key={item.id}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text>{item.name}</Text>
        </View>
      ))}
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});