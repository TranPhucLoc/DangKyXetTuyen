import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import { Appbar } from 'react-native-paper';
import Input from './InputText';

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
    <Appbar style={styles.bottom}>
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
    </Appbar>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd082',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  textContainer: {
    marginVertical: 5,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#f5a623',
  },
  text: {
    color: 'black',
  },
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