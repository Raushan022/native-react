import { Text, View } from 'react-native';

const Home = props => {
  const { name, age } = props.route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Home</Text>
      <Text style={{ fontSize: 30 }}>Name: {name}</Text>
      <Text style={{ fontSize: 30 }}>Age: {age}</Text>
    </View>
  );
};

export default Home;
