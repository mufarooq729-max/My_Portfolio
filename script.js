/* ============================================================
   PRELOADER
============================================================ */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hide");
    document.body.classList.remove("no-scroll");
  }, 4500);
});
// fallback in case 'load' already fired or is slow
setTimeout(() => {
  document.getElementById("preloader").classList.add("hide");
  document.body.classList.remove("no-scroll");
}, 5500);

/* ============================================================
   STARFIELD
============================================================ */
(function buildStarfield() {
  const field = document.getElementById("starfield");
  const count = window.innerWidth < 700 ? 60 : 130;
  let html = "";
  for (let i = 0; i < count; i++) {
    const size = (Math.random() * 2.2 + 0.6).toFixed(1);
    const top = (Math.random() * 100).toFixed(2);
    const left = (Math.random() * 100).toFixed(2);
    const dur = (Math.random() * 3 + 2).toFixed(2);
    const delay = (Math.random() * 4).toFixed(2);
    html += `<div class="star" style="width:${size}px;height:${size}px;top:${top}%;left:${left}%;animation-duration:${dur}s;animation-delay:${delay}s;"></div>`;
  }
  // faint orbit rings for the space feel
  html += `<div class="orbit-ring" style="width:520px;height:520px;top:-120px;right:-160px;"></div>`;
  html += `<div class="orbit-ring" style="width:760px;height:760px;top:20%;right:-320px;"></div>`;
  html += `<div class="orbit-ring" style="width:380px;height:380px;bottom:-100px;left:-120px;"></div>`;
  field.innerHTML = html;
})();

/* ============================================================
   DATA
============================================================ */
const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Python Developer",
  "AI & ML Enthusiast",
  "React Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Scraping Expert",
  "Mathematics Lover",
  "Open Source Learner",
];

const techMarquee = [
  ["fa-brands fa-react", "React.js"],
  ["fa-brands fa-node-js", "Node.js"],
  ["fa-brands fa-python", "Python"],
  ["fa-brands fa-js", "JavaScript"],
  ["fa-solid fa-leaf", "MongoDB"],
  ["fa-brands fa-html5", "HTML5"],
  ["fa-brands fa-css3-alt", "CSS3"],
  ["fa-brands fa-git-alt", "Git"],
  ["fa-brands fa-github", "GitHub"],
  ["fa-solid fa-bolt", "FastAPI"],
  ["fa-solid fa-database", "MySQL"],
  ["fa-solid fa-wind", "Tailwind CSS"],
];

const projects = [
  {
    title: "Online Food Ordering System",
    live: true,
    desc: "Responsive food ordering platform with order processing APIs and MongoDB-backed data for customers, restaurants and orders.",
    tech: ["HTML", "CSS", "React", "Node", "Express", "MongoDB"],
    // icon:"fa-solid fa-utensils",
    image: "images/M2.png",
    github: "https://github.com/mufarooq729-max/Online-Food-Ordering",
    LinkedIn:
      "https://www.linkedin.com/posts/muhammad-umar-farooq-a0bb76369_nodejs-expressjs-mongodb-ugcPost-7482752066751307776-MOeR/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFt5uSsBqGxAlqqVNy9pnqE6lLijiRPR82o",
  },
  {
    title: "Social Media Platform",
    live: true,
    desc: "Full-stack social app with secure auth, profiles, posts, likes and comments — FastAPI + MongoDB on the backend.",
    tech: ["React", "Node", "Express", "MongoDB", "FastAPI", "TypeScript"],
    // icon:"fa-solid fa-comments",
    image: "images/M3.png",
    github: "https://github.com/mufarooq729-max/Social_Media_Plate_Form",
  },
  {
    title: "This Portfolio",
    live: true,
    desc: "The very site you're looking at — designed and built as a living showcase of my work.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "fa-solid fa-globe",
    image: "images/M4.png",
    github:"https://github.com/mufarooq729-max/My_Portfolio",
  },
  {
    title: "Gallery",
    live: true,
    desc: "The very site you're looking at — designed and built as a living showcase of my work.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "fa-solid fa-globe",
    image: "images/M6.png",
    github:"https://github.com/mufarooq729-max/codealpa_Gallery",
    LinkedIn:
      "https://www.linkedin.com/posts/muhammad-umar-farooq-a0bb76369_codealpha-webdevelopment-frontenddevelopment-ugcPost-7488534325324529664-TW-K/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFt5uSsBqGxAlqqVNy9pnqE6lLijiRPR82o",
  },
  {
    title: "Music Streaming Web App",
    live: true,
    desc: "Spotify-inspired concept with a full audio player, playlists and dark/light mode built in React.",
    tech: ["React", "Node", "MongoDB"],
    // icon: "fa-solid fa-music",
    image: "images/M5.png",
    github:"https://github.com/mufarooq729-max/codealpha_SoundWave",
    LinkedIn:
         "https://lnkd.in/p/ekiZy77V"
  },
  {
    title: "Task Management App",
    live: true,
    desc: "Concept Kanban-style task manager with drag-and-drop and authenticated CRUD.",
    tech: ["React", "Node", "Auth"],
    icon: "fa-solid fa-list-check",
    image: "images/M7.png",
  },
  {
    title: "Web Scraping Tool",
    live: true,
    desc: "Automated data-extraction tool pulling structured data from multiple sites, cleaned and exported via Pandas.",
    tech: ["Python", "BeautifulSoup", "Requests", "Pandas"],
    icon: "fa-solid fa-spider",
    github: "https://github.com/mufarooq729-max/web-scraping",
  },
  {
    title: "AI Chatbot",
    live: false,
    desc: "Concept for a modern chat UI wired to an LLM API with a Python + FastAPI backend.",
    tech: ["Python", "FastAPI"],
    icon: "fa-solid fa-robot",
  },
  {
    title: "Weather Dashboard",
    live: false,
    desc: "Concept dashboard pulling real-time weather with animated condition icons.",
    tech: ["React", "REST API"],
    icon: "fa-solid fa-cloud-sun",
  },
  {
    title: "Expense Tracker",
    live: false,
    desc: "Concept personal-finance tracker with charts, reports and authenticated accounts.",
    tech: ["React", "Charts", "Auth"],
    icon: "fa-solid fa-chart-pie",
  },
];

