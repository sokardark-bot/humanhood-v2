async function main() {
    // Accedemos a ethers a través del entorno global de Hardhat
    const [deployer] = await ethers.getSigners();
    console.log("Desplegando con:", deployer.address);

    const HumanProof = await ethers.getContractFactory("HumanProof");
    const contract = await HumanProof.deploy();

    await contract.waitForDeployment();
    console.log("Contrato desplegado en:", await contract.getAddress());
}

main().catch(console.error);