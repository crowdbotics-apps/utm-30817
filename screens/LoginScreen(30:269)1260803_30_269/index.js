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
      <View style={styles.View_30_306}>
        <View style={styles.View_30_273} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7073/c84b/d241154d8df3b16b79c15756bb16dd18"
          }}
          style={styles.ImageBackground_30_274}
        />
        <View style={styles.View_30_275}>
          <TouchableOpacity
            style={styles.TouchableOpacity_30_276}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("30_48"))
            }
          >
            <View style={styles.View_I30_276_30_44}>
              <Text style={styles.Text_I30_276_30_44}>Remember me</Text>
            </View>
            <View style={styles.View_I30_276_30_45} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_30_277}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_459"))
            }
          >
            <Text style={styles.Text_30_277}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.View_30_278}>
          <View style={styles.View_I30_278_17_35} />
          <View style={styles.View_I30_278_17_36}>
            <Text style={styles.Text_I30_278_17_36}>Log In</Text>
          </View>
        </View>
        <View style={styles.View_30_279}>
          <View style={styles.View_30_280}>
            <Text style={styles.Text_30_280}>Don’t have an account?</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_30_281}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_32"))
            }
          >
            <View style={styles.View_I30_281_17_32} />
            <View style={styles.View_I30_281_17_33}>
              <Text style={styles.Text_I30_281_17_33}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_30_282}>
          <TouchableOpacity
            style={styles.TouchableOpacity_30_283}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("17_45"))
            }
          >
            <View style={styles.View_I30_283_17_22} />
            <View style={styles.View_I30_283_17_23}>
              <Text style={styles.Text_I30_283_17_23}>Password</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_30_284}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("30_2"))
            }
          >
            <View style={styles.View_I30_284_30_6} />
            <View style={styles.View_I30_284_30_7}>
              <Text style={styles.Text_I30_284_30_7}>Username</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_30_306: {
    width: wp("92.619926199262%"),
    minWidth: wp("92.619926199262%"),
    height: hp("91.64926931106471%"),
    minHeight: hp("91.64926931106471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6900369003690034%"),
    top: hp("4.175365344467641%")
  },
  View_30_273: {
    width: wp("92.619926199262%"),
    height: hp("91.64926931106471%"),
    minHeight: hp("91.64926931106471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_30_274: {
    width: wp("75.96915269689806%"),
    height: hp("0.20876826722338201%"),
    minHeight: hp("0.20876826722338201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.32533044568727%"),
    top: hp("61.16910229645094%")
  },
  View_30_275: {
    width: wp("60.775323283628346%"),
    minWidth: wp("60.775323283628346%"),
    height: hp("13.569937369519833%"),
    minHeight: hp("13.569937369519833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.32533044568727%"),
    top: hp("40.50104384133611%")
  },
  TouchableOpacity_30_276: {
    width: wp("60.775323283628346%"),
    height: hp("3.7578288100208765%"),
    minHeight: hp("3.7578288100208765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.812108559498952%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I30_276_30_44: {
    flexGrow: 1,
    width: wp("14.944649446494465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.535055350553506%"),
    top: hp("0.41753653444677497%"),
    justifyContent: "flex-start"
  },
  Text_I30_276_30_44: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_276_30_45: {
    flexGrow: 1,
    width: wp("3.3210332103321036%"),
    height: hp("3.7578288100208765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  TouchableOpacity_30_277: {
    width: wp("23.3110829033095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_30_277: {
    color: "rgba(45, 74, 205, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_278: {
    width: wp("37.67237364146103%"),
    height: hp("10.855949895615867%"),
    minHeight: hp("10.855949895615867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.62216580661901%"),
    top: hp("46.13778705636743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_278_17_35: {
    flexGrow: 1,
    width: wp("37.67237364146103%"),
    height: hp("10.855949895615867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(45, 74, 205, 1)",
    borderColor: "rgba(45, 74, 205, 1)",
    borderWidth: 1
  },
  View_I30_278_17_36: {
    flexGrow: 1,
    width: wp("10.33210332103321%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.468634686346853%"),
    top: hp("3.5490605427974984%"),
    justifyContent: "flex-start"
  },
  Text_I30_278_17_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_30_279: {
    width: wp("75.96915269689806%"),
    height: hp("17.954070981210858%"),
    minHeight: hp("17.954070981210858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.32533044568727%"),
    top: hp("65.34446764091858%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_30_280: {
    width: wp("30.073800738007378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.87822878228782%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_30_280: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_30_281: {
    flexGrow: 1,
    width: wp("76.01476014760148%"),
    height: hp("10.855949895615867%"),
    minHeight: hp("10.855949895615867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.098121085594997%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_281_17_32: {
    flexGrow: 1,
    width: wp("76.01476014760148%"),
    height: hp("10.855949895615867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(232, 152, 59, 1)",
    borderWidth: 1
  },
  View_I30_281_17_33: {
    flexGrow: 1,
    width: wp("12.177121771217712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.734317343173437%"),
    top: hp("3.5490605427974913%"),
    justifyContent: "flex-start"
  },
  Text_I30_281_17_33: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_30_282: {
    width: wp("75.96915269689806%"),
    height: hp("25.887265135699373%"),
    minHeight: hp("25.887265135699373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.32533044568727%"),
    top: hp("8.35073068893528%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_30_283: {
    flexGrow: 1,
    width: wp("76.01476014760148%"),
    height: hp("10.855949895615867%"),
    minHeight: hp("10.855949895615867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.031315240083508%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_283_17_22: {
    flexGrow: 1,
    width: wp("76.01476014760148%"),
    height: hp("10.855949895615867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  View_I30_283_17_23: {
    flexGrow: 1,
    width: wp("11.254612546125461%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.165210231203872%"),
    top: hp("3.757828810020875%"),
    justifyContent: "flex-start"
  },
  Text_I30_283_17_23: {
    color: "rgba(204, 202, 202, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_30_284: {
    flexGrow: 1,
    width: wp("76.01476014760148%"),
    height: hp("10.855949895615867%"),
    minHeight: hp("10.855949895615867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.20876826722338393%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_284_30_6: {
    flexGrow: 1,
    width: wp("76.01476014760148%"),
    height: hp("10.855949895615867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  View_I30_284_30_7: {
    flexGrow: 1,
    width: wp("12.177121771217712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.165210231203872%"),
    top: hp("3.757828810020875%"),
    justifyContent: "flex-start"
  },
  Text_I30_284_30_7: {
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
