import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as ProductActions from '../../../actions/products';

import {
    View,
    Text,
    ScrollView,
    FlatList,
} from 'react-native';

import ProductCard from '../../components/product-card';

import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

const markLast = (list) => {
    const last = list.pop();
    if (last) {
        last.isLast = true;
        list.push(last);
    }
    return list;
}

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ProductActions.getList());
    }, []);
    
    const productList = markLast(useSelector(state => state.productList));

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headerText}>
                    <Text style={styles.headerTitle}>Fresh Arrivals</Text>
                    <Icon name="tune" size={27} color="#000" />
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={productList}
                    renderItem={({ item }) => <ProductCard data={item}/>}
                />
            </ScrollView>
        </View>
    );
}

export default Home;
