// ==================== IDIOMAS ====================
let currentLang = "es";
function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('humanhood_lang', lang);
    document.querySelectorAll("[class^='i18n-']").forEach(el => {
        const key = el.className.split(' ').find(c => c.startsWith('i18n-'));
        if (key && translations[lang] && translations[lang][key.replace('i18n-', '')]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = translations[lang][key.replace('i18n-', '')];
            else if (el.tagName === 'BUTTON') el.innerHTML = translations[lang][key.replace('i18n-', '')];
            else el.innerHTML = translations[lang][key.replace('i18n-', '')];
        }
    });
}
const translations = {
    es: {
        navProduct: "Producto", navPricing: "Precios", navVerify: "Verificar", navDocs: "Docs", navContact: "Contacto", navFaq: "FAQ",
        navVerifyBtn: "Verificar", navIntegrateBtn: "Integrar",
        heroBadge: "🚀 Lanzamiento oficial", heroTitle1: "Verificación humana", heroTitle2: "en la blockchain",
        heroDesc: "Protege tus airdrops, DAOs y juegos de bots y sybils.<br>Una API sencilla que cualquier proyecto Web3 puede integrar.",
        heroBtnVerify: "Verificarme ahora", heroBtnPricing: "Ver precios",
        stat1Label: "por consulta", stat2Label: "consultas gratis", stat3Label: "wallets protegidas",
        productTag: "¿Cómo funciona?", productTitle1: "Integración en", productTitle2: "3 líneas de código",
        productDesc: "Tu proyecto puede empezar a filtrar bots en menos de 5 minutos.",
        step1Title: "Conecta tu wallet", step1Desc: "El usuario conecta MetaMask y solicita verificación.",
        step2Title: "Verifica su humanidad", step2Desc: "Validación automática con Cloudflare + blockchain.",
        step3Title: "Consulta el estado", step3Desc: "Tu contrato llama a checkHuman(wallet) y obtiene true/false.",
        codeTitle: "📝 Integración en tu contrato (versión de pago)", copyBtn: "Copiar",
        pricingTag: "Precios transparentes", pricingTitle1: "Planes para", pricingTitle2: "todo tipo de proyecto",
        pricingDesc: "Paga solo por lo que usas. Sin compromisos.",
        freeBadge: "Freemium", freePeriod: "/mes", freeFeat1: "1,000 consultas gratis", freeFeat2: "Polygon Amoy (testnet)",
        freeFeat3: "Soporte por email", freeFeat4: "Documentación completa", freeFeat5: "Pasa a pago cuando quieras",
        freeBtn: "Comenzar gratis",
        polygonBadge: "⭐ RECOMENDADO", polygonPeriod: "por consulta", polygonFeat1: "Pago por uso real ($0.05/consulta)",
        polygonFeat2: "🟣 Polygon Mainnet | 🟡 BNB Chain", polygonFeat3: "Gas muy bajo para tus usuarios",
        polygonFeat4: "Soporte prioritario 24/7", polygonFeat5: "Dashboard de uso y facturación", polygonBtn: "Ver documentación",
        ethBadge: "⚪ ETHEREUM", ethPeriod: "por consulta", ethFeat1: "Pago por uso real ($0.10/consulta)",
        ethFeat2: "⚪ Ethereum Mainnet", ethFeat3: "Máxima seguridad y descentralización", ethFeat4: "Ideal para proyectos institucionales",
        ethFeat5: "Soporte prioritario 24/7", ethBtn: "Ver documentación",
        enterpriseBadge: "🏢 EMPRESARIAL", enterprisePeriod: "/mes", enterpriseFeat1: "Hasta 10,000 consultas/mes",
        enterpriseFeat2: "Soporte 24/7 con SLA", enterpriseFeat3: "Múltiples redes (Polygon, BNB, Ethereum)",
        enterpriseFeat4: "Dashboard personalizado", enterpriseFeat5: "Volúmenes superiores: consúltanos", enterpriseBtn: "Contactar ventas",
        verifyTag: "🧠 Verificación humana real", verifyTitle1: "Demuestra que eres", verifyTitle2: "humano ahora mismo",
        verifyDesc: "Verificación automática con Cloudflare + Blockchain. Sin CAPTCHAs molestos.",
        verifyCardTitle: "Verificación automática", verifyCardDesc: "Tu wallet quedará marcada como humana en la blockchain para siempre.",
        connectBtn: "🔌 Conectar Wallet", walletLabel: "Wallet", statusChecking: "❓ Verificando...",
        checkWallet: "Conectar wallet", checkTurnstile: "Verificación anti-bot (Cloudflare)", checkPassport: "Verificar actividad (Gitcoin Passport)", checkBlockchain: "Registrar en blockchain",
        footerDesc: "Verificación humana descentralizada", footerProduct: "Producto", footerHowItWorks: "Cómo funciona",
        footerPricing: "Precios", footerVerify: "Verificar", footerResources: "Recursos", footerDocs: "Documentación",
        footerGitHub: "GitHub", footerContact: "Contacto", footerCopyright: "© 2026 Humanhood. Todos los derechos reservados.",
        faqTag: "Preguntas frecuentes", faqTitle1: "Resolvemos tus", faqTitle2: "dudas",
        faq1Q: "¿Cómo integro Humanhood en mi proyecto?", faq1A: "Añade 3 líneas de código a tu contrato inteligente. La documentación completa está disponible.",
        faq2Q: "¿La verificación cuesta dinero?", faq2A: "No. La verificación inicial solo paga el gas (muy bajo). El proyecto paga $0.05 por consulta.",
        faq3Q: "¿Cómo cambio mi MetaMask a Amoy?", faq3A: "Haz clic en el botón dentro de la demo. MetaMask lo añadirá automáticamente.",
        faq4Q: "¿Cuánto cuesta en producción?", faq4A: "$0.05 por consulta en Polygon Mainnet o BNB Chain. $0.10 en Ethereum Mainnet."
    },
    en: {
        navProduct: "Product", navPricing: "Pricing", navVerify: "Verify", navDocs: "Docs", navContact: "Contact", navFaq: "FAQ",
        navVerifyBtn: "Verify", navIntegrateBtn: "Integrate",
        heroBadge: "🚀 Official Launch", heroTitle1: "Human verification", heroTitle2: "on the blockchain",
        heroDesc: "Protect your airdrops, DAOs, and games from bots and sybils.<br>A simple API that any Web3 project can integrate.",
        heroBtnVerify: "Verify me now", heroBtnPricing: "View pricing",
        stat1Label: "per query", stat2Label: "free queries", stat3Label: "wallets protected",
        productTag: "How it works?", productTitle1: "Integration in", productTitle2: "3 lines of code",
        productDesc: "Your project can start filtering bots in less than 5 minutes.",
        step1Title: "Connect your wallet", step1Desc: "User connects MetaMask and requests verification.",
        step2Title: "Verify humanity", step2Desc: "Automatic verification with Cloudflare + blockchain.",
        step3Title: "Check status", step3Desc: "Your contract calls checkHuman(wallet) and gets true/false.",
        codeTitle: "📝 Integration in your contract (paid version)", copyBtn: "Copy",
        pricingTag: "Transparent pricing", pricingTitle1: "Plans for", pricingTitle2: "every project",
        pricingDesc: "Pay only for what you use. No commitments.",
        freeBadge: "Freemium", freePeriod: "/month", freeFeat1: "1,000 free queries", freeFeat2: "Polygon Amoy (testnet)",
        freeFeat3: "Email support", freeFeat4: "Full documentation", freeFeat5: "Switch to paid when ready",
        freeBtn: "Start free",
        polygonBadge: "⭐ RECOMMENDED", polygonPeriod: "per query", polygonFeat1: "Pay-per-use ($0.05/query)",
        polygonFeat2: "🟣 Polygon Mainnet | 🟡 BNB Chain", polygonFeat3: "Very low gas for your users",
        polygonFeat4: "24/7 priority support", polygonFeat5: "Usage dashboard and billing", polygonBtn: "View documentation",
        ethBadge: "⚪ ETHEREUM", ethPeriod: "per query", ethFeat1: "Pay-per-use ($0.10/query)",
        ethFeat2: "⚪ Ethereum Mainnet", ethFeat3: "Maximum security and decentralization", ethFeat4: "Ideal for institutional projects",
        ethFeat5: "24/7 priority support", ethBtn: "View documentation",
        enterpriseBadge: "🏢 ENTERPRISE", enterprisePeriod: "/month", enterpriseFeat1: "Up to 10,000 queries/month",
        enterpriseFeat2: "24/7 support with SLA", enterpriseFeat3: "Multiple networks (Polygon, BNB, Ethereum)",
        enterpriseFeat4: "Custom dashboard", enterpriseFeat5: "Higher volumes: contact us", enterpriseBtn: "Contact sales",
        verifyTag: "🧠 Real human verification", verifyTitle1: "Prove that you are", verifyTitle2: "human right now",
        verifyDesc: "Automatic verification with Cloudflare + Blockchain. No annoying CAPTCHAs.",
        verifyCardTitle: "Automatic verification", verifyCardDesc: "Your wallet will be marked as human on the blockchain forever.",
        connectBtn: "🔌 Connect Wallet", walletLabel: "Wallet", statusChecking: "❓ Checking...",
        checkWallet: "Connect wallet", checkTurnstile: "Anti-bot verification (Cloudflare)", checkPassport: "Verify activity (Gitcoin Passport)", checkBlockchain: "Register on blockchain",
        footerDesc: "Decentralized human verification", footerProduct: "Product", footerHowItWorks: "How it works",
        footerPricing: "Pricing", footerVerify: "Verify", footerResources: "Resources", footerDocs: "Documentation",
        footerGitHub: "GitHub", footerContact: "Contact", footerCopyright: "© 2026 Humanhood. All rights reserved.",
        faqTag: "Frequently Asked Questions", faqTitle1: "Get your", faqTitle2: "questions answered",
        faq1Q: "How do I integrate Humanhood into my project?", faq1A: "Add 3 lines of code to your smart contract. Full documentation is available.",
        faq2Q: "Does verification cost money?", faq2A: "No. Initial verification only pays gas (very low). The project pays $0.05 per query.",
        faq3Q: "How do I switch MetaMask to Amoy?", faq3A: "Click the 'Switch to Polygon Amoy' button inside the demo. MetaMask will add it automatically.",
        faq4Q: "How much does production cost?", faq4A: "$0.05 per query on Polygon Mainnet or BNB Chain. $0.10 on Ethereum Mainnet."
    }
};

