document.addEventListener("DOMContentLoaded", () => {
    // Shared navigation link configurations
    const primaryLinks = [
        { name: "Home", url: "education.html" },
        { name: "Education", url: "#" },
        { name: "Services", url: "#" },
        { name: "Contact", url: "#" }
    ];

    const secondaryLinks = [
        { name: "FAQ", url: "#" },
        { name: "Support", url: "#" },
        { name: "Documentation", url: "#" }
    ];

    // Helper to dynamically build <ul> menu structures
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

    // Inject links into the Top Header Navigation bar
    const headerNav = document.getElementById("header-navigation");
    if (headerNav) {
        headerNav.appendChild(createNavList(primaryLinks, "primary-nav"));
        headerNav.appendChild(createNavList(secondaryLinks, "secondary-nav"));
    }

    // Inject links into the Left Sidebar Navigation panel
    const sidebarNav = document.getElementById("sidebar-navigation");
    if (sidebarNav) {
        const primarySection = document.createElement("div");
        primarySection.className = "sidebar-section";
        primarySection.innerHTML = "<h3>Primary Navigation</h3>";
        primarySection.appendChild(createNavList(primaryLinks, "sidebar-primary"));

        const secondarySection = document.createElement("div");
        secondarySection.className = "sidebar-section";
        secondarySection.innerHTML = "<h3>Secondary navigation if needed</h3>";
        secondarySection.appendChild(createNavList(secondaryLinks, "sidebar-secondary"));

        sidebarNav.appendChild(primarySection);
        sidebarNav.appendChild(secondarySection);
    }
});
