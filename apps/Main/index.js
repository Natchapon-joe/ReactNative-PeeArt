import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import MockProfile from "../../assets/images/mockProfile.svg";
import RingProfile from "../../assets/images/ringProfile.svg";
import Weather from "../../assets/icons/weather.svg";
import Satellite from "../../assets/images/satellite.svg";
import MockPie from "../../assets/images/mockPie.svg";
import { ScrollView } from "react-native";

export default function Main({ navigation }) {
  const [fontLoaded] = useFonts({
    "IBM-Plex-Sans": require("../../assets/fonts/IBMPlexSansThai-Medium.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return <View />;
  }
  return (
    <View
      style={{ width: "100%", height: "100%", display: "flex" }}
      onLayout={onLayoutRootView}
    >
      <ScrollView>
        <LinearGradient
          colors={["#074E9F", "#00968D"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: "100%",
            borderRadius: 20,
            display: "flex",
            maxHeight: 266,
          }}
        >
          <View
            style={{
              display: "flex",
              paddingHorizontal: 24,
              paddingVertical: 64,
              rowGap: 16,
            }}
          >
            <View
              style={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: 16,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 8,
                  columnGap: 16,
                  alignItems: "center",
                }}
              >
                <MockProfile />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 8,
                    }}
                  >
                    <Text style={{ fontFamily: "IBM-Plex-Sans" }}>สวัสดี</Text>
                    <Text style={{ fontFamily: "IBM-Plex-Sans" }}>
                      Chakkawan 👨🏻‍🌾
                    </Text>
                  </View>
                  <Text style={{ color: "#6C757D" }}>
                    ศุกร์ 21 กรกฎาคม 2566{" "}
                  </Text>
                </View>
                <TouchableOpacity>
                  <RingProfile />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ paddingBottom: 40 }}>
              <Text style={{ color: "white" }}>
                {" "}
                รออีกนิดฟาร์มของคุณใกล้จะพร้อมแล้ว 🌾🌾
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            width: "100%",
            paddingTop: 196,
            position: "absolute",
            rowGap: 24,
          }}
        >
          {/* row 1 */}
          <View style={{ paddingHorizontal: 24, width: "100%" }}>
            <View
              style={{
                backgroundColor: "white",
                width: "100%",
                borderRadius: 16,
                paddingVertical: 16,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  rowGap: 8,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ fontSize: 48 }}>28</Text>
                  <Text>C</Text>
                  <Weather />
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text>asdad</Text>
                  <Text>asdad</Text>
                  <Text>asdad</Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      fontSize: 24,
                      borderWidth: 1,
                      borderColor: "#074E9F",
                      textAlign: "center",
                      alignItems: "center",
                      borderRadius: 16,
                    }}
                  >
                    <Text
                      style={{
                        color: "#074E9F",
                        fontSize: 14,
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                      }}
                    >
                      เริ่มสร้างฟาร์มของคุณ
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Satellite />
            </View>
          </View>
          {/* row 2 */}
          <View style={{ paddingHorizontal: 24, width: "100%" }}>
            <View
              style={{
                backgroundColor: "white",
                width: "100%",
                borderRadius: 16,
                paddingVertical: 16,
                paddingHorizontal: 16,
                flexDirection: "row",
                columnGap: 16,
              }}
            >
              <View>
                <MockPie />
              </View>
              <View>
                <Text style={{ fontSize: 16, color: "#074E9F" }}>
                  กรุณนาลงทะเบียน
                </Text>
                <Text style={{ fontSize: 12 }}>
                  ลงทะเบียนกับเราเพื่อเปิดใช้งาน aFarm
                </Text>
              </View>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <View
              style={{
                backgroundColor: "white",
                width: "100%",
                borderRadius: 32,
                paddingVertical: 16,
                paddingHorizontal: 24,
                flexDirection: "row",
                columnGap: 16,
              }}
            >
              <Text style={{ fontSize: 14, color: "#074E9F" }}>
                คาดการณ์อากาศ 7 วันข้างหน้า
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
