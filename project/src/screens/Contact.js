import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ArchitectScreen = ({ navigation }) => {
  return (

    
    <View style={styles.container}>
      
      <ScrollView>
        {/* Image and Title */}
        <View style={styles.imageContainer}>
          <Image source={require('../../image/users.png')} style={styles.mainImage} />

          <View style={styles.overlayTextContainer}>
            <Text style={styles.overlayText1}>ติดต่อเรา</Text>

            <Text style={styles.overlayText}>Contact </Text>
          </View>
        </View>
        
               <View style={styles.cardRow}>
                    <Image source={require('../../image/n.png')} style={styles.icon} />
                    <View>
                      <Text style={styles.cardTitle}>ชื่อ- สกุล</Text>
                      <Text>นาย ณัฐนนท์ ศรีเมืองเฮ้า </Text>

                      <Text>รหัสนักศึกษา: 65122250006</Text>
                    </View>
                  </View>

                  <View style={styles.cardRow}>
                    <Image source={require('../../image/b.png')} style={styles.icon} />
                    <View>
                      <Text style={styles.cardTitle}>ชื่อ- สกุล</Text>
                      <Text>นาย วิทยา คนที </Text>

                      <Text>รหัสนักศึกษา: 65122250008</Text>
                    </View>
                  </View>


                  <View style={styles.cardRow}>
                    <Image source={require('../../image/c.png')} style={styles.icon} />
                    <View>
                      <Text style={styles.cardTitle}>ชื่อ- สกุล</Text>
                      <Text>นางสาว ขวัญณิชา สําเร </Text>

                      <Text>รหัสนักศึกษา: 65122250013</Text>
                    </View>
                  </View>



                  <View style={styles.cardRow}>
                    <Image source={require('../../image/t.png')} style={styles.icon} />
                    <View>
                      <Text style={styles.cardTitle}>ชื่อ- สกุล</Text>
                      <Text>นาย สหรัถ อินต๊ะวิรา </Text>

                      <Text>รหัสนักศึกษา: 65122250014</Text>
                    </View>
                  </View>

                  <View style={styles.cardRow}>
                    <View>
                      <Text style={styles.cardTitle}></Text>
                    </View>
                  </View>
        


      </ScrollView>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDEFF0',
    padding: 1,
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

    backgroundColor:'#FADADD',
    alignItems: 'center',
    position: 'relative',
    marginTop:40,
    marginBottom: 10,
    borderRadius: 40,


  },
  mainImage: {
    marginBottom:45,
    marginTop:30,
    left:50,
    width: 160,
    height: 160,
  },

  overlayTextContainer: {
    left:15,
    position: 'absolute',
    bottom: 40,
    padding: 5,
    borderRadius: 5,
  },
  overlayText: {
    color: '#424242',
    fontSize: 20,
    fontWeight: 'bold',
  },

  overlayText1: {
    marginBottom:7,
    color: '#424242',
    fontSize: 18,
    fontWeight: 'bold',
  },


  card: {
    backgroundColor: '#FADADD',
    padding: 40,
    borderRadius: 10,
    marginTop:25,
    width: 400,
    height: 200,

  },

  icon: {
    marginTop:5,
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  cardTitle: {
    marginTop:-10,
    marginBottom:4,
    fontSize: 22,
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
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FADADD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ArchitectScreen;
