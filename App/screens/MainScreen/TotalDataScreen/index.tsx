import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import AppText from '../../../components/AppText'
import { TotalDataScreenProps } from './model';

export default function TotalDataScreen({items,discount,taxPercentage} : TotalDataScreenProps) {
    let [totalWithoutTax, setTotalWithoutPrice] = useState(0);
    let [discountValue, setDiscountValue] = useState(0);
    let [totalWithTax, setTotalWithTax] = useState(0);
    let [taxValue, setTaxValue] = useState(taxPercentage * totalWithoutTax / 100);
    useEffect(() => {
        calculeTotals();
    }, [taxPercentage, items])
    




    const calculeTotals = () => {
        let total = 0;
        items.forEach((item) => {
            total += parseFloat(item.price) * parseFloat(item.quantity)
        });
        let totalDiscount = total * discount / 100;
        let taxValue1 = total * taxPercentage / 100;
        let totalWithTax = total + totalDiscount + taxValue1;
        setTotalWithoutPrice(total);
        setDiscountValue(totalDiscount);
        setTaxValue(taxValue1);
        setTotalWithTax(totalWithTax);
    }

    return (
        <View style={styles.totalDataContainer}>
                <View style={{ flexDirection: "row", }}>
                    <AppText style={styles.title}>Total Price Without tax:</AppText>
                    <AppText>{totalWithoutTax.toString()}</AppText>
                </View>

                <View style={{ flexDirection: "row", }}>
                    <AppText style={styles.title}>{`Discunt ${discount}%:`}</AppText>
                    <AppText>{discountValue.toString()}</AppText>
                </View>

                <View style={{ flexDirection: "row", }}>
                    <AppText style={styles.title}>{`Tax ${taxPercentage}%:`}</AppText>
                    <AppText>{`$${taxValue}`}</AppText>
                </View>

                <View style={{ flexDirection: "row", }}>
                    <AppText style={[styles.title , styles.boldTitle]}>Total Price:</AppText>
                    <AppText style={styles.boldTitle}>{`$${totalWithTax}`}</AppText>
                </View>

            </View>
    )
}
const styles = StyleSheet.create({
    totalDataContainer: {
        flexDirection: "column",
        position: "absolute",
        bottom: 20,
        left: 20

    },
    title : {
        paddingEnd: 10,
    },
    boldTitle : {
      fontWeight:"bold"
    }
}) ; 