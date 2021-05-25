let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .fromTo(".bildbra", { opacity: 1 }, { opacity: 0, duration: 1 })
  .fromTo(".bild1", { opacity: 1 }, { opacity: 0, duration: 1 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
