import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import MenuBar from './src/components/MenuBar';
import Header from './src/components/Header';
import Jadwal from './src/components/Jadwal';

export default function App() {
  const [pencarian, setPencarian] = useState('');
  const [kategori, setKategori] = useState([
    {namaKategori: 'Sepatu'},
    {namaKategori: 'Baju'},
    {namaKategori: 'Aksesoris'},
    {namaKategori: 'Celana'},
    {namaKategori: 'Topi'},
    {namaKategori: ''},
  ]);

  const [artikel, setArtikel] = useState([
    {
      judul: 'Jadilah bagian dari kami',
      deskripsi: 'Segera daftarkan produk anda',
      image: require('./src/image/banner.jpg'),
    },
    {
      judul: 'Resep Rahasia Agar Tetap Sehat',
      deskripsi: 'inilah resep rahasia agar anda tetap sehat di umur 60an',
      image: require('./src/image/banner.jpg'),
    },
    {
      judul: 'Resep Rahasia Agar Tetap Sehat',
      deskripsi: 'inilah resep rahasia agar anda tetap sehat di umur 60an',
      image: require('./src/image/banner.jpg'),
    },
  ]);

  // try {
  //   console.log(1);
  //   const res = await fetch(
  //     'http://192.168.1.32:8080/ikm/web/api/setting/indexs',
  //   );
  //   console.log('http://192.168.1.32:8080/ikm/web/api/setting/indexs');
  //   setData(res.data);
  // } catch (error) {
  //   alert(error.message);
  // }
  const getData = () => async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/ikm/web/api/setting/indexs',
      );
      // console.log(res);
      setData(response.datas);
    } catch (error) {
      alert(error.message);
    }
  };

  const [datas, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#f4f4f4'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        <View>
          {datas &&
            datas.map((item, i) => {
              return (
                <>
                  <Text>{datas.tentang_kami}</Text>;
                </>
              );
            })}
        </View>
        <Header pencarian={pencarian} setPencarian={setPencarian} />
        <View style={{height: 300}}>
          <FlatList
            data={artikel}
            style={{marginBottom: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  backgroundColor: '#FFFFFF',
                  width: 373,
                  elevation: 3,
                  marginBottom: 20,
                  marginTop: 20,
                  paddingBottom: 20,
                }}>
                <View
                  style={{
                    height: 170,
                    marginBottom: 5,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}>
                  <ImageBackground
                    source={item.image}
                    style={{
                      flex: 1,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                    imageStyle={
                      {
                        // borderTopRightRadius: 10,
                        // borderTopLeftRadius: 10,
                      }
                    }
                  />
                </View>
                <View>
                  {/* <Image
                          source={item.image}
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            borderColor: '#FFFFFF',
                            borderWidth: 2,
                            marginLeft: 10,
                            marginTop: 5,
                          }}
                        /> */}
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      marginHorizontal: 10,
                      marginTop: 5,
                    }}>
                    {item.judul}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 10,
                    }}>
                    {item.deskripsi}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <Jadwal />
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={{color: '#0082F7', fontWeight: 'bold'}}>
            Kategori Produk
          </Text>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              flex: 1,
            }}>
            <Text style={{color: '#FDB436', fontWeight: 'bold'}}>
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={kategori}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  paddingVertical: 10,
                  marginRight: 10,
                  paddingHorizontal: 10,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 25,
                  elevation: 3,
                  marginBottom: 10,
                  marginTop: 10,
                }}>
                <Text>{item.namaKategori}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>

      <MenuBar />
    </View>
  );
}
