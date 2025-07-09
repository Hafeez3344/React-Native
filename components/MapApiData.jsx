import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const MapApiData = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <ScrollView>
      <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10 , textAlign: 'center' }}>MapApiData</Text>
      {data.length
        ? data.map(item => (
            <View style={{ margin: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }} key={item.id}>
              <Text style={{ fontSize: 18, marginTop: 10 }}>
                ID: {item.id}
              </Text>
              <Text  style={{ fontSize: 18, marginTop: 10 }}>
                Title: {item.title}
              </Text>
              <Text  style={{ fontSize: 18, marginTop: 10 }}>
                Body: {item.body}
              </Text>
              
            </View>
          ))
        : null}
    </ScrollView>
  );
};

export default MapApiData;
