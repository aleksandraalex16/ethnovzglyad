const nominations = {
  bridges: {
    number: "01",
    title: "Мосты единства",
    accent: "единства",
    description: "Люди рядом: взаимопонимание, дружба и общность культур в повседневной жизни.",
    cover: "assets/bridges-1a.jpg",
    works: [
      {
        place: "I место",
        title: "Казачий круг",
        description: "Праздничный круг объединяет поколения, движение и настроение общего народного праздника.",
        image: "assets/bridges-1a.jpg",
      },
      {
        place: "I место",
        title: "Фестиваль тюркской культуры в Евпатории",
        description: "Музыка, встреча и праздничное пространство становятся живым мостом между культурами.",
        image: "assets/bridges-1b.jpg",
      },
      {
        place: "II место",
        title: "Хранительница традиций",
        description: "Портрет хранительницы культуры среди участников праздника и традиционных костюмов.",
        image: "assets/bridges-2.jpg",
      },
      {
        place: "III место",
        title: "DSC_0023",
        description: "Взгляд на культурное многообразие и живое общение людей на общем празднике.",
        image: "assets/bridges-3.jpg",
      },
    ],
  },
  portrait: {
    number: "02",
    title: "Портрет современности",
    accent: "современности",
    description: "Герои нашего времени, в чьих лицах соединяются корни, характер и движение вперед.",
    cover: "assets/portrait-1a.jpg",
    works: [
      {
        place: "I место",
        title: "Удмуртский костюм",
        description: "Традиционный костюм раскрывается через детали, цвет и выразительный образ современного человека.",
        image: "assets/portrait-1a.jpg",
      },
      {
        place: "I место",
        title: "Семейный портрет крымских татар",
        description: "Семейная сцена в традиционных костюмах рассказывает о преемственности и близости поколений.",
        image: "assets/portrait-1b.jpg",
      },
      {
        place: "II место",
        title: "Светлый праздник",
        description: "Праздничный портрет передает тепло семейного события и красоту национального костюма.",
        image: "assets/portrait-2.jpg",
      },
      {
        place: "III место",
        title: "Казаки",
        description: "Образ людей, в котором современная жизнь встречается с характером и исторической памятью.",
        image: "assets/portrait-3.jpg",
      },
    ],
  },
  tradition: {
    number: "03",
    title: "Живая традиция",
    accent: "традиция",
    description: "Обычаи и ремесла, которые не остаются в прошлом, а продолжаются в руках современников.",
    cover: "assets/tradition-1.jpg",
    works: [
      {
        place: "I место",
        title: "Кукла-мотанка",
        description: "Традиционная кукла, созданная вручную, хранит память о ремесле и передаче знаний.",
        image: "assets/tradition-1.jpg",
      },
      {
        place: "II место",
        title: "Степной конь",
        description: "Образ из природных материалов продолжает традицию обережных фигур и народного творчества.",
        image: "assets/tradition-2.jpg",
      },
      {
        place: "III место",
        title: "Колядники",
        description: "Зимняя традиция оживает в костюмах, куклах и праздничном образе, собранном вручную.",
        image: "assets/tradition-3.jpg",
      },
    ],
  },
};

const app = document.querySelector("#app");
const menuButton = document.querySelector(".menu-toggle");
let activeIndex = 0;
let touchStartX = 0;

function homeTemplate() {
  const cards = Object.entries(nominations)
    .map(
      ([route, item]) => `
        <a class="nomination-card" href="#${route}">
          <img src="${item.cover}" alt="" loading="lazy">
          <span class="card-number">${item.number}</span>
          <div>
            <h3>${item.title}</h3>
            <p><span>Смотреть работы</span><span>→</span></p>
          </div>
        </a>`,
    )
    .join("");

  return `
    <div class="fade-in">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Открытый фотоконкурс</p>
          <h1>Этно<i>V</i>згляд</h1>
          <p class="hero-subtitle">Онлайн-выставка победителей и призеров</p>
          <p class="hero-intro">Фотографии, в которых традиции встречаются с современностью, а уникальность каждого становится частью общего взгляда.</p>
          <a class="primary-button" href="#bridges">Смотреть выставку</a>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <img class="hero-image-main" src="assets/bridges-1a.jpg" alt="Фотография-победитель «Казачий круг»">
          <img class="hero-image-small" src="assets/tradition-1.jpg" alt="Фотография-победитель «Кукла-мотанка»">
          <div class="hero-roundel">Год единства<br>народов России</div>
        </div>
      </section>
      <section class="nomination-list">
        <div class="section-heading">
          <h2>Три взгляда на культуру и человека</h2>
          <p>Выберите номинацию, чтобы увидеть работы победителей и призеров конкурса.</p>
        </div>
        <div class="nomination-grid">${cards}</div>
      </section>
    </div>`;
}

