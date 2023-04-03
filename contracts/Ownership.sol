//SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

contract Ownership {
    address private owner;
    bool public firstOwner;

    constructor() {
        owner = msg.sender;
        firstOwner = true;
    }

    function changeOwner(address newOwner) public returns (address) {
        require(msg.sender == owner, "You're not the owner");
        owner = newOwner;
        if (firstOwner) firstOwner = !firstOwner;
        return owner;
    }
}
