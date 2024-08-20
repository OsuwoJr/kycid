// src/lib/crypto.ts

export async function signChallenge(challenge: string): Promise<string> {
    // Simulate signing a challenge
    return `signed-${challenge}`;
  }
  
  export async function verifySignature(signedChallenge: string): Promise<string> {
    // Simulate verifying a signature
    return signedChallenge.startsWith('signed-') ? 'success' : 'failed';
  }
  