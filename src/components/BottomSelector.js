import React, {useCallback, useRef, useMemo} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';


// render
const SheetItem = useCallback(
    ({item}) => (
        <View style={styles.itemContainer}>
            <Text>{item}</Text>
        </View>
    ),
    [],
);


const BottomSelector = ({data, snapPoints = ['50%'], onUpdate, onClose, renderItem = SheetItem}) => {
    // hooks
    const sheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChange = useCallback((index) => {
        console.log('handleSheetChange', index);
        onUpdate();
    }, []);
    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
        onClose();
    }, []);


    return (
        <View style={styles.container}>
            <BottomSheet
                ref={sheetRef}
                snapPoints={snapPoints}
            >
                <BottomSheetFlatList
                    data={data}
                    keyExtractor={(i) => i}
                    renderItem={renderItem}
                    contentContainerStyle={styles.contentContainer}
                />
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
    },
    contentContainer: {
        backgroundColor: 'white',
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: '#eee',
    },
});

export default BottomSelector;
