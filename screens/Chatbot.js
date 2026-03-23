import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { colors } from '../utils/colors';

export default function Chatbot() {
  const [inputText, setInputText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity><Ionicons name="ellipsis-vertical" size={24} color="#555" /></TouchableOpacity>
          <TouchableOpacity><Ionicons name="time-outline" size={24} color="#555" style={{marginHorizontal: 15}} /></TouchableOpacity>
        </View>
        <View style={styles.headerCenter}>
           <Image source={{ uri: 'https://i.pravatar.cc/100?u=bot' }} style={styles.botAvatar} />
           <View style={{alignItems: 'flex-end', marginRight: 10}}>
              <Text style={styles.headerTitle}>المساعد القانوني</Text>
              <Text style={styles.headerSubtitle}>POWERED BY LLAMA 3.1</Text>
           </View>
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          
          {/* Warning Banner */}
          <View style={styles.warningBanner}>
             <View style={styles.warningIcon}><Ionicons name="flash-off" size={18} color="#D32F2F" /></View>
             <Text style={styles.warningText}>هذا المساعد للإرشاد القانوني الأولي. في الحالات العاجلة، يرجى استشارة محامٍ معتمد.</Text>
          </View>

          {/* Bot Message */}
          <View style={styles.botMsgRow}>
             <View style={styles.botIconCircle}>
                <MaterialCommunityIcons name="bank" size={16} color="#FFF" />
             </View>
             <Text style={styles.botLabel}>وكيل الذكي</Text>
          </View>
          <View style={styles.botBubble}>
             <Text style={styles.botText}>أهلاً بك. أنا مساعدك القانوني المدعوم بالذكاء الاصطناعي. كيف يمكنني مساعدتك في استشارتك القانونية اليوم؟</Text>
             <Text style={[styles.botText, { marginTop: 15, fontWeight: '700' }]}>يمكنني مساعدتك في:</Text>
             <Text style={styles.listItem}>• مراجعة العقود والاتفاقيات</Text>
             <Text style={styles.listItem}>• توضيح الأنظمة واللوائح السعودية</Text>
             <Text style={styles.listItem}>• صياغة المذكرات القانونية</Text>
          </View>
          <Text style={styles.timestamp}>10:30 ص</Text>

          {/* User Message */}
          <View style={styles.userBubble}>
             <Text style={styles.userText}>أريد الاستفسار عن حقوق الموظف في حالة إنهاء العقد غير المشروع وفقاً لنظام العمل السعودي الجديد.</Text>
          </View>
          <Text style={[styles.timestamp, { textAlign: 'left', marginLeft: 15 }]}>10:32 ص</Text>

          {/* Bot Message 2 */}
          <View style={styles.botMsgRow}>
             <View style={styles.botIconCircle}>
                <MaterialCommunityIcons name="bank" size={16} color="#FFF" />
             </View>
             <Text style={styles.botLabel}>وكيل الذكي</Text>
          </View>
          
        </ScrollView>

        {/* Footer Input */}
        <View style={styles.footer}>
           <View style={styles.inputBox}>
              <TouchableOpacity style={styles.sendBtn}>
                 <Ionicons name="send" size={20} color="#FFF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBtn}>
                 <Ionicons name="mic-outline" size={24} color="#888" />
              </TouchableOpacity>
              <TextInput 
                placeholder="اسأل وكيل عن أي نظام أو لائحة"
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
                textAlign="right"
              />
              <TouchableOpacity style={[styles.iconBtn, { marginLeft: 10 }]}>
                 <Ionicons name="attach-outline" size={24} color="#888" />
              </TouchableOpacity>
           </View>
           <Text style={styles.footerNote}>الأمان والخصوصية: يتم تشفير جميع المحادثات قانونياً</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EEE',
  },
  headerTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    color: '#0A2353',
  },
  headerSubtitle: {
    fontFamily: 'Cairo-Regular',
    fontSize: 10,
    color: '#D4AF37',
    fontWeight: '700',
  },
  scroll: {
    padding: 20,
    paddingBottom: 100,
  },
  warningBanner: {
    backgroundColor: '#FFEBEE',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 30,
    borderRightWidth: 4,
    borderRightColor: '#D32F2F',
  },
  warningIcon: {
    marginLeft: 12,
  },
  warningText: {
    flex: 1,
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
    color: '#B71C1C',
    textAlign: 'right',
    lineHeight: 18,
  },
  botMsgRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 10,
  },
  botIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#0A2353',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botLabel: {
    fontFamily: 'Cairo-Bold',
    fontSize: 13,
    color: '#888',
    marginRight: 10,
  },
  botBubble: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderTopRightRadius: 0,
    padding: 20,
    alignSelf: 'flex-end',
    width: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  botText: {
    fontFamily: 'Cairo-Regular',
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
    textAlign: 'right',
  },
  listItem: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#555',
    textAlign: 'right',
    marginTop: 5,
  },
  timestamp: {
    fontFamily: 'Cairo-Regular',
    fontSize: 11,
    color: '#AAA',
    textAlign: 'right',
    marginTop: 8,
    marginBottom: 20,
  },
  userBubble: {
    backgroundColor: '#051128',
    borderRadius: 20,
    borderTopLeftRadius: 0,
    padding: 20,
    alignSelf: 'flex-start',
    width: '85%',
  },
  userText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 15,
    color: '#FFF',
    lineHeight: 24,
    textAlign: 'right',
  },
  footer: {
    padding: 20,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  inputBox: {
    flexDirection: 'row',
    backgroundColor: '#EDF0F5',
    borderRadius: 15,
    paddingHorizontal: 12,
    alignItems: 'center',
    height: 56,
  },
  input: {
    flex: 1,
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  iconBtn: {
    padding: 8,
  },
  sendBtn: {
    backgroundColor: '#051128',
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerNote: {
    fontFamily: 'Cairo-Regular',
    fontSize: 10,
    color: '#AAA',
    textAlign: 'center',
    marginTop: 10,
  }
});
