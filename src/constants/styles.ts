import { StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { Colors } from './colors';

import { useFonts } from 'expo-font'; 
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'; // Importing another font
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

export const Fonts = () => {
   // Load the fonts using expo-google-fonts
   const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container is taking full space
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'OpenSans_400Regular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    ...Colors.appBg,
    width: '100%'
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center', // Center the content
    alignItems: 'center', // Center the content
  },

  page:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical:15,
    paddingHorizontal: 0,
  },

  header: { 
    padding: 15,
  },

  row:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width:'100%',
    alignContent: 'center',
  
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal:10,
    width: '50%'
    
  },
  
  cardIcon: {
    marginHorizontal:5,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase', 
    textAlign: 'center'
  },

  cardTitleLeft: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase', 
    textAlign: 'center',
    ...Colors.darkPurpleText
  },

  cardTitleRight:{
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase', 
    textAlign: 'center',
    ...Colors.lightPurpleText
  },

  cardSubText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  cardDescLeft: {
    fontSize: 36,
    marginTop: 10,
    fontWeight: '900',
    width:'100%',
    textAlign: 'center',
    color: '#333'
  }, 

  cardDescRight: {
    fontSize: 36,
    marginTop: 10,
    fontWeight: '900',
    width:'100%',
    textAlign: 'center',
    color: 'white'
  }, 

  cardDescription: {
    fontSize: 36,
    marginTop: 10,
    color: '#333',
    fontWeight: '900',
    width:'100%',
    textAlign: 'center'
  },
  cardRight: {
    ...Colors.darkBtn,
    paddingVertical: 25,
    paddingHorizontal:15
  },

  cardLeft:{
    ...Colors.lightBtn,
    paddingVertical: 25,
    paddingHorizontal:15
  },

  headerText: { 
    ...Colors.headerText,
    fontSize: 24, 
    textAlign: 'center',
    fontFamily: 'Inter_800ExtraBold', 
  },

  titleText: {
    ...Colors.title,
    fontSize: 20
  },


  footer: { backgroundColor: '#6200EE', padding: 8, alignItems: 'center' },
  text: {
    fontSize: 20,
  },
  splash:{
    marginBottom: 20,
    height:250,
    width:250
  },

  splashBg:{
    ...Colors.splashBg,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex:1,
    justifyContent : 'center',
    alignItems: 'center',
  },
  pageContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  carouselImg: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 50, 
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    textTransform: 'uppercase', // Transforms text to uppercase
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  pageSubtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  blueTagBg : {
    ...Colors.blueTagBg
  },

  purpleBg: {
    ...Colors.darkPurpleBg
  },
  buttonContainer : {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'stretch', 
    paddingVertical:30,
    paddingHorizontal: 25,
  },

  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginHorizontal : 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 16
  },

  longBtn : {
    width: '100%',            
    flexDirection: 'row',      
    alignItems: 'stretch', 
    justifyContent: 'center',
    ...Colors.darkBtn,
    borderRadius: 50,
    shadowColor: '#375DFB', // Color of the shadow
    shadowOffset: { width: 0, height: 4 }, // Horizontal and Vertical offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 6, // Blur radius
    // Shadow for Android
    elevation: 5, // Elevation for Android shadow  
  },

  darkBtn: {
    ...Colors.darkBtn,
    borderRadius: 50,
    shadowColor: '#375DFB', // Color of the shadow
    shadowOffset: { width: 0, height: 4 }, // Horizontal and Vertical offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 6, // Blur radius
    // Shadow for Android
    elevation: 5, // Elevation for Android shadow
  },

  lightBtn: {
    ...Colors.lightBtn,
    borderRadius: 50,
    shadowColor: '#9251DB', // Color of the shadow
    shadowOffset: { width: 0, height: 4 }, // Horizontal and Vertical offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 6, // Blur radius
    // Shadow for Android
    elevation: 5, // Elevation for Android shadow
  },

  darkBtnText: {
    ...Colors.darkBtn,
    fontSize: 18,
    paddingHorizontal : 25,
    fontWeight : '700',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },

  lightBtnText: {
    ...Colors.lightBtn,
    fontWeight : '700',
    paddingHorizontal : 25,
    fontSize: 18,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },

  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },

  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: '#B6B6D8', // Default color for unselected dots
  },

  paginationDotActive: {
    width: 20,
    height: 10,
    backgroundColor: '#6C63FF', // Active dot color
  },
});

export default styles;
