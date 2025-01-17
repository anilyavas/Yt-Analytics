import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';

import { Button } from '~/components/Button';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Stack.Screen options={{ title: 'Home' }} />
      <Text>Home Screen</Text>
      <Link asChild href="/channel">
        <Button title="Go to channel" />
      </Link>
    </View>
  );
}
