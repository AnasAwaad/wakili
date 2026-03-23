import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import Splash from '../screens/Splash';

export default function IndexRoute() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return <Splash />;
}
