import React from 'react';
import { StyleSheet, 
  Text, 
  View
} from 'react-native';

export default class UserProfile extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Userprofile
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#bb0000',
    },
});