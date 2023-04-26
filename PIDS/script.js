const directions = ["UP", "DOWN"];
let intervalID;
let switchLangInterval;

var jsonResponse;

var lang = "ch";
const languages = ["ch", "en"];

let newStationList = {
    "TKL": {
        "NOP": {
            "fullName_en": "North Point",
            "fullName_ch": "北角",
            "UP_dest": ["POA", "LHP"],
            "DOWN_dest": [],
            "colour" : "#F48E21",
            "textColour" : "#FFFFFF"
        },
        "QUB": {
            "fullName_en": "Quarry Bay",
            "fullName_ch": "鰂魚涌",
            "UP_dest": ["POA", "LHP"],
            "DOWN_dest": ["NOP"],
            "colour" : "#24685A",
            "textColour" : "#FFFFFF"
        },
        "YAT": {
            "fullName_en": "Yau Tong",
            "fullName_ch": "油塘",
            "UP_dest": ["POA", "LHP"],
            "DOWN_dest": ["NOP"],
            "colour" : "#F9D63B",
            "textColour" : "#000000"
        },
        "TIK": {
            "fullName_en": "Tiu Keng Leng",
            "fullName_ch": "調景嶺",
            "UP_dest": ["POA", "LHP"],
            "DOWN_dest": ["NOP"],
            "colour" : "#9EB329",
            "textColour" : "#FFFFFF"
        },
        "TKO": {
            "fullName_en": "Tseung Kwan O",
            "fullName_ch": "將軍澳",
            "UP_dest": ["POA", "LHP"],
            "DOWN_dest": ["NOP"],
            "colour" : "#8E172E",
            "textColour" : "#FFFFFF"
        },
        "LHP": {
            "fullName_en": "LOHAS Park",
            "fullName_ch": "康城",
            "UP_dest": [],
            "DOWN_dest": ["NOP", "TIK"],
            "colour" : "#6C4E62",
            "textColour" : "#FFFFFF"
        },
        "HAH": {
            "fullName_en": "Hang Hau",
            "fullName_ch": "坑口",
            "UP_dest": ["POA"],
            "DOWN_dest": ["NOP", "LHP"],
            "colour" : "#2687CD",
            "textColour" : "#FFFFFF"
        },
        "POA": {
            "fullName_en": "Po Lam",
            "fullName_ch": "寶琳",
            "UP_dest": [],
            "DOWN_dest": ["NOP", "LHP"],
            "colour" : "#DF3A21",
            "textColour" : "#FFFFFF"
        },
    },
    "AEL": {
        "HOK": {
            "fullName_en": "Hong Kong",
            "fullName_ch": "香港",
            "UP_dest": ["AIR", "AWE"],
            "DOWN_dest": [],
            "colour" : "#959b99",
            "textColour" : "#FFFFFF"
        },
        "KOW": {
            "fullName_en": "Kowloon",
            "fullName_ch": "九龍",
            "UP_dest": ["AIR", "AWE"],
            "DOWN_dest": ["HOK"],
            "colour" : "#3d4044",
            "textColour" : "#FFFFFF"
        },
        "TSY": {
            "fullName_en": "Tsing Yi",
            "fullName_ch": "青衣",
            "UP_dest": ["AIR", "AWE"],
            "DOWN_dest": ["HOK"],
            "colour" : "#51b09e",
            "textColour" : "#FFFFFF"
        },
        "AIR": {
            "fullName_en": "Airport",
            "fullName_ch": "機場",
            "UP_dest": ["AWE"],
            "DOWN_dest": ["HOK"],
            "colour" : "#0f7677",
            "textColour" : "#FFFFFF"
        },
        "AWE": {
            "fullName_en": "AsiaWorld Expo",
            "fullName_ch": "博覽館",
            "UP_dest": [],
            "DOWN_dest": ["AIR", "HOK"],
            "colour" : "#10447d",
            "textColour" : "#FFFFFF"
        },
    },
    "TCL": {
        "HOK": {
            "fullName_en": "Hong Kong",
            "fullName_ch": "香港",
            "UP_dest": ["TUC"],
            "DOWN_dest": [],
            "colour" : "#959b99",
            "textColour" : "#FFFFFF"
        },
        "KOW": {
            "fullName_en": "Kowloon",
            "fullName_ch": "九龍",
            "UP_dest": ["TUC"],
            "DOWN_dest": ["HOK"],
            "colour" : "#3d4044",
            "textColour" : "#FFFFFF"
        },
        "OLY": {
            "fullName_en": "Olympic",
            "fullName_ch": "奧運",
            "UP_dest": ["TUC"],
            "DOWN_dest": ["HOK"],
            "colour" : "#2687cd",
            "textColour" : "#FFFFFF"
        },
        "NAC": {
            "fullName_en": "Nam Cheong",
            "fullName_ch": "南昌",
            "UP_dest": ["TUC"],
            "DOWN_dest": ["HOK"],
            "colour" : "#f9d63b",
            "textColour" : "#000000"
        },
        "LAK": {
            "fullName_en": "Lai King",
            "fullName_ch": "荔景",
            "UP_dest": ["TUC"],
            "DOWN_dest": ["HOK"],
            "colour" : "#8e172e",
            "textColour" : "#FFFFFF"
        },
        "TSY": {
            "fullName_en": "Tsing Yi",
            "fullName_ch": "青衣",
            "UP_dest": ["TUC"],
            "DOWN_dest": ["HOK"],
            "colour" : "#51b09e",
            "textColour" : "#FFFFFF"
        },
        "SUN": {
            "fullName_en": "Sunny Bay",
            "fullName_ch": "欣澳",
            "UP_dest": ["TUC"],
            "DOWN_dest": ["HOK"],
            "colour" : "#959b99",
            "textColour" : "#FFFFFF"
        },
        "TUC": {
            "fullName_en": "Tung Chung",
            "fullName_ch": "東涌",
            "UP_dest": [],
            "DOWN_dest": ["HOK"],
            "colour" : "#603b8f",
            "textColour" : "#FFFFFF"
        },
    },
    "EAL": {
        "ADM": {
            "fullName_en": "Admiralty",
            "fullName_ch": "金鐘",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": [],
            "colour" : "#42ade6",
            "textColour" : "#FFFFFF"
        },
        "EXC": {
            "fullName_en": "Exhibition Centre",
            "fullName_ch": "會展",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#7c7671",
            "textColour" : "#FFFFFF"
        },
        "HUH": {
            "fullName_en": "Hung Hom",
            "fullName_ch": "紅磡",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#e53555",
            "textColour" : "#FFFFFF"
        },
        "MKK": {
            "fullName_en": "Mong Kok East",
            "fullName_ch": "旺角東",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#297034",
            "textColour" : "#FFFFFF"
        },
        "KOT": {
            "fullName_en": "Kowloon Tong",
            "fullName_ch": "九龍塘",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#42ade6",
            "textColour" : "#FFFFFF"
        },
        "TAW": {
            "fullName_en": "Tai Wai",
            "fullName_ch": "大圍",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#10447d",
            "textColour" : "#FFFFFF"
        },
        "SHT": {
            "fullName_en": "Sha Tin",
            "fullName_ch": "沙田",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#ea589c",
            "textColour" : "#FFFFFF"
        },
        "FOT": {
            "fullName_en": "Fo Tan",
            "fullName_ch": "火炭",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#e4981e",
            "textColour" : "#FFFFFF"
        },
        "RAC": {
            "fullName_en": "Racecourse",
            "fullName_ch": "馬場",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#297034",
            "textColour" : "#FFFFFF"
        },
        "UNI": {
            "fullName_en": "University",
            "fullName_ch": "大學",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#2687cd",
            "textColour" : "#FFFFFF"
        },
        "TAP": {
            "fullName_en": "Tai Po Market",
            "fullName_ch": "大埔墟",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#6c4e62",
            "textColour" : "#FFFFFF"
        },
        "TWO": {
            "fullName_en": "Tai Wo",
            "fullName_ch": "太和",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#e4981e",
            "textColour" : "#FFFFFF"
        },
        "FAN": {
            "fullName_en": "Fanling",
            "fullName_ch": "粉嶺",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#9eb329",
            "textColour" : "#FFFFFF"
        },
        "SHS": {
            "fullName_en": "Sheung Shui",
            "fullName_ch": "上水",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"],
            "colour" : "#e4981e",
            "textColour" : "#FFFFFF"
        },
        "LOW": {
            "fullName_en": "Lo Wu",
            "fullName_ch": "羅湖",
            "UP_dest": [],
            "DOWN_dest": ["ADM"],
            "colour" : "#6cc091",
            "textColour" : "#FFFFFF"
        },
        "LMC": {
            "fullName_en": "Lok Ma Chau",
            "fullName_ch": "落馬洲",
            "UP_dest": [],
            "DOWN_dest": ["ADM"],
            "colour" : "#216153",
            "textColour" : "#FFFFFF"
        },
    },
    "TML": {
        "WKS": {
            "fullName_en": "Wu Kai Sha",
            "fullName_ch": "烏溪沙",
            "UP_dest": ["TUM"],
            "DOWN_dest": [],
            "colour" : "#b2461f",
            "textColour" : "#FFFFFF"
        },
        "MOS": {
            "fullName_en": "Ma On Shan",
            "fullName_ch": "馬鞍山",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#6c4e62",
            "textColour" : "#FFFFFF"
        },
        "HEO": {
            "fullName_en": "Heng On",
            "fullName_ch": "恆安",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#42ade6",
            "textColour" : "#FFFFFF"
        },
        "TSH": {
            "fullName_en": "Tai Shui Hang",
            "fullName_ch": "大水坑",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#a9cfd0",
            "textColour" : "#000000"
        },
        "SHM": {
            "fullName_en": "Shek Mun",
            "fullName_ch": "石門",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#f9d63b",
            "textColour" : "#000000"
        },
        "CIO": {
            "fullName_en": "City One",
            "fullName_ch": "第一城",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#e4981e",
            "textColour" : "#FFFFFF"
        },
        "STW": {
            "fullName_en": "Sha Tin Wai",
            "fullName_ch": "沙田圍",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#ea589c",
            "textColour" : "#FFFFFF"
        },
        "CKT": {
            "fullName_en": "Che Kung Temple",
            "fullName_ch": "車公廟",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#e4981e",
            "textColour" : "#FFFFFF"
        },
        "TAW": {
            "fullName_en": "Tai Wai",
            "fullName_ch": "大圍",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#10447d",
            "textColour" : "#FFFFFF"
        },
        "HIK": {
            "fullName_en": "Hin Keng",
            "fullName_ch": "顯徑",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#97b752",
            "textColour" : "#FFFFFF"
        },
        "DIH": {
            "fullName_en": "Diamond Hill",
            "fullName_ch": "鑽石山",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#3d4044",
            "textColour" : "#FFFFFF"
        },
        "KAT": {
            "fullName_en": "Kai Tak",
            "fullName_ch": "啟德",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#e4981e",
            "textColour" : "#FFFFFF"
        },
        "SUW": {
            "fullName_en": "Sung Wong Toi",
            "fullName_ch": "宋王臺",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#e79201",
            "textColour" : "#FFFFFF"
        },
        "TKW": {
            "fullName_en": "To Kwa Wan",
            "fullName_ch": "土瓜灣",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#0081d5",
            "textColour" : "#FFFFFF"
        },
        "HOM": {
            "fullName_en": "Ho Man Tin",
            "fullName_ch": "何文田",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#97b752",
            "textColour" : "#FFFFFF"
        },
        "HUH": {
            "fullName_en": "Hung Hom",
            "fullName_ch": "紅磡",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#e53555",
            "textColour" : "#FFFFFF"
        },
        "ETS": {
            "fullName_en": "East Tsim Sha Tsui",
            "fullName_ch": "尖東",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#f9d63b",
            "textColour" : "#000000"
        },
        "AUS": {
            "fullName_en": "Austin",
            "fullName_ch": "柯士甸",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#b2461f",
            "textColour" : "#FFFFFF"
        },
        "NAC": {
            "fullName_en": "Nam Cheong",
            "fullName_ch": "南昌",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#f9d63b",
            "textColour" : "#000000"
        },
        "MEF": {
            "fullName_en": "Mei Foo",
            "fullName_ch": "美孚",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#42ade6",
            "textColour" : "#FFFFFF"
        },
        "TWW": {
            "fullName_en": "Tsuen Wan West",
            "fullName_ch": "荃灣西",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#8e172e",
            "textColour" : "#FFFFFF"
        },
        "KSR": {
            "fullName_en": "Kam Sheung Road",
            "fullName_ch": "錦上路",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#b2461f",
            "textColour" : "#FFFFFF"
        },
        "YUL": {
            "fullName_en": "Yuen Long",
            "fullName_ch": "元朗",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#51b09e",
            "textColour" : "#FFFFFF"
        },
        "LOP": {
            "fullName_en": "Long Ping",
            "fullName_ch": "朗屏",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#ea589c",
            "textColour" : "#FFFFFF"
        },
        "TIS": {
            "fullName_en": "Tin Shui Wai",
            "fullName_ch": "天水圍",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#e4981e",
            "textColour" : "#FFFFFF"
        },
        "SIH": {
            "fullName_en": "Siu Hong",
            "fullName_ch": "兆康",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"],
            "colour" : "#51b09e",
            "textColour" : "#FFFFFF"
        },
        "TUM": {
            "fullName_en": "Tuen Mun",
            "fullName_ch": "屯門",
            "UP_dest": [],
            "DOWN_dest": ["WKS"],
            "colour" : "#2687cd",
            "textColour" : "#FFFFFF"
        },
    },
    "KTL": {
        "WHA": {
            "fullName_en": "Whampoa",
            "fullName_ch": "黃埔",
            "UP_dest": ["TIK"],
            "DOWN_dest": [],
            "colour" : "#a1a4e2",
            "textColour" : "#FFFFFF"
        },
        "HOM": {
            "fullName_en": "Ho Man Tin",
            "fullName_ch": "何文田",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#97b752",
            "textColour" : "#FFFFFF"
        },
        "YMT": {
            "fullName_en": "Yau Ma Tei",
            "fullName_ch": "油麻地",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#959b99",
            "textColour" : "#FFFFFF"
        },
        "MOK": {
            "fullName_en": "Mong Kok",
            "fullName_ch": "旺角",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#8d172e",
            "textColour" : "#FFFFFF"
        },
        "PRE": {
            "fullName_en": "Prince Edward",
            "fullName_ch": "太子",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#532b4c",
            "textColour" : "#FFFFFF"
        },
        "SKM": {
            "fullName_en": "Shek Kip Mei",
            "fullName_ch": "石硤尾",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#297034",
            "textColour" : "#FFFFFF"
        },
        "KOT": {
            "fullName_en": "Kowloon Tong",
            "fullName_ch": "九龍塘",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#42ade6",
            "textColour" : "#FFFFFF"
        },
        "LOF": {
            "fullName_en": "Lok Fu",
            "fullName_ch": "樂富",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#297034",
            "textColour" : "#FFFFFF"
        },
        "WTS": {
            "fullName_en": "Wong Tai Sin",
            "fullName_ch": "黃大仙",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#f9d63b",
            "textColour" : "#000000"
        },
        "DIH": {
            "fullName_en": "Diamond Hill",
            "fullName_ch": "鑽石山",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#3d4044",
            "textColour" : "#FFFFFF"
        },
        "CHH": {
            "fullName_en": "Choi Hung",
            "fullName_ch": "彩虹",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#42ade6",
            "textColour" : "#FFFFFF"
        },
        "KOB": {
            "fullName_en": "Kowloon Bay",
            "fullName_ch": "九龍灣",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#8d172e",
            "textColour" : "#FFFFFF"
        },
        "NTK": {
            "fullName_en": "Ngau Tau Kok",
            "fullName_ch": "牛頭角",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#297034",
            "textColour" : "#FFFFFF"
        },
        "KWT": {
            "fullName_en": "Kwun Tong",
            "fullName_ch": "觀塘",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#6d7074",
            "textColour" : "#FFFFFF"
        },
        "LAT": {
            "fullName_en": "Lam Tin",
            "fullName_ch": "藍田",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#10447d",
            "textColour" : "#FFFFFF"
        },
        "YAT": {
            "fullName_en": "Yau Tong",
            "fullName_ch": "油塘",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"],
            "colour" : "#f9d63b",
            "textColour" : "#000000"
        },
        "TIK": {
            "fullName_en": "Tiu Keng Leng",
            "fullName_ch": "調景嶺",
            "UP_dest": [],
            "DOWN_dest": ["WHA"],
            "colour" : "#9eb329",
            "textColour" : "#FFFFFF"
        },
    },
    "ISL": {
        "KET": {
            "fullName_en": "Kennedy Town",
            "fullName_ch": "堅尼地城",
            "UP_dest": ["CHW"],
            "DOWN_dest": [],
            "colour" : "#a9cfd0",
            "textColour" : "#000000"
        },
        "HKU": {
            "fullName_en": "HKU",
            "fullName_ch": "香港大學",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#9eb329",
            "textColour" : "#FFFFFF"
        },
        "SYP": {
            "fullName_en": "Sai Ying Pun",
            "fullName_ch": "西營盤",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#6c4e62",
            "textColour" : "#FFFFFF"
        },
        "SHW": {
            "fullName_en": "Sheung Wan",
            "fullName_ch": "上環",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#e4981e",
            "textColour" : "#FFFFFF"
        },
        "CEN": {
            "fullName_en": "Central",
            "fullName_ch": "中環",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#8e172e",
            "textColour" : "#FFFFFF"
        },
        "ADM": {
            "fullName_en": "Admiralty",
            "fullName_ch": "金鐘",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#42ade6",
            "textColour" : "#FFFFFF"
        },
        "WAC": {
            "fullName_en": "Wan Chai",
            "fullName_ch": "灣仔",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#9eb329",
            "textColour" : "#FFFFFF"
        },
        "CAB": {
            "fullName_en": "Causeway Bay",
            "fullName_ch": "銅鑼灣",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#6c4e62",
            "textColour" : "#FFFFFF"
        },
        "TIH": {
            "fullName_en": "Tin Hau",
            "fullName_ch": "天后",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#df3a21",
            "textColour" : "#FFFFFF"
        },
        "FOH": {
            "fullName_en": "Fortress Hill",
            "fullName_ch": "炮台山",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#297034",
            "textColour" : "#FFFFFF"
        },
        "NOP": {
            "fullName_en": "North Point",
            "fullName_ch": "北角",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#f48e21",
            "textColour" : "#FFFFFF"
        },
        "QUB": {
            "fullName_en": "Quarry Bay",
            "fullName_ch": "鰂魚涌",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#24685a",
            "textColour" : "#FFFFFF"
        },
        "TAK": {
            "fullName_en": "Tai Koo",
            "fullName_ch": "太古",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#8e172e",
            "textColour" : "#FFFFFF"
        },
        "SWH": {
            "fullName_en": "Sai Wan Ho",
            "fullName_ch": "西灣河",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#e4981e",
            "textColour" : "#FFFFFF"
        },
        "SKW": {
            "fullName_en": "Shau Kei Wan",
            "fullName_ch": "筲箕灣",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#221e69",
            "textColour" : "#FFFFFF"
        },
        "HFC": {
            "fullName_en": "Heng Fa Chuen",
            "fullName_ch": "杏花邨",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"],
            "colour" : "#8e172e",
            "textColour" : "#FFFFFF"
        },
        "CHW": {
            "fullName_en": "Chai Wan",
            "fullName_ch": "柴灣",
            "UP_dest": [],
            "DOWN_dest": ["KET"],
            "colour" : "#297034",
            "textColour" : "#FFFFFF"
        },
    },
    "TWL": {
        "CEN": {
            "fullName_en": "Central",
            "fullName_ch": "中環",
            "UP_dest": ["TSW"],
            "DOWN_dest": [""],
            "colour" : "#e51400",
            "textColour" : "#FFFFFF"
        },
        "ADM": {
            "fullName_en": "Admiralty",
            "fullName_ch": "金鐘",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#42ade6",
            "textColour" : "#FFFFFF"
        },
        "TST": {
            "fullName_en": "Tsim Sha Tsui",
            "fullName_ch": "尖沙咀",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#f9d63b",
            "textColour" : "#000000"
        },
        "JOR": {
            "fullName_en": "Jordan",
            "fullName_ch": "佐敦",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#297034",
            "textColour" : "#FFFFFF"
        },
        "YMT": {
            "fullName_en": "Yau Ma Tei",
            "fullName_ch": "油麻地",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#959b99",
            "textColour" : "#FFFFFF"
        },
        "MOK": {
            "fullName_en": "Mong Kok",
            "fullName_ch": "旺角",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#8d172e",
            "textColour" : "#FFFFFF"
        },
        "PRE": {
            "fullName_en": "Prince Edward",
            "fullName_ch": "太子",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#532b4c",
            "textColour" : "#FFFFFF"
        },
        "SSP": {
            "fullName_en": "Sham Shui Po",
            "fullName_ch": "深水埗",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#297034",
            "textColour" : "#FFFFFF"
        },
        "CSW": {
            "fullName_en": "Cheung Sha Wan",
            "fullName_ch": "長沙灣",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#e4981e",
            "textColour" : "#FFFFFF"
        },
        "LCK": {
            "fullName_en": "Lai Chi Kok",
            "fullName_ch": "荔枝角",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#df3a21",
            "textColour" : "#FFFFFF"
        },
        "MEF": {
            "fullName_en": "Mei Foo",
            "fullName_ch": "美孚",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#42ade6",
            "textColour" : "#FFFFFF"
        },
        "LAK": {
            "fullName_en": "Lai King",
            "fullName_ch": "荔景",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#8e172e",
            "textColour" : "#FFFFFF"
        },
        "KWF": {
            "fullName_en": "Kwai Fong",
            "fullName_ch": "葵芳",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#297034",
            "textColour" : "#FFFFFF"
        },
        "KWH": {
            "fullName_en": "Kwai Hing",
            "fullName_ch": "葵興",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#f9d63b",
            "textColour" : "#000000"
        },
        "TWH": {
            "fullName_en": "Tai Wo Hau",
            "fullName_ch": "大窩口",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"],
            "colour" : "#297034",
            "textColour" : "#FFFFFF"
        },
        "TSW": {
            "fullName_en": "Tsuen Wan",
            "fullName_ch": "荃灣",
            "UP_dest": [],
            "DOWN_dest": ["CEN"],
            "colour" : "#8e172e",
            "textColour" : "#FFFFFF"
        },
    },
    
    "SIL": {
        "ADM": {
            "fullName_en": "Admiralty",
            "fullName_ch": "金鐘",
            "UP_dest": ["SOH"],
            "DOWN_dest": [],
            "colour" : "#42ade6",
            "textColour" : "#FFFFFF"
        },
        "OCP": {
            "fullName_en": "Ocean Park",
            "fullName_ch": "海洋公園",
            "UP_dest": ["SOH"],
            "DOWN_dest": ["ADM"],
            "colour" : "#1574d3",
            "textColour" : "#FFFFFF"
        },
        "WCH": {
            "fullName_en": "Wong Chuk Hang",
            "fullName_ch": "黃竹坑",
            "UP_dest": ["SOH"],
            "DOWN_dest": ["ADM"],
            "colour" : "#a7b208",
            "textColour" : "#FFFFFF"
        },
        "LET": {
            "fullName_en": "Lei Tung",
            "fullName_ch": "利東",
            "UP_dest": ["SOH"],
            "DOWN_dest": ["ADM"],
            "colour" : "#de6d3f",
            "textColour" : "#FFFFFF"
        },
        "SOH": {
            "fullName_en": "South Horizons",
            "fullName_ch": "海怡半島",
            "UP_dest": [],
            "DOWN_dest": ["ADM"],
            "colour" : "#6da926",
            "textColour" : "#FFFFFF"
        },
        
    },
    
    "DRL": {
        "DIS": {
            "fullName_en": "Disneyland Resort",
            "fullName_ch": "迪士尼",
            "UP_dest": ["SUN"],
            "DOWN_dest": [],
            "colour" : "#297034",
            "textColour" : "#FFFFFF"
        },
        "SUN": {
            "fullName_en": "Sunny Bay",
            "fullName_ch": "欣澳",
            "UP_dest": [],
            "DOWN_dest": ["DIS"],
            "colour" : "#959b99",
            "textColour" : "#FFFFFF"
        },
    }
}

