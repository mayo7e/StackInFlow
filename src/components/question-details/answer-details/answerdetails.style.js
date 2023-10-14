

import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:'white',
    marginBottom: 25,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
  },
  leftContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  score: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
  },
  bodyContainer: {
    flex: 1,
  },
  body: {
    lineHeight: 18,
    color: '#232629',
  },
  time: {
    marginLeft: 'auto',
    fontSize: 12,
    color: '#6a737c',
    marginTop: 10,
  },
});

export default styles;
