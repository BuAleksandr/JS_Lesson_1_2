function isPrimeNumber(number) {
  if (number < 2 ) {
      return false;
  }

  if (number === 2) {
      return true;
  }

  for(i = 2; i < Math.sqrt(number) + 1; ++i) {
      if (number % i == 0) {
          return false;
      }
  }

  return true;
}


function getPrimeNumbersList(nubmersCount) {
  let result = [];
  let number = 2;
  while ( result.length < nubmersCount) {
      if (isPrimeNumber(number)) {
          result.push(number);
      }
      ++number;
  }
  return result;
}


function main() {
  let nubmersCount = process.argv[2];

  if(nubmersCount == undefined) {
      console.log("undefined numbers count");
      return;
  }

  nubmersCount = parseInt(nubmersCount)
  if(isNaN(nubmersCount)) {
      console.log("numbers count not number");
      return;
  }

  primeNubmers = getPrimeNumbersList(nubmersCount);

  console.log(primeNubmers);
}

main();