let lineList = {
    "KTL": {
        "fullName_en": "Kwun Tong Line",
        "fullName_ch": "觀塘綫",
        "colour": "#009F40",
        "enableETA": false,
        "enableLOHAS": true,
        "UP_dest": ["TIK"],
        "DOWN_dest": ["WHA"]
    },
    "TWL": {
        "fullName_en": "Tseun Wan Line",
        "fullName_ch": "荃灣綫",
        "colour": "#E50011",
        "enableETA": true,
        "enableLOHAS": false,
        "UP_dest": ["TSW"],
        "DOWN_dest": ["CEN"]
    },
    "ISL": {
        "fullName_en": "Island Line",
        "fullName_ch": "港島綫",
        "colour": "#0074C1",
        "enableETA": false,
        "enableLOHAS": false,
        "UP_dest": ["CHW"],
        "DOWN_dest": ["KET"]
    },
    "TKL": {
        "fullName_en": "Tseung Kwan O Line",
        "fullName_ch": "將軍澳綫",
        "colour": "#7D3C92",
        "enableETA": true,
        "enableLOHAS": true,
        "UP_dest": ["POA", "LHP"],
        "DOWN_dest": ["NOP"]
    },
    "SIL": {
        "fullName_en": "South Island Line",
        "fullName_ch": "南港島線",
        "colour": "#CBD300",
        "enableETA": true,
        "enableLOHAS": false,
        "UP_dest": ["SOH"],
        "DOWN_dest": ["ADM"]
    },
    "TCL": {
        "fullName_en": "Tung Chung Line",
        "fullName_ch": "東涌綫",
        "colour": "#F3982C",
        "enableETA": true,
        "enableLOHAS": false,
        "UP_dest": ["TUC"],
        "DOWN_dest": ["HOK"]
    },
    "AEL": {
        "fullName_en": "Airport Express",
        "fullName_ch": "機場快綫",
        "colour": "#00878E",
        "enableETA": true,
        "enableLOHAS": false,
        "UP_dest": ["AWE"],
        "DOWN_dest": ["HOK"]
    },
    "DRL": {
        "fullName_en": "Disneyland Resort Line",
        "fullName_ch": "迪士尼線",
        "colour": "#EB6DA5",
        "enableETA": false,
        "enableLOHAS": false,
        "UP_dest": ["SUN"],
        "DOWN_dest": ["DIS"]
    },
    "EAL": {
        "fullName_en": "East Rail Line",
        "fullName_ch": "東鐵線",
        "colour": "#5DB6E7",
        "enableETA": true,
        "enableLOHAS": false,
        "UP_dest": ["LOW", "LMC"],
        "DOWN_dest": ["ADM"]
    },
    "TML": {
        "fullName_en": "Tuen Ma Line",
        "fullName_ch": "屯馬綫",
        "colour": "#9B2E00",
        "enableETA": true,
        "enableLOHAS": false,
        "UP_dest": ["TUM"],
        "DOWN_dest": ["WKS"]
    },
    "LRT": {
        "fullName_en": "Light Rail",
        "fullName_ch": "輕鐵",
        "colour": "#DAB400",
        "enableETA": false,
        "enableLOHAS": false,
        "UP_dest": [],
        "DOWN_dest": []
    },
    "HSR": {
        "fullName_en": "High Speed Rail",
        "fullName_ch": "高速鐵路",
        "colour": "#9B938A",
        "enableETA": false,
        "enableLOHAS": false,
        "UP_dest": [],
        "DOWN_dest": []
    },
    "SMN": {
        "fullName_en": "Shenzhen Metro Network",
        "fullName_ch": "深圳地鐵網絡",
        "colour": "#C0C3C5",
        "enableETA": false,
        "enableLOHAS": false,
        "UP_dest": [],
        "DOWN_dest": []
    },
}



