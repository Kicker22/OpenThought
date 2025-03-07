"use client";
import { useState } from 'react';
import  ipfsClient  from '@/app/lib/ipfs';
import { ethers } from 'ethers';
import contractABI from '@/app/lib/ABI';
export default function PublishIdea() {
  const [content, setContent] = useState('');
  const [status, setStatus] = useState(''); // ✅ Moved above function usage

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

  const publishIdea = async () => {
    if (!content) return alert('Please enter some content.');
    if (!window.ethereum) return alert('MetaMask required!');

    setStatus('Publishing idea to IPFS...'); // ✅ No more undefined state issue

    try {
      // Upload to IPFS
      const added = await ipfsClient.add(content);
      const ipfsHash = added.path;
      
      setStatus('Connecting to wallet...');
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress, // ✅ Used contractAddress variable correctly
        contractABI,
        signer
      );

      setStatus('Publishing to blockchain...');
      const tx = await contract.publishIdea(ipfsHash);
      await tx.wait();

      setStatus('Idea published successfully!');
      setContent(''); // ✅ Clear input field after submission
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to publish idea.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Publish Your Idea
      </h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Express your idea..."
        className="w-full h-40 border p-2 rounded focus:ring-indigo-400"
      />
      <button
        onClick={publishIdea}
        className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        Publish Idea
      </button>

      {status && <p className="mt-2 text-gray-700">{status}</p>}
    </div>
  );
}
