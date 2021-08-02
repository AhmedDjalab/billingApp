import React from 'react'
import { useState } from 'react'
import {
    StyleSheet, Text, View, TextInput, SafeAreaView,
     
} from 'react-native'
import { Form, FormField, SubmitButton } from "../../components/Forms";
import { DataTable } from 'react-native-paper';
import AppText from '../../components/AppText';
import AppTextInput from '../../components/AppTextInput';
import { Item } from '../../models/item';
import { FormModel } from './model';
import validateSchema from "./validationSchema";
import validationSchema from './validationSchema';

const items = [
    {
        id: 1, type: "AL", value: 6, label: 'AL-6.0%'
    },
    {
        id: 2, type: "AK", value: 5, label: 'AK-5.0%'
    }
    , {
        id: 3, type: "AR", value: 3, label: 'AR-3.0%'
    }
    , {
        id: 4, type: "AS", value: 5, label: 'AS-5.7%'
    }
];


export default function MainScreen() {

    
    let [items, setItems] = useState<FormModel[]>([]);
    let initialValues: FormModel = {
        price: "",
        quantity: "",
        label: "",
    };
    const handleSubmit = async ({ price, label, quantity }: FormModel) => {
        setItems([...items , { price, label, quantity }]) ; 
        
        
    };



    // const modalContent = (
    //     <>
    //         <Button title="Close" onPress={() => setModalVisible(false)} />
    //         <FlatList

    //             data={items}
    //             keyExtractor={item => item.id.toString()}
    //             numColumns={1}
    //             renderItem={({ item }) => (

    //                 <TouchableOpacity
    //                     key={item.id}
    //                     onPress={() => {


    //                         setSelectedTax(item.type); setModalVisible(false);


    //                     }}>
    //                     <View style={{ alignSelf: "center", paddingTop: 10, }} ><Text style={{ fontSize: 18 }}>{item.label}</Text>
    //                     </View></TouchableOpacity>

    //             )}
    //         />
    //     </>
    // );
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topLabelsContainer}>
                <AppText style={{ color: "black" }}>Add Product</AppText>

                {/* thiss is model picker */}
            </View>


            <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}

            >
              
                <FormField 
                maxLength={255} 
                name="label" 
                placeholder="Enter Product Label" />

                <View style={styles.horizentalTextInput}>
                  
                    <View  style={{width:"30%"}}>
                    <FormField
                        keyboardType="numeric"
                        maxLength={8} // includes 10000.99
                        name="price"
                      
                        placeholder="Price"
                    />
                    </View>
                  
                 <View   style={{width:"30%"}}>
                      <FormField
                        keyboardType="numeric"
                      
                        maxLength={8} // includes 10000.99
                        name="quantity"
                        placeholder="quantity"
                    />
                 </View>
                   



                 <SubmitButton title="Add To List" textColor="#85B6D7" />
                 


                </View>
            </Form>
            {
                /* Table container data */
            }

            <View style={styles.tableContainer}>
                <DataTable >
                    <DataTable.Header>
                        <DataTable.Title style={{ flex: 2 }} >Product Name</DataTable.Title>
                        <DataTable.Title>Nos.</DataTable.Title>
                        <DataTable.Title style={{ flex: 2 }}>Price</DataTable.Title>
                        <DataTable.Title style={{ flex: 2 }}>Total Price</DataTable.Title>
                    </DataTable.Header>

                    {


                        <DataTable.Row>
                            <DataTable.Cell style={{ flex: 2 }} >John</DataTable.Cell>
                            <DataTable.Cell>1</DataTable.Cell>
                            <DataTable.Cell style={{ flex: 2 }} >$1.000.000</DataTable.Cell>
                            <DataTable.Cell style={{ flex: 2 }} >$1.000.000</DataTable.Cell>
                        </DataTable.Row>
                    }
                </DataTable>
            </View>
            {
                /* Total + taxes data*/
            }
            <View style={styles.totalDataContainer}>
                <View style={{ flexDirection: "row", }}>
                    <AppText style={{ paddingEnd: 10 }}>Total Price Without tax:</AppText>
                    <AppText>$1.000.000</AppText>
                </View>

                <View style={{ flexDirection: "row", }}>
                    <AppText style={{ paddingEnd: 10 }}>Discunt 3.0%:</AppText>
                    <AppText>$30.00</AppText>
                </View>

                <View style={{ flexDirection: "row", }}>
                    <AppText style={{ paddingEnd: 10 }}>Tax 6.0%:</AppText>
                    <AppText>$58.00</AppText>
                </View>

                <View style={{ flexDirection: "row", }}>
                    <AppText style={{ paddingEnd: 10, fontWeight: "bold" }}>Total Price:</AppText>
                    <AppText style={{ fontWeight: "bold" }}>$1.028.20</AppText>
                </View>

            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    modelContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },

    totalDataContainer: {
        flexDirection: "column",
        position: "absolute",
        bottom: 20,
        left: 20

    },
    tableContainer: {

        paddingTop: 10,


    },
    stateSelectedText: {
        color: "#85B6D7",
    },
    horizentalTextInput: {

        flexDirection: "row",
        justifyContent: "space-between"
        , alignItems: "center",
        marginTop: 10

    },


    topLabelsContainer: {

        flexDirection: "row"
        , justifyContent: "space-between",


    },
    container: {
        flex: 1,
        width: "100%",
        margin: 30
        , padding: 20

    },
    inputStyle: {
        fontSize: 14,
        borderWidth: 1,
        padding: 2,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: "#CFCFCF",

    },
    inputHrizentalStyle: {

        width: 120


    }
})

