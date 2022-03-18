const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const transactionFactory = await hre.ethers.getContractFactory('Transactions')
    const transactionContract = await transactionFactory.deploy();
    await transactionContract.deployed(); 

    console.log('Transaction contrac deployed to:', transactionContract.address);
    console.log('transaction contract deployed by:', owner.address);
    
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