function startPIDS(){
    document.getElementById("startPIDSButton").hidden = true;
    document.getElementById("stopPIDSButton").hidden = false;
    intervalID = setInterval(function(){ updatePage(); }, 100);
    switchLangInterval = setInterval(function(){switchLang();}, 10000);
    document.getElementById("settingsDIV").hidden = true;
    document.getElementById("ETAContainerDIV").hidden = false;
}

function stopPIDS(){
    document.getElementById("stopPIDSButton").hidden = true;
    document.getElementById("startPIDSButton").hidden = false;
    clearInterval(intervalID);
    clearInterval(switchLangInterval);
    document.getElementById("settingsDIV").hidden = false;
    document.getElementById("ETAContainerDIV").hidden = true;
}

function setDropdown(line = "" , station = "" , direction = ""){
    document.getElementById("lineDropdown").value = line;
    updateStationDropdown(line);
    document.getElementById("stationDropdown").value = station;
    updateDirectionDropdown(line, station);
    document.getElementById("directionDropdown").value = direction;
    

}



function callAPI(line, station){
    var lineSta = line + '-' + station
    var request = 'line=' + line + '&sta=' + station
    var url = 'https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?' + request
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    var response = Httpreq.responseText;
    
    var json_obj = JSON.parse(response);
    
    return json_obj;
    
}



