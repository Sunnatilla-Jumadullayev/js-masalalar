// 1 - masala
{
  console.log(`1 - masala`);
  // ixtiyoriy array yarating va uning ichidagi juft va toq sonlar nechtaligini toping
  let user = [1, 2, 3, 4, 5, 6, 7];
  function evenAndOddCount(arr) {
    let event = 0;
    let odd = 0;
    arr.forEach((item) => {
      if (item % 2 === 0) event++;
      else odd++;
    });
    return `evetNumber = ${event}, oddNumber = ${odd}`;
  }
  console.log(evenAndOddCount(user));
}
// 2 - masala
{
  console.log(`2 - masala`);
  // ixtiyoriy array yarating va uning ichidagi juft va toq sonlar yigindisini toping va promt da kiritilgan son bilan array ichidagi sonlar yigindisi o'rtasidagi farq ni toping
  let user = [1, 2, 3, 4, 5, 6, 7];
  //   let n = +prompt(`son kiriting`);
  function evenAndOdd(arr) {
    let event = 0;
    let odd = 0;
    arr.forEach((item) => {
      if (item % 2 === 0) event += item;
      else odd += item;
    });
    return `evetNumber = ${event}, oddNumber = ${odd},promtDifferent = ${
      30 - user.reduce((item, initily) => item + initily, 0)
    }`;
  }
  console.log(evenAndOdd(user));
}
// 3 - masala
{
  console.log(`3 - masala`);
  // foydalanuvchi 2 ta son kiritadi va shu 2 ta so oralig’idagi juft sonlar yig’indisini chiqaruvchi algaritm tuzing faqat 1- son 2- son dan kichikligini tekshiring
  function evetNumber(a, b) {
    let total = 0;
    if (a < b) {
      while (a < b) {
        if (a % 2 === 0) total += a;

        a++;
      }
      return total;
    } else return `notogri son kiritildi`;
  }
  console.log(evetNumber(2, 7));
}
// 4 - masala
{
  console.log(` 4- masala`);
  // foydalanuvchi 2 ta son kiritadi va shu 2 ta so oralig’idagi juft sonlar yig’indisini chiqaruvchi algaritm tuzing faqat 1- son 2- son dan kichikligini tekshiring

  function maxMinDifferent(n, object1, object2) {
    let arr = [];
    for (let item in object1) {
      arr.push(object1[item]);
    }
    for (let item in object2) {
      arr.push(object2[item]);
    }
    arr.sort((a, b) => a - b);
    console.log(arr);
    return `maxDifferent - ${arr[arr.length - 1] - n}, minDifferent - ${
      n - arr[0]
    }`;
  }
  let obj1 = { a: 2, b: 3, c: 9 };
  let obj2 = { a: 1, b: 5, c: 19 };
  console.log(maxMinDifferent(5, obj1, obj2));
}
// 5 - masala
{
  console.log(`5 - masala`);
  // object ni key larini va value larini alohida array olib chiqib beradigan functionlar yarating va key uchun alohida function
  let object = { a: 2, b: 3, c: 9 };
  function objKey(obj) {
    let result = [];
    for (let item in obj) {
      result.push(item);
    }
    return result;
  }
  function objValue(obj) {
    let result = [];
    for (let item in obj) {
      result.push(obj[item]);
    }
    return result;
  }
  console.log(objKey(object));
  console.log(objValue(object));
}
// 6 - masala
{
  console.log(`6 - masala`);
  // N ta element dan iborat bo’lgan array yarating va arraydagi eng katta va eng kichkina sonlar o’rnini almashtiring: arr = [1, 3, 2, 0, 4, 5], result = [1,3,2,5,4,0]
  let array = [1, 3, 2, 0, 4, 5];
  function maxMinExchange(arr) {
    let min = arr[0];
    let max = arr[0];
    let minIndex = 0;
    let maxIndex = 0;
    arr.forEach((el) => {
      if (min > el) {
        min = el;
      }
      if (max < el) {
        max = el;
      }
    });
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element === max) {
        maxIndex = i;
      }
      if (element === min) {
        minIndex = i;
      }
    }
    arr[maxIndex] = min;
    arr[minIndex] = max;
    console.log(arr);
  }
  maxMinExchange(array);
}
// 7 - masala
{
  console.log(`7 - masala`);
  // N natural son berilgan. Dastlabki n ta toq sondan tashkil topgan array qaytaruvchi getInitialOdds(n) nomli function tuzing
  //input: 3
  //output: [1,3,5]
  function getInitialOdds(n) {
    let result = [];
    for (let item = 1; item <= n; item++) {
      if (item % 2 !== 0) {
        result.push(item);
      }
    }
    return result;
  }
  console.log(getInitialOdds(9));
}
// 9 - masala
{
  console.log(` 9 - masala`);
  // Ixtiyoriy n ta element dan iborat bo’lgan array yarating va uning ichidagi dublicate bo’lgan item larni o’chiring:
  //let arr = [1, 3, 2, 2, 3 ] ⇒ 2 va 3 1 martadan ko’p ishtirok etgani uchun ularni o’chirish kerak
  //  natija ⇒ [1,2,3]
  let array = [1, 3, 3, 5, 6, 7, 4, 5, 6, 4, 3, 5];
  function dublicateDelete(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      } else {
      }
    }
    return console.log(newArr);
  }
  dublicateDelete(array);
}
// 10 - masala
{
  console.log(`10 - masala`);
  // n natural soni berilgan 2 sonining dastlabki n ta darajasidan tashkil topgan arrayni qaytaruvchi getLevel(n) nomli function tuzing
  //n: 4
  //result : [2,4,8,16] 2 ning 1-darajasidan boshlanishi kerak va 4-darajasigacha
  //n: 5
  function getLevel(n) {
    result = [];
    if (n > 0) {
      for (let i = 1; i <= n; i++) {
        result.push(2 ** i);
      }
      return console.log(result);
    } else {
      return `0 dan katta son kirit`;
    }
  }
  getLevel(12);
}
// 11 - masala
{
  console.log(`11 - masala`);
  // Ixtiyoriy arrow function yarating va unga beriladigan argument promt yordamida kiritilgan son bo'lsin. Kiritilgan sonning raqamlari yig'indisi topilsin.
  //   let n = prompt("son kirit");
  // let Yigindi = (str = prompt("son kirit")) => {
  //   arr = str.split("");
  //   let result = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     const element = arr[i];
  //     result += Number(element);
  //   }
  //   return console.log(result);
  // };
  // Yigindi();
}
// 12 - masala
{
  console.log(`12- masala`);
  // Ixtiyoriy arrow function yarating va uning parametriga bir nechta sonlar berilsin. va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang:
  //masalan: [1, 22, 3] yigindisi: 26
  //result=> [2,6]
  let foo = (...rest) => {
    let a = rest;
    let yigindi = 0;
    for (let i = 0; i < a.length; i++) {
      yigindi += a[i];
    }
    return console.log(String(yigindi).split(""));
  };
  foo(2, 4, 5, 7, 89, 7, 6, 5, 4);
}
// 13 - masala
{
  console.log(`13 - masala`);
  // Kiritilgan so’z yoki sonni palindrome yoki palindrome emasligini aniqlab beradigan function yarating argument string yoki number ligini tekshiring
  function palindrome(num) {
    let reverse = [];
    let arr = String(num).split("");
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      reverse.unshift(element);
    }

    if (reverse.join("") === String(num)) {
      if (!parseInt(num)) {
        return `kiritilgan Soz palindrome, string`;
      } else {
        return ` kiritilgan son palindrome`;
      }
    } else return `false`;
  }

  console.log(palindrome(121));
}
// 14 - masala
{
  console.log(`14 - masala`);
  // Ixtiyoriy object yarating => {a:1,b:22}
  //value larinig yig'indisini toping => 23
  //value larining yigindising raqamlar yig'indisini toping => 2 + 3 = 5
  function foo(obj) {
    let yigindi = 0;
    let yigindiRaqam = 0;

    for (let item in obj) {
      yigindi += obj[item];
    }
    arr = String(yigindi).split("");
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      yigindiRaqam += +element;
    }
    return `yigindi - ${yigindi}, raqamlarYigindisi - ${yigindiRaqam}`;
  }
  let object = {
    s: 3,
    g: 6,
    yu: 9,
  };

  console.log(foo(object));
}
// 15 - masala
{
  console.log(`15 - masala`);
  // argument sifatida berilgan so’z da nechta unli harf borligini aniqlab beradigan function yarating (trim() dan foydalaning) darsda ko’rsatib berilgan
  String.prototype.countVowel = function () {
    let count = 0;
    this.toLowerCase()
      .split("")
      .forEach((item) => {
        if (item === `e`) {
          count++;
        } else if (item === `u`) {
          count++;
        } else if (item === `i`) {
          count++;
        } else if (item === `o`) {
          count++;
        } else if (item === `a`) {
          count++;
        }
      });
    return count;
  };
  let str = `sunnatilla`;
  console.log(str.countVowel());
}
// 16 - masala
{
  console.log(`16 - masala`);
  //N natural son berilgan. Dastlabki n ta toq sondan tashkil topgan array qaytaruvchi getInitialOdds(n) nomli function tuzing
  //input: 3
  //output: [1,3,5]
  function getInitialOdds(n) {
    let toqSonlar = [1];
    let toqSon = 1;
    for (let i = 1; i < n; i++) {
      toqSon += 2;
      toqSonlar.push(toqSon);
    }
    return console.log(toqSonlar);
  }
  getInitialOdds(4);
}
// 17 - masala
{
  console.log(`17 - masala`);
  // 17. var mergeTwoLists = function(list1, list2) {

  //};
  //Input: list1 = [1,2,4], list2 = [1,3,4]
  //Output: [1,1,2,3,4,4]
  //spread opeartori yordami birlashtiring concat ishlatilmasin

  function arrayConcat(list1, list2) {
    newArr = [...list1, ...list2];
    newArr.sort((a, b) => a - b);
    return console.log(newArr);
  }
  arr1 = [1, 2, 4, 3, 2, 5, 2];
  arr2 = [1, 2, 2, 3, 4];
  arrayConcat(arr1, arr2);
}
// 18 - masala
{
  console.log(`18-masala`);
  // Ixtiyoriy array yarating va unda 1 martadan ko’p ishtirok etgan item larni boshqa array ga ko’chiradigan function yarating
  console.log(` 9 - masala`);
  let array = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 2, 2];
  function dublicatePush(arr) {
    let newArr = [];
    let newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      } else {
        newArr2.push(arr[i]);
      }
    }
    return console.log(newArr2);
  }
  dublicatePush(array);
}
// 19 - masala
{
  console.log(`19 - masala`);
  // 2. var reverse = function(x) {};
  //x = 123
  //result: 321
  //berilson sonning teskarisini toping
  var reverse = function (x) {
    result = String(x).split("").reverse().join("");
    return console.log(result);
  };
  reverse(123456789);
}
// 20 - masala
{
  console.log(`20-masala`);
  //argument sifatida berilgan arrayning o’rtasidagi sonni topadigan function yarating
  //[1,2,3,4,5] ⇒ o’rtasidagi son 3
  //[1,2,3,4] ⇒ o’rtasidagi son (2 + 3) / 2 = 2.5 ya’ni o’rtadagi 2 tasini qo’shib 2 ga bo’lish kerak
  let array = [1, 2, 3, 4, 5];
  function ortaQiymat(arr) {
    let orta_qiymat = 0;
    let orta_qiymat1 = 0;
    let orta_qiymat2 = 0;
    if (arr.length % 2 !== 0) {
      orta_qiymat = arr[Math.floor(arr.length / 2)];
    } else {
      orta_qiymat1 = arr[arr.length / 2];
      orta_qiymat2 = arr[arr.length / 2 - 1];
      orta_qiymat = (orta_qiymat1 + orta_qiymat2) / 2;
    }

    console.log(orta_qiymat);
  }
  ortaQiymat(array);
}
// 21 - masala
{
  console.log(`21 - masala`);
  //argument sifatida berilgan sonning tub son yoki tub emasligini aniqlaydigan function yarating
  const primeNumber = (num) => {
    let count = 0;
    for (let n = 1; n <= num; n++) {
      if (num % n === 0) {
        count++;
      }
    }
    if (count === 2) {
      console.log(`${num} tub son`);
    } else {
      console.log(`${num} tub son emas`);
    }
    console.log(count);
  };
  primeNumber(6);
}
// 22 - masala
{
  console.log(`22 - masala`);
  //2 sonining qandaydir darajasini bildiruvchi qandaydir n butun son berilgan (n > 0) berilgan n son 2 ning qanday k darajadaligini toping
  // input: 8 , k = 3
  function daraja(n) {
    let count = 0;
    for (; n > 1; n /= 2) {
      count++;
    }
    console.log(count);
  }
  daraja(64);
}
// 23 - masala
{
  console.log(`23 - masala`);
  //argument sifatida berilgan sonning mukammal yoki mukammal emasligini aniqlaydigan function yarating
  //mukamm son: 6, 28, ….. ⇒ mukammal son o’zidan boshqa bo’luvchilar yig’indisiga teng bo’lgan son
  function mukammalSon(num) {
    let count = [];
    for (let i = 0; i < num; i++) {
      if (num % i === 0) {
        count.push(i);
      }
    }

    let result =
      count.reduce((a, b) => a + b, 0) === num
        ? `${num} mukammal son`
        : `${num} mukammal son emas`;

    console.log(result);
  }
  mukammalSon(28);
  mukammalSon(48);
}
// 24 - masala
{
  console.log(`24 - masala`);
  // argument sifatida berilgan sonning nechchi xonali ekanligini aniqlaydigan function tuzing
  function number(num) {
    let result = Array.from(String(num), Number).length;
    console.log(`${num} xonalari soni ${result} ta`);
  }
  number(34645);
}
// 25 - masala
{
  console.log(`25 - masala`);
  // argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing
  function fn(str) {
    let str1 = ``;
    let count = 0;
    let strArray = str.toLowerCase().split("");
    for (let i = 0; i < strArray.length; i++) {
      const element = strArray[i];
      if (element === `a`) {
        count++;
      }
    }
    console.log(
      `(${str}) siz kiritgan sozda ${count} marta a harfi qatnashgan`
    );
  }
  fn(`qaawrreaa`);
}
// 26 - masala
{
  console.log(`26 - masala`);
  //argument sifatida berilgan string da ya’ni sentence da lengthi eng kam bo’lgan so’zni qaytaradigan function ni tuzing
  let str1 = `Ish ko‘p, maosh kam: Yevropa shifoxonalarida “kadrlar inqirozi” yuz bermoqda`;
  function enUzunSoz(str) {
    let strArray = str.split(" ");
    let engUzun = strArray[0];
    for (let i = 0; i < strArray.length; i++) {
      const element = strArray[i];
      if (element.split("").length > engUzun.split("").length) {
        engUzun = element;
      }
    }
    console.log(strArray);
    console.log(engUzun);
  }
  enUzunSoz(str1);
}
// 27 - masala
{
  console.log(`27 - masala`);
  // berilgan argument ni nimaligini ayting agar son bo’lsa return “son” agar string bo’lsa “string” aks holda return 0 bo’lsin
  let str = ``;
  function type_Of(argument) {
    if (typeof argument === `string`) {
      return console.log(typeof argument);
    } else if (typeof argument === `number`) {
      return console.log(typeof argument);
    } else {
      return console.log(0);
    }
  }
  type_Of(23);
}
// 28 - masala
{
  console.log(`28 - masala`);
  // argument sifatida berilgan string ni teskari qiluvchi function tuzing
  let soz = `mukammal`;
  function reverseStr(str) {
    let strReverse = str.split("").reverse().join("");
    console.log(strReverse);
  }
  reverseStr(soz);
}
// 29 - masala
{
  console.log(`29 - masala`);
  // argument sifatida berilgan string da nechta son qatnashganligini aniqlaydigan function tuzing
  const numberCount = (str) => {
    let strArray = str.split("");
    let count = 0;
    for (let i = 0; i < 10; i++) {
      for (let g = 0; g < strArray.length; g++) {
        const element = +strArray[g];
        if (i === element) {
          count++;
        }
      }
    }
    return console.log(`${str} siz kiritgan so'zda ${count} ta son qatnashgan`);
  };
  numberCount(`qw23rhu56kg`);
}
// 30 - masala
{
  console.log(`30 - masala`);
  // berilgan sonni teskari qiladigan function yarating
  reverseNumber(123456789);
  function reverseNumber(num) {
    if (typeof num === `number`) {
      let result = +Array.from(num.toString(), Number).reverse().join("");
      return console.log(result);
    }
  }
}
// 31 - masala
{
  console.log(`31 - masala`);
  // String lar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin
  //Input: [”text”, “world”, “laptop”]
  //Output: {”text”: 4, “world”: 4, “laptop”: 6}
  string = `men kitob oqishni yahshi koraman, ismim sunnatilla`;
  function objectPush(str) {
    let strArray = str.split(" ");
    let result = {};
    for (let i = 0; i < strArray.length; i++) {
      let element = strArray[i];
      let value = element;

      result[element] = element.length;
    }
    console.log(result);
  }
  objectPush(string);
}
// 32 - masala
{
  // Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi minManWord() nomli function yarating
  // Input: “Men dasturlash kursida o’qiyman”
  // Output: {minWord: “Men”, maxWord: “dasturlash”}
  let sentence = `Foydalanilmayotgan yerlar, bo‘sh adirlarda mevali bog‘lar barpo etiladi`;
  console.log(`32 - masala`);
  function minMaxWord(str) {
    let strArray = str.split(" ");
    let minWord = strArray[0];
    let maxWord = strArray[0];
    let result = {};
    for (let i = 0; i < strArray.length; i++) {
      const element = strArray[i];
      if (minWord.length > element.length) {
        minWord = element;
      }

      if (maxWord.length < element.length) {
        maxWord = element;
      }
    }
    result.maxWord = maxWord;
    result.minWord = minWord;

    return console.log(result);
  }
  minMaxWord(sentence);
}
// 33 - masala
{
  console.log(`33 - masala`);
  // n natural soni berilgan 2 sonining dastlabki n ta darajasidan tashkil topgan arrayni qaytaruvchi getLevel(n) nomli function tuzing
  //n: 4
  // result : [2,4,8,16] 2 ning 1-darajasidan boshlanishi kerak va 4-darajasigacha
  //n: 5
  //result: [2,4,8,16,32] 2 ning 5-darajasi 32 bo’ganligi uchun 32 da tugayapti
  function getLevel(n) {
    result = [];
    if (n > 0) {
      for (let i = 1; i <= n; i++) {
        result.push(2 ** i);
      }
      return console.log(result);
    } else {
      return `0 dan katta son kirit`;
    }
  }
  getLevel(6);
}
// 34 - masala
{
  console.log(`34 - masala`);
  // argument sifatida berilgan string da ya’ni sentence da lengthi eng kam bo’lgan so’zni qaytaradigan function ni tuzing
  let news = `Eron chempionati oltinchi turidan o'rin olgan markaziy uchrashuv`;
  console.log(minWords(news));
  function minWords(str) {
    let array = str.split(" ");
    let minWord = array[0];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (minWord.length > element.length) {
        minWord = element;
      }
    }
    return minWord;
  }
}
// 35 - masala
{
  console.log(`35 - masala`);
  // Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
  // Input: n = 3,  const obj = {a: 2, b: 3, c: 4}
  // Output: const res = {a: 6, b: 9, c: 12}
  let objectt = { a: 7, b: 2, c: 4 };
  object(objectt, 3);
  function object(obj, n = 1) {
    let result = {};

    for (let item in obj) {
      result[item] = obj[item] * n;
    }
    return console.log(result);
  }
}
// 36 - masala
{
  console.log(`36 - masala`);
  // argument sifatida berilgan string da nechta son qatnashganligini aniqlaydigan function tuzing
  const numberCount = (str) => {
    let strArray = str.split("");
    let count = 0;
    for (let i = 0; i < 10; i++) {
      for (let g = 0; g < strArray.length; g++) {
        const element = +strArray[g];
        if (i === element) {
          count++;
        }
      }
    }
    return console.log(`${str} siz kiritgan so'zda ${count} ta son qatnashgan`);
  };
  numberCount(`dff45ggg5`);
}
// 37 - masala
{
  console.log(`37- masala`);
  //. Ixtiyoriy arrow function yarating va uning parametriga bir nechta sonlar berilsin. va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang:

  // masalan: [1, 22, 3] yigindisi: 26
  // result=> [2,6]
  let foo = (...rest) => {
    let a = rest;
    let yigindi = 0;
    for (let i = 0; i < a.length; i++) {
      yigindi += a[i];
    }
    console.log(yigindi);
    return console.log(String(yigindi).split(""));
  };
  foo(2, 4, 5, 7, 8, 7, 6, 5, 4);
}
// 38 - masala
{
  console.log(`38 - masala`);
  // argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing
  let sentence = `"Barselona" asosiy darvozaboni Mark-Andre ter SHtegen `;
  const Acount = (str = ``) => {
    let strArray = str.toLowerCase().split("");
    let count = 0;
    for (let i = 0; i < strArray.length; i++) {
      const element = strArray[i];
      if (element === `a`) {
        count++;
      }
    }
    return console.log(count, `gapda ${count} marta a harfi qatnashgan`);
  };
  Acount(sentence);
}
// 39 - masala
{
  console.log(`39 - masala`);
  // 2 sonining qandaydir darajasini bildiruvchi qandaydir n butun son berilgan (n > 0) berilgan n son 2 ning qanday k darajadaligini toping
  // input: 8 , k = 3
  function daraja(n) {
    let count = 0;
    for (; n > 1; n /= 2) {
      count++;
    }
    console.log(count);
  }
  daraja(128);
}
// 40 - masala
{
  console.log(` 40 - masala`);
  // array ichidagi o’rtadagi sonni topadigan function tuzing
  //Input: arr = [1,2,3,4,5] middleNumber = 3
  //Input arr = [1,2,3,4] middleNumber = 2.5 o’rtadagi 2 ta sonning o’rta  arifmetigi
  let user = [1, 2, 3, 4];
  function ortaQiymat(arr) {
    if (arr.length % 2 === 0) {
      let a = arr[arr.length / 2] + arr[arr.length / 2 - 1];
      return a / 2;
    } else {
      return arr[Math.floor(arr.length / 2)];
    }
  }
  console.log(ortaQiymat(user));
}
// 41 - masala
{
  console.log(`41 - masala`);
  // Quyidagi ko’rinishda object lardan tuzilgan array berildi. Agar read property true bo’lsa o’sha kitob o’qigan deb chiqarsin, aks holda o’qilmagan deb chiqarsin
  const books = [
    {
      title: `Halqa`,
      author: `Akrom Malik`,
      read: true,
    },
    {
      title: `Dunyoning ishlari`,
      author: `O’tkir Hoshimov`,
      read: !true,
    },
    {
      title: `Iymon`,
      author: `Shayx Muhammad Sodiq Muhammad Yusuf`,
      read: true,
    },
  ];
  bookRead(books);
  function bookRead(arr) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element.read === true) {
        console.log(
          `${i + 1}. ${element.author}ning ${element.title} kitobi oqilgan`
        );
      } else {
        console.log(
          `${i + 1}. ${element.author}ning ${element.title} kitobi oqilmagan`
        );
      }
    }
  }
}
// 42 - masala
{
  console.log(`42 - masala`);
  // String lar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin
  //Input: [”text”, “world”, “laptop”]
  //Output: {”text”: 4, “world”: 4, “laptop”: 6}
  string = `men kitob oqishni yahshi koraman, ismim sunnatilla`;
  function objectPush(str) {
    let strArray = str.split(" ");
    let result = {};
    for (let i = 0; i < strArray.length; i++) {
      let element = strArray[i];
      let value = element;

      result[element] = element.length;
    }
    console.log(result);
  }
  objectPush(string);
}
// 43 - masala
{
  console.log(`43 - masala`);
  // Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
  // Input: n = 3,  const obj = {a: 2, b: 3, c: 4}
  // Output: const res = {a: 6, b: 9, c: 12}
  const user = { a: 2, b: 3, c: 4 };
  let a = 5;
  console.log(user);
  function getObj(n, obj) {
    let result = {};

    for (const item in obj) {
      result[item] = obj[item] * n;
    }
    return result;
  }
  // yechim
  console.log(getObj(a, user));
}
// 44 - masala
{
  console.log(`44 - masala`);
  // n natural soni berilgan 2 sonining dastlabki n ta darajasidan tashkil topgan arrayni qaytaruvchi getLevel(n) nomli function tuzing
  // n: 4
  // result : [2,4,8,16] 2 ning 1-darajasidan boshlanishi kerak va 4-darajasigacha
  // n: 5
  // result: [2,4,8,16,32] 2 ning 5-darajasi 32 bo’ganligi uchun 32 da tugayapti
  function getLevel(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      result.push(2 ** i);
    }
    return result;
  }
  console.log(getLevel(6));
}
// 45 - masala
{
  console.log(`45 - masala`);
  // Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
  //Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
  //.Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}
  const animals = [
    "dog",
    "chicken",
    "cat",
    "dog",
    "chicken",
    "chicken",
    "rabbit",
    "rabbit",
  ];
  countElement(animals);
  function countElement(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      let count = 0;
      for (let g = 0; g < arr.length; g++) {
        if (element === arr[g]) {
          count++;
        }
      }
      result[element] = count;
    }
    return console.log(result);
    console.log(result);
  }
}
// 46 - masala
{
  console.log(`46 - masala`);
  // Array elementlari kvadratlaridan hosil bo’lgan array hosil qiling.
  // Input: [1, 2, 3, 4, 5]
  // Output: [1, 4, 9, 16, 25]
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 23];
  function powArray(arr) {
    return arr.map((a) => a ** 2);
  }
  console.log(powArray(arr1));
}
// 47 - masala
{
  console.log(`47 - masala`);
  // Arraydagi musbat sonlar yig’indisini hisoblang. (filter va reduce)
  // Input: [ 1, -4, 12, 0, -3, 29, -150]
  // Output: 42

  let input = [1, -4, 12, 0, -3, 29, -150, 8];
  function musbatYigindi(arr) {
    let result = arr
      .filter((item) => item > 0)
      .reduce(function (currentSum, currentNumber) {
        return currentSum + currentNumber;
      }, 0);
    return result;
  }
  console.log(musbatYigindi(input));
}
// 48 - masala
{
  console.log(`48 - masala`);
  // Stringdagi so’zlarning bosh harflarini oling. (split, map, join)
  // Input: 'George Raymond Richard Martin'
  // Output: 'GRRM'
  let gap = `George Raymond Richard Martin`;
  let result = gap
    .split(" ")
    .map((str) => str[0])
    .join("");
  console.log(result);
}
// 49 - masala
{
  // Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
  // Input: [
  // {name: 'John', age: 13},
  //{name: 'Mark', age: 56},
  //{name: 'Rachel', age: 45},
  //{name: 'Nate', age: 67},
  //{name: 'Jeniffer', age: 65}
  //];
  //Output: 54
  console.log(`49 - masala`);
  let user = [
    { name: "John", age: 13 },
    { name: "Mark", age: 56 },
    { name: "Rachel", age: 45 },
    { name: "Nate", age: 67 },
    { name: "Jeniffer", age: 65 },
  ];
  let arr = [];
  for (let i = 0; i < user.length; i++) {
    arr.push(user[i].age);
  }
  console.log(arr);
  let a = arr.sort((a, b) => a - b)[0];
  let b = arr.sort((a, b) => b - a)[0];
  console.log(b - a);
}
// 50 - masala
{
  console.log(`50 - masala`);
  // var singleNumber = function(nums) {};
  //singleNumber( [4,1,2,1,2,9, true] )
  // function argumentiga berilgan arrayning ichidagi takrorlanmagan element yoki element larni chiqaring
  //misol uchun: 4, 9 soni 1 marta ishtirok etgan qolgan sonlar 1 martadan ko’p qatnashgani uchun javob 4, 9 bo’lgan namunada
  let arr2 = [4, 1, 2, 1, 2, 9, true];
  let result = [];
  function singleNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (arr.indexOf(element) === arr.lastIndexOf(element)) {
        result.push(element);
      }
    }
    return result;
  }
  console.log(singleNumber(arr2));
}
// 51 - masala
{
  console.log(`51 - masala`);
  // array ichidagi o’rtadagi sonni topadigan function tuzing
  //Input: arr = [1,2,3,4,5] middleNumber = 3
  //Input arr = [1,2,3,4] middleNumber = 2.5 o’rtadagi 2 ta sonning o’rta arifmetigi
  let user = [1, 2, 3, 4];
  function ortaQiymat(arr) {
    if (arr.length % 2 === 0) {
      let a = arr[arr.length / 2] + arr[arr.length / 2 - 1];
      return a / 2;
    } else {
      return arr[Math.floor(arr.length / 2)];
    }
  }
  console.log(ortaQiymat(user));
}
// 52 - masala
{
  console.log(`52 - masala`);
  // Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
  //let products = [{id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},{id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},{id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},{id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},];
  let products = [
    { id: 4, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
    { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
    { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
    { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
  ];
  let result = products.filter((item) => item.id !== 4);
  console.log(result);
}
// 53 - masala
{
  console.log(`53 - masala`);
  // Berilgan stringni faqatgina harflardan iborat ekanligiga tekshiring
  function stringExpent(str) {
    let count = 0;
    for (let item of str) {
      if (!isNaN(Number(item))) {
        count++;
      }
    }
    return count === 0;
  }
  let a = `qwe3r`;
  console.log(stringExpent(a));
}
// 54 - masala
{
  console.log(`54 - masala`);
  // Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
  // Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
  // Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}
  const animals = [
    "dog",
    "chicken",
    "cat",
    "dog",
    "chicken",
    "chicken",
    "rabbit",
    "rabbit",
  ];
  countElement(animals);
  function countElement(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      let count = 0;
      for (let g = 0; g < arr.length; g++) {
        if (element === arr[g]) {
          count++;
        }
      }
      result[element] = count;
    }
    return console.log(result);
    console.log(result);
  }
}

// 55 - masala
{
  console.log(`55 - masala`);
  // String berilgan. Stringdagi so'zlar uzunligidan iborat bo'lgan array qaytaring. (split, map)
  //Input: "Hello world"
  //Output: [3, 9, 12]
  let sentens = `bugun yomgir yogdi olamga`;
  const wordLength = (str) => str.split(" ").map((b) => b.length);
  console.log(wordLength(sentens));
}
// 56 - masala
{
  console.log(`56 - masala`);
  // Stringni bo'sh joy bor yoki yo'qligini tekshiring. (split, some)
  // Input: "salom dunyo"
  // Output: true
  function emptySearch(str) {
    return str.split("").includes(" ");
  }
  console.log(emptySearch(`boshJoyYoq`));
  console.log(emptySearch(`bo'sh joy bor`));
}
// 57 - masala
{
  console.log(`57 - masala`);
  // Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring. (Object.entries, map, join)
  // Input: {a: 2, b: 5, c: 7}
  // Output: ['a2', 'b5', 'c7']
  let obj = { a: 2, b: 5, c: 7 };
  let result = [];
  for (const [key, value] of Object.entries(obj)) {
    result.push(`${key}${value}`);
  }
  console.log(result);
}
// 58 - masala
{
  console.log(`58 - masala`);
  // Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang. (reduce) 80 ≤ protcent exam dan o’tgan bo’ladi
  const pupils = [
    { name: "Elbek", protcent: 95 },
    { name: "Zafar", protcent: 78 },
    { name: "Aziz", protcent: 83 },
    { name: "Jasur", protcent: 88 },
    { name: "Bobur", protcent: 66 },
    { name: "Kamron", protcent: 80 },
  ];
  let passExam = 0;
  let failExam = 0;
  for (let i = 0; i < pupils.length; i++) {
    const element = pupils[i];
    if (element.protcent >= 80) passExam++;
    else failExam++;
  }
  console.log(`pass in exam: ${passExam}`, `fail exam: ${failExam}`);
}
// 59 - masala
{
  console.log(`59 - masala`);
  // var findMedianSortedArrays = function(nums1, nums2) {};
  // nums1 = [1,2], nums2 = [3,4]
  // result: 2.5
  // arraylar qushilib va sort lanib urtasidagi son topilsin
  let num1 = [1, 2, 8, 6];
  let num2 = [3, 4, 5, 7];

  var findMedianSortedArrays = function (nums1, nums2) {
    let nums = [...nums1, ...nums2].sort((a, b) => a - b);
    console.log(nums);
    if (nums.length % 2 === 0) {
      let a = nums[nums.length / 2] + nums[nums.length / 2 - 1];
      return a / 2;
    } else {
      return nums[Math.floor(nums.length / 2)];
    }
  };
  console.log(findMedianSortedArrays(num1, num2));
}
//  60 - masala
{
  console.log(`60 - masala`);
}
//  61 - masala
{
  console.log(`61 - masala`);
}
//  62 - masala
{
  console.log(`62 - masala`);
}
//  63 - masala
{
  console.log(`63 - masala`);
  // sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping.
  let string = `An array of the given object's own enumerable string-keyed propertys`;
  function lastStringLength(str) {
    let arrStr = str.split(" ");
    return arrStr[arrStr.length - 1].length;
  }
  console.log(lastStringLength(string));
}
// 64 - masala
{
  console.log(`64 - masala`);
  // berilgan array lar index ma index bir biriga teng bo'lsa true bo'lmasa false
  // chiqishi kerak
  let p = [1, 2, 3];
  let q = [1, 2, 3];
  function fitArr(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      const element1 = arr1[i];
      const element2 = arr2[i];
      if (element1 !== element2) {
        count++;
      }
    }
    return count > 0 ? false : true;
  }
  console.log(fitArr(p, q));
}
// 65 - masala
{
  console.log(`65 - masala`);
  // Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring. (Object.entries, map, join)
  // Input: {a: 2, b: 5, c: 7}
  // Output: ['a2', 'b5', 'c7']
  let obj = { a: 2, b: 5, c: 7 };
  let result = [];
  for (const [key, value] of Object.entries(obj)) {
    result.push(`${key}${value}`);
  }
  console.log(result);
}
// 67 - masala
{
  console.log(`67 - masala`);
  let arrr = [1, 5, 1, 2, 3, 5, 4];
  function doubleArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
        result.push(element);
      }
    }
    return result.sort((a, b) => a - b);
  }
  console.log(doubleArr(arrr));
}
// 68 - masala

