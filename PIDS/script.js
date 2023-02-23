const directions = ["UP", "DOWN"];
let intervalID;
let switchLangInterval;

var jsonResponse;

var lang = "ch";

let newStationList = {
    "TKL": {
        "NOP": {
            "fullName_en": "North Point",
            "fullName_ch": "北角",
            "UP_dest": ["POA", "LHP"],
            "DOWN_dest": []
        },
        "QUB": {
            "fullName_en": "Quarry Bay",
            "fullName_ch": "鰂魚涌",
            "UP_dest": ["POA", "LHP"],
            "DOWN_dest": ["NOP"]
        },
        "YAT": {
            "fullName_en": "Yau Tong",
            "fullName_ch": "油塘",
            "UP_dest": ["POA", "LHP"],
            "DOWN_dest": ["NOP"]
        },
        "TIK": {
            "fullName_en": "Tiu Keng Leng",
            "fullName_ch": "調景嶺",
            "UP_dest": ["POA", "LHP"],
            "DOWN_dest": ["NOP"]
        },
        "TKO": {
            "fullName_en": "Tseung Kwan O",
            "fullName_ch": "將軍澳",
            "UP_dest": ["POA", "LHP"],
            "DOWN_dest": ["NOP"]
        },
        "LHP": {
            "fullName_en": "LOHAS Park",
            "fullName_ch": "康城",
            "UP_dest": [],
            "DOWN_dest": ["NOP", "TIK"]
        },
        "HAH": {
            "fullName_en": "Hang Hau",
            "fullName_ch": "坑口",
            "UP_dest": ["POA"],
            "DOWN_dest": ["NOP", "LHP"]
        },
        "POA": {
            "fullName_en": "Po Lam",
            "fullName_ch": "寶琳",
            "UP_dest": [],
            "DOWN_dest": ["NOP", "LHP"]
        },
    },
    "AEL": {
        "HOK": {
            "fullName_en": "Hong Kong",
            "fullName_ch": "香港",
            "UP_dest": ["AIR", "AWE"],
            "DOWN_dest": []
        },
        "KOW": {
            "fullName_en": "Kowloon",
            "fullName_ch": "九龍",
            "UP_dest": ["AIR", "AWE"],
            "DOWN_dest": ["HOK"]
        },
        "TSY": {
            "fullName_en": "Tsing Yi",
            "fullName_ch": "青衣",
            "UP_dest": ["AIR", "AWE"],
            "DOWN_dest": ["HOK"]
        },
        "AIR": {
            "fullName_en": "Airport",
            "fullName_ch": "機場",
            "UP_dest": ["AWE"],
            "DOWN_dest": ["HOK"]
        },
        "AWE": {
            "fullName_en": "AsiaWorld Expo",
            "fullName_ch": "博覽館",
            "UP_dest": [],
            "DOWN_dest": ["AIR", "HOK"]
        },
    },
    "TCL": {
        "HOK": {
            "fullName_en": "Hong Kong",
            "fullName_ch": "香港",
            "UP_dest": ["TUC"],
            "DOWN_dest": []
        },
        "KOW": {
            "fullName_en": "Kowloon",
            "fullName_ch": "九龍",
            "UP_dest": ["TUC"],
            "DOWN_dest": ["HOK"]
        },
        "OLY": {
            "fullName_en": "Olympic",
            "fullName_ch": "奧運",
            "UP_dest": ["TUC"],
            "DOWN_dest": ["HOK"]
        },
        "NAC": {
            "fullName_en": "Nam Cheong",
            "fullName_ch": "南昌",
            "UP_dest": ["TUC"],
            "DOWN_dest": ["HOK"]
        },
        "LAK": {
            "fullName_en": "Lai King",
            "fullName_ch": "荔景",
            "UP_dest": ["TUC"],
            "DOWN_dest": ["HOK"]
        },
        "TSY": {
            "fullName_en": "Tsing Yi",
            "fullName_ch": "青衣",
            "UP_dest": ["TUC"],
            "DOWN_dest": ["HOK"]
        },
        "SUN": {
            "fullName_en": "Sunny Bay",
            "fullName_ch": "欣澳",
            "UP_dest": ["TUC"],
            "DOWN_dest": ["HOK"]
        },
        "TUC": {
            "fullName_en": "Tung Chung",
            "fullName_ch": "東涌",
            "UP_dest": [],
            "DOWN_dest": ["HOK"]
        },
    },
    "EAL": {
        "ADM": {
            "fullName_en": "Admiralty",
            "fullName_ch": "金鐘",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": []
        },
        "EXC": {
            "fullName_en": "Exhibition Centre",
            "fullName_ch": "會展",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "HUH": {
            "fullName_en": "Hung Hom",
            "fullName_ch": "紅磡",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "MKK": {
            "fullName_en": "Mong Kok East",
            "fullName_ch": "旺角東",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "KOT": {
            "fullName_en": "Kowloon Tong",
            "fullName_ch": "九龍塘",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "TAW": {
            "fullName_en": "Tai Wai",
            "fullName_ch": "大圍",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "SHT": {
            "fullName_en": "Sha Tin",
            "fullName_ch": "沙田",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "FOT": {
            "fullName_en": "Fo Tan",
            "fullName_ch": "火炭",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "RAC": {
            "fullName_en": "Racecourse",
            "fullName_ch": "馬場",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "UNI": {
            "fullName_en": "University",
            "fullName_ch": "大學",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "TAP": {
            "fullName_en": "Tai Po Market",
            "fullName_ch": "大埔墟",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "TWO": {
            "fullName_en": "Tai Wo",
            "fullName_ch": "太和",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "FAN": {
            "fullName_en": "Fanling",
            "fullName_ch": "粉嶺",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "SHS": {
            "fullName_en": "Sheung Shui",
            "fullName_ch": "上水",
            "UP_dest": ["LOW", "LMC"],
            "DOWN_dest": ["ADM"]
        },
        "LOW": {
            "fullName_en": "Lo Wu",
            "fullName_ch": "羅湖",
            "UP_dest": [],
            "DOWN_dest": ["ADM"]
        },
        "LMC": {
            "fullName_en": "Lok Ma Chau",
            "fullName_ch": "落馬洲",
            "UP_dest": [],
            "DOWN_dest": ["ADM"]
        },
    },
    "TML": {
        "WKS": {
            "fullName_en": "Wu Kai Sha",
            "fullName_ch": "烏溪沙",
            "UP_dest": ["TUM"],
            "DOWN_dest": []
        },
        "MOS": {
            "fullName_en": "Ma On Shan",
            "fullName_ch": "馬鞍山",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "HEO": {
            "fullName_en": "Heng On",
            "fullName_ch": "恆安",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "TSH": {
            "fullName_en": "Tai Shui Hang",
            "fullName_ch": "大水坑",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "SHM": {
            "fullName_en": "Shek Mun",
            "fullName_ch": "石門",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "CIO": {
            "fullName_en": "City One",
            "fullName_ch": "第一城",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "STW": {
            "fullName_en": "Sha Tin Wai",
            "fullName_ch": "沙田圍",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "CKT": {
            "fullName_en": "Che Kung Temple",
            "fullName_ch": "車公廟",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "TAW": {
            "fullName_en": "Tai Wai",
            "fullName_ch": "大圍",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "HIK": {
            "fullName_en": "Hin Keng",
            "fullName_ch": "顯徑",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "DIH": {
            "fullName_en": "Diamond Hill",
            "fullName_ch": "鑽石山",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "KAT": {
            "fullName_en": "Kai Tak",
            "fullName_ch": "啟德",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "SUW": {
            "fullName_en": "Sung Wong Toi",
            "fullName_ch": "宋王臺",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "TKW": {
            "fullName_en": "To Kwa Wan",
            "fullName_ch": "土瓜灣",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "HOM": {
            "fullName_en": "Ho Man Tin",
            "fullName_ch": "何文田",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "HUH": {
            "fullName_en": "Hung Hom",
            "fullName_ch": "紅磡",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "ETS": {
            "fullName_en": "East Tsim Sha Tsui",
            "fullName_ch": "尖東",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "AUS": {
            "fullName_en": "Austin",
            "fullName_ch": "柯士甸",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "NAC": {
            "fullName_en": "Nam Cheong",
            "fullName_ch": "南昌",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "MEF": {
            "fullName_en": "Mei Foo",
            "fullName_ch": "美孚",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "TWW": {
            "fullName_en": "Tsuen Wan West",
            "fullName_ch": "荃灣西",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "KSR": {
            "fullName_en": "Kam Sheung Road",
            "fullName_ch": "錦上路",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "YUL": {
            "fullName_en": "Yuen Long",
            "fullName_ch": "元朗",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "LOP": {
            "fullName_en": "Long Ping",
            "fullName_ch": "朗屏",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "TIS": {
            "fullName_en": "Tin Shui Wai",
            "fullName_ch": "天水圍",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "SIH": {
            "fullName_en": "Siu Hong",
            "fullName_ch": "兆康",
            "UP_dest": ["TUM"],
            "DOWN_dest": ["WKS"]
        },
        "TUM": {
            "fullName_en": "Tuen Mun",
            "fullName_ch": "屯門",
            "UP_dest": [],
            "DOWN_dest": ["WKS"]
        },
    },
    "KTL": {
        "WHA": {
            "fullName_en": "Whampoa",
            "fullName_ch": "黃埔",
            "UP_dest": ["TIK"],
            "DOWN_dest": []
        },
        "HOM": {
            "fullName_en": "Ho Man Tin",
            "fullName_ch": "何文田",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "YMT": {
            "fullName_en": "Yau Ma Tei",
            "fullName_ch": "油麻地",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "MOK": {
            "fullName_en": "Mong Kok",
            "fullName_ch": "旺角",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "PRE": {
            "fullName_en": "Prince Edward",
            "fullName_ch": "太子",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "SKM": {
            "fullName_en": "Shek Kip Mei",
            "fullName_ch": "石硤尾",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "KOT": {
            "fullName_en": "Kowloon Tong",
            "fullName_ch": "九龍塘",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "LOF": {
            "fullName_en": "Lok Fu",
            "fullName_ch": "樂富",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "WTS": {
            "fullName_en": "Wong Tai Sin",
            "fullName_ch": "黃大仙",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "DIH": {
            "fullName_en": "Diamond Hill",
            "fullName_ch": "鑽石山",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "CHH": {
            "fullName_en": "Choi Hung",
            "fullName_ch": "彩虹",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "KOB": {
            "fullName_en": "Kowloon Bay",
            "fullName_ch": "九龍灣",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "NTK": {
            "fullName_en": "Ngau Tau Kok",
            "fullName_ch": "牛頭角",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "KWT": {
            "fullName_en": "Kwun Tong",
            "fullName_ch": "觀塘",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "LAT": {
            "fullName_en": "Lam Tin",
            "fullName_ch": "藍田",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "YAT": {
            "fullName_en": "Yau Tong",
            "fullName_ch": "油塘",
            "UP_dest": ["TIK"],
            "DOWN_dest": ["WHA"]
        },
        "TIK": {
            "fullName_en": "Tiu Keng Leng",
            "fullName_ch": "調景嶺",
            "UP_dest": [],
            "DOWN_dest": ["WHA"]
        },
    },
    "ISL": {
        "KET": {
            "fullName_en": "Kennedy Town",
            "fullName_ch": "堅尼地城",
            "UP_dest": ["CHW"],
            "DOWN_dest": []
        },
        "HKU": {
            "fullName_en": "HKU",
            "fullName_ch": "香港大學",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "SYP": {
            "fullName_en": "Sai Ying Pun",
            "fullName_ch": "西營盤",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "SHW": {
            "fullName_en": "Sheung Wan",
            "fullName_ch": "上環",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "CEN": {
            "fullName_en": "Central",
            "fullName_ch": "中環",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "ADM": {
            "fullName_en": "Admiralty",
            "fullName_ch": "金鐘",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "WAC": {
            "fullName_en": "Wan Chai",
            "fullName_ch": "灣仔",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "CAB": {
            "fullName_en": "Causeway Bay",
            "fullName_ch": "銅鑼灣",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "TIH": {
            "fullName_en": "Tin Hau",
            "fullName_ch": "天后",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "FOH": {
            "fullName_en": "Fortress Hill",
            "fullName_ch": "炮台山",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "NOP": {
            "fullName_en": "North Point",
            "fullName_ch": "北角",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "QUB": {
            "fullName_en": "Quarry Bay",
            "fullName_ch": "鰂魚涌",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "TAK": {
            "fullName_en": "Tai Koo",
            "fullName_ch": "太古",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "SWH": {
            "fullName_en": "Sai Wan Ho",
            "fullName_ch": "西灣河",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "SKW": {
            "fullName_en": "Shau Kei Wan",
            "fullName_ch": "筲箕灣",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "HFC": {
            "fullName_en": "Heng Fa Chuen",
            "fullName_ch": "杏花邨",
            "UP_dest": ["CHW"],
            "DOWN_dest": ["KET"]
        },
        "CHW": {
            "fullName_en": "Chai Wan",
            "fullName_ch": "柴灣",
            "UP_dest": [],
            "DOWN_dest": ["KET"]
        },
    },
    "TWL": {
        "CEN": {
            "fullName_en": "Central",
            "fullName_ch": "中環",
            "UP_dest": ["TSW"],
            "DOWN_dest": [""]
        },
        "ADM": {
            "fullName_en": "Admiralty",
            "fullName_ch": "金鐘",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "TST": {
            "fullName_en": "Tsim Sha Tsui",
            "fullName_ch": "尖沙咀",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "JOR": {
            "fullName_en": "Jordan",
            "fullName_ch": "佐敦",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "YMT": {
            "fullName_en": "Yau Ma Tei",
            "fullName_ch": "油麻地",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "MOK": {
            "fullName_en": "Mong Kok",
            "fullName_ch": "旺角",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "PRE": {
            "fullName_en": "Prince Edward",
            "fullName_ch": "太子",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "SSP": {
            "fullName_en": "Sham Shui Po",
            "fullName_ch": "深水埗",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "CSW": {
            "fullName_en": "Cheung Sha Wan",
            "fullName_ch": "長沙灣",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "LCK": {
            "fullName_en": "Lai Chi Kok",
            "fullName_ch": "荔枝角",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "MEF": {
            "fullName_en": "Mei Foo",
            "fullName_ch": "美孚",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "LAK": {
            "fullName_en": "Lai King",
            "fullName_ch": "荔景",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "KWF": {
            "fullName_en": "Kwai Fong",
            "fullName_ch": "葵芳",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "KWH": {
            "fullName_en": "Kwai Hing",
            "fullName_ch": "葵興",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "TWH": {
            "fullName_en": "Tai Wo Hau",
            "fullName_ch": "大窩口",
            "UP_dest": ["TSW"],
            "DOWN_dest": ["CEN"]
        },
        "TSW": {
            "fullName_en": "Tsuen Wan",
            "fullName_ch": "荃灣",
            "UP_dest": [],
            "DOWN_dest": ["CEN"]
        },
    },
    
    "SIL": {
        "ADM": {
            "fullName_en": "Admiralty",
            "fullName_ch": "金鐘",
            "UP_dest": ["SOH"],
            "DOWN_dest": []
        },
        "OCP": {
            "fullName_en": "Ocean Park",
            "fullName_ch": "海洋公園",
            "UP_dest": ["SOH"],
            "DOWN_dest": ["ADM"]
        },
        "WCH": {
            "fullName_en": "Wong Chuk Hang",
            "fullName_ch": "黃竹坑",
            "UP_dest": ["SOH"],
            "DOWN_dest": ["ADM"]
        },
        "LET": {
            "fullName_en": "Lei Tung",
            "fullName_ch": "利東",
            "UP_dest": ["SOH"],
            "DOWN_dest": ["ADM"]
        },
        "SOH": {
            "fullName_en": "South Horizons",
            "fullName_ch": "海怡半島",
            "UP_dest": [],
            "DOWN_dest": ["ADM"]
        },
        
    },
    
    "DRL": {
        "DIS": {
            "fullName_en": "Disneyland Resort",
            "fullName_ch": "迪士尼",
            "UP_dest": ["SUN"],
            "DOWN_dest": []
        },
        "SUN": {
            "fullName_en": "Sunny Bay",
            "fullName_ch": "欣澳",
            "UP_dest": [],
            "DOWN_dest": ["DIS"]
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
        "enableETA": false,
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

function LOHASExpress(){
    document.getElementById("lineDropdown").value = "TKL";
    lineChanged();
    document.getElementById("stationDropdown").value = "LHP";
    stationChanged();
    document.getElementById("directionDropdown").value = "DOWN";
    directionChanged();
    startPIDS();
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
                    document.getElementById(elementIDdestination).style = "margin-left: 2vw; letter-spacing: 2vw!important;"
                } else {
                    document.getElementById(elementIDdestination).style = "margin-left: 2vw;"
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
    var stationDropdown = document.getElementById("stationDropdown");
    let station = stationDropdown.value;
    
    var lineDropdown = document.getElementById("lineDropdown");
    let line = lineDropdown.value;
    
    var directionDropdown = document.getElementById("directionDropdown");
    let direction = directionDropdown.value;
    
    updateLabels(callAPI(line, station), line, station, direction);
}

function lineChanged(){
    
    var lineDropdown = document.getElementById("lineDropdown");
    var line = lineDropdown.value;
    
    updateStationDropdown(line);
    updateDirectionDropdown(line, '')
    document.getElementById("LOHASExpressButton").hidden = true;
    
}

function stationChanged(){
    var stationDropdown = document.getElementById("stationDropdown");
    let station = stationDropdown.value;
    var lineDropdown = document.getElementById("lineDropdown");
    let line = lineDropdown.value;
    if(line != '' && station != ''){
        updateDirectionDropdown(line, station);
    }
}

function directionChanged(){
    stopPIDS();
    updatePage();
}

function updateLineDropdown(){
    
    var enabledLines = []
    for(const lineConcerned in lineList){
        if(lineList[lineConcerned]["enableETA"] == true){
            enabledLines.push(lineConcerned)
        }
    }
    document.getElementById("lineDropdown").innerHTML = "<option value='' disabled selected> --- Lines --- </option>"
    let fullNameWithLang = "fullName_" + lang;
    for (var lineID of enabledLines){
        document.getElementById("lineDropdown").innerHTML += "<option value='" + lineID + "'>" + lineList[lineID][fullNameWithLang] + "</option>"
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
    const queryString = window.location.search;
    console.log({ queryString });
    const urlParams = new URLSearchParams(queryString);
    const LOHAS = urlParams.get('LOHAS');
    if(LOHAS=="true"){
        
        LOHASExpress();
    }
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

updateLineDropdown();
updateStationDropdown("");
updateDirectionDropdown("", "")
processURLParameter();