const timelineData = [
  {
    year: "2024 — Present",
    title: "BS Computer Science",
    org: "UET",
    desc: "Coursework spanning data structures, OOP,DSA, networking basics,Web and applied AI.",
  },
  {
    year: "Ongoing",
    title: "Memeber",
    org: "IEEE Society",
    desc: "Leading tech initiatives, events and peer learning within the society.",
  },
  {
    year: "Project",
    title: "Online Food Ordering System",
    org: "Group Project",
    desc: "Responsive full-stack app with order processing APIs and MongoDB.",
  },
  {
    year: "Project",
    title: "Social Media Platform",
    org: "Group Project",
    desc: "Full-stack app with secure auth, posts, likes and comments.",
  },
  {
    year: "Project",
    title: "Web Scraping Tool",
    org: "Personal Project",
    desc: "Automated data extraction and cleaning pipeline in Python.",
  },
  {
    year: "Project",
    title: "Gallery",
    org: "Personal Project",
    desc: "Responsive Photo Gallery with HTML5,CSS and JavaScript.",
  },
];

const galleryCats = [
  "All",
  "Web Development",
  "Python",
  "React",
  "AI",
  "Certificates",
];

const galleryItems = [
  {
    cat: "Web Development",
    image: "images/M.png",
    ar: "4/5",
  },
  {
    cat: "Python",
    image: "images/M8.png",
    ar: "1/1",
  },
  {
    cat: "React",
    image: "images/M2.png",
    ar: "3/4",
  },
  {
    cat: "AI",
    image: "images/M9.png",
    ar: "1/1",
  },
  {
    cat: "Certificates",
    image: "images/certificate.png",
    ar: "3/4",
  },
  {
    cat: "Web Development",
    image: "images/M6.png",
    ar: "1/1",
  },
  {
    cat: "React",
    image: "images/M3.png",
    ar: "4/5",
  },
  {
    cat: "Python",
    image: "images/M7.png",
    ar: "3/4",
  },
];

const certData = [
  {
    title: "Web Developer Internship",
    issuer: "Arch Technologies",
    image: "images/certificate.png",
  },
  // {title:"Add Certificate Title", issuer:"Issuing Organization", icon:"fa-solid fa-award"},
  // {title:"Add Certificate Title", issuer:"Issuing Organization", icon:"fa-solid fa-medal"},
];

