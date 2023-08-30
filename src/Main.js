import { View, Text } from 'react-native';
import React, {useEffect} from 'react';
import AppNavigation from './navigation/AppNavigation';
import parada from './assets/images/parada.png'
import timber from './assets/images/timber.png';
import clarke from './assets/images/clarke.png';
import bata from './assets/images/Bata.png';
import service from './assets/images/service.png';
import hash from './assets/images/hashpappies.png';
import { useDispatch } from 'react-redux';
import { addProduct } from './reduxTK/slice/productSlice';


const data = [
    { id: 1, name: 'Prada', price: 1000, image: parada , qty:0},
    { id: 2, name: 'Timber land', price: 1200, image: timber , qty:0},
    { id: 3, name: 'Hashpappies', price: 1400, image: hash, qty:0 },
    { id: 4, name: 'Clarke', price: 1100, image: clarke, qty:0 },
   
];

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        data.map(item => {
            dispatch(addProduct(item));
        })


        
    }, [])

    
    return (
            <AppNavigation />
        
    );
};

export default Main;
