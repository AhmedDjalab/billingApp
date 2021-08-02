import React, { useState } from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Modal,
    Button,
    Platform,
    FlatList,
    TouchableOpacity,
    Text,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppPickerProps, Item } from './model';
import { StyleSheet } from 'react-native';
import PickerItem from '../PickerItem';



export default function AppPicker({
    items,
    numberOfColumns = 1,
    onItemSelect,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem
}: AppPickerProps) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleItemSelect = (item: Item) => {
        onItemSelect(item);
        setModalVisible(false);
    };

    const modalContent = (

        <>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList

                data={items}
                keyExtractor={item => item.id.toString()}
                numColumns={1}
                renderItem={({ item }) => (
                    <PickerItemComponent
                    item={item}
                    onPress={() => handleItemSelect(item)}
                />
                    // <TouchableOpacity
                    //     key={item.id}
                    //     onPress={() => {


                    //         setSelectedTax(item.type); setModalVisible(false);


                    //     }}>
                    //     <View style={{ alignSelf: "center", paddingTop: 10, }} ><Text style={{ fontSize: 18 }}>{item.label}</Text>
                    //     </View></TouchableOpacity>

                )}
            />
        </>

    );

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <Text style={styles.stateSelectedText}>{`State Selected: ${selectedItem.type}`}</Text>
            </TouchableWithoutFeedback>
            <Modal animationType="slide" visible={modalVisible}>

                {modalContent}

            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    stateSelectedText: {
        color: "#85B6D7",
    },
}) ; 