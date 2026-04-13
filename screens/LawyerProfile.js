import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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

export default function LawyerProfile() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Ionicons name="share-social-outline" size={24} color="#0A2353" />
        <Text style={styles.headerLogo}>وكيلي</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#0A2353" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHero}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400",
            }}
            style={styles.profileCover}
          />
          <View style={styles.avatarMain}>
            <Image
              source={{ uri: "https://i.pravatar.cc/200?u=lawyer1" }}
              style={styles.lawyerImg}
            />
            <View style={styles.onlineStatus} />
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.lawyerName}>المستشار خالد</Text>
          <View style={styles.tagRow}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>قانون الشركات</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>التحكيم</Text>
            </View>
          </View>
          <View style={styles.locRow}>
            <Text style={styles.locTxt}>مركز دبي للمال العالمي (DIFC)</Text>
            <Ionicons name="location-outline" size={14} color="#888" />
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.contactBtn}>
              <Text style={styles.contactBtnText}>اتصل بي</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bookBtn}
              onPress={() => router.push("/booking")}
            >
              <Text style={styles.bookBtnText}>احجز جلسة</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statVal}>450+</Text>
            <Text style={styles.statLabel}>القضايا</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statVal}>15+</Text>
            <Text style={styles.statLabel}>سنوات الخبرة</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statVal}>4.9</Text>
            <Text style={styles.statLabel}>تقييم العملاء</Text>
            <Ionicons name="star" size={10} color="#C49B3B" />
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsLayout}>
          <TouchableOpacity style={[styles.tabBtn, styles.tabActive]}>
            <Text style={[styles.tabText, styles.tabTextActive]}>
              السيرة والخبرة
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBtn}>
            <Text style={styles.tabText}>التعليم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBtn}>
            <Text style={styles.tabText}>آخر الأنشطة</Text>
          </TouchableOpacity>
        </View>

        {/* Timeline Content */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionHeading}>المسيرة المهنية</Text>

          <View style={styles.timeline}>
            <View style={styles.timelineItem}>
              <View style={styles.timeIconBox}>
                <Ionicons name="briefcase" size={14} color="#FFF" />
              </View>
              <View style={styles.timeCard}>
                <Text style={styles.timeYear}>2018 - الحاضر</Text>
                <Text style={styles.timeTitle}>شريك إداري أول</Text>
                <Text style={styles.timeBody}>
                  الجمعي ومشاركوه - قسم الشركات. قيادة قضايا التفاوض المعقدة عبر
                  الحدود.
                </Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timeIconBox}>
                <Ionicons name="school" size={14} color="#FFF" />
              </View>
              <View style={styles.timeCard}>
                <Text style={styles.timeYear}>2012 - 2018</Text>
                <Text style={styles.timeTitle}>مستشار قانوني أول</Text>
                <Text style={styles.timeBody}>
                  مجموعة الإمارات للاستثمار. الإشراف على الإطار القانوني
                  الداخلي.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Booking Card Section */}
        <View style={styles.bookingContainer}>
          <View style={styles.bookingHeader}>
            <Text style={styles.bookingTitle}>حجز استشارة</Text>
            <MaterialCommunityIcons
              name="calendar-clock"
              size={24}
              color="#0A2353"
            />
          </View>

          <Text style={styles.bookingLabel}>نوع الجلسة</Text>
          <View style={styles.typeRow}>
            <TouchableOpacity style={styles.typeBtn}>
              <Ionicons name="call" size={18} color="#888" />
              <Text style={styles.typeBtnTxt}>مكالمة هاتفية</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.typeBtn, styles.typeActive]}>
              <Ionicons name="office" size={18} color="#0A2353" />
              <Text style={styles.typeActiveTxt}>في المكتب</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.calendarStrip}>
            <Text style={styles.monthLabel}>
              المواعيد المتاحة - أكتوبر ٢٠٢٤
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.daysScroll}
            >
              {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                <TouchableOpacity
                  key={d}
                  style={[styles.dayChip, d === 2 && styles.dayActive]}
                >
                  <Text style={[styles.dayNum, d === 2 && styles.dayNumActive]}>
                    {d}
                  </Text>
                  <Text
                    style={[styles.dayName, d === 2 && styles.dayNameActive]}
                  >
                    الاثنين
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>طلب موعد</Text>
            <Ionicons name="arrow-forward" size={18} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.verifBanner}>
          <Ionicons name="shield-checkmark" size={20} color="#C49B3B" />
          <Text style={styles.verifTxt}>محامٍ معتمد من المنصة</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
  },
  headerLogo: {
    fontFamily: "Cairo-Bold",
    fontSize: 22,
    color: "#0A2353",
  },
  profileHero: {
    height: 180,
    alignItems: "center",
  },
  profileCover: {
    width: "100%",
    height: 140,
    backgroundColor: "#0A2353",
  },
  avatarMain: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#FFF",
    marginTop: -50,
    position: "relative",
  },
  lawyerImg: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  onlineStatus: {
    position: "absolute",
    bottom: 5,
    right: 5,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#4CAF50",
    borderWidth: 3,
    borderColor: "#FFF",
  },
  infoBox: {
    alignItems: "center",
    padding: 20,
  },
  lawyerName: {
    fontFamily: "Cairo-Bold",
    fontSize: 24,
    color: "#0A2353",
  },
  tagRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  tag: {
    backgroundColor: "#F0F2F5",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  tagText: {
    fontFamily: "Cairo-Bold",
    fontSize: 12,
    color: "#555",
  },
  locRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  locTxt: {
    fontFamily: "Cairo-Regular",
    fontSize: 13,
    color: "#888",
    marginRight: 6,
  },
  actionRow: {
    flexDirection: "row",
    marginTop: 25,
    width: "100%",
  },
  bookBtn: {
    flex: 1,
    backgroundColor: "#0A2353",
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  bookBtnText: {
    fontFamily: "Cairo-Bold",
    fontSize: 15,
    color: "#FFF",
  },
  contactBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#0A2353",
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  contactBtnText: {
    fontFamily: "Cairo-Bold",
    fontSize: 15,
    color: "#0A2353",
  },

  statsRow: {
    flexDirection: "row-reverse",
    paddingHorizontal: 30,
    marginVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  statItem: {
    alignItems: "center",
  },
  statVal: {
    fontFamily: "Cairo-Bold",
    fontSize: 20,
    color: "#0A2353",
  },
  statLabel: {
    fontFamily: "Cairo-Regular",
    fontSize: 12,
    color: "#888",
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: "#EEE",
  },

  tabsLayout: {
    flexDirection: "row-reverse",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    paddingHorizontal: 20,
  },
  tabBtn: {
    paddingVertical: 15,
    marginHorizontal: 10,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: "#C49B3B",
  },
  tabText: {
    fontFamily: "Cairo-Bold",
    fontSize: 14,
    color: "#AAA",
  },
  tabTextActive: {
    color: "#0A2353",
  },

  contentSection: {
    padding: 24,
  },
  sectionHeading: {
    fontFamily: "Cairo-Bold",
    fontSize: 18,
    color: "#0A2353",
    textAlign: "right",
    marginBottom: 20,
  },
  timeline: {
    paddingRight: 15,
  },
  timelineItem: {
    flexDirection: "row-reverse",
    marginBottom: 25,
  },
  timeIconBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#0A2353",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  timeCard: {
    flex: 1,
    marginRight: 15,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  timeYear: {
    fontFamily: "Cairo-Bold",
    fontSize: 12,
    color: "#C49B3B",
  },
  timeTitle: {
    fontFamily: "Cairo-Bold",
    fontSize: 15,
    color: "#0A2353",
    marginTop: 5,
  },
  timeBody: {
    fontFamily: "Cairo-Regular",
    fontSize: 12,
    color: "#666",
    lineHeight: 18,
    marginTop: 5,
  },

  bookingContainer: {
    backgroundColor: "#F9FAFC",
    margin: 20,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  bookingHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bookingTitle: {
    fontFamily: "Cairo-Bold",
    fontSize: 18,
    color: "#0A2353",
  },
  bookingLabel: {
    fontFamily: "Cairo-Bold",
    fontSize: 13,
    color: "#555",
    textAlign: "right",
    marginBottom: 12,
  },
  typeRow: {
    flexDirection: "row-reverse",
    marginBottom: 25,
  },
  typeBtn: {
    flex: 1,
    flexDirection: "row-reverse",
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    marginLeft: 10,
  },
  typeActive: {
    borderColor: "#0A2353",
    backgroundColor: "rgba(10,35,83,0.05)",
  },
  typeBtnTxt: {
    fontFamily: "Cairo-Bold",
    fontSize: 13,
    color: "#888",
    marginRight: 8,
  },
  typeActiveTxt: {
    fontFamily: "Cairo-Bold",
    fontSize: 13,
    color: "#0A2353",
    marginRight: 8,
  },
  calendarStrip: {
    marginBottom: 25,
  },
  monthLabel: {
    fontFamily: "Cairo-Regular",
    fontSize: 12,
    color: "#888",
    textAlign: "right",
    marginBottom: 15,
  },
  daysScroll: {
    flexDirection: "row-reverse",
  },
  dayChip: {
    width: 50,
    height: 60,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    backgroundColor: "#FFF",
    marginLeft: 10,
  },
  dayActive: {
    backgroundColor: "#0A2353",
    borderColor: "#0A2353",
  },
  dayNum: {
    fontFamily: "Cairo-Bold",
    fontSize: 16,
    color: "#555",
  },
  dayNumActive: {
    color: "#FFF",
  },
  dayName: {
    fontFamily: "Cairo-Regular",
    fontSize: 10,
    color: "#AAA",
  },
  dayNameActive: {
    color: "#A0B3D9",
  },
  submitBtn: {
    backgroundColor: "#C49B3B",
    height: 54,
    borderRadius: 14,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  submitBtnText: {
    fontFamily: "Cairo-Bold",
    fontSize: 16,
    color: "#FFF",
    marginLeft: 10,
  },
  verifBanner: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF0F5",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    marginBottom: 40,
  },
  verifTxt: {
    fontFamily: "Cairo-Bold",
    fontSize: 12,
    color: "#0A2353",
    marginRight: 8,
  },
});