function updateLabels(json, line, station, direction){
    var lineStation = line + '-' + station
    var dir = direction
    
    if(dir in json.data[lineStation]) {
        document.getElementById("ETAStatusContainer").hidden = true;
        
        for (let i = 0; i < 5; i++) {
            let elementIDdestination = "ETA" + i + "destination";
            let elementIDplatform = "ETA" + i + "platform";
            let elementIDplatformContainer = "ETA" + i + "platformContainer";
            let elementIDtime = "ETA" + i + "time";
            let fullNameWithLang = "fullName_" + lang;
            
            if(i in json.data[lineStation][dir]){
                
                let ttnt = json.data[lineStation][dir][i]["ttnt"];
                let dest = json.data[lineStation][dir][i]["dest"];
                let plat = json.data[lineStation][dir][i]["plat"];
                let lineColour = lineList[line]["colour"];
                let destFullName = newStationList[line][dest][fullNameWithLang];
                let timeMessage = "";
                
                if(ttnt < 1){
                    timeMessage = ""
                } else if(lang=="ch"){
                    timeMessage = ttnt + "<span style='display: inline-block; width:7vw; font-size:3vw; margin-left: 1vw; text-align: right;'>分鐘</span>"
                } else if(ttnt == 1) {
                    timeMessage = ttnt + "<span style='display: inline-block; width:7vw; font-size:3vw; margin-left: 1vw;text-align: right;'>min</span>"
                } else {
                    timeMessage = ttnt + "<span style='display: inline-block; width:7vw; font-size:3vw; margin-left: 1vw;text-align: right;'>mins</span>"
                }
                if(lang == "ch"){
                    document.getElementById(elementIDdestination).style = "margin-left: 2vw; font-size: 6vw; letter-spacing: 2vw!important;"
                } else {
                    document.getElementById(elementIDdestination).style = "margin-left: 2vw; font-size: 6vw;"
                }
                document.getElementById(elementIDdestination).innerHTML = destFullName;
                document.getElementById(elementIDplatform).innerHTML = plat;
                document.getElementById(elementIDtime).innerHTML = timeMessage;
               document.getElementById(elementIDplatformContainer).style = "background-color: " + lineColour + " ; font-size: 4vw;";
                
            } else {
                document.getElementById(elementIDdestination).innerHTML = "";
                document.getElementById(elementIDplatform).innerHTML = "";
                document.getElementById(elementIDtime).innerHTML = "";
                
            }
        }
    } else {
        document.getElementById("ETAStatusContainer").hidden = false;
        document.getElementById("ETAStatus").innerHTML = "Data not available";
        
    }
    
    var date = new Date();
    var currentTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
    document.getElementById("currentTimeLabel").innerHTML = currentTime;
}






