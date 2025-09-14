import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
        {
        id: 'e2',
        description: 'A pair of pants',
        amount: 39.99,
        date: new Date('2022-1-19')
    },
        {
        id: 'e3',
        description: 'A hat',
        amount: 19.99,
        date: new Date('2021-2-9')
    },
        {
        id: 'e4',
        description: 'A shirt',
        amount: 29.99,
        date: new Date('2022-4-19')
    },
]

export default function ExpensesOutput({expenses, periodExpenses}){
    return (
        <View style={styles.container}>
            <ExpensesSummary periodName={periodExpenses} expenses={expenses ?? DUMMY_EXPENSES} />
            <ExpensesList expenses={expenses ?? DUMMY_EXPENSES} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0
    }
});