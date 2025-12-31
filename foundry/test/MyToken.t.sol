// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.5;

import {Test} from "forge-std/Test.sol";
import {MyToken} from  "../src/MYToken.sol";

contract MyTokenTest is Test{
    MyToken token;

    function setUp() public {
        token = new MyToken();
    }

    function testBool() public{
        // token.transfer(0x005dFB36Fcae8024E3c0af116501342a7Fa834aC, 5);
        // token.mint(address(this), 100);
        assertEq(token.balanceOf(0x005dFB36Fcae8024E3c0af116501342a7Fa834aC),0);
        token.transfer(0x005dFB36Fcae8024E3c0af116501342a7Fa834aC, 100); // from the deployed account(address) to given address in args(addresss)
        assertEq(token.balanceOf(0x005dFB36Fcae8024E3c0af116501342a7Fa834aC),100);
        assertEq(token.balanceOf(address(this)),400);
        assertEq(token.totalSupply(), 500);

        vm.prank(0x005dFB36Fcae8024E3c0af116501342a7Fa834aC);// now this address calling the test/contract, before address(this)/msg.sender call the function () who deployed the contract
        // vm.prank(address) let you do change the authorithy to call someone else function but only once if you do it again then again you need to do vm.prank(address)
        token.transfer(address(this), 100);
        assertEq(token.balanceOf(address(this)), 500);
        assertEq(token.balanceOf(0x005dFB36Fcae8024E3c0af116501342a7Fa834aC), 0);
    }
}