/* ============================================================
   RENDERERS
============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();

// marquee
const marqueeHtml = techMarquee
  .map((t) => `<span><i class="${t[0]}"></i>${t[1]}</span>`)
  .join("");
document.getElementById("marquee-track").innerHTML = marqueeHtml + marqueeHtml;

// projects
const projAngles = ["reveal-left", "reveal-up", "reveal-right"];

document.getElementById("projects-grid").innerHTML = projects
  .map(
    (p, i) => `
  <div class="proj-card tilt ${projAngles[i % 3]}">

    <div class="proj-media">
      <div class="grid-lines"></div>

      ${
        p.image
          ? `<img src="${p.image}" alt="${p.title}" class="proj-image">`
          : `<i class="${p.icon}" style="position:relative;z-index:1;"></i>`
      }

      <span class="proj-badge ${p.live ? "live" : "concept"}">
        ${p.live ? "Live Build" : "Concept"}
      </span>
    </div>

    <div class="proj-body">

      <h4>${p.title}</h4>

      <p>${p.desc}</p>

      <div class="proj-tech">
        ${p.tech.map((t) => `<span>${t}</span>`).join("")}
      </div>

      <div class="proj-links">

        ${
          p.github
            ? `<a href="${p.github}" target="_blank">
                <i class="fa-brands fa-github"></i> Code
              </a>`
            : `<span class="disabled">
                <i class="fa-brands fa-github"></i> Code
              </span>`
        }

        ${
          p.live
            ? `<a href="${p.LinkedIn}" target="_blank">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> View
              </a>`
            : `<span class="disabled">
                <i class="fa-solid fa-clock"></i> Coming Soon
              </span>`
        }

      </div>
    </div>

  </div>
`,
  )
  .join("");

// timeline
document.getElementById("timeline").innerHTML = timelineData
  .map(
    (t, i) => `
  <div class="t-item ${i % 2 === 0 ? "reveal-left" : "reveal-right"}">
    <div class="t-dot"></div>
    <div class="t-card">
      <span class="t-year">${t.year}</span>
      <h4>${t.title}</h4>
      <p>${t.org} — ${t.desc}</p>
    </div>
  </div>
`,
  )
  .join("");

// gallery filters
// ==================== GALLERY FILTERS ====================

document.getElementById("gallery-filters").innerHTML = galleryCats
  .map(
    (c, i) =>
      `<button class="gfilter ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`,
  )
  .join("");

// ==================== GALLERY ITEMS ====================

const galleryAngles = [
  "reveal-left",
  "reveal-up",
  "reveal-right",
  "reveal-rotate",
];

function renderGallery() {
  document.getElementById("gallery-grid").innerHTML = galleryItems
    .map(
      (g, i) => `
        <div 
          class="g-item ${galleryAngles[i % 4]}" 
          data-cat="${g.cat}" 
          style="--ar:${g.ar};"
        >
          <div class="g-inner">

            ${
              g.image
                ? `<img 
                    src="${g.image}" 
                    alt="${g.cat}" 
                    class="gallery-image"
                  >`
                : `<i class="${g.icon}"></i>`
            }

            <span>${g.cat}</span>

          </div>
        </div>
      `,
    )
    .join("");
}

// Render gallery
renderGallery();

// ==================== CERTIFICATES ====================

document.getElementById("cert-grid").innerHTML = certData
  .map(
    (c, i) => `
      <div 
        class="cert-card ${i % 2 === 0 ? "reveal-left" : "reveal-right"}"
        onclick="openCertificate('${c.image}', '${c.title}')"
      >

        <div class="cert-icon">
          <img 
            src="${c.image}" 
            alt="${c.title}" 
            class="cert-image"
          >
        </div>

        <h4>${c.title}</h4>

        <p>${c.issuer}</p>

      </div>
    `,
  )
  .join("");

/* ============================================================
   RESUME (embedded PDF as data URI)
============================================================ */
const pdfBase64 = document.getElementById("pdf-data").textContent.trim();
const pdfDataUri = "data:application/pdf;base64," + pdfBase64;
document.getElementById("view-resume").href = pdfDataUri;

/* ============================================================
   THEME TOGGLE
============================================================ */
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  themeIcon.className =
    next === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
});

/* ============================================================
   HEADER SCROLL STATE + PROGRESS BAR
============================================================ */
const header = document.getElementById("site-header");
const progress = document.getElementById("scroll-progress");
window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    progress.style.width = pct + "%";
    document.getElementById("back-to-top-wrap");
  },
  { passive: true },
);

/* ============================================================
   MOBILE NAV
============================================================ */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  burger.classList.toggle("active");
});
document
  .querySelectorAll(".nav-link")
  .forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open")),
  );

/* ============================================================
   TYPING EFFECT
============================================================ */
const typingEl = document.getElementById("typing-text");
let rIdx = 0,
  cIdx = 0,
  deleting = false;
