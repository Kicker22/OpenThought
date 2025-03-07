// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract OpenThought {
    struct Idea {
        address author;
        string ipfsHash;
        uint256 timestamp;
    }

    mapping(uint256 => Idea) public ideas;
    uint256 public ideaCount;

    event IdeaPublished(address indexed author, string ipfsHash, uint256 timestamp);

    function publishIdea(string memory _ipfsHash) external {
        ideas[block.number] = Idea(msg.sender, _ipfsHash, block.timestamp);
        emit IdeaPublished(msg.sender, _ipfsHash, block.timestamp);
        ideaCount++;
    }

    function getIdea(uint256 blockNumber) public view returns (Idea memory) {
        return ideas[blockNumber];
    }
}
