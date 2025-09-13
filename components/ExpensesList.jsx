import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";



export default function ExpensesList({ expenses }){
    return <FlatList data={expenses} renderItem={(itemData) => <ExpenseItem {...itemData.item} />} keyExtractor={({id}) => id }/>;
}