import { create } from "@web3-storage/w3up-client";

let clientInstance;

async function initializeClient() {
  if (!clientInstance) {
    clientInstance = await create();
    await clientInstance.provision();
  }
  return clientInstance;
}

export async function uploadToIPFS(content) {
  try {
    const client = await initializeClient();
    const file = new Blob([content], { type: "text/plain" });
    const cid = await client.uploadFile(file);
    return `ipfs://${cid}`;
  } catch (error) {
    console.error("IPFS Upload Error:", error);
    throw error;
  }
}
