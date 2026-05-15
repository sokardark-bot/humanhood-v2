// Configuración del contrato (Free en Amoy para la demo)
const CONTRACT_ADDRESS = "0xD9f766cCbE8EBb138925D22cEA589B1c5faEdEf8";

const CONTRACT_ABI = [
    "function checkHuman(address) view returns (bool)",
    "function verifyMe() external",
    "event Verified(address indexed user)"
];

let provider;
let signer;
let contract;
let userAddress = null;

// Elementos del DOM
const connectBtn = document.getElementById("connectWallet");
const walletInfo = document.getElementById("walletInfo");
const walletAddressSpan = document.getElementById("walletAddress");
const humanStatusSpan = document.getElementById("humanStatus");
const verificationSection = document.getElementById("verificationSection");
const verifyBtn = document.getElementById("verifyButton");
const statusText = document.getElementById("statusText");
const loadingMsg = document.getElementById("loadingMessage");

// Conectar wallet
connectBtn.onclick = async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userAddress = accounts[0];
            walletAddressSpan.textContent = userAddress.slice(0, 6) + "..." + userAddress.slice(-4);
            walletInfo.classList.remove("hidden");
            connectBtn.textContent = "✅ Conectado";
            connectBtn.disabled = true;
            
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
            
            await checkHumanStatus();
            verificationSection.classList.remove("hidden");
        } catch (error) {
            console.error("Error conectando:", error);
            alert("Error al conectar la wallet");
        }
    } else {
        alert("Por favor, instala MetaMask para usar esta aplicación");
        window.open("https://metamask.io/download/", "_blank");
    }
};

// Verificar estado
async function checkHumanStatus() {
    if (!contract || !userAddress) return;
    
    try {
        const isHuman = await contract.checkHuman(userAddress);
        if (isHuman) {
            humanStatusSpan.textContent = "✅ Verificado";
            humanStatusSpan.className = "status-badge verified";
            statusText.textContent = "✅ Eres humano verificado";
            statusText.className = "status-text verified";
            verifyBtn.disabled = true;
            verifyBtn.textContent = "✓ Ya verificado";
        } else {
            humanStatusSpan.textContent = "❌ No verificado";
            humanStatusSpan.className = "status-badge not-verified";
            statusText.textContent = "❌ No verificado";
            statusText.className = "status-text not-verified";
            verifyBtn.disabled = false;
            verifyBtn.textContent = "✅ Verificarme como humano";
        }
    } catch (error) {
        console.error("Error verificando estado:", error);
        humanStatusSpan.textContent = "⚠️ Error";
        statusText.textContent = "Error al conectar con el contrato";
    }
}

// Verificarse como humano
verifyBtn.onclick = async () => {
    if (!contract || !userAddress) return;
    
    try {
        loadingMsg.classList.remove("hidden");
        verifyBtn.disabled = true;
        verifyBtn.textContent = "⏳ Procesando...";
        
        const tx = await contract.verifyMe();
        await tx.wait();
        
        await checkHumanStatus();
        alert("✅ ¡Verificación exitosa! Ya eres humano en la blockchain.");
    } catch (error) {
        console.error("Error en verificación:", error);
        alert("Error al verificar: " + (error.message || "Intenta de nuevo"));
        verifyBtn.disabled = false;
        verifyBtn.textContent = "✅ Verificarme como humano";
    } finally {
        loadingMsg.classList.add("hidden");
    }
};

// Escuchar cambios de cuenta
if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
            location.reload();
        } else {
            userAddress = accounts[0];
            walletAddressSpan.textContent = userAddress.slice(0, 6) + "..." + userAddress.slice(-4);
            checkHumanStatus();
        }
    });
}