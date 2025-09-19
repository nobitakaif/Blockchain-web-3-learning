// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/Contract.sol";

contract TestContract is Test {
    StakeContract c;

    function setUp() public {
        c = new StakeContract();
    }

    function testStake() public{
        uint value = 10 ether;
        c.stake{value : value }(value);
        assert(c.totalStakes() == value);
    }

    function testUnstake() public{
        uint value = 10 ether;
        vm.startPrank(0x171BD3b7239d9dB1DC8Ec6a4440EF17663dc2609); // whenver same person call this who deployed then fails but we try call this with different address
        vm.deal(0x171BD3b7239d9dB1DC8Ec6a4440EF17663dc2609, value); 
        c.stake{value : value}(value);
        c.unStake(value);
        assert(c.totalStakes() == 0);
    }

    // function testBar() public {
    //     assertEq(uint256(1), uint256(1), "ok");
    // }

    // function testFoo(uint256 x) public {
    //     vm.assume(x < type(uint128).max);
    //     assertEq(x + x, x * 2);
    // }
}
