export const caesarCipher = (str, shift) => {
    return str
      .split('')
      .map(char => {
        if (/[a-z]/i.test(char)) {
          const code = char.charCodeAt(0);
          const shiftChar = String.fromCharCode(
            code >= 65 && code <= 90
              ? ((code - 65 + shift) % 26) + 65
              : ((code - 97 + shift) % 26) + 97
          );
          return shiftChar;
        } else if (/[0-9]/.test(char)) {
          return String.fromCharCode(((char.charCodeAt(0) - 48 + shift) % 10) + 48);
        } else {
          return String.fromCharCode(char.charCodeAt(0) + shift);
        }
      })
      .join('');
  };
  