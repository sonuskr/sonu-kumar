const { exec } = require("child_process");

// Format all common web files recursively
const command = `npx prettier --write "**/*.{html,css,js,jsx,ts,tsx,json,md}"`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log(stdout);
  console.log("✨ All files formatted successfully!");
});
