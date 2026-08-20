// ==================== IDIOMAS ====================
let currentLang = "es";

const translations = {
    es: {
        // Navbar
        navWeb: "Web",
        navProduct: "Producto",
        navPricing: "Precios",
        navVerify: "Verificar",
        navDocs: "Docs",
        navContact: "Contacto",
        navEarly: "Early Access",
        navDeposit: "Depósito",
        navDemo: "Demo",
        navFaq: "FAQ",
        navVerifyBtn: "Verificar",
        navIntegrateBtn: "Integrar",
        
        // Hero
        heroBadge: "🚀 Lanzamiento oficial",
        heroTitle1: "Verificación humana",
        heroTitle2: "en la blockchain",
        heroDesc: "Protege tus airdrops, DAOs y juegos de bots y sybils.<br>Una API sencilla que cualquier proyecto Web3 puede integrar.",
        heroBtnVerify: "Verificarme ahora",
        heroBtnPricing: "Ver precios",
        
        // Stats
        stat1Label: "por consulta",
        stat2Label: "consultas gratis",
        stat3Label: "wallets protegidas",
        
        // Producto
        productTag: "¿Cómo funciona?",
        productTitle1: "Integración en",
        productTitle2: "3 líneas de código",
        productDesc: "Tu proyecto puede empezar a filtrar bots en menos de 5 minutos.",
        step1Title: "Conecta tu wallet",
        step1Desc: "El usuario conecta MetaMask y solicita verificación.",
        step2Title: "Verifica su humanidad",
        step2Desc: "Validación automática con Cloudflare + blockchain.",
        step3Title: "Consulta el estado",
        step3Desc: "Tu contrato llama a checkHuman(wallet) y obtiene true/false.",
        
        // Código
        codeTitle: "📝 Integración en tu contrato (versión de pago)",
        copyBtn: "Copiar",
        
        // Precios
        pricingTag: "Precios transparentes",
        pricingTitle1: "Planes para",
        pricingTitle2: "todo tipo de proyecto",
        pricingDesc: "Paga solo por lo que usas. Sin compromisos.",
        freeBadge: "Freemium",
        freePeriod: "/mes",
        freeFeat1: "1,000 consultas gratis",
        freeFeat2: "Polygon Amoy (testnet)",
        freeFeat3: "Soporte por email",
        freeFeat4: "Documentación completa",
        freeFeat5: "Pasa a pago cuando quieras",
        freeBtn: "Comenzar gratis",
        polygonBadge: "⭐ RECOMENDADO",
        polygonPeriod: "por consulta",
        polygonFeat1: "Pago por uso real ($0.05/consulta)",
        polygonFeat2: "🟣 Polygon Mainnet | 🟡 BNB Chain",
        polygonFeat3: "Gas muy bajo para tus usuarios",
        polygonFeat4: "Soporte prioritario 24/7",
        polygonFeat5: "Dashboard de uso y facturación",
        polygonBtn: "Ver documentación",
        ethBadge: "⚪ ETHEREUM",
        ethPeriod: "por consulta",
        ethFeat1: "Pago por uso real ($0.10/consulta)",
        ethFeat2: "⚪ Ethereum Mainnet",
        ethFeat3: "Máxima seguridad y descentralización",
        ethFeat4: "Ideal para proyectos institucionales",
        ethFeat5: "Soporte prioritario 24/7",
        ethBtn: "Ver documentación",
        enterpriseBadge: "🏢 EMPRESARIAL",
        enterprisePeriod: "/mes",
        enterpriseFeat1: "Hasta 10,000 consultas/mes",
        enterpriseFeat2: "Soporte 24/7 con SLA",
        enterpriseFeat3: "Múltiples redes (Polygon, BNB, Ethereum)",
        enterpriseFeat4: "Dashboard personalizado",
        enterpriseFeat5: "Volúmenes superiores: consúltanos",
        enterpriseBtn: "Contactar ventas",
        
        // Verificación
        verifyTag: "🧠 Verificación humana real",
        verifyTitle1: "Demuestra que eres",
        verifyTitle2: "humano ahora mismo",
        verifyDesc: "Verificación automática con Cloudflare + Blockchain. Sin CAPTCHAs molestos.",
        verifyCardTitle: "Verificación automática",
        verifyCardDesc: "Tu wallet quedará marcada como humana en la blockchain para siempre.",
        connectBtn: "🔌 Conectar Wallet",
        walletLabel: "Wallet",
        statusChecking: "❓ Verificando...",
        checkWallet: "Conectar wallet",
        checkTurnstile: "Verificación anti-bot (Cloudflare)",
        checkPassport: "Verificar actividad (Gitcoin Passport)",
        checkBlockchain: "Registrar en blockchain",
        
        // Footer
        footerDesc: "Verificación humana descentralizada",
        footerProduct: "Producto",
        footerHowItWorks: "Cómo funciona",
        footerPricing: "Precios",
        footerVerify: "Verificar",
        footerFaq: "Preguntas frecuentes",
        footerDevs: "Desarrolladores",
        footerDocs: "Documentación",
        footerDemo: "Demo Testnet",
        footerEarly: "Early Access",
        footerDeposit: "Depósito USDC",
        footerContract: "Contrato inteligente",
        footerResources: "Recursos",
        footerPolygon: "Polygon",
        footerBNB: "BNB Chain",
        footerEthereum: "Ethereum",
        footerPassport: "Gitcoin Passport",
        footerTurnstile: "Cloudflare Turnstile",
        footerLegal: "Legal",
        footerTerms: "Términos de servicio",
        footerPrivacy: "Política de privacidad",
        footerCookies: "Política de cookies",
        footerGDPR: "GDPR / RGPD",
        footerContact: "Contacto",
        footerSupport: "Soporte técnico",
        footerPartners: "Asóciate con nosotros",
        footerSocial: "Redes Sociales",
        footerTwitter: "Twitter",
        footerGitHub: "GitHub",
        footerDiscord: "Discord",
        footerTelegram: "Telegram",
        footerCopyright: "© 2026 Humanhood. Todos los derechos reservados.",
        
        // FAQ
        faqTag: "Preguntas frecuentes",
        faqTitle1: "Resolvemos tus",
        faqTitle2: "dudas",
        faq1Q: "¿Cómo integro Humanhood en mi proyecto?",
        faq1A: "Añade 3 líneas de código a tu contrato inteligente. La documentación completa está disponible.",
        faq2Q: "¿La verificación cuesta dinero?",
        faq2A: "No. La verificación inicial solo paga el gas (muy bajo). El proyecto paga $0.05 por consulta.",
        faq3Q: "¿Cómo cambio mi MetaMask a Amoy?",
        faq3A: "Haz clic en el botón dentro de la demo. MetaMask lo añadirá automáticamente.",
        faq4Q: "¿Cuánto cuesta en producción?",
        faq4A: "$0.05 por consulta en Polygon Mainnet o BNB Chain. $0.10 en Ethereum Mainnet.",
        
        // Mensajes
        successMsg: "✅ Mensaje enviado correctamente. Te responderemos pronto.",
        errorMsg: "❌ Error al enviar. Inténtalo de nuevo.",
        
        // Docs específicos
        docsTitle: "Documentación de Integración",
        docsSubtitle: "API de verificación humana para proyectos Web3. Prevén bots y sybils en tus airdrops, DAOs y juegos.",
        freeBadge: "📡 PRUEBA GRATIS - 1,000 CONSULTAS",
        testContractTitle: "Contrato de Prueba (Testnet)",
        polygonAmoy: "Polygon Amoy (Testnet)",
        chainId: "Chain ID: 80002",
        faucetLabel: "Faucet para POL (gas):",
        faucetLink: "faucet.polygon.technology",
        productionBadge: "🌍 PRODUCCIÓN - MÚLTIPLES REDES",
        productionTitle: "Contratos de Producción (Mainnets)",
        productionDesc: "Elige la red que mejor se adapte a tu proyecto.",
        tableNetwork: "Red",
        tableAddress: "Dirección del contrato",
        tablePrice: "Precio por consulta",
        recommended: "(recomendado)",
        comingSoon: "Próximamente",
        inDevelopment: "En desarrollo",
        guideBadge: "📘 GUÍA DE INTEGRACIÓN",
        guideTitle: "¿Cómo funciona Humanhood?",
        guideDesc: "Humanhood es una API de verificación humana descentralizada.",
        systemFlow: "🔄 Flujo completo del sistema",
        systemFlowText: "1. Usuario final se verifica en humanhood.tech (paga gas una vez)\n2. Su wallet queda marcada como humana en la blockchain\n3. Tu proyecto consulta checkHuman(wallet)\n4. Si es true, el usuario recibe la recompensa\n5. Tu proyecto paga $0.05 por cada consulta",
        projectToDo: "🧑‍💻 Lo que debe hacer TU PROYECTO",
        projectSteps: "1. Integrar nuestro contrato (3 líneas de código)\n2. Depositar USDC en nuestro contrato (mínimo 10 USDC)\n3. Por cada usuario, llamar a checkHuman(wallet) → cuesta $0.05",
        userToDo: "🧑‍💻 Lo que debe hacer el USUARIO FINAL",
        userSteps: "1. Conectar su wallet en humanhood.tech\n2. Hacer clic en \"Verificarme como humano\" (solo paga el gas)\n3. Su wallet queda marcada como humana para siempre ✅",
        codeIntegration: "📝 Código de integración para tu contrato",
        numbersExample: "💰 Ejemplo con números",
        numbersList: "Depositas 100 USDC → saldo en contrato: 100 USDC\nConsultas 1 wallet → saldo: 99.95 USDC (coste: $0.05)\nConsultas 2,000 wallets → saldo: 0 USDC (coste: $100)\nVuelves a depositar cuando quieras más saldo",
        summaryTitle: "✅ Resumen para tu proyecto",
        summaryList: "📌 Tus usuarios se verifican UNA SOLA VEZ en humanhood.tech\n📌 Tu proyecto paga $0.05 por cada consulta a checkHuman()\n📌 El usuario NO PAGA NADA (solo el gas una vez en su vida)\n📌 Puedes probar gratis en testnet (Polygon Amoy)",
        depositsBadge: "💰 DEPÓSITOS",
        depositsTitle: "Depositar USDC",
        depositsDesc: "Para usar nuestro servicio de pago por consulta, necesitas depositar USDC en nuestro contrato.",
        depositPageBtn: "🔗 Ir a la página de depósito",
        downloadScriptBtn: "📥 Descargar script de ejemplo",
        integrationCodeTitle: "📝 Código de integración (para tu dApp)",
        depositNote: "Nota: El depósito mínimo es de 10 USDC. Una vez depositado, cada consulta a checkHuman() descontará 0.05 USDC automáticamente.",
        faqTitle: "❓ Preguntas frecuentes",
        faq1Q: "¿Cuánto cuesta la verificación?",
        faq1A: "Prueba gratuita: 1,000 consultas gratis en testnet (Polygon Amoy).\nProducción: $0.05 en Polygon o BNB Chain, $0.10 en Ethereum.",
        faq2Q: "¿Qué red debo usar?",
        faq2A: "Pruebas: Polygon Amoy (testnet).\nProducción: Polygon Mainnet (recomendado por bajo coste), BNB Chain o Ethereum.",
        faq3Q: "¿Qué dirección me pide Humanhood?",
        faq3A: "La dirección de tu contrato o wallet desde la que llamas a checkHuman().",
        faq4Q: "¿Necesito backend para integrarme?",
        faq4A: "No. Todo es mediante contratos inteligentes. Tu proyecto llama directamente a nuestra función checkHuman().",
        faq5Q: "¿Cómo deposito USDC?",
        faq5A: "Tienes dos opciones: usar nuestra página de depósito (sin programar) o integrar el script de ejemplo en tu dApp.",
        supportTitle: "🆘 ¿Necesitas ayuda?",
        supportDesc: "Contacta con nosotros en info@humanhood.tech y te ayudaremos con la integración."
    },
    en: {
        // Navbar
        navWeb: "Web",
        navProduct: "Product",
        navPricing: "Pricing",
        navVerify: "Verify",
        navDocs: "Docs",
        navContact: "Contact",
        navEarly: "Early Access",
        navDeposit: "Deposit",
        navDemo: "Demo",
        navFaq: "FAQ",
        navVerifyBtn: "Verify",
        navIntegrateBtn: "Integrate",
        
        // Hero
        heroBadge: "🚀 Official Launch",
        heroTitle1: "Human verification",
        heroTitle2: "on the blockchain",
        heroDesc: "Protect your airdrops, DAOs, and games from bots and sybils.<br>A simple API that any Web3 project can integrate.",
        heroBtnVerify: "Verify me now",
        heroBtnPricing: "View pricing",
        
        // Stats
        stat1Label: "per query",
        stat2Label: "free queries",
        stat3Label: "wallets protected",
        
        // Product
        productTag: "How it works?",
        productTitle1: "Integration in",
        productTitle2: "3 lines of code",
        productDesc: "Your project can start filtering bots in less than 5 minutes.",
        step1Title: "Connect your wallet",
        step1Desc: "User connects MetaMask and requests verification.",
        step2Title: "Verify humanity",
        step2Desc: "Automatic verification with Cloudflare + blockchain.",
        step3Title: "Check status",
        step3Desc: "Your contract calls checkHuman(wallet) and gets true/false.",
        
        // Code
        codeTitle: "📝 Integration in your contract (paid version)",
        copyBtn: "Copy",
        
        // Pricing
        pricingTag: "Transparent pricing",
        pricingTitle1: "Plans for",
        pricingTitle2: "every type of project",
        pricingDesc: "Pay only for what you use. No commitments.",
        freeBadge: "Freemium",
        freePeriod: "/month",
        freeFeat1: "1,000 free queries",
        freeFeat2: "Polygon Amoy (testnet)",
        freeFeat3: "Email support",
        freeFeat4: "Full documentation",
        freeFeat5: "Switch to paid when ready",
        freeBtn: "Start free",
        polygonBadge: "⭐ RECOMMENDED",
        polygonPeriod: "per query",
        polygonFeat1: "Pay-per-use ($0.05/query)",
        polygonFeat2: "🟣 Polygon Mainnet | 🟡 BNB Chain",
        polygonFeat3: "Very low gas for your users",
        polygonFeat4: "24/7 priority support",
        polygonFeat5: "Usage dashboard and billing",
        polygonBtn: "View documentation",
        ethBadge: "⚪ ETHEREUM",
        ethPeriod: "per query",
        ethFeat1: "Pay-per-use ($0.10/query)",
        ethFeat2: "⚪ Ethereum Mainnet",
        ethFeat3: "Maximum security and decentralization",
        ethFeat4: "Ideal for institutional projects",
        ethFeat5: "24/7 priority support",
        ethBtn: "View documentation",
        enterpriseBadge: "🏢 ENTERPRISE",
        enterprisePeriod: "/month",
        enterpriseFeat1: "Up to 10,000 queries/month",
        enterpriseFeat2: "24/7 support with SLA",
        enterpriseFeat3: "Multiple networks (Polygon, BNB, Ethereum)",
        enterpriseFeat4: "Custom dashboard",
        enterpriseFeat5: "Higher volumes: contact us",
        enterpriseBtn: "Contact sales",
        
        // Verification
        verifyTag: "🧠 Real human verification",
        verifyTitle1: "Prove that you are",
        verifyTitle2: "human right now",
        verifyDesc: "Automatic verification with Cloudflare + Blockchain. No annoying CAPTCHAs.",
        verifyCardTitle: "Automatic verification",
        verifyCardDesc: "Your wallet will be marked as human on the blockchain forever.",
        connectBtn: "🔌 Connect Wallet",
        walletLabel: "Wallet",
        statusChecking: "❓ Checking...",
        checkWallet: "Connect wallet",
        checkTurnstile: "Anti-bot verification (Cloudflare)",
        checkPassport: "Verify activity (Gitcoin Passport)",
        checkBlockchain: "Register on blockchain",
        
        // Footer
        footerDesc: "Decentralized human verification",
        footerProduct: "Product",
        footerHowItWorks: "How it works",
        footerPricing: "Pricing",
        footerVerify: "Verify",
        footerFaq: "FAQ",
        footerDevs: "Developers",
        footerDocs: "Documentation",
        footerDemo: "Testnet Demo",
        footerEarly: "Early Access",
        footerDeposit: "USDC Deposit",
        footerContract: "Smart Contract",
        footerResources: "Resources",
        footerPolygon: "Polygon",
        footerBNB: "BNB Chain",
        footerEthereum: "Ethereum",
        footerPassport: "Gitcoin Passport",
        footerTurnstile: "Cloudflare Turnstile",
        footerLegal: "Legal",
        footerTerms: "Terms of service",
        footerPrivacy: "Privacy policy",
        footerCookies: "Cookie policy",
        footerGDPR: "GDPR",
        footerContact: "Contact",
        footerSupport: "Technical support",
        footerPartners: "Partner with us",
        footerSocial: "Social Media",
        footerTwitter: "Twitter",
        footerGitHub: "GitHub",
        footerDiscord: "Discord",
        footerTelegram: "Telegram",
        footerCopyright: "© 2026 Humanhood. All rights reserved.",
        
        // FAQ
        faqTag: "Frequently Asked Questions",
        faqTitle1: "Get your",
        faqTitle2: "questions answered",
        faq1Q: "How do I integrate Humanhood into my project?",
        faq1A: "Add 3 lines of code to your smart contract. Full documentation is available.",
        faq2Q: "Does verification cost money?",
        faq2A: "No. Initial verification only pays gas (very low). The project pays $0.05 per query.",
        faq3Q: "How do I switch MetaMask to Amoy?",
        faq3A: "Click the 'Switch to Polygon Amoy' button inside the demo. MetaMask will add it automatically.",
        faq4Q: "How much does production cost?",
        faq4A: "$0.05 per query on Polygon Mainnet or BNB Chain. $0.10 on Ethereum Mainnet.",
        
        // Messages
        successMsg: "✅ Message sent successfully. We will reply soon.",
        errorMsg: "❌ Error sending message. Please try again.",
        
        // Docs
        docsTitle: "Integration Documentation",
        docsSubtitle: "Human verification API for Web3 projects. Prevent bots and sybils in your airdrops, DAOs, and games.",
        freeBadge: "📡 FREE TRIAL - 1,000 QUERIES",
        testContractTitle: "Test Contract (Testnet)",
        polygonAmoy: "Polygon Amoy (Testnet)",
        chainId: "Chain ID: 80002",
        faucetLabel: "Faucet for POL (gas):",
        faucetLink: "faucet.polygon.technology",
        productionBadge: "🌍 PRODUCTION - MULTIPLE NETWORKS",
        productionTitle: "Production Contracts (Mainnets)",
        productionDesc: "Choose the network that best suits your project.",
        tableNetwork: "Network",
        tableAddress: "Contract Address",
        tablePrice: "Price per query",
        recommended: "(recommended)",
        comingSoon: "Coming soon",
        inDevelopment: "In development",
        guideBadge: "📘 INTEGRATION GUIDE",
        guideTitle: "How does Humanhood work?",
        guideDesc: "Humanhood is a decentralized human verification API.",
        systemFlow: "🔄 Complete system flow",
        systemFlowText: "1. End user verifies at humanhood.tech (pays gas once)\n2. Their wallet is marked as human on the blockchain\n3. Your project queries checkHuman(wallet)\n4. If true, the user receives the reward\n5. Your project pays $0.05 per query",
        projectToDo: "🧑‍💻 What YOUR PROJECT must do",
        projectSteps: "1. Integrate our contract (3 lines of code)\n2. Deposit USDC into our contract (minimum 10 USDC)\n3. For each user, call checkHuman(wallet) → costs $0.05",
        userToDo: "🧑‍💻 What the END USER must do",
        userSteps: "1. Connect their wallet at humanhood.tech\n2. Click \"Verify me as human\" (only pays gas)\n3. Their wallet is marked as human forever ✅",
        codeIntegration: "📝 Integration code for your contract",
        numbersExample: "💰 Example with numbers",
        numbersList: "Deposit 100 USDC → contract balance: 100 USDC\nQuery 1 wallet → balance: 99.95 USDC (cost: $0.05)\nQuery 2,000 wallets → balance: 0 USDC (cost: $100)\nDeposit again whenever you need more balance",
        summaryTitle: "✅ Summary for your project",
        summaryList: "📌 Your users verify ONCE at humanhood.tech\n📌 Your project pays $0.05 per checkHuman() query\n📌 The user pays NOTHING (only gas once in their lifetime)\n📌 You can test for free on testnet (Polygon Amoy)",
        depositsBadge: "💰 DEPOSITS",
        depositsTitle: "Deposit USDC",
        depositsDesc: "To use our pay-per-query service, you need to deposit USDC into our contract.",
        depositPageBtn: "🔗 Go to deposit page",
        downloadScriptBtn: "📥 Download example script",
        integrationCodeTitle: "📝 Integration code (for your dApp)",
        depositNote: "Note: The minimum deposit is 10 USDC. Once deposited, each checkHuman() query will automatically deduct 0.05 USDC.",
        faqTitle: "❓ Frequently Asked Questions",
        faq1Q: "How much does verification cost?",
        faq1A: "Free trial: 1,000 free queries on testnet (Polygon Amoy).\nProduction: $0.05 on Polygon or BNB Chain, $0.10 on Ethereum.",
        faq2Q: "Which network should I use?",
        faq2A: "Testing: Polygon Amoy (testnet).\nProduction: Polygon Mainnet (recommended for low cost), BNB Chain or Ethereum.",
        faq3Q: "What address does Humanhood ask for?",
        faq3A: "The address of your contract or wallet from which you call checkHuman().",
        faq4Q: "Do I need a backend to integrate?",
        faq4A: "No. Everything is through smart contracts. Your project directly calls our checkHuman() function.",
        faq5Q: "How do I deposit USDC?",
        faq5A: "You have two options: use our deposit page (no coding) or integrate the example script into your dApp.",
        supportTitle: "🆘 Need help?",
        supportDesc: "Contact us at info@humanhood.tech and we'll help you with the integration."
    }
};

