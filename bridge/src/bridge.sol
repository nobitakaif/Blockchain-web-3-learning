


// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.5;

import { IERC20 } from "../lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";


// if bridge want to intract with kaif token then we need to CCI the request to the kaif to token so rather than writting the Intraface and CCI we can use IERC20 contract they've already wrote this for us, 
contract Bridge {
    address private USDT_address;
    constructor(address _address){
        USDT_address = _address;
    }

    function deposite(uint amount) public{
        // check the allowance that, have user acctually allowed that much amount or not 
        require(IERC20(USDT_address).allowance(msg.sender,address(this)) >=amount);
        // take token from their account
        IERC20(USDT_address).transferFrom(msg.sender, address(this), amount);
    }
}