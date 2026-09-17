---
layout: main
title: About Roger
description: "I’m a solo management consultant. I help operators in financial services, enterprise nonprofits, and professional services when the work sits between business judgment and technical build — and they want someone who knows how to do both."
---

<article class="card">
<header class="card__header">
    <h1>About Roger Mitchell</h1>
</header>

<div class="card__body">
    {%- assign photo = site.static_files | where: "path", "/assets/images/roger-mitchell-192.webp" | first -%}
    <div class="author">
        {%- if photo %}
        <img class="author__photo" src="/assets/images/roger-mitchell-192.webp" width="96" height="96" alt="Roger Mitchell">
        {%- else %}
        <div class="author__photo photo-placeholder">Headshot missing</div>
        {%- endif %}
        <div class="author__text">
            <p>I’m a solo management consultant. I help operators in financial services, enterprise nonprofits, and professional services when the work sits between business judgment and technical build — and they want someone who knows how to do both.</p>
        </div>
    </div>

    <p>I’ve been consulting since 2010 across roughly 20 industries and more than 100 clients — including organizations with $900B AUM, teams across five continents, companies from 10 to 10,000 people, and systems running hundreds of thousands of transactions a day. I sit with executives, managers, line staff, and technical folks, find the friction (obvious and hidden), and get to a critical path fast.</p>

    <p>In 2016, I started Dodge Labs as a solo practice with the goal of delivering expertise more efficiently than consulting firms that I worked at or with previously. I’m proud to say that still holds true today after a decade of operating independently without employees and subcontractors.</p>

    <p>I adopt new tech early myself — cloud before it was default, AI for real now — then help organizations bring it in safely: prototype, MVP with automation, harden what works. Because I work across industries, I carry patterns between them instead of copying whatever the peer next door is doing.</p>

    <p>Outside of work, I have a supportive partner, a precocious five-year-old son, and a dog that can understand less than a handful of English words. I enjoy running, practicing yoga, skiboarding, and volunteering as an EMT with a local rescue squad. I hold a BA in Economics from the University of Miami and an Executive MBA from Quantic.</p>
</div>

<footer class="card__footer">
<a href="/subscribe-to-newsletter/" class="btn-primary">
Subscribe to the newsletter
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
</a>
<p class="cta-quiet">Ready for a conversation? <a href="/schedule-your-intro-call/">Schedule an intro call</a>.</p>
</footer>
</article>