function typeLoop() {
  const word = roles[rIdx];
  if (!deleting) {
    cIdx++;
    typingEl.textContent = word.slice(0, cIdx);
    if (cIdx === word.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    cIdx--;
    typingEl.textContent = word.slice(0, cIdx);
    if (cIdx === 0) {
      deleting = false;
      rIdx = (rIdx + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 70);
}
typeLoop();

/* ============================================================
   SCROLL REVEAL
============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
function observeReveal(root = document) {
  root
    .querySelectorAll(
      ".reveal, .reveal-stagger, .reveal-left, .reveal-right, .reveal-up, .reveal-rotate",
    )
    .forEach((el) => revealObserver.observe(el));
}
observeReveal();

/* ============================================================
   COUNTERS
============================================================ */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        let cur = 0;
        const step = Math.max(1, Math.round(target / 60));
        const timer = setInterval(() => {
          cur += step;
          if (cur >= target) {
            cur = target;
            clearInterval(timer);
          }
          el.textContent = cur + (target >= 50 ? "+" : "");
        }, 25);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 },
);
document
  .querySelectorAll(".counter-num")
  .forEach((el) => counterObserver.observe(el));

/* ============================================================
   SKILL BARS
============================================================ */
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.w + "%";
        barObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.4 },
);
document.querySelectorAll(".bar-fill").forEach((el) => barObserver.observe(el));

/* ============================================================
   GALLERY FILTER
============================================================ */
document.getElementById("gallery-filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".gfilter");
  if (!btn) return;
  document
    .querySelectorAll(".gfilter")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  const cat = btn.dataset.cat;
  document.querySelectorAll(".g-item").forEach((item) => {
    item.classList.toggle("hidden", cat !== "All" && item.dataset.cat !== cat);
  });
});

/* ============================================================
   LIGHTBOX
============================================================ */
const lightbox = document.getElementById("lightbox");
const lightboxBox = document.getElementById("lightbox-box");
document.getElementById("gallery-grid").addEventListener("click", (e) => {
  const item = e.target.closest(".g-item");
  if (!item) return;
  const icon = item.querySelector("i").className;
  const cat = item.dataset.cat;
  lightboxBox.innerHTML = `<i class="${icon}"></i><span style="font-family:'Space Grotesk',sans-serif;font-size:13px;color:var(--text-dim);text-transform:uppercase;letter-spacing:1px;">${cat}</span>`;
  lightbox.classList.add("open");
});
document
  .getElementById("lightbox-close")
  .addEventListener("click", () => lightbox.classList.remove("open"));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("open");
});

/* ============================================================
   3D TILT ON PROJECT CARDS
============================================================ */
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".tilt").forEach((card) => {
    const r = card.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    ) {
      card.style.transform = "";
      return;
    }
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
  });
});
document.querySelectorAll(".tilt").forEach((card) => {
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* ============================================================
   MAGNETIC BUTTONS
============================================================ */
document.querySelectorAll(".magnetic").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.25;
    const y = (e.clientY - r.top - r.height / 2) * 0.35;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
});

/* ============================================================
   CURSOR GLOW FOLLOWER
============================================================ */
const glow = document.getElementById("cursor-glow");
let mx = 0,
  my = 0,
  gx = 0,
  gy = 0;
window.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});
(function animateGlow() {
  gx += (mx - gx) * 0.12;
  gy += (my - gy) * 0.12;
  glow.style.left = gx + "px";
  glow.style.top = gy + "px";
  requestAnimationFrame(animateGlow);
})();

/* ============================================================
   BACK TO TOP
============================================================ */
document.getElementById("back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================================================
   CONTACT FORM -> mailto
============================================================ */
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("f-name").value;
  const email = document.getElementById("f-email").value;
  const msg = document.getElementById("f-message").value;
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
  window.location.href = `mailto:mufarooq729@gmail.com?subject=${subject}&body=${body}`;
});
function openCertificate(image, title) {
  const modal = document.getElementById("certificate-modal");
  const fullImage = document.getElementById("certificate-full-image");

  fullImage.src = image;
  fullImage.alt = title;

  modal.classList.add("active");

  // Prevent background scrolling
  document.body.style.overflow = "hidden";
}

function closeCertificate() {
  const modal = document.getElementById("certificate-modal");

  modal.classList.remove("active");

  // Restore scrolling
  document.body.style.overflow = "";
}

// Close when clicking outside the certificate
document
  .getElementById("certificate-modal")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closeCertificate();
    }
  });

// Close with ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeCertificate();
  }
});
