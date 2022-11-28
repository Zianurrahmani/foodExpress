var int = 9;
function numberToBahasa(n) {
  var string = n.toString();
  if (parseInt(string) === 0) {
    return "nol";
  }

  units = [
    "nol",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh",
    "sebelas",
    "dua belas",
    "tiga belas",
    "empat belas",
    "lima belas",
    "enam belas",
    "tujuh belas",
    "delapan belas",
    "sembilan belas",
  ];

  tens = [
    "",
    "",
    "dua puluh",
    "tiga puluh",
    "empat puluh",
    "lima puluh",
    "enam puluh",
    "tujuh puluh",
    "delapan puluh",
    "sembilan puluh",
  ];

  scales = ["", "ribu", "juta", "miliar", "triliun"];

  start = string.length;
  kata = [];
  while (start > 0) {
    end = start;
    kata.push(string.slice((start = Math.max(0, start - 3)), end));
  }

  kataLen = kata.length;
  if (kataLen > scales.length) {
    return "";
  }

  words = [];
  for (i = 0; i < kataLen; i++) {
    chunk = parseInt(kata[i]);

    if (chunk) {
      ints = kata[i].split("").reverse().map(parseFloat);
      if (ints[1] === 1) {
        ints[0] += 10;
      }
      if ((word = scales[i])) {
        words.push(word);
      }
      if ((word = units[ints[0]])) {
        words.push(word);
      }
      if ((word = tens[ints[1]])) {
        words.push(word);
      }
      if ((word = units[ints[2]])) {
        words.push(word + " ratus");
      }
    }
  }

  return words.reverse().join(" ");
}

console.log(numberToBahasa(int));
