// 1
// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(3);


// 2.1
// let arr = [1, 2, 3, 1, 3, 4];
// let set = new Set(arr);
// console.log(set);


// 2.2
// let set = new Set([1, 2, 3]);
// set.add(2); 
// console.log(set); 


// 3.1
// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(3);
// console.log(set.size);


// 3.2
// let set = new Set;
// set.add(1);
// set.add(2);
// set.add(3);
// console.log(set.has(3));
// console.log(set.has(4));


// 4
// let numberSet = new Set([1, 2, 3, 4, 5]);
// let sum = 0;
// for (let num of numberSet) {
//   sum += num;
// }
// console.log("sum= " + sum);


// 5.1
// let set = new Set([1, 2, 3]);
// let arr = [...set];
// let arr = Array.from(set);
// console.log(arr);


// 5.2
// let set = new Set([1, 2, 3, 4, 5]);
// let set = new Set(arr);


// 6
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// let arr = [1, 2, 3, 1, 3, 4];
// let res = removeDuplicates(arr);
// console.log(res); 
  

// 7
// const clickedParagraphs = new Set();
// document.querySelectorAll('p').forEach(paragraph => {
//     paragraph.addEventListener('click', function() {
//         clickedParagraphs.add(this);
//     });
// });
// document.getElementById('addExclamation').addEventListener('click', function() {
//     clickedParagraphs.forEach(paragraph => {
//         paragraph.textContent += '!';
//     });
// });


