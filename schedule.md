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
</article>

<script type="text/javascript">
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const dynamicLayout = isDesktop ? "week_view" : "month_view";

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
    layout: "week_view",
  });
  Cal.config.forwardQueryParams = true;
</script>