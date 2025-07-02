import { useState } from 'react';
import {View,Text,StyleSheet, ScrollView}from 'react-native';
import { TextInput } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import DisplayTypeWidget from '../share/DisplayTypeWidget';
import ProductGridViewWidget from './widget/ProductGridViewWidget';
import ProductListViewWidget from './widget/ProductListViewWidget';
import { navigate } from 'expo-router/build/global-state/routing';


export default function homeProductScreen({navigation}:any){
const [searchQuery,setSearchQuery]= useState('');
const [isGridEnabled,setIsGridEnabled]=useState(true);
const manageGridView=({state}:any)=>{
      setIsGridEnabled(state);
      console.log('clicked');
};

    return(
        <View style={styles.container}>
       
   <Searchbar
      placeholder="Search Product"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
    <DisplayTypeWidget callback={(state:boolean)=>setIsGridEnabled(state)}/>


{isGridEnabled?(
    <ScrollView
    showsVerticalScrollIndicator={false}>
     <ProductGridViewWidget navigation={navigation}/>
    <ProductGridViewWidget navigation={navigation}/>
    <ProductGridViewWidget/>
    <ProductGridViewWidget/>
    </ScrollView>)
    :
    <ScrollView
    showsVerticalScrollIndicator={false}>
     <ProductListViewWidget navigation={navigation}/>
      <ProductListViewWidget navigation={navigation}/>
       <ProductListViewWidget/>
        <ProductListViewWidget/>
    
    </ScrollView>}
   
  
    

        </View>
    )

}

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:10
     
    }
})