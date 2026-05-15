// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract HumanhoodPaid {
    mapping(address => bool) public isHumanVerified;
    mapping(address => bool) public isValidator;
    
    address public owner;
    IERC20 public usdc;
    
    uint256 public constant PRECIO_POR_CONSULTA = 0.05 * 10**18;
    
    event Verified(address indexed user);
    event Consulta(address indexed proyecto, address indexed usuario, bool resultado);
    event Deposito(address indexed proyecto, uint256 cantidad);
    
    constructor(address _usdc) {
        owner = msg.sender;
        usdc = IERC20(_usdc);
        isValidator[owner] = true;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Solo owner");
        _;
    }
    
    function verifyMe() external {
        require(!isHumanVerified[msg.sender], "Ya verificado");
        isHumanVerified[msg.sender] = true;
        emit Verified(msg.sender);
    }
    
    function verifyUser(address user) external {
        require(isValidator[msg.sender], "No eres validador");
        require(!isHumanVerified[user], "Ya verificado");
        isHumanVerified[user] = true;
        emit Verified(user);
    }
    
    function depositUSDC(uint256 amount) external {
        require(usdc.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        emit Deposito(msg.sender, amount);
    }
    
    function checkHuman(address user) external returns (bool) {
        bool resultado = isHumanVerified[user];
        require(usdc.transferFrom(msg.sender, owner, PRECIO_POR_CONSULTA), "Pago fallido");
        emit Consulta(msg.sender, user, resultado);
        return resultado;
    }
    
    function withdrawUSDC(address to, uint256 amount) external onlyOwner {
        require(usdc.transfer(to, amount), "Withdraw failed");
    }
    
    function addValidator(address validator) external onlyOwner {
        isValidator[validator] = true;
    }
    
    function removeValidator(address validator) external onlyOwner {
        isValidator[validator] = false;
    }
}