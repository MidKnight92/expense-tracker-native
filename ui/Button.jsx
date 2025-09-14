import { Pressable, View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";

export default function Button({ children, onPress, mode }) {
    return (
        <View>
            <Pressable onPress={onPress}>
                <View style={[styles.button, mode === 'flat' && styles.flatButton]}>
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        padding: 4,
        backgroundColor: GlobalStyles.colors.primary500
    },
    flatButton: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4
    }
});