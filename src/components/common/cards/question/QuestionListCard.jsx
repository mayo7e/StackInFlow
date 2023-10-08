

import {View, Text} from "react-native"
import styles from "./questionlistcard.style"



const QuestionListCard = ({Question}) => {
  return (
    <View style={styles.container} >

        <Text style={styles.statInfo} >
            {Question.up_vote_count} votes · {Question.answer_count} answers ·{" "}
             {Question.view_count} views
        </Text>

        <Text style={styles.title} >{Question.title}</Text>
        
        <Text
            style={styles.bodyText}
            numberOfLines={2}
        >
            {Question.body_markdown}</Text>

            <Text
                style={styles.tags}
            >
                {Question.tags[0]} {Question.tags[1]} {Question.tags[2]}{" "}
                {Question.tags[3]}{" "}
                {Question.tags[4]}
             </Text>

    </View>
  )
}

export default QuestionListCard