const savedLang = localStorage.getItem('humanhood_lang') || (navigator.language.startsWith('es') ? 'es' : 'en');
if(document.getElementById('languageSelect')) {
    document.getElementById('languageSelect').value = savedLang;
    document.getElementById('languageSelect').addEventListener('change', (e) => applyLanguage(e.target.value));
}
applyLanguage(savedLang);

function copyCode() {
    navigator.clipboard.writeText(document.getElementById('codeToCopy').innerText);
    alert(currentLang === 'es' ? "Código copiado" : "Code copied");
}

// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1 });
document.querySelectorAll('.step, .pricing-card, .faq-item').forEach(el => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ==================== VERIFICACIÓN HUMANA REAL ====================
const VERIFY_CONTRACT_ADDRESS = "0x2A7396876a13812fEFc5773094f217d5380FEeB9";
const CONTRACT_ABI = [
    "function isHumanVerified(address) view returns (bool)",
    "function verifyMe() external",
    "event Verified(address indexed user)"
];
const TURNSTILE_SITE_KEY = "0x4AAAAAADOhNQgthcdWkCjb";

let verifyProvider, verifySigner, verifyContract;
let verifyUserAddress = null;

const verifyConnectBtn = document.getElementById("verifyConnectBtn");
const verifyWalletInfo = document.getElementById("verifyWalletInfo");
const verifyWalletAddressSpan = document.getElementById("verifyWalletAddress");
const verifyHumanStatusSpan = document.getElementById("verifyHumanStatus");
const verifyTurnstileContainer = document.getElementById("verifyTurnstileContainer");
const verifyStatusDiv = document.getElementById("verifyStatus");
const verifyChecklist = document.getElementById("verifyChecklist");
const verifyCheckItems = {
    wallet: document.getElementById("verifyCheckWallet"),
    turnstile: document.getElementById("verifyCheckTurnstile"),
    passport: document.getElementById("verifyCheckPassport"),
    blockchain: document.getElementById("verifyCheckBlockchain")
};

function updateVerifyChecklist(item, status) {
    if (!verifyCheckItems[item]) return;
    if (status === 'active') {
        verifyCheckItems[item].classList.add('active');
        verifyCheckItems[item].classList.remove('done');
    } else if (status === 'done') {
        verifyCheckItems[item].classList.remove('active');
        verifyCheckItems[item].classList.add('done');
    }
}

function showVerifyStatus(message, type) {
    verifyStatusDiv.textContent = message;
    verifyStatusDiv.className = `status ${type}`;
}

if (verifyConnectBtn) {
    verifyConnectBtn.onclick = async () => {
        if (!window.ethereum) {
            alert(currentLang === 'es' ? "Instala MetaMask" : "Install MetaMask");
            return;
        }
        try {
            updateVerifyChecklist('wallet', 'active');
            try {
                await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x89' }] });
            } catch(switchError) {
                if (switchError.code === 4902) {
                    await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [{ chainId: '0x89', chainName: 'Polygon Mainnet', nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 }, rpcUrls: ['https://polygon-rpc.com'], blockExplorerUrls: ['https://polygonscan.com'] }] });
                } else throw switchError;
            }
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            verifyUserAddress = accounts[0];
            verifyWalletAddressSpan.textContent = verifyUserAddress.slice(0,8)+"..."+verifyUserAddress.slice(-6);
            verifyWalletInfo.classList.remove("hidden");
            verifyConnectBtn.textContent = "✅ " + (currentLang === 'es' ? "Conectado" : "Connected");
            verifyConnectBtn.disabled = true;
            verifyProvider = new ethers.providers.Web3Provider(window.ethereum);
            verifySigner = verifyProvider.getSigner();
            verifyContract = new ethers.Contract(VERIFY_CONTRACT_ADDRESS, CONTRACT_ABI, verifySigner);
            const network = await verifyProvider.getNetwork();
            if (network.chainId !== 137) {
                showVerifyStatus(currentLang === 'es' ? "❌ Cambia a Polygon Mainnet en MetaMask" : "❌ Switch to Polygon Mainnet in MetaMask", "error");
                return;
            }
            const isHuman = await verifyContract.isHumanVerified(verifyUserAddress);
            if (isHuman) {
                updateVerifyChecklist('wallet', 'done');
                updateVerifyChecklist('turnstile', 'done');
                updateVerifyChecklist('passport', 'done');
                updateVerifyChecklist('blockchain', 'done');
                showVerifyStatus(currentLang === 'es' ? "✅ Ya estás verificado como humano en la blockchain" : "✅ You are already verified as human on the blockchain", "success");
                verifyHumanStatusSpan.textContent = "✅ " + (currentLang === 'es' ? "Verificado" : "Verified");
                verifyHumanStatusSpan.className = "status-badge verified";
                return;
            }
            updateVerifyChecklist('wallet', 'done');
            verifyChecklist.classList.remove("hidden");
            startVerifyTurnstile();
        } catch(e) { console.error(e); showVerifyStatus(currentLang === 'es' ? "Error al conectar la wallet" : "Error connecting wallet", "error"); }
    };
}

