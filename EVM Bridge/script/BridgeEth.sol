// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BridgeEth {
    address public owner;
    constructor(){
        owner = msg.sender;
    } 

    function deposit() public{

    }

    function withdraw() public{

    }

    function burnedOnOtherSide() public {
        require(owner == msg.sender,"you're not owner");
        
    }
}