// ==================== RATE LIMIT (24 HORAS) ====================
const VERIFY_COOLDOWN = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

function checkRateLimit(address) {
    const key = `humanhood_last_verify_${address}`;
    const lastVerify = localStorage.getItem(key);
    
    if (lastVerify) {
        const timeSince = Date.now() - parseInt(lastVerify);
        if (timeSince < VERIFY_COOLDOWN) {
            const hoursLeft = Math.ceil((VERIFY_COOLDOWN - timeSince) / (60 * 60 * 1000));
            return { allowed: false, hoursLeft };
        }
    }
    return { allowed: true, hoursLeft: 0 };
}

function setRateLimit(address) {
    const key = `humanhood_last_verify_${address}`;
    localStorage.setItem(key, Date.now().toString());
}

function getRateLimitMessage(hoursLeft) {
    if (currentLang === 'es') {
        if (hoursLeft === 1) {
            return `⏳ Solo puedes verificar una vez cada 24 horas. Espera 1 hora.`;
        }
        return `⏳ Solo puedes verificar una vez cada 24 horas. Espera ${hoursLeft} horas.`;
    } else {
        if (hoursLeft === 1) {
            return `⏳ You can only verify once every 24 hours. Wait 1 hour.`;
        }
        return `⏳ You can only verify once every 24 hours. Wait ${hoursLeft} hours.`;
    }
}

