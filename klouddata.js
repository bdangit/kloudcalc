$(function() {
  // pricing from http://aws.amazon.com/pricing/ec2/
  // as of 2012 05 31 1141 pm PST
  var AWS = {
    EC2 : {
      US_EAST_1 : { 
        name: "US East (Virgina)",
        LINUX : {
          T1_MICRO: { price: 0.020 },
          M1_SMALL: { price: 0.080 },
          M1_MEDIUM: { price: 0.160 },
          M1_LARGE: { price: 0.320 },
          M1_XLARGE: { price: 0.640 },
          M2_XLARGE: { price: 0.450 },
          M2_2XLARGE: { price: 0.900 },
          M2_4XLARGE: { price: 1.800 },
          C1_MEDIUM: { price: 0.165 },
          C1_XLARGE: { price: 0.660 },
          CC1_4XLARGE: { price: 1.300 },
          CC2_8XLARGE: { price: 2.400 },
          CG1_4XLARGE: { price: 2.100 }
        },
        WIN : {
          T1_MICRO: { price: 0.030 },
          M1_SMALL: { price: 0.115 },
          M1_MEDIUM: { price: 0.230 },
          M1_LARGE: { price: 0.460 },
          M1_XLARGE: { price: 0.920 },
          M2_XLARGE: { price: 0.570 },
          M2_2XLARGE: { price: 1.140 },
          M2_4XLARGE: { price: 2.280 },
          C1_MEDIUM: { price: 0.285 },
          C1_XLARGE: { price: 1.140 },
          CC1_4XLARGE: { price: 1.610 },
          CC2_8XLARGE: { price: 2.970 },
          CG1_4XLARGE: { price: 2.600 }
        }
      },
      US_WEST_1 : { 
        name: "US West (Oregon)",
        LINUX : {
          T1_MICRO: { price: 0.020 },
          M1_SMALL: { price: 0.080 },
          M1_MEDIUM: { price: 0.160 },
          M1_LARGE: { price: 0.320 },
          M1_XLARGE: { price: 0.640 },
          M2_XLARGE: { price: 0.450 },
          M2_2XLARGE: { price: 0.900 },
          M2_4XLARGE: { price: 1.800 },
          C1_MEDIUM: { price: 0.165 },
          C1_XLARGE: { price: 0.660 },
          CC1_4XLARGE: { price: null },
          CC2_8XLARGE: { price: null },
          CG1_4XLARGE: { price: null }
        },
        WIN : {
          T1_MICRO: { price: 0.030 },
          M1_SMALL: { price: 0.115 },
          M1_MEDIUM: { price: 0.230 },
          M1_LARGE: { price: 0.460 },
          M1_XLARGE: { price: 0.920 },
          M2_XLARGE: { price: 0.570 },
          M2_2XLARGE: { price: 1.140 },
          M2_4XLARGE: { price: 2.280 },
          C1_MEDIUM: { price: 0.285 },
          C1_XLARGE: { price: 1.140 },
          CC1_4XLARGE: { price: null },
          CC2_8XLARGE: { price: null },
          CG1_4XLARGE: { price: null }
        }
      },
      US_WEST_2 : { 
        name: "US West (Northern California)",
        LINUX : {
          T1_MICRO: { price: 0.025 },
          M1_SMALL: { price: 0.090 },
          M1_MEDIUM: { price: 0.180 },
          M1_LARGE: { price: 0.360 },
          M1_XLARGE: { price: 0.720 },
          M2_XLARGE: { price: 0.506 },
          M2_2XLARGE: { price: 1.012 },
          M2_4XLARGE: { price: 2.024 },
          C1_MEDIUM: { price: 0.186 },
          C1_XLARGE: { price: 0.744 },
          CC1_4XLARGE: { price: null },
          CC2_8XLARGE: { price: null },
          CG1_4XLARGE: { price: null }
        },
        WIN : {
          T1_MICRO: { price: 0.035 },
          M1_SMALL: { price: 0.125 },
          M1_MEDIUM: { price: 0.250 },
          M1_LARGE: { price: 0.500 },
          M1_XLARGE: { price: 1.000 },
          M2_XLARGE: { price: 0.626 },
          M2_2XLARGE: { price: 1.252 },
          M2_4XLARGE: { price: 2.504 },
          C1_MEDIUM: { price: 0.306 },
          C1_XLARGE: { price: 1.224 },
          CC1_4XLARGE: { price: null },
          CC2_8XLARGE: { price: null },
          CG1_4XLARGE: { price: null }
        }
      },
      EU_WEST_1 : { 
        name: "EU (Ireland)",
        LINUX : {
          T1_MICRO: { price: 0.025 },
          M1_SMALL: { price: 0.090 },
          M1_MEDIUM: { price: 0.180 },
          M1_LARGE: { price: 0.360 },
          M1_XLARGE: { price: 0.720 },
          M2_XLARGE: { price: 0.506 },
          M2_2XLARGE: { price: 1.012 },
          M2_4XLARGE: { price: 2.024 },
          C1_MEDIUM: { price: 0.186 },
          C1_XLARGE: { price: 0.744 },
          CC1_4XLARGE: { price: null },
          CC2_8XLARGE: { price: null },
          CG1_4XLARGE: { price: null }
        },
        WIN : {
          T1_MICRO: { price: 0.035 },
          M1_SMALL: { price: 0.115 },
          M1_MEDIUM: { price: 0.230 },
          M1_LARGE: { price: 0.460 },
          M1_XLARGE: { price: 0.920 },
          M2_XLARGE: { price: 0.570 },
          M2_2XLARGE: { price: 1.140 },
          M2_4XLARGE: { price: 2.280 },
          C1_MEDIUM: { price: 0.285 },
          C1_XLARGE: { price: 1.140 },
          CC1_4XLARGE: { price: null },
          CC2_8XLARGE: { price: null },
          CG1_4XLARGE: { price: null }
        }
      },
      AP_SOUTHEAST_1 : { 
        name: "Asia Pacific (Singapore)",
        LINUX : {
          T1_MICRO: { price: 0.025 },
          M1_SMALL: { price: 0.090 },
          M1_MEDIUM: { price: 0.180 },
          M1_LARGE: { price: 0.360 },
          M1_XLARGE: { price: 0.720 },
          M2_XLARGE: { price: 0.506 },
          M2_2XLARGE: { price: 1.012 },
          M2_4XLARGE: { price: 2.024 },
          C1_MEDIUM: { price: 0.186 },
          C1_XLARGE: { price: 0.744 },
          CC1_4XLARGE: { price: null },
          CC2_8XLARGE: { price: null },
          CG1_4XLARGE: { price: null }
        },
        WIN : {
          T1_MICRO: { price: 0.035 },
          M1_SMALL: { price: 0.115 },
          M1_MEDIUM: { price: 0.230 },
          M1_LARGE: { price: 0.460 },
          M1_XLARGE: { price: 0.920 },
          M2_XLARGE: { price: 0.570 },
          M2_2XLARGE: { price: 1.140 },
          M2_4XLARGE: { price: 2.280 },
          C1_MEDIUM: { price: 0.285 },
          C1_XLARGE: { price: 1.140 },
          CC1_4XLARGE: { price: null },
          CC2_8XLARGE: { price: null },
          CG1_4XLARGE: { price: null }
        }
      },
      AP_NORTHEAST_1 : { 
        name: "Asia Pacific (Tokyo)",
        LINUX : {
          T1_MICRO: { price: 0.027 },
          M1_SMALL: { price: 0.092 },
          M1_MEDIUM: { price: 0.184 },
          M1_LARGE: { price: 0.368 },
          M1_XLARGE: { price: 0.736 },
          M2_XLARGE: { price: 0.518 },
          M2_2XLARGE: { price: 1.036 },
          M2_4XLARGE: { price: 2.072 },
          C1_MEDIUM: { price: 0.190 },
          C1_XLARGE: { price: 0.760 },
          CC1_4XLARGE: { price: null },
          CC2_8XLARGE: { price: null },
          CG1_4XLARGE: { price: null }
        },
        WIN : {
          T1_MICRO: { price: 0.035 },
          M1_SMALL: { price: 0.115 },
          M1_MEDIUM: { price: 0.230 },
          M1_LARGE: { price: 0.460 },
          M1_XLARGE: { price: 0.920 },
          M2_XLARGE: { price: 0.570 },
          M2_2XLARGE: { price: 1.140 },
          M2_4XLARGE: { price: 2.280 },
          C1_MEDIUM: { price: 0.285 },
          C1_XLARGE: { price: 1.140 },
          CC1_4XLARGE: { price: null },
          CC2_8XLARGE: { price: null },
          CG1_4XLARGE: { price: null }
        }
      },
      SA_EAST_1 : { 
        name: "South America (Sao Paulo)",
        LINUX : {
          T1_MICRO: { price: 0.027 },
          M1_SMALL: { price: 0.115 },
          M1_MEDIUM: { price: 0.230 },
          M1_LARGE: { price: 0.460 },
          M1_XLARGE: { price: 0.920 },
          M2_XLARGE: { price: 0.680 },
          M2_2XLARGE: { price: 1.360 },
          M2_4XLARGE: { price: 2.720 },
          C1_MEDIUM: { price: 0.230 },
          C1_XLARGE: { price: 0.920 },
          CC1_4XLARGE: { price: null },
          CC2_8XLARGE: { price: null },
          CG1_4XLARGE: { price: null }
        },
        WIN : {
          T1_MICRO: { price: 0.037 },
          M1_SMALL: { price: 0.150 },
          M1_MEDIUM: { price: 0.300 },
          M1_LARGE: { price: 0.600 },
          M1_XLARGE: { price: 1.200 },
          M2_XLARGE: { price: 0.800 },
          M2_2XLARGE: { price: 1.600 },
          M2_4XLARGE: { price: 3.200 },
          C1_MEDIUM: { price: 0.350 },
          C1_XLARGE: { price: 1.400 },
          CC1_4XLARGE: { price: null },
          CC2_8XLARGE: { price: null },
          CG1_4XLARGE: { price: null }
        }
      } 
    }
  };
twitw});