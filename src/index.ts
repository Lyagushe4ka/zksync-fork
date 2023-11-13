import { providers, Wallet } from "ethers";
import * as zksync from "zksync";
export { zksync };

export function getEthers5Signer(privateKey: string): Wallet {
  const provider = new providers.JsonRpcProvider("https://eth.llamarpc.com");
  return new Wallet(privateKey, provider);
}