// ==================== ANTIGÜEDAD DE WALLET ====================
async function checkWalletAge(address, network = 'polygon') {
    try {
        const response = await fetch(`/.netlify/functions/get-wallet-age?address=${address}&network=${network}`);
        const data = await response.json();
        
        if (data.hasActivity && data.ageDays !== null) {
            return { 
                valid: true, 
                ageDays: data.ageDays,
                firstTxDate: data.firstTxDate
            };
        }
        return { valid: false, ageDays: 0 };
    } catch (error) {
        console.error("Error checking wallet age:", error);
        return { valid: false, ageDays: 0 };
    }
}

function getWalletAgeMessage(ageDays, firstTxDate) {
    if (currentLang === 'es') {
        if (ageDays >= 365) {
            return `✅ Wallet con ${Math.floor(ageDays / 365)} años de antigüedad (desde ${firstTxDate})`;
        } else if (ageDays >= 180) {
            return `✅ Wallet con ${Math.floor(ageDays / 30)} meses de antigüedad (desde ${firstTxDate})`;
        } else if (ageDays >= 30) {
            return `✅ Wallet con ${ageDays} días de antigüedad (desde ${firstTxDate})`;
        } else if (ageDays >= 7) {
            return `✅ Wallet con ${ageDays} días de antigüedad (desde ${firstTxDate})`;
        } else if (ageDays > 0) {
            return `🟡 Wallet nueva (${ageDays} días). La confianza aumenta con el tiempo.`;
        }
        return `🟡 Wallet muy nueva. La confianza aumenta con el tiempo.`;
    } else {
        if (ageDays >= 365) {
            return `✅ Wallet with ${Math.floor(ageDays / 365)} years of history (since ${firstTxDate})`;
        } else if (ageDays >= 180) {
            return `✅ Wallet with ${Math.floor(ageDays / 30)} months of history (since ${firstTxDate})`;
        } else if (ageDays >= 30) {
            return `✅ Wallet with ${ageDays} days of history (since ${firstTxDate})`;
        } else if (ageDays >= 7) {
            return `✅ Wallet with ${ageDays} days of history (since ${firstTxDate})`;
        } else if (ageDays > 0) {
            return `🟡 New wallet (${ageDays} days). Trust increases over time.`;
        }
        return `🟡 Very new wallet. Trust increases over time.`;
    }
}

