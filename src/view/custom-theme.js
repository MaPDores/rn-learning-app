import { DefaultTheme } from 'react-native-paper';

const customTheme = {
    ...DefaultTheme,
    roundness: 30,
    colors: {
        ...DefaultTheme.colors,
    }
};

export default customTheme;