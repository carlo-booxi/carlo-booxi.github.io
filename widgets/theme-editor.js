// Theme Editor JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme editor
    initializeThemeEditor();
});

function initializeThemeEditor() {
    // Get all control elements
    const primaryColor = document.getElementById('primaryColor');
    const primaryColorHex = document.getElementById('primaryColorHex');
    const secondaryColor = document.getElementById('secondaryColor');
    const secondaryColorHex = document.getElementById('secondaryColorHex');
    const accentColor = document.getElementById('accentColor');
    const accentColorHex = document.getElementById('accentColorHex');
    const fontFamily = document.getElementById('fontFamily');
    const fontSize = document.getElementById('fontSize');
    const fontSizeValue = document.getElementById('fontSizeValue');
    const borderRadius = document.getElementById('borderRadius');
    const borderRadiusValue = document.getElementById('borderRadiusValue');
    const padding = document.getElementById('padding');
    const paddingValue = document.getElementById('paddingValue');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const resetBtn = document.getElementById('resetTheme');
    const exportBtn = document.getElementById('exportTheme');
    const presetButtons = document.querySelectorAll('.preset-btn');
    
    const widgetPreview = document.getElementById('widgetPreview');
    const bookingWidget = document.querySelector('.booking-widget');
    
    // Color pickers sync
    primaryColor.addEventListener('input', function() {
        primaryColorHex.value = this.value;
        updateTheme();
    });
    
    primaryColorHex.addEventListener('input', function() {
        if (/^#[0-9A-F]{6}$/i.test(this.value)) {
            primaryColor.value = this.value;
            updateTheme();
        }
    });
    
    secondaryColor.addEventListener('input', function() {
        secondaryColorHex.value = this.value;
        updateTheme();
    });
    
    secondaryColorHex.addEventListener('input', function() {
        if (/^#[0-9A-F]{6}$/i.test(this.value)) {
            secondaryColor.value = this.value;
            updateTheme();
        }
    });
    
    accentColor.addEventListener('input', function() {
        accentColorHex.value = this.value;
        updateTheme();
    });
    
    accentColorHex.addEventListener('input', function() {
        if (/^#[0-9A-F]{6}$/i.test(this.value)) {
            accentColor.value = this.value;
            updateTheme();
        }
    });
    
    // Typography controls
    fontFamily.addEventListener('change', updateTheme);
    
    fontSize.addEventListener('input', function() {
        fontSizeValue.textContent = this.value + 'px';
        updateTheme();
    });
    
    // Spacing controls
    borderRadius.addEventListener('input', function() {
        borderRadiusValue.textContent = this.value + 'px';
        updateTheme();
    });
    
    padding.addEventListener('input', function() {
        paddingValue.textContent = this.value + 'px';
        updateTheme();
    });
    
    // Dark mode toggle
    darkModeToggle.addEventListener('change', function() {
        widgetPreview.classList.toggle('dark-mode', this.checked);
    });
    
    // Reset button
    resetBtn.addEventListener('click', function() {
        applyPreset('default');
    });
    
    // Export button
    exportBtn.addEventListener('click', exportTheme);
    
    // Preset buttons
    presetButtons.forEach(button => {
        button.addEventListener('click', function() {
            const preset = this.dataset.preset;
            applyPreset(preset);
            
            // Update active state
            presetButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Update theme function
    function updateTheme() {
        const theme = {
            primary: primaryColor.value,
            secondary: secondaryColor.value,
            accent: accentColor.value,
            fontFamily: fontFamily.value,
            fontSize: fontSize.value + 'px',
            borderRadius: borderRadius.value + 'px',
            padding: padding.value + 'px'
        };
        
        // Apply theme to widget
        bookingWidget.style.setProperty('--widget-primary', theme.primary);
        bookingWidget.style.setProperty('--widget-secondary', theme.secondary);
        bookingWidget.style.setProperty('--widget-accent', theme.accent);
        bookingWidget.style.fontFamily = theme.fontFamily;
        bookingWidget.style.setProperty('--widget-font-size', theme.fontSize);
        bookingWidget.style.setProperty('--widget-radius', theme.borderRadius);
        bookingWidget.style.setProperty('--widget-padding', theme.padding);
    }
    
    // Preset themes
    function applyPreset(presetName) {
        const presets = {
            default: {
                primary: '#4f60ff',
                secondary: '#8b5cf6',
                accent: '#10b981',
                fontFamily: 'Inter',
                fontSize: 16,
                borderRadius: 8,
                padding: 16
            },
            modern: {
                primary: '#6366f1',
                secondary: '#8b5cf6',
                accent: '#06b6d4',
                fontFamily: 'Inter',
                fontSize: 15,
                borderRadius: 16,
                padding: 20
            },
            classic: {
                primary: '#2563eb',
                secondary: '#7c3aed',
                accent: '#059669',
                fontFamily: 'Arial',
                fontSize: 16,
                borderRadius: 4,
                padding: 14
            },
            vibrant: {
                primary: '#dc2626',
                secondary: '#d946ef',
                accent: '#f59e0b',
                fontFamily: 'Poppins',
                fontSize: 17,
                borderRadius: 12,
                padding: 18
            }
        };
        
        const preset = presets[presetName];
        if (!preset) return;
        
        // Update controls
        primaryColor.value = preset.primary;
        primaryColorHex.value = preset.primary;
        secondaryColor.value = preset.secondary;
        secondaryColorHex.value = preset.secondary;
        accentColor.value = preset.accent;
        accentColorHex.value = preset.accent;
        fontFamily.value = preset.fontFamily;
        fontSize.value = preset.fontSize;
        fontSizeValue.textContent = preset.fontSize + 'px';
        borderRadius.value = preset.borderRadius;
        borderRadiusValue.textContent = preset.borderRadius + 'px';
        padding.value = preset.padding;
        paddingValue.textContent = preset.padding + 'px';
        
        // Apply theme
        updateTheme();
    }
    
    // Export theme
    function exportTheme() {
        const theme = {
            colors: {
                primary: primaryColor.value,
                secondary: secondaryColor.value,
                accent: accentColor.value
            },
            typography: {
                fontFamily: fontFamily.value,
                fontSize: fontSize.value + 'px'
            },
            spacing: {
                borderRadius: borderRadius.value + 'px',
                padding: padding.value + 'px'
            },
            timestamp: new Date().toISOString()
        };
        
        // Create downloadable JSON
        const dataStr = JSON.stringify(theme, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'booxi-theme-' + Date.now() + '.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        // Show success message
        const originalText = exportBtn.innerHTML;
        exportBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Theme Exported!
        `;
        
        setTimeout(() => {
            exportBtn.innerHTML = originalText;
        }, 2000);
    }
    
    // Initialize with default theme
    updateTheme();
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + E to export
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        document.getElementById('exportTheme').click();
    }
    
    // Ctrl/Cmd + R to reset
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        document.getElementById('resetTheme').click();
    }
});

// Add drag and drop for theme import
const widgetPreview = document.getElementById('widgetPreview');
if (widgetPreview) {
    widgetPreview.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.opacity = '0.5';
    });
    
    widgetPreview.addEventListener('dragleave', function() {
        this.style.opacity = '1';
    });
    
    widgetPreview.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.opacity = '1';
        
        const file = e.dataTransfer.files[0];
        if (file && file.type === 'application/json') {
            const reader = new FileReader();
            reader.onload = function(event) {
                try {
                    const theme = JSON.parse(event.target.result);
                    applyImportedTheme(theme);
                } catch (error) {
                    alert('Invalid theme file');
                }
            };
            reader.readAsText(file);
        }
    });
}

function applyImportedTheme(theme) {
    if (theme.colors) {
        document.getElementById('primaryColor').value = theme.colors.primary;
        document.getElementById('primaryColorHex').value = theme.colors.primary;
        document.getElementById('secondaryColor').value = theme.colors.secondary;
        document.getElementById('secondaryColorHex').value = theme.colors.secondary;
        document.getElementById('accentColor').value = theme.colors.accent;
        document.getElementById('accentColorHex').value = theme.colors.accent;
    }
    
    if (theme.typography) {
        document.getElementById('fontFamily').value = theme.typography.fontFamily;
        const fontSize = parseInt(theme.typography.fontSize);
        document.getElementById('fontSize').value = fontSize;
        document.getElementById('fontSizeValue').textContent = fontSize + 'px';
    }
    
    if (theme.spacing) {
        const borderRadius = parseInt(theme.spacing.borderRadius);
        const padding = parseInt(theme.spacing.padding);
        document.getElementById('borderRadius').value = borderRadius;
        document.getElementById('borderRadiusValue').textContent = borderRadius + 'px';
        document.getElementById('padding').value = padding;
        document.getElementById('paddingValue').textContent = padding + 'px';
    }
    
    // Trigger theme update
    const event = new Event('change');
    document.getElementById('primaryColor').dispatchEvent(event);
}

