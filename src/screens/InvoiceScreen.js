import React, {useCallback, useRef, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Card, Icon, Layout, Text} from '@ui-kitten/components';
import {FlatList} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {NAVIGATION} from '../constants/navigationConstants';
import SearchBar from '../components/SearchBar';
import BottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';

const getData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
        data.push({
            id: i,
            invoiceId: `INV-1235`,
            lrNo: `lr1234p${i}`,
            invoiceDate: `Sept ${Math.floor(i / 5)},2022`,
            totalParcels: 5,
            status: i % 2 === 0 ? `Pending` : `Successful`,
            receivedParcels: 10,
            supplierCode: `Supplier-${i}`,
            TsCode: `TsCode-${i}`,
        });
    }
    return data;
};


const groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

const completedTasks = getData();


const SECTIONS = completedTasks;
const AnimatedCard = Animated.createAnimatedComponent(Card);

const InvoiceItem = ({item, onItemPress}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <AnimatedCard style={{borderRadius: 12, marginBottom: 4}} onPress={() => setExpanded(!expanded)}>
            <View style={styles.item}>
                <Layout style={[styles.row, {paddingVertical: 8}]}>
                    <Layout>
                        <Text style={styles.itemHeader}>{item.lrNo}</Text>
                        <Text style={styles.itemSubHeader}>{item.invoiceId}</Text>
                    </Layout>
                    <Text style={styles.status}>{item.status}</Text>
                </Layout>
                {
                    expanded ?
                        (<Layout style={styles.expandedSection}>
                            <Text style={styles.status}>Created on
                                <Text style={styles.values}> {item.invoiceDate}</Text></Text>
                            <Layout style={styles.row}>
                                <Text style={styles.status}>Ts code <Text
                                    style={styles.values}>{item.TsCode}</Text></Text>
                                <Text style={styles.status}>Supplier code <Text
                                    style={styles.values}>{item.supplierCode}</Text></Text>
                            </Layout>
                            <Layout style={styles.row}>
                                <Text style={styles.status}>Total Parcels <Text
                                    style={styles.values}>{item.totalParcels}</Text></Text>
                                <Text style={styles.status}>Received parcels <Text
                                    style={styles.values}>{item.receivedParcels}</Text></Text>
                            </Layout>
                            <Pressable onPress={onItemPress}
                                       style={[styles.row, {
                                           marginTop: 8,
                                           height: 36,
                                           justifyContent: 'center',
                                           backgroundColor: '#3366ff',
                                           borderRadius: 4,
                                           marginHorizontal: -18,
                                           marginBottom: -6,

                                       }]}>
                                <Text style={{color: 'white', fontSize: 16, fontWeight: '800'}}>
                                    Edit
                                </Text>
                                <Icon style={{width: 24, height: 24}} fill={'white'} name='edit-outline'/>
                            </Pressable>
                        </Layout>)
                        : <></>
                }
            </View>
        </AnimatedCard>);
};

const InvoiceScreen = ({navigation}) => {
    const [headerIndexes, setHeaderIndexes] = useState([]);

    // ref
    const bottomSheetRef = useRef(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    function navigateToItem(item) {
        navigation.push(NAVIGATION.NewInvoice, {
            invoice: item,
        });
    }

    const onSearch = (phrase) => {
        //    modify data according to phrase
        console.log('ending' + phrase);
    };

    const onMenuClick = () => {
    };

    return (
        <Layout style={styles.container} level="3">
            <SearchBar
                onSearch={onSearch} onMenuClick={onMenuClick}
            />
            <FlatList
                data={SECTIONS}
                renderItem={({item, index}) => (
                    <InvoiceItem key={index} onItemPress={() => navigateToItem(item)} item={item}/>
                )}
                stickyHeaderIndices={headerIndexes}
                stickyHeaderComponent={({section}) => (
                    <View style={styles.sectionHeader}>
                        <Text>{section.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />

            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={['50%']}
                keyboardBehavior="fillParent"
                enablePanDownToClose={true}
                animateOnMount={false}
                enableOverDrag={false}
                onChange={handleSheetChanges}
            >
                <BottomSheetTextInput style={styles.input}/>
                <View style={styles.contentContainer}>
                    <Text>Awesome</Text>
                </View>
            </BottomSheet>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    item: {
        marginHorizontal: -16,
        marginVertical: -14,
    },
    itemHeader: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    status: {
        fontStyle: 'italic',
        fontSize: 16,
    },
    itemSubHeader: {
        fontSize: 18,
        fontWeight: 'normal',
    },
    sectionHeader: {
        backgroundColor: '#efefef',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    expandedSection: {
        padding: 4,
    },
    values: {
        fontWeight: 'bold',
    },
});


export default InvoiceScreen;
