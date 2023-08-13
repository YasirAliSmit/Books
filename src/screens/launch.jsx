

import {  Text, View ,Image} from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../assets/styles/styles'
import { useNavigation } from '@react-navigation/native'
import { fetchBooks } from '../redux/action'
import { useDispatch } from 'react-redux'
const Launch = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchBooks())
    setTimeout(()=>{
      navigation.replace('Home')

    },2000)
  },[])
  return (
    <View className='flex flex-1 justify-center items-center bg-[#ffffff]'>
     <Image style={styles.image} source={require('../assets/images/image.png')}/>
    </View>
  )
}

export default Launch

