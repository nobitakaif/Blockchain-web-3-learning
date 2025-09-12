// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDT is ERC20{
    address public owner;
    constructor() ERC20("USDT","USDT"){
        owner= msg.sender;
    }

    function mint(address _to, uint _amount)public{
        require(msg.sender == owner , "you're not owner");
        _mint(_to, _amount);
    }

    function burn(address _to, uint _amount) public{
        _burn(_to, _amount);
    }
}