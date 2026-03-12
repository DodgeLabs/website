---
layout: main-wide
title: "Schedule a Phone Call with Roger" 
---

<article class="card">
<header class="card__header" markdown="1">
# Schedule a Phone Call with Roger
</header>
<div class="card__body">
<div id="my-cal-inline-phone-call" class="cal-embed" style="width: 100%; overflow: scroll">
&nbsp;
</div>
</div>
</article>

<script type="text/javascript">
  const isDesktop = window.matchMedia("(min-width: 768px) and (min-height: 600px)").matches;
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
  Cal("init", "phone-call", { origin: "https://app.cal.com" });

  Cal.ns["phone-call"]("inline", {
    elementOrSelector: "#my-cal-inline-phone-call",
    config: {
      layout: dynamicLayout,
      useSlotsViewOnSmallScreen: "true",
      theme: "light",
    },
    calLink: "rogeramitchell/phone-call",
  });

  Cal.ns["phone-call"]("ui", {
    theme: "light",
    cssVarsPerTheme: {
      light: { "cal-brand": "#14133d", "cal-bg": "#fcfcfc" },
      dark: { "cal-brand": "#f7f5f3" },
    },
    hideEventTypeDetails: false,
  });
</script>