// ==================== FUNCIÓN APPLYLANGUAGE ====================
function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('humanhood_lang', lang);
    
    // Selecciona TODOS los elementos que tengan CUALQUIER clase que contenga 'i18n-'
    const allElements = document.querySelectorAll('[class*="i18n-"]');
    
    allElements.forEach(el => {
        const classes = el.className.split(' ');
        const i18nClass = classes.find(c => c.startsWith('i18n-'));
        
        if (i18nClass) {
            const key = i18nClass.replace('i18n-', '');
            if (translations[lang] && translations[lang][key] !== undefined) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else if (el.tagName === 'BUTTON') {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        }
    });
    
    // Cambiar el código de ejemplo según el idioma
    const codeElement = document.getElementById('codeToCopy');
    if (codeElement) {
        if (lang === 'es') {
            codeElement.innerText = `interface IHumanhood {
    function checkHuman(address user) external view returns (bool);
}
// Direcciones del contrato por red:
// Polygon Mainnet: 0x2A7396876a13812fEFc5773094f217d5380FEeB9
// BNB Chain:      0xeCB6D54ac87D99b104535f95d5c38Bf48F2CCf4b

require(
    IHumanhood(0x2A7396876a13812fEFc5773094f217d5380FEeB9).checkHuman(msg.sender),
    "No verificado como humano"
);`;
        } else {
            codeElement.innerText = `interface IHumanhood {
    function checkHuman(address user) external view returns (bool);
}
// Contract addresses by network:
// Polygon Mainnet: 0x2A7396876a13812fEFc5773094f217d5380FEeB9
// BNB Chain:      0xeCB6D54ac87D99b104535f95d5c38Bf48F2CCf4b

require(
    IHumanhood(0x2A7396876a13812fEFc5773094f217d5380FEeB9).checkHuman(msg.sender),
    "Not verified as human"
);`;
        }
    }
}

