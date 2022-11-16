import React, {createRef, useCallback, useEffect} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import BottomSheet, {BottomSheetBackdrop, BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {hideBottomSheet, setCurrentBranch} from '../redux/slice/counterSlice';
import {Text} from '@ui-kitten/components';

const BottomSelector = () => {
    const sheetRef = createRef(null);

    const currentBranch = useSelector((state) => state.counter.currentBranch);
    const branches = useSelector((state) => state.counter.branchData);
    const visibility = useSelector((state) => state.counter.modelVisible);
    const dispatch = useDispatch();

    // hooks
    const snapPoints = ['50%'];

    function handleItemPress(item) {
        dispatch(setCurrentBranch(item));
        dispatch(hideBottomSheet());
    }

    const SheetItem = ({item, isSelected}) => (
        <Pressable onPress={() => {
            handleItemPress(item);
        }}>
            <View style={[styles.itemContainer, {backgroundColor: isSelected ? '#3366ff' : 'white'}]}>
                <Text category="h6" style={{fontWeight: 'normal', color: isSelected ? 'white' : 'black'}}>{item}</Text>
            </View>
        </Pressable>
    );


    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        ),
        [],
    );

    useEffect(() => {
        if (visibility) {
            sheetRef.current.expand();
        } else {
            sheetRef.current.close();
        }

    }, [visibility]);

    return (
        <BottomSheet
            ref={sheetRef}
            index={-1}
            keyboardBehavior="fillParent"
            enablePanDownToClose={true}
            animateOnMount={false}
            backdropComponent={renderBackdrop}
            enableOverDrag={false}
            snapPoints={snapPoints}>
            <BottomSheetFlatList
                data={branches}
                keyExtractor={(i) => i}
                renderItem={({item}) => <SheetItem item={item} isSelected={item === currentBranch}/>}
            />
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 14,
        marginTop: 1,
        borderRadius: 1,
    },
});

export default BottomSelector;
