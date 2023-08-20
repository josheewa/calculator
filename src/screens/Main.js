import { View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
const { height, width } = Dimensions.get('window');


export default function Main() {
    const [number, setNumber] = useState(0);
    const [bgColor, setBGC] = useState('darkgray');

    const numberInput = () => (
        <View style={{ height: height / 5, width: width }}>
            <TextInput
                value={number}
                onChangeText={(t) => setNumber(t)}
                style={styles.input}
                inputMode='numeric'
                keyboardType='number-pad'
            />

        </View>

    );
    
    const block = (val) => (
        <TouchableOpacity style={styles.block}>
            <Text style={{ fontSize: 30, color: 'white' }}>{val}</Text>
        </TouchableOpacity>
    );
    
    const buttons = [
        "AC", "+/-", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", " + ", "0", " ", ".", "="
    ];

    const styles = StyleSheet.create({
        inputCont: {
            height: height / 4,
            width: width,
            backgroundColor: 'darkslategrey',
            justifyContent: 'center'
        },
        input: {
            flex: 1,
            fontSize: 80,
            textAlign: 'right',
            color: 'white'
        },
        block: {
            width: width / 4,
            height: height * 3 / 20,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: bgColor,

        }
    })
    return (
      
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
                <View style={styles.inputCont}> 
                    {numberInput()}
                </View>

                <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>

                {
                    buttons.map(
                        (e, index) => (
                            block(e)
                        )
                    )
                }
                {/* setBGC((index + 1) % 4 == 0 ? 'orange' : 'darkgray') */}
                </View>
        </View>
  )
}