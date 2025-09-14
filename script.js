document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach(bar => {
    const targetWidth = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = targetWidth + "%";  // پر شدن نوار
      bar.textContent = targetWidth + "%";  // نمایش درصد
    }, 500);
  });
});
