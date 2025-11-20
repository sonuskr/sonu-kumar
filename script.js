function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const button = document.querySelector(".download-btn");

  // Hide download button temporarily
  button.style.display = "none";

  html2canvas(document.querySelector(".container"), {
    scale: 2,
    useCORS: true,
    allowTaint: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Sonu_Kumar_Resume.pdf");

    // Show download button again
    button.style.display = "block";
  });
}
