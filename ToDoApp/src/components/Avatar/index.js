import { View, Image } from 'react-native'


const Avatar = () => {
  return (
    <View>
      <Image
      source = {resource('../../assets/Abalde.jpg')}
      style={{width: 50, height: 50 }}
      
      />
    </View>
  )
}

export default Avatar