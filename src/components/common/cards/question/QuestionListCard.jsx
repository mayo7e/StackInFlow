

import {View, Text} from "react-native"
import styles from "./questionlistcard.style"



const QuestionListCard = ({Question}) => {

    const renderTags = () =>(
        <View style={styles.tagContainer} >
               { Question.tags.map(tag => (
                    <View  >
                        <Text
                            style={styles.tag}
                            key={tag}
                        >
                            {tag}

                        </Text>

                    </View>
                ))}

        </View>
    )
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
            {Question.body_markdown}
            
        </Text>

             {renderTags()}

    </View>
  )
}

export default QuestionListCard
