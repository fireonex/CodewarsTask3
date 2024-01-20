function correct(string)
{
  let newArray = Array.from(string);
  let resultArr = [];
  for (let i = 0; newArray.length > i; i++) {
      if (newArray[i] !== "5" && newArray[i] !== "0" && newArray[i] !== "1" ) {
          resultArr.push(newArray[i]);
      } else {
          switch (newArray[i]) {
              case "5":
                  resultArr.push("S");
                  break;
              case "0":
                  resultArr.push("O");
                  break;
              case "1":
                  resultArr.push("I");
                  break;
          }
      }

  }
  return resultArr.join("");
}
correct("L0ND0N");