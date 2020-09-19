export default function Capital(input) {
  const withoutSpecialChar = input.replace(/[^\w\s]/gi, "");
  for (var i = 0; i < withoutSpecialChar.length; i++) {
    if (withoutSpecialChar[i] === withoutSpecialChar[i].toUpperCase()) {
      return true;
    }
  }

  return false;
}