function updatePage(){
    let station = getURLParameter("sta");
    
    let line = getURLParameter("line");
    
    var directionDropdown = document.getElementById("directionDropdown");
    let direction = directionDropdown.value;
    
    updateLabels(callAPI(line, station), line, station, direction);
    
    const query = "?line=" + line + "&sta=" + station + "&dir=" + direction;
    history.replaceState(null, "", query);
    
}

function lineChanged(){
    
    var lineDropdown = document.getElementById("lineDropdown");
    var line = lineDropdown.value;
    
    updateStationDropdown(line);
    updateDirectionDropdown(line, '')

    
    const query = "?line=" + line;
    history.replaceState(null, "", query);
    
}

function stationChanged(){
    var stationDropdown = document.getElementById("stationDropdown");
    let station = stationDropdown.value;
    var lineDropdown = document.getElementById("lineDropdown");
    let line = lineDropdown.value;
    if(line != '' && station != ''){
        updateDirectionDropdown(line, station);
        
        const query = "?line=" + line + "&sta=" + station;
        history.replaceState(null, "", query);
    }
}

function directionChanged(){
    var stationDropdown = document.getElementById("stationDropdown");
    let station = stationDropdown.value;
    var lineDropdown = document.getElementById("lineDropdown");
    let line = lineDropdown.value;
    var directionDropdown = document.getElementById("directionDropdown");
    let direction = directionDropdown.value;
    const query = "?line=" + line + "&sta=" + station + "&dir=" + direction;
    history.replaceState(null, "", query);
    if(direction != '' && station != '' && line != ''){
        document.getElementById("startPIDSButton").hidden = false;
        updateLabels(callAPI(line, station), line, station, direction);
    }
    
}

