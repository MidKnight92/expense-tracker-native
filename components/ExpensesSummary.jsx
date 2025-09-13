import { View, Text } from "react-native";

export default function ExpensesSummary({ expenses, periodName }) {
    const totalExpenses = expenses.reduce((acc, { amount }) => acc + amount, 0).toFixed(2);
    return (
        <View>
            <Text>Last 7 Days</Text>
            <Text>${totalExpenses}</Text>
        </View>
    );
}