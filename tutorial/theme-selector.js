// Theme Selector JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Create theme selector HTML
    const themeSelector = document.createElement('div');
    themeSelector.className = 'theme-selector';
    themeSelector.innerHTML = `
        <select id="themeSelect">
            <option value="default">🔵 Blue (Default)</option>
            <option value="dark">🌙 Dark</option>
            <option value="green">🟢 Green</option>
            <option value="purple">🟣 Purple</option>
            <option value="orange">🟠 Orange</option>
        </select>
    `;
    
    // Add to body
    document.body.appendChild(themeSelector);
    
    // Get saved theme or default
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    
    // Apply saved theme
    applyTheme(savedTheme);
    document.getElementById('themeSelect').value = savedTheme;
    
    // Theme change handler
    document.getElementById('themeSelect').addEventListener('change', function(e) {
        const selectedTheme = e.target.value;
        applyTheme(selectedTheme);
        localStorage.setItem('selectedTheme', selectedTheme);
    });
});

function applyTheme(theme) {
    if (theme === 'default') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
}