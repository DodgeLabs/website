---
layout: main-wide
title: "Schedule a Zoom, Google Meet, Microsoft Teams, or Phone Call with Roger" 
description: "Schedule virtual meetings or phone calls with Roger, choosing from various durations for Zoom, Google Meet, Microsoft Teams, and phone options to suit your needs."
redirect_from:
  - /schedule/intensives
---

<article class="card">
<header class="card__header" markdown="1">
# Schedule with Roger
</header>
<div class="card__body">
<div id="my-cal-inline-meeting" class="cal-embed" style="width: 100%; overflow: scroll;">
&nbsp;
</div>
</div>
<footer id="cal-fallback-footer" class="card__footer" style="display: none;">
<p><strong>Is the scheduler not loading?</strong></p>
<p>Your browser or network might be blocking this content.</p>
<a href="https://cal.com/rogeramitchell/meeting" class="btn-primary">
Schedule on Cal.com
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
</a>
</footer>
</article>

<script type="text/javascript">
  const isDesktop = window.matchMedia("(min-width: 768px) and (min-height: 600px)").matches;
  const dynamicLayout = isDesktop ? "layout_view" : "month_view";

  (function (C, A, L) {
    let p = function (a, ar) {
      a.q.push(ar);
    };
    let d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  Cal("init", "meeting", { origin: "https://app.cal.com" });

  Cal.ns.meeting("inline", {
    elementOrSelector: "#my-cal-inline-meeting",
    config: {
      layout: dynamicLayout,
      useSlotsViewOnSmallScreen: "true",
      theme: "light",
    },
    calLink: "rogeramitchell/meeting",
  });

  Cal.ns.meeting("ui", {
    theme: "light",
    cssVarsPerTheme: {
      light: { "cal-brand": "#14133d", "cal-bg": "#fcfcfc" },
      dark: { "cal-brand": "#f7f5f3" },
    },
    hideEventTypeDetails: false,
    layout: "layout_view",
  });
  Cal.config.forwardQueryParams = true;

  let calSuccessfullyLoaded = false;

  Cal("on", {
    action: "*",
    callback: () => {
      calSuccessfullyLoaded = true;
    }
  });

  window.addEventListener("message", (event) => {
    try {
      if (typeof event.origin === "string" && event.origin.includes("cal.com")) {
        calSuccessfullyLoaded = true;
      }
    } catch (e) {}
  });

  window.setTimeout(() => {
    const fallbackFooter = document.getElementById("cal-fallback-footer");
    const calContainer = document.getElementById("my-cal-inline-meeting");
    const iframeExists = calContainer && calContainer.querySelector("iframe");
    
    if ((!iframeExists || !calSuccessfullyLoaded) && fallbackFooter) {
      fallbackFooter.removeAttribute("style");
    }
  }, 5000);
</script>