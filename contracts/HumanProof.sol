// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract HumanProof {
    mapping(address => bool) public isHuman;
    address public owner;
    
    event Verified(address indexed user);
    
    constructor() {
        owner = msg.sender;
    }
    
    function verifyMe() external {
        isHuman[msg.sender] = true;
        emit Verified(msg.sender);
    }
    
    function check(address user) external view returns (bool) {
        return isHuman[user];
    }
}