import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginBottom: 10, marginTop: 20}}>
                <Image
                  source={require('../image/logo.jpg')}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 70,
                    borderColor: '#FFFFFF',
                    borderWidth: 2,
                  }}
                />
                <View
                  style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
                  <Text style={{fontSize: 17, fontWeight: 'bold', color: '#212121'}}>
                    Industri Kecil Menengah
                  </Text>
                  <Text style={{color: '#212121'}}>Kota Batu</Text>
                </View>
              </View>
      <StatusBar barStyle="dark-content" backgroundColor={'#f4f4f4'} />
      {/* <View style={{flexDirection: 'row'}}>
        <TextInput
          value={props.pencarian}
          onChangeText={text => props.setPencarian(text)}
          placeholder="Cari informasi tentang kesehatan / dokter"
          style={{
            backgroundColor: '#FFFFFF',
            elevation: 3,
            marginTop: 20,
            paddingLeft: 10,
            borderRadius: 5,
            flex: 1,
          }}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0082F7',
            marginTop: 20,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginLeft: 10,
            elevation: 3,
          }}>
          <Icon name="search" size={25} color="#FFFFFF" />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Header;
