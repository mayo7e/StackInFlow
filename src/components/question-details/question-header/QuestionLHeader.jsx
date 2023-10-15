

import {View, Text} from "react-native"
import styles from "./questionheader.style"

import {Link} from "expo-router"

import {decode} from "html-entities"

import Markdown from 'react-native-markdown-display';


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
            <Text style={styles.title} >{decode(Question.title)}</Text>

            <Text style={styles.statInfo} >
                {Question.up_vote_count} votes · {Question.answer_count} answers ·{" "}
                {Question.view_count} views
            </Text>

            <View  style={styles.seperator} />
            
            <Markdown
                style={styles.bodyText}
                // numberOfLines={2}
            >
                {decode(Question.body_markdown)}
                
            </Markdown>

                {renderTags()}

        </View>
    </Link>
  )
}

export default QuestionHeader
