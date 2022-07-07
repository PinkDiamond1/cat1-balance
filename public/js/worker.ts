import { JacobianPoint } from "@rigidity/bls-signatures";
import { Program } from "@rigidity/clvm";
import { calculateSyntheticPublicKey, derivePublicKey } from "./keys";

const publicKeyText = "b90464d1db14e8f5835b73597bb5596fce0b6e942c500dc8cd2d1a9fc0ea2508c2e09217687f6cfa21ba3cc0acfd5388";

const publicKey = JacobianPoint.fromHexG1(publicKeyText);

const standardTransaction = Program.deserializeHex(
  "ff02ffff01ff02ffff03ff0bffff01ff02ffff03ffff09ff05ffff1dff0bffff1effff0bff0bffff02ff06ffff04ff02ffff04ff17ff8080808080808080ffff01ff02ff17ff2f80ffff01ff088080ff0180ffff01ff04ffff04ff04ffff04ff05ffff04ffff02ff06ffff04ff02ffff04ff17ff80808080ff80808080ffff02ff17ff2f808080ff0180ffff04ffff01ff32ff02ffff03ffff07ff0580ffff01ff0bffff0102ffff02ff06ffff04ff02ffff04ff09ff80808080ffff02ff06ffff04ff02ffff04ff0dff8080808080ffff01ff0bffff0101ff058080ff0180ff018080"
);

const puzzleHashes: Array<string> = [];

function calcNewHash(i: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const newHash = standardTransaction.curry([Program.fromJacobianPoint(calculateSyntheticPublicKey(derivePublicKey(publicKey, i), Program.deserializeHex("ff0980").hash()))]).hashHex();
    resolve(newHash);
  });
}

self.onmessage = async ({ data: { question } }) => {
  for (let i = 0; i < 100; i++) {
    let nHash: string = await calcNewHash(i);
    console.log("NEW HASH=======>", nHash);
    puzzleHashes.push(nHash);
  }
  self.postMessage({
    answer: puzzleHashes,
  });
};
