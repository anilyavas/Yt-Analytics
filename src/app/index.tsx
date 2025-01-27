import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';

import { Button } from '~/components/Button';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([
    'https://www.youtube.com/@marquesbrownlee',
    'https://www.youtube.com/@ted',
    'https://www.youtube.com/@smosh',
  ]);

  const popularChannels = [
    {
      name: 'Marques Brownlee',
      url: 'https://www.youtube.com/@marquesbrownlee',
    },
    {
      name: 'TED',
      url: 'https://www.youtube.com/@ted',
    },
    {
      name: 'Smosh',
      url: 'https://www.youtube.com/@smosh',
    },
  ];

  const handleSearch = () => {
    if (searchInput.trim()) {
      setSearchHistory((prev) => [searchInput.trim(), ...prev.slice(0, 4)]); // Add to history (max 5)
      setSearchInput('');
    }
  };

  return (
    <View className="flex-1 bg-gray-100 px-6 py-8">
      <Stack.Screen options={{ title: 'YouTube Analysis' }} />

      {/* Title */}
      <Text className="mb-8 text-center text-3xl font-extrabold text-gray-800">
        YouTube Analysis Tool
      </Text>

      {/* Search Section */}
      <View className="mb-10">
        <Text className="mb-3 text-center text-lg font-medium text-gray-600">
          Enter a YouTube channel URL to analyze its details.
        </Text>
        <View className="flex-row items-center gap-3">
          <TextInput
            value={searchInput}
            onChangeText={setSearchInput}
            placeholder="Paste the channel URL here"
            className="flex-1 rounded-lg border border-gray-300 bg-white px-5 py-4 text-lg text-gray-900 shadow-lg"
          />
          <Link asChild href="/channel">
            <Button
              title="Analyze Channel"
              onPress={handleSearch}
              className="rounded-lg bg-red-600 py-4 text-lg font-semibold text-white"
            />
          </Link>
        </View>
      </View>

      {/* Popular Channels */}
      <View className="mb-8">
        <Text className="mb-4 text-lg font-semibold text-gray-800">Popular Channels</Text>
        <FlatList
          data={popularChannels}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => (
            <Link asChild href={`/channel?url=${item.url}`}>
              <Pressable className="mb-3 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
                <Text className="text-base font-medium text-gray-800">{item.name}</Text>
                <Text className="text-sm text-blue-500">{item.url}</Text>
              </Pressable>
            </Link>
          )}
        />
      </View>

      {/* Search History */}
      <View>
        <Text className="mb-4 text-lg font-semibold text-gray-800">Recent Searches</Text>
        {searchHistory.length > 0 ? (
          searchHistory.map((url, index) => (
            <Link asChild href={`/channel?url=${url}`} key={index}>
              <Pressable className="mb-3 rounded-lg border border-gray-200 bg-white p-3 shadow">
                <Text className="text-sm text-blue-500">{url}</Text>
              </Pressable>
            </Link>
          ))
        ) : (
          <Text className="text-sm text-gray-500">No recent searches yet.</Text>
        )}
      </View>
    </View>
  );
}
