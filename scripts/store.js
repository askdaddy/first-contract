require('dotenv').config();

async function main() {
    const address = process.env.CONTRACT_ADDRESS;
    const Box = await ethers.getContractFactory('Box');
    const box = await Box.attach(address);

    const res = await box.store(76);
    console.dir(res);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
