import { useState } from 'react';
import {View,Text,StyleSheet, ScrollView}from 'react-native';
import { TextInput } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import DisplayTypeWidget from '../share/DisplayTypeWidget';
import ProductGridViewWidget from './widget/ProductGridViewWidget';
import ProductListViewWidget from './widget/ProductListViewWidget';


export default function homeBookmarkScreen(){

const [searchQuery,setSearchQuery]= useState('');
const [isGridEnabled,setIsGridEnabled]=useState(true);


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
     <ProductGridViewWidget/>
    <ProductGridViewWidget/>
    <ProductGridViewWidget/>
    <ProductGridViewWidget/>
    </ScrollView>)
    :
    <ScrollView
    showsVerticalScrollIndicator={false}>
     <ProductListViewWidget/>
      <ProductListViewWidget/>
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