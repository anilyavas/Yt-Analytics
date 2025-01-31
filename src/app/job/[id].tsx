import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { supabase } from '~/lib/supabase';

const fetchJob = async (id: string) => {
  const { data, error } = await supabase.from('scrape_jobs').select('*').eq('id', id).single();

  if (error) {
    throw error;
  }
  return data;
};

export default function JobPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const {
    data: scrapeJob,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['job', 'id'],
    queryFn: () => fetchJob(id),
  });

  useEffect(() => {
    const channels = supabase
      .channel('supabase_realtime')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'scrape_jobs',
          filter: `id=eq.${id}`,
        },
        (payload) => {
          console.log('Change recieved!', payload);
        }
      )
      .subscribe();
  }, [scrapeJob]);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-2xl font-semibold">Job Status</Text>
      <View className="flex-row items-center">
        <Text className="text-xl">{scrapeJob.status}</Text>
        {scrapeJob.status === 'running' && <ActivityIndicator className="ml-2" size="large" />}
      </View>
    </View>
  );
}