function galleryTemplate(route) {
  const item = nominations[route];
  const title = item.title.replace(item.accent, `<span>${item.accent}</span>`);
  return `
    <section class="gallery-page fade-in">
      <div class="gallery-heading">
        <div>
          <p class="eyebrow">Номинация ${item.number}</p>
          <h1>${title}</h1>
        </div>
        <p>${item.description}</p>
      </div>
      <div class="gallery-shell">
        <div>
          <div class="photo-stage" aria-live="polite">
            <img id="active-photo" src="" alt="">
            <span class="photo-count"></span>
            <button class="gallery-control prev" type="button" aria-label="Предыдущая фотография">←</button>
            <button class="gallery-control next" type="button" aria-label="Следующая фотография">→</button>
          </div>
        </div>
        <aside class="artwork-info">
          <p class="place-label"></p>
          <h2></h2>
          <p class="author"></p>
          <p class="location"></p>
          <p class="artwork-description"></p>
          <div class="thumbnail-strip" aria-label="Выбор фотографии"></div>
          <p class="gallery-hint">Листайте стрелками или свайпом</p>
        </aside>
      </div>
    </section>`;
}

function updateGallery(route, nextIndex) {
  const works = nominations[route].works;
  activeIndex = (nextIndex + works.length) % works.length;
  const work = works[activeIndex];
  const photo = document.querySelector("#active-photo");

  photo.style.animation = "none";
  photo.offsetHeight;
  photo.src = work.image;
  photo.alt = `${work.title}, автор ${work.author}`;
  photo.style.animation = "";

  document.querySelector(".photo-count").textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(works.length).padStart(2, "0")}`;
  document.querySelector(".place-label").textContent = work.place;
  document.querySelector(".artwork-info h2").textContent = `«${work.title}»`;
  document.querySelector(".author").textContent = "Работа-победитель";
  document.querySelector(".location").textContent = "Открытый фотоконкурс «ЭтноVзгляд»";
  document.querySelector(".artwork-description").textContent = work.description;
  document.querySelectorAll(".thumbnail").forEach((thumb, index) => {
    thumb.classList.toggle("active", index === activeIndex);
    thumb.setAttribute("aria-current", index === activeIndex ? "true" : "false");
  });
}

function initGallery(route) {
  const works = nominations[route].works;
  const strip = document.querySelector(".thumbnail-strip");
  strip.innerHTML = works
    .map(
      (work, index) => `
        <button class="thumbnail" type="button" data-index="${index}" aria-label="Открыть работу «${work.title}»">
          <img src="${work.image}" alt="" loading="lazy">
        </button>`,
    )
    .join("");

  document.querySelector(".prev").addEventListener("click", () => updateGallery(route, activeIndex - 1));
  document.querySelector(".next").addEventListener("click", () => updateGallery(route, activeIndex + 1));
  strip.addEventListener("click", (event) => {
    const button = event.target.closest(".thumbnail");
    if (button) updateGallery(route, Number(button.dataset.index));
  });

  const stage = document.querySelector(".photo-stage");
  stage.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  stage.addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) updateGallery(route, activeIndex + (distance < 0 ? 1 : -1));
  }, { passive: true });

  updateGallery(route, 0);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
}

function render() {
  const route = location.hash.slice(1);
  const isGallery = Object.hasOwn(nominations, route);
  activeIndex = 0;
  app.innerHTML = isGallery ? galleryTemplate(route) : homeTemplate();

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === route);
  });

  closeMenu();
  window.scrollTo({ top: 0, behavior: "instant" });
  if (isGallery) initGallery(route);
}

menuButton.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

window.addEventListener("hashchange", render);
window.addEventListener("keydown", (event) => {
  const route = location.hash.slice(1);
  if (!Object.hasOwn(nominations, route)) return;
  if (event.key === "ArrowLeft") updateGallery(route, activeIndex - 1);
  if (event.key === "ArrowRight") updateGallery(route, activeIndex + 1);
});

render();
