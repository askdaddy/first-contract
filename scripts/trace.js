async function main() {
    const address = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
    const Box = await ethers.getContractFactory('Box');
    const box = await Box.attach(address);

    const res = await box.retrieve();
    console.log(`${res.toString()}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
