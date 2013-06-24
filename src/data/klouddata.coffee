# copyright (c) 2012 by Ben Dang <me@bdang.it>

# data: klouddata.coffee
# Description:
# 2012-08-23T09:00:00-0000

# DATA
app.AWS = {
    REGIONS: [
        { id: 1, name: 'us-east-1 (Virgina)', value: 1 },
        { id: 2, name: 'us-west-1 (Oregon)', value: 2 },
        { id: 3, name: 'us-west-2 (Northern California)', value: 3 },
        { id: 4, name: 'eu-east-1 (Ireland)', value: 4 },
        { id: 5, name: 'ap-southeast-1 (Singapore)', value: 5 },
        { id: 6, name: 'ap-northeast-1 (Tokyo)', value: 6 },
        { id: 7, name: 'sa-east-1 (Sao Paulo)', value: 7 }
    ],
    COMPUTE: [
        { id: 1, name: 't1.micro', value: {
                linux: [ 0.020, 0.020, 0.025, 0.025, 0.025, 0.027, 0.027 ],
                windows: [ 0.030, 0.030, 0.035, 0.035, 0.035, 0.035, 0.037 ]
            },
        },
        { id: 2, name: 'm1.small', value: {
                linux: [ 0.080, 0.080, 0.090, 0.090, 0.090, 0.092, 0.115 ],
                windows: [ 0.115, 0.115, 0.125, 0.115, 0.115, 0.115, 0.150 ]
            },
        },
        { id: 3, name: 'm1.medium', value: {
                linux: [ 0.160, 0.160, 0.180, 0.180, 0.180, 0.184, 0.230 ],
                windows: [ 0.230, 0.230, 0.250, 0.230, 0.230, 0.230, 0.300 ]
            },
        },
        { id: 4, name: 'm1.large', value: {
                linux: [ 0.320, 0.320, 0.360, 0.360, 0.360, 0.368, 0.460 ],
                windows: [ 0.460, 0.460, 0.500, 0.460, 0.460, 0.460, 0.600 ]
            },
        },
        { id: 5, name: 'm1.xlarge', value: {
                linux: [ 0.640, 0.640, 0.640, 0.720, 0.720, 0.736, 0.920 ],
                windows: [ 0.920, 0.920, 1.000, 0.920, 0.920, 0.920, 1.200 ]
            },
        },
        { id: 6, name: 'm2.xlarge', value: {
                linux: [  0.450, 0.450, 0.506, 0.506, 0.506, 0.518, 0.680 ],
                windows: [ 0.570, 0.570, 0.626, 0.570, 0.570, 0.570, 0.800 ]
            },
        },
        { id: 7, name: 'm2.2xlarge', value: {
                linux: [ 0.900, 0.900, 1.012, 1.012, 1.012, 1.036, 1.360 ],
                windows: [ 1.140, 1.140, 1.252, 1.140, 1.140, 1.140, 1.600 ]
            },
        },
        { id: 8, name: 'm2.4xlarge', value: {
                linux: [ 1.800, 1.800, 2.024, 2.024, 2.024, 2.072, 2.720 ],
                windows: [ 2.280, 2.280, 2.504, 2.280, 2.280, 2.280, 3.200 ]
            },
        },
        { id: 9, name: 'c1.medium', value: {
                linux: [ 0.165, 0.165, 0.186, 0.186, 0.186, 0.190, 0.230 ],
                windows: [ 0.285, 0.285, 0.306, 0.285, 0.285, 0.285, 0.350 ]
            },
        },
        { id: 10, name: 'c1.xlarge', value: {
                linux: [ 0.660, 0.660, 0.744, 0.744, 0.744, 0.760, 0.920 ],
                windows: [ 1.140, 1.140, 1.224, 1.140, 1.140, 1.140, 1.400 ]
            },
        },
        { id: 11, name: 'cc1.4xlarge', value: {
                linux: [ 1.300, null, null, null, null, null, null ],
                windows: [ 1.610, null, null, null, null, null, null ]
            },
        },
        { id: 12, name: 'cc2.8xlarge', value: {
                linux: [ 2.400, null, null, null, null, null, null ],
                windows: [ 2.970, null, null, null, null, null, null ]
            },
        },
        { id: 13, name: 'cg1.4xlarge', value: {
                linux: [ 2.100, null, null, null, null, null, null ],
                windows: [ 2.600, null, null, null, null, null, null ]
            },
        },
    ],
    STORAGE: {
        EBS: [
            US_EAST_1 : {
                store_price : 0.10, # per gb
                io_request : 0.10, # per million
                snap_price : 0.125 # per gb
            },
            US_WEST_1 : {
                store_price : 0.10, # per gb
                io_request : 0.10, # per million
                snap_price : 0.125 # per gb
            },
            US_WEST_2 : {
                store_price : 0.11, # per gb
                io_request : 0.11, # per million
                snap_price : 0.14 # per gb
            },
            EU_WEST_1 : {
                store_price : 0.11, # per gb
                io_request : 0.11, # per million
                snap_price : 0.125 # per gb
            },
            AP_SOUTHEAST_1 : {
                store_price : 0.11, # per gb
                io_request : 0.11, # per million
                snap_price : 0.125 # per gb
            },
            AP_NORTHEAST_1 : {
                store_price : 0.12, # per gb
                io_request : 0.12, # per million
                snap_price : 0.13 # per gb
            },
            SA_EAST_1 : {
                store_price : 0.19, # per gb
                io_request : 0.14, # per million
                snap_price : 0.17 # per gb
            }
        ],
        S3: [
            US_EAST_1 : {
                                # [     GB,    GB]
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
                in_request : 0.01, # per 1k
                out_request : 0.01 # per 10k
            },
            US_WEST_1 : {
                                # [     GB,    GB]
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
                in_request : 0.01, # per 1k
                out_request : 0.01 # per 10k
            },
            US_WEST_2 : {
                                # [     GB,    GB]
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
                in_request : 0.011, # per 1k
                out_request : 0.011 # per 10k
            },
            EU_WEST_1 : {
                                # [     GB,    GB]
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
                in_request : 0.01, # per 1k
                out_request : 0.01 # per 10k
            },
            AP_SOUTHEAST_1 : {
                                # [     GB,    GB]
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
                in_request : 0.01, # per 1k
                out_request : 0.01 # per 10k
            },
            AP_NORTHEAST_1 : {
                                # [     GB,    GB]
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
                in_request : 0.01, # per 1k
                out_request : 0.01 # per 10k
            },
            SA_EAST_1 : {
                                # [     GB,    GB]
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
                in_request : 0.014, # per 1k
                out_request : 0.014 # per 10k
            }
        ]
    },
    BANDWIDTH: [
        {
            id: 1,
            region: "us-east-1",
            transfer: [ [1, 0],
                        [10, ((10*.95)-1)*0.120],
                        [100, ((100*.95)-1)*0.120],
                        [1000, ((1000*.95)-1)*0.120],
                        [10000, ((10000*.95)-1)*0.120],
                        [20000, ((20000*.95)-10000)*0.090+9999*0.120],
                        [30000, ((30000*.95)-10000)*0.090+9999*0.120],
                        [350000, ((350000*.95)-100000)*0.050+60000*0.070+30000*0.090+9999*0.120]]
        },
        {
            id: 2,
            region: "us-west-1",
            transfer: [ [1, 0],
                        [10, ((10*.95)-1)*0.120],
                        [100, ((100*.95)-1)*0.120],
                        [1000, ((1000*.95)-1)*0.120],
                        [10000, ((10000*.95)-1)*0.120],
                        [20000, ((20000*.95)-10000)*0.090+9999*0.120],
                        [30000, ((30000*.95)-10000)*0.090+9999*0.120],
                        [350000, ((350000*.95)-100000)*0.050+60000*0.070+30000*0.090+9999*0.120]]
        },
        {
            id: 3,
            region: "us-west-2",
            transfer: [ [1, 0],
                        [10, ((10*.95)-1)*0.120],
                        [100, ((100*.95)-1)*0.120],
                        [1000, ((1000*.95)-1)*0.120],
                        [10000, ((10000*.95)-1)*0.120],
                        [20000, ((20000*.95)-10000)*0.090+9999*0.120],
                        [30000, ((30000*.95)-10000)*0.090+9999*0.120],
                        [350000, ((350000*.95)-100000)*0.050+60000*0.070+30000*0.090+9999*0.120]]
        },
        {
            id: 4,
            region: "eu-west-1",
            transfer: [ [1, 0],
                        [10, ((10*.95)-1)*0.120],
                        [100, ((100*.95)-1)*0.120],
                        [1000, ((1000*.95)-1)*0.120],
                        [10000, ((10000*.95)-1)*0.120],
                        [20000, ((20000*.95)-10000)*0.090+9999*0.120],
                        [30000, ((30000*.95)-10000)*0.090+9999*0.120],
                        [350000, ((350000*.95)-100000)*0.050+60000*0.070+30000*0.090+9999*0.120]]
        },
        {
            id: 5,
            region: "ap-southeast-1",
            transfer: [ [1, 0],
                        [10, ((10*.95)-1)*0.190],
                        [100, ((100*.95)-1)*0.190],
                        [1000, ((1000*.95)-1)*0.190],
                        [10000, ((10000*.95)-1)*0.190],
                        [20000, ((20000*.95)-10000)*0.150+9999*0.190],
                        [30000, ((30000*.95)-10000)*0.150+9999*0.190],
                        [350000, ((350000*.95)-100000)*0.120+60000*0.130+30000*0.150+9999*0.190]]
        }
        {
            id: 6,
            region: "ap-northeast-1",
            transfer: [ [1, 0],
                        [10, ((10*.95)-1)*0.201],
                        [100, ((100*.95)-1)*0.201],
                        [1000, ((1000*.95)-1)*0.201],
                        [10000, ((10000*.95)-1)*0.201],
                        [20000, ((20000*.95)-10000)*0.158+9999*0.201],
                        [30000, ((30000*.95)-10000)*0.158+9999*0.201],
                        [350000, ((350000*.95)-100000)*0.127+60000*0.137+30000*0.158+9999*0.201]]
        }
        {
            id: 7,
            region: "sa-east-1",
            transfer: [ [1, 0],
                        [10, ((10*.95)-1)*0.250],
                        [100, ((100*.95)-1)*0.250],
                        [1000, ((1000*.95)-1)*0.250],
                        [10000, ((10000*.95)-1)*0.250],
                        [20000, ((20000*.95)-10000)*0.230+9999*0.250],
                        [30000, ((30000*.95)-10000)*0.230+9999*0.250],
                        [350000, ((350000*.95)-100000)*0.190+60000*0.210+30000*0.230+9999*0.250]]
        }
    ]
}

