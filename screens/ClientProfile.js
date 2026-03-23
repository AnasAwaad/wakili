import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const appointments = [
  {
    id: 'WKL-#9021',
    lawyer: 'د. سارة جينكينز',
    lawyerImg: 'https://i.pravatar.cc/100?u=sarah',
    date: '24 أكتوبر 2023',
    time: '10:30 صباحاً',
    status: 'مجدول'
  },
  {
    id: 'WKL-#8842',
    lawyer: 'ماركوس ثورن',
    lawyerImg: 'https://i.pravatar.cc/100?u=marcus',
    date: '12 أكتوبر 2023',
    time: '02:00 مساءً',
    status: 'مكتمل'
  },
  {
    id: 'WKL-#8710',
    lawyer: 'أحمد الفارسي',
    lawyerImg: 'https://i.pravatar.cc/100?u=ahmad',
    date: '28 سبتمبر 2023',
    time: '09:15 صباحاً',
    status: 'ملغي'
  }
];

export default function ClientProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="settings-outline" size={24} color="#0A2353" />
        <Text style={styles.headerLogo}>وكيلي</Text>
        <Ionicons name="menu-outline" size={24} color="#0A2353" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* User Hero */}
        <LinearGradient
          colors={['#0A2353', '#051128']}
          style={styles.userHero}
        >
          <View style={styles.profileBox}>
            <View style={styles.avatarWrapper}>
               <Image source={{ uri: 'https://i.pravatar.cc/200?u=client1' }} style={styles.avatar} />
               <View style={styles.badge}><Text style={styles.badgeTxt}>بريميوم</Text></View>
            </View>
            <Text style={styles.userName}>المستشار خالد</Text>
            <Text style={styles.userRole}>مستشار استراتيجي وشريك أول</Text>
            
            <View style={styles.metaRow}>
               <View style={styles.metaItem}>
                  <Text style={styles.metaTxt}>انضم في مارس ٢٠٢٢</Text>
                  <Ionicons name="calendar-outline" size={14} color="#A0B3D9" />
               </View>
            </View>

            <View style={styles.contactRow}>
               <View style={styles.contactItem}>
                  <Text style={styles.contactTxt}>khalid.counsel@wakili.legal</Text>
                  <Ionicons name="mail-outline" size={14} color="#A0B3D9" />
               </View>
               <View style={styles.contactItem}>
                  <Text style={styles.contactTxt}>دبي، الإمارات العربية المتحدة</Text>
                  <Ionicons name="location-outline" size={14} color="#A0B3D9" />
               </View>
            </View>

            <TouchableOpacity style={styles.editBtn}>
               <Ionicons name="pencil" size={16} color="#FFF" />
               <Text style={styles.editBtnTxt}>تعديل الملف</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Tabs */}
        <View style={styles.tabs}>
           <TouchableOpacity style={[styles.tab, styles.tabActive]}>
              <Text style={[styles.tabTxt, styles.tabTxtActive]}>المواعيد</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabTxt}>آخر النشاطات</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabTxt}>المحامون المفضلون</Text>
           </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.section}>
           <Text style={styles.sectionTitle}>سجل المواعيد</Text>
           <View style={styles.filterRow}>
              <TouchableOpacity style={styles.filterBtn}><Text style={styles.filterTxt}>جميع الحالات</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.filterBtn, styles.filterActive]}><Text style={styles.filterActiveTxt}>آخر ٣٠ يوم</Text></TouchableOpacity>
           </View>

           {/* Table Header */}
           <View style={styles.tableHeader}>
              <Text style={[styles.tableHead, { flex: 1.5 }]}>المعرف</Text>
              <Text style={[styles.tableHead, { flex: 3 }]}>اسم المحامي</Text>
              <Text style={[styles.tableHead, { flex: 2.5, textAlign: 'center' }]}>التاريخ والوقت</Text>
           </View>

           {/* Appointment Rows */}
           {appointments.map(apt => (
             <View key={apt.id} style={styles.aptRow}>
                <View style={{ flex: 1.5 }}>
                   <Text style={styles.aptId}>{apt.id}</Text>
                </View>
                <View style={{ flex: 3, flexDirection: 'row-reverse', alignItems: 'center' }}>
                   <Image source={{ uri: apt.lawyerImg }} style={styles.lawyerImg} />
                   <Text style={styles.lawyerName}>{apt.lawyer}</Text>
                </View>
                <View style={{ flex: 2.5, alignItems: 'center' }}>
                   <Text style={styles.aptDate}>{apt.date}</Text>
                   <Text style={styles.aptTime}>{apt.time}</Text>
                </View>
             </View>
           ))}

           <TouchableOpacity style={styles.seeAllBtn}>
              <Text style={styles.seeAllTxt}>عرض جميع المواعيد</Text>
           </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  headerLogo: {
    fontFamily: 'Cairo-Bold',
    fontSize: 22,
    color: '#0A2353',
  },
  scroll: {
    paddingBottom: 120,
  },
  userHero: {
    padding: 30,
    paddingTop: 10,
    paddingBottom: 40,
  },
  profileBox: {
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  badge: {
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
    backgroundColor: '#C49B3B',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0A2353',
  },
  badgeTxt: {
    fontFamily: 'Cairo-Bold',
    fontSize: 10,
    color: '#FFF',
  },
  userName: {
    fontFamily: 'Cairo-Bold',
    fontSize: 28,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10,
  },
  userRole: {
    fontFamily: 'Cairo-Regular',
    fontSize: 15,
    color: '#A0B3D9',
    textAlign: 'center',
    marginBottom: 20,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  metaItem: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  metaTxt: {
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
    color: '#A0B3D9',
    marginRight: 8,
  },
  contactRow: {
    alignItems: 'center',
    marginTop: 10,
  },
  contactItem: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 5,
  },
  contactTxt: {
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
    color: '#A0B3D9',
    marginRight: 8,
  },
  editBtn: {
    flexDirection: 'row-reverse',
    backgroundColor: '#C49B3B',
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    alignItems: 'center',
  },
  editBtnTxt: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#FFF',
    marginRight: 8,
  },

  tabs: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 15,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  tabActive: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    borderBottomWidth: 0,
  },
  tabTxt: {
    fontFamily: 'Cairo-Bold',
    fontSize: 13,
    color: '#888',
  },
  tabTxtActive: {
    color: '#0A2353',
  },

  section: {
    padding: 24,
  },
  sectionTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#0A2353',
    textAlign: 'right',
    marginBottom: 20,
  },
  filterRow: {
    flexDirection: 'row-reverse',
    marginBottom: 25,
  },
  filterBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#F9FAFC',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  filterActive: {
    backgroundColor: '#FFF',
    borderColor: '#EEE',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
  },
  filterTxt: {
    fontFamily: 'Cairo-Bold',
    fontSize: 13,
    color: '#888',
  },
  filterActiveTxt: {
    fontFamily: 'Cairo-Bold',
    fontSize: 13,
    color: '#0A2353',
  },

  tableHeader: {
    flexDirection: 'row-reverse',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#F9FAFC',
    borderRadius: 10,
    marginBottom: 10,
  },
  tableHead: {
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
    color: '#888',
  },
  aptRow: {
    flexDirection: 'row-reverse',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
    alignItems: 'center',
  },
  aptId: {
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
    color: '#AAA',
  },
  lawyerImg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 10,
  },
  lawyerName: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#0A2353',
  },
  aptDate: {
    fontFamily: 'Cairo-Bold',
    fontSize: 13,
    color: '#333',
  },
  aptTime: {
    fontFamily: 'Cairo-Regular',
    fontSize: 11,
    color: '#888',
  },
  seeAllBtn: {
    marginTop: 30,
    alignItems: 'center',
    paddingVertical: 10,
  },
  seeAllTxt: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#0A2353',
    textDecorationLine: 'underline',
  }
});
