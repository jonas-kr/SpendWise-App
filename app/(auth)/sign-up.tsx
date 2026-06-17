import { Text, View, useWindowDimensions, ScrollView } from 'react-native';
import SafeAreaView from '@/components/SafeAreaView';

const SignUp = () => {
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
          <Text className='text-center text-4xl font-extrabold tracking-tight text-gun-powder 
          dark:text-athens-gray uppercase font-mono'>SpendWise</Text>
          <Text className='mt-2 text-center text-[14px] text-ebony dark:text-gray-suit'>
            Create your account to get started
          </Text>
        </View>
        <View
          className='bg-white dark:bg-gray-500/10 rounded-t-[36px] shadow-lg shadow-gray-200'
        >
          <View className={isSmallScreen ? 'px-6 pb-6 pt-6' : 'px-6 pb-8 pt-6'}>
            <View className='self-center dark:bg-gray-500/30 bg-magnolia rounded-full px-4 py-2 mb-2'>
              <Text className='text-md font-semibold uppercase tracking-[1px] dark:text-athens-gray text-gun-powder'>
                Get Started
              </Text>
            </View>
            <Text className='mt-1 text-center text-sm dark:text-white/80 text-gray-500 leading-tight'>
              Sign up below to create your account and start managing your finances.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignUp;