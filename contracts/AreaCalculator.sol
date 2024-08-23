// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AreaCalculator {
    function Triangle(uint _base, uint _height) external pure returns (uint) {
   return (_base * _height) / 2;
    }
    
     function Rectangle(uint _lenght, uint _width) external pure returns (uint){
        return _lenght * _width;   
    }

    function Square(uint _side) external pure returns(uint){
      return   _side ** 2;
       
    }
}