app.RACKSPACE = {
    REGIONS: [
        { id: 1, name: 'US', value: 1 }
    ],
    COMPUTE: [
        { id: 1, name: '512MB Flavor', value: {
                linux: [ 0.022 ],
                windows: [ null ]
            },
        },
        { id: 2, name: '1GB Flavor', value: {
                linux: [ 0.060 ],
                windows: [ 0.08 ]
            },
        },
        { id: 3, name: '2GB Flavor', value: {
                linux: [ 0.12 ],
                windows: [ 0.16 ]
            },
        },
        { id: 4, name: '4GB Flavor', value: {
                linux: [ 0.24 ],
                windows: [ 0.32 ]
            },
        },
        { id: 5, name: '8GB Flavor', value: {
                linux: [ 0.48 ],
                windows: [ 0.58 ]
            },
        },
        { id: 6, name: '15GB Flavor', value: {
                linux: [  0.90 ],
                windows: [ 1.08 ]
            },
        },
        { id: 7, name: '30GB Flavor', value: {
                linux: [ 1.20 ],
                windows: [ 1.56 ]
            },
        }
    ],
    STORAGE: { }
    BANDWIDTH: [
        {
            id: 1,
            region: "US",
            transfer: [ [1, 1*.95*0.18],
                        [10, 10*.95*0.18],
                        [100, 100*.95*0.18],
                        [1000, 1000*.95*0.18],
                        [10000, 10000*.95*0.18],
                        [20000, 20000*.95*0.18],
                        [30000, 30000*.95*0.18],
                        [350000, 350000*.95*0.18] ]
        }
    ]
}

