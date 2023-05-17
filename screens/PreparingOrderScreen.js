import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Home')
    }, 4000)
  },[])

  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.Image 
        source={require('../assets/orderLoading.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='h-96 w-96'
      />
    
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg my-10 text-white font-bold text-center'>
          Cekamo na Restoran da prihvati vasu narudzbu!
        </Animatable.Text>

    </SafeAreaView>
  )
}

export default PreparingOrderScreen