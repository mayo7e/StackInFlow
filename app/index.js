
import { Stack} from "expo-router";

import { View, Text, ScrollView, SafeAreaView } from "react-native"
import QuestionLists from "../src/components/home/question/QuestionLists";


const Home = () => {
    return (  

        <SafeAreaView>

                <Stack.Screen
                        options={{
                            headerStyle: { backgroundColor: "white" },
                            headerShadowVisible: false,
                                headerLeft: ()=>(
                                <View></View>
                                
                                ),
                                headerRight: ()=>(
                                    <View></View>
                                    ),
                                    
                                headerTitle: "yolo",
                        
                        }
                    }

                />

                <ScrollView>
                    <View>
                        <QuestionLists />
                    </View>
                </ScrollView>
        </SafeAreaView>

            

    );
}
 
export default Home;