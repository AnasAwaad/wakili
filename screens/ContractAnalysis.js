import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  SafeAreaView,
  Dimensions
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function ContractAnalysis() {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity><Ionicons name="notifications-outline" size={24} color="#0A2353" /></TouchableOpacity>
          <Image source={{ uri: 'https://i.pravatar.cc/100?u=user' }} style={styles.userAvatar} />
        </View>
        <Text style={styles.headerLogo}>وكيلي</Text>
        <Ionicons name="menu-outline" size={28} color="#0A2353" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        
        {/* Upload Card */}
        <View style={styles.uploadCard}>
           <View style={styles.uploadZone}>
              <View style={styles.cloudIconBox}>
                 <Ionicons name="cloud-upload" size={32} color="#C49B3B" />
              </View>
              <Text style={styles.uploadTitle}>تحليل العقود بالذكاء الاصطناعي</Text>
              <Text style={styles.uploadSubtitle}>قم بسحب وإفلات ملف العقد (PDF) هنا لاستخراج الكيانات والبنود تلقائياً</Text>
              
              <TouchableOpacity style={styles.uploadBtn}>
                 <Text style={styles.uploadBtnTxt}>تحليل المستند</Text>
                 <Ionicons name="document-text" size={18} color="#FFF" style={{marginLeft: 10}} />
              </TouchableOpacity>

              <View style={styles.formatRow}>
                 <View style={styles.formatChip}><Text style={styles.formatText}>PDF</Text></View>
                 <View style={styles.formatChip}><Text style={styles.formatText}>DOCX</Text></View>
              </View>
           </View>
        </View>

        {/* Extracted Entities */}
        <View style={styles.sectionWrap}>
           <View style={styles.sectionHeader}>
              <View style={styles.activeBadge}><Text style={styles.activeBadgeTxt}>نشط</Text></View>
              <Text style={styles.sectionTitle}>الكيانات المستخرجة</Text>
              <Ionicons name="grid-outline" size={20} color="#0A2353" />
           </View>

           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.statsScroll}>
              <View style={styles.statCard}>
                 <View style={[styles.statIconBox, { backgroundColor: '#051128' }]}><Ionicons name="people" size={16} color="#FFF" /></View>
                 <Text style={styles.statLabel}>أطراف التعاقد</Text>
                 <Text style={styles.statVal}>02</Text>
              </View>
              <View style={styles.statCard}>
                 <View style={[styles.statIconBox, { backgroundColor: '#FFEBEE' }]}><Ionicons name="calendar" size={18} color="#F44336" /></View>
                 <Text style={styles.statLabel}>تواريخ هامة</Text>
                 <Text style={styles.statVal}>04</Text>
              </View>
              <View style={styles.statCard}>
                 <View style={[styles.statIconBox, { backgroundColor: '#FFF9C4' }]}><Ionicons name="cash" size={18} color="#FBC02D" /></View>
                 <Text style={styles.statLabel}>القيم والالتزامات</Text>
                 <Text style={styles.statVal}>12,500$</Text>
              </View>
              <View style={styles.statCard}>
                 <View style={[styles.statIconBox, { backgroundColor: '#EDF0F5' }]}><Ionicons name="location" size={18} color="#0A2353" /></View>
                 <Text style={styles.statLabel}>الاختصاص القضائي</Text>
                 <Text style={styles.statVal}>القانون السعودي</Text>
              </View>
           </ScrollView>
        </View>

        {/* Results Section */}
        <View style={styles.resultsContainer}>
           <View style={styles.tabsRow}>
              <TouchableOpacity 
                style={[styles.tabBtn, activeTab === 'spirits' && styles.tabActive]}
                onPress={() => setActiveTab('spirits')}
              >
                <Text style={[styles.tabText, activeTab === 'spirits' && styles.tabTextActive]}>من روح الذكي</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tabBtn, activeTab === 'items' && styles.tabActive]}
                onPress={() => setActiveTab('items')}
              >
                <Text style={[styles.tabText, activeTab === 'items' && styles.tabTextActive]}>بنود العقد</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tabBtn, activeTab === 'summary' && styles.tabActive]}
                onPress={() => setActiveTab('summary')}
              >
                <Text style={[styles.tabText, activeTab === 'summary' && styles.tabTextActive]}>ملخص التحليل</Text>
              </TouchableOpacity>
           </View>

           <View style={styles.tabContent}>
              <View style={styles.analysisHeader}>
                 <TouchableOpacity style={styles.downloadReport}>
                    <Text style={styles.downloadTxt}>تحميل التقرير</Text>
                    <Ionicons name="download-outline" size={16} color="#0A2353" />
                 </TouchableOpacity>
                 <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.resultTitle}>نتائج التحليل الأولي</Text>
                    <Text style={styles.resultSubtitle}>تمت المراجعة بواسطة محرك وكيلي للذكاء الاصطناعي</Text>
                 </View>
              </View>

              <View style={styles.summaryCard}>
                 <Text style={styles.summaryTitle}>الخلاصة التنفيذية</Text>
                 <Text style={styles.summaryText}>
                    يتمثل هذا المستند في عقد توريد خدمات تقنية بين شركة "ألما" للحلول البرمجية ومؤسسة "بيتا" التجارية. العقد محدد المدة بسنة واحدة، ويتضمن بنوداً صارمة تتعلق بسرية البيانات والتعويضات في حال التأخير.
                 </Text>
              </View>

              <View style={styles.metricCard}>
                 <View style={styles.metricRow}>
                    <Text style={styles.metricLabel}>مستوى المخاطرة</Text>
                    <Text style={[styles.metricStatus, { color: '#D32F2F' }]}>منخفضة</Text>
                 </View>
                 <View style={styles.riskBar}>
                    <View style={[styles.riskProgress, { width: '80%', backgroundColor: '#D32F2F' }]} />
                 </View>
              </View>

              <View style={styles.statusCard}>
                 <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                 <Text style={styles.statusText}>متوافق مع الأنظمة المحلية</Text>
                 <Text style={styles.statusLabel}>الحالة القانونية</Text>
              </View>

              <Text style={styles.gapsTitle}>أبرز الثغرات المكتشفة</Text>

              <View style={[styles.gapCard, { borderRightColor: '#D32F2F' }]}>
                 <View style={styles.gapIconBox}><Ionicons name="warning" size={18} color="#D32F2F" /></View>
                 <View style={styles.gapInfo}>
                    <Text style={styles.gapHeading}>شرط القوة القاهرة</Text>
                    <Text style={styles.gapBody}>البند 2.14 يفتقر إلى تعريف دقيق لحالات الطوارئ الصحية العالمية.</Text>
                 </View>
              </View>

              <View style={[styles.gapCard, { borderRightColor: '#0A2353' }]}>
                 <View style={[styles.gapIconBox, { backgroundColor: '#F0F2F5' }]}><Ionicons name="information-circle" size={18} color="#0A2353" /></View>
                 <View style={styles.gapInfo}>
                    <Text style={styles.gapHeading}>تجديد العقد تلقائياً</Text>
                    <Text style={styles.gapBody}>العقد يتجدد تلقائياً ما لم يتم الإخطار قبل 30 يوماً من الانتهاء.</Text>
                 </View>
              </View>
           </View>
        </View>

        <View style={styles.expertPromo}>
           <Image source={{ uri: 'https://i.pravatar.cc/100?u=legal' }} style={styles.expertAvatar} />
           <Text style={styles.expertText}>يتوفر دعم قانوني مباشر لهذا المستند</Text>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    height: 60,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 15,
  },
  headerLogo: {
    fontFamily: 'Cairo-Bold',
    fontSize: 22,
    color: '#0A2353',
  },
  scroll: {
    paddingBottom: 120,
  },
  uploadCard: {
    padding: 25,
  },
  uploadZone: {
    borderWidth: 2,
    borderColor: '#C49B3B',
    borderStyle: 'dashed',
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  cloudIconBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FEF4D9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  uploadTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#0A2353',
    textAlign: 'center',
  },
  uploadSubtitle: {
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 18,
  },
  uploadBtn: {
    backgroundColor: '#051128',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: 25,
  },
  uploadBtnTxt: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#FFF',
  },
  formatRow: {
    flexDirection: 'row',
    marginTop: 15,
  },
  formatChip: {
    backgroundColor: '#EDF0F5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  formatText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 10,
    color: '#A0B3D9',
  },

  sectionWrap: {
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    color: '#0A2353',
    marginRight: 10,
    marginLeft: 15,
  },
  activeBadge: {
    backgroundColor: '#FFF9C4',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 6,
  },
  activeBadgeTxt: {
    fontFamily: 'Cairo-Bold',
    fontSize: 10,
    color: '#FBC02D',
  },
  statsScroll: {
    flexDirection: 'row-reverse',
  },
  statCard: {
    width: 130,
    backgroundColor: '#F9FAFC',
    borderRadius: 16,
    padding: 15,
    marginHorizontal: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  statIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  statLabel: {
    fontFamily: 'Cairo-Regular',
    fontSize: 11,
    color: '#888',
    textAlign: 'center',
  },
  statVal: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#0A2353',
    marginTop: 5,
  },

  resultsContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
    padding: 1,
  },
  tabsRow: {
    flexDirection: 'row-reverse',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 18,
    alignItems: 'center',
  },
  tabActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#C49B3B',
  },
  tabText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 13,
    color: '#AAA',
  },
  tabTextActive: {
    color: '#0A2353',
  },
  tabContent: {
    padding: 25,
  },
  analysisHeader: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  resultTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 22,
    color: '#0A2353',
  },
  resultSubtitle: {
    fontFamily: 'Cairo-Regular',
    fontSize: 11,
    color: '#AAA',
  },
  downloadReport: {
    flexDirection: 'row-reverse',
    backgroundColor: '#EDF0F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    height: 45,
  },
  downloadTxt: {
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
    color: '#0A2353',
    marginRight: 8,
  },
  summaryCard: {
    backgroundColor: '#F3F5F9',
    borderRadius: 20,
    padding: 20,
    borderRightWidth: 5,
    borderRightColor: '#C49B3B',
    marginBottom: 20,
  },
  summaryTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#0A2353',
    textAlign: 'right',
    marginBottom: 10,
  },
  summaryText: {
    fontFamily: 'Cairo-Regular',
    fontSize: 13,
    color: '#555',
    textAlign: 'right',
    lineHeight: 22,
  },
  metricCard: {
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
  },
  metricRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  metricLabel: {
    fontFamily: 'Cairo-Regular',
    fontSize: 13,
    color: '#888',
  },
  metricStatus: {
    fontFamily: 'Cairo-Bold',
    fontSize: 13,
  },
  riskBar: {
    height: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    flexDirection: 'row-reverse',
  },
  riskProgress: {
    height: '100%',
    borderRadius: 4,
  },
  statusCard: {
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 30,
  },
  statusText: {
    flex: 1,
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#333',
    marginRight: 10,
    textAlign: 'right',
  },
  statusLabel: {
    fontFamily: 'Cairo-Regular',
    fontSize: 13,
    color: '#888',
    marginLeft: 10,
  },
  gapsTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#0A2353',
    textAlign: 'right',
    marginBottom: 20,
  },
  gapCard: {
    backgroundColor: '#F9FAFC',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row-reverse',
    marginBottom: 12,
    borderRightWidth: 4,
  },
  gapIconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#FFEBEE',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  gapInfo: {
    flex: 1,
    alignItems: 'flex-end',
  },
  gapHeading: {
    fontFamily: 'Cairo-Bold',
    fontSize: 15,
    color: '#333',
  },
  gapBody: {
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
    marginTop: 3,
  },
  expertPromo: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  expertAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 10,
  },
  expertText: {
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
    color: '#888',
  }
});
