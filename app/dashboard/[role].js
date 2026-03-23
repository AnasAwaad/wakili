import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import LawyerDashboard from '../../screens/LawyerDashboard';
import AdminDashboard from '../../screens/AdminDashboard';

export default function DashboardRoute() {
  const { role } = useLocalSearchParams();
  
  if (role === 'admin') {
    return <AdminDashboard />;
  }
  return <LawyerDashboard />;
}
