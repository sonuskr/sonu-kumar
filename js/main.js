// Analytics tracking
const trackEvent = (action, category = "User Interaction") => {
  console.log(`Analytics: ${category} - ${action}`);
  // Add Google Analytics gtag here if needed
  // gtag('event', action, { event_category: category });
};

// Theme configurations
const themes = {
  blue: {
    primary: "#667eea",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    secondary: "#764ba2",
  },
  red: {
    primary: "#e74c3c",
    gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
    secondary: "#c0392b",
  },
  green: {
    primary: "#2ecc71",
    gradient: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
    secondary: "#27ae60",
  },
  orange: {
    primary: "#f39c12",
    gradient: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)",
    secondary: "#e67e22",
  },
  purple: {
    primary: "#9b59b6",
    gradient: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
    secondary: "#8e44ad",
  },
  dark: {
    primary: "#34495e",
    gradient: "linear-gradient(135deg, #34495e 0%, #2c3e50 100%)",
    secondary: "#2c3e50",
  },
  pink: {
    primary: "#e91e63",
    gradient: "linear-gradient(135deg, #e91e63 0%, #ad1457 100%)",
    secondary: "#ad1457",
  },
  cyan: {
    primary: "#00bcd4",
    gradient: "linear-gradient(135deg, #00bcd4 0%, #0097a7 100%)",
    secondary: "#0097a7",
  },
  deeporange: {
    primary: "#ff5722",
    gradient: "linear-gradient(135deg, #ff5722 0%, #d84315 100%)",
    secondary: "#d84315",
  },
  brown: {
    primary: "#795548",
    gradient: "linear-gradient(135deg, #795548 0%, #5d4037 100%)",
    secondary: "#5d4037",
  },
  bluegrey: {
    primary: "#607d8b",
    gradient: "linear-gradient(135deg, #607d8b 0%, #455a64 100%)",
    secondary: "#455a64",
  },
  lightgreen: {
    primary: "#4caf50",
    gradient: "linear-gradient(135deg, #4caf50 0%, #388e3c 100%)",
    secondary: "#388e3c",
  },
  resume: {
    primary: "#003875",
    gradient: "linear-gradient(135deg, #003875 0%, #002555 100%)",
    secondary: "#ff6b1a",
  },
};

function toggleThemeSelector() {
  const selector = document.getElementById("themeSelector");
  selector.classList.toggle("active");
}

function toggleFontSelector() {
  const selector = document.getElementById("fontSelector");
  selector.classList.toggle("active");
}

function changeFont(fontName) {
  const root = document.documentElement;
  let fontFamily;

  switch (fontName) {
    case "Segoe UI":
      fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
      break;
    case "Arial":
      fontFamily = "Arial, Helvetica, sans-serif";
      break;
    case "Georgia":
      fontFamily = 'Georgia, "Times New Roman", serif';
      break;
    case "Times":
      fontFamily = '"Times New Roman", Times, serif';
      break;
    case "Roboto":
      fontFamily = '"Roboto", sans-serif';
      break;
    case "Open Sans":
      fontFamily = '"Open Sans", sans-serif';
      break;
    default:
      fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
  }

  root.style.setProperty("--font-family", fontFamily);

  // Update active font indicator
  document.querySelectorAll(".font-option").forEach((option) => {
    option.classList.remove("active");
  });
  document.querySelector(`[data-font="${fontName}"]`).classList.add("active");

  // Save font preference
  localStorage.setItem("selectedFont", fontName);
}

function changeTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;
  const root = document.documentElement;

  root.style.setProperty("--primary-color", theme.primary);
  root.style.setProperty("--primary-gradient", theme.gradient);
  root.style.setProperty("--secondary-color", theme.secondary);

  // Update active theme indicator
  document.querySelectorAll(".theme-color").forEach((color) => {
    color.classList.remove("active");
  });
  const themeElement = document.querySelector(`[data-theme="${themeName}"]`);
  if (themeElement) themeElement.classList.add("active");

  // Save theme preference
  localStorage.setItem("selectedTheme", themeName);
}

