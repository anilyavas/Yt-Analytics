import { View, Text, Image, ScrollView, Pressable } from 'react-native';

export default function Channel() {
  const channel = {
    input: {
      url: 'https://www.youtube.com/@jaidenanimations/about',
    },
    url: 'https://www.youtube.com/@jaidenanimations/about',
    handle: '@jaidenanimations',
    handle_md5: '4e2083f32de8c4dca0e500600bd36486',
    banner_img:
      'https://yt3.googleusercontent.com/-MdSCWVLkfJpq2I461HndvpVObRlxKAxx5_zDdI7Ob5gJfEA_sAEpeZ7QDaHplClYi_bDbXi=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    profile_image:
      'https://yt3.googleusercontent.com/gopbHeiDtEB932rIFqLlR4D_hFtd-BcdGrQgGeyDpkD3guskkbT74DsJYPGo3x7MqkyqtgL-=s160-c-k-c0x00ffffff-no-rj',
    name: 'JaidenAnimations',
    subscribers: 14200000,
    Description:
      "hi it's jaiden and bird\n\nchannel profile picture made by: me\nchannel banner art made by: https://twitter.com/motiCHIKUBI\n",
    videos_count: 158,
    created_date: '2014-02-16T00:00:00.000Z',
    views: 2756154727,
    Details: {
      location: 'United States',
    },
    Links: [
      'https://twitch.tv/jaidenanimations',
      'https://twitter.com/JaidenAnimation',
      'https://instagram.com/jaiden_animations',
      'https://jaidenanimations.com',
    ],
    identifier: 'UCGwu0nbY2wSkW8N-cghnLpA',
    id: 'UCGwu0nbY2wSkW8N-cghnLpA',
    timestamp: '2025-01-17T14:35:58.484Z',
  };

  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Banner Image */}
      <Image source={{ uri: channel.banner_img }} className="h-48 w-full" resizeMode="cover" />

      {/* Profile Section */}
      <View className="-mt-12 items-center">
        <Image
          source={{ uri: channel.profile_image }}
          className="h-24 w-24 rounded-full border-4 border-white"
        />
        <Text className="mt-2 text-xl font-bold">{channel.name}</Text>
        <Text className="text-gray-500">@{channel.handle}</Text>
      </View>

      {/* Channel Stats */}
      <View className="mx-4 mt-4 flex-row justify-around rounded-lg bg-white py-4 shadow">
        <View className="items-center">
          <Text className="text-lg font-bold">{channel.subscribers.toLocaleString()}</Text>
          <Text className="text-sm text-gray-500">Subscribers</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-bold">{channel.videos_count}</Text>
          <Text className="text-sm text-gray-500">Videos</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-bold">{channel.views.toLocaleString()}</Text>
          <Text className="text-sm text-gray-500">Views</Text>
        </View>
      </View>

      {/* Description */}
      <View className="mx-4 mt-4 rounded-lg bg-white p-4 shadow">
        <Text className="mb-2 text-lg font-bold">Description</Text>
        <Text className="text-gray-600">{channel.Description}</Text>
      </View>

      {/* Links */}
      <View className="mx-4 mt-4 rounded-lg bg-white p-4 shadow">
        <Text className="mb-2 text-lg font-bold">Links</Text>
        {channel.Links.map((link, index) => (
          <Pressable key={index} onPress={() => console.log(`Opening ${link}`)}>
            <Text className="mb-2 text-blue-500">{link}</Text>
          </Pressable>
        ))}
      </View>

      {/* Additional Info */}
      <View className="mx-4 mt-4 rounded-lg bg-white p-4 shadow">
        <Text className="mb-2 text-lg font-bold">Additional Info</Text>
        <Text className="text-gray-500">
          Created on:{' '}
          <Text className="text-gray-800">{new Date(channel.created_date).toDateString()}</Text>
        </Text>
        <Text className="text-gray-500">
          Location: <Text className="text-gray-800">{channel.Details.location}</Text>
        </Text>
      </View>
    </ScrollView>
  );
}