// ==================== INICIALIZACIÓN ====================
const savedLang = localStorage.getItem('humanhood_lang') || (navigator.language.startsWith('es') ? 'es' : 'en');
if(document.getElementById('languageSelect')) {
    document.getElementById('languageSelect').value = savedLang;
    document.getElementById('languageSelect').addEventListener('change', (e) => applyLanguage(e.target.value));
}
applyLanguage(savedLang);

function copyCode() {
    const codeElement = document.getElementById('codeToCopy');
    if (codeElement) {
        navigator.clipboard.writeText(codeElement.innerText);
        alert(currentLang === 'es' ? "Código copiado" : "Code copied");
    }
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
            
            // Mostrar antigüedad de la wallet
            const walletAge = await checkWalletAge(verifyUserAddress, 'polygon');
            if (walletAge.valid && walletAge.ageDays > 0) {
                const ageMessage = getWalletAgeMessage(walletAge.ageDays, walletAge.firstTxDate);
                showVerifyStatus(ageMessage, "success");
                setTimeout(() => {
                    if (verifyStatusDiv.textContent === ageMessage) {
                        verifyStatusDiv.classList.add('hidden');
                    }
                }, 5000);
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
                
                // Guardar rate limit
                setRateLimit(verifyUserAddress);
                
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

async function checkGitcoinPassportVerify() {
    if (!verifyUserAddress) {
        showVerifyStatus(currentLang === 'es' ? "Wallet no conectada" : "Wallet not connected", "error");
        return;
    }

    updateVerifyChecklist('passport', 'active');
    showVerifyStatus(currentLang === 'es' ? "🌍 Verificando actividad humana en Gitcoin Passport..." : "🌍 Verifying human activity on Gitcoin Passport...", "loading");

    try {
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
    // ==================== VERIFICAR RATE LIMIT ====================
    const rateLimit = checkRateLimit(verifyUserAddress);
    if (!rateLimit.allowed) {
        showVerifyStatus(getRateLimitMessage(rateLimit.hoursLeft), "error");
        return;
    }
    
    updateVerifyChecklist('blockchain', 'active');
    showVerifyStatus(currentLang === 'es' ? "⛓️ Registrando verificación en la blockchain..." : "⛓️ Registering verification on the blockchain...", "loading");
    
    try {
        const tx = await verifyContract.verifyMe();
        await tx.wait();
        
        // ==================== GUARDAR RATE LIMIT ====================
        setRateLimit(verifyUserAddress);
        
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

// ==================== MENÚ HAMBURGUESA ====================
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

document.querySelectorAll('.mobile-menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('open')) {
        if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            mobileMenu.classList.remove('open');
        }
    }
});