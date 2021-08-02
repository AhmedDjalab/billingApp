import React from 'react'
import { useState } from 'react'
import {
    StyleSheet, Text, View, TextInput, SafeAreaView,
    FlatList, Button, Modal, TouchableOpacity,
    TouchableWithoutFeedback, Platform
} from 'react-native'
import { DataTable } from 'react-native-paper';
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


export default function LoginScreen() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [selectedTax, setSelectedTax] = useState(items[0].type);
    let [modalVisible, setModalVisible] = useState(false);

    const modalContent = (
        <>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList

                data={items}
                keyExtractor={item => item.id.toString()}
                numColumns={1}
                renderItem={({ item }) => (

                    <TouchableOpacity
                        key={item.id}
                        onPress={() => {


                            setSelectedTax(item.type); setModalVisible(false);


                        }}>
                        <View style={{ alignSelf: "center", paddingTop: 10, }} ><Text style={{ fontSize: 18 }}>{item.label}</Text>
                        </View></TouchableOpacity>

                )}
            />
        </>
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topLabelsContainer}>
                <Text style={{ color: "black" }}>Add Product</Text>

                <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                    <Text style={styles.stateSelectedText}>{`State Selected: ${selectedTax}`}</Text>
                </TouchableWithoutFeedback>
            </View>

            <TextInput
                style={styles.inputStyle}
                placeholder="Enter Product Label"
                placeholderTextColor="#CFCFCF"
                onChangeText={text => setUsername(text)}
                value={username}
            />
            <View style={styles.horizentalTextInput}>
                <TextInput
                    style={[styles.inputStyle, styles.inputHrizentalStyle]}
                    placeholder="Enter Price"
                    placeholderTextColor="#CFCFCF"
                    onChangeText={text => setUsername(text)}
                    value={username}
                />
                <TextInput
                    style={[styles.inputStyle, styles.inputHrizentalStyle]}
                    placeholder="Enter Quantity"
                    placeholderTextColor="#CFCFCF"
                    onChangeText={text => setUsername(text)}
                    value={username}
                />


                <Modal animationType="slide" visible={modalVisible}>


                    {modalContent}




                </Modal>


                <Text style={styles.stateSelectedText}>Add To List</Text>


            </View>

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

                    <DataTable.Row>
                        <DataTable.Cell style={{ flex: 2 }} >John</DataTable.Cell>
                        <DataTable.Cell>1</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 2 }} >$1.000.000</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 2 }} >$1.000.000</DataTable.Cell>
                    </DataTable.Row>

                </DataTable>
            </View>
            {
                /* Total + taxes data*/
            }
            <View style={styles.totalDataContainer}>
                <View style={{ flexDirection: "row", }}>
                    <Text style={{ paddingEnd: 10 }}>Total Price Without tax:</Text>
                    <Text>$1.000.000</Text>
                </View>

                <View style={{ flexDirection: "row", }}>
                    <Text style={{ paddingEnd: 10 }}>Discunt 3.0%:</Text>
                    <Text>$30.00</Text>
                </View>

                <View style={{ flexDirection: "row", }}>
                    <Text style={{ paddingEnd: 10 }}>Tax 6.0%:</Text>
                    <Text>$58.00</Text>
                </View>

                <View style={{ flexDirection: "row", }}>
                    <Text style={{ paddingEnd: 10, fontWeight: "bold" }}>Total Price:</Text>
                    <Text style={{ fontWeight: "bold" }}>$1.028.20</Text>
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

    horizentalTextInput: {

        flexDirection: "row",
        justifyContent: "space-between"
        , alignItems: "center",
        marginTop: 10

    },
    stateSelectedText: {
        color: "#85B6D7",
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

