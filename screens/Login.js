import React from 'react';
import { useRouter } from 'expo-router';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const { height } = Dimensions.get('window');

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* Top Illustration/Icon */}
        <View style={styles.topIllustration}>
          <View style={styles.iconCircle}>
             <Ionicons name="shield-checkmark" size={42} color="#FFF" />
          </View>
        </View>

        <View style={styles.card}>
           <Text style={styles.logoLabel}>وكيلي</Text>
           <Text style={styles.welcomeTitle}>مرحباً بعودتك</Text>
           <Text style={styles.welcomeSub}>الرجاء إدخال بياناتك للمتابعة.</Text>

           <View style={styles.inputGroup}>
              <Text style={styles.label}>البريد الإلكتروني</Text>
              <TextInput 
                placeholder="counsel@wakili.law" 
                style={styles.input} 
                textAlign="right"
                placeholderTextColor="#A0B3D9"
              />
           </View>

           <View style={styles.inputGroup}>
              <View style={styles.rowLabel}>
                <TouchableOpacity><Text style={styles.forgotTxt}>نسيت كلمة المرور؟</Text></TouchableOpacity>
                <Text style={styles.label}>كلمة المرور</Text>
              </View>
              <View style={styles.passwordContainer}>
                <Ionicons name="eye-outline" size={20} color="#888" style={{marginLeft: 10}} />
                <TextInput 
                  placeholder="••••••••" 
                  secureTextEntry 
                  style={styles.inputPass} 
                  textAlign="right"
                  placeholderTextColor="#BBB"
                />
              </View>
           </View>

           <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
             <Text style={styles.loginBtnText}>تسجيل الدخول</Text>
             <Ionicons name="arrow-forward" size={18} color="#FFF" style={{marginLeft: 10}} />
           </TouchableOpacity>

           <View style={styles.divider}>
             <View style={styles.line} />
             <Text style={styles.dividerText}>أو</Text>
             <View style={styles.line} />
           </View>

           <TouchableOpacity style={styles.googleBtn} onPress={handleLogin}>
             <FontAwesome name="google" size={18} color="#DB4437" style={{marginRight: 10}} />
             <Text style={styles.googleBtnText}>تسجيل الدخول باستخدام جوجل</Text>
           </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.footerLink} onPress={() => router.push('/(auth)/register')}>
           <Text style={styles.footerLinkText}>ليس لديك حساب؟ <Text style={{color: '#0A2353'}}>سجل الآن</Text></Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC',
  },
  content: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  topIllustration: {
    marginBottom: -40,
    zIndex: 10,
  },
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 24,
    backgroundColor: '#051128',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 8,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 28,
    padding: 30,
    paddingTop: 60,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  logoLabel: {
    fontFamily: 'Cairo-Bold',
    fontSize: 28,
    color: '#0A2353',
    textAlign: 'center',
  },
  welcomeTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
  welcomeSub: {
    fontFamily: 'Cairo-Regular',
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    marginTop: 20,
  },
  label: {
    fontFamily: 'Cairo-Bold',
    fontSize: 13,
    color: '#444',
    marginBottom: 10,
    textAlign: 'right',
  },
  input: {
    backgroundColor: '#EDF0F5',
    height: 54,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#0A2353',
  },
  rowLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  forgotTxt: {
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
    color: '#C49B3B',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF0F5',
    height: 54,
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  inputPass: {
    flex: 1,
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#0A2353',
  },
  loginBtn: {
    backgroundColor: '#051128',
    height: 56,
    borderRadius: 15,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  loginBtnText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 17,
    color: '#FFF',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#F0F0F0',
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
    borderColor: '#F0F0F0',
    borderRadius: 15,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleBtnText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#555',
  },
  footerLink: {
    marginTop: 30,
  },
  footerLinkText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#888',
  }
});
