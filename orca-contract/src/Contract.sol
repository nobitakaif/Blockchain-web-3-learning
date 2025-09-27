// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Contract is ERC20 {  // extending other ERC0 contract

    address stakeContract; // this pointing to which contract need to call the mint contract
    address owner; 

    constructor(address _stakeContract) ERC20("Orca","ORC"){ // whenever we extending other contrcts so we need to call first their(extending's) constructor
        stakeContract = _stakeContract;
        owner = msg.sender;
    }

    function mint(address account, uint value) public{
        require(msg.sender == stakeContract);
        _mint(account,value);
    }

    function updateContract(address _stakeContract) public{
        require(msg.sender == owner);
        stakeContract = _stakeContract;
    }   

}
