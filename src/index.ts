import ethers from "ethers";
import * as zksync from "zksync";
export { zksync };

export function getEthers5Signer(privateKey: string): ethers.Wallet {
  const provider = new ethers.providers.JsonRpcProvider("https://eth.llamarpc.com");
  return new ethers.Wallet(privateKey, provider);
}