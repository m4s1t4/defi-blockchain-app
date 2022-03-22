require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.4",
    networks: {
        rinkeby: {
            url: "PRIVATE_LINK",
            accounts: ["PRIVATE_KEY"]
        },
    },

};
