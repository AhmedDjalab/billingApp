import React from 'react'
import { useState } from 'react'
import {
    StyleSheet, View, SafeAreaView,

} from 'react-native'
import { Form, FormField, SubmitButton } from "../../components/Forms";
import AppText from '../../components/AppText';
import { Item } from '../../models/item';
import { DataModel } from '../../models/model';
import validationSchema from './validationSchema';
import AppPicker from '../../components/AppPicker';
import PickerItem from '../../components/PickerItem';
import AppDataTable from './AppDataTable';
import TotalDataScreen from './TotalDataScreen';

const pickerData = [
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
        id: 4, type: "AS", value: 5.7, label: 'AS-5.7%'
    }
];
const discount = 3;


export default function MainScreen() {


    let [items, setItems] = useState<DataModel[]>([]);
    let [selectedTax, setSelectedTax] = useState(pickerData[0]);
   
    let initialValues: DataModel = {
        price: "",
        quantity: "",
        label: "",
    };




    const handleSubmit = async ({ price, label, quantity }: DataModel) => {
        let updatedItems = [...items, { price, label, quantity }];
        setItems(updatedItems);

    };

    const itemsTaxChanged = async (taxItem: Item) => {
        console.log("this is the tax changes ", taxItem.type)
        setSelectedTax(taxItem);
        


    };

  
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topLabelsContainer}>
                <AppText style={{ color: "black" }}>Add Product</AppText>

                {/* thiss is model picker */}
                <AppPicker
                    items={pickerData}
                    numberOfColumns={1}

                    PickerItemComponent={PickerItem}
                    placeholder={""}
                    onItemSelect={itemsTaxChanged}

                />
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

                    <View style={{ width: "30%" }}>
                        <FormField
                            keyboardType="numeric"
                            maxLength={8} // includes 10000.99
                            name="price"

                            placeholder="Price"
                        />
                    </View>

                    <View style={{ width: "30%" }}>
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
            <AppDataTable items={items}  />

            {
                /* Total + taxes data*/
            }
             <TotalDataScreen taxPercentage={selectedTax.value} 
             items={items}
             discount={discount} />

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    modelContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
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

