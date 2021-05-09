// SPDX-License-Identifier: GPL-3.0

pragma solidity =0.8.4;

import "hardhat/console.sol";

contract Lottery {
    address public manager;
    address payable[] public players;

    constructor() {
        console.log("Constructor was invoked");
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > 0.01 ether);


        players.push(payable(msg.sender));
    }

    function random() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    function pickWinner() public onlyAdmin {
        uint index = random() % players.length;
        players[index].transfer(address(this).balance);
        players = new address payable[](0);
    }

    modifier onlyAdmin() {
        require(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }
}