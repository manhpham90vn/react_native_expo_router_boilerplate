import {Button, Text, View} from "react-native";
import {router, Stack} from "expo-router";

const Login = () => {
    return (
        <>
            <Stack.Screen options={{title: 'Login'}} />
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text>Login</Text>
                <Button title='Home' onPress={() => {
                    router.replace('(app)/home')
                }} />
            </View>
        </>
    )
}

export default Login