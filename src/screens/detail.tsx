import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {styles} from '../assets/styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item}: any = route.params;

  return (
    <View className="flex-1 ">
      <View>
        <View className="w-full ">
          <View className="m-2 ml-5 mt-5">
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Ionicons name="arrow-back" size={30} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.parentDetailImg}>
          <Image style={styles.detailImage} source={{uri: item.imageLink}} />
          <View className="flex-row justify-around">
            <View className="flex-col relative">
              <Text style={styles.fontTxt}>Rating</Text>
              <View className="w-10 h-8 mt-2 absolute left-5">
                <AirbnbRating defaultRating={4} size={15} reviews={[]} />
              </View>
            </View>
            <View className="flex-col">
              <Text style={styles.fontTxt}>Raview</Text>
              <Text className="text-[13px] ml-3">({item.reviews})</Text>
            </View>
            <View className="flex-col">
              <Text style={styles.fontTxt}>Price</Text>
              <Text className="text-[13px] ml-2">${item.price}</Text>
            </View>
          </View>
        </View>
        <View className="flex-col">
          <Text
            style={styles.ItemTitle}
            className="text-3xl ml-2 m-3 text-black">
            {item.title}
          </Text>
          <Text
            style={styles.ItemLight}
            className="text-[20px] ml-3 text-black">
            Author:{item.author}
          </Text>
          <Text
            style={styles.ItemLight}
            className="text-[20px] ml-3 text-black">
            Country:{item.country}
          </Text>
          <Text
            style={styles.ItemLight}
            className="text-[20px] ml-3 text-black">
            Language:{item.language}
          </Text>
          <Text
            style={styles.ItemLight}
            className="text-[20px] ml-3 text-black">
            Year:{item.year}
          </Text>
          <Text
            style={styles.ItemLight}
            className="text-[20px] ml-3 text-black">
            Pages:{item.pages}
          </Text>
        </View>
        <TouchableOpacity className="w-10/12 h-12 bg-[#004D6D] rounded-3xl self-center mt-2 justify-center">
          <View className="flex-row self-center ">
            <Text
              style={styles.ItemLight}
              className="text-[18px] mr-2 text-white ">
              View Details
            </Text>
            <Image style={{resizeMode:'contain'}} source={require('../assets/images/link.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;
