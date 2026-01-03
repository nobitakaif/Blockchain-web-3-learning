
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.5;

import { Test } from "forge-std/Test.sol";
import "../src/bridge.sol";
import "../src/kaif.sol";

contract Bridge is Test{
    
    Bridge bridge;
    Kaif kaif;
    
    function setUp()public {
        bridge = new Bridge();
        kaif = new Kaif();
    }

    function lock() public{
        // kaif deployed the contract so kaif have authority to print token for anyone and give to them just like here mint and give to the address(tahir)
        kaif._mint(0xE717e0289BF3E0409954Af3F3a057950d45674C9, 200);   
        // now kaif gives right to tahir that upcomming request call by tahir
        vm.startPrank(0xE717e0289BF3E0409954Af3F3a057950d45674C9);
        // now tahir approve/allows the to spend money to himself from the my accound(kaif)
        kaif.approve(0xE717e0289BF3E0409954Af3F3a057950d45674C9, 200);

        bridge._transfer()
    }
}