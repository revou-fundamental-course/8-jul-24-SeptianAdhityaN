// Deklarasi variable yang dibutuhkan dari HTML
const btnResult = document.querySelector("#btn-result");
const btnReset = document.querySelector("#btn-reset");
const resultIndex = document.querySelector("#result-index");
const resultStatus = document.querySelector("#result-status");

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
      'Status berat badan adalah "Kekurangan berat badan"';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultStatus.innerText = 'Status berat badan adalah "Normal (ideal)"';
  } else if (bmi >= 25 && bmi <= 29.9) {
    resultStatus.innerText =
      'Status berat badan adalah "Kelebihan berat badan"';
  } else {
    resultStatus.innerText = 'Status berat badan adalah "Kegemukan (Obesitas)"';
  }
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

  resultIndex.innerText = "0.00";
  resultStatus.innerText = "Status berat badan adalah";
});

function openPopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("open-popup");

  const headMessage = document.getElementById("head-message");
  headMessage.innerText = "Peringatan !";

  const image = document.getElementById("img-popup");
  image.setAttribute("src", "assets/alert.png");

  const message = document.getElementById("message");
  message.innerText = `Tolong masukkan angka yang valid`;

  const popupButton = document.getElementById("popup-btn");
  popupButton.addEventListener("click", function () {
    popup.classList.remove("open-popup");
  });
}