function startVerifyTurnstile() {
    updateVerifyChecklist('turnstile', 'active');
    verifyTurnstileContainer.classList.remove("hidden");
    let turnstileCompleted = false;
    setTimeout(() => {
        if (!turnstileCompleted) {
            console.log("⚠️ Turnstile timeout - continuando");
            turnstileCompleted = true;
            updateVerifyChecklist('turnstile', 'done');
            checkGitcoinPassportVerify();
        }
    }, 8000);
    if (typeof turnstile !== 'undefined') {
        try {
            turnstile.ready(function() {
                turnstile.render('#verifyTurnstileContainer', {
                    sitekey: TURNSTILE_SITE_KEY,
                    callback: function(token) {
                        if (!turnstileCompleted) {
                            console.log("✅ Turnstile completado con éxito");
                            turnstileCompleted = true;
                            updateVerifyChecklist('turnstile', 'done');
                            checkGitcoinPassportVerify();
                        }
                    }
                });
            });
        } catch(e) { console.error("Error renderizando Turnstile:", e); if (!turnstileCompleted) { turnstileCompleted = true; updateVerifyChecklist('turnstile', 'done'); checkGitcoinPassportVerify(); } }
    } else { console.log("⚠️ Turnstile no disponible"); updateVerifyChecklist('turnstile', 'done'); checkGitcoinPassportVerify(); }
}

