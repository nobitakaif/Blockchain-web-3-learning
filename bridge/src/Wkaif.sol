
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.5;

import { ERC20 } from "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import { Ownable } from "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";

contract Kaif is ERC20, Ownable{
    
    // address public owner;
    
    constructor() ERC20("kaif","KIF"), Ownable(msg.sender){
        
    }

    // modifier onlyOwner() { // rather than using this, we can use already create by openzeplin 
    //     require(msg.sender == owner, "You're not the owner");
    // }

    function mint(address to, uint256 amount) public onlyOwner(){
        _mint(to, amount);
    }

    function burn(address _address, uint256 amount) public onlyOwner(){
        _burn(_address, amount);   
    }
    
}