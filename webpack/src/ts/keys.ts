import { AugSchemeMPL, bigIntToBytes, bytesToBigInt, concatBytes, decodeBigInt, hash256, JacobianPoint, mod, PrivateKey } from "@rigidity/bls-signatures";
import { Program } from "@rigidity/clvm";

const groupOrder = 0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001n;

const syntheticPublicKey = Program.deserializeHex("ff1dff02ffff1effff0bff02ff05808080");

export function calculateSyntheticPublicKey(publicKey: JacobianPoint, hiddenPuzzleHash: Uint8Array): JacobianPoint {
  return JacobianPoint.fromBytes(syntheticPublicKey.run(Program.fromList([Program.fromJacobianPoint(publicKey), Program.fromBytes(hiddenPuzzleHash)])).value.atom, false);
}

export function calculateSyntheticPrivateKey(privateKey: PrivateKey, hiddenPuzzleHash: Uint8Array): PrivateKey {
  const privateExponent = bytesToBigInt(privateKey.toBytes(), "big");
  const publicKey = privateKey.getG1();
  console.log(1111111111);
  const syntheticOffset = calculateSyntheticOffset(publicKey, hiddenPuzzleHash);
  const syntheticPrivateExponent = mod(privateExponent + syntheticOffset, groupOrder);
  console.log(222222222222);
  const blob = bigIntToBytes(syntheticPrivateExponent, 32, "big");
  return PrivateKey.fromBytes(blob);
}

export function calculateSyntheticOffset(publicKey: JacobianPoint, hiddenPuzzleHash: Uint8Array): bigint {
  const blob = hash256(concatBytes(publicKey.toBytes(), hiddenPuzzleHash));
  return mod(decodeBigInt(blob), groupOrder);
}

export function derivePrivateKeyPath(privateKey: PrivateKey, path: number[], hardened: boolean): PrivateKey {
  for (const index of path) privateKey = (hardened ? AugSchemeMPL.deriveChildSk : AugSchemeMPL.deriveChildSkUnhardened)(privateKey, index);
  return privateKey;
}

export function derivePublicKeyPath(publicKey: JacobianPoint, path: number[]): JacobianPoint {
  for (const index of path) publicKey = AugSchemeMPL.deriveChildPkUnhardened(publicKey, index);
  return publicKey;
}

export function derivePrivateKey(masterPrivateKey: PrivateKey, index: number, hardened: boolean): PrivateKey {
  return derivePrivateKeyPath(masterPrivateKey, [12381, 8444, 2, index], hardened);
}

export function derivePublicKey(masterPublicKey: JacobianPoint, index: number): JacobianPoint {
  return derivePublicKeyPath(masterPublicKey, [12381, 8444, 2, index]);
}