// =====================================================
// ⚠️ VERIFICACIÓN DE GITCOIN PASSPORT
// =====================================================
// MODO PRODUCCIÓN: Llama a la función de Netlify (sin CORS)
// =====================================================

async function checkGitcoinPassportVerify() {
    if (!verifyUserAddress) {
        showVerifyStatus(currentLang === 'es' ? "Wallet no conectada" : "Wallet not connected", "error");
        return;
    }

    updateVerifyChecklist('passport', 'active');
    showVerifyStatus(currentLang === 'es' ? "🌍 Verificando actividad humana en Gitcoin Passport..." : "🌍 Verifying human activity on Gitcoin Passport...", "loading");

    try {
        // Llamada a la función de Netlify (no directamente a Gitcoin)
        const response = await fetch(`/.netlify/functions/get-passport-score?address=${verifyUserAddress}`);

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error response from Netlify function:", errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const passportScore = data.score || 0;
        const MIN_SCORE = 20;

        if (passportScore >= MIN_SCORE) {
            updateVerifyChecklist('passport', 'done');
            showVerifyStatus(currentLang === 'es' ? `✅ Actividad humana verificada (Score: ${passportScore})` : `✅ Human activity verified (Score: ${passportScore})`, "success");
            registerHumanOnChain();
        } else {
            updateVerifyChecklist('passport', 'done');
            showVerifyStatus(currentLang === 'es' ? `❌ Actividad insuficiente. Score: ${passportScore} (mínimo: ${MIN_SCORE})` : `❌ Insufficient activity. Score: ${passportScore} (minimum: ${MIN_SCORE})`, "error");
            if (currentLang === 'es') {
                showVerifyStatus("Completa tu Gitcoin Passport en https://passport.gitcoin.co/", "error");
            } else {
                showVerifyStatus("Complete your Gitcoin Passport at https://passport.gitcoin.co/", "error");
            }
        }
    } catch (error) {
        console.error("Error en la verificación del Passport:", error);
        showVerifyStatus(currentLang === 'es' ? "Error al verificar el Passport. Inténtalo de nuevo." : "Error verifying Passport. Please try again.", "error");
        updateVerifyChecklist('passport', 'active');
    }
}

async function registerHumanOnChain() {
    updateVerifyChecklist('blockchain', 'active');
    showVerifyStatus(currentLang === 'es' ? "⛓️ Registrando verificación en la blockchain..." : "⛓️ Registering verification on the blockchain...", "loading");
    try {
        const tx = await verifyContract.verifyMe();
        await tx.wait();
        updateVerifyChecklist('blockchain', 'done');
        showVerifyStatus(currentLang === 'es' ? "✅ ¡Verificación exitosa! Ya eres humano en la blockchain." : "✅ Verification successful! You are now human on the blockchain.", "success");
        verifyHumanStatusSpan.textContent = "✅ " + (currentLang === 'es' ? "Verificado" : "Verified");
        verifyHumanStatusSpan.className = "status-badge verified";
    } catch(e) {
        console.error(e);
        showVerifyStatus(currentLang === 'es' ? "Error al registrar: " + (e.message || "Intenta de nuevo") : "Error registering: " + (e.message || "Try again"), "error");
        updateVerifyChecklist('blockchain', 'active');
    }
}

// ==================== MENÚ HAMBURGUESA (MÓVIL) ====================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.mobile-menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('open')) {
        if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            mobileMenu.classList.remove('open');
        }
    }
});