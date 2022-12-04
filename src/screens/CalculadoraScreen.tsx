import { Text, View } from 'react-native';
import CalculatorButton from '../components/CalculatorButton/CalculatorButton';
import { buttonsBackgroundColor, buttonsTextColor } from '../interfaces/buttonInterfaces';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

const CalculadoraScreen = () => {

  const {
    currentNumber,
    baseOperationNumber,
    cleanScreen,
    positiveNegative,
    buildNumber,
    deletePerCharacter,
    btnDivide,
    btnRest,
    btnAdd,
    btnMultiply,
    calculateOperation
  } = useCalculator()

  return (
    <View style={styles.calculatorContainer}>
      {
        baseOperationNumber !== '0' && (
          <Text style={styles.lastResult}>
            {baseOperationNumber}
          </Text>
        )
      }
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
      >
        {currentNumber}
      </Text>

      {/* FIRST ROW */}
      <View style={styles.buttonsRow}>
        <CalculatorButton text='C' buttonBackgroundColor={buttonsBackgroundColor.grey} action={cleanScreen} />
        <CalculatorButton text='+/-' buttonBackgroundColor={buttonsBackgroundColor.grey} action={positiveNegative} />
        <CalculatorButton text='del' buttonBackgroundColor={buttonsBackgroundColor.grey} action={deletePerCharacter} />
        <CalculatorButton text='/' buttonBackgroundColor={buttonsBackgroundColor.orange} action={btnDivide} />
      </View>

      {/* SECOND ROW */}
      <View style={styles.buttonsRow}>
        <CalculatorButton text='7' buttonBackgroundColor={buttonsBackgroundColor.darkGrey} buttonTextColor={buttonsTextColor.white} action={buildNumber} />
        <CalculatorButton text='8' buttonBackgroundColor={buttonsBackgroundColor.darkGrey} buttonTextColor={buttonsTextColor.white} action={buildNumber} />
        <CalculatorButton text='9' buttonBackgroundColor={buttonsBackgroundColor.darkGrey} buttonTextColor={buttonsTextColor.white} action={buildNumber} />
        <CalculatorButton text='x' buttonBackgroundColor={buttonsBackgroundColor.orange} buttonTextColor={buttonsTextColor.white} action={btnMultiply} />
      </View>

      {/* THIRD ROW */}
      <View style={styles.buttonsRow}>
        <CalculatorButton text='4' buttonBackgroundColor={buttonsBackgroundColor.darkGrey} buttonTextColor={buttonsTextColor.white} action={buildNumber} />
        <CalculatorButton text='5' buttonBackgroundColor={buttonsBackgroundColor.darkGrey} buttonTextColor={buttonsTextColor.white} action={buildNumber} />
        <CalculatorButton text='6' buttonBackgroundColor={buttonsBackgroundColor.darkGrey} buttonTextColor={buttonsTextColor.white} action={buildNumber} />
        <CalculatorButton text='-' buttonBackgroundColor={buttonsBackgroundColor.orange} buttonTextColor={buttonsTextColor.white} action={btnRest} />
      </View>

      {/* FOURTH ROW */}
      <View style={styles.buttonsRow}>
        <CalculatorButton text='1' buttonBackgroundColor={buttonsBackgroundColor.darkGrey} buttonTextColor={buttonsTextColor.white} action={buildNumber} />
        <CalculatorButton text='2' buttonBackgroundColor={buttonsBackgroundColor.darkGrey} buttonTextColor={buttonsTextColor.white} action={buildNumber} />
        <CalculatorButton text='3' buttonBackgroundColor={buttonsBackgroundColor.darkGrey} buttonTextColor={buttonsTextColor.white} action={buildNumber} />
        <CalculatorButton text='+' buttonBackgroundColor={buttonsBackgroundColor.orange} buttonTextColor={buttonsTextColor.white} action={btnAdd} />
      </View>

      {/* FIFTH ROW */}
      <View style={styles.buttonsRow}>
        <CalculatorButton text='0' buttonBackgroundColor={buttonsBackgroundColor.darkGrey} buttonTextColor={buttonsTextColor.white} action={buildNumber} isWidth={true} />
        <CalculatorButton text='.' buttonBackgroundColor={buttonsBackgroundColor.darkGrey} buttonTextColor={buttonsTextColor.white} action={buildNumber} />
        <CalculatorButton text='=' buttonBackgroundColor={buttonsBackgroundColor.orange} buttonTextColor={buttonsTextColor.white} action={calculateOperation} />

      </View>
    </View>
  )
}

export default CalculadoraScreen   