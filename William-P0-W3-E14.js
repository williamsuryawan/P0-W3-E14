function mengelompokkanAngka(arr) {
  var arrGanjil=[];
  var arrGenap=[];
  var arrTiga=[];
  var semua=([], [], []);
  for(i=0; i<arr.length;i++){
    var angka = arr[i];
    if(angka % 3 ==0){
      arrTiga.push(angka);
    }
    else if(angka%2 == 0){
      arrGenap.push(angka);
    }
    else if(angka %2 !== 0){
      arrGanjil.push(angka);
    }
  }
  semua.push(arrGenap);
  semua.push(arrGanjil);
  semua.push(arrTiga); 
  return semua;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]