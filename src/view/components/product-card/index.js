import React from 'react';
import { View, Text } from 'react-native';

import { 
    Card, Title, Paragraph,
} from 'react-native-paper';
import styles from './styles';


export default function ProductCard({ data }) {
  return (
    <View style={[styles.container, { marginRight: data.isLast ? 15 : 0 }]}>
        <Card style={{ width: 200, height: 300 }} elevation={4} onPress={() => {
            //NAVIGATE TO PRODUCTS TAB JUST PASSING DATA.ID
        }}>
            <Card.Cover style={{ flex: 1 }} source={{ uri: data.photoUrl }}/>
            <Card.Content>
                <View style={{ margin: 3 }}>
                    <Title>{data.name}</Title>
                </View>
                <View style={{ marginVertical: -6, marginHorizontal: 7 }}>
                    <Paragraph>
                        <Text style={{ color: '#A4A4A4'}}>{data.quantity}</Text>
                    </Paragraph>
                </View>
            </Card.Content>
        </Card>
    </View>
  );
}
