import { View, Text, TouchableOpacity } from "react-native";
import MockProfile from "../../../assets/images/mockProfile.svg";
export default function ProfileCard() {
  return (
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
              <Text style={{ fontFamily: "IBM-Plex-Sans" }}>Chakkawan 👨🏻‍🌾</Text>
            </View>
            <Text style={{ color: "#6C757D" }}>ศุกร์ 21 กรกฎาคม 2566 </Text>
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
  );
}
