import { StyleSheet } from "react-native";

export const calculatorButtonStyles = StyleSheet.create({
  button: {
    width: 75,
    height: 75,
    borderRadius: 100,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D2D2D'
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '400'
  }
})