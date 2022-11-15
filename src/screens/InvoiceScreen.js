import React, {useCallback, useRef, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Card, Datepicker, Icon, Layout, Select, SelectItem, Text} from '@ui-kitten/components';
import {FlatList} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {NAVIGATION} from '../constants/navigationConstants';
import SearchBar from '../components/SearchBar';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {Supplier, Transporter} from './NewInvoice';

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

    // ref
    const bottomSheetRef = useRef(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedSupplierIndex, setSelectedSupplierIndex] = useState([]);
    const [selectedTransportersIndex, setSelectedTransportersIndex] = useState([]);


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
        bottomSheetRef.current.expand();
    };


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

    function resetFilter() {
        setStartDate(null);
        setEndDate(null);
        setSelectedSupplierIndex([]);
        setSelectedTransportersIndex([]);
    }

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
                snapPoints={['60%']}
                keyboardBehavior="fillParent"
                enablePanDownToClose={true}
                animateOnMount={false}
                enableOverDrag={false}
                backdropComponent={renderBackdrop}
                onChange={handleSheetChanges}>
                <View style={styles.contentContainer}>
                    <Text style={{paddingHorizontal: 4, paddingVertical: 6, marginBottom: 4}} category="h4">Apply
                        Filter</Text>
                    <Datepicker
                        label='Start date'
                        date={startDate}
                        onSelect={nextDate => setStartDate(nextDate)}
                    />
                    <Datepicker
                        label='End date'
                        date={endDate}
                        onSelect={nextDate => setEndDate(nextDate)}
                    />
                    <Select
                        selectedIndex={selectedSupplierIndex}
                        size="large"
                        multiSelect={true}
                        label={'Supplier'}
                        value={selectedSupplierIndex.length !== 0 ?
                            selectedSupplierIndex.length !== 1 ? 'Multiple selected'
                                : Supplier[selectedSupplierIndex[0].row] : 'Select Supplier'}
                        onSelect={index => setSelectedSupplierIndex(index)}>
                        {Supplier.map((item, index) => (
                            <SelectItem style={styles.itemStyle} key={index} title={item}/>
                        ))}
                    </Select>
                    <Select
                        selectedIndex={selectedTransportersIndex}
                        size="large"
                        value={selectedTransportersIndex.length !== 0 ?
                            selectedTransportersIndex.length !== 1 ? 'Multiple selected'
                                : Transporter[selectedTransportersIndex[0].row] : 'Select Transporter'}
                        multiSelect={true}
                        label="transporter"
                        onSelect={index => setSelectedTransportersIndex(index)}>
                        {Transporter.map((item, index) => (
                            <SelectItem style={styles.itemStyle} key={index} title={item}/>
                        ))}
                    </Select>
                    <Pressable onPress={resetFilter}
                               style={[styles.row, {
                                   marginTop: 8,
                                   height: 48,
                                   justifyContent: 'center',
                                   backgroundColor: '#3366ff',
                                   borderRadius: 4,
                               }]}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: '800'}}>
                            Clear filter
                        </Text>
                    </Pressable>
                </View>
            </BottomSheet>

            <Pressable style={styles.newItem} onPress={() => navigateToItem(null)}>
                <Icon style={{width: 32, height: 32}} fill={'white'} name='plus-outline'/>
            </Pressable>
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
    }, contentContainer: {
        padding: 4,
    }, newItem: {
        position: 'absolute',
        width: 64,
        height: 64,
        bottom: 36,
        backgroundColor: '#3366ff',
        right: 16,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },

});


export default InvoiceScreen;
