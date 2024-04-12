import { Dimensions } from "react-native";

export const DIM = {
    cardMargin: 5,

    deviceWidth: Math.round(Dimensions.get("window").width),

    deviceHeight: Math.round(Dimensions.get("window").height),

    cardWidth: Math.round(Dimensions.get("window").width) - 5 * 4,

    cardHeight: Math.round(Dimensions.get("window").height),

    fontSize: Math.round(Dimensions.get("window").width) * 0.015,

    titleFont: Math.round(Dimensions.get("window").width) * 0.035,

    listFont: Math.round(Dimensions.get("window").width) * 0.018,

    menuFont: Math.round(Dimensions.get("window").width) * 0.025,

    marginRight: Math.round(Dimensions.get("window").width) * 0.05,

    marginTop: Math.round(Dimensions.get("window").height) * 0.05,

    buttonHeight: Math.round(Dimensions.get("window").height) * 0.065,

    contentFont: Math.round(Dimensions.get("window").width) * 0.035,

    buttonFont: Math.round(Dimensions.get("window").height) * 0.055,

    inputHeight: Math.round(Dimensions.get("window").height) * 0.065,

    borderWidth: Math.round(Dimensions.get("window").width) * 0.05,

    dashboardContentFont: Math.round(Dimensions.get("window").height) * 0.02,

    searchContinerHeight: Math.round(Dimensions.get("window").height) * 0.045,

    searchContiner: Math.round(Dimensions.get("window").width) * 0.4,

    searchInputPadding: Math.round(Dimensions.get("window").width) * 0.0015,

    searchIcon: Math.round(Dimensions.get("window").width) * 0.04,

    floatWidtht: Math.round(Dimensions.get("window").width) * 0.06,

    headerHeight: Math.round(Dimensions.get("window").height) * 0.04,

    addIcon: Math.round(Dimensions.get("window").width) * 0.015,

    flatListPadding: Math.round(Dimensions.get("window").width) * 0.015,

    dashboardIcon: Math.round(Dimensions.get("window").height) * 0.00085,

    pageHaderHeight: Math.round(Dimensions.get("window").height) * 0.00085,

    pageHaderIcon: Math.round(Dimensions.get("window").height) * 0.00085,

    searchContinerBorderRasius:
        Math.round(Dimensions.get("window").width) * 0.008,

    listFont: Math.round(Dimensions.get("window").height) * 0.018,

    bandWidth: Math.round(Dimensions.get("window").width) * 0.8,

    estiListFont: Math.round(Dimensions.get("window").height) * 0.018,

    dialogWidth: Math.round(Dimensions.get("window").width) - 40,

    dialogHeight: Math.round(Dimensions.get("window").height) - 150,
};
const Images = {
    IconSend: require('../../asserts/icon/iconSend.png')
};

