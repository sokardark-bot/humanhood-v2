// Example script to deposit USDC into Humanhood contract
// Supported networks: Polygon Mainnet and BNB Chain

// Network configuration
const NETWORKS = {
    polygon: {
        chainId: 137,
        contract: "0x2A7396876a13812fEFc5773094f217d5380FEeB9",
        usdc: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
        rpc: "https://polygon-rpc.com"
    },
    bnb: {
        chainId: 56,
        contract: "0xeCB6D54ac87D99b104535f95d5c38Bf48F2CCf4b",
        usdc: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        rpc: "https://bsc-dataseed.binance.org/"
    }
};

const CONTRACT_ABI = [
    "function depositUSDC(uint256) external",
    "function balanceOf(address) view returns (uint256)"
];

const USDC_ABI = [
    "function approve(address, uint256) returns (bool)",
    "function balanceOf(address) view returns (uint256)",
    "function decimals() view returns (uint8)"
];

/**
 * Deposit USDC into Humanhood contract
 * @param {string} networkKey - 'polygon' or 'bnb'
 * @param {number} amountUSDC - Amount in USDC (e.g., 100)
 */
async function depositUSDC(networkKey, amountUSDC) {
    const network = NETWORKS[networkKey];
    if (!network) throw new Error("Unsupported network");
    
    // Check if MetaMask is installed
    if (!window.ethereum) {
        throw new Error("MetaMask not installed");
    }
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    
    // Check network
    const currentNetwork = await provider.getNetwork();
    if (currentNetwork.chainId !== network.chainId) {
        throw new Error(`Switch to ${networkKey === 'polygon' ? 'Polygon' : 'BNB Chain'} network`);
    }
    
    const usdcContract = new ethers.Contract(network.usdc, USDC_ABI, signer);
    const humanhoodContract = new ethers.Contract(network.contract, CONTRACT_ABI, signer);
    
    const decimals = await usdcContract.decimals();
    const amountWei = ethers.utils.parseUnits(amountUSDC.toString(), decimals);
    
    // 1. Approve the contract to spend USDC
    console.log("📝 Approving USDC spend...");
    const approveTx = await usdcContract.approve(network.contract, amountWei);
    await approveTx.wait();
    console.log("✅ Approval completed");
    
    // 2. Deposit USDC into Humanhood contract
    console.log("💰 Depositing USDC...");
    const depositTx = await humanhoodContract.depositUSDC(amountWei);
    await depositTx.wait();
    console.log(`✅ Successfully deposited ${amountUSDC} USDC`);
    
    // 3. Check updated balance
    const balance = await humanhoodContract.balanceOf(await signer.getAddress());
    const balanceFormatted = Number(balance) / 10**decimals;
    console.log(`💰 New balance: ${balanceFormatted} USDC`);
}

// Usage example:
// depositUSDC("polygon", 100);