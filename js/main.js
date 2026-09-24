// Portfolio Isabelle Martins Cavalcante
// Carrega os módulos HTML e ativa as interações.

const modules = [
  ["header", "components/header.html", "#header"],
  ["hero", "components/hero.html", "#hero"],
  ["marquee", "components/marquee.html", "#marquee"],
  ["sobre", "components/sobre.html", "#sobre"],
  ["experiencia", "components/experiencia.html", "#experiencia"],
  ["projetos", "components/projetos.html", "#projetos"],
  ["habilidades", "components/habilidades.html", "#habilidades"],
  ["contato", "components/contato.html", "#contato"],
  ["footer", "components/footer.html", "#footer"]
];

async function loadModules() {
  for (const [, file, selector] of modules) {
    const target = document.querySelector(selector);
    if (!target) continue;

    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      target.innerHTML = await response.text();
    } catch (error) {
      console.error(`Erro ao carregar ${file}:`, error);
      target.innerHTML = `<p class="module-error">Não foi possível carregar este módulo.</p>`;
    }
  }

  initPortfolio();
}

function initPortfolio() {
  // Barra de progresso
  const progress = document.querySelector(".progress");
  if (progress) {
    window.addEventListener("scroll", () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      progress.style.width = total > 0 ? `${(window.scrollY / total) * 100}%` : "0%";
    });
  }

  // Animações de entrada
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));

  // Filtros dos projetos
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".project");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      const value = button.dataset.filter;

      cards.forEach((card) => {
        const categories = card.dataset.category || "";
        const show = value === "all" || categories.includes(value);
        card.classList.toggle("hide", !show);
      });
    });
  });
}

loadModules();
