import { View, Text, TouchableOpacity, Image, Slide } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useCallback, useState, useRef, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import MockProfile from "../../assets/images/mockProfile.svg";
import RingProfile from "../../assets/images/ringProfile.svg";
import Image1 from "../../assets/images/main/image1.png";
import Image2 from "../../assets/images/main/image2.png";
import Image3 from "../../assets/images/main/image3.png";
import Image4 from "../../assets/images/main/image4.png";
import { WeatherCard, StartFarmCard, WarningRegisterCard } from "./components/";
import {
  Cloudy,
  Rainy,
  Sunny,
  Sunrain,
} from "../../assets/icons/weather/index";
import { ScrollView } from "react-native";

export default function Main({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const images = [Image1, Image2, Image3, Image4];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % images?.length);
  };

  useEffect(() => {
    // กำหนดให้เปลี่ยนรูปภาพทุก 2 วินาที
    timerRef.current = setInterval(nextSlide, 2000);

    return () => {
      // ยกเลิก interval เมื่อ component ถูก unmount
      clearInterval(timerRef.current);
    };
  }, []);

  const today = "Fri 21";
  const dataMock = [
    {
      day: "Fri 21",
      month: "july",
      weather: <Cloudy />,
      temperature: "28°C",
    },
    {
      day: "Sat 22",
      month: "july",
      weather: <Sunny />,
      temperature: "28°C",
    },
    {
      day: "Sun 23",
      month: "july",
      weather: <Rainy />,
      temperature: "28°C",
    },
    {
      dat: "Mon 24",
      month: "july",
      weather: <Sunrain />,
      temperature: "28°C",
    },
  ];

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
      style={{
        width: "100%",
        height: "100%",
      }}
      onLayout={onLayoutRootView}
    >
      <ScrollView style={{ backgroundColor: "#FAFAFB", height: "100%" }}>
        <View
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <LinearGradient
            colors={["#074E9F", "#00968D"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: "100%",
              height: "100%",
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
                      <Text style={{ fontFamily: "IBM-Plex-Sans" }}>
                        สวัสดี
                      </Text>
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
              marginTop: -64,
              rowGap: 24,
            }}
          >
            {/* row 1 */}
            <StartFarmCard />
            {/* row 2 */}
            <WarningRegisterCard />
            <View style={{ width: "100%" }}>
              <View
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "100%",
                  borderRadius: 32,
                  paddingVertical: 16,
                  flexDirection: "col",
                  rowGap: 16,
                  shadowOffset: { width: 0, height: 2 },
                  shadowColor: "black",
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#074E9F",
                    paddingLeft: 24,
                  }}
                >
                  คาดการณ์อากาศ 7 วันข้างหน้า
                </Text>
                <View>
                  {/* today */}
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {dataMock?.map((data, index) => {
                      return (
                        <View
                          key={index}
                          style={{ paddingLeft: index === 0 ? 24 : undefined }}
                        >
                          <WeatherCard data={data} today={today} />
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    color: "#074E9F",
                    paddingLeft: 24,
                  }}
                >
                  เรดาร์อากาศ
                </Text>
                <View style={{ paddingHorizontal: 24 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 12,
                    }}
                  >
                    <Image
                      style={{
                        borderRadius: 8,
                        maxWidth: 160,
                        resizeMode: "contain",
                      }}
                      source={images[currentIndex]}
                    />
                    <Image
                      style={{
                        borderRadius: 8,
                        maxWidth: 160,
                        resizeMode: "contain",
                      }}
                      source={images[currentIndex + 1]}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: 10,
                    }}
                  >
                    {images.map((_, index) => {
                      if (index <= images.length / 2) {
                        return (
                          <TouchableOpacity
                            key={index}
                            onPress={() => handleDotPress(index)}
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: 4,
                              backgroundColor:
                                index == currentIndex ? "#074E9F" : "#ccc",
                              marginHorizontal: 4,
                            }}
                          />
                        );
                      }
                    })}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
