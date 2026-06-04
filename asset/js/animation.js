gsap.registerPlugin(ScrollTrigger);

var panels = gsap.utils.toArray(".section");
panels.pop();

panels.forEach((panel, i) => {
  
  // Get the element holding the content inside the panel
  let innerpanel = panel.querySelector(".section-inner");
  
  // Get the Height of the content inside the panel
  let panelHeight = innerpanel.offsetHeight;
  console.log(panelHeight)
  
  // Get the window height
  let windowHeight = window.innerHeight;
  
  let difference = panelHeight - windowHeight;
  
  // ratio (between 0 and 1) representing the portion of the overall animation that's for the fake-scrolling. We know that the scale & fade should happen over the course of 1 windowHeight, so we can figure out the ratio based on how far we must fake-scroll
  let fakeScrollRatio = difference > 0 ? (difference / (difference + windowHeight)) : 0;
  
  // if we need to fake scroll (because the panel is taller than the window), add the appropriate amount of margin to the bottom so that the next element comes in at the proper time.
  if (fakeScrollRatio) {
    panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
  }
  
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger: panel,
      start: "bottom bottom",
      end: () => fakeScrollRatio ? `+=${innerpanel.offsetHeight}` : "bottom top",
      pinSpacing: false,
      pin: true,
      scrub: true
    }
  });
  
  // fake scroll. We use 1 because that's what the rest of the timeline consists of (0.9 scale + 0.1 fade)
  if (fakeScrollRatio) {
    tl.to(innerpanel, {yPercent:-100, y: window.innerHeight, duration: 1 / (1 - fakeScrollRatio) - 1, ease: "none"});
  }
  tl.fromTo(panel, {scale:1, opacity:1}, {scale: 0.7, opacity: 0.5, duration: 0.9})
    .to(panel, {opacity:0, duration: 0.1});
});

gsap.registerPlugin(SplitText);

console.clear();

document.fonts.ready.then(() => {
  gsap.set(".split", { opacity: 1 });

  let split;
  SplitText.create(".split", {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
    onSplit: (self) => {
      split = gsap.from(self.lines, {
        duration: 0.6,
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
      });
      return split;
    }
  });

  document.querySelector("button").addEventListener("click", (e) => {
    split.timeScale(0.2).play(0);
  });
});
