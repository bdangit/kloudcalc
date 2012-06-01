var OS = {
  LINUX : {
    name : "Linux",
  },
  WIN : {
    name : "Windows",
  },
};

var AWS = {
  TIMESTAMP : "2012-05-31 2341 PST", // should be UNIX based timestamp
  REGIONS : {
    US_EAST_1 : {
      index: 1,
      name: "US East (Virgina)",
      code: "US_EAST_1"
    },
    US_WEST_1 : {
      index: 2, 
      name: "US West (Oregon)",
      code: "US_WEST_1"
    },
    US_WEST_2 : {
      index: 3,
      name: "US West (Northern California)",
      code: "US_WEST_2"
    },
    EU_WEST_1 : {
      index: 4,
      name: "EU (Ireland)",
      code: "EU_WEST_1"
    },
    AP_SOUTHEAST_1 : {
      index: 5,
      name: "Asia Pacific (Singapore)",
      code: "AP_SOUTHEAST_1"
    },
    AP_NORTHEAST_1 : {
      index: 6,
      name: "Asia Pacific (Tokyo)",
      code: "AP_NORTHEAST_1"
    },
    SA_EAST_1 : {
      index: 7,
      name: "South America (Sao Paulo)",
      code: "SA_EAST_1"
    }
  },
  EC2 : {
    // pricing from http://aws.amazon.com/pricing/ec2/
    T1_MICRO : {
      name : "t1.micro",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 0.020
        },
        US_WEST_1 : {
          index: 2,
          price: 0.020
        },
        US_WEST_2 : {
          index: 3,
          price: 0.025
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.025
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.025
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.027
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.027
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 0.030
        },
        US_WEST_1 : {
          index: 2,
          price: 0.030
        },
        US_WEST_2 : {
          index: 3,
          price: 0.035
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.035
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.035
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.035
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.037
        },
      },
    },
    M1_SMALL : {
      name : "m1.small",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 0.080
        },
        US_WEST_1 : {
          index: 2,
          price: 0.080
        },
        US_WEST_2 : {
          index: 3,
          price: 0.090
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.090
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.090
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.092
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.115
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 0.115
        },
        US_WEST_1 : {
          index: 2,
          price: 0.115
        },
        US_WEST_2 : {
          index: 3,
          price: 0.125
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.115
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.115
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.115
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.150
        },
      },
    },
    M1_MEDIUM: {
      name : "m1.medium",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 0.160
        },
        US_WEST_1 : {
          index: 2,
          price: 0.160
        },
        US_WEST_2 : {
          index: 3,
          price: 0.180
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.180
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.180
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.184
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.230
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 0.230
        },
        US_WEST_1 : {
          index: 2,
          price: 0.230
        },
        US_WEST_2 : {
          index: 3,
          price: 0.250
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.230
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.230
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.230
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.300
        },
      },
    },
    M1_LARGE: {
      name : "m1.large",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 0.320
        },
        US_WEST_1 : {
          index: 2,
          price: 0.320
        },
        US_WEST_2 : {
          index: 3,
          price: 0.360
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.360
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.360
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.368
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.460
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 0.460
        },
        US_WEST_1 : {
          index: 2,
          price: 0.460
        },
        US_WEST_2 : {
          index: 3,
          price: 0.500
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.460
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.460
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.460
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.600
        },
      },
    },
    M1_XLARGE: {
      name : "m1.xlarge",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 0.640
        },
        US_WEST_1 : {
          index: 2,
          price: 0.640
        },
        US_WEST_2 : {
          index: 3,
          price: 0.720
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.720
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.720
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.736
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.920
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 0.920
        },
        US_WEST_1 : {
          index: 2,
          price: 0.920
        },
        US_WEST_2 : {
          index: 3,
          price: 1.000
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.920
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.920
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.920
        },
        SA_EAST_1 : {
          index: 7,
          price: 1.200
        },
      },
    },
    M2_XLARGE: {
      name : "m2.xlarge",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 0.450
        },
        US_WEST_1 : {
          index: 2,
          price: 0.450
        },
        US_WEST_2 : {
          index: 3,
          price: 0.506
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.506
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.506
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.518
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.680
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 0.570
        },
        US_WEST_1 : {
          index: 2,
          price: 0.570
        },
        US_WEST_2 : {
          index: 3,
          price: 0.626
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.570
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.570
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.570
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.800
        },
      },
    },
    M2_2XLARGE: {
      name : "m2.2xlarge",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 0.900
        },
        US_WEST_1 : {
          index: 2,
          price: 0.900
        },
        US_WEST_2 : {
          index: 3,
          price: 1.012
        },
        EU_WEST_1 : {
          index: 4,
          price: 1.012
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 1.012
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 1.036
        },
        SA_EAST_1 : {
          index: 7,
          price: 1.360
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 1.140
        },
        US_WEST_1 : {
          index: 2,
          price: 1.140
        },
        US_WEST_2 : {
          index: 3,
          price: 1.252
        },
        EU_WEST_1 : {
          index: 4,
          price: 1.140
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 1.140
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 1.140
        },
        SA_EAST_1 : {
          index: 7,
          price: 1.600
        },
      },
    },
    M2_4XLARGE: {
      name : "m2.4xlarge",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 1.800
        },
        US_WEST_1 : {
          index: 2,
          price: 1.800
        },
        US_WEST_2 : {
          index: 3,
          price: 2.024
        },
        EU_WEST_1 : {
          index: 4,
          price: 2.024
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 2.024
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 2.072
        },
        SA_EAST_1 : {
          index: 7,
          price: 2.720
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 2.280
        },
        US_WEST_1 : {
          index: 2,
          price: 2.280
        },
        US_WEST_2 : {
          index: 3,
          price: 2.504
        },
        EU_WEST_1 : {
          index: 4,
          price: 2.280
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 2.280
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 2.280
        },
        SA_EAST_1 : {
          index: 7,
          price: 3.200
        },
      },
    },
    C1_MEDIUM: {
      name : "c1.medium",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 0.165
        },
        US_WEST_1 : {
          index: 2,
          price: 0.165
        },
        US_WEST_2 : {
          index: 3,
          price: 0.186
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.186
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.186
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.190
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.230
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 0.285
        },
        US_WEST_1 : {
          index: 2,
          price: 0.285
        },
        US_WEST_2 : {
          index: 3,
          price: 0.306
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.285
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.285
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.285
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.350
        },
      },
    },
    C1_XLARGE: {
      name : "c1.xlarge",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 0.660
        },
        US_WEST_1 : {
          index: 2,
          price: 0.660
        },
        US_WEST_2 : {
          index: 3,
          price: 0.744
        },
        EU_WEST_1 : {
          index: 4,
          price: 0.744
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 0.744
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 0.760
        },
        SA_EAST_1 : {
          index: 7,
          price: 0.920
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 1.140
        },
        US_WEST_1 : {
          index: 2,
          price: 1.140
        },
        US_WEST_2 : {
          index: 3,
          price: 1.224
        },
        EU_WEST_1 : {
          index: 4,
          price: 1.140
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: 1.140
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: 1.140
        },
        SA_EAST_1 : {
          index: 7,
          price: 1.400
        },
      },
    },
    CC1_4XLARGE: {
      name : "cc1.4xlarge",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 1.300
        },
        US_WEST_1 : {
          index: 2,
          price: null
        },
        US_WEST_2 : {
          index: 3,
          price: null
        },
        EU_WEST_1 : {
          index: 4,
          price: null
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: null
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: null
        },
        SA_EAST_1 : {
          index: 7,
          price: null
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 1.610
        },
        US_WEST_1 : {
          index: 2,
          price: null
        },
        US_WEST_2 : {
          index: 3,
          price: null
        },
        EU_WEST_1 : {
          index: 4,
          price: null
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: null
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: null
        },
        SA_EAST_1 : {
          index: 7,
          price: null
        },
      },
    },
    CC2_8XLARGE: {
      name : "cc2.8xlarge",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 2.400
        },
        US_WEST_1 : {
          index: 2,
          price: null
        },
        US_WEST_2 : {
          index: 3,
          price: null
        },
        EU_WEST_1 : {
          index: 4,
          price: null
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: null
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: null
        },
        SA_EAST_1 : {
          index: 7,
          price: null
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 2.970
        },
        US_WEST_1 : {
          index: 2,
          price: null
        },
        US_WEST_2 : {
          index: 3,
          price: null
        },
        EU_WEST_1 : {
          index: 4,
          price: null
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: null
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: null
        },
        SA_EAST_1 : {
          index: 7,
          price: null
        },
      },
    },
    CG1_4XLARGE: {
      name : "cg1.4xlarge",
      LINUX : {
        US_EAST_1 : {
          index: 1,
          price: 2.100
        },
        US_WEST_1 : {
          index: 2,
          price: null
        },
        US_WEST_2 : {
          index: 3,
          price: null
        },
        EU_WEST_1 : {
          index: 4,
          price: null
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: null
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: null
        },
        SA_EAST_1 : {
          index: 7,
          price: null
        },
      },
      WIN : {
        US_EAST_1 : {
          index: 1,
          price: 2.600
        },
        US_WEST_1 : {
          index: 2,
          price: null
        },
        US_WEST_2 : {
          index: 3,
          price: null
        },
        EU_WEST_1 : {
          index: 4,
          price: null
        },
        AP_SOUTHEAST_1 : {
          index: 5,
          price: null
        },
        AP_NORTHEAST_1 : {
          index: 6,
          price: null
        },
        SA_EAST_1 : {
          index: 7,
          price: null
        },
      },
    }, 
  }, // end EC2
  EBS : null,
  S3 : null,
}; // end AWS
