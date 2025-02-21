import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import HomeScreen from '../screens/Home';
import Contact from '../screens/Contact';
import details from '../screens/details';


const Tab = createBottomTabNavigator();
function AppNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={props => (
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate('Home')}
            >
              <Text style={styles.buttonText}>Home 🏠</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate('Contact')}
            >
              <Text style={styles.buttonText}>Contact Us 📞</Text>
            </TouchableOpacity>
          </View>
        )}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="details" component={details} />

      </Tab.Navigator>
    );
  }
  

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#DDEFF0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
  },
  button: {
    backgroundColor: '#FEE2E2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 0,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AppNavigator;
