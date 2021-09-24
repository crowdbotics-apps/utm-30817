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
      <View style={styles.View_0_354} />
      <View style={styles.View_0_355}>
        <View style={styles.View_0_356}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0742/f068/d36300e96b94d227ed4475f609899812"
            }}
            style={styles.ImageBackground_0_357}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/516c/e562/d9670d073c575e7817bb776a907fd09e"
            }}
            style={styles.ImageBackground_0_358}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a68/6514/93e018c7f4f86925466ed32fb115406c"
            }}
            style={styles.ImageBackground_0_359}
          />
          <View style={styles.View_0_360}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01d6/3c15/f33eb1cb228a4d2ddbc252eff2d81844"
              }}
              style={styles.ImageBackground_0_361}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd7/043c/7a76f040c522d553fced06627d9fc503"
              }}
              style={styles.ImageBackground_0_362}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef31/aa0a/0812089cab1984545205b010871a7639"
              }}
              style={styles.ImageBackground_0_363}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3943/1815/2b8e4ddf3e263742f901828915a4f5e0"
              }}
              style={styles.ImageBackground_0_364}
            />
          </View>
        </View>
        <View style={styles.View_0_367}>
          <Text style={styles.Text_0_367}>Sign Up Successful</Text>
        </View>
        <View style={styles.View_0_368}>
          <Text style={styles.Text_0_368}>
            Your account has been successfully created. A link has been sent to
            validate your account via Email
          </Text>
        </View>
        <View style={styles.View_0_369}>
          <View style={styles.View_0_370} />
          <View style={styles.View_0_371}>
            <Text style={styles.Text_0_371}>OK</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_0_354: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_355: {
    width: wp("82.02247191011236%"),
    minWidth: wp("82.02247191011236%"),
    height: hp("69.93166287015946%"),
    minHeight: hp("69.93166287015946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.98876404494382%"),
    top: hp("15.034168564920272%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_356: {
    width: wp("42.47191011235955%"),
    minWidth: wp("42.47191011235955%"),
    height: hp("23.462414578587698%"),
    minHeight: hp("23.462414578587698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.325842696629213%"),
    top: hp("0%")
  },
  ImageBackground_0_357: {
    width: wp("34.157303370786515%"),
    height: hp("11.845102505694761%"),
    top: hp("11.61731207289294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.314606741573034%")
  },
  ImageBackground_0_358: {
    width: wp("34.157303370786515%"),
    height: hp("8.88382687927107%"),
    top: hp("7.289293849658314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.314606741573034%")
  },
  ImageBackground_0_359: {
    width: wp("21.34831460674157%"),
    height: hp("18.223234624145785%"),
    top: hp("0.45558086560364686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.033707865168534%")
  },
  View_0_360: {
    width: wp("42.47191011235955%"),
    minWidth: wp("42.47191011235955%"),
    height: hp("20.72892938496583%"),
    minHeight: hp("20.72892938496583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_361: {
    width: wp("17.50483995073297%"),
    height: hp("10.516905730297463%"),
    top: hp("8.009202822465834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.90533927317416%")
  },
  ImageBackground_0_362: {
    width: wp("17.632850904143258%"),
    height: hp("11.738516040706418%"),
    top: hp("0.1220981189493191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.137508778089884%")
  },
  ImageBackground_0_363: {
    width: wp("17.50483995073297%"),
    height: hp("10.516905730297463%"),
    top: hp("0.1220981189493191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.13750534914853%")
  },
  ImageBackground_0_364: {
    width: wp("42.47191011235955%"),
    height: hp("7.289293849658314%"),
    top: hp("13.296710385820045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_367: {
    width: wp("37.07865168539326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.79775280898876%"),
    top: hp("30.751708428246012%"),
    justifyContent: "flex-start"
  },
  Text_0_367: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_368: {
    width: wp("76.17977528089888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6966292134831455%"),
    top: hp("42.14123006833713%"),
    justifyContent: "flex-start"
  },
  Text_0_368: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_369: {
    width: wp("82.02247191011236%"),
    height: hp("11.845102505694761%"),
    top: hp("58.086560364464695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_370: {
    width: wp("82.02247191011236%"),
    height: hp("11.845102505694761%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 74, 205, 1)",
    borderColor: "rgba(204, 202, 202, 1)",
    borderWidth: 1
  },
  View_0_371: {
    width: wp("5.393258426966292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.426966292134836%"),
    top: hp("3.872437357630986%"),
    justifyContent: "flex-start"
  },
  Text_0_371: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
