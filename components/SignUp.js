import * as React from 'react';
import { Appbar, StyleSheet, Button, Text, View  } from 'react-native-paper';
const SignUp = () => {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.header}>   
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Title" />
        </Appbar.Header>

        <Text>LOG IN</Text>
        <Text>Enter Gmail</Text>
        <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        <Text>Enter Password</Text>
        <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        <Button icon="camera" mode="elevated" onPress={() => console.log('Please Wait')}>
            Log In
        </Button>
        </View>


);
};

const styles = StyleSheet.create({
    header: {
      flex: 1,
      flexDirection: 'column',
      alignSelf: 'stretch',
      paddingTop: 20,
      paddingBottom: 5,
      backgroundColor: '#f3f3f3'
    },
    header_text: {
      fontWeight: 'bold',
      fontSize: 17,
      textAlign: 'center'
    }
  });
export default SignUp;
