// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;
import "@openzeppeline/contracts/token/ERC20/ERC20.sol";
contract MyToken is ERC20{

    address owner;
    
    // constructor of ERC20 expect first arg is name of the token second arg is symbole of the token ERC20(name,symb)
    constructor(uint256 _value) ERC20("nobita","NOOB"){
        // _mint() this function do -> when the code is deployed the it will automatically minting them who deployed the code for eg. myself, because i will deployed code. The amount that are in value arg
        // minting token myself
        _mint(msg.sender, _value);
        owner = msg.sender;
    }
    
    function mint(address to , uint256 _amount)public {
        // check who is calling this function this function should be and anyone can call this function so we should need to check only owner/admin can only mint more token 
        require(msg.sender == owner,"only owner can mint the token");
        _mint(to, _amount);
    }
}