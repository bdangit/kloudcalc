var OS = {
  LINUX : {
    name : "Linux"
  },
  WIN : {
    name : "Windows"
  }
};

var VENDORS = {
  AWS : {
    name : "Amazon Web Services",
    code : "AWS"
  }
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
  }, // end REGIONS
  COMPUTE : {
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
          }
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
          }
        }
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
          }
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
          }
        }
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
          }
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
          }
        }
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
          }
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
          }
        }
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
          }
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
          }
        }
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
          }
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
          }
        }
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
          }
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
          }
        }
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
          }
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
          }
        }
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
          }
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
          }
        }
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
          }
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
          }
        }
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
          }
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
          }
        }
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
          }
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
          }
        }
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
          }
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
          }
        }
      }
    } // end EC2
  }, // end COMPUTE
  STORAGE : {
    EBS : {
      US_EAST_1 : {
        store_price : 0.10, // per gb
        io_request : 0.10, // per million
        snap_price : 0.125 // per gb
      },
      US_WEST_1 : {
        store_price : 0.10, // per gb
        io_request : 0.10, // per million
        snap_price : 0.125 // per gb
      },
      US_WEST_2 : {
        store_price : 0.11, // per gb
        io_request : 0.11, // per million
        snap_price : 0.14 // per gb
      },
      EU_WEST_1 : {
        store_price : 0.11, // per gb
        io_request : 0.11, // per million
        snap_price : 0.125 // per gb
      },
      AP_SOUTHEAST_1 : {
        store_price : 0.11, // per gb
        io_request : 0.11, // per million
        snap_price : 0.125 // per gb
      },
      AP_NORTHEAST_1 : {
        store_price : 0.12, // per gb
        io_request : 0.12, // per million
        snap_price : 0.13 // per gb
      },
      SA_EAST_1 : {
        store_price : 0.19, // per gb
        io_request : 0.14, // per million
        snap_price : 0.17 // per gb
      }
    }, // end EBS
    S3 : {
      US_EAST_1 : {
                        //[     GB,    GB]
        store_price :   [ [   1000, 0.125],
                          [  49000, 0.110],
                          [ 450000, 0.095],
                          [ 500000, 0.090],
                          [4000000, 0.080],
                          [5000000, 0.055] ],
        rrstore_price : [ [   1000, 0.093],
                          [  49000, 0.083],
                          [ 450000, 0.073],
                          [ 500000, 0.063],
                          [4000000, 0.053],
                          [5000000, 0.037] ],
        in_request : 0.01, // per 1k
        out_request : 0.01 // per 10k
      },
      US_WEST_1 : {
                        //[     GB,    GB]
        store_price :   [ [   1000, 0.125],
                          [  49000, 0.110],
                          [ 450000, 0.095],
                          [ 500000, 0.090],
                          [4000000, 0.080],
                          [5000000, 0.055] ],
        rrstore_price : [ [   1000, 0.093],
                          [  49000, 0.083],
                          [ 450000, 0.073],
                          [ 500000, 0.063],
                          [4000000, 0.053],
                          [5000000, 0.037] ],
        in_request : 0.01, // per 1k
        out_request : 0.01 // per 10k
      },
      US_WEST_2 : {
                        //[     GB,    GB]
        store_price :   [ [   1000, 0.140],
                          [  49000, 0.125],
                          [ 450000, 0.115],
                          [ 500000, 0.105],
                          [4000000, 0.095],
                          [5000000, 0.070] ],
        rrstore_price : [ [   1000, 0.103],
                          [  49000, 0.093],
                          [ 450000, 0.083],
                          [ 500000, 0.073],
                          [4000000, 0.063],
                          [5000000, 0.047] ],
        in_request : 0.011, // per 1k
        out_request : 0.011 // per 10k
      },
      EU_WEST_1 : {
                        //[     GB,    GB]
        store_price :   [ [   1000, 0.125],
                          [  49000, 0.110],
                          [ 450000, 0.095],
                          [ 500000, 0.090],
                          [4000000, 0.080],
                          [5000000, 0.055] ],
        rrstore_price : [ [   1000, 0.093],
                          [  49000, 0.083],
                          [ 450000, 0.073],
                          [ 500000, 0.063],
                          [4000000, 0.053],
                          [5000000, 0.037] ],
        in_request : 0.01, // per 1k
        out_request : 0.01 // per 10k
      },
      AP_SOUTHEAST_1 : {
                        //[     GB,    GB]
        store_price :   [ [   1000, 0.125],
                          [  49000, 0.110],
                          [ 450000, 0.095],
                          [ 500000, 0.090],
                          [4000000, 0.080],
                          [5000000, 0.055] ],
        rrstore_price : [ [   1000, 0.093],
                          [  49000, 0.083],
                          [ 450000, 0.073],
                          [ 500000, 0.063],
                          [4000000, 0.053],
                          [5000000, 0.037] ],
        in_request : 0.01, // per 1k
        out_request : 0.01 // per 10k
      },
      AP_NORTHEAST_1 : {
                        //[     GB,    GB]
        store_price :   [ [   1000, 0.130],
                          [  49000, 0.115],
                          [ 450000, 0.100],
                          [ 500000, 0.095],
                          [4000000, 0.085],
                          [5000000, 0.060] ],
        rrstore_price : [ [   1000, 0.100],
                          [  49000, 0.090],
                          [ 450000, 0.080],
                          [ 500000, 0.070],
                          [4000000, 0.060],
                          [5000000, 0.044] ],
        in_request : 0.01, // per 1k
        out_request : 0.01 // per 10k
      },
      SA_EAST_1 : {
                        //[     GB,    GB]
        store_price :   [ [   1000, 0.170],
                          [  49000, 0.150],
                          [ 450000, 0.130],
                          [ 500000, 0.120],
                          [4000000, 0.110],
                          [5000000, 0.075] ],
        rrstore_price : [ [   1000, 0.127],
                          [  49000, 0.113],
                          [ 450000, 0.100],
                          [ 500000, 0.087],
                          [4000000, 0.073],
                          [5000000, 0.050] ],
        in_request : 0.014, // per 1k
        out_request : 0.014 // per 10k
      }
    } // end S3
  }, // end STORAGE
  BANDWIDTH : {
    // S3, EC2, RDS, SimpleDB, SQS, SNS, VPC
    US_EAST_1 : {
      data_in : 0.00,
      data_out : [ [      1, 0.000],
                   [  10000, 0.120],
                   [  40000, 0.090],
                   [ 100000, 0.070],
                   [ 350000, 0.050] ]
    },
    US_WEST_1 : {
      data_in : 0.00,
      data_out : [ [      1, 0.000],
                   [  10000, 0.120],
                   [  40000, 0.090],
                   [ 100000, 0.070],
                   [ 350000, 0.050] ]
    },
    US_WEST_2 : {
      data_in : 0.00,
      data_out : [ [      1, 0.000],
                   [  10000, 0.120],
                   [  40000, 0.090],
                   [ 100000, 0.070],
                   [ 350000, 0.050] ]
    },
    EU_WEST_1 : {
      data_in : 0.00,
      data_out : [ [      1, 0.000],
                   [  10000, 0.120],
                   [  40000, 0.090],
                   [ 100000, 0.070],
                   [ 350000, 0.050] ]
    },
    AP_SOUTHEAST_1 : {
      data_in : 0.00,
      data_out : [ [      1, 0.000],
                   [  10000, 0.190],
                   [  40000, 0.150],
                   [ 100000, 0.130],
                   [ 350000, 0.120] ]
    },
    AP_NORTHEAST_1 : {
      data_in : 0.00,
      data_out : [ [      1, 0.000],
                   [  10000, 0.201],
                   [  40000, 0.158],
                   [ 100000, 0.137],
                   [ 350000, 0.127] ]
    },
    SA_EAST_1 : {
      data_in : 0.00,
      data_out : [ [      1, 0.000],
                   [  10000, 0.250],
                   [  40000, 0.230],
                   [ 100000, 0.210],
                   [ 350000, 0.190] ]
    }
  }
}; // end AWS