const Colors = {
    Columbia_Blue: "#AEE7FF",
    HighlightGreen: '#00ff99',
    Malibu: "#74BDE8",
    Carnation_Pink: "#FF9EBE",
    Light_Salmon: "#ffd9cc",
    Saffron: "#F4C33D",
    Sunglow: "#FFCC37",
    Cream_Can: "#F5C453",
    WHITE: "#ffffff",
    ALIVEBLUE: "#f1f5f7",
    GRAY: "#aeaeae",
    BLACK: "#000000",
    TRANSPARENT: "#000000aa",
    WTrans: "#FFFFFF88",
    WATER_BLUE: "#3395FF22",
    NOBEL: "#9e9e9e",
    DIMGRAY: "#616161",
    ORANGE_O: "#ff5722",
    AliceBlue: "#f1f5f7",
    OrangePeel: "#FF9800",
    OxfordBlue: "#263238",
    Silver: "#BDBDBD",
    SuvaGrey: "#8C8C8C",
    Whisper: "#E4E4E4",
    LimeGreen: "#42BD41",
    Palm_Green: "#00a655",
    DodgerBlue: "#3395FF",
    LightBlue: "#ADD8E6",
    Black: "#000000",
    Maya_Blue: "#5cbbff",
    Elephant_C: "#273943",
    Quartz: "#e1e2ee",
    NERO: "#212121",
    YELLOW_GREEN: "#7ed321",
    Dark_green: "#28a745",
    Doder_Blue: "#2195ff",
    Hue: "#63a296",
    Red_Orange: "#f44336",
    GRAY_L: "dddddd",
    Charleston_Green: "#2c2c2c",
    Chinese_White: "#e0e0e0",
    MEDIUMORCHID: "#BA55D3",
    Purple: "#4456ca",
    Ash: "#a3a4ac",
    BtnBlue: "#47B5FF",
    Emphasis: '#088395',
    LightYellow: "#fff7e6",
    DarkYellow: '#e69d00',
    LightGreen: '#eafaea',
    DarkGreen: '#2cba2c',
    LightBlues: '#e6f5ff',
    DarkBlue: '#008ae6',
    LightRed: '#ffe6e6',
    DarkRed: '#e60000',
    Emphasis: '#088395',
    DarkPurple: '#9966ff',
    LightPurple: '#eee6ff',
    InkBlue: '#006080',
    ColdBackgroundColor: "#EAFCFA",
    ColdFontColor: "#40E1E3",
    WarmBackgroundColor: "#E5F2EC",
    WarmFontColor: "#7a924b",
    HotBackgroundColor: "#fdf2e8",
    HotFontColor: "#e45500",
    MissedBackgroundColor: "#f9e6e7",
    MissedFontColor: "#cd273c",
    NotIntrestedFontColor: "#c230c7",
    NotIntrestedBackgroundColor: "#f6e6f9",
    SpamFontColor: "#a4a4a4",
    SpamBackgroundColor: "#DEDDDD",
    ClosedFontColor: "#4dbd74",
    ClosedBackgroundColor: "#DAF1CF",
};

export const COLOR_STYLE = {
    text_color: "#136063",
    btn_bg_color: "#17858a",
    border_color: "#80fbff",
};

export const FontFamily = {
    serifFont: "serif",
    arialFont: "Arial",
};

const Months = [
    { value: '01', title: 'January' },
    { value: '02', title: 'February' },
    { value: '03', title: 'March' },
    { value: '04', title: 'April' },
    { value: '05', title: 'May' },
    { value: '06', title: 'June' },
    { value: '07', title: 'July' },
    { value: '08', title: 'August' },
    { value: '09', title: 'September' },
    { value: '10', title: 'October' },
    { value: '11', title: 'November' },
    { value: '12', title: 'December' }
];

const DISPLAY_DATE_FORMAT = "DD-MMM";

const MANDATORY = true;
const TELE_CODE = "+91";
const WEIGHT_DECIMAL_VALUE = 3;
const ORDER_RECEIVED_STATUS = "received";
const ORDER_SOLD_STATUS = "sold";
const ORDER_CANCEL_STATUS = "cancel";
const ORDER_RETURN_STATUS = "return";
const ORDER_PENDING_STATUS = "pending";
const DATE_FORMAT = "DD-MM-YYYY";
const CURRENCY_SYMBOL = "₹";

const defaultSelectedObj = { title: '', value: '' };

const APP_CONFIG_EXCHANGE = "exchange_config";

const headerStyle = { flex: 1, backgroundColor: global.backgroundClr };

export {
    Images,
    Colors,
    WEIGHT_DECIMAL_VALUE,
    ORDER_RECEIVED_STATUS,
    ORDER_SOLD_STATUS,
    ORDER_CANCEL_STATUS,
    ORDER_RETURN_STATUS,
    ORDER_PENDING_STATUS,
    DATE_FORMAT,
    CURRENCY_SYMBOL,
    MANDATORY,
    TELE_CODE,
    APP_CONFIG_EXCHANGE,
    DISPLAY_DATE_FORMAT,
    Months,
    defaultSelectedObj,
    headerStyle
};
