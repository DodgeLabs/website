---
layout: main-wide
title: Schedule Your Intro Call with Roger
description: "Schedule a 30-minute intro call to discuss your operational challenges and goals. Experience a straightforward approach with no sales pressure or fluff."
---

<article class="card">
<header class="card__header" markdown="1">
# Schedule Your Intro Call
</header>
<div class="card__body">
<div id="my-cal-inline-intro-call" class="cal-embed" style="width: 100%; height: 100%; overflow: scroll">
&nbsp;
</div>
</div>
</article>

<script type="text/javascript">
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
  Cal("init", "intro-call", { origin: "https://app.cal.com" });

  Cal.ns["intro-call"]("inline", {
    elementOrSelector: "#my-cal-inline-intro-call",
    config: {
      layout: "week_view",
      useSlotsViewOnSmallScreen: "true",
      theme: "light",
    },
    calLink: "rogeramitchell/intro-call",
  });

  Cal.ns["intro-call"]("ui", {
    theme: "light",
    cssVarsPerTheme: {
      light: { "cal-brand": "#14133d" },
      dark: { "cal-brand": "#f7f5f3" },
    },
    hideEventTypeDetails: false,
  });
</script>
