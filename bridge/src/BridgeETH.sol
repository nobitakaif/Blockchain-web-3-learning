// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.5;

import { Ownable } from "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";
import { IERC20 } from "../lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol";
import { ERC20 } from "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract BridgeETH is Ownable{

    uint256 public balance; 
    address public tokenAddress;
    mapping(address => uint256) public pendingBalance;

    event Deposit(address indexed depositor, uint256 amount);

    constructor(address _tokenAddress) Ownable(msg.sender){
        tokenAddress = _tokenAddress;
    }
    
    function deposit(IERC20 _tokenAddress, uint256 _amount) public {
        require(address(_tokenAddress) == tokenAddress);
        require(_tokenAddress.allowance((msg.sender), address(this)) >= _amount);
        require(_tokenAddress.transferFrom(msg.sender, address(this), _amount));
        emit Deposit(msg.sender, _amount);
    }

    function withdraw(IERC20 _tokenAddress, uint256 _amount) public {
        require(address(_tokenAddress) == tokenAddress);
        require(pendingBalance[msg.sender] >= _amount);
        pendingBalance[msg.sender] -= _amount;
        _tokenAddress.transfer(msg.sender, _amount);
    }

    function burnOnOtherSide(address userAccount, uint256 _amount) public onlyOwner{
        pendingBalance[userAccount] += _amount;
    }
    
}