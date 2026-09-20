document.addEventListener("DOMContentLoaded", () => {
    // Navigation Data Configuration
    const primaryLinks = [
        { name: "Home", url: "index.html" },
        { name: "About", url: "#" },
        { name: "Services", url: "#" },
        { name: "Contact", url: "#" }
    ];

    const secondaryLinks = [
        { name: "FAQ", url: "#" },
        { name: "Support", url: "#" },
        { name: "Docs", url: "#" }
    ];

    // Helper function to build <ul> menus
    function createNavList(links, className) {
        const ul = document.createElement("ul");
        ul.className = `nav-menu ${className}`;
        
        links.forEach(link => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.name;
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        return ul;
    }

    // Inject Navigation into Header
    const headerNav = document.getElementById("header-navigation");
    if (headerNav) {
        headerNav.appendChild(createNavList(primaryLinks, "primary-nav"));
        headerNav.appendChild(createNavList(secondaryLinks, "secondary-nav"));
    }

    // Inject Navigation into Sidebar
    const sidebarNav = document.getElementById("sidebar-navigation");
    if (sidebarNav) {
        const primarySection = document.createElement("div");
        primarySection.className = "sidebar-section";
        primarySection.innerHTML = "<h3>Primary Navigation</h3>";
        primarySection.appendChild(createNavList(primaryLinks, "sidebar-primary"));

        const secondarySection = document.createElement("div");
        secondarySection.className = "sidebar-section";
        secondarySection.innerHTML = "<h3>Secondary Navigation</h3>";
        secondarySection.appendChild(createNavList(secondaryLinks, "sidebar-secondary"));

        sidebarNav.appendChild(primarySection);
        sidebarNav.appendChild(secondarySection);
    }
});
