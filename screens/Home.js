import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

      {/* 1. Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.profileIcon}
          onPress={() => router.push('/(auth)/login')}
        >
          <Image
            source={{ uri: 'https://i.pravatar.cc/100?u=wakili' }}
            style={styles.avatarImg}
          />
        </TouchableOpacity>
        <Text style={styles.headerLogoText}>وكيلي</Text>
      </View>

      {/* 2. Hero Section */}
      <View style={styles.heroWrapper}>
        <LinearGradient
          colors={['#0A2353', '#051128']}
          style={styles.heroGradient}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>ابحث عن{"\n"}محاميك{"\n"}الموثوق</Text>
            <Text style={styles.heroSubtitle}>
              وكيلي هو دليلك الأمثل لأفضل الخبرات القانونية في المملكة. استشارات دقيقة وسرعة في الأداء وخصوصية تامة لجميع قضاياك.
            </Text>

            {/* Search Bar */}
            <View style={styles.searchBox}>
              <View style={styles.searchInputWrapper}>
                <Ionicons name="search" size={20} color={colors.neutral.muted} style={styles.searchIcon} />
                <TextInput
                  placeholder="ما هو نوع التخصص القانوني الذي تبحث عنه؟"
                  placeholderTextColor={colors.neutral.muted}
                  style={styles.searchInput}
                  textAlign="right"
                />
              </View>
              <TouchableOpacity 
          style={styles.primaryBtn}
          onPress={() => router.push('/(tabs)/discovery')}
        >
           <Text style={styles.primaryBtnText}>ابدأ قضيتك الآن</Text>
        </TouchableOpacity>
            </View>

            {/* Hero Stats */}
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>1,200+</Text>
                <Text style={styles.statLabel}>محامٍ معتمد</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>15,000+</Text>
                <Text style={styles.statLabel}>استشارة ناجحة</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>98%</Text>
                <Text style={styles.statLabel}>رضا العملاء</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>

      {/* 3. How It Works Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>كيف يعمل وكيلي؟</Text>
          <View style={styles.goldUnderline} />
        </View>

        <View style={styles.stepCard}>
          <View style={[styles.stepIconCircle, { backgroundColor: '#E8EDF5' }]}>
            <Ionicons name="person-add" size={24} color="#0A2353" />
          </View>
          <Text style={styles.stepTitle}>سجل معنا</Text>
          <Text style={styles.stepDesc}>أنشئ حسابك الخاص كطالب خدمة وباشر برحلة قانونية في بيئة آمنة ومتطورة.</Text>
        </View>

        <View style={styles.stepCard}>
          <View style={[styles.stepIconCircle, { backgroundColor: '#FEF4D9' }]}>
            <Ionicons name="search" size={24} color="#C49B3B" />
          </View>
          <Text style={styles.stepTitle}>ابحث عن محامٍ</Text>
          <Text style={styles.stepDesc}>استخدم محرك البحث الخاص لتصفية المحامين حسب التخصص، الموقع والقيم الأخلاقية.</Text>
        </View>

        <View style={styles.stepCard}>
          <View style={[styles.stepIconCircle, { backgroundColor: '#0A2353' }]}>
            <Ionicons name="calendar" size={24} color="#FFF" />
          </View>
          <Text style={styles.stepTitle}>احجز جلسة</Text>
          <Text style={styles.stepDesc}>اختر الموعد الأنسب لجدولك الزمني واستعد لتجربة فريدة من المشورة أو عبر الاتصال الذكي.</Text>
        </View>
      </View>

      {/* 4. Testimonials (Client Reviews) */}
      <View style={[styles.sectionContainer, styles.reviewsSection]}>
        <Text style={styles.reviewsLabel}>ماذا يقول عملاؤنا؟</Text>
        <Text style={styles.reviewsSubLabel}>نفتخر بخدمة آلاف العملاء ومساهمتنا في تسهيل شؤونهم القانونية عبر منصة وكيلي المتطورة.</Text>
        <TouchableOpacity style={styles.seeAllLink}>
          <Ionicons name="arrow-back" size={16} color={colors.primary.default} />
          <Text style={styles.seeAllText}>شاهد جميع التقييمات</Text>
        </TouchableOpacity>

        {/* Review Cards (Simple column for this landing view) */}
        <View style={styles.reviewCard}>
          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map(i => <Ionicons key={i} name="star" size={14} color="#C49B3B" />)}
          </View>
          <Text style={styles.reviewText}>
            "تجربة استثنائية جداً! تمكنت من العثور على محامٍ متخصص في إعادة التجديد العقاري في أقل من دقيقتين. الخدمة كانت رائعة وسهولة التصفح مميزة."
          </Text>
          <View style={styles.reviewerInfo}>
            <View style={styles.reviewerText}>
              <Text style={styles.reviewerName}>م. خالد المطيري</Text>
              <Text style={styles.reviewerRole}>خبير عقاري</Text>
            </View>
            <Image source={{ uri: 'https://i.pravatar.cc/100?u=khaled' }} style={styles.reviewerAvatar} />
          </View>
        </View>

        <View style={styles.reviewCard}>
          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map(i => <Ionicons key={i} name="star" size={14} color="#C49B3B" />)}
          </View>
          <Text style={styles.reviewText}>
            "وكيلي سهل لي الكثير من الجهد، وكان استشاري قانوني متخصصاً ومهنياً. المنصة توفر سهولة في اختيار المحامي الذي تفضله."
          </Text>
          <View style={styles.reviewerInfo}>
            <View style={styles.reviewerText}>
              <Text style={styles.reviewerName}>سارة المنصور</Text>
              <Text style={styles.reviewerRole}>رائدة أعمال</Text>
            </View>
            <Image source={{ uri: 'https://i.pravatar.cc/100?u=sarah' }} style={styles.reviewerAvatar} />
          </View>
        </View>
      </View>

      {/* 5. Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerLogo}>وكيلي</Text>
        <Text style={styles.footerAbout}>
          المنصة القانونية الأكثر ثقة في الشرق الأوسط، نسعى لتمكين الأفراد والشركات من الوصول لأفضل الاستشارات القانونية والموثوقة بسرعة وأمان.
        </Text>

        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.socialBtn}><Ionicons name="logo-linkedin" size={20} color="#FFF" /></TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}><Ionicons name="logo-twitter" size={20} color="#FFF" /></TouchableOpacity>
        </View>

        <View style={styles.footerMenu}>
          <Text style={styles.footerMenuTitle}>روابط سريعة</Text>
          <Text style={styles.footerLink}>من نحن</Text>
          <Text style={styles.footerLink}>الأسئلة الشائعة</Text>
          <Text style={styles.footerLink}>سياسة الخصوصية</Text>
        </View>

        {/* Newsletter */}
        <Text style={styles.newsletterTitle}>النشرة البريدية</Text>
        <Text style={styles.newsletterDesc}>انضم لقائمتنا البريدية للحصول على آخر التحديثات.</Text>
        <View style={styles.newsletterBox}>
          <TextInput
            placeholder="بريدك الإلكتروني"
            placeholderTextColor="#888"
            style={styles.newsInput}
            textAlign="right"
          />
          <TouchableOpacity style={styles.newsBtn}>
            <Ionicons name="send" size={18} color="#FFF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.copyright}>جميع الحقوق محفوظة لمنصة وكيلي ٢٠٢٤</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 40,
  },
  scroll: {
    paddingBottom: 120, // Extra space for floating tab bar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 60,
  },
  headerLogoText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 22,
    color: '#0A2353',
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#EEE',
    overflow: 'hidden',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
  },

  // Hero Section
  heroWrapper: {
    marginTop: 10,
  },
  heroGradient: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  heroContent: {
    alignItems: 'flex-end',
  },
  heroTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 42,
    color: '#FFF',
    textAlign: 'right',
    lineHeight: 52,
  },
  heroSubtitle: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#A0B3D9',
    textAlign: 'right',
    marginTop: 15,
    lineHeight: 22,
  },
  searchBox: {
    width: '100%',
    marginTop: 30,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 6,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingHorizontal: 10,
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Cairo-Regular',
    fontSize: 13,
    color: '#333',
  },
  searchButton: {
    backgroundColor: '#C49B3B',
    borderRadius: 8,
    height: 44,
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#FFF',
  },
  statsRow: {
    flexDirection: 'row-reverse',
    marginTop: 40,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'flex-end',
  },
  statValue: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#D4AF37',
  },
  statLabel: {
    fontFamily: 'Cairo-Regular',
    fontSize: 11,
    color: '#FFF',
    opacity: 0.7,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },

  // Section styling
  sectionContainer: {
    padding: 24,
    alignItems: 'flex-end',
  },
  sectionHeader: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  sectionTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 26,
    color: '#0A2353',
    textAlign: 'right',
  },
  goldUnderline: {
    width: 60,
    height: 4,
    backgroundColor: '#C49B3B',
    marginTop: 4,
    borderRadius: 2,
  },

  // Step cards
  stepCard: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 35,
  },
  stepIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  stepTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    color: '#0A2353',
    marginBottom: 8,
  },
  stepDesc: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },

  // Reviews section
  reviewsSection: {
    backgroundColor: '#F9FAFC',
    marginTop: 20,
  },
  reviewsLabel: {
    fontFamily: 'Cairo-Bold',
    fontSize: 24,
    color: '#0A2353',
  },
  reviewsSubLabel: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
    marginTop: 10,
    lineHeight: 20,
  },
  seeAllLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  seeAllText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#0A2353',
    marginLeft: 8,
  },
  reviewCard: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  starsRow: {
    flexDirection: 'row-reverse',
    marginBottom: 12,
  },
  reviewText: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#333',
    textAlign: 'right',
    lineHeight: 22,
  },
  reviewerInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  reviewerText: {
    marginRight: 12,
    alignItems: 'flex-end',
  },
  reviewerName: {
    fontFamily: 'Cairo-Bold',
    fontSize: 15,
    color: '#0A2353',
  },
  reviewerRole: {
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
    color: '#888',
  },
  reviewerAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  // Footer
  footer: {
    backgroundColor: '#0A2353',
    padding: 30,
    alignItems: 'flex-end',
  },
  footerLogo: {
    fontFamily: 'Cairo-Bold',
    fontSize: 24,
    color: '#FFF',
  },
  footerAbout: {
    fontFamily: 'Cairo-Regular',
    fontSize: 13,
    color: '#A0B3D9',
    textAlign: 'right',
    marginTop: 15,
    lineHeight: 20,
  },
  socialIcons: {
    flexDirection: 'row-reverse',
    marginTop: 20,
  },
  socialBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  footerMenu: {
    marginTop: 30,
    alignItems: 'flex-end',
  },
  footerMenuTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#D4AF37',
    marginBottom: 10,
  },
  footerLink: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#FFF',
    marginBottom: 6,
    opacity: 0.8,
  },
  newsletterTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#D4AF37',
    marginTop: 30,
  },
  newsletterDesc: {
    fontFamily: 'Cairo-Regular',
    fontSize: 13,
    color: '#A0B3D9',
    marginTop: 5,
  },
  newsletterBox: {
    flexDirection: 'row-reverse',
    marginTop: 15,
    width: '100%',
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  newsInput: {
    flex: 1,
    fontFamily: 'Cairo-Regular',
    color: '#FFF',
  },
  newsBtn: {
    backgroundColor: '#C49B3B',
    padding: 8,
    borderRadius: 8,
  },
  copyright: {
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
    color: '#A0B3D9',
    marginTop: 40,
    opacity: 0.5,
  }
});
