"use strict";

function initializeTheme() {
    const themeKey = "cv-theme";
    const button = document.getElementById("theme-toggle");
    let theme = "light";

    try {
        if (localStorage.getItem(themeKey) === "dark") {
            theme = "dark";
        }
    } catch {
        theme = "light";
    }

    function applyTheme() {
        document.documentElement.dataset.theme = theme;
        button.setAttribute("aria-pressed", String(theme === "dark"));
        button.title = theme === "dark" ? "Activar modo claro" : "Activar modo oscuro";
    }

    applyTheme();
    button.addEventListener("click", () => {
        theme = theme === "light" ? "dark" : "light";
        applyTheme();

        try {
            localStorage.setItem(themeKey, theme);
        } catch {
            return;
        }
    });
    button.hidden = false;
}

initializeTheme();
