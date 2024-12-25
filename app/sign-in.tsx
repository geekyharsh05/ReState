import icons from '@/constants/icons'
import images from '@/constants/images'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'
import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
    const { refetch, loading, isLoggedIn } = useGlobalContext()

    if (!loading && isLoggedIn) return <Redirect href="/" />;

    async function handleLogin() {
        const result = await login();

        if (result) {
            refetch({})
        } else {
            Alert.alert("Login Failed", "Please try again");
        }
    }

    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView contentContainerClassName='h-full'>
                <Image
                    source={images.onboarding}
                    className='w-full h-4/6'
                    resizeMode='contain'
                />

                <View className='px-10 '>
                    <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome To Restate</Text>
                    <Text className='text-3xl font-rubik-bold text-center text-black-300 mt-2'>Let's Get You Closer to {"\n"}
                        <Text className='text-primary-300'>Your Ideal Home</Text>
                    </Text>

                    <Text className='text-lg font-rubik text-center text-black-200 mt-12'>
                        Log in with Google to get started
                    </Text>

                    <TouchableOpacity
                        onPress={handleLogin}
                        className='bg-white shadow-xl shadow-zinc-300 rounded-full w-full py-4 mt-12'
                    >
                        <View className='flex flex-row items-center justify-center'>
                            <Image
                                source={icons.google}
                                className='w-5 h-5'
                                resizeMode='contain'
                            />
                            <Text className='text-lg font-rubik-medium text-black-200 ml-2'>
                                Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn