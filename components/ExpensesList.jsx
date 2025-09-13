import { FlatList, Text } from "react-native";



export default function ExpensesList({ expenses }){
    return <FlatList data={expenses} renderItem={(itemData) => <Text>{itemData.item.description}</Text>} keyExtractor={({id}) => id }/>;
}