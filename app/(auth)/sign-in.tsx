import { Text, View, Image, Pressable, ScrollView } from 'react-native';
import SafeAreaView from '@/components/SafeAreaView';
import { useState } from 'react';
import useSocialAuth from '@/hooks/useSocialAuth';
import { FontAwesome } from '@expo/vector-icons';

const SignIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { loadingStrategy, handleSocialAuth } = useSocialAuth();
  const isGoogleClicked = loadingStrategy === "oauth_google";
  const isLoading = !!loadingStrategy;
  return (
    <SafeAreaView>
      <View className='px-6 pt-12'>
        <Text className='text-center text-5xl font-extrabold tracking-tight text-gun-powder 
        dark:text-athens-gray uppercase font-mono'>SpendWise</Text>
        <Text className='mt-1 text-center text-[14px] text-ebony dark:text-gray-suit'>
          Sign In to access your curated financial dashboard
        </Text>
        <View className='flexCenter mt-16'>
          <Image source={require("@/assets/images/wallet.webp")} />
        </View>
      </View>
      <ScrollView
        className='bg-white dark:bg-gray-500/10 flex-1 rounded-t-[36px] mt-16 shadow-lg shadow-gray-600'
        showsVerticalScrollIndicator={false}
      >
        <View className='px-6 pb-8 pt-6'>
          <View className='self-center dark:bg-gray-500/30 bg-magnolia rounded-full px-4 py-2 mb-2'>
            <Text className='text-md font-semibold uppercase tracking-[1px] dark:text-athens-gray text-gun-powder'>
              Welcome back
            </Text>
          </View>
          <Text className='mt-1 text-center text-sm dark:text-white/80 text-gray-500 leading-tight'>
            Select a sign-in option below to continue and securly access your account.
          </Text>
          <View className='mt-6 '>
            <Pressable className={`mb-3 h-14 flex-row items-center
                        rounded-2xl border dark:border border-gray-300 px-4 active:opacity-90 ${isLoading ? "opacity-70" : ""}`}
              disabled={isLoading}
              onPress={() => handleSocialAuth("oauth_google")}
            >
              <View
                className="w-8 h-8 items-center justify-center rounded-full bg-white"
              >
                <Image
                  source={require("@/assets/images/google.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>

              <Text className="ml-3 flex-1 text-lg font-semibold dark:text-white">
                {isGoogleClicked
                  ? "Connecting Google..."
                  : "Continue with Google"}
              </Text>

              <FontAwesome name="angle-right" size={18} color="#5f6e66" />
            </Pressable>
            <Pressable className={`mb-3 h-14 flex-row items-center
                        rounded-2xl border dark:border border-gray-300 px-4 active:opacity-90 ${isLoading ? "opacity-70" : ""}`}
              disabled={isLoading}
              onPress={() => handleSocialAuth("oauth_google")}
            >
              <View
                className="w-8 h-8 items-center justify-center rounded-full bg-white"
              >
                <Image
                  source={require("@/assets/images/google.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>

              <Text className="ml-3 flex-1 text-lg font-semibold dark:text-white">
                {isGoogleClicked
                  ? "Connecting Google..."
                  : "Continue with Google"}
              </Text>

              <FontAwesome name="angle-right" size={18} color="#5f6e66" />
            </Pressable>
            <Pressable className={`mb-3 h-14 flex-row items-center
                        rounded-2xl border dark:border border-gray-300 px-4 active:opacity-90 ${isLoading ? "opacity-70" : ""}`}
              disabled={isLoading}
              onPress={() => handleSocialAuth("oauth_google")}
            >
              <View
                className="w-8 h-8 items-center justify-center rounded-full bg-white"
              >
                <Image
                  source={require("@/assets/images/google.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>

              <Text className="ml-3 flex-1 text-lg font-semibold dark:text-white">
                {isGoogleClicked
                  ? "Connecting Google..."
                  : "Continue with Google"}
              </Text>

              <FontAwesome name="angle-right" size={18} color="#5f6e66" />
            </Pressable>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;