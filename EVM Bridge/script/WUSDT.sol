// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract WUSDT is ERC20{
    address public owner;

    constructor () ERC20("WUSDT","WUSDT") {
        owner = msg.sender;
    }

    function mint(address to, uint amount) public {
        require(owner == msg.sender,"you're not owner");
        _mint(to, amount);
    }

    function burn(address to, uint amount) public{
        require(owner == msg.sender, "you're not owner");
        _burn(to,amount);
    }
}