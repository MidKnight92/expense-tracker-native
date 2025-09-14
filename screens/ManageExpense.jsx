import { View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../ui/Button";

export default function ManageExpense({ route, navigation }) {
    const expenseId = route.params?.expenseId;
    const deleteExpense = () => {
        console.log('expense to be deleted ', expenseId);
    }
    const cancelExpense = () => {
        console.log('expense to be canceled');
    }
    const confirmationHandler = () => {
        console.log('confirmation');
    } 
    useLayoutEffect(() => {
        navigation.setOptions({
            title: expenseId ? 'Edit Expense' : 'Add Expense'
        });
    }, [expenseId, navigation]);

    return (
        <View style={styles.container}>
            <View>
                <Button mode="flat" onPress={cancelExpense}>Cancel</Button>
                <Button onPress={confirmationHandler}>{expenseId ? 'Update' : 'Add'}</Button>
            </View>
            {expenseId && (
                <View style={styles.deleteButtonContainer}>
                    <IconButton name="trash" size={24} onPress={deleteExpense} color={GlobalStyles.colors.error500} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteButtonContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
});