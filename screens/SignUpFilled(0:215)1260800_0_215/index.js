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
      <View style={styles.View_0_217} />
      <View style={styles.View_30_76}>
        <View style={styles.View_30_77}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I30_77_17_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("17_18"))
            }
          />
          <View style={styles.View_I30_77_17_28}>
            <Text style={styles.Text_I30_77_17_28}>SiGN UP</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_30_78}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("30_46"))
          }
        >
          <View style={styles.View_I30_78_30_49}>
            <Text style={styles.Text_I30_78_30_49}>
              By signing up I agree with Terms and Conditions
            </Text>
          </View>
          <View style={styles.View_I30_78_30_51} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7448/5922/9a32d50daf92896c79311996e4e90590"
            }}
            style={styles.ImageBackground_I30_78_30_52}
          />
        </TouchableOpacity>
        <View style={styles.View_30_79}>
          <View style={styles.View_I30_79_30_3} />
          <View style={styles.View_I30_79_30_4}>
            <Text style={styles.Text_I30_79_30_4}>Phone Number</Text>
          </View>
        </View>
        <View style={styles.View_30_80}>
          <View style={styles.View_I30_80_30_10} />
          <View style={styles.View_I30_80_30_11}>
            <Text style={styles.Text_I30_80_30_11}>Language</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e079/1da5/d6cca957294957975f7de68c774a0ff9"
            }}
            style={styles.ImageBackground_I30_80_30_16}
          />
        </View>
        <View style={styles.View_30_81}>
          <View style={styles.View_I30_81_30_10} />
          <View style={styles.View_I30_81_30_11}>
            <Text style={styles.Text_I30_81_30_11}>Country</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e079/1da5/d6cca957294957975f7de68c774a0ff9"
            }}
            style={styles.ImageBackground_I30_81_30_16}
          />
        </View>
        <View style={styles.View_30_82}>
          <View style={styles.View_I30_82_17_46} />
          <View style={styles.View_I30_82_17_47}>
            <Text style={styles.Text_I30_82_17_47}>Confirm Password</Text>
          </View>
        </View>
        <View style={styles.View_30_83}>
          <View style={styles.View_I30_83_17_46} />
          <View style={styles.View_I30_83_17_47}>
            <Text style={styles.Text_I30_83_17_47}>Password</Text>
          </View>
        </View>
        <View style={styles.View_30_84}>
          <View style={styles.View_I30_84_30_3} />
          <View style={styles.View_I30_84_30_4}>
            <Text style={styles.Text_I30_84_30_4}>Email</Text>
          </View>
        </View>
        <View style={styles.View_30_85}>
          <View style={styles.View_I30_85_30_3} />
          <View style={styles.View_I30_85_30_4}>
            <Text style={styles.Text_I30_85_30_4}>Last Name</Text>
          </View>
        </View>
        <View style={styles.View_30_86}>
          <View style={styles.View_I30_86_30_3} />
          <View style={styles.View_I30_86_30_4}>
            <Text style={styles.Text_I30_86_30_4}>First Name</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_0_217: {
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
  View_30_76: {
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
  View_30_77: {
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
  TouchableOpacity_I30_77_17_27: {
    flexGrow: 1,
    width: wp("68.60902255639097%"),
    height: hp("9.454545454545455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 152, 59, 1)",
    borderColor: "rgba(232, 152, 59, 1)",
    borderWidth: 1
  },
  View_I30_77_17_28: {
    flexGrow: 1,
    width: wp("12.406015037593985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.00751879699248%"),
    top: hp("3.0909090909090935%"),
    justifyContent: "center"
  },
  Text_I30_77_17_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  TouchableOpacity_30_78: {
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
  View_I30_78_30_49: {
    flexGrow: 1,
    width: wp("48.68421052631579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.639097744360901%"),
    top: hp("0.36363636363637397%"),
    justifyContent: "flex-start"
  },
  Text_I30_78_30_49: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I30_78_30_51: {
    flexGrow: 1,
    width: wp("3.3834586466165413%"),
    height: hp("3.272727272727273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(64, 85, 103, 1)"
  },
  ImageBackground_I30_78_30_52: {
    flexGrow: 1,
    width: wp("2.819548872180451%"),
    height: hp("2.181818181818182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3759398496240589%"),
    top: hp("0.545454545454561%")
  },
  View_30_79: {
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
  View_I30_79_30_3: {
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
  View_I30_79_30_4: {
    flexGrow: 1,
    width: wp("18.23308270676692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.356785824424341%"),
    top: hp("3.2727272727272734%"),
    justifyContent: "flex-start"
  },
  Text_I30_79_30_4: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_80: {
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
  View_I30_80_30_10: {
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
  View_I30_80_30_11: {
    flexGrow: 1,
    width: wp("11.466165413533833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.759398496240607%"),
    top: hp("3.2727272727272734%"),
    justifyContent: "flex-start"
  },
  Text_I30_80_30_11: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_80_30_16: {
    flexGrow: 1,
    width: wp("3.007518796992481%"),
    height: hp("1.4545454545454546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.20300751879701%"),
    top: hp("4%")
  },
  View_30_81: {
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
  View_I30_81_30_10: {
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
  View_I30_81_30_11: {
    flexGrow: 1,
    width: wp("9.398496240601503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7593984962405997%"),
    top: hp("3.2727272727272734%"),
    justifyContent: "flex-start"
  },
  Text_I30_81_30_11: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_81_30_16: {
    flexGrow: 1,
    width: wp("3.007518796992481%"),
    height: hp("1.4545454545454546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.390977443609025%"),
    top: hp("4%")
  },
  View_30_82: {
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
  View_I30_82_17_46: {
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
  View_I30_82_17_47: {
    flexGrow: 1,
    width: wp("21.616541353383457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0805416250587427%"),
    top: hp("3.2727272727272734%"),
    justifyContent: "flex-start"
  },
  Text_I30_82_17_47: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_83: {
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
  View_I30_83_17_46: {
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
  View_I30_83_17_47: {
    flexGrow: 1,
    width: wp("11.466165413533833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.059947996211232%"),
    top: hp("3.2727272727272734%"),
    justifyContent: "flex-start"
  },
  Text_I30_83_17_47: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_84: {
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
  View_I30_84_30_3: {
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
  View_I30_84_30_4: {
    flexGrow: 1,
    width: wp("6.390977443609022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.356785824424341%"),
    top: hp("3.2727272727272734%"),
    justifyContent: "flex-start"
  },
  Text_I30_84_30_4: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_85: {
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
  View_I30_85_30_3: {
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
  View_I30_85_30_4: {
    flexGrow: 1,
    width: wp("12.781954887218044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0599479962112355%"),
    top: hp("3.2727272727272716%"),
    justifyContent: "flex-start"
  },
  Text_I30_85_30_4: {
    color: "rgba(64, 85, 103, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_86: {
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
  View_I30_86_30_3: {
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
  View_I30_86_30_4: {
    flexGrow: 1,
    width: wp("12.969924812030076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.080541625058739%"),
    top: hp("3.2727272727272716%"),
    justifyContent: "flex-start"
  },
  Text_I30_86_30_4: {
    color: "rgba(64, 85, 103, 1)",
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
