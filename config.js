

var config = {

    database: {
        // connection: process.env.conncetion || 'mongodb://admin:123@mongo-0.snapthat.xyz/snapthat',
        connection: process.env.conncetion || 'mongodb://admin:123@mongo-0.snapthat.xyz/snapthat',
        // connection: process.env.conncetion || 'mongodb+srv://admin:123@snapthatcluster0-jmawo.mongodb.net/snapthat',
        // connection: process.env.conncetion || 'mongodb://localhost/test1',
        //connection: process.env.conncetion || 'mongodb://Administrator:'+encodeURIComponent('Qwerty12#$')+'@youcan-cluster-shard-00-00-ms4fp.gcp.mongodb.net:27017,youcan-cluster-shard-00-01-ms4fp.gcp.mongodb.net:27017,youcan-cluster-shard-00-02-ms4fp.gcp.mongodb.net:27017/youcan?ssl=true&replicaSet=Youcan-Cluster-shard-0&authSource=admin',
    },
    cloudstorage: {
        keyFilename: "snapthat_gcloud.json",
        bucket: "snapthat_uploads1",
        projectId: "snapthat-103",
        keep_public: true,
        url_expiry: "1/1/2020"
    },
    ai: {
        endpoints:
        {
            closest_endpoint: "https://ai.snapthat.xyz/api/predict/closest",
            imagevec_endpoint: "https://ai.snapthat.xyz/api/predict/imagevec",
            gender_endpoint: "https://ai.snapthat.xyz/api/predict/gender"
        }
    },
    location: {
        endpoints:
        {
            location_endpoint: "http://api.ipstack.com",
        },
        apikeys: ["a74107dc469e1c913cf1a4ced2e2701b","b003e5e110af6bf55636b673da1e34e2","1486e492ddb5aefe177e394c8230e9b9", "ec0c5ffd8d37187d605f7f7097b35cdf"]
    },
    auth:{secret: 'your_jwt_secret', cookieAge: 150, jwtTokenAge: '150d'},
    
    test: {
        database: {
            connection: process.env.conncetion || 'mongodb://localhost/test',
        },
    }
}

module.exports = config;