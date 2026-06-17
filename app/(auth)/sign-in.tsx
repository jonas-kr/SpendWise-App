import { Text, View, Image, Pressable, ScrollView, useWindowDimensions } from 'react-native';
import SafeAreaView from '@/components/SafeAreaView';
import useSocialAuth from '@/hooks/useSocialAuth';
import { FontAwesome } from '@expo/vector-icons';
import { OAUTH } from '@/utils/constants';

const SignIn = () => {
  const { loadingStrategy, handleSocialAuth } = useSocialAuth();
  const isGoogleClicked = loadingStrategy === OAUTH.GOOGLE_OAUTH;
  const isAppleClicked = loadingStrategy === OAUTH.OAUTH_APPLE;

  const isLoading = !!loadingStrategy;


  const { height } = useWindowDimensions();
  const isSmallScreen = height < 700;

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View className='px-6 pt-8 flex-1'>
          <Text className='text-center text-5xl font-extrabold tracking-tight text-gun-powder 
          dark:text-athens-gray uppercase font-mono'>SpendWise</Text>
          <Text className='mt-1 text-center text-[14px] text-ebony dark:text-gray-suit'>
            Sign In to access your curated financial dashboard
          </Text>
          <View className='flex items-center justify-center mt-6 flex-1'>
            <Image
              className={isSmallScreen ? 'w-40 h-40' : 'w-48 h-48'}
              source={require("@/assets/images/wallet.webp")}
            />
          </View>
        </View>
        <View
          className='bg-white dark:bg-gray-500/10 rounded-t-[36px] shadow-lg shadow-gray-200'
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
            <View className="mt-6">
              <Pressable className={`mb-2 h-14 flex-row items-center
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
              <Pressable className={`dark:bg-white  mb-2 h-14 flex-row items-center
                        rounded-2xl border dark:border border-gray-300 px-4 active:opacity-90 ${isLoading ? "opacity-70" : ""}`}
                disabled={isLoading}
                onPress={() => handleSocialAuth("oauth_apple")}
              >
                <View
                  className="w-8 h-8 items-center justify-center rounded-full bg-white"
                >
                  <FontAwesome name="apple" size={24} color="#111" />

                </View>

                <Text className="ml-3 flex-1 text-lg font-semibold">
                  {isAppleClicked
                    ? "Connecting Apple..."
                    : "Continue with Apple"}
                </Text>

                <FontAwesome name="angle-right" size={18} color="#5f6e66" />
              </Pressable>
            </View>
            <Text className='text-center mt-3 text-sm leading-5 dark:text-white/50 text-gray-500'>
              By continuing you agree to our Terms and Privacy Policy
            </Text>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;