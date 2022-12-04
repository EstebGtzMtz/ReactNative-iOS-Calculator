import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  darkBackground: {
    flex: 1,
    backgroundColor: 'black'
  },
  calculatorContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "flex-end"
  },
  lastResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right'
  },
  result: {
    color: 'white',
    fontSize: 80,
    textAlign: 'right'
  },
  buttonsRow: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  }
}); 