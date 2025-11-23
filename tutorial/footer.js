// Footer JavaScript - Dynamic Footer Content
document.addEventListener('DOMContentLoaded', function() {
    // Create footer HTML
    const footerHTML = `
        <footer>
            <div class="container">
                <p>&copy; 2025 Sonu Kumar - Senior Full Stack Developer | Contact: <a href="mailto:skrdeveloper1@gmail.com">skrdeveloper1@gmail.com</a> | <a href="https://www.linkedin.com/in/sonuskr">LinkedIn</a></p>
            </div>
        </footer>
    `;
    
    // Add footer to body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});