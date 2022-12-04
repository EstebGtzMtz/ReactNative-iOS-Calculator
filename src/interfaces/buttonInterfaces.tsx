export interface buttonInterface {
    text: string,
    buttonBackgroundColor?: buttonsBackgroundColor,
    buttonTextColor?: buttonsTextColor,
    isWidth?: Boolean,
    action: (numberText: string) => void
}

export enum buttonsBackgroundColor {
    grey = 'rgba(255,255,255,0.5)',
    darkGrey = '#2D2D2D',
    orange = '#FF9427'
}

export enum buttonsTextColor {
    black = 'black',
    white = 'white'
}

export enum Operators {
    plus, rest, multiply, divide
}