function updateLineDropdown(){
    document.getElementById("lineDropdown").innerHTML = "<option value='' disabled selected> --- Lines --- </option>"
    let fullNameWithLang = "fullName_" + lang;
    for(const lineConcerned in lineList){
        if(lineList[lineConcerned]["enableETA"] == true){
            document.getElementById("lineDropdown").innerHTML += "<option value='" + lineConcerned + "'>" + lineList[lineConcerned][fullNameWithLang] + "</option>"
        } else {
            document.getElementById("lineDropdown").innerHTML += "<option value='" + lineConcerned + "' disabled>" + lineList[lineConcerned][fullNameWithLang] + "</option>"
        }
    }

}


function updateStationDropdown(line){
    document.getElementById("stationDropdown").innerHTML = "<option value='' disabled selected> --- Stations --- </option>"
    
    if(line == ''){
        
        document.getElementById("stationDropdown").innerHTML += "<option value='Placeholder' disabled > --- Stations will appear after a line is choosen --- </option>"
    } else {
        var listOfStationsInSelectedLine = newStationList[line];
        let fullNameWithLang = "fullName_" + lang;
        for (var staID in listOfStationsInSelectedLine){
            
            document.getElementById("stationDropdown").innerHTML += "<option value='" + staID + "'>" + listOfStationsInSelectedLine[staID][fullNameWithLang] + "</option>"
        }
    }
}

