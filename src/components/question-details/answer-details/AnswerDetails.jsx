
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

import styles from './answerdetails.style';

import {decode} from "html-entities"

import Markdown from 'react-native-markdown-display';

const AnswerList = ({ answer }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <AntDesign name="upcircleo" size={24} color="dimgray" />
        <Text style={styles.score}>{answer.score}</Text>
        <AntDesign name="downcircleo" size={24} color="dimgray" />
        {answer.is_accepted && (
          <Entypo
            name="check"
            size={22}
            color="limegreen"
            style={{ marginTop: 10 }}
          />
        )}
      </View>
      <View style={styles.bodyContainer}>
        <Markdown style={styles.body}>{decode(answer.body_markdown)}</Markdown>

        <Text style={styles.time}>
          answered {new Date(answer.creation_date * 1000).toDateString()}
        </Text>
      </View>
    </View>
  );
};



export default AnswerList;