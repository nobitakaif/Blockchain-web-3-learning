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

    function testBalance()public{
        assertEq(token.balanceOf(address(this)),100, "ok");
    }

    function testMint() public {
        
        // Minting token my self when the constructor called we got 100 then i again .mint() it become 100 + 50 = 150
        token.mint(address(this), 50);
        assertEq(token.balanceOf(address(this)),uint(150),"ok");
    
    }

    function testTranser() public {
        // transfering token from myself to someone else, we have initially 100 then become 50 after transfer 50
        token.transfer(0x8a9B6eE6531cFdFaCAf629483ae6C105c6133fe9,50); // transfer to someone else now it become 0 -> 50 
        assertEq(token.balanceOf(address(this)),50); // check both has 50, 50  
        assertEq(token.balanceOf(0x8a9B6eE6531cFdFaCAf629483ae6C105c6133fe9),50);
        
        vm.prank(0x8a9B6eE6531cFdFaCAf629483ae6C105c6133fe9); // now changing the address, that means give the persmission to someone else 
        token.transfer(address(this), 50); // giving back the token who is calling the function 
        assertEq(token.balanceOf(0x8a9B6eE6531cFdFaCAf629483ae6C105c6133fe9),0); // now someone else has 0 token, 50 -> 0
        assertEq(token.balanceOf(address(this)), 100); // now who is calling the function who has 50 + 50  
        // vm.prank(0x8a9B6eE6531cFdFaCAf629483ae6C105c6133fe9);
        // token.transfer(nobitaAddress,50);
        // assertEq(token.balanceOf(address(this)),0);
    }

    function testApprove() public { // this function allows to user that you can spent token from my behalf 
        token.approve(0x8a9B6eE6531cFdFaCAf629483ae6C105c6133fe9, 50); // give persmission only 50 can spend from my address
        assertEq(token.balanceOf(address(this)), 100);
        vm.prank(0x8a9B6eE6531cFdFaCAf629483ae6C105c6133fe9); // change the address
        // token.transferFrom(from address, to address, amount) arg
        token.transferFrom(address(this),0x8a9B6eE6531cFdFaCAf629483ae6C105c6133fe9,40);
        assertEq(token.balanceOf(address(this)),60);
        assertEq(token.balanceOf(0x8a9B6eE6531cFdFaCAf629483ae6C105c6133fe9), 40);
    }

    event Example(address indexed user, uint256 _time); // when event will trigger when the emit called by event name(Example) it used when user joined
    // indexed is used when we know something might be required to filter (query), in this case we can filter the user based on the address on the frontend 
    function  testJoinUser()public {
        // emiting the even the 
        emit Example(msg.sender, block.timestamp);
    }

}