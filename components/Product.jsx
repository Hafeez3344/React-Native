import { View, Text, Image, Button, ScrollView } from 'react-native';
import React from 'react';
import {addToCart, removeFromCart} from './redux/action'; // Import the action creator
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch hook from react-redux
import Header from './Header';

const Product = ({ navigation }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);
    let products = [
        {
            id: 1,
            name: 'Samsung Galaxy S21',
            color: 'Black',
            price: 13100,
            image: 'https://www.google.com/search?sca_esv=ff452058d59b7f49&rlz=1C1CHBF_en-GBPK1157PK1157&sxsrf=AE3TifPF165E6Ab19M21OMYrok9nu-lLZg:1752172419119&q=iphone&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeqDdErwP5rACeJAty2zADJjYuUnSkczEhozYdaq1wZrEpAyvq_nCZZSdNL3a_zWXEwuKsmBoTyq3r5N_ZnXIM92RGvP76314IsbRi3jGXSbmNIAG6pxfWbbOKj2qests-Rn84SbgfAM73LHxm32_1Pp9sYxF&sa=X&ved=2ahUKEwjW1oH19rKOAxUVRP4FHd0sFU8QtKgLKAF6BAgUEAE&biw=1366&bih=633&dpr=1#vhid=NUDnJHAephgFYM&vssid=mosaic'
        },
        {
            id: 2,
            name: 'Iphone 12',
            color: 'Green',
            image: 'https://www.google.com/search?sca_esv=ff452058d59b7f49&rlz=1C1CHBF_en-GBPK1157PK1157&sxsrf=AE3TifPF165E6Ab19M21OMYrok9nu-lLZg:1752172419119&q=iphone&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeqDdErwP5rACeJAty2zADJjYuUnSkczEhozYdaq1wZrEpAyvq_nCZZSdNL3a_zWXEwuKsmBoTyq3r5N_ZnXIM92RGvP76314IsbRi3jGXSbmNIAG6pxfWbbOKj2qests-Rn84SbgfAM73LHxm32_1Pp9sYxF&sa=X&ved=2ahUKEwjW1oH19rKOAxUVRP4FHd0sFU8QtKgLKAF6BAgUEAE&biw=1366&bih=633&dpr=1#vhid=NUDnJHAephgFYM&vssid=mosaic',
            price: 1200,
        },
        {
            id: 3,
            name: 'Oppo F19',
            color: 'gray',
            price: 21200,
            image: 'https://www.google.com/search?sca_esv=ff452058d59b7f49&rlz=1C1CHBF_en-GBPK1157PK1157&sxsrf=AE3TifPF165E6Ab19M21OMYrok9nu-lLZg:1752172419119&q=iphone&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeqDdErwP5rACeJAty2zADJjYuUnSkczEhozYdaq1wZrEpAyvq_nCZZSdNL3a_zWXEwuKsmBoTyq3r5N_ZnXIM92RGvP76314IsbRi3jGXSbmNIAG6pxfWbbOKj2qests-Rn84SbgfAM73LHxm32_1Pp9sYxF&sa=X&ved=2ahUKEwjW1oH19rKOAxUVRP4FHd0sFU8QtKgLKAF6BAgUEAE&biw=1366&bih=633&dpr=1#vhid=NUDnJHAephgFYM&vssid=mosaic'
        },   {
            id: 3,
            name: 'Oppo F19',
            color: 'gray',
            price: 21200,
            image: 'https://www.google.com/search?sca_esv=ff452058d59b7f49&rlz=1C1CHBF_en-GBPK1157PK1157&sxsrf=AE3TifPF165E6Ab19M21OMYrok9nu-lLZg:1752172419119&q=iphone&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeqDdErwP5rACeJAty2zADJjYuUnSkczEhozYdaq1wZrEpAyvq_nCZZSdNL3a_zWXEwuKsmBoTyq3r5N_ZnXIM92RGvP76314IsbRi3jGXSbmNIAG6pxfWbbOKj2qests-Rn84SbgfAM73LHxm32_1Pp9sYxF&sa=X&ved=2ahUKEwjW1oH19rKOAxUVRP4FHd0sFU8QtKgLKAF6BAgUEAE&biw=1366&bih=633&dpr=1#vhid=NUDnJHAephgFYM&vssid=mosaic'
        }
    ]

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.name));
    };

    return (
      <ScrollView>
        <Button title='Go to User' onPress={() => navigation.navigate('User')} />
          <Header/>
            {products.map((item) => {
                // Correct logic: show Add to Cart if NOT in cart, Remove if in cart
                const isAdded = cartItems && cartItems.some((element) => element.name === item.name);
                return (
                    <View key={item.id} style={{ flexDirection: 'column', alignItems: 'center', margin: 10, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: "center" }}>{item.name}</Text>
                        <Text style={{ fontWeight: 'bold', textAlign: "center" }}>{item.color}</Text>
                        <Text style={{ fontWeight: 'bold', textAlign: "center" }}>{item.price}</Text>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 100, height: 100 }}
                        />
                        {!isAdded ?
                            <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
                            :
                            <Button title="Remove from Cart" onPress={() => handleRemoveFromCart(item)} />
                        }
                    </View>
                );
            })}
        </ScrollView>
    );
};

export default Product;
