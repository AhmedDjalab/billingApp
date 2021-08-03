import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DataTable } from 'react-native-paper';
import { AppDataTableProps } from './model';

export default function AppDataTable({items} : AppDataTableProps) {

    return( 
        <View style={styles.tableContainer}>
        <DataTable >
            <DataTable.Header>
                <DataTable.Title style={{ flex: 2 }} >Product Name</DataTable.Title>
                <DataTable.Title>Nos.</DataTable.Title>
                <DataTable.Title style={{ flex: 2 }}>Price</DataTable.Title>
                <DataTable.Title style={{ flex: 2 }}>Total Price</DataTable.Title>
            </DataTable.Header>

            
                
            { 
             //? for simplicity we would add some unique id for map function 
             //? in real world we will include the "id" in DataModel type 
            items.map((item , index) => 
               (
             <DataTable.Row key={item.label+index}>
             <DataTable.Cell style={{ flex: 2 }} >{item.label}</DataTable.Cell>
             <DataTable.Cell>{item.quantity}</DataTable.Cell>
             <DataTable.Cell style={{ flex: 2 }} >{"$"+item.price}</DataTable.Cell>
             <DataTable.Cell style={{ flex: 2 }} >{"$"+(parseFloat(item.price)  * parseFloat(item.quantity)).toFixed(2) }</DataTable.Cell>
         </DataTable.Row> ))
         }
             
            
        </DataTable>
    </View>);
     
}
  const styles = StyleSheet.create({
    tableContainer: {

        paddingTop: 10,


    },
  })