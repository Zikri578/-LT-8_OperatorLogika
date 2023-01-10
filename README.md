# -LT-8_OperatorLogika

Operator logika dalam JavaScript adalah operator yang digunakan untuk mengevaluasi kebenaran suatu pernyataan logis atau untuk menggabungkan beberapa pernyataan logis. Ada tiga operator logika yang tersedia dalam JavaScript: AND (&&), OR (||), dan NOT (!).

Operator AND (&&) akan menghasilkan nilai benar (true) jika kedua pernyataan yang diuji benar, dan akan menghasilkan nilai salah (false) jika salah satu atau kedua pernyataan salah.

Operator OR (||) akan menghasilkan nilai benar (true) jika salah satu atau kedua pernyataan benar, dan akan menghasilkan nilai salah (false) jika kedua pernyataan salah.

Operator NOT (!) akan mengubah nilai benar (true) menjadi salah (false) dan sebaliknya.

Contoh:

    let x = true;
    let y = false;

    console.log(x && y); // outputs false
    console.log(x || y); // outputs true
    console.log(!x); // outputs false
    
Operator logika dapat digunakan dalam pernyataan if-else untuk mengevaluasi beberapa kondisi sekaligus. Contoh:

    let x = 5;
    let y = 10;

    if (x > 0 && y > 0) {
      console.log("x dan y positif");
    } else {
      console.log("x atau y atau keduanya negatif");
    }

Dalam contoh di atas, pernyataan if akan mengevaluasi apakah x dan y positif. Jika keduanya positif, maka akan mencetak "x dan y positif" ke console. Jika salah satu atau kedua variabel negatif, maka akan mencetak "x atau y atau keduanya negatif" ke console.

Operator logika juga dapat digunakan untuk menggabungkan beberapa pernyataan logis dalam satu pernyataan. Contoh:

    let x = 5;
    let y = 10;
    let z = 15;

    if (x > 0 || y > 0 || z > 0) {
      console.log("setidaknya ada satu variabel positif");
    } else {
      console.log("semua variabel negatif");
    }
    
Dalam contoh di atas, pernyataan if akan mengevaluasi apakah setidaknya ada satu variabel positif. Jika setidaknya ada satu variabel positif, maka akan mencetak "setidaknya ada satu variabel positif" ke console. Jika tidak, maka akan mencetak "semua variabel negatif" ke console.

