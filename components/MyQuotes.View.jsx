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
            //console.log(x); 
            setMyQuote("\n\t" + x[mySelection].q + "\n\t\t\t\t" + String.fromCharCode(0x2015) + " by " + x[mySelection].a);
        }
    }

    return (
        <View>
            <View>
                <View style={{ paddingTop: '1%',  }} />
                <Text style={{ color: 'orange', width: 380, height: 120, textAlign: 'center', fontSize: 70, fontWeight: 'bold', }}>
                    {Math.ceil(Math.random() * 49)}   {number}   {Math.ceil(Math.random() * 49)}</Text>

                    <Text style={{ 
                    color: 'white', width: 380, height: 350, 
                    fontSize: 20, 
                    fontWeight: 'bold', 
                    alignSelf:'center', 
                    alignItems:'center', 
                    textAlignVertical:'center',  
                    paddingLeft:'5%', 
                    paddingRight:'3%', 
                    paddingBottom:'2%',
                    }}>
                        {myQuote} 
                    </Text>
                </View>

            <View style={{ display: "flex" , color: 'white', width: 250, alignSelf:'center', marginTop:'4%', flexDirection: "row-reverse"}}>
            <Button
                title='Roll the Dice'
                onPress={MyQuotesServiceLoop}
            />
            </View>
        </View>

    );
}

