import {View, Text} from "react-native"
import {  useGlobalSearchParams } from "expo-router"

import QuestionHeader from "../../src/components/question-details/question-header/QuestionLHeader"

import Questions from "../../data/questions.json"

const QuestionDetails = () => {
        const {id}= useGlobalSearchParams()
        const  Question = Questions.items.find(q => {
             return  q.question_id == id
        })
                
        if(!Question){
                return <Text>Something is wrong!</Text>
        }

        return(
            <View>
              <QuestionHeader 
                Question={Question}
              />
            </View>
        )
}

export default QuestionDetails