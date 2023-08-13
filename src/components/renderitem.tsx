import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from '../assets/styles/styles';
import {AirbnbRating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {addToFav, removeFromFav} from '../redux/action';
import {useNavigation} from '@react-navigation/native';
const Renderitem = ({item}: any) => {
  const {Fav} = useSelector((state: any) => state.books);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const doesFavExist = useCallback(
    (productTitle: any) => {
      return Fav.some((item: any) => item.title === productTitle);
    },
    [Fav],
  );
  const existsInFav = doesFavExist(item.title);
  const getTitle = (title: any) => {
    const words = title.split(' ');
    if (words.length > 2) {
      return words.slice(0, 2).join(' ') + '...';
    } else {
      return words.slice(0, 2).join(' ') + '...';
    }
  };
  const titleTxt = useCallback(getTitle, []);
  return (
    <View className="flex relative  mb-6 ">
      <TouchableOpacity onPress={() => navigation.navigate('Detail', {item})}>
        <Image style={styles.itemImage} source={{uri: item.imageLink}} />
      </TouchableOpacity>
      <Text style={styles.ItemTitle} className="ml-6 w-40 m-4  text-black">
        {titleTxt(item.title)}
      </Text>

      <View className="absolute top-52 left-[-12px] m-6 flex-row">
        <AirbnbRating defaultRating={4} size={20} reviews={[]} />
        <Text style={styles.ItemTitle} className="text-1xl z-10 mt-14">
          ({item.reviews})
        </Text>
      </View>
      <View className="mt-5 ml-6">
        <Text style={styles.ItemTitle} className="text-black">
          Rs.${item.price}
        </Text>
      </View>
      <View className="absolute bg-white p-1 rounded-2xl top-1 left-[150px]">
        {existsInFav ? (
          <TouchableOpacity onPress={() => dispatch(removeFromFav(item.title))}>
            <AntDesign name={'heart'} size={25} color={'red'} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => dispatch(addToFav(item))}>
            <AntDesign name={'hearto'} size={25} color={'red'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default React.memo(Renderitem);
