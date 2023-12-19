import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Input from './InputText';
import Header from './Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const initialState = {    
    email: '',
    password: '',
  };

  const [inputs, setInputs] = useState(initialState);

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const submitHandler = () => {
    console.log(inputs);
  };

  return (
    <SafeAreaProvider style={{flex: 1,}}>
      <Header/>
      <View style={styles.main}>
      <Input
      
        onChangeText={text => handleOnchange(text, 'email')}
        placeholder="Enter your email address"
      />
      <Input
      
        onChangeText={text => handleOnchange(text, 'password')}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => submitHandler()}>
        <Text style={{}}>Submit</Text>
      </TouchableOpacity>
      </View> 
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd082',
  },
  
  text: {
    alignItems: 'center',
  },
  // textContainer: {
  //   marginVertical: 5,
  //   backgroundColor: 'white',
  //   width: '80%',
  //   borderRadius: 10,
  //   paddingLeft: 10,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  //   borderWidth: 2,
  //   borderColor: '#f5a623',
  // },
  
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#f5a623',
    height: 60,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default App;