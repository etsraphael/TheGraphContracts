// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract User {
   
    struct Member {
        address owner;
        string userName;
    }
    event setAccountEvent(Member member);

    Member[] private memberList;
    mapping (address => Member) private members;

    function setAccount(string memory _userName) public returns (bool) {
        members[msg.sender] = Member(address(msg.sender), _userName);
        emit setAccountEvent(Member(address(msg.sender), _userName));
        return true;
    }

    function deleteMyAccount() public returns (bool) {
        members[msg.sender] = Member(address(0), "");
        return true;
    }

    function getAccount() public view returns (Member memory) {
        if(members[msg.sender].owner == msg.sender) return members[msg.sender];
        else return Member(address(0), "");
    }

}
