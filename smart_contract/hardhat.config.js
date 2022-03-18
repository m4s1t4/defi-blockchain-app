require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.4",
    networks: {
        rinkeby: {
            url: "https://eth-rinkeby.alchemyapi.io/v2/1lx1nm5naxcZIGAi5-OTRGHosWmU3qL0",
            accounts: ["e347bad3022f98dd03b4c91191540cb0391a0757bea2aea93e8ede1bb2a70f1c"]
        },
    },

};
