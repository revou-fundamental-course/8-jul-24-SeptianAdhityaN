// Deklarasi variable yang dibutuhkan dari HTML
const btnResult = document.querySelector("#btn-result");
const btnReset = document.querySelector("#btn-reset");
const resultIndex = document.querySelector(".result-index");
const resultStatus = document.querySelector(".result-status");
const resultRadius = document.querySelector(".result-radius");
const resultDescription = document.querySelector(".result-description");
const resultSugestion = document.querySelector(".result-sugestion");
const resultMessage = document.querySelector(".result-message");
const disclaimerText = document.querySelector(".disclaimer-text");
const titlePenyakit = document.querySelector(".title-penyakit");
const listPenyakit = document.querySelector(".list-penyakit");


// Fungsi kalkulasi BMI
function BMI(weight, height) {
  return (weight / (height * height)).toFixed(2);
}

// Jika tombol hitung diklik
btnResult.addEventListener("click", (event) => {
  // Mencegah form dikirim
  event.preventDefault();

  // Mengambil nilai input
  const weight = parseFloat(document.querySelector("#input-weight").value);
  const height =
    parseFloat(document.querySelector("#input-height").value) / 100;

  // Validasi input dengan benar
  if (weight === "" || height === "" || isNaN(weight) || isNaN(height)) {
    openPopup();
    return;
  }

  // Memanggil fungsi kalkulasi BMI
  const bmi = BMI(weight, height);

  // Menampilkan hasil kalkulasi
  resultIndex.innerText = bmi;

  // Menentukan status berdasarkan hasil
  if (bmi < 18.5) {
    resultStatus.innerText =
      '"Kekurangan berat badan"';
    resultRadius.innerText = "Hasil BMI di bawah 18.5";
    resultDescription.innerText =
      "Anda berada dalam kategori underweight atau kekurangan berat badan.";
    resultSugestion.innerText =
      "Cara terbaik untuk meningkatkan berat badan adalah dengan mengonsumsi lebih banyak kalori dari makanan yang sehat dan bergizi serta melakukan latihan beban untuk membangun massa otot.";
    resultMessage.innerText =
      "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk meningkatkan berat badan hingga batas normal";
    disclaimerText.innerText =
      "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
    titlePenyakit.innerText =
      'Beberapa penyakit yang berasal dari Kekurangan Berat Badan:';
    listPenyakit.innerHTML = `<li>Anemia</li>
                              <li>Osteoporosis</li>
                              <li>Infertilitas</li>
                              <li>Sistem kekebalan tubuh yang lemah</li>`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultStatus.innerText = '"Normal (ideal)"';
    resultRadius.innerText = "Hasil BMI diantara 18.5 dan 24.9";
    resultDescription.innerText =
      "Anda berada dalam kategori normal atau berat badan ideal.";
    resultSugestion.innerText =
      "Untuk menjaga berat badan ideal, pertahankan pola makan seimbang dengan asupan kalori yang sesuai dan rutin berolahraga.";
    resultMessage.innerText =
      "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mempertahankan berat badan Anda dengan pola hidup sehat.";
    disclaimerText.innerText =
      "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
    titlePenyakit.innerText =
      'Beberapa penyakit yang berasal dari Normal:';
    listPenyakit.innerHTML = `<li>Diabetes tipe 1</li>
                              <li>Hipertensi esensial</li>
                              <li>Kolesterol tinggi</li>
                              <li>Penyakit autoimun</li>`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    resultStatus.innerText =
      '"Kelebihan berat badan"';
    resultRadius.innerText = "Hasil BMI diantara 25 dan 29.9";
    resultDescription.innerText =
      "Anda berada dalam kategori overweight atau berat badan berlebih.";
    resultSugestion.innerText =
      "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.";
    resultMessage.innerText =
      "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    disclaimerText.innerText =
      "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
    titlePenyakit.innerText =
      'Beberapa penyakit yang berasal dari Kelebihan Berat Badan:';
    listPenyakit.innerHTML = `<li>Pre-diabetes</li>
                              <li>Sleep apnea</li>
                              <li>Penyakit hati berlemak non-alkohol (NAFLD)</li>
                              <li>Varises</li>`;
  } else {
    resultStatus.innerText = 'Kegemukan (Obesitas)';
    resultRadius.innerText = "Hasil BMI diantara 30 dan 34.9";
    resultDescription.innerText = "Anda berada dalam kategori obesitas.";
    resultSugestion.innerText =
      "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur pola makan yang sehat dan rendah kalori serta meningkatkan aktivitas fisik.";
    resultMessage.innerText =
      "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk berkonsultasi dengan profesional kesehatan untuk mendapatkan program penurunan berat badan yang tepat.";
    disclaimerText.innerText =
      "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
    titlePenyakit.innerText =
      'Beberapa penyakit yang berasal dari Obesitas:';
    listPenyakit.innerHTML = `<li>Diabetes tipe 2</li>
                              <li>Hipertensi</li>
                              <li>Penyakit jantung koroner</li>
                              <li>Osteoarthritis</li>`;
  }

  const btnDownload = document.querySelector(".btn-download");
  btnDownload.classList.add("active");
  const listPenyakitContainer = document.querySelector(".list-penyakit-container");
  listPenyakitContainer.classList.add("active");
});

// Untuk mereset web ke bentuk awal
btnReset.addEventListener("click", () => {
  // Reset input fields
  document.querySelector("#input-weight").value = "";
  document.querySelector("#input-height").value = "";
  document.querySelector("#input-years-old").value = "";

  // Uncheck pada inputan gender
  document.querySelectorAll('input[name="gender"]').forEach((radio) => {
    radio.checked = false;
  });

  const btnDownload = document.querySelector(".btn-download");
  btnDownload.classList.remove("active");
  const listPenyakitContainer = document.querySelector(".list-penyakit-container");
  listPenyakitContainer.classList.remove("active");

  resultIndex.innerText = "0.00";
  resultStatus.innerText = "";

  resultRadius.innerText = "";
  resultDescription.innerText = "";
  resultSugestion.innerText = "";
  resultMessage.innerText = "";
  disclaimerText.innerText = "";

  titlePenyakit.innerText = "";
  listPenyakit.innerHTML = "";
});

function openPopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("open-popup");

  const headMessage = document.getElementById("head-message");
  headMessage.innerText = "Peringatan !";

  const image = document.getElementById("img-popup");
  image.setAttribute("src", "assets/alert.png");

  const message = document.getElementById("message");
  message.innerText = `Tolong masukkan angka yang valid.`;

  const popupButton = document.getElementById("popup-btn");
  popupButton.addEventListener("click", function () {
    popup.classList.remove("open-popup");
  });
}
