// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";

contract CounterTest is Test {
    Counter public counter;

    function setUp() public {
        counter = new Counter();
    }

    function test_Increment() public {
        counter.increase();
        assertEq(counter.counter(), 1);
    }

    function testdecrease() public {
        counter.increase();
        counter.decrease();
        assertEq(counter.counter(), 0);
    }

    function testBool() public {
        counter.increase();
        counter.increase();
        counter.increase();
        counter.increase();
        counter.decrease();
        assertEq(counter.counter(),3);
    }

    function testSetCounter(uint256 c) public {
        counter.setCounter(c);
        assertEq(counter.counter(), c);
    }
}
