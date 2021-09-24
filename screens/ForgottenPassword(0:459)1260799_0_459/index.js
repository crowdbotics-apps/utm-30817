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
      <View style={styles.View_0_461} />
      <View style={styles.View_0_462}>
        <View style={styles.View_0_463} />
        <View style={styles.View_0_464}>
          <Text style={styles.Text_0_464}>SEND</Text>
        </View>
      </View>
      <View style={styles.View_0_465}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eeda/7a0a/146624e7e816f054e2b5b84522d7d550"
          }}
          style={styles.ImageBackground_0_466}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9865/4ffb/231ccdfccdf5de0a8250bcae25e023f6"
          }}
          style={styles.ImageBackground_0_469}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa52/69cf/c2b7bcff323cfdae75f16050e7be0f8c"
          }}
          style={styles.ImageBackground_0_470}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04a6/4c5f/0db34a0d70c11b315b007ce1c745eb50"
          }}
          style={styles.ImageBackground_0_471}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7276/2c67/cf8201d5e7cf01206f809c106a06c84a"
          }}
          style={styles.ImageBackground_0_472}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/495e/3996/381e52bac037c3e367a2c95bba83bf75"
          }}
          style={styles.ImageBackground_0_473}
        />
      </View>
      <View style={styles.View_0_474}>
        <View style={styles.View_0_476}>
          <Text style={styles.Text_0_476}>
            Fill your email and we will send you the link to reset your password
          </Text>
        </View>
        <View style={styles.View_0_477}>
          <Text style={styles.Text_0_477}>Recover Password</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_48_173}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("30_2"))
          }
        >
          <View style={styles.View_I48_173_30_6} />
          <View style={styles.View_I48_173_30_7}>
            <Text style={styles.Text_I48_173_30_7}>Enter your email</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_0_461: {
    width: wp("93.6842105263158%"),
    minWidth: wp("93.6842105263158%"),
    height: hp("93.60341151385929%"),
    minHeight: hp("93.60341151385929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1578947368421053%"),
    top: hp("1.9189765458422177%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_462: {
    width: wp("76.84210526315789%"),
    minWidth: wp("76.84210526315789%"),
    height: hp("11.087420042643924%"),
    minHeight: hp("11.087420042643924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.578947368421053%"),
    top: hp("75.90618336886993%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_463: {
    width: wp("76.84210526315789%"),
    height: hp("11.087420042643924%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(64, 85, 103, 1)",
    borderColor: "rgba(204, 202, 202, 1)",
    borderWidth: 1
  },
  View_0_464: {
    width: wp("9.05263157894737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68421052631579%"),
    top: hp("3.6247334754797436%"),
    justifyContent: "flex-start"
  },
  Text_0_464: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_465: {
    width: wp("21.894736842105264%"),
    minWidth: wp("21.894736842105264%"),
    height: hp("25.15991471215352%"),
    minHeight: hp("25.15991471215352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.1578947368421%"),
    top: hp("10.44776119402985%")
  },
  ImageBackground_0_466: {
    width: wp("21.894736842105264%"),
    minWidth: wp("21.894736842105264%"),
    height: hp("25.15991471215352%"),
    minHeight: hp("25.15991471215352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_469: {
    width: wp("10.947368421052632%"),
    minWidth: wp("10.947368421052632%"),
    height: hp("9.381663113006397%"),
    minHeight: hp("9.381663113006397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.473684210526322%"),
    top: hp("9.594882729211088%")
  },
  ImageBackground_0_470: {
    width: wp("8.421052631578947%"),
    minWidth: wp("8.421052631578947%"),
    height: hp("5.543710021321962%"),
    minHeight: hp("5.543710021321962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.7368421052631575%"),
    top: hp("4.264392324093816%")
  },
  ImageBackground_0_471: {
    width: wp("2.9473684210526314%"),
    minWidth: wp("2.9473684210526314%"),
    height: hp("4.904051172707889%"),
    minHeight: hp("4.904051172707889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.473684210526315%"),
    top: hp("11.940298507462687%")
  },
  ImageBackground_0_472: {
    width: wp("1.0526315789473684%"),
    minWidth: wp("1.0526315789473684%"),
    height: hp("2.345415778251599%"),
    minHeight: hp("2.345415778251599%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.736842105263158%"),
    top: hp("15.56503198294243%")
  },
  ImageBackground_0_473: {
    width: wp("1.0526315789473684%"),
    minWidth: wp("1.0526315789473684%"),
    height: hp("4.051172707889126%"),
    minHeight: hp("4.051172707889126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.736842105263158%"),
    top: hp("10.874200426439232%")
  },
  View_0_474: {
    width: wp("76.84210526315789%"),
    minWidth: wp("76.84210526315789%"),
    height: hp("31.769722814498934%"),
    minHeight: hp("31.769722814498934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.578947368421053%"),
    top: hp("39.44562899786781%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_476: {
    width: wp("56.631578947368425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.105263157894735%"),
    top: hp("8.102345415778245%"),
    justifyContent: "flex-start"
  },
  Text_0_476: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_477: {
    width: wp("34.31578947368421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.473684210526315%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_477: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_48_173: {
    width: wp("76.84210526315789%"),
    minWidth: wp("76.84210526315789%"),
    height: hp("11.087420042643924%"),
    minHeight: hp("11.087420042643924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.682302771855014%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_173_30_6: {
    flexGrow: 1,
    width: wp("76.84210526315789%"),
    height: hp("11.087420042643924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  View_I48_173_30_7: {
    flexGrow: 1,
    width: wp("21.894736842105264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.210526315789473%"),
    top: hp("3.837953091684433%"),
    justifyContent: "flex-start"
  },
  Text_I48_173_30_7: {
    color: "rgba(204, 202, 202, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
