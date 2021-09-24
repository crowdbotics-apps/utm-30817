import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18fb/d1eb/10f74bcaa1c02fb1e9f779c3179f5be3"
        }}
        style={styles.ImageBackground_0_457}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c02f/ecc1/3b6e0f721f3bfe96278aa6b1df848849"
        }}
        style={styles.ImageBackground_0_458}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(45, 74, 205, 1)" },
  View_2: { height: hp("104.91803278688525%") },
  ImageBackground_0_457: {
    width: wp("31.54296875%"),
    minWidth: wp("31.54296875%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.27734375%"),
    top: hp("38.9344262295082%")
  },
  ImageBackground_0_458: {
    width: wp("129.98046875%"),
    minWidth: wp("129.98046875%"),
    height: hp("106.4207650273224%"),
    minHeight: hp("106.4207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.74609375%"),
    top: hp("-0.1366120218579235%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
