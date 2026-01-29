import { View, ScrollView, StyleSheet, Pressable, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"
import ATSTemplate1 from "../template/ATSTemplate1"
import resumeData from "../data/resumeData"
import ATSTemplate2 from "../template/ATSTemplateSidebar"
import ATSTemplateSidebar from "../template/ATSTemplateSidebar"
import ATSColorful from "../template/ATSClassic"

const TemplateScreen = () => {
  const [zoom, setZoom] = useState(1)

  const zoomIn = () => setZoom((z) => Math.min(z + 0.1, 1.6))
  const zoomOut = () => setZoom((z) => Math.max(z - 0.1, 0.6))

  return (
    <SafeAreaView style={styles.safe}>
      {/* ZOOM CONTROLS */}
      <View style={styles.zoomBar}>
        <Pressable onPress={zoomOut} style={styles.zoomBtn}>
          <Text style={styles.zoomText}>−</Text>
        </Pressable>

        <Text style={styles.zoomLabel}>{Math.round(zoom * 100)}%</Text>

        <Pressable onPress={zoomIn} style={styles.zoomBtn}>
          <Text style={styles.zoomText}>+</Text>
        </Pressable>
      </View>

      {/* HORIZONTAL SCROLL */}
      <ScrollView
        horizontal
        contentContainerStyle={styles.hScroll}
        showsHorizontalScrollIndicator={false}
      >
        {/* VERTICAL SCROLL */}
        <ScrollView
          contentContainerStyle={styles.vScroll}
          showsVerticalScrollIndicator={false}
        >
          {/* ZOOMABLE CANVAS */}
          <View
            style={[
              styles.canvas,
              {
                transform: [{ scale: zoom }],
              },
            ]}
          >
            <ATSColorful data={resumeData} />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TemplateScreen
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#e5e7eb", // editor gray
  },

  zoomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },

  zoomBtn: {
    width: 36,
    height: 36,
    borderRadius: 6,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
  },

  zoomText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
  },

  zoomLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },

  hScroll: {
    paddingHorizontal: 40,
    paddingVertical: 24,
  },

  vScroll: {
    alignItems: "center",
  },

  canvas: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 8,

    // Shadow = floating paper feel
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
})
