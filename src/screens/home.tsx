import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {styles} from '../assets/styles/styles';
import {useState, useEffect} from 'react';
import Renderitem from '../components/renderitem';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {filter} from 'lodash';
import {listOfBooks} from '../api/const';
const Home = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const {books} = useSelector((state: any) => state.books);
  const {Fav} = useSelector((state: any) => state.books);
  const navigation = useNavigation();

  const handleInputChange = (text:any) => {
    setSearch(text);

    const filteredObjects = filter(listOfBooks, obj => obj.title.includes(text));
    setData(filteredObjects);
    console.log(filteredObjects)
  };
  const renderItem = useCallback(({ item }:any) => {
    return <Renderitem item={item} />;
  },[data])

  return (
    <View className="flex flex-1">
      <View className=" flex-row justify-between">
        <Text style={styles.text} className="text-black  m-5">
          Hi Nick
        </Text>

        <Image
          className="m-4"
          style={styles.ellipse}
          source={require('../assets/images/Ellipse.png')}
        />
      </View>
      <View className="items-center">
        <View
          className="bg-[#DCDCDC78] absolute rounded-full flex-row "
          style={styles.search}>
          <View className="top-3 relative left-3">
            <FeatherIcon name="search" color="black" size={30} />
          </View>
          <TextInput
            style={styles.input}
            className="top-0 left-10 relative "
            value={search}
            onChangeText={handleInputChange}
            placeholder="Search...."
          />
        </View>
      </View>
      <View style={styles.items}>
        <View className="  justify-center items-center">

          {data.length > 0?
          (<FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.title}
            numColumns={2}
            showsVerticalScrollIndicator={false}
      
            />):
            (<FlatList
              data={books}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.title}
              numColumns={2}
              showsVerticalScrollIndicator={false}
        
              />)
            }

        </View>
      </View>
    </View>
  );
};

export default React.memo(Home)
