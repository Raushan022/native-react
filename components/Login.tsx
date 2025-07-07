import { Button, Text, View } from 'react-native';

const Login = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          props.navigation.navigate('home', { name: 'rkv', age: 31 })
        }
      ></Button>
    </View>
  );
};

export default Login;