function updateDirectionDropdown(line, station){
    document.getElementById("directionDropdown").innerHTML = "<option value='' disabled selected> --- Direction --- </option>"
    if(line == '' || station ==''){
        document.getElementById("directionDropdown").innerHTML += "<option value='Placeholder' disabled > --- Destinations will appear after a line and station is choosen --- </option>"
        
    } else {
        let fullNameWithLang = "fullName_" + lang;
        const toLocaleString = {
            "ch" : "往：",
            "en" : "To: "
        }
        
        for(var dir of directions){
            let dirDest = dir + "_dest";
            let destinations = newStationList[line][station][dirDest];
            var destFullNames = "";
            if(destinations == ''){
                
            } else {
                for(const destConcerned of destinations){
                    
                    if(destFullNames == ""){
                        destFullNames += newStationList[line][destConcerned][fullNameWithLang];
                    } else {
                        
                        destFullNames += " / " + newStationList[line][destConcerned][fullNameWithLang];
                    }
                    
                }
                
                document.getElementById("directionDropdown").innerHTML += "<option value='" + dir + "'>" + toLocaleString[lang] + destFullNames + "</option>"
            }
        }
        
        
    }
}

function processURLParameter(){
    const line = getURLParameter("line");
    const station = getURLParameter("sta");
    const direction = getURLParameter("dir");
    console.log({ line });
    console.log({ station });
    console.log({ direction });
    setDropdown(line, station, direction);
    if(direction != '' && station != '' && line != ''){
        document.getElementById("startPIDSButton").hidden = false;
        updateLabels(callAPI(line, station), line, station, direction);
    }
    
    if(getURLParameter("dev") == "true"){
        document.getElementById("stationSelectorDIV").hidden = false;
        }
    loadSelectorDIV();
}

