// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;
import "@openzeppeline/contracts/token/ERC20/ERC20.sol";
contract MyToken is ERC20{
    // constructor of ERC20 expect first arg is name of the token second arg is symbole of the token ERC20(name,symb)
    constructor(uint256 _value) ERC20("nobita","NOOB"){

    }
}