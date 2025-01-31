import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { supabase } from '~/lib/supabase';

export default function JobPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    const fetchJob = async () => {
      const { data, error } = await supabase.from('scrape_jobs').select('*').eq('id', id);
      console.log('data', data);
      console.log('error', error);
    };
    fetchJob();
  }, [id]);

  return (
    <View>
      <Text>Job id: {id}</Text>
      <ActivityIndicator />
    </View>
  );
}