{
  console.log(`68 - masala`);
  //Array truthy va falsy elementlardan tuzilgan. O’sha arraydagi truthy va falsy elementlarni alohida arraylarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)

  let argument = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
  function getTruthyFalsy(arr) {
    let obj = {};
    let truthy = arr.filter((item) => Boolean(item));
    let falsy = arr.filter((item) => !Boolean(item));
    obj.truthy = truthy;
    obj.falsy = falsy;
    return obj;
  }
  console.log(getTruthyFalsy(argument));
}
// 69 - masala
{
  console.log(`69 - masala`);
  // Array ning prototype ga shunday bir method yaratib qo’shinki xoxlagan arrayda shu method ni chaqirganda ichidagi sonlarni yig’indisini topib bersin
  Array.prototype.calcSum = function () {
    let result = 0;
    this.forEach((item) => {
      if (!isNaN(item)) {
        result += item;
      }
    });
    return result;
  };
  let arr = [1, 2, `q`, 4, 5, 4, `as`, 4];
  console.log(arr.calcSum());
}
// 70 - masala
{
  console.log(`70 - masala`);
  // String prototype ga shunday method yaratib qo’shinki xoxlagan bir stringda chaqirganda o’sha stringda nechta unli harf borligini aniqlab bersin
  String.prototype.countVowel = function () {
    let count = 0;
    this.toLowerCase()
      .split("")
      .forEach((item) => {
        if (item === `e`) {
          count++;
        } else if (item === `u`) {
          count++;
        } else if (item === `i`) {
          count++;
        } else if (item === `o`) {
          count++;
        } else if (item === `a`) {
          count++;
        }
      });
    return count;
  };
  let str = `sunnatilla`;
  console.log(str.countVowel());
}
// 71 - masala
{
  console.log(`71 - masala`);
  // String prototype ga shunday method yaratib qo’shinki xoxlagan bir stringda chaqirganda o’sha stringni length ni aniqlab bersin
  String.prototype.lengthSum = function () {
    return this.length;
  };
  let str = `sunnatilla`;
  console.log(str.lengthSum());
}
// 72 - masala
{
  //word arraydagi harflar orasida bor yoki yo'qligini tekshiring
  console.log(`72 - masala`);
  function WordCheck(arr, str) {
    let newArr = [];
    let count = 0;
    arr.forEach((item) => {
      item.forEach((x) => {
        newArr.push(x);
      });
    });
    for (const i of str) {
      if (newArr.includes(i)) {
        count++;
      }
    }
    return count === str.length;
  }
  let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  let word = "ABCCEDA";
  console.log(WordCheck(board, word));
}
// 73 - masala
{
  console.log(`73 - masala`);
  //val head da bo'lsa head dan o'sha element ni olib tashlash kerak
  function delet(arr, el) {
    return arr.filter((item) => item !== el);
  }
  let head = [1, 2, 6, 3, 4, 5, 6];
  let val = 6;
  console.log(delet(head, val));
}
