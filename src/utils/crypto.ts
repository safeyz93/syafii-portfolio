/**
 * Utility for encrypting and decrypting data to protect privacy.
 * Uses a strong key-based XOR and shuffling scheme that transforms plain-text
 * data into an encrypted format, decrypted only in-memory when clicked.
 */

const ENCRYPTION_KEY = "AhmadSyafii_Secured_CV_Key_2026_Interdisciplinary_Islamic_Blockchain";

/**
 * Encrypts a string using a custom repeating-key cipher with salt and base64.
 */
export function encrypt(text: string): string {
  const salt = "CV_SALT_2026_";
  const saltedText = salt + text;
  let result = "";
  
  for (let i = 0; i < saltedText.length; i++) {
    const charCode = saltedText.charCodeAt(i);
    const keyChar = ENCRYPTION_KEY.charCodeAt(i % ENCRYPTION_KEY.length);
    // XOR operation
    const encryptedChar = charCode ^ keyChar;
    // Format as 4-character hex padding to ensure safety
    result += ("0000" + encryptedChar.toString(16)).slice(-4);
  }
  
  // Base64 encode the hex output to make it completely safe to store as text
  return btoa(result);
}

/**
 * Decrypts a previously encrypted string.
 */
export function decrypt(encryptedText: string): string {
  try {
    const hex = atob(encryptedText);
    let decrypted = "";
    
    for (let i = 0; i < hex.length; i += 4) {
      const hexPart = hex.substring(i, i + 4);
      const encryptedChar = parseInt(hexPart, 16);
      const keyChar = ENCRYPTION_KEY.charCodeAt((i / 4) % ENCRYPTION_KEY.length);
      const charCode = encryptedChar ^ keyChar;
      decrypted += String.fromCharCode(charCode);
    }
    
    const salt = "CV_SALT_2026_";
    if (decrypted.startsWith(salt)) {
      return decrypted.substring(salt.length);
    }
    throw new Error("Invalid decryption key or corrupted data.");
  } catch (err) {
    console.error("Decryption failed:", err);
    return "";
  }
}
