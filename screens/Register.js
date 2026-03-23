import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { colors } from '../utils/colors';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();
  const [userType, setUserType] = useState('client'); // 'client' or 'lawyer'

  const handleRegister = () => {
    // For demo: go to Home tabs
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {/* Top Hero Section */}
        <LinearGradient
          colors={['#0A1D3A', '#061021']}
          style={styles.hero}
        >
          <Text style={styles.logoTop}>وكيلي</Text>
          <Text style={styles.heroTitle}>عدالة راقية{"\n"}من خلال الذكاء.</Text>
          <Text style={styles.heroSubtitle}>
            الوصول إلى استشارات قانونية نخبوية وتحليل القضايا المدعوم بالذكاء الاصطناعي في منظومة واحدة آمنة.
          </Text>

          <View style={styles.statsList}>
            <View style={styles.statLine}>
              <View style={styles.statTextGroup}>
                <Text style={styles.statLabel}>محامون معتمدون</Text>
                <Text style={styles.statSub}>نخبة من العقول القانونية تم فحصهم بعناية.</Text>
              </View>
              <View style={styles.statIconBox}><Ionicons name="checkmark-circle" size={20} color="#C49B3B" /></View>
            </View>

            <View style={styles.statLine}>
              <View style={styles.statTextGroup}>
                <Text style={styles.statLabel}>حجوزات آمنة</Text>
                <Text style={styles.statSub}>استشارات وملفات مشفرة من الطرفين.</Text>
              </View>
              <View style={styles.statIconBox}><Ionicons name="lock-closed" size={20} color="#C49B3B" /></View>
            </View>

            <View style={styles.statLine}>
              <View style={styles.statTextGroup}>
                <Text style={styles.statLabel}>أدوات قانونية ذكية</Text>
                <Text style={styles.statSub}>صياغة وتحليل مدعوم بنماذج لغوية قانونية متطورة.</Text>
              </View>
              <View style={styles.statIconBox}><Ionicons name="sparkles" size={20} color="#C49B3B" /></View>
            </View>
          </View>
        </LinearGradient>

        {/* Form Card */}
        <View style={styles.formCard}>
          <Text style={styles.formTitle}>إنشاء حساب</Text>
          <Text style={styles.formSubtitle}>انضم إلى مستقبل الخدمات القانونية المهنية.</Text>

          {/* User Type Switcher */}
          <View style={styles.typeSwitcher}>
            <TouchableOpacity
              style={[styles.typeBtn, userType === 'lawyer' && styles.typeBtnActive]}
              onPress={() => setUserType('lawyer')}
            >
              <Ionicons name="hammer-outline" size={20} color={userType === 'lawyer' ? '#FFF' : '#888'} />
              <Text style={[styles.typeText, userType === 'lawyer' && styles.typeTextActive]}>سجل كمحامٍ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.typeBtn, userType === 'client' && styles.typeBtnActive]}
              onPress={() => setUserType('client')}
            >
              <Ionicons name="person-outline" size={20} color={userType === 'client' ? '#FFF' : '#888'} />
              <Text style={[styles.typeText, userType === 'client' && styles.typeTextActive]}>سجل كعميل</Text>
            </TouchableOpacity>
          </View>

          {/* Inputs */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>الاسم الكامل</Text>
            <TextInput placeholder="خالد المنصور" style={styles.input} textAlign="right" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>البريد الإلكتروني</Text>
            <TextInput placeholder="khalid@firm.com" style={styles.input} textAlign="right" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>كلمة المرور</Text>
            <TextInput placeholder="••••••••" secureTextEntry style={styles.input} textAlign="right" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>تأكيد كلمة المرور</Text>
            <TextInput placeholder="••••••••" secureTextEntry style={styles.input} textAlign="right" />
          </View>

          <TouchableOpacity style={styles.mainBtn} onPress={handleRegister}>
            <Text style={styles.mainBtnText}>إنشاء حساب</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>أو</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.googleBtn} onPress={handleRegister}>
            <FontAwesome name="google" size={18} color="#555" style={{ marginRight: 10 }} />
            <Text style={styles.googleBtnText}>المتابعة باستخدام جوجل</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerLink} onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.footerLinkText}>لديك حساب بالفعل؟ <Text style={{ color: '#C49B3B' }}>تسجيل الدخول</Text></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  hero: {
    padding: 30,
    paddingTop: 60,
    paddingBottom: 40,
  },
  logoTop: {
    fontFamily: 'Cairo-Bold',
    fontSize: 28,
    color: '#FFF',
    textAlign: 'right',
  },
  heroTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 34,
    color: '#FFF',
    textAlign: 'right',
    marginTop: 20,
    lineHeight: 44,
  },
  heroSubtitle: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#A0B3D9',
    textAlign: 'right',
    marginTop: 15,
    lineHeight: 22,
  },
  statsList: {
    marginTop: 30,
  },
  statLine: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  statTextGroup: {
    marginRight: 15,
    alignItems: 'flex-end',
  },
  statLabel: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#FFF',
  },
  statSub: {
    fontFamily: 'Cairo-Regular',
    fontSize: 11,
    color: '#A0B3D9',
    opacity: 0.8,
  },
  statIconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formCard: {
    backgroundColor: '#FFF',
    marginTop: -30,
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 40,
  },
  formTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 22,
    color: '#0A2353',
    textAlign: 'center',
  },
  formSubtitle: {
    fontFamily: 'Cairo-Regular',
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
  },
  typeSwitcher: {
    flexDirection: 'row',
    backgroundColor: '#F0F2F5',
    borderRadius: 12,
    marginTop: 25,
    padding: 4,
  },
  typeBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 10,
  },
  typeBtnActive: {
    backgroundColor: '#0A2353',
  },
  typeText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 13,
    color: '#888',
    marginLeft: 8,
  },
  typeTextActive: {
    color: '#FFF',
  },
  inputGroup: {
    marginTop: 20,
  },
  inputLabel: {
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
    color: '#555',
    marginBottom: 8,
    textAlign: 'right',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 10,
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
  },
  mainBtn: {
    backgroundColor: '#051128',
    height: 54,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  mainBtnText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#FFF',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#EEE',
  },
  dividerText: {
    marginHorizontal: 15,
    color: '#AAA',
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
  },
  googleBtn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 12,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleBtnText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#333',
  },
  footerLink: {
    marginTop: 25,
    alignItems: 'center',
  },
  footerLinkText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 13,
    color: '#888',
  }
});
