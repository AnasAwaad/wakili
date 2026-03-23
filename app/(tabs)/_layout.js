import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Platform } from 'react-native';
import { colors } from '../../utils/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary.default,
        tabBarInactiveTintColor: '#A0B3D9',
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopWidth: 0,
          height: 75,
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.12,
          shadowRadius: 15,
          elevation: 10,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: 'Cairo-Bold',
          fontSize: 11,
          marginTop: -2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'الرئيسية',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused && styles.activeIconContainer}>
              <Ionicons name={focused ? "home" : "home-outline"} color={color} size={focused ? 24 : 22} />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="discovery"
        options={{
          title: 'استكشاف',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused && styles.activeIconContainer}>
              <Ionicons name={focused ? "search" : "search-outline"} color={color} size={focused ? 24 : 22} />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'حسابي',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused && styles.activeIconContainer}>
              <Ionicons name={focused ? "person" : "person-outline"} color={color} size={focused ? 24 : 22} />
            </View>
          )
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeIconContainer: {
    // Subtle lift or indicator could go here
  }
});
