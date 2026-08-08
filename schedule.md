---
layout: main-wide
title: "Schedule a Zoom, Google Meet, Microsoft Teams, or Phone Call with Roger" 
description: "Schedule virtual meetings or phone calls with Roger, choosing from various durations for Zoom, Google Meet, Microsoft Teams, and phone options to suit your needs."
redirect_from:
  - /schedule/intensives
  - /schedule/zoom
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
<footer class="card__footer cal-fallback" hidden>
<a href="https://cal.com/rogeramitchell/meeting" target="_blank" rel="noopener" class="btn-secondary">
Schedule via Cal.com
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
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
</script>

{% include cal-fallback.html %}