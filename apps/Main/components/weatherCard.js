import { View, Text, TouchableOpacity } from "react-native";
export default function WeatherCard({ data, today }) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 4,
        paddingBottom: 8,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderColor: today === data.day ? "#074E9F" : "white",
          borderWidth: 2,
          borderRadius: 16,
          shadowOffset: { width: 0, height: 2 },
          shadowColor: "black",
          shadowOpacity: 0.1,
          shadowRadius: 4,
          width: 96,
        }}
      >
        <View
          style={{
            paddingVertical: 12,
            alignItems: "center",
            width: "100%",
            maxWidth: 100,
            rowGap: 10,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "#074E9F", fontWeight: 700 }}>
              {data?.day}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 600 }}>{data?.month}</Text>
          </View>
          <View style={{ height: 32 }}>{data?.weather}</View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#074E9F",
            }}
          >
            {data?.temperature}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
