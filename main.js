window.onload = () => {
  console.log("🔥 JS loaded, initializing hover effect...");

  const img1 = new Image();
  const img2 = new Image();
  const disImg = new Image();

  let loaded = 0;

  function checkAllLoaded() {
    loaded++;
    if (loaded === 3) {
      console.log("✅ All images loaded, initializing effect");

      const container = document.querySelector("#gl-container");

      const ratio = img1.naturalWidth / img1.naturalHeight;
      const effect = new hoverEffect({
        parent: container,
        intensity: 0.03, // 更敏感的响应
        image1: img1.src,
        image2: img2.src,
        displacementImage: disImg.src,
        hover: true,
        angle: Math.PI / 15, // 更小角度更自然
        ease: 'Power2.easeOut',
        speedIn: 7.0,   // 更平滑更久的进入
        speedOut: 7.0,  // 更平滑更久的离开
        imagesRatio: ratio
      });

      // ✨ 动态调整 canvas 保持图片比例铺满且不扭曲
      const canvas = container.querySelector("canvas");
      const resizeCanvas = () => {
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        const winRatio = winWidth / winHeight;

        let newWidth, newHeight;

        if (winRatio > ratio) {
          newHeight = winHeight;
          newWidth = newHeight * ratio;
        } else {
          newWidth = winWidth;
          newHeight = newWidth / ratio;
        }

        canvas.style.width = `${newWidth}px`;
        canvas.style.height = `${newHeight}px`;
        canvas.style.position = 'absolute';
        canvas.style.left = '50%';
        canvas.style.top = '50%';
        canvas.style.transform = 'translate(-50%, -50%)';
        canvas.style.objectFit = 'cover'; // 使用 cover 以确保填满但不拉伸
      };

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      console.log("✅ Hover effect initialized.");
    }
  }

  // 设置路径并监听加载
  img1.onload = () => {
    console.log("✅ photo.jpg 加载成功");
    checkAllLoaded();
  };
  img2.onload = () => {
    console.log("✅ drawing.jpg 加载成功");
    checkAllLoaded();
  };
  disImg.onload = () => {
    console.log("✅ dis.jpg 加载成功");
    checkAllLoaded();
  };

  img1.onerror = () => console.error("❌ photo.jpg 加载失败");
  img2.onerror = () => console.error("❌ drawing.jpg 加载失败");
  disImg.onerror = () => console.error("❌ dis.jpg 加载失败");

  img1.src = "assets/drawing.jpg";
  img2.src = "assets/photo.jpg";
  disImg.src = "assets/dis.jpg";
};

document.querySelectorAll('canvas').forEach(c => {
  c.style.border = 'none';
  const canvas = document.querySelector('canvas');
  console.log('WebGL context:', canvas?.getContext('webgl'));
});

window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const vinyl = document.getElementById("vinyl-spin");

  // 自动播放音乐（静音开始，再解除静音）
  function tryPlayMusic() {
    music.muted = true;
    music.play().then(() => {
      console.log("🎵 Music started silently");
      vinyl.classList.remove("paused");

      // 延迟解除静音
      setTimeout(() => {
        music.muted = false;
        console.log("🔊 Music unmuted");
      }, 1000);
    }).catch((err) => {
      console.warn("⚠️ Autoplay blocked. Waiting for user interaction.", err);

      // 用户首次点击后再播放
      document.body.addEventListener("click", () => {
        music.muted = false;
        music.play();
        vinyl.classList.remove("paused");
      }, { once: true });
    });
  }

  tryPlayMusic();

  // 🖱️ 点击黑胶图标 → 仅执行暂停
  document.querySelector(".vinyl-wrapper").addEventListener("click", () => {
    music.pause();
    vinyl.classList.add("paused");

    // 可选：彻底禁用后续播放
    // music.src = "";
    // music.removeAttribute("loop");
  });
});
