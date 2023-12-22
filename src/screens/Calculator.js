import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Platform,
} from "react-native";
const { height, width } = Dimensions.get("window");
// const fontSize = Platform.OS === 'ios' ? 40 : 40;

const Calculator = () => {
  const buttons = [
    { label: "AC", onPress: () => handleButtonPress("AC") },
    { label: "+/−", onPress: () => handleButtonPress("+/-") },
    { label: "%", onPress: () => handleButtonPress("%") },
    { label: "÷", onPress: () => handleButtonPress("÷") },
    { label: "7", onPress: () => handleButtonPress("7") },
    { label: "8", onPress: () => handleButtonPress("8") },
    { label: "9", onPress: () => handleButtonPress("9") },
    { label: "x", onPress: () => handleButtonPress("x") },
    { label: "4", onPress: () => handleButtonPress("4") },
    { label: "5", onPress: () => handleButtonPress("5") },
    { label: "6", onPress: () => handleButtonPress("6") },
    { label: "−", onPress: () => handleButtonPress("-") }, //−") },
    { label: "1", onPress: () => handleButtonPress("1") },
    { label: "2", onPress: () => handleButtonPress("2") },
    { label: "3", onPress: () => handleButtonPress("3") },
    { label: "+", onPress: () => handleButtonPress("+") },
    { label: "0", onPress: () => handleButtonPress("0") },
    { label: ".", onPress: () => handleButtonPress(".") },
    { label: "⌫", onPress: () => handleButtonPress("<x") },
    { label: "=", onPress: () => handleButtonPress("=") },
  ];
  const [number, setNumber] = useState(0);
  const [stored, setStorage] = useState("null");
  const [lastOpereand, setLastOperand] = useState(0);
  const [activeOperator, setOperator] = useState("null");

  const operators = ["÷", "x", "-", "+", "="];

  const handleButtonPress = (key) => {
    // Handle button press logic here
    if (key === "AC") {
      setNumber("0");
      setLastOperand(0);
      setStorage("null");
      setOperator("null");
    }
    // handles numeric keypad presses and decimal point
    else if (!isNaN(key) || key == ".") {

      if ((number == "0" || stored != "null") && key != ".") {
        setNumber(key);
      } else {
        setNumber(number + key);
      }
    } else if (key == "+/-") {
      setNumber(number * -1);
    } else if (key == "%") {
      setNumber(number / 100);
    } else if (operators.indexOf(key) >= 0) {
      if (parseInt(stored) != 0 && activeOperator != null) {
        evaluate(key);
      }
      setStorage(number);
      if (key != "=") {

        setOperator(key);
      }
      setLastOperand(number);
      console.log(
        "\noperator: " +
          key +
          "\nstored: " +
          stored +
          "\nlast: " +
          lastOpereand +
          "\nactive: " +
          activeOperator
      );
    }
  };
  const evaluate = (key) => {
    // if (key == "=") {

      if (activeOperator == "÷") {
        setNumber(stored / number);
      } else if (activeOperator == "x") {
        setNumber(stored * number);
      } else if (activeOperator == "-") {
        setNumber(stored - number);
      } else if (activeOperator == "+") {
        setNumber(parseInt(stored) + parseInt(number));
      } else if (activeOperator == "=") {
        setNumber()
      }
    // }
    setStorage(0);
    setOperator("null");
  };
  const numberInput = () => (
    <View style={{}}>
      <Text style={styles.input}>{number}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.inputCont}>
        <View style={styles.input}>{numberInput()}</View>
      </View>
      <View style={styles.keypad}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={button.onPress}>
            <Text style={styles.buttonText}>{button.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  inputCont: {
    height: "40%",
  },
  input: {
    fontSize: 70,
    textAlign: "right",
  },
  keypad: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    width: width / 4 - 20,
    height: (0.6 * height) / 5 - 20,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default Calculator;
