import Satellite from "../../../assets/images/satellite.svg";
import Weather from "../../../assets/icons/weather.svg";
import { View, Text, TouchableOpacity } from "react-native";
export default function StartFarmCard() {
  return (
    <View style={{ paddingHorizontal: 24, width: "100%" }}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          borderRadius: 16,
          paddingVertical: 16,
          flexDirection: "row",
          shadowOffset: { width: 0, height: 5 },
          shadowColor: "black",
          shadowOpacity: 0.1,
          shadowRadius: 7,
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
  );
}