app.JOYENT = {
    REGIONS: [
        { id: 1, name: 'US', value: 1 }
    ],
    COMPUTE: [
        { id: 1, name: 'Small 1GB (1 CPU)', value: {
                linux: [ 0.085 ],
                windows: [ null ]
            },
        },
        { id: 2, name: 'Medium 1GB (2 CPU) SmartOS', value: {
                linux: [ 0.17 ],
                windows: [ null ]
            },
        },
        { id: 3, name: 'Medium 2GB (1 CPU)', value: {
                linux: [ 0.060 ],
                windows: [ null ]
            },
        },
        { id: 4, name: 'Medium 4GB (1 CPU)', value: {
                linux: [ 0.17 ],
                windows: [ 0.29 ]
            },
        },
        { id: 5, name: 'Large 8GB (2 CPU)', value: {
                linux: [ 0.36 ],
                windows: [ 0.46 ]
            },
        },
        { id: 6, name: 'Large 16GB (3 CPU)', value: {
                linux: [ 0.64 ],
                windows: [ 0.84 ]
            },
        },
        { id: 7, name: 'XL 8GB (4 CPU) SmartOS', value: {
                linux: [ 0.17 ],
                windows: [ null ]
            },
        }
        { id: 8, name: 'XL 32GB (4 CPU)', value: {
                linux: [ 1.12 ],
                windows: [ 1.32 ]
            },
        },
        { id: 9, name: 'XXL 48GB (8 CPU)', value: {
                linux: [ 1.68 ],
                windows: [ null ]
            },
        },
        { id: 10, name: 'XXXL 64GB (12 CPU)', value: {
                linux: [ 2.24 ],
                windows: [ null ]
            },
        },
        { id: 11, name: 'Dedicated 80GB (16 CPU)', value: {
                linux: [ 2.80 ],
                windows: [ null ]
            },
        }
    ],
    STORAGE: { }
    BANDWIDTH: [
        {
            id: 1,
            region: "USA",
            transfer: [ [1, 0],
                        [10, 0],
                        [100, 0],
                        [1000, 0],
                        [10000, 0],
                        [20000, 0],
                        [30000, 800],
                        [350000, 26400] ]
        }
    ]
}

