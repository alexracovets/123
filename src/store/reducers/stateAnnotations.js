import { createSlice } from '@reduxjs/toolkit';

const stateAnnotations = createSlice({
    name: 'stateAnnotations',
    initialState: {
        // Вивід анотацій
        annotation: [
            {
                position: [-64, 2.6, 37],
                cameraPosition: [-54.759, 25.025, 58.175],
                color: ["#EEBE40"],
                panoram: [
                    {
                        current: 'panoram/1/1.jpg',
                        startCamera: [-0.093, 100.0207, -0.0289],
                        startContent: '1',
                        isShow: true,
                        interactive: {
                            arrow: [],
                            mask: [
                                {
                                    image: 'panoram/1/mask/1.png',
                                    args: {
                                        width: 80,
                                        height: 106,
                                        position: [134, 37, -39],
                                        rotation: [0.0, 4.70, 0]
                                    }
                                },
                                {
                                    image: 'panoram/1/mask/2.png',
                                    args: {
                                        width: 113,
                                        height: 147,
                                        position: [166, 17, 110],
                                        rotation: [0, 4.58, 0]
                                    }
                                }
                            ],
                            info: [
                                {
                                    position: [136, 90, 90],
                                    rotation: [0, -0.57, 0.04],
                                    scale: 8
                                },
                                {
                                    position: [129, 90, -32],
                                    rotation: [0, 0, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 1
                    }
                ],
                id: 1
            },
            {
                position: [-31.5, 3, 36],
                cameraPosition: [-37.082, 27.503, 57.985],
                color: ["#B1B1B1"],
                panoram: [
                    {
                        current: 'panoram/2/1.jpg',
                        startCamera: [-0.089, 100.0077, -0.0448],
                        startContent: '2',
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [60, 40, 122],
                                    rotation: [0, 2.05, 0],
                                    camera: [0.098, 100.0045, 0.0192]
                                }
                            ],
                            mask: [],
                            info: [
                                {
                                    position: [140, 80, 42],
                                    rotation: [0, -0.3, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/2/2.jpg',
                        startContent: '2',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [120, 40, 32],
                                    rotation: [0, 2.88, 0],
                                    camera: [0.04346, 99.9894, 0.08944]
                                }
                            ],
                            mask: [],
                            info: [
                                {
                                    position: [160, 90, 140],
                                    rotation: [0, -1, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 2
                    }
                ],
                id: 2
            },
            {
                position: [-30, 10.50, 29],
                cameraPosition: [-22.883, 39.208, 44.905],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#B1B1B1"],
                panoram: [
                    {
                        current: 'panoram/3/1.jpg',
                        startCamera: [-0.0999, 99.9983, -0.00224],
                        startContent: '3_1',
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [60, 40, 120],
                                    rotation: [0, 2.08, 0],
                                    camera: [-0.09, 100.01817, 0.038]
                                }
                            ],
                            mask: [
                                {
                                    image: 'panoram/3/mask/1.png',
                                    args: {
                                        width: 73.4,
                                        height: 22.5,
                                        position: [46, 66, -3],
                                        rotation: [0.04, 4.7, 0]
                                    }
                                },
                            ],
                            info: [
                                {
                                    position: [130, 110, -10],
                                    rotation: [0, -0.06, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/3/2.jpg',
                        startContent: '3_2',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [95, 40, 124],
                                    rotation: [0, -4, 0],
                                    camera: [-0.0968, 99.9966, 0.025]
                                },
                            ],
                            mask: [
                                {
                                    image: 'panoram/3/mask/2.png',
                                    args: {
                                        width: 85,
                                        height: 38.7,
                                        position: [50, 63, -11],
                                        rotation: [0, 5.27, 0]
                                    }
                                },
                            ],
                            info: [
                                {
                                    position: [140, 65, -45],
                                    rotation: [0, 0.17, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 2
                    }
                ],
                id: 3
            },
            {
                position: [27, 6.6, -59],
                cameraPosition: [49.255, 43.293, -48.923],
                color: ["#5E8BFF"],
                panoram: [
                    {
                        current: 'panoram/4/1.jpg',
                        startCamera: [-0.09935, 99.9957, 0.01054],
                        startContent: '4',
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [-80, 40, -110],
                                    rotation: [0, -0.39, 0],
                                    camera: [-0.0994, 100.0015, -0.01057]
                                }
                            ],
                            mask: [
                                {
                                    image: 'panoram/4/mask/1_1.png',
                                    args: {
                                        width: 58.3,
                                        height: 96,
                                        position: [88, 79, -47],
                                        rotation: [0, 4.84, 0]
                                    }
                                },
                                {
                                    image: 'panoram/4/mask/1_2.png',
                                    args: {
                                        width: 72.2,
                                        height: 147,
                                        position: [155, 79, 48],
                                        rotation: [0, 4.62, 0]
                                    }
                                }

                            ],
                            info: [
                                {
                                    position: [141, 110, -6],
                                    rotation: [0, -0.1, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/4/2.jpg',
                        startContent: '4',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [-130, 40, -70],
                                    rotation: [0, -0.6, 0],
                                    camera: [-0.0999, 99.9987, 0.0041]
                                }
                            ],
                            mask: [
                                {
                                    image: 'panoram/4/mask/2.png',
                                    args: {
                                        width: 225,
                                        height: 58,
                                        position: [68, 70, 15],
                                        rotation: [0, 4.7, 0]
                                    }
                                }
                            ],
                            info: [
                                {
                                    position: [130, 90, 0],
                                    rotation: [0, -0.21, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 2
                    }
                ],
                id: 4
            },
            {
                position: [-4, 1.6, -94],
                cameraPosition: [20.482, 31.693, -115.473],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#B1B1B1"],
                panoram: [
                    {
                        current: 'panoram/5/1.jpg',
                        startCamera: [-0.0998, 100.0034, 0.00387],
                        startContent: '5',
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [44, 40, 80],
                                    rotation: [0, 1.54, 0],
                                    camera: [0.0987, 100.006, -0.01454]
                                },
                            ],
                            mask: [
                                {
                                    image: 'panoram/5/mask/1.png',
                                    args: {
                                        width: 66,
                                        height: 21,
                                        position: [45, 70, 0],
                                        rotation: [0, 4.7, 0]
                                    }
                                }
                            ],
                            info: [
                                {
                                    position: [100, 90, 0],
                                    rotation: [0, 0.04, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/5/2.jpg',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [116, 40, 120],
                                    rotation: [0, -3.11, 0],
                                    camera: [-0.07736, 100.0034, 0.0633]
                                },
                            ],
                            mask: [],
                            info: []
                        },
                        id: 2
                    }
                ],
                id: 5
            },
            {
                position: [-65, 10.6, 27],
                cameraPosition: [-48.008, 36.035, 33.684],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#B1B1B1"],
                panoram: [
                    {
                        current: 'panoram/6/1.jpg',
                        startCamera: [-0.0982, 100.0123, -0.01413],
                        startContent: '6',
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [12, 40, 80],
                                    rotation: [0, 1.8, 0],
                                    camera: [0.0197, 99.9999, -0.098]
                                },
                                {
                                    to: 3,
                                    position: [10, 40, -80],
                                    rotation: [0, -1.94, 0],
                                    camera: [0.00795, 99.9878, 0.09894]
                                },
                                {
                                    to: 4,
                                    position: [-90, 40, 20],
                                    rotation: [0, 0.05, 0],
                                    camera: [-0.03874, 100.0022, -0.09216]
                                },
                                {
                                    to: 5,
                                    position: [-200, 40, 20],
                                    rotation: [0, -0.24, 0],
                                    camera: [0.07546, 99.9851, 0.0639]
                                },
                                {
                                    to: 6,
                                    position: [-130, 40, -80],
                                    rotation: [0, 0.02, 0],
                                    camera: [0.07487, 100.0154, -0.0645]
                                }
                            ],
                            mask: [
                                {
                                    image: 'panoram/6/mask/1.png',
                                    args: {
                                        width: 101,
                                        height: 35,
                                        position: [45, 56, 11],
                                        rotation: [0, 4.7, 0]
                                    }
                                }
                            ],
                            info: [
                                {
                                    position: [90, 100, 0],
                                    rotation: [0, 0, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/6/2.jpg',
                        startCamera: [-0.099, 100.010, -0.008],
                        startContent: '6',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [40, 40, -50],
                                    rotation: [0, -2.16, 0],
                                    camera: [-0.04931, 99.9982, 0.08697]
                                },
                                {
                                    to: 3,
                                    position: [105, 40, -120],
                                    rotation: [0, -2.6, 0],
                                    camera: [0.08057, 99.9912, 0.05856]
                                }
                            ],
                            mask: [
                                {
                                    image: 'panoram/6/mask/2.png',
                                    args: {
                                        width: 95,
                                        height: 31,
                                        position: [58, 59, -12],
                                        rotation: [0.04, 4.15, 0]
                                    }
                                }
                            ],
                            info: [
                                {
                                    position: [100, 100, 0],
                                    rotation: [0, 0, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 2
                    },
                    {
                        current: 'panoram/6/3.jpg',
                        startCamera: [-0.099, 100.010, -0.008],
                        startContent: '6',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [60, 40, 29],
                                    rotation: [0, 2.74, 0],
                                    camera: [0.00796, 100.0078, -0.09938]
                                },
                                {
                                    to: 2,
                                    position: [150, 40, 60],
                                    rotation: [0, 2.96, 0],
                                    camera: [0.02853, 99.99, -0.09536]
                                },
                                {
                                    to: 6,
                                    position: [-50, 40, 120],
                                    rotation: [0, 1.4, 0],
                                    camera: [0.0622, 100.00387, -0.07821]
                                }

                            ],
                            mask: [
                                {
                                    image: 'panoram/6/mask/3.png',
                                    args: {
                                        width: 102,
                                        height: 35,
                                        position: [103, 52, -2.2],
                                        rotation: [-0.09, 5.79, 0]
                                    }
                                }
                            ],
                            info: [
                                {
                                    position: [130, 100, -20],
                                    rotation: [0, 0, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 3
                    },
                    {
                        current: 'panoram/6/4.jpg',
                        startCamera: [-0.099, 100.010, -0.008],
                        startContent: '6',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [-20, 40, -150],
                                    rotation: [0, -1.30, 0],
                                    camera: [-0.0996, 100.0062, -0.00637]
                                },
                                {
                                    to: 2,
                                    position: [40, 40, -140],
                                    rotation: [0, -2.01, 0],
                                    camera: [0.01593, 99.9938, -0.09853]
                                },
                                {
                                    to: 5,
                                    position: [-10, 40, 80],
                                    rotation: [0, 0.89, 0],
                                    camera: [0.0828, 99.9943, 0.05567]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 4
                    },
                    {
                        current: 'panoram/6/5.jpg',
                        startCamera: [-0.099, 100.010, -0.008],
                        startContent: '6',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 3,
                                    position: [186, 40, -19],
                                    rotation: [0, -3.06, 0],
                                    camera: [-0.0128, 99.9925, 0.0989]
                                },
                                {
                                    to: 4,
                                    position: [45, 40, 45],
                                    rotation: [0, -3.77, 0],
                                    camera: [-0.0311, 99.9835, 0.0936]
                                },
                                {
                                    to: 6,
                                    position: [60, 40, -50],
                                    rotation: [0, -2.40, 0],
                                    camera: [-0.03046, 99.9933, 0.09501]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 5
                    },
                    {
                        current: 'panoram/6/6.jpg',
                        startCamera: [-0.099, 100.010, -0.008],
                        startContent: '6',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [160, 40, -80],
                                    rotation: [0, -3.04, 0],
                                    camera: [-0.0993, 100.0062, -0.00976]
                                },
                                {
                                    to: 3,
                                    position: [140, 40, -130],
                                    rotation: [0, -2.28, 0],
                                    camera: [-0.0141, 99.9936, 0.0988]
                                },
                                {
                                    to: 5,
                                    position: [3, 40, 83],
                                    rotation: [0, 2.42, 0],
                                    camera: [0.03549, 99.9918, -0.09312]
                                },
                            ],
                            mask: [],
                            info: []
                        },
                        id: 6
                    }
                ],
                id: 6
            },
            {
                position: [-72, 2.6, 27],
                cameraPosition: [-88.13, 32.721, 24.967],
                iframe: {
                    link_ua: "https://my.matterport.com/show/?m=sPTQYR4ndzb&play=1&qs=1",
                    link_en: "https://my.matterport.com/show/?m=sPTQYR4ndzb&play=1&qs=1",
                },
                color: ["#E2E2E2"],
                id: 7
            },
            {
                position: [-74.5, 2.5, 46.5],
                cameraPosition: [-82.346, 29.443, 67.449],
                color: ["#E2E2E2"],
                panoram: [
                    {
                        current: 'panoram/8/1.jpg',
                        startCamera: [-0.04567, 99.9904, 0.08844],
                        startContent: '0',
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [-20, 40, -140],
                                    rotation: [0, -1.59, 0],
                                    camera: [0.03977, 99.97912, -0.08934]
                                },
                                {
                                    to: 3,
                                    position: [130, 40, -80],
                                    rotation: [0, -3.3, 0],
                                    camera: [0.09623, 99.9855, 0.02306]
                                },
                                {
                                    to: 4,
                                    position: [210, 40, -170],
                                    rotation: [0, 3.79, -0.16],
                                    camera: [-0.0025, 99.9899, 0.09946]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/8/2.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '0',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [-10, 40, -140],
                                    rotation: [0, -1.43, 0],
                                    camera: [-0.0512, 99.9885, -0.0851]
                                },
                                {
                                    to: 6,
                                    position: [-120, 40, 85],
                                    rotation: [0, 0.5, 0],
                                    camera: [-0.02673, 99.98204, -0.09467]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 2
                    },
                    {
                        current: 'panoram/8/3.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '0',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [100, 40, 70],
                                    rotation: [0, 2.8, 0],
                                    camera: [0.09, 99.9887, 0.042]
                                },
                                {
                                    to: 4,
                                    position: [40, 40, 110],
                                    rotation: [0, 1.67, 0],
                                    camera: [0.0947, 99.9886, 0.03008]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 3
                    },
                    {
                        current: 'panoram/8/4.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '0',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [166, 45, 200],
                                    rotation: [0, 2.35, -0.18],
                                    camera: [0.0742, 99.9917, -0.0665]
                                },
                                {
                                    to: 3,
                                    position: [120, 40, 130],
                                    rotation: [0, 3.41, 0],
                                    camera: [0.02788, 99.986, 0.095]
                                },
                                {
                                    to: 5,
                                    position: [100, 40, -60],
                                    rotation: [0, 3.94, 0],
                                    camera: [0.04991, 99.9917, 0.08625]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 4
                    },
                    {
                        current: 'panoram/8/5.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '0',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 4,
                                    position: [70, 40, 100],
                                    rotation: [0, 2.10, 0],
                                    camera: [-0.00025, 99.9988, -0.09999]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 5
                    },
                    {
                        current: 'panoram/8/6.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '0',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [15, 40, -80],
                                    rotation: [0, -1.13, 0],
                                    camera: [-0.0928, 99.9819, 0.03257]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 6
                    }
                ],
                id: 8
            },
            {
                position: [-15, 5, 60],
                cameraPosition: [-34.416, 34.351, 63.036],
                color: ["#E2E2E2"],
                panoram: [
                    {
                        current: 'panoram/9/1.jpg',
                        startCamera: [-0.0406, 99.9935, -0.09113],
                        startContent: '9',
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [140, 60, 28],
                                    rotation: [0, -2.93, -0.2],
                                    camera: [-0.0999, 99.9964, -0.00186]
                                },
                                {
                                    to: 3,
                                    position: [250, 62, 110],
                                    rotation: [0, 1.59, -0.04],
                                    camera: [0.0255, 99.996, -0.0966]
                                },
                                {
                                    to: 8,
                                    position: [-57, 60, 128],
                                    rotation: [0.07, 2, -0.1],
                                    camera: [0.09676, 100.0051, -0.02472]
                                }
                            ],
                            mask: [],
                            info: [
                                {
                                    position: [280, 100, -40],
                                    rotation: [0, -0.13, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/9/2.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '9',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [-140, 50, 36],
                                    rotation: [0, -0.1, -0.25],
                                    camera: [0.07454, 99.9833, 0.06453]
                                },
                                {
                                    to: 3,
                                    position: [65, 50, 126],
                                    rotation: [0, 1.51, -0.19],
                                    camera: [0.09581, 100.002, -0.02855]
                                },
                                {
                                    to: 9,
                                    position: [90, 40, -50],
                                    rotation: [0, -2.66, 0],
                                    camera: [0.0843, 99.983, 0.05098]
                                }
                            ],
                            mask: [],
                            info: [
                                {
                                    position: [140, 100, -80],
                                    rotation: [0, 0.4, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 2
                    },
                    {
                        current: 'panoram/9/3.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '9',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [130, 50, -70],
                                    rotation: [0, 3.99, -0.2],
                                    camera: [0.01414, 99.9922, 0.09868]
                                },
                                {
                                    to: 4,
                                    position: [-120, 50, -23],
                                    rotation: [0, -0.31, -0.15],
                                    camera: [0.0771, 99.9916, 0.06313]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 3
                    },
                    {
                        current: 'panoram/9/4.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '9',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 3,
                                    position: [81, 50, 47],
                                    rotation: [0, 2.76, -0.2],
                                    camera: [-0.096, 99.993, -0.02691]
                                },
                                {
                                    to: 5,
                                    position: [-31, 50, -137],
                                    rotation: [0.18, 3.76, -0.1],
                                    camera: [-0.07631, 99.9931, 0.06426]
                                },
                                {
                                    to: 6,
                                    position: [-136, 50, -107],
                                    rotation: [0, 5.32, -0.24],
                                    camera: [0.08256, 99.9902, 0.0555]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 4
                    },
                    {
                        current: 'panoram/9/5.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '9',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 4,
                                    position: [-59, 60, 124],
                                    rotation: [-0.21, 2.36, 0.12],
                                    camera: [-0.0753, 99.99118, -0.06518]
                                },
                                {
                                    to: 6,
                                    position: [-117, 60, 37],
                                    rotation: [-0.06, -1.03, -0.04],
                                    camera: [0.0688, 99.9923, 0.072132]
                                },
                                {
                                    to: 8,
                                    position: [58, 50, -54],
                                    rotation: [0, -2.42, 0],
                                    camera: [-0.09378, 99.9857, 0.03167]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 5
                    },
                    {
                        current: 'panoram/9/6.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '9',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 4,
                                    position: [140, 50, 135],
                                    rotation: [0, 2.63, -0.23],
                                    camera: [-0.07818, 99.98354, -0.06014]
                                },
                                {
                                    to: 5,
                                    position: [150, 60, 45],
                                    rotation: [-0.19, 3.85, -0.07],
                                    camera: [-0.0957, 99.9948, 0.0285]
                                },
                                {
                                    to: 7,
                                    position: [-68, 40, -73],
                                    rotation: [0, 5.31, 0],
                                    camera: [0.0837, 99.9746, 0.04845]
                                },
                                {
                                    to: 8,
                                    position: [28, 60, -133],
                                    rotation: [0, 3.36, 0],
                                    camera: [-0.0967, 99.9839, -0.01947]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 6
                    },
                    {
                        current: 'panoram/9/7.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '9',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 4,
                                    position: [84, 50, 60],
                                    rotation: [0, 2.69, 0],
                                    camera: [-0.07475, 99.993, -0.066]
                                },
                                {
                                    to: 8,
                                    position: [90, 50, -60],
                                    rotation: [0, -2.57, 0],
                                    camera: [-0.09136, 99.9941, -0.0402]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 7
                    },
                    {
                        current: 'panoram/9/8.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '9',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [71, 60, -119],
                                    rotation: [0, 3.46, 0],
                                    camera: [-0.053, 99.9932, 0.08448]
                                },
                                {
                                    to: 5,
                                    position: [-139, 60, 74],
                                    rotation: [0.02, 1.14, -0.23],
                                    camera: [0.07973, 99.98354, -0.05806]
                                },
                                {
                                    to: 7,
                                    position: [-139, 60, -56],
                                    rotation: [0, 0.33, -0.13],
                                    camera: [0.0979, 99.9816, -0.00837]
                                }
                            ],
                            mask: [],
                            info: []
                        },
                        id: 8
                    },
                    {
                        current: 'panoram/9/9.jpg',
                        startCamera: [-0.097, 100, -0.022],
                        startContent: '9',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [74, 50, 34],
                                    rotation: [0, 2.55, 0],
                                    camera: [0.09268, 99.9738, -0.02689]
                                }
                            ],
                            mask: [],
                            info: [
                                {
                                    position: [-60, 110, -40],
                                    rotation: [0, 2.6, 0],
                                    scale: 8
                                }
                            ]
                        },
                        id: 9
                    }
                ],
                id: 9
            }
        ]
    },
    reducers: {
        changeActiveColors: (state, action) => {
            const { color, annotation } = action.payload;
            annotation.forEach(element => {
                const anno = state.annotation.find(item => item.id === element);
                anno?.color.includes(color)
                    ? anno.color = anno.color.filter(exist => exist !== color)
                    : anno.color.push(color)
            });
        },
    }
});

export const { changeActiveColors } = stateAnnotations.actions;

export default stateAnnotations.reducer;