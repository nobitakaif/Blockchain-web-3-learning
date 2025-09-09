// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/Counter.sol";

contract TestContract is Test {
    Counter c;
    

    function setUp() public {
        c = new Counter(100);

    }

    // every test should start with test then you can prefix whatever you want eg. testDone, testInc, testDec
    function testInc()public{
        c.increament();
        c.increament(); // i called two times increament function that are exist in Counter.sol file now counter value become 102 because i start value with 100 using the Counter constructer in setUp function

        // let's check the c.num() equal with 102 or not if not then something is wrong otherwise test successed

        assertEq(c.num(), 102, "test passed"); 

    }
    // everytime any function executed then constructor called evertime for testInc with 100 -> 102, 
    // for testDec 100 -> 98
    function testDec() public {
        c.decreament();
        c.decreament();
        assertEq(c.num(), 98,"test passed");
    }

    // function testBar() public {
    //     assertEq(uint256(1), uint256(1), "ok");
    // }

    // function testFoo(uint256 x) public {
    //     vm.assume(x < type(uint128).max);
    //     assertEq(x + x, x * 2);
    // }
}
