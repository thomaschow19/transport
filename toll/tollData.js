const tunnels = {
    CHT: { // Cross-Harbour Tunnel (CHT)
        name: "Cross-Harbour Tunnel",
        tolls: {
            private: {
                workdays: [
                    { minutes: [0, 449], toll: 20 },
                    { minutes: [0, 449], toll: 20}, // 00:00 - 07:29
                    { minutes: [450, 451], toll: 22}, // 07:30 - 07:31
                    { minutes: [452, 453], toll: 24}, // 07:32 - 07:33
                    { minutes: [454, 455], toll: 26}, // 07:34 - 07:35
                    { minutes: [456, 457], toll: 28}, // 07:36 - 07:37
                    { minutes: [458, 459], toll: 30}, // 07:38 - 07:39
                    { minutes: [460, 461], toll: 32}, // 07:40 - 07:41
                    { minutes: [462, 463], toll: 34}, // 07:42 - 07:43
                    { minutes: [464, 465], toll: 36}, // 07:44 - 07:45
                    { minutes: [466, 467], toll: 38}, // 07:46 - 07:47
                    { minutes: [468, 614], toll: 40}, // 07:48 - 10:14
                    { minutes: [615, 616], toll: 38}, // 10:15 - 10:16
                    { minutes: [617, 618], toll: 36}, // 10:17 - 10:18
                    { minutes: [619, 620], toll: 34}, // 10:19 - 10:20
                    { minutes: [621, 622], toll: 32}, // 10:21 - 10:22
                    { minutes: [623, 989], toll: 30}, // 10:23 - 16:29
                    { minutes: [990, 991], toll: 32}, // 16:30 - 16:31
                    { minutes: [992, 993], toll: 34}, // 16:32 - 16:33
                    { minutes: [994, 995], toll: 36}, // 16:34 - 16:35
                    { minutes: [996, 997], toll: 38}, // 16:36 - 16:37
                    { minutes: [998, 1139], toll: 40}, // 16:38 - 18:59
                    { minutes: [1140, 1141], toll: 38}, // 19:00 - 19:01
                    { minutes: [1142, 1143], toll: 36}, // 19:02 - 19:03
                    { minutes: [1144, 1145], toll: 34}, // 19:04 - 19:05
                    { minutes: [1146, 1147], toll: 32}, // 19:06 - 19:07
                    { minutes: [1148, 1149], toll: 30}, // 19:08 - 19:09
                    { minutes: [1150, 1151], toll: 28}, // 19:10 - 19:11
                    { minutes: [1152, 1153], toll: 26}, // 19:12 - 19:13
                    { minutes: [1154, 1155], toll: 24}, // 19:14 - 19:15
                    { minutes: [1156, 1157], toll: 22}, // 19:16 - 19:17
                    { minutes: [1158, 1439], toll: 20} // 19:18 - 23:59
                ],
                holidays: [
                    { minutes: [0, 610], toll: 20 }, // 00:00 - 10:10
                    { minutes: [611, 612], toll: 21 }, // 10:11 - 10:12
                    { minutes: [613, 614], toll: 23 }, // 10:12 - 10:14
                    { minutes: [615, 1154], toll: 25 }, // 10:15 - 19:14
                    { minutes: [1155, 1156], toll: 23 }, // 19:15 - 19:16
                    { minutes: [1157, 1158], toll: 21 }, // 19:17 - 10:18
                    { minutes: [1159, 1439], toll: 20 } // 19:19 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            motorcycle: {
                workdays: [
                    { minutes: [0, 449], toll: 8 },     // 00:00 - 07:29
                    { minutes: [450, 451], toll: 8.8 },  // 07:30 - 07:31
                    { minutes: [452, 453], toll: 9.6 },  // 07:32 - 07:33
                    { minutes: [454, 455], toll: 10.4 }, // 07:34 - 07:35
                    { minutes: [456, 457], toll: 11.2 }, // 07:36 - 07:37
                    { minutes: [458, 459], toll: 12 },   // 07:38 - 07:39
                    { minutes: [460, 461], toll: 12.8 }, // 07:40 - 07:41
                    { minutes: [462, 463], toll: 13.6 }, // 07:42 - 07:43
                    { minutes: [464, 465], toll: 14.4 }, // 07:44 - 07:45
                    { minutes: [466, 467], toll: 15.2 }, // 07:46 - 07:47
                    { minutes: [468, 614], toll: 16 },   // 07:48 - 10:14
                    { minutes: [615, 616], toll: 15.2 }, // 10:15 - 10:16
                    { minutes: [617, 618], toll: 14.4 }, // 10:17 - 10:18
                    { minutes: [619, 620], toll: 13.6 }, // 10:19 - 10:20
                    { minutes: [621, 622], toll: 12.8 }, // 10:21 - 10:22
                    { minutes: [623, 989], toll: 12 },   // 10:23 - 16:29
                    { minutes: [990, 991], toll: 12.8 }, // 16:30 - 16:31
                    { minutes: [992, 993], toll: 13.6 }, // 16:32 - 16:33
                    { minutes: [994, 995], toll: 14.4 }, // 16:34 - 16:35
                    { minutes: [996, 997], toll: 15.2 }, // 16:36 - 16:37
                    { minutes: [998, 1139], toll: 16 },   // 16:38 - 18:59
                    { minutes: [1140, 1141], toll: 15.2 }, // 19:00 - 19:01
                    { minutes: [1142, 1143], toll: 14.4 }, // 19:02 - 19:03
                    { minutes: [1144, 1145], toll: 13.6 }, // 19:04 - 19:05
                    { minutes: [1146, 1147], toll: 12.8 }, // 19:06 - 19:07
                    { minutes: [1148, 1149], toll: 12 },   // 19:08 - 19:09
                    { minutes: [1150, 1151], toll: 11.2 }, // 19:10 - 19:11
                    { minutes: [1152, 1153], toll: 10.4 }, // 19:12 - 19:13
                    { minutes: [1154, 1155], toll: 9.6 },  // 19:14 - 19:15
                    { minutes: [1156, 1157], toll: 8.8 },  // 19:16 - 19:17
                    { minutes: [1158, 1439], toll: 8 }    // 19:18 - 23:59
                ],
                holidays: [
                    { minutes: [0, 610], toll: 8 }, // 00:00 - 10:10
                    { minutes: [611, 612], toll: 8.4 }, // 10:11 - 10:12
                    { minutes: [613, 614], toll: 9.2 }, // 10:12 - 10:14
                    { minutes: [615, 1154], toll: 10 }, // 10:15 - 19:14
                    { minutes: [1155, 1156], toll: 9.2 }, // 19:15 - 19:16
                    { minutes: [1157, 1158], toll: 8.4 }, // 19:17 - 10:18
                    { minutes: [1159, 1439], toll: 8 } // 19:19 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            taxi: {
                workdays: [
                    { minutes: [0, 1439], toll: 25 }
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 25 }
                    // Add more time slots for holidays
                ]
            },
            commercial: {
                publicLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                privateLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                lightGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                mediumGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                heavyGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                singleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                doubleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                }
            }
        }
    },
    EHC: { // Eastern Harbour Crossing (EHC)
        name: "Eastern Harbour Crossing",
        tolls: {
            private: {
                workdays: [
                    { minutes: [0, 449], toll: 20 },
                    { minutes: [0, 449], toll: 20}, // 00:00 - 07:29
                    { minutes: [450, 451], toll: 22}, // 07:30 - 07:31
                    { minutes: [452, 453], toll: 24}, // 07:32 - 07:33
                    { minutes: [454, 455], toll: 26}, // 07:34 - 07:35
                    { minutes: [456, 457], toll: 28}, // 07:36 - 07:37
                    { minutes: [458, 459], toll: 30}, // 07:38 - 07:39
                    { minutes: [460, 461], toll: 32}, // 07:40 - 07:41
                    { minutes: [462, 463], toll: 34}, // 07:42 - 07:43
                    { minutes: [464, 465], toll: 36}, // 07:44 - 07:45
                    { minutes: [466, 467], toll: 38}, // 07:46 - 07:47
                    { minutes: [468, 614], toll: 40}, // 07:48 - 10:14
                    { minutes: [615, 616], toll: 38}, // 10:15 - 10:16
                    { minutes: [617, 618], toll: 36}, // 10:17 - 10:18
                    { minutes: [619, 620], toll: 34}, // 10:19 - 10:20
                    { minutes: [621, 622], toll: 32}, // 10:21 - 10:22
                    { minutes: [623, 989], toll: 30}, // 10:23 - 16:29
                    { minutes: [990, 991], toll: 32}, // 16:30 - 16:31
                    { minutes: [992, 993], toll: 34}, // 16:32 - 16:33
                    { minutes: [994, 995], toll: 36}, // 16:34 - 16:35
                    { minutes: [996, 997], toll: 38}, // 16:36 - 16:37
                    { minutes: [998, 1139], toll: 40}, // 16:38 - 18:59
                    { minutes: [1140, 1141], toll: 38}, // 19:00 - 19:01
                    { minutes: [1142, 1143], toll: 36}, // 19:02 - 19:03
                    { minutes: [1144, 1145], toll: 34}, // 19:04 - 19:05
                    { minutes: [1146, 1147], toll: 32}, // 19:06 - 19:07
                    { minutes: [1148, 1149], toll: 30}, // 19:08 - 19:09
                    { minutes: [1150, 1151], toll: 28}, // 19:10 - 19:11
                    { minutes: [1152, 1153], toll: 26}, // 19:12 - 19:13
                    { minutes: [1154, 1155], toll: 24}, // 19:14 - 19:15
                    { minutes: [1156, 1157], toll: 22}, // 19:16 - 19:17
                    { minutes: [1158, 1439], toll: 20} // 19:18 - 23:59
                ],
                holidays: [
                    { minutes: [0, 610], toll: 20 }, // 00:00 - 10:10
                    { minutes: [611, 612], toll: 21 }, // 10:11 - 10:12
                    { minutes: [613, 614], toll: 23 }, // 10:12 - 10:14
                    { minutes: [615, 1154], toll: 25 }, // 10:15 - 19:14
                    { minutes: [1155, 1156], toll: 23 }, // 19:15 - 19:16
                    { minutes: [1157, 1158], toll: 21 }, // 19:17 - 10:18
                    { minutes: [1159, 1439], toll: 20 } // 19:19 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            motorcycle: {
                workdays: [
                    { minutes: [0, 449], toll: 8 },     // 00:00 - 07:29
                    { minutes: [450, 451], toll: 8.8 },  // 07:30 - 07:31
                    { minutes: [452, 453], toll: 9.6 },  // 07:32 - 07:33
                    { minutes: [454, 455], toll: 10.4 }, // 07:34 - 07:35
                    { minutes: [456, 457], toll: 11.2 }, // 07:36 - 07:37
                    { minutes: [458, 459], toll: 12 },   // 07:38 - 07:39
                    { minutes: [460, 461], toll: 12.8 }, // 07:40 - 07:41
                    { minutes: [462, 463], toll: 13.6 }, // 07:42 - 07:43
                    { minutes: [464, 465], toll: 14.4 }, // 07:44 - 07:45
                    { minutes: [466, 467], toll: 15.2 }, // 07:46 - 07:47
                    { minutes: [468, 614], toll: 16 },   // 07:48 - 10:14
                    { minutes: [615, 616], toll: 15.2 }, // 10:15 - 10:16
                    { minutes: [617, 618], toll: 14.4 }, // 10:17 - 10:18
                    { minutes: [619, 620], toll: 13.6 }, // 10:19 - 10:20
                    { minutes: [621, 622], toll: 12.8 }, // 10:21 - 10:22
                    { minutes: [623, 989], toll: 12 },   // 10:23 - 16:29
                    { minutes: [990, 991], toll: 12.8 }, // 16:30 - 16:31
                    { minutes: [992, 993], toll: 13.6 }, // 16:32 - 16:33
                    { minutes: [994, 995], toll: 14.4 }, // 16:34 - 16:35
                    { minutes: [996, 997], toll: 15.2 }, // 16:36 - 16:37
                    { minutes: [998, 1139], toll: 16 },   // 16:38 - 18:59
                    { minutes: [1140, 1141], toll: 15.2 }, // 19:00 - 19:01
                    { minutes: [1142, 1143], toll: 14.4 }, // 19:02 - 19:03
                    { minutes: [1144, 1145], toll: 13.6 }, // 19:04 - 19:05
                    { minutes: [1146, 1147], toll: 12.8 }, // 19:06 - 19:07
                    { minutes: [1148, 1149], toll: 12 },   // 19:08 - 19:09
                    { minutes: [1150, 1151], toll: 11.2 }, // 19:10 - 19:11
                    { minutes: [1152, 1153], toll: 10.4 }, // 19:12 - 19:13
                    { minutes: [1154, 1155], toll: 9.6 },  // 19:14 - 19:15
                    { minutes: [1156, 1157], toll: 8.8 },  // 19:16 - 19:17
                    { minutes: [1158, 1439], toll: 8 }    // 19:18 - 23:59
                ],
                holidays: [
                    { minutes: [0, 610], toll: 8 }, // 00:00 - 10:10
                    { minutes: [611, 612], toll: 8.4 }, // 10:11 - 10:12
                    { minutes: [613, 614], toll: 9.2 }, // 10:12 - 10:14
                    { minutes: [615, 1154], toll: 10 }, // 10:15 - 19:14
                    { minutes: [1155, 1156], toll: 9.2 }, // 19:15 - 19:16
                    { minutes: [1157, 1158], toll: 8.4 }, // 19:17 - 10:18
                    { minutes: [1159, 1439], toll: 8 } // 19:19 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            taxi: {
                workdays: [
                    { minutes: [0, 1439], toll: 25 }
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 25 }
                    // Add more time slots for holidays
                ]
            },
            commercial: {
                publicLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                privateLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                lightGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                mediumGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                heavyGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                singleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                doubleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                }
            }
        }
    },
    
    WHC: { // Western Harbour Crossing (WHC)
        name: "Western Harbour Crossing",
        tolls: {
            private: {
                workdays: [
                    { minutes: [0, 449], toll: 20}, // 00:00 - 07:29
                    { minutes: [450, 451], toll: 22}, // 07:30 - 07:31
                    { minutes: [452, 453], toll: 24}, // 07:32 - 07:33
                    { minutes: [454, 455], toll: 26}, // 07:34 - 07:35
                    { minutes: [456, 457], toll: 28}, // 07:36 - 07:37
                    { minutes: [458, 459], toll: 30}, // 07:38 - 07:39
                    { minutes: [460, 461], toll: 32}, // 07:40 - 07:41
                    { minutes: [462, 463], toll: 34}, // 07:42 - 07:43
                    { minutes: [464, 465], toll: 36}, // 07:44 - 07:45
                    { minutes: [466, 467], toll: 38}, // 07:46 - 07:47
                    { minutes: [468, 469], toll: 40}, // 07:48 - 07:49
                    { minutes: [470, 471], toll: 42}, // 07:50 - 07:51
                    { minutes: [472, 473], toll: 44}, // 07:52 - 07:53
                    { minutes: [474, 475], toll: 46}, // 07:54 - 07:55
                    { minutes: [476, 477], toll: 48}, // 07:56 - 07:57
                    { minutes: [478, 479], toll: 50}, // 07:58 - 07:59
                    { minutes: [480, 481], toll: 52}, // 08:00 - 08:01
                    { minutes: [482, 483], toll: 54}, // 08:02 - 08:03
                    { minutes: [484, 485], toll: 56}, // 08:04 - 08:05
                    { minutes: [486, 487], toll: 58}, // 08:06 - 08:07
                    { minutes: [488, 614], toll: 60}, // 08:08 - 10:14
                    { minutes: [615, 616], toll: 58}, // 10:15 - 10:16
                    { minutes: [617, 618], toll: 56}, // 10:17 - 10:18
                    { minutes: [619, 620], toll: 54}, // 10:19 - 10:20
                    { minutes: [621, 622], toll: 52}, // 10:21 - 10:22
                    { minutes: [623, 624], toll: 50}, // 10:23 - 10:24
                    { minutes: [625, 626], toll: 48}, // 10:25 - 10:26
                    { minutes: [627, 628], toll: 46}, // 10:27 - 10:28
                    { minutes: [629, 630], toll: 44}, // 10:29 - 10:30
                    { minutes: [631, 632], toll: 42}, // 10:31 - 10:32
                    { minutes: [633, 634], toll: 40}, // 10:33 - 10:34
                    { minutes: [635, 636], toll: 38}, // 10:35 - 10:36
                    { minutes: [637, 638], toll: 36}, // 10:37 - 10:38
                    { minutes: [639, 640], toll: 34}, // 10:39 - 10:40
                    { minutes: [641, 642], toll: 32}, // 10:41 - 10:42
                    { minutes: [643, 989], toll: 30}, // 10:43 - 16:29
                    { minutes: [990, 991], toll: 32}, // 16:30 - 16:31
                    { minutes: [992, 993], toll: 34}, // 16:32 - 16:33
                    { minutes: [994, 995], toll: 36}, // 16:34 - 16:35
                    { minutes: [996, 997], toll: 38}, // 16:36 - 16:37
                    { minutes: [998, 999], toll: 40}, // 16:38 - 16:39
                    { minutes: [1000, 1001], toll: 42}, // 16:40 - 16:41
                    { minutes: [1002, 1003], toll: 44}, // 16:42 - 16:43
                    { minutes: [1004, 1005], toll: 46}, // 16:44 - 16:45
                    { minutes: [1006, 1007], toll: 48}, // 16:46 - 16:47
                    { minutes: [1008, 1009], toll: 50}, // 16:48 - 16:49
                    { minutes: [1010, 1011], toll: 52}, // 16:50 - 16:51
                    { minutes: [1012, 1013], toll: 54}, // 16:52 - 16:53
                    { minutes: [1014, 1015], toll: 56}, // 16:54 - 16:55
                    { minutes: [1016, 1017], toll: 58}, // 16:56 - 16:57
                    { minutes: [1018, 1139], toll: 60}, // 16:58 - 18:59
                    { minutes: [1140, 1141], toll: 58}, // 19:00 - 19:01
                    { minutes: [1142, 1143], toll: 56}, // 19:02 - 19:03
                    { minutes: [1144, 1145], toll: 54}, // 19:04 - 19:05
                    { minutes: [1146, 1147], toll: 52}, // 19:06 - 19:07
                    { minutes: [1148, 1149], toll: 50}, // 19:08 - 19:09
                    { minutes: [1150, 1151], toll: 48}, // 19:10 - 19:11
                    { minutes: [1152, 1153], toll: 46}, // 19:12 - 19:13
                    { minutes: [1154, 1155], toll: 44}, // 19:14 - 19:15
                    { minutes: [1156, 1157], toll: 42}, // 19:16 - 19:17
                    { minutes: [1158, 1159], toll: 40}, // 19:18 - 19:19
                    { minutes: [1160, 1161], toll: 38}, // 19:20 - 19:21
                    { minutes: [1162, 1163], toll: 36}, // 19:22 - 19:23
                    { minutes: [1164, 1165], toll: 34}, // 19:24 - 19:25
                    { minutes: [1166, 1167], toll: 32}, // 19:26 - 19:27
                    { minutes: [1168, 1169], toll: 30}, // 19:28 - 19:29
                    { minutes: [1170, 1171], toll: 28}, // 19:30 - 19:31
                    { minutes: [1172, 1173], toll: 26}, // 19:32 - 19:33
                    { minutes: [1174, 1175], toll: 24}, // 19:34 - 19:35
                    { minutes: [1176, 1177], toll: 22}, // 19:36 - 19:37
                    { minutes: [1178, 1439], toll: 20}  // 19:38 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 610], toll: 20 }, // 00:00 - 10:10
                    { minutes: [611, 612], toll: 21 }, // 10:11 - 10:12
                    { minutes: [613, 614], toll: 23 }, // 10:12 - 10:14
                    { minutes: [615, 1154], toll: 25 }, // 10:15 - 19:14
                    { minutes: [1155, 1156], toll: 23 }, // 19:15 - 19:16
                    { minutes: [1157, 1158], toll: 21 }, // 19:17 - 10:18
                    { minutes: [1159, 1439], toll: 20 } // 19:19 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            motorcycle: {
                workdays: [
                    { minutes: [0, 449], toll: 8 },     // 00:00 - 07:29
                    { minutes: [450, 451], toll: 8.8 },  // 07:30 - 07:31
                    { minutes: [452, 453], toll: 9.6 },  // 07:32 - 07:33
                    { minutes: [454, 455], toll: 10.4 }, // 07:34 - 07:35
                    { minutes: [456, 457], toll: 11.2 }, // 07:36 - 07:37
                    { minutes: [458, 459], toll: 12 },   // 07:38 - 07:39
                    { minutes: [460, 461], toll: 12.8 }, // 07:40 - 07:41
                    { minutes: [462, 463], toll: 13.6 }, // 07:42 - 07:43
                    { minutes: [464, 465], toll: 14.4 }, // 07:44 - 07:45
                    { minutes: [466, 467], toll: 15.2 }, // 07:46 - 07:47
                    { minutes: [468, 469], toll: 16 },   // 07:48 - 07:49
                    { minutes: [470, 471], toll: 16.8 },   // 07:50 - 07:51
                    { minutes: [472, 473], toll: 17.6 },   // 07:52 - 07:53
                    { minutes: [474, 475], toll: 18.4 },   // 07:54 - 07:55
                    { minutes: [476, 477], toll: 19.2 },   // 07:56 - 07:57
                    { minutes: [478, 479], toll: 20 },   // 07:58 - 07:59
                    { minutes: [480, 481], toll: 20.8 },   // 08:00 - 08:01
                    { minutes: [482, 483], toll: 21.6 },   // 08:02 - 08:03
                    { minutes: [484, 485], toll: 22.4 },   // 08:04 - 08:05
                    { minutes: [486, 487], toll: 23.2 },   // 08:06 - 08:07
                    { minutes: [488, 614], toll: 24 },   // 08:08 - 10:14
                    { minutes: [615, 616], toll: 23.2 }, // 10:15 - 10:16
                    { minutes: [617, 618], toll: 22.4 }, // 10:17 - 10:18
                    { minutes: [619, 620], toll: 21.6 }, // 10:19 - 10:20
                    { minutes: [621, 622], toll: 20.8 }, // 10:21 - 10:22
                    { minutes: [623, 624], toll: 20 },   // 10:23 - 10:24
                    { minutes: [625, 626], toll: 19.2 },   // 10:25 - 10:26
                    { minutes: [627, 628], toll: 18.4 },   // 10:27 - 10:28
                    { minutes: [629, 630], toll: 17.6 },   // 10:29 - 10:30
                    { minutes: [631, 632], toll: 16.8 },   // 10:31 - 10:32
                    { minutes: [633, 634], toll: 16 },   // 10:33 - 10:34
                    { minutes: [635, 636], toll: 15.2 },   // 10:35 - 10:36
                    { minutes: [637, 638], toll: 14.4 },   // 10:37 - 10:38
                    { minutes: [639, 640], toll: 13.6 },   // 10:39 - 10:40
                    { minutes: [641, 642], toll: 12.8 },   // 10:41 - 10:42
                    { minutes: [643, 989], toll: 12 },   // 10:43 - 16:29
                    { minutes: [990, 991], toll: 12.8 }, // 16:30 - 16:31
                    { minutes: [992, 993], toll: 13.6 }, // 16:32 - 16:33
                    { minutes: [994, 995], toll: 14.4 }, // 16:34 - 16:35
                    { minutes: [996, 997], toll: 15.2 }, // 16:36 - 16:37
                    { minutes: [998, 999], toll: 16 },   // 16:38 - 16:39
                    { minutes: [1000, 1001], toll: 16.8 }, // 16:40 - 16:41
                    { minutes: [1002, 1003], toll: 17.6 }, // 16:42 - 16:43
                    { minutes: [1004, 1005], toll: 18.4 }, // 16:44 - 16:45
                    { minutes: [1006, 1007], toll: 19.2 }, // 16:46 - 16:47
                    { minutes: [1008, 1009], toll: 20 }, // 16:48 - 16:49
                    { minutes: [1010, 1011], toll: 20.8 }, // 16:50 - 16:51
                    { minutes: [1012, 1013], toll: 21.6 }, // 16:52 - 16:53
                    { minutes: [1014, 1015], toll: 22.4 }, // 16:54 - 16:55
                    { minutes: [1016, 1017], toll: 23.2 }, // 16:56 - 16:57
                    { minutes: [1018, 1139], toll: 24 }, // 16:58 - 18:59
                    { minutes: [1140, 1141], toll: 23.2 }, // 19:00 - 19:01
                    { minutes: [1142, 1143], toll: 22.4 }, // 19:02 - 19:03
                    { minutes: [1144, 1145], toll: 21.6 }, // 19:04 - 19:05
                    { minutes: [1146, 1147], toll: 20.8 }, // 19:06 - 19:07
                    { minutes: [1148, 1149], toll: 20 },   // 19:08 - 19:09
                    { minutes: [1150, 1151], toll: 19.2 }, // 19:10 - 19:11
                    { minutes: [1152, 1153], toll: 18.4 }, // 19:12 - 19:13
                    { minutes: [1154, 1155], toll: 17.6 },  // 19:14 - 19:15
                    { minutes: [1156, 1157], toll: 16.8 },  // 19:16 - 19:17
                    { minutes: [1158, 1159], toll: 16 },    // 19:18 - 19:19
                    { minutes: [1160, 1161], toll: 15.2 },    // 19:20 - 19:21
                    { minutes: [1162, 1163], toll: 14.4 },    // 19:22 - 19:23
                    { minutes: [1164, 1165], toll: 13.6 },    // 19:24 - 19:25
                    { minutes: [1166, 1167], toll: 12.8 },    // 19:26 - 19:27
                    { minutes: [1168, 1169], toll: 12 },    // 19:28 - 19:29
                    { minutes: [1170, 1171], toll: 11.2 },    // 19:30 - 19:31
                    { minutes: [1172, 1173], toll: 10.4 },    // 19:32 - 19:33
                    { minutes: [1174, 1175], toll: 9.6 },    // 19:34 - 19:35
                    { minutes: [1176, 1177], toll: 8.8 },    // 19:36 - 19:37
                    { minutes: [1178, 1439], toll: 8 }     // 19:38 - 23:59
                ],
                holidays: [
                    { minutes: [0, 610], toll: 8 }, // 00:00 - 10:10
                    { minutes: [611, 612], toll: 8.4 }, // 10:11 - 10:12
                    { minutes: [613, 614], toll: 9.2 }, // 10:12 - 10:14
                    { minutes: [615, 1154], toll: 10 }, // 10:15 - 19:14
                    { minutes: [1155, 1156], toll: 9.2 }, // 19:15 - 19:16
                    { minutes: [1157, 1158], toll: 8.4 }, // 19:17 - 10:18
                    { minutes: [1159, 1439], toll: 8 } // 19:19 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            taxi: {
                workdays: [
                    { minutes: [0, 1439], toll: 25 }
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 25 }
                    // Add more time slots for holidays
                ]
            },
            commercial: {
                publicLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                privateLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                lightGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                mediumGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                heavyGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                singleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                },
                doubleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 50 },
                        // More time slots...
                    ]
                }
            }
        }
    },
    ABT: { // Aberdeen Tunnel (ABT)
        name: "Aberdeen Tunnel",
        tolls: {
            private: {
                workdays: [
                    { minutes: [0, 1439], toll: 5 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 5 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            motorcycle: {
                workdays: [
                    { minutes: [0, 1439], toll: 5 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 5 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            taxi: {
                workdays: [
                    { minutes: [0, 1439], toll: 5 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 5 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            commercial: {
                publicLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                },
                privateLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                },
                lightGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                },
                mediumGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                },
                heavyGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                },
                singleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                },
                doubleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                }
            }
        }
    },
    SMT: { // Shing Mun Tunnels (SMT)
        name: "Shing Mun Tunnels",
        tolls: {
            private: {
                workdays: [
                    { minutes: [0, 1439], toll: 5 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 5 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            motorcycle: {
                workdays: [
                    { minutes: [0, 1439], toll: 5 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 5 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            taxi: {
                workdays: [
                    { minutes: [0, 1439], toll: 5 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 5 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            commercial: {
                publicLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                },
                privateLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                },
                lightGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                },
                mediumGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                },
                heavyGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                },
                singleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                },
                doubleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 5 },
                        // More time slots...
                    ]
                }
            }
        }
    },
    LRT: { // Lion Rock Tunnel (LRT)
        name: "Lion Rock Tunnel",
        tolls: {
            private: {
                workdays: [
                    { minutes: [0, 1439], toll: 8 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 8 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            motorcycle: {
                workdays: [
                    { minutes: [0, 1439], toll: 8 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 8 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            taxi: {
                workdays: [
                    { minutes: [0, 1439], toll: 8 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 8 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            commercial: {
                publicLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                },
                privateLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                },
                lightGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                },
                mediumGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                },
                heavyGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                },
                singleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                },
                doubleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                }
            }
        }
    },
    TSA: { // Tsing Sha Control Area (TSA)
        name: "Tsing Sha Control Area",
        tolls: {
            private: {
                workdays: [
                    { minutes: [0, 1439], toll: 8 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 8 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            motorcycle: {
                workdays: [
                    { minutes: [0, 1439], toll: 8 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 8 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            taxi: {
                workdays: [
                    { minutes: [0, 1439], toll: 8 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 8 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            commercial: {
                publicLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                },
                privateLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                },
                lightGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                },
                mediumGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                },
                heavyGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                },
                singleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                },
                doubleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 8 },
                        // More time slots...
                    ]
                }
            }
        }
    },
    TCT: { // Tate's Cairn Tunnel (TCT)
        name: "Tate's Cairn Tunnel",
        tolls: {
            private: {
                workdays: [
                    { minutes: [0, 1439], toll: 20 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 20 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            motorcycle: {
                workdays: [
                    { minutes: [0, 1439], toll: 15 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 15 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            taxi: {
                workdays: [
                    { minutes: [0, 1439], toll: 20 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 20 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            commercial: {
                publicLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 23 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 23 },
                        // More time slots...
                    ]
                },
                privateLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 23},
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 23},
                        // More time slots...
                    ]
                },
                lightGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 24},
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 24},
                        // More time slots...
                    ]
                },
                mediumGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 28},
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 28},
                        // More time slots...
                    ]
                },
                heavyGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 28},
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 28},
                        // More time slots...
                    ]
                },
                singleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 32},
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 32 },
                        // More time slots...
                    ]
                },
                doubleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 35},
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 35},
                        // More time slots...
                    ]
                }
            }
        }
    },
    TLT: { // Tai Lam Tunnel (TLT)
        name: "Tai Lam Tunnel",
        tolls: {
            private: {
                workdays: [
                    { minutes: [0, 1439], toll: 58 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 58 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            motorcycle: {
                workdays: [
                    { minutes: [0, 1439], toll: 28 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 28 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            taxi: {
                workdays: [
                    { minutes: [0, 1439], toll: 58 } // 00:00 - 23:59
                    // Add more time slots for workdays
                ],
                holidays: [
                    { minutes: [0, 1439], toll: 58 } // 00:00 - 23:59
                    
                    // Add more time slots for holidays
                ]
            },
            commercial: {
                publicLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 126 },
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 126},
                        // More time slots...
                    ]
                },
                privateLightBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 126},
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 126},
                        // More time slots...
                    ]
                },
                lightGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 64},
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 64},
                        // More time slots...
                    ]
                },
                mediumGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 71},
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 71},
                        // More time slots...
                    ]
                },
                heavyGoodsVehicle: {
                    workdays: [
                        { minutes: [0, 1439], toll: 79},
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 79},
                        // More time slots...
                    ]
                },
                singleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 180},
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 180},
                        // More time slots...
                    ]
                },
                doubleDeckedBus: {
                    workdays: [
                        { minutes: [0, 1439], toll: 213},
                        // More time slots...
                    ],
                    holidays: [
                        { minutes: [0, 1439], toll: 213},
                        // More time slots...
                    ]
                }
            }
        }
    }
    // Add more tunnels here (e.g., WHC, AT, etc.)
};
