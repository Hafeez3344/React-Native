import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';

const SearchWithApi = () => {
  const [data, setData] = useState([]);

  const searchUser = async (text) => {
    if (text.length < 1) return setData([]);
    const url = `https://api.github.com/search/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result.items) {
      setData(result.items); // ✅ Only 'items' is array
    }
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          margin: 10,
          textAlign: 'center',
        }}
      >
        SearchWithApi
      </Text>

      <TextInput
        placeholder="Search..."
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        onChangeText={(text) => searchUser(text)}
      />

      {data.length > 0
        ? data.map((item) => (
            <View key={item.id} style={{ marginLeft: 10, marginBottom: 10 }}>
              <Text>{item.login}</Text> {/* ✅ Changed name → login */}
            </View>
          ))
        : null}
    </View>
  );
};

export default SearchWithApi;
