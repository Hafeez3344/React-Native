import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'; // Import useSelector hook from react-redux

const Header = () => {
  const cartData = useSelector((state) => state.reducer); // Access the count from the Redux store
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    setCartItem(cartData.length);
  }, [cartData]);



  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 24 , textAlign: "right", backgroundColor: 'grey', color: "white", paddingRight: 10}}>{cartItem}</Text>
    </View>
  )
}

export default Header