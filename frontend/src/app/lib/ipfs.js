import { create } from 'kubo-rpc-client';

const projectId = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID; // ✅ Your Infura API Key
const projectSecret = process.env.NEXT_PUBLIC_INFURA_PROJECT_SECRET; // ✅ Your Infura API Secret

if (!projectId) {
  throw new Error("❌ Infura Project ID is missing. Check .env.local");
}

const ipfsClient = create({
  host: `ipfs.infura.io`,
  port: 5001,
  protocol: 'https',
  apiPath: `/api/v0`, 
  url: `https://ipfs.infura.io:5001/api/v0?project_id=${projectId}`,
});

export default ipfsClient;
