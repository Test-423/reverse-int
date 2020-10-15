module.exports = function reverse(n) {
   n = Math.abs(n);
   let res = 0, check = 1, ban = n;
   while (ban >= 10) {
      ban = Math.floor(ban / 10);
      check *= 10;
   }
   while (n > 0.99) {
      res += (n % 10) * check;
      check /= 10;
      n = Math.floor(n / 10);
   }

   return Math.abs(res);
}
