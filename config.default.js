let config =
    {"exchanges": [
        {"name": "coinfalcon",
            "url": "https://coinfalcon.com",
            "active": true,
            "debug": true,
            "CF_API_KEY": "",
            "CD_API_SECRET_KEY": "",
            "sleepPause": 225,
            "stickToBigOrders": false,
            "accounts": [{"name":"eur"},{"name":"btc"},{"name":"iot"}],
            "pairs": [
                {"name": "IOT-EUR",
                    "active": true,
                    "separator": "-",
                    "digitsPrice": 4,
                    "digitsSize": 5,
                    "buySize": 0,
                    "buyForAmount": 10,
                    "ignoreOrderSize": 1,
                    "pipsAskBidSpread": 10,
                    "percentageProfitTarget": 0.12,
                    "pipsBuySpread": 10,
                    "sellOldestOrderWithLoss": false,
                    "bagHolderLimit": 0},
                {"name": "BTC-EUR",
                    "active": true,
                    "separator": "-",
                    "digitsPrice": 2,
                    "digitsSize": 8,
                    "buySize": 0,
                    "buyForAmount": 20,
                    "ignoreOrderSize": 0.0,
                    "pipsAskBidSpread": 100,
                    "percentageProfitTarget": 0.12,
                    "pipsBuySpread": 100,
                    "sellOldestOrderWithLoss": false,
                    "bagHolderLimit": 0}
            ]
        },
        {"name": "coinmate",
            "url": "https://coinmate.io",
            "active": true,
            "debug": true,
            "privateKey": "",
            "publicKey": "",
            "clientId": "",
            "sleepPause": 650,
            "stickToBigOrders": false,
            "accounts": [{"name":"BTC"},{"name":"CZK"}],
            "pairs": [
                {"name": "BTC_CZK",
                    "active": true,
                    "separator": "_",
                    "digitsPrice": 2,
                    "digitsSize": 4,
                    "buySize": 0,
                    "buyForAmount": 50,
                    "ignoreOrderSize": 0.0001,
                    "pipsAskBidSpread": 2500,
                    "percentageProfitTarget": 0.5,
                    "pipsBuySpread": 10000,
                    "sellOldestOrderWithLoss": false,
                    "bagHolderLimit": 0},
                {"name": "BTC_EUR",
                    "active": true,
                    "separator": "_",
                    "digitsPrice": 2,
                    "digitsSize": 4,
                    "buySize": 0,
                    "buyForAmount": 5,
                    "ignoreOrderSize": 0.0001,
                    "pipsAskBidSpread": 100,
                    "percentageProfitTarget": 0.5,
                    "pipsBuySpread": 500,
                    "sellOldestOrderWithLoss": false,
                    "bagHolderLimit": 0}
            ]
        }
    ]};
module.exports = config;
