import {StyleSheet} from 'react-native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: responsiveScreenHeight(50),
    width: responsiveScreenWidth(50),
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(2),
  },
  nickImage: {
    resizeMode: 'contain',
    width: responsiveScreenWidth(20),
  },
  ellipse: {
    width: responsiveScreenWidth(20),
    resizeMode: 'contain',
  },
  search: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(6),
  },
  input: {
    fontSize: responsiveScreenFontSize(2),
    width: responsiveScreenWidth(70),
  },
  items: {
    marginTop: responsiveScreenHeight(10),
  },
  itemImage: {
    resizeMode: 'contain',
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(25),
    marginLeft: responsiveScreenWidth(5),
  },
  ItemTitle: {
    fontFamily: 'Poppins-Bold',
  },
  ItemLight: {
    fontFamily: 'Poppins-Light',
  },
  detailImage: {
    width:responsiveScreenWidth(60),
    height:responsiveScreenHeight(40),
    alignSelf:'center',
    resizeMode:'contain',
    borderRadius:10
  
  },
  parentDetailImg:{

    width:responsiveScreenWidth(70),
    height:responsiveScreenHeight(48),
    alignSelf:'center',
    borderColor:'#FFFFFF',
    backgroundColor:'#FFFFFF',
    borderWidth:5,
    borderRadius:responsiveScreenWidth(2),
    elevation:5
    
  },
  fontTxt:{
    marginTop:responsiveScreenHeight(0.3),
    fontFamily: 'Poppins-Light',
    fontSize:responsiveScreenFontSize(2),
    color:'black'
  }
});
