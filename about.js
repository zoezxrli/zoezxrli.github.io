// about.js

window.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("/assets/audio.mp3");
  audio.loop = true;
  audio.volume = 0.4;

  const button = document.createElement("img");
  button.id = "audio-toggle";
  button.src = "/assets/vinyl.png";
  button.alt = "Music Toggle";
  Object.assign(button.style, {
    position: "fixed",
    top: "20px",
    left: "20px",
    zIndex: 9999,
    width: "48px",
    height: "48px",
    cursor: "pointer",
    borderRadius: "50%",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    animation: "spin 4s linear infinite"
  });

  let isPlaying = false;

  const autoplayAudio = () => {
    audio.play().then(() => {
      isPlaying = true;
      button.style.animationPlayState = "running";
    }).catch(err => {
      console.warn("Autoplay failed. Waiting for interaction.", err);
      document.body.addEventListener("click", () => {
        audio.play();
        isPlaying = true;
        button.style.animationPlayState = "running";
      }, { once: true });
    });
  };

  autoplayAudio();

  button.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      button.style.animationPlayState = "running";
      isPlaying = true;
    } else {
      audio.pause();
      button.style.animationPlayState = "paused";
      isPlaying = false;
    }
  });

  document.body.appendChild(button);

  const select = document.createElement("select");
  select.id = "lang-toggle";
  Object.assign(select.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 9999,
    fontSize: "14px",
    padding: "6px 10px",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  });

  const languages = {
    en: "English",
    zh: "中文",
    fr: "Français"
  };

  for (const [val, label] of Object.entries(languages)) {
    const option = document.createElement("option");
    option.value = val;
    option.textContent = label;
    select.appendChild(option);
  }

  document.body.appendChild(select);

  document.querySelectorAll("p, h2").forEach(el => {
    const lines = el.innerHTML.split("<br>");
    if (lines.length > 1) {
      el.dataset.allLines = el.innerHTML;
      el.innerHTML = lines[0];
    }
  });

  select.addEventListener("change", () => {
    const selectedLang = select.value;
    document.querySelectorAll("p, h2").forEach(el => {
      const lines = el.dataset.allLines?.split("<br>");
      if (lines) {
        if (selectedLang === "en") el.innerHTML = lines[0];
        else if (selectedLang === "zh") el.innerHTML = lines[1] || lines[0];
        else if (selectedLang === "fr") el.innerHTML = lines[2] || lines[0];
      }
    });
  });
});

// CSS animation
const style = document.createElement("style");
style.textContent = `
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`;
document.head.appendChild(style);