app.COMMON = {
    OS: [
        { id: 1, name: 'Linux', value: 'linux' },
        { id: 2, name: 'Windows', value: 'windows' }
    ],
    IO: [
        { id: 1, name: 'light (10 mil I/O requests)', value: 10 },
        { id: 2, name: 'medium (100 mil I/O requests)', value: 100 },
        { id: 3, name: 'heavy (500 mil I/O requests)', value: 500 },
        { id: 4, name: 'very heavy (1,000 mil I/O requests)', value: 1000 },
        { id: 5, name: 'insane (100,000 mil I/O requests)', value: 1000000 }
    ],
    BANDWIDTH: {
        OUT: [
            { id: 1, name: 'light outgoing (1 GB)', value: 1 },
            { id: 2, name: 'medium outgoing (10 GB)', value: 10 },
            { id: 3, name: 'heavy outgoing (500 GB)', value: 500 },
            { id: 4, name: 'very heavy outgoing (1000 GB)', value: 1000 },
            { id: 5, name: 'insane outgoing (1 PB)', value: 1000000 }
        ],
        IN: [
            { id: 1, name: 'light incoming (1 GB)', value: 1 },
            { id: 2, name: 'medium incoming (10 GB)', value: 10 },
            { id: 3, name: 'heavy incoming (500 GB)', value: 500 },
            { id: 4, name: 'very heavy incoming (1000 GB)', value: 1000 },
            { id: 5, name: 'insane incoming (1 PB)', value: 1000000 }
        ]
    }
}