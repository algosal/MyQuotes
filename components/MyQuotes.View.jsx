import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import MyQuote from "../services/MyQuotes.Service";

export default function MyQuotesDisplay() {

    let [number, setNumber] = useState(Math.ceil(Math.random() * 49));
    let mySelection = Math.ceil(Math.random() * 49);;
    let i = 0;
    let [myQuote, setMyQuote] = useState("");

    function MyQuotesServiceLoop() {

        setTimeout(function () {
            i++;
            if (i < 25) {
                mySelection = Math.ceil(Math.random() * 49);
                setNumber(mySelection);
                MyQuotesServiceLoop();
            }
            else {
                MyQuoteService(mySelection);
            }
        }, 150);



        async function MyQuoteService(mySelection) {
            let x = await MyQuote();     
            console.log(x); 
                setMyQuote("\n\n\n" + x[mySelection].q + "\n\n\nThis quote is  by " + x[mySelection].a);   
     
         }
     

    }






   

    return (
        <View>
            <View>
                <View style={{ padding: '5%', }} />
                <Text style={{ color: 'gold', width: 300, height: 100, textAlign: 'center', fontSize: 50, fontWeight: 'bold', }}>
                    {Math.ceil(Math.random() * 49)}   {number}   {Math.ceil(Math.random() * 49)} </Text>
                <Text style={{ color: 'white', width: 300, height: 400, fontSize: 15, fontWeight: 'bold', paddingTop: 10, }}>
                    {myQuote}</Text>
            </View>
            <Button
                title='Roll the Dice'
                onPress={MyQuotesServiceLoop}
            />
        </View>
    );
}


/*import react, { Button, TextInput, StyleSheet } from 'react-native';
import {View, Text} from 'react-native';
import MyQuote from '../services/callquote';
import {useState} from 'react'; 
//import * as Speech from 'expo-speech';
//import Tts from 'react-native-tts';


            
export default function MyDisplay(){
    let [myQuote, setMyQuote] = useState([]);
    let [number, setNumber] = useState(0);
    let i = 0; 
     let mySelection = Math.ceil(Math.random()*49);

    
    function mySelectionLoop() {         //  create a loop function
        setTimeout(function() {   //  call a 3s setTimeout when the loop is called
     //console.log('hello');   //  your code here
    i++;                    //  increment the counter
    if (i < 25) {           //  if the counter < 10, call the loop function
       mySelection = Math.ceil(Math.random()*49);
      setNumber(mySelection); 
     mySelectionLoop();             //  ..  again which will trigger another 
    }else{
        callingQuote(mySelection);
    }                       //  ..  setTimeout()
  }, 150)
}



   
    async function callingQuote(mySelection){
        let x = await MyQuote();    
        //console.log(x); 
            setMyQuote("\n\n\n" + x[mySelection].q + "\n\n\nThis quote is  by " + x[mySelection].a); 

            // let thingToSay =     x[mySelection].q;
           // Speech.speak(thingToSay,{});

           /* Speech.speak(thingToSay, {
                identifier: "Microsoft Zira - English (United States)",
                isDefault: 'false',
                language: "en-US",
                localService: true,
                name: "Microsoft Zira - English (United States)",
                quality: "Default",
                voiceURI: "Microsoft Zira - English (United States)"
            }); 
           // console.log(Speech.getAvailableVoicesAsync()); 
          
        }


        

        return(
            <View>
                <View>
                    <View style={{padding:'5%',}}/>
                    <Text style ={{color:'gold', width: 300, height:150, textAlign:'center', fontSize:50, fontWeight: 'bold',}}>{Math.ceil(Math.random()*49)}   {number}   {Math.ceil(Math.random()*49)} </Text>
                <Text style ={{color:'white', width: 300, height: 300,  fontSize:15, fontWeight: 'bold', paddingTop:10, }}>{myQuote}</Text>
                </View>
                <Button 
                title='Roll the Dice'
                onPress={mySelectionLoop}
                />
            </View>
        );
}



const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white', 
      width: 50, 
      alignSelf:'center',
      justifyContent: 'center',
      alignItems: 'center', 
    },
  });*/