
import {View, Text} from "react-native"

import QuestionListCard from "../../common/cards/question/QuestionListCard"

import styles from "./questionlists.style"

import Questions from "../../../../data/questions.json"

const Question = Questions.items[1];


const QuestionList = () => {
  return (
   <View>
       <QuestionListCard
          Question={Question}
       />
   </View>
  )
}

export default QuestionList
