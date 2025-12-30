// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {
    uint256 public counter;

    constructor(){
        counter = 0;
    }
    
    function increase() public {
        counter++;
    }
    
    function decrease() public {
        require(counter > 0 , "counter is already 0");
        counter--;
    }

    function setCounter(uint256 c) public {
        counter = c;
    }
}
