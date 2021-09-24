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
      <TouchableOpacity
        style={styles.TouchableOpacity_0_35}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_215"))
        }
      />
      <View style={styles.View_0_36}>
        <View style={styles.View_30_56}>
          <View style={styles.View_I30_56_21_23} />
          <View style={styles.View_I30_56_21_24}>
            <Text style={styles.Text_I30_56_21_24}>SiGN UP</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_30_53}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("30_48"))
          }
        >
          <View style={styles.View_I30_53_30_44}>
            <Text style={styles.Text_I30_53_30_44}>
              By signing up I agree with Terms and Conditions
            </Text>
          </View>
          <View style={styles.View_I30_53_30_45} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_30_40}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("30_2"))
          }
        >
          <View style={styles.View_I30_40_30_6} />
          <View style={styles.View_I30_40_30_7}>
            <Text style={styles.Text_I30_40_30_7}>Phone Number</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_30_36}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("30_9"))
          }
        >
          <View style={styles.View_I30_36_30_13} />
          <View style={styles.View_I30_36_30_14}>
            <Text style={styles.Text_I30_36_30_14}>Language</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e079/1da5/d6cca957294957975f7de68c774a0ff9"
            }}
            style={styles.ImageBackground_I30_36_30_15}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_30_32}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("30_9"))
          }
        >
          <View style={styles.View_I30_32_30_13} />
          <View style={styles.View_I30_32_30_14}>
            <Text style={styles.Text_I30_32_30_14}>Country</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e079/1da5/d6cca957294957975f7de68c774a0ff9"
            }}
            style={styles.ImageBackground_I30_32_30_15}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_30_29}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("17_45"))
          }
        >
          <View style={styles.View_I30_29_17_22} />
          <View style={styles.View_I30_29_17_23}>
            <Text style={styles.Text_I30_29_17_23}>Confirm Password</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_30_26}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("17_45"))
          }
        >
          <View style={styles.View_I30_26_17_22} />
          <View style={styles.View_I30_26_17_23}>
            <Text style={styles.Text_I30_26_17_23}>Password</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_30_23}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("30_2"))
          }
        >
          <View style={styles.View_I30_23_30_6} />
          <View style={styles.View_I30_23_30_7}>
            <Text style={styles.Text_I30_23_30_7}>Email</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_30_20}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("30_2"))
          }
        >
          <View style={styles.View_I30_20_30_6} />
          <View style={styles.View_I30_20_30_7}>
            <Text style={styles.Text_I30_20_30_7}>Last Name</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_30_17}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("30_2"))
          }
        >
          <View style={styles.View_I30_17_30_6} />
          <View style={styles.View_I30_17_30_7}>
            <Text style={styles.Text_I30_17_30_7}>First Name</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  TouchableOpacity_0_35: {
    width: wp("94.3609022556391%"),
    minWidth: wp("94.3609022556391%"),
    height: hp("94.54545454545455%"),
    minHeight: hp("94.54545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.819548872180451%"),
    top: hp("1.6363636363636365%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_36: {
    width: wp("79.51127819548873%"),
    minWidth: wp("79.51127819548873%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.150375939849624%"),
    top: hp("8.90909090909091%")
  },
  View_30_56: {
    width: wp("68.60902255639097%"),
    minWidth: wp("68.60902255639097%"),
    height: hp("9.454545454545455%"),
    minHeight: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.451127819548873%"),
    top: hp("70.54545454545455%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_56_21_23: {
    flexGrow: 1,
    width: wp("68.60902255639097%"),
    height: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 221, 225, 1)",
    borderColor: "rgba(217, 221, 225, 1)",
    borderWidth: 1
  },
  View_I30_56_21_24: {
    flexGrow: 1,
    width: wp("12.406015037593985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.00751879699248%"),
    top: hp("3.0909090909090935%"),
    justifyContent: "flex-start"
  },
  Text_I30_56_21_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  TouchableOpacity_30_53: {
    width: wp("54.88721804511278%"),
    minWidth: wp("54.88721804511278%"),
    height: hp("3.272727272727273%"),
    minHeight: hp("3.272727272727273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.72727272727272%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I30_53_30_44: {
    flexGrow: 1,
    width: wp("48.68421052631579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.639097744360901%"),
    top: hp("0.36363636363637397%"),
    justifyContent: "flex-start"
  },
  Text_I30_53_30_44: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_53_30_45: {
    flexGrow: 1,
    width: wp("3.3834586466165413%"),
    height: hp("3.272727272727273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  TouchableOpacity_30_40: {
    width: wp("79.51127819548873%"),
    minWidth: wp("79.51127819548873%"),
    height: hp("9.454545454545455%"),
    minHeight: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50.18181818181819%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_40_30_6: {
    flexGrow: 1,
    width: wp("79.51127819548873%"),
    height: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  View_I30_40_30_7: {
    flexGrow: 1,
    width: wp("18.23308270676692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.356785824424341%"),
    top: hp("3.2727272727272734%"),
    justifyContent: "flex-start"
  },
  Text_I30_40_30_7: {
    color: "rgba(204, 202, 202, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_30_36: {
    width: wp("37.59398496240601%"),
    minWidth: wp("37.59398496240601%"),
    height: hp("9.454545454545455%"),
    minHeight: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.9172932330827%"),
    top: hp("37.63636363636364%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_36_30_13: {
    flexGrow: 1,
    width: wp("37.59398496240601%"),
    height: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  View_I30_36_30_14: {
    flexGrow: 1,
    width: wp("11.466165413533833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.759398496240607%"),
    top: hp("3.2727272727272734%"),
    justifyContent: "flex-start"
  },
  Text_I30_36_30_14: {
    color: "rgba(204, 202, 202, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_36_30_15: {
    flexGrow: 1,
    width: wp("3.007518796992481%"),
    height: hp("1.4545454545454546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.20300751879701%"),
    top: hp("4%")
  },
  TouchableOpacity_30_32: {
    width: wp("37.78195488721804%"),
    minWidth: wp("37.78195488721804%"),
    height: hp("9.454545454545455%"),
    minHeight: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.63636363636364%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_32_30_13: {
    flexGrow: 1,
    width: wp("37.78195488721804%"),
    height: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  View_I30_32_30_14: {
    flexGrow: 1,
    width: wp("9.398496240601503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7593984962405997%"),
    top: hp("3.2727272727272734%"),
    justifyContent: "flex-start"
  },
  Text_I30_32_30_14: {
    color: "rgba(204, 202, 202, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_32_30_15: {
    flexGrow: 1,
    width: wp("3.007518796992481%"),
    height: hp("1.4545454545454546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.390977443609025%"),
    top: hp("4%")
  },
  TouchableOpacity_30_29: {
    width: wp("37.96992481203007%"),
    minWidth: wp("37.96992481203007%"),
    height: hp("9.454545454545455%"),
    minHeight: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.54135338345864%"),
    top: hp("25.09090909090909%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_29_17_22: {
    flexGrow: 1,
    width: wp("37.96992481203007%"),
    height: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  View_I30_29_17_23: {
    flexGrow: 1,
    width: wp("21.616541353383457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0805416250587427%"),
    top: hp("3.2727272727272734%"),
    justifyContent: "flex-start"
  },
  Text_I30_29_17_23: {
    color: "rgba(204, 202, 202, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_30_26: {
    width: wp("37.59398496240601%"),
    minWidth: wp("37.59398496240601%"),
    height: hp("9.454545454545455%"),
    minHeight: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.09090909090909%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_26_17_22: {
    flexGrow: 1,
    width: wp("37.59398496240601%"),
    height: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  View_I30_26_17_23: {
    flexGrow: 1,
    width: wp("11.466165413533833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0599365234375%"),
    top: hp("3.2727272727272734%"),
    justifyContent: "flex-start"
  },
  Text_I30_26_17_23: {
    color: "rgba(204, 202, 202, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_30_23: {
    width: wp("79.51127819548873%"),
    minWidth: wp("79.51127819548873%"),
    height: hp("9.454545454545455%"),
    minHeight: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.545454545454543%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_23_30_6: {
    flexGrow: 1,
    width: wp("79.51127819548873%"),
    height: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  View_I30_23_30_7: {
    flexGrow: 1,
    width: wp("6.390977443609022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.356785824424341%"),
    top: hp("3.2727272727272734%"),
    justifyContent: "flex-start"
  },
  Text_I30_23_30_7: {
    color: "rgba(204, 202, 202, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_30_20: {
    width: wp("37.59398496240601%"),
    minWidth: wp("37.59398496240601%"),
    height: hp("9.454545454545455%"),
    minHeight: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.9172932330827%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_20_30_6: {
    flexGrow: 1,
    width: wp("37.59398496240601%"),
    height: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  View_I30_20_30_7: {
    flexGrow: 1,
    width: wp("12.781954887218044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0599365234375%"),
    top: hp("3.2727272727272716%"),
    justifyContent: "flex-start"
  },
  Text_I30_20_30_7: {
    color: "rgba(204, 202, 202, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_30_17: {
    width: wp("37.96992481203007%"),
    minWidth: wp("37.96992481203007%"),
    height: hp("9.454545454545455%"),
    minHeight: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_17_30_6: {
    flexGrow: 1,
    width: wp("37.96992481203007%"),
    height: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(64, 85, 103, 1)",
    borderWidth: 1
  },
  View_I30_17_30_7: {
    flexGrow: 1,
    width: wp("12.969924812030076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.080541625058739%"),
    top: hp("3.2727272727272716%"),
    justifyContent: "flex-start"
  },
  Text_I30_17_30_7: {
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
