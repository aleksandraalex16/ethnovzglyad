const nominations = {
  bridges: {
    number: "01",
    title: "Мосты единства",
    accent: "единства",
    description: "Люди рядом: взаимопонимание, дружба и общность культур в повседневной жизни.",
    cover: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
    works: [
      {
        place: "I место",
        title: "Один круг",
        author: "Алина Каримова",
        location: "Республика Татарстан",
        description: "Праздничный хоровод объединяет поколения и напоминает: общий ритм рождается из множества разных голосов.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=88",
      },
      {
        place: "II место",
        title: "Дорога навстречу",
        author: "Михаил Ветров",
        location: "Республика Алтай",
        description: "Случайная встреча на горной дороге превращается в короткую историю о доверии и открытости.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=88",
      },
      {
        place: "III место",
        title: "Общий горизонт",
        author: "Дарья Соколова",
        location: "Красноярский край",
        description: "Когда люди смотрят в одну сторону, расстояния между ними перестают иметь значение.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1800&q=88",
      },
    ],
  },
  portrait: {
    number: "02",
    title: "Портрет современности",
    accent: "современности",
    description: "Герои нашего времени, в чьих лицах соединяются корни, характер и движение вперед.",
    cover: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
    works: [
      {
        place: "I место",
        title: "Свет внутри",
        author: "София Ермакова",
        location: "Республика Дагестан",
        description: "Тихий и честный взгляд героини становится рассказом о внутренней силе нового поколения.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=88",
      },
      {
        place: "II место",
        title: "Мастер",
        author: "Алексей Горин",
        location: "Удмуртская Республика",
        description: "Портрет человека, для которого ручной труд остается языком достоинства и связи со своей землей.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1800&q=88",
      },
      {
        place: "III место",
        title: "Новый день",
        author: "Вера Пак",
        location: "Приморский край",
        description: "Героиня на пороге нового дня: открытая миру, уверенная в себе и бережно хранящая память семьи.",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=88",
      },
    ],
  },
  tradition: {
    number: "03",
    title: "Живая традиция",
    accent: "традиция",
    description: "Обычаи и ремесла, которые не остаются в прошлом, а продолжаются в руках современников.",
    cover: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1400&q=85",
    works: [
      {
        place: "I место",
        title: "Нити памяти",
        author: "Елена Юсупова",
        location: "Республика Башкортостан",
        description: "Узор возникает стежок за стежком, сохраняя в цвете семейную память и язык родной культуры.",
        image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1800&q=88",
      },
      {
        place: "II место",
        title: "Тепло очага",
        author: "Илья Осипов",
        location: "Архангельская область",
        description: "Домашний ритуал, знакомый многим поколениям, продолжается без постановки и лишних слов.",
        image: "https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?auto=format&fit=crop&w=1800&q=88",
      },
      {
        place: "III место",
        title: "Голос предков",
        author: "Мария Хомушку",
        location: "Республика Тыва",
        description: "Музыка соединяет прошлое и настоящее, превращая древнее звучание в живой разговор со слушателем.",
        image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&w=1800&q=88",
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
          <img class="hero-image-main" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1300&q=88" alt="">
          <img class="hero-image-small" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=88" alt="">
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
  document.querySelector(".author").textContent = work.author;
  document.querySelector(".location").textContent = work.location;
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
