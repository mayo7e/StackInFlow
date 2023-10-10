
import {View, Text} from "react-native"

import QuestionListCard from "../../common/cards/question/QuestionListCard"

import styles from "./questionlists.style"


// const Question = Questions.items.map((eachQuestion) => (
//   eachQuestion));


const QuestionList = ({Question, handleCardPress}) => {
  return (
   <View style={styles.container} >
       <QuestionListCard
          Question={Question}
          handleCardPress={handleCardPress}
          
       />
   </View>
  )
}

export default QuestionList