function getURLParameter(URLParameterID){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log({ URLParameterID });
    return urlParams.get(URLParameterID) || "";
}

function switchLang(){
    if(lang=="en"){
        
        lang = "ch";
        console.log({ lang });
    } else {
        lang = "en"
        console.log({ lang });
    }
}

function loadSelectorDIV(){
    for(const line in lineList){
        if(lineList[line]["enableETA"] == true){
            
        } else {

        }
        
        document.getElementById("stationSelectorDIV").innerHTML += "<div style='background-color:" + lineList[line]["colour"] +  "; color: #FFFFFF; '>" + lineList[line]["fullName_ch"] + "<br>" + lineList[line]["fullName_en"] + "</div>";
        
        document.getElementById("stationSelectorDIV").innerHTML += "<br>";
        
        for(const station in newStationList[line]){
            document.getElementById("stationSelectorDIV").innerHTML += "<div style='background-color:" + newStationList[line][station]["colour"] +  "; color: " + newStationList[line][station]["textColour"] + ";'>" + newStationList[line][station]["fullName_ch"] + "<br>" + newStationList[line][station]["fullName_en"] + "</div>";
            
            const toLocaleString = {
                "ch" : "往：",
                "en" : "To: "
            }
            
            for(var dir of directions){
                let dirDest = dir + "_dest";
                let destinations = newStationList[line][station][dirDest];
                var destFullNames_ch = "";
                var destFullNames_en = "";
                if(destinations == ''){
                    
                } else {
                    for(const destConcerned of destinations){
                        
                        if(destFullNames_ch == ""){
                            destFullNames_ch += newStationList[line][destConcerned]["fullName_ch"];
                        } else {
                            
                            destFullNames_ch += " / " + newStationList[line][destConcerned]["fullName_ch"];
                        }
                        
                        if(destFullNames_en == ""){
                            destFullNames_en += newStationList[line][destConcerned]["fullName_en"];
                        } else {
                            
                            destFullNames_en += " / " + newStationList[line][destConcerned]["fullName_en"];
                        }
                        
                    }
                    
                    document.getElementById("stationSelectorDIV").innerHTML += "<div>" + toLocaleString["ch"] + destFullNames_ch + "<br>" + toLocaleString["en"] + destFullNames_en + "</div>"
                }
            }
        }
        
        document.getElementById("stationSelectorDIV").innerHTML += "<br>";
        document.getElementById("stationSelectorDIV").innerHTML += "<br>";
    }
    
    
}

updateLineDropdown();
updateStationDropdown("");
updateDirectionDropdown("", "");
processURLParameter();
