// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract HumanhoodFree {
    mapping(address => bool) public isHumanVerified;
    mapping(address => uint256) public consultasRealizadas;
    address public owner;
    
    uint256 public constant LIMITE_FREE = 1000;
    
    event Verified(address indexed user);
    event Consulta(address indexed proyecto, address indexed usuario, bool resultado);
    event LimiteCercano(address indexed proyecto, uint256 restantes);
    
    constructor() {
        owner = msg.sender;
    }
    
    function verifyMe() external {
        require(!isHumanVerified[msg.sender], "Ya verificado");
        isHumanVerified[msg.sender] = true;
        emit Verified(msg.sender);
    }
    
    function verifyUser(address user) external {
        require(msg.sender == owner, "Solo owner");
        require(!isHumanVerified[user], "Ya verificado");
        isHumanVerified[user] = true;
        emit Verified(user);
    }
    
    function checkHuman(address user) external returns (bool) {
        uint256 consultas = consultasRealizadas[msg.sender];
        bool resultado = isHumanVerified[user];
        
        require(consultas < LIMITE_FREE, "Limite de consultas gratis alcanzado. Contacta con ventas.");
        
        consultasRealizadas[msg.sender] = consultas + 1;
        
        uint256 restantes = LIMITE_FREE - (consultas + 1);
        if (restantes < 100 && restantes > 0) {
            emit LimiteCercano(msg.sender, restantes);
        }
        
        emit Consulta(msg.sender, user, resultado);
        return resultado;
    }
    
    function consultasRestantes(address proyecto) external view returns (uint256) {
        uint256 realizadas = consultasRealizadas[proyecto];
        if (realizadas >= LIMITE_FREE) {
            return 0;
        }
        return LIMITE_FREE - realizadas;
    }
}