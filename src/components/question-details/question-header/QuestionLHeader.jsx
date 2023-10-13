

import {View, Text} from "react-native"
import styles from "./questionheader.style"

import {Link} from "expo-router"



const QuestionHeader = ({Question}) => {

    const renderTags = () =>(
        <View style={styles.tagContainer} >
               { Question.tags.map(tag => (
                    <View style={styles.tags} >
                        <Text
                            style={styles.tag}
                            key={tag}
                        >
                            {tag}

                        </Text>

                    </View>
                ))}

                <Text style={styles.time}  >asked {new Date(Question.creation_date * 1000).toDateString()}</Text>
        </View>
    )
  return (
    
    <Link href= {`/question-details/${Question.question_id}`} >
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
    </Link>
  )
}

export default QuestionHeader
