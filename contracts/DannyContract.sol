pragma solidity >=0.4.22 <0.7.0;


contract DannyContract {
    event One(string foo);
    event Two(uint256 bar);

    function one() external payable {
        emit One("One");
    }

    function two() external payable {
        emit Two(2);
    }
}
