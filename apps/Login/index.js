import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../assets/icons/logo.svg";
import ImageLogin from "../../assets/images/imageLogin.svg";
import Google from "../../assets/icons/google.svg";
import Facebook from "../../assets/icons/facebook.svg";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function Login({ navigation }) {
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
    <View onLayout={onLayoutRootView}>
      <LinearGradient
        colors={["#074E9F", "#00968D"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        <View style={{ width: "100vm", height: "100vm" }}>
          <View style={{ maxHeight: 80, paddingHorizontal: 40 }}>
            <Logo height={128} />
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
              right: -30,
            }}
          >
            <ImageLogin height={350} />
          </View>
          <View style={{ rowGap: 28, paddingHorizontal: 40 }}>
            <View>
              <View style={styles.textGroup}>
                <Text style={styles.textPrimary}>สร้าง</Text>
                <Text style={styles.textPrimary}>ติดตาม</Text>
                <Text style={styles.textPrimary}>ฟาร์มของคุณ</Text>
                <Text
                  style={{
                    color: "rgb(255 255 255)",
                    fontSize: 18,
                    fontFamily: "IBM-Plex-Sans",
                  }}
                >
                  ได้ด้วยปลายนิ้ว
                </Text>
              </View>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={{
                  height: "100%",
                  paddingHorizontal: 38,
                  fontSize: 24,
                  color: "rgb(255 255 255)",
                  textAlign: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.navigate("Main");
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    color: "white",
                    fontFamily: "IBM-Plex-Sans",
                    fontSize: 20,
                  }}
                >
                  เริ่มกันเลย
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ rowGap: 14 }}>
              <View style={{ borderWidth: 1, borderColor: "white" }} />
              <Text style={{ color: "white", fontFamily: "IBM-Plex-Sans" }}>
                เข้าสู่ระบบผ่านทาง
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 24,
                  left: 0,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 52,
                    height: 52,
                    backgroundColor: "white",
                    borderRadius: 30,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Google />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 52,
                    height: 52,
                    backgroundColor: "white",
                    borderRadius: 30,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Facebook />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  containerContent: {
    display: "flex",
    width: "100%",
    height: "100%",
    paddingVertical: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    left: 0,
  },
  containerContentDetail: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
  },
  textGroup: {
    position: "absolute",
    bottom: 0,
    rowGap: -12,
  },
  textPrimary: {
    color: "rgb(255 255 255)",
    fontSize: 32,
    fontWeight: 500,
    fontFamily: "IBM-Plex-Sans",
  },
  button: {
    height: "100%",
    maxHeight: 48,
    width: "100%",
    maxWidth: 170,
    borderWidth: 1,
    borderColor: "white",
    textAlign: "center",
    borderRadius: 16,
  },
});
