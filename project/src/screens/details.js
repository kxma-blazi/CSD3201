import React from 'react';
import { View, Text, Image, ScrollView,  StyleSheet } from 'react-native';

export default function ArchitectDetails({ route }) {
    const { itemName, itemName1, synopsis, skill, feature, image, image2, image3 } = route.params;

    return (

<View style={styles.container}>
  {/* Header */}
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}></Text>
  </View>

  <ScrollView>
    {/* Main Image Section */}
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.mainImage} />
      <View style={styles.overlayTextContainer}>
        <Text style={styles.overlayText1}>{itemName}</Text>
        <Text style={styles.overlayText}>{itemName1}</Text>
      </View>
    </View>

    {/* Career Introduction */}
    <View style={styles.card}>
      <Text style={styles.cardTitle}>รู้จักอาชีพ</Text>
      <Text>{synopsis}</Text>
    </View>

    {/* Skills Section */}
    <View style={styles.cardRow}>
      <Image source={image2} style={styles.icon} />
      <View>
        <Text style={styles.cardTitle}>Skills</Text>
        <Text>- {skill}</Text>
      </View>
    </View>

    {/* Suitable Qualifications */}
    <View style={styles.cardRow}>
      <Image source={image3} style={styles.icon} />
      <View>
        <Text style={styles.cardTitle}>คุณสมบัติที่เหมาะสม</Text>
        <Text>- {feature}</Text>
      </View>
    </View>

    <View style={styles.cardRow}>
      
    </View>
  </ScrollView>
</View>

   );
 };


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DDEFF0',
      padding: 20,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    headerText: {
      marginTop:25,
      fontSize: 22,
      fontWeight: 'bold',
    },
    menuIcon: {
      fontSize: 22,
    },
    imageContainer: {
      alignItems: 'center',
      position: 'relative',
      marginBottom: 10,
    },
    mainImage: {
        borderRadius: 60,
      marginBottom:18,
      left:90,
      width: 120,
      height: 120,
    },
  
    overlayTextContainer: {
      left:-2,
      position: 'absolute',
      bottom: 40,
      padding: 5,
      borderRadius: 5,
    },
    overlayText: {
        marginBottom:-5,
      color: '#424242',
      fontSize: 18,
      fontWeight: 'bold',
    },
  
    overlayText1: {
      marginBottom:12,
      color: '#424242',
      fontSize: 18,
      fontWeight: 'bold',
    },
  
  
    card: {
      backgroundColor: '#FADADD',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
    },
    cardRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FADADD',
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,

    },
    icon: {
      width: 50,
      height: 50,
      borderRadius: 10,
      marginRight: 15,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 15,
      backgroundColor: '#FFF',
      borderTopWidth: 1,
      borderColor: '#CCC',
    },
    navText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });