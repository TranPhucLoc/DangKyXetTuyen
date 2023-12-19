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
      style={{height: 50,}}
        onChangeText={text => handleOnchange(text, 'email')}
        placeholder="Enter your email address"
      />
      <Input
      style={{height: 50,}}
        onChangeText={text => handleOnchange(text, 'password')}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => submitHandler()}>
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => submitHandler()}>
        <Text style={{color: 'white'}}>Forgot password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => submitHandler()}>
        <Text style={{color: 'white'}}>New account</Text>
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
    backgroundColor: '#ffffff',
  },
  
  text: {
    alignItems: 'center',
  },
   
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'blue',
    height: 40,
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