// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/MyToken.sol";

contract TestToken is Test{
    MyToken token;

    function setUp() public{
        // i am minting token 
        token = new MyToken(100);
    }

    function testSimple() public {
        assertEq(uint(1), uint(1),"ok");
    }
}