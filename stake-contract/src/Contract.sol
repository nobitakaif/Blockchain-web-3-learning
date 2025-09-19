// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract StakeContract {
    mapping(address => uint) stakes;// storing the data with mapping, this address how much token hold eg kaif -> 1eth
    uint256 public totalStakes;

    constructor(){

    }

    function stake(uint _amount) public payable{
        require(_amount>0);
        require(_amount == msg.value);
        stakes[msg.sender] += _amount;
        totalStakes += _amount;
    }

    function unStake(uint _amount) public{
        require(stakes[msg.sender] >= _amount);
        payable(msg.sender).transfer(_amount);
        totalStakes -= _amount;
        stakes[msg.sender] -= _amount;
    }
}
