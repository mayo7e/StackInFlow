

import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    borderColor: "lightgray",
  },
  statInfo:{
    fontSize: 12,
  },
  title:{
    color: "#3b4045",
    marginVertical: 4,
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 28,
    
  },
  bodyText:{},
  tagContainer:{
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    alignItems: "center",

  },
  tags:{
      paddingTop: 10,
  },
  tag:{
    backgroundColor: "#e1ecf4",
    color: "#39739d",
    padding: 5,
    borderRadius: 4,
    overflow: "hidden",
    fontSize: 12,
  },
  time:{
    marginLeft: "auto",
    color: "dimgray",
    fontSize: 12,
  },
  seperator: {
    borderBottomWidth: 0.5,
    borderColor: "lightgray",
    marginVertical: 10,
  },
});

export default styles;
