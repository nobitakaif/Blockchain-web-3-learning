
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.5;

import { ERC20 } from "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import { Onwable } from "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";

contract Kaif is ERC20, Onwable{
    
    // address public owner;
    
    constructor() ERC20("kaif","KIF"){
        
    }

    

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
    
}