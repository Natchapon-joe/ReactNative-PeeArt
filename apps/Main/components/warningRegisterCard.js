import { View, Text } from "react-native";
import MockPie from "../../../assets/images/mockPie.svg";
export default function WarningRegisterCard() {
  return (
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
          shadowOffset: { width: 0, height: 2 },
          shadowColor: "black",
          shadowOpacity: 0.1,
          shadowRadius: 4,
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
  );
}
