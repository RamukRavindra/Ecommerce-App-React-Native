import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { COLOR_STYLE, Colors, DIM, Images } from '../components/database/Constants';
import NavigationEcomm from '../navigation/NavigationEcomm';
import NavigationCalculator from '../navigation/NavigationCalculator';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: Colors.WHITE,
                    height: DIM.deviceHeight * 0.2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: -5,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.Silver,
                }}>
                {/* <Image
            style={{
              height: '100%',
              alignSelf: 'center',
              width: '100%',
            }}
            source={require('./../assets/icon/ic_enp.jpg')}
          /> */}
            </View>
            <DrawerContentScrollView {...props}>
                <SafeAreaView
                    style={{
                        backgroundColor: 'white',
                        borderBottomRightRadius: 25,
                    }}>
                    <DrawerItemList {...props} />
                </SafeAreaView>
            </DrawerContentScrollView>
        </View>
    );
}

export default function DrawerHomeScreen() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#ECF9FF",
                },
                drawerLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginLeft: -16,
                },
                headerTintColor: 'white',
                drawerActiveBackgroundColor: Colors.Columbia_Blue,
                drawerActiveTintColor: 'white',
                drawerStyle: {},
            }}
            drawerContent={props => (
                <CustomDrawerContent {...props} />
            )}>
            <Drawer.Screen
                name="Dashboard"
                component={NavigationEcomm}
                options={{
                    drawerIcon: () => {
                        return (
                            <Image
                                style={{
                                    width: DIM.deviceWidth * 0.06,
                                    height: DIM.deviceHeight * 0.03,
                                    tintColor: COLOR_STYLE.btn_bg_color,
                                }}
                            // source={Images.home}
                            />
                        );
                    },
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Enquiry"
                component={NavigationCalculator}
                options={{
                    drawerIcon: () => {
                        return (
                            <Image
                                style={{
                                    width: DIM.deviceWidth * 0.06,
                                    height: DIM.deviceHeight * 0.03,
                                    tintColor: COLOR_STYLE.btn_bg_color,
                                }}
                            // source={Images.IconPerson}
                            />
                        );
                    },
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    )
}