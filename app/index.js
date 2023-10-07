
import { Stack} from "expo-router";

import { View, Text } from "react-native"


const Home = () => {
    return (  
        <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "white" },
                    headerShadowVisible: false,
                    headerTitle: "",
                }
            }

        />
    );
}
 
export default Home;