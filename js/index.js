// console.log("Tasukete Cody onegai");
// console.log("ofc cutie <3");
$(document).ready(function () {
  console.log("document is ready");
  $("#scrollToWorksSectionButton").click(function () {
    document.querySelector("#myWork").scrollIntoView({
      behavior: "smooth",
    });
  });
});
