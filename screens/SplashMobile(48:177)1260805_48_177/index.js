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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e767/ccc3/a3ddfc86f62349514a6039f677b3232b"
        }}
        style={styles.ImageBackground_48_178}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3a4/dd3b/d7f54f49b074adae29177f03c518b78c"
        }}
        style={styles.ImageBackground_48_179}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(45, 74, 205, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_48_178: {
    width: wp("300.2666666666667%"),
    minWidth: wp("300.2666666666667%"),
    height: hp("100.44977511244377%"),
    minHeight: hp("100.44977511244377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-50.13333333333333%"),
    top: hp("-0.14992503748125938%")
  },
  ImageBackground_48_179: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    height: hp("17.991004497751124%"),
    minHeight: hp("17.991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("41.07946026986507%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
