import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  onPressLearnMore,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const Jadwal = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: -10}}>
        <View
          style={{
            width: 150,
            height: 35,
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            elevation: 5,
            marginTop: 2,
            marginBottom: 70,
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{borderRadius: 10}}
            colors={['#018BF7', '#00BAF7']}>
            <TouchableOpacity style={{padding: 20, borderRadius: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../image/banner.jpg')}
                  style={{
                    width: 140,
                    height: 50,
                    borderRadius: 7,
                    borderColor: '#FFFFFF',
                  }}
                />
                <View
                  style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
                  <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
                    Industri Kecil menengah
                  </Text>
                  <Text style={{color: '#f4f4f4'}}>Kota Batu</Text>
                </View>
              </View>

              <View style={{marginTop: 20}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="time" size={25} color="#FFFFFF" />
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF', marginLeft: 10}}>
                      6 April 2022
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="compass" size={25} color="#FFFFFF" />
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF', marginLeft: 10}}>
                      Klinik Medika
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Icon
                    name="chevron-forward-circle"
                    size={35}
                    color="#FFFFFF"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View
          style={{
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 1,
            marginEnd: 130,
            marginBottom: 35,
          }}>
          <TouchableOpacity
            style={{backgroundColor: '#cb1d08', borderRadius: 7, size: 10}}
            onPress={onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button">
            <Text
              style={{
                color: 'white',
                padding: 10,
                fontSize: 8,
                fontWeight: 'bold',
              }}>
              Learn More
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Jadwal;
