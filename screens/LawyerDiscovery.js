import React from 'react';
import { useRouter } from 'expo-router';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  Image,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const { width } = Dimensions.get('window');

const lawyers = [
  {
    id: 1,
    name: 'المحامية أميرة منصور',
    title: 'قانون الشركات',
    exp: '١٢ سنة خبرة',
    location: 'المعادي، القاهرة',
    rating: 4.8,
    reviews: 214,
    price: '1,200',
    avatar: 'https://i.pravatar.cc/150?u=amira'
  },
  {
    id: 2,
    name: 'المستشار عمر السيد',
    title: 'التقاضي الجنائي',
    exp: '٨ سنوات خبرة',
    location: 'الزمالك، القاهرة',
    rating: 5.0,
    reviews: 89,
    price: '850',
    avatar: 'https://i.pravatar.cc/150?u=omar'
  },
  {
    id: 3,
    name: 'د. حسان إبراهيم',
    title: 'قانون الأسرة',
    exp: '٢٠ سنة خبرة',
    location: 'الإسكندرية، مصر',
    rating: 4.2,
    reviews: 352,
    price: '1,500',
    avatar: 'https://i.pravatar.cc/150?u=hassan'
  }
];

export default function LawyerDiscovery() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileBox}>
          <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
             <Image source={{ uri: 'https://i.pravatar.cc/100?u=admin' }} style={styles.userAvatar} />
          </TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#0A2353" />
        </View>
        <Text style={styles.headerLogo}>وكيلي</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        
        {/* Search Bar */}
        <View style={styles.searchSection}>
           <View style={styles.searchInputBox}>
              <Ionicons name="search" size={20} color="#AAA" />
              <TextInput 
                placeholder="ابحث بالاسم، التخصص، أو نوع القضية..." 
                style={styles.searchInput}
                textAlign="right"
              />
           </View>
        </View>

        {/* Filters */}
        <View style={styles.filterRow}>
           <TouchableOpacity style={[styles.filterChip, styles.activeChip]}>
              <Ionicons name="business" size={14} color="#FFF" />
              <Text style={styles.activeChipText}>التخصص</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.filterChip}>
              <Ionicons name="cash-outline" size={14} color="#888" />
              <Text style={styles.chipText}>السعر</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.filterChip}>
              <Ionicons name="calendar-outline" size={14} color="#888" />
              <Text style={styles.chipText}>المواعيد المتاحة</Text>
           </TouchableOpacity>
        </View>

        <View style={styles.listHeader}>
           <Text style={styles.listSubtitle}>تم العثور على 128 نتيجة</Text>
           <Text style={styles.listTitle}>أفضل المحامين المعتمدين</Text>
        </View>

        {/* Lawyer Cards */}
        {lawyers.map(lawyer => (
          <TouchableOpacity 
            key={lawyer.id} 
            style={styles.lawyerCard}
            onPress={() => router.push(`/lawyer/${lawyer.id}`)}
          >
             <View style={styles.cardHeader}>
                <TouchableOpacity><Ionicons name="heart-outline" size={20} color="#888" /></TouchableOpacity>
                <View style={styles.avatarContainer}>
                   <Image source={{ uri: lawyer.avatar }} style={styles.lawyerAvatar} />
                   <View style={styles.verifiedBadge}><Ionicons name="checkmark" size={10} color="#FFF" /></View>
                </View>
             </View>

             <View style={styles.lawyerDetails}>
                <Text style={styles.lawyerName}>{lawyer.name}</Text>
                
                <View style={styles.tagRow}>
                   <View style={styles.tag}><Text style={styles.tagText}>{lawyer.title}</Text></View>
                   <Text style={styles.lawyerExp}>{lawyer.exp}</Text>
                </View>

                <View style={styles.infoLine}>
                   <Text style={styles.infoText}>{lawyer.location}</Text>
                   <Ionicons name="location-sharp" size={14} color="#C49B3B" />
                </View>

                <View style={styles.ratingRow}>
                   <View style={styles.stars}>
                      {[1,2,3,4,5].map(i => <Ionicons key={i} name="star" size={12} color="#C49B3B" />)}
                   </View>
                   <Text style={styles.ratingValue}>{lawyer.rating} ({lawyer.reviews} تقييم)</Text>
                </View>
             </View>

             <View style={styles.cardFooter}>
                <View style={styles.priceCol}>
                   <Text style={styles.priceLabel}>تبدأ الجلسة من</Text>
                   <Text style={styles.priceVal}>{lawyer.price} ج.م</Text>
                </View>
                <TouchableOpacity style={styles.bookBtn} onPress={() => router.push(`/lawyer/${lawyer.id}`)}>
                   <Text style={styles.bookBtnText}>احجز جلسة</Text>
                </TouchableOpacity>
             </View>
          </TouchableOpacity>
        ))}

        {/* AI Banner */}
        <View style={styles.aiBanner}>
           <Text style={styles.aiBadge}>توصية وكيلي بالذكاء الاصطناعي</Text>
           <Text style={styles.aiTitle}>هل تحتاج إلى استشارة قانونية عاجلة؟</Text>
           <Text style={styles.aiSubtitle}>تواصل مع مراجعنا القانوني الذكي.</Text>
           <TouchableOpacity style={styles.aiBtn}>
              <Ionicons name="sparkles" size={18} color="#0A2353" />
              <Text style={styles.aiBtnText}>ابدأ المراجعة الذكية</Text>
           </TouchableOpacity>
        </View>

      </ScrollView>
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
    paddingVertical: 15,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  headerLogo: {
    fontFamily: 'Cairo-Bold',
    fontSize: 24,
    color: '#0A2353',
  },
  profileBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 15,
  },
  scroll: {
    paddingBottom: 120,
  },
  searchSection: {
    padding: 20,
  },
  searchInputBox: {
    flexDirection: 'row-reverse',
    backgroundColor: '#FFF',
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginRight: 12,
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
  },
  filterRow: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterChip: {
    flexDirection: 'row-reverse',
    backgroundColor: '#EDF0F5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginLeft: 10,
    alignItems: 'center',
  },
  activeChip: {
    backgroundColor: '#051128',
  },
  activeChipText: {
    color: '#FFF',
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
    marginRight: 6,
  },
  chipText: {
    color: '#888',
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
    marginRight: 6,
  },
  listHeader: {
    paddingHorizontal: 20,
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  listTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 22,
    color: '#0A2353',
  },
  listSubtitle: {
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
    color: '#AAA',
  },

  lawyerCard: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  avatarContainer: {
    width: 80,
    height: 80,
  },
  lawyerAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EEE',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#C49B3B',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  lawyerDetails: {
    alignItems: 'flex-end',
    marginTop: -40,
    paddingRight: 95,
  },
  lawyerName: {
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    color: '#0A2353',
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  tag: {
    backgroundColor: '#EDF0F5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 10,
  },
  tagText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 11,
    color: '#0A1D3A',
  },
  lawyerExp: {
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
    color: '#AAA',
  },
  infoLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoText: {
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
    color: '#888',
    marginRight: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  stars: {
    flexDirection: 'row-reverse',
    marginLeft: 8,
  },
  ratingValue: {
    fontFamily: 'Cairo-Bold',
    fontSize: 11,
    color: '#555',
  },
  cardFooter: {
    flexDirection: 'row-reverse',
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceCol: {
    alignItems: 'flex-end',
  },
  priceLabel: {
    fontFamily: 'Cairo-Regular',
    fontSize: 10,
    color: '#AAA',
  },
  priceVal: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#0A2353',
  },
  bookBtn: {
    backgroundColor: '#051128',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  bookBtnText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 13,
    color: '#FFF',
  },

  aiBanner: {
    backgroundColor: '#051128',
    margin: 20,
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },
  aiBadge: {
    fontFamily: 'Cairo-Bold',
    fontSize: 10,
    color: '#C49B3B',
    marginBottom: 8,
  },
  aiTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
  aiSubtitle: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#A0B3D9',
    textAlign: 'center',
    marginTop: 5,
  },
  aiBtn: {
    flexDirection: 'row',
    backgroundColor: '#FEF4D9',
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: 'center',
  },
  aiBtnText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#0A2353',
    marginLeft: 10,
  }
});
