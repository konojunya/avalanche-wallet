import { Avalanche, BinTools } from "avalanche";

const binTools = BinTools.getInstance();
const avalanche = new Avalanche();
const xchain = avalanche.XChain();
const myKeychain = xchain.keyChain();

const newKeyPair = myKeychain.makeKey();
const myKeychainAddress = myKeychain.getAddressStrings();
const newAddress = newKeyPair.getAddressString();
const newPublicAddress = newKeyPair.getPublicKeyString();
const newPBKey = newKeyPair.getPrivateKey();

const pbKeyCB58Encoded = binTools.cb58Encode(newPBKey);

console.log({
  newKeyPair,
  myKeychainAddress,
  newAddress,
  newPublicAddress,
  newPBKey,
  pbKeyCB58Encoded,
});