// Initialize theme and font selectors
document.addEventListener("DOMContentLoaded", function () {
  // Load saved theme
  const savedTheme = localStorage.getItem("selectedTheme") || "blue";
  changeTheme(savedTheme);

  // Load saved font
  const savedFont = localStorage.getItem("selectedFont") || "Segoe UI";
  changeFont(savedFont);

  // Add click handlers to theme colors
  document.querySelectorAll(".theme-color").forEach((color) => {
    color.addEventListener("click", function () {
      changeTheme(this.dataset.theme);
    });
  });

  // Add click handlers to font options
  document.querySelectorAll(".font-option").forEach((option) => {
    option.addEventListener("click", function () {
      changeFont(this.dataset.font);
    });
  });

  // Close selectors when clicking outside
  document.addEventListener("click", function (e) {
    const themeSelector = document.getElementById("themeSelector");
    const fontSelector = document.getElementById("fontSelector");
    const themeToggle = document.querySelector(".btn-theme");
    const fontToggle = document.querySelector(".btn-font");

    if (themeSelector && themeToggle && !themeSelector.contains(e.target) && !themeToggle.contains(e.target)) {
      themeSelector.classList.remove("active");
    }

    if (fontSelector && fontToggle && !fontSelector.contains(e.target) && !fontToggle.contains(e.target)) {
      fontSelector.classList.remove("active");
    }
  });
});

function createResume() {
  window.location.href = "resume-builder.html";
}

function downloadPDF() {
  if (!window.jspdf || !window.html2canvas) {
    alert('PDF generation libraries not loaded');
    return;
  }
  
  try {
    const { jsPDF } = window.jspdf;
    const controlButtons = document.querySelector(".control-buttons");
    const themeSelector = document.getElementById("themeSelector");
    const fontSelector = document.getElementById("fontSelector");
    const container = document.querySelector(".container");
    const body = document.body;
    
    if (!container) {
      alert('Container element not found');
      return;
    }

  // Store original styles
  const originalBorderRadius = container.style.borderRadius;
  const originalBoxShadow = container.style.boxShadow;
  const originalMargin = container.style.margin;
  const originalWidth = container.style.width;
  const originalMinWidth = container.style.minWidth;
  const originalBodyWidth = body.style.width;
  const originalBodyMinWidth = body.style.minWidth;

  // Hide buttons and selectors temporarily
  controlButtons.style.display = "none";
  themeSelector.style.display = "none";
  fontSelector.style.display = "none";

  // Force desktop layout for PDF generation
  body.style.width = "1200px";
  body.style.minWidth = "1200px";
  container.style.width = "1200px";
  container.style.minWidth = "1200px";
  container.style.borderRadius = "0";
  container.style.boxShadow = "none";
  container.style.margin = "0";

  // Wait for layout to settle
  setTimeout(() => {
    html2canvas(document.querySelector(".container"), {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      width: 1200,
      windowWidth: 1200,
      backgroundColor: "#ffffff",
      letterRendering: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Sonu_Kumar_Senior_Full_Stack_Developer_7_Years_Experience.pdf");

      // Restore original styles
      body.style.width = originalBodyWidth;
      body.style.minWidth = originalBodyMinWidth;
      container.style.width = originalWidth;
      container.style.minWidth = originalMinWidth;
      container.style.borderRadius = originalBorderRadius;
      container.style.boxShadow = originalBoxShadow;
      container.style.margin = originalMargin;

      // Show buttons again
      if (controlButtons) controlButtons.style.display = "flex";
    }).catch((error) => {
      console.error('PDF generation failed:', error);
      alert('Failed to generate PDF');
      // Restore UI state on error
      body.style.width = originalBodyWidth;
      body.style.minWidth = originalBodyMinWidth;
      container.style.width = originalWidth;
      container.style.minWidth = originalMinWidth;
      container.style.borderRadius = originalBorderRadius;
      container.style.boxShadow = originalBoxShadow;
      container.style.margin = originalMargin;
      if (controlButtons) controlButtons.style.display = "flex";
    });
  }, 100);
  } catch (error) {
    console.error('PDF download error:', error);
    alert('PDF download failed');
  }
}
