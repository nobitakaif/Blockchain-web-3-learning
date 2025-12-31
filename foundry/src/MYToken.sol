// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.5;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { console } from "forge-std/console.sol";

contract MyToken is ERC20{
    address public owner;
    constructor() ERC20("kaif","KIF"){
        _mint(msg.sender, 500);
        owner = msg.sender;
    }
    
    function mint(address add, uint256 value) public{
        console.logString("kaif bhai");
        require(msg.sender == owner, "Only owner can mint more token");
        _mint(add, value);
    }
}
