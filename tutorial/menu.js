// Navigation menu generator
function generateNavMenu(activePage = "") {
  // Detect if we're in a subdirectory
  const subdirs = ["/java/", "/spring/", "/data-structure/", "/programs/", "/interview/"];
  const isInSubdir = subdirs.some(dir => window.location.pathname.includes(dir));
  const basePath = isInSubdir ? "../" : "";

  return `
        <div class="container">
            <div class="nav-container">
                <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
                    ☰
                </button>
                <ul class="nav-links" id="navLinks">
                    <li><a href="${basePath}tutorial-index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="#">Data Structures</a>
                        <div class="dropdown-content">
                            <a href="${basePath}data-structure/array-learning.html">Array</a>
                            <a href="${basePath}data-structure/string-learning.html">String</a>
                            <a href="${basePath}data-structure/linkedlist-learning.html">Linked List</a>
                            <a href="${basePath}data-structure/stack-learning.html">Stack</a>
                            <a href="${basePath}data-structure/queue-learning.html">Queue</a>
                            <a href="${basePath}data-structure/tree-learning.html">Tree</a>
                            <a href="${basePath}data-structure/graph-learning.html">Graph</a>
                            <a href="${basePath}data-structure/hashmap-learning.html">HashMap</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Java</a>
                        <div class="dropdown-content">
                            <a href="${basePath}java/java-learning.html">Java Fundamentals</a>
                            <a href="${basePath}java/java-oop.html">Java OOP</a>
                            <a href="${basePath}java/java-exception.html">Java Exception</a>
                            <a href="${basePath}java/java-8.html">Java 8</a>
                            <a href="${basePath}java/java-collection.html">Java Collections</a>
                            <a href="${basePath}java/java-interview.html">Java Interview</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Spring</a>
                        <div class="dropdown-content">
                            <a href="${basePath}spring/spring-core-learning.html">Spring Core</a>
                            <a href="${basePath}spring/spring-mvc-learning.html">Spring MVC</a>
                            <a href="${basePath}spring/spring-boot-learning.html">Spring Boot</a>
                            <a href="${basePath}spring/spring-security-learning.html">Spring Security</a>
                            <a href="${basePath}spring/spring-interview.html">Spring Interview</a>
                        </div>
                    </li>
                    <li><a href="${basePath}javascript-learning.html"${
    activePage === "javascript" ? ' class="active"' : ""
  }>JavaScript</a></li>
                    <li><a href="${basePath}typescript-learning.html"${
    activePage === "typescript" ? ' class="active"' : ""
  }>TypeScript</a></li>
                    <li><a href="${basePath}angular-learning.html"${
    activePage === "angular" ? ' class="active"' : ""
  }>Angular</a></li>
                    <li><a href="${basePath}react-learning.html"${
    activePage === "react" ? ' class="active"' : ""
  }>React</a></li>
                    <li class="dropdown">
                        <a href="#">Programs</a>
                        <div class="dropdown-content">
                            <a href="${basePath}programs/array-programs.html">Array Programs</a>
                            <a href="${basePath}programs/string-programs.html">String Programs</a>
                            <a href="${basePath}programs/logical-programs.html">Logical Programs</a>
                            <a href="${basePath}programs/pattern-programs.html">Pattern Programs</a>
                            <a href="${basePath}programs/number-programs.html">Number Programs</a>
                            <a href="${basePath}programs/sorting-programs.html">Sorting Programs</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#">Interview</a>
                        <div class="dropdown-content">
                            <a href="${basePath}interview/hackerrank-programs.html">HackerRank Programs</a>
                            <a href="${basePath}interview/leetcode-programs.html">LeetCode Programs</a>
                            <a href="${basePath}interview/coding-interview.html">Coding Interview</a>
                            <a href="${basePath}interview/system-design.html">System Design</a>
                            <a href="${basePath}interview/behavioral-interview.html">Behavioral Interview</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `;
}

// Menu functionality
function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function initializeMenuEvents() {
  // Close mobile menu and dropdowns when clicking outside
  document.addEventListener("click", function (event) {
    const nav = document.querySelector("nav");
    const navLinks = document.getElementById("navLinks");

    if (nav && navLinks && !nav.contains(event.target)) {
      navLinks.classList.remove("active");
      // Close all dropdowns
      document
        .querySelectorAll(".dropdown.active")
        .forEach(function (dropdown) {
          dropdown.classList.remove("active");
        });
    }
  });

  // Handle dropdown clicks on mobile
  document.querySelectorAll(".dropdown > a").forEach(function (dropdownLink) {
    dropdownLink.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();

        // Close other dropdowns first
        document.querySelectorAll(".dropdown.active").forEach(
          function (dropdown) {
            if (dropdown !== this.parentElement) {
              dropdown.classList.remove("active");
            }
          }.bind(this)
        );

        // Toggle current dropdown
        if (this.parentElement) {
          this.parentElement.classList.toggle("active");
        }
      }
    });
  });

  // Close dropdowns when clicking on dropdown items
  document.querySelectorAll(".dropdown-content a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        // Close the dropdown
        this.closest(".dropdown").classList.remove("active");
        // Close the mobile menu
        document.getElementById("navLinks").classList.remove("active");
      }
    });
  });
}

// Initialize menu on page load
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  if (nav && typeof window.activePage !== "undefined") {
    nav.innerHTML = generateNavMenu(window.activePage);
    initializeMenuEvents();
  }
});
