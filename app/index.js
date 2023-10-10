
import { Stack} from "expo-router";

import { View, Text, FlatList, ScrollView, SafeAreaView } from "react-native"
import QuestionLists from "../src/components/home/question/QuestionLists";

import Questions from "../data/questions.json"




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

                <ScrollView showsVerticalScrollIndicator={false} >
                    <View>

                        <FlatList 
                            data={Questions.items}
                            renderItem={({item}) => (
                            <QuestionLists 
                                Question={item}
                            />
                            
                            )}
                            
                        />

                    </View>
                </ScrollView>
        </SafeAreaView>

            

    );
}
 
export default Home;