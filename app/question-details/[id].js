import {View, Text, FlatList, ScrollView} from "react-native"
import {  useGlobalSearchParams } from "expo-router"

import QuestionHeader from "../../src/components/question-details/question-header/QuestionLHeader"
import AnswerList from "../../src/components/question-details/answer-details/AnswerDetails"

import Questions from "../../data/questions.json"
import Answers from "../../data/answers.json"

const QuestionDetails = () => {
        const {id}= useGlobalSearchParams()
        const  Question = Questions.items.find(q => {
             return  q.question_id == id
        })
                
        if(!Question){
                return <Text>Something is wrong!</Text>
        }

        return(
          
            <View style={{backgroundColor: "white", flex: 1}} >
                
                <FlatList 
                        data={Answers.items}
                        renderItem={({item}) => (
                        <AnswerList 
                            answer={item}
                        />
                        
                        )}
                        ListHeaderComponent={() => <QuestionHeader Question={Question}/>}
                    />

            </View>
         
        
        )
}

export default QuestionDetails