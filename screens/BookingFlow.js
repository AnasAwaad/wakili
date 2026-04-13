import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function BookingFlow() {
  const [sessionType, setSessionType] = useState("in-person");
  const [selectedDay, setSelectedDay] = useState(18);
  const [selectedSlot, setSelectedSlot] = useState("10:00");

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDayOffset = 1; // Starting from Sunday (0) for Oct 2023 would be 0 maybe. Let's just make it look like the image.

  const slots = [
    { time: "09:00 ص", value: "09:00" },
    { time: "10:00 ص", value: "10:00" },
    { time: "11:30 ص", value: "11:30" },
    { time: "01:00 م", value: "01:00" },
    { time: "02:00 م", value: "02:00" },
    { time: "03:30 م", value: "03:30" },
    { time: "04:30 م", value: "04:30" },
    { time: "05:00 م", value: "05:00" },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?u=user" }}
          style={styles.headerAvatar}
        />
        <Ionicons name="menu-outline" size={28} color="#0A2353" />
        <Text style={styles.headerLogo}>وكيلي</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* Stepper */}
        <View style={styles.stepperContainer}>
          <View style={styles.stepBox}>
            <View style={[styles.stepDot, styles.stepInactive]}>
              <Text style={styles.stepNumInactive}>٣</Text>
            </View>
            <Text style={styles.stepLabelInactive}>الدفع</Text>
          </View>
          <View style={styles.stepLine} />
          <View style={styles.stepBox}>
            <View style={[styles.stepDot, styles.stepInactive]}>
              <Text style={styles.stepNumInactive}>٢</Text>
            </View>
            <Text style={styles.stepLabelInactive}>التفاصيل</Text>
          </View>
          <View style={styles.stepLine} />
          <View style={styles.stepBox}>
            <View style={[styles.stepDot, styles.stepActive]}>
              <Text style={styles.stepNumActive}>١</Text>
            </View>
            <Text style={styles.stepLabelActive}>اختر الموعد</Text>
          </View>
        </View>

        {/* Lawyer Profile Card */}
        <View style={styles.lawyerCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=150",
            }}
            style={styles.lawyerAvatarImg}
          />
          <View style={styles.lawyerInfo}>
            <Text style={styles.lawyerName}>المستشار خالد</Text>
            <Text style={styles.lawyerTitle}>شريك أول • قانون الأسرة</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.ratingText}>4.9 (124 مراجعة)</Text>
              <Ionicons name="star" size={14} color="#C49B3B" />
            </View>
          </View>
          <View style={styles.settingsIcon}>
            <Ionicons name="settings" size={12} color="#FFF" />
          </View>
        </View>

        {/* Session Type */}
        <View style={styles.sectionWrap}>
          <Text style={styles.sectionLabel}>نوع الجلسة</Text>
          <TouchableOpacity
            style={[
              styles.sessionBtn,
              sessionType === "in-person" && styles.sessionActive,
            ]}
            onPress={() => setSessionType("in-person")}
          >
            <MaterialCommunityIcons
              name="office-building"
              size={24}
              color={sessionType === "in-person" ? "#0A2353" : "#AAA"}
            />
            <View style={styles.sessionBtnText}>
              <Text style={styles.sessionTitle}>استشارة حضورية</Text>
              <Text style={styles.sessionSubtitle}>
                مكتب وسط المدينة، البرج أ
              </Text>
            </View>
            {sessionType === "in-person" && (
              <View style={styles.checkCircle}>
                <Ionicons name="checkmark" size={14} color="#FFF" />
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sessionBtn,
              sessionType === "phone" && styles.sessionActive,
            ]}
            onPress={() => setSessionType("phone")}
          >
            <MaterialCommunityIcons
              name="phone-outline"
              size={24}
              color={sessionType === "phone" ? "#0A2353" : "#AAA"}
            />
            <View style={styles.sessionBtnText}>
              <Text style={styles.sessionTitle}>اتصال هاتفي</Text>
              <Text style={styles.sessionSubtitle}>مكالمة صوتية أو فيديو</Text>
            </View>
            {sessionType === "phone" && (
              <View style={styles.checkCircle}>
                <Ionicons name="checkmark" size={14} color="#FFF" />
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Price Banner */}
        <View style={styles.priceBanner}>
          <Text style={styles.priceLabel}>رسوم الاستشارة</Text>
          <Text style={styles.priceValue}>$250.00</Text>
          <View style={styles.cardIconBox}>
            <Ionicons name="card" size={24} color="#0A2353" opacity={0.3} />
          </View>
        </View>

        {/* Calendar Section */}
        <View style={styles.calendarCard}>
          <View style={styles.calendarHeader}>
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={20} color="#0A2353" />
            </TouchableOpacity>
            <Text style={styles.monthName}>أكتوبر ٢٠٢٣</Text>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={20} color="#0A2353" />
            </TouchableOpacity>
          </View>

          <View style={styles.daysHeader}>
            <Text style={styles.dayHead}>سبت</Text>
            <Text style={styles.dayHead}>جمعة</Text>
            <Text style={styles.dayHead}>خميس</Text>
            <Text style={styles.dayHead}>أربعاء</Text>
            <Text style={styles.dayHead}>ثلاثاء</Text>
            <Text style={styles.dayHead}>اثنين</Text>
            <Text style={styles.dayHead}>أحد</Text>
          </View>

          <View style={styles.calendarGrid}>
            {/* Dummy cells for padding (Sep overflow) */}
            {[...Array(startDayOffset)].map((_, i) => (
              <View key={`empty-${i}`} style={styles.dayCell} />
            ))}
            {days.map((d) => {
              const isSelected = selectedDay === d;
              const isHighlighted = [3, 13, 20].includes(d);
              return (
                <TouchableOpacity
                  key={d}
                  style={[
                    styles.dayCell,
                    isSelected && styles.daySelected,
                    isHighlighted && !isSelected && styles.dayHighlighted,
                  ]}
                  onPress={() => setSelectedDay(d)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      isSelected && styles.dayTextActive,
                      isHighlighted && !isSelected && styles.dayTextHighlight,
                    ]}
                  >
                    {d}
                  </Text>
                  {isSelected && (
                    <Text style={styles.selectedLabel}>مختار</Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Time Slots Section */}
        <View style={styles.timeSection}>
          <View style={styles.timeHeader}>
            <Text style={styles.timeTitle}>المواعيد المتاحة</Text>
            <Ionicons name="time-outline" size={24} color="#0A2353" />
          </View>

          <View style={styles.slotsGrid}>
            {slots.map((slot) => (
              <TouchableOpacity
                key={slot.value}
                style={[
                  styles.slotBtn,
                  selectedSlot === slot.value && styles.slotSelected,
                ]}
                onPress={() => setSelectedSlot(slot.value)}
              >
                <Text
                  style={[
                    styles.slotBtnText,
                    selectedSlot === slot.value && styles.slotBtnTextActive,
                  ]}
                >
                  {slot.time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.cancelBtn}>
              <Text style={styles.cancelTxt}>إلغاء</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.continueBtn}>
              <Text style={styles.continueTxt}>الاستمرار للخطوة ٢</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "#FFF",
  },
  headerLogo: {
    fontFamily: "Cairo-Bold",
    fontSize: 24,
    color: "#0A2353",
  },
  headerAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#EDF0F5",
  },
  scroll: {
    paddingBottom: 120,
  },
  stepperContainer: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 30,
  },
  stepBox: {
    alignItems: "center",
  },
  stepDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  stepActive: {
    backgroundColor: "#0A2353",
  },
  stepInactive: {
    backgroundColor: "#EDF0F5",
  },
  stepNumActive: {
    fontFamily: "Cairo-Bold",
    color: "#FFF",
    fontSize: 14,
  },
  stepNumInactive: {
    fontFamily: "Cairo-Bold",
    color: "#0A2353",
    fontSize: 14,
  },
  stepLabelActive: {
    fontFamily: "Cairo-Bold",
    fontSize: 11,
    color: "#0A2353",
  },
  stepLabelInactive: {
    fontFamily: "Cairo-Bold",
    fontSize: 11,
    color: "#AAA",
  },
  stepLine: {
    width: 40,
    height: 1.5,
    backgroundColor: "#D1D9E6",
    marginHorizontal: 10,
    marginTop: -20,
  },

  lawyerCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 25,
    borderRadius: 24,
    padding: 15,
    flexDirection: "row-reverse",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 25,
  },
  lawyerAvatarImg: {
    width: 70,
    height: 70,
    borderRadius: 16,
  },
  lawyerInfo: {
    flex: 1,
    marginRight: 15,
    alignItems: "flex-end",
  },
  lawyerName: {
    fontFamily: "Cairo-Bold",
    fontSize: 18,
    color: "#0A2353",
  },
  lawyerTitle: {
    fontFamily: "Cairo-Regular",
    fontSize: 12,
    color: "#888",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    fontFamily: "Cairo-Bold",
    fontSize: 11,
    color: "#C49B3B",
    marginRight: 5,
  },
  settingsIcon: {
    position: "absolute",
    top: 55,
    right: 15,
    backgroundColor: "#957116",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFF",
  },

  sectionWrap: {
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  sectionLabel: {
    fontFamily: "Cairo-Bold",
    fontSize: 14,
    color: "#888",
    textAlign: "right",
    marginBottom: 15,
  },
  sessionBtn: {
    backgroundColor: "#FFF",
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: 18,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#EEE",
    marginBottom: 12,
  },
  sessionActive: {
    borderColor: "#0A2353",
  },
  sessionBtnText: {
    flex: 1,
    marginRight: 15,
    alignItems: "flex-end",
  },
  sessionTitle: {
    fontFamily: "Cairo-Bold",
    fontSize: 15,
    color: "#0A2353",
  },
  sessionSubtitle: {
    fontFamily: "Cairo-Regular",
    fontSize: 11,
    color: "#AAA",
    marginTop: 2,
  },
  checkCircle: {
    backgroundColor: "#0A2353",
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },

  priceBanner: {
    backgroundColor: "#FEF4D9",
    marginHorizontal: 25,
    height: 75,
    borderRadius: 16,
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  priceLabel: {
    fontFamily: "Cairo-Regular",
    fontSize: 12,
    color: "#957116",
    flex: 1,
    textAlign: "right",
  },
  priceValue: {
    fontFamily: "Cairo-Bold",
    fontSize: 24,
    color: "#0A2353",
  },
  cardIconBox: {
    position: "absolute",
    left: 20,
    top: 25,
  },

  calendarCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 25,
    borderRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 3,
    marginBottom: 30,
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  monthName: {
    fontFamily: "Cairo-Bold",
    fontSize: 18,
    color: "#0A2353",
  },
  daysHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  dayHead: {
    fontFamily: "Cairo-Bold",
    fontSize: 11,
    color: "#AAA",
    width: width / 9,
    textAlign: "center",
  },
  calendarGrid: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
  },
  dayCell: {
    width: (width - 90) / 7,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  dayText: {
    fontFamily: "Cairo-Bold",
    fontSize: 14,
    color: "#555",
  },
  daySelected: {
    backgroundColor: "#051128",
    borderRadius: 12,
  },
  dayTextActive: {
    color: "#FFF",
  },
  selectedLabel: {
    fontFamily: "Cairo-Bold",
    fontSize: 7,
    color: "#FFF",
    marginTop: -2,
  },
  dayHighlighted: {
    backgroundColor: "#FEF4D9",
    borderRadius: 12,
  },
  dayTextHighlight: {
    color: "#0A2353",
  },

  timeSection: {
    backgroundColor: "#FFF",
    marginHorizontal: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 10,
  },
  timeHeader: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  timeTitle: {
    fontFamily: "Cairo-Bold",
    fontSize: 17,
    color: "#0A2353",
    marginRight: 10,
  },
  slotsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  slotBtn: {
    width: "48%",
    backgroundColor: "#F7F8FA",
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  slotSelected: {
    backgroundColor: "#051128",
  },
  slotBtnText: {
    fontFamily: "Cairo-Bold",
    fontSize: 14,
    color: "#0A2353",
  },
  slotBtnTextActive: {
    color: "#FFF",
  },
  actionRow: {
    flexDirection: "row",
    marginTop: 35,
    paddingBottom: 20,
  },
  cancelBtn: {
    flex: 1,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelTxt: {
    fontFamily: "Cairo-Bold",
    fontSize: 16,
    color: "#0A2353",
  },
  continueBtn: {
    flex: 2,
    backgroundColor: "#051128",
    height: 56,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  continueTxt: {
    fontFamily: "Cairo-Bold",
    fontSize: 16,
    color: "#FFF",
  },
});
