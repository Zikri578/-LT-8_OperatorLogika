    document.writeln("Operator Logika yang diisi secara langsung untuk menampilkan output file secara terpisah");

    const aku = 50;
    const kamu = 70;

    const benar = aku > kamu;
    const salah = aku < kamu;

    // Operator And
    const total = benar && salah;
    document.writeln("<li> Hasilnya Adalah : " + total + "</li>");

    // Operator Or
    const hitung = benar || salah;
    document.writeln("<li> Hasilnya Adalah " + hitung + "</li>");

    // Operator Unity
    const samadengan = !benar;
    document.writeln("<li> Hasilnya Adalah " + samadengan + "</li>");
    const sama = !salah;
    document.writeln("<li> Hasilnya Adalah "+ sama + "</li>");
