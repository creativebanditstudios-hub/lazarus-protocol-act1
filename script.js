"use strict";

(() => {
  const player = document.getElementById("film-player");
  const watchLink = document.getElementById("watch-link");
  const theatreToggle = document.getElementById("theatre-toggle");
  const shareButton = document.getElementById("share-button");
  const status = document.getElementById("player-status");
  const errorNotice = document.getElementById("playback-error");
  const shareAddress = document.getElementById("share-address");

  watchLink.addEventListener("click", () => {
    player.focus({ preventScroll: true });
    const playback = player.play();
    if (playback && typeof playback.catch === "function") {
      playback.catch(() => {
        if (!player.error) status.textContent = "Press play in the video player to begin.";
      });
    }
  });

  theatreToggle.addEventListener("click", () => {
    const enabled = theatreToggle.getAttribute("aria-pressed") !== "true";
    theatreToggle.setAttribute("aria-pressed", String(enabled));
    theatreToggle.querySelector("span").textContent = enabled ? "Exit theatre" : "Theatre mode";
    document.body.classList.toggle("theatre", enabled);
    if (enabled) document.getElementById("watch").scrollIntoView({ block: "start" });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("theatre")) {
      theatreToggle.click();
      theatreToggle.focus({ preventScroll: true });
    }
  });

  shareButton.addEventListener("click", async () => {
    const url = new URL(window.location.href);
    url.hash = "watch";
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(url.href);
      shareAddress.hidden = true;
      status.textContent = "Film link copied.";
    } catch {
      shareAddress.value = url.href;
      shareAddress.hidden = false;
      shareAddress.focus();
      shareAddress.select();
      status.textContent = "Copy the selected address to share the film.";
    }
  });

  const showPlaybackError = () => { errorNotice.hidden = false; };
  player.addEventListener("error", showPlaybackError);
  player.querySelector("source").addEventListener("error", showPlaybackError);
  player.addEventListener("loadeddata", () => { errorNotice.hidden = true; });
  player.addEventListener("playing", () => {
    errorNotice.hidden = true;
    status.textContent = "";
  });
})();
