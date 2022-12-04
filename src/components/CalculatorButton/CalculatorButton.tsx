import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { buttonInterface } from '../../interfaces/buttonInterfaces'
import { calculatorButtonStyles } from './calculatorButtonStyles'

const CalculatorButton = ({ text, buttonBackgroundColor, buttonTextColor, isWidth, action }: buttonInterface) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={{
        ...calculatorButtonStyles.button,
        backgroundColor: buttonBackgroundColor,
        width: isWidth ? 170 : 75
      }}>
        <Text style={{
          ...calculatorButtonStyles.buttonText,
          color: buttonTextColor
        }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CalculatorButton