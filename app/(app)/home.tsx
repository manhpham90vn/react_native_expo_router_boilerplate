import {Button, Text, View} from "react-native";
import {router, Stack} from "expo-router";

const Home = () => {
    return (
        <>
            <Stack.Screen options={{title: 'Home'}} />
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text>Home</Text>
                <Button title='Logout' onPress={() => {
                    router.replace('(auth)')
                }} />
            </View>
        </>
    )
}

export default Home