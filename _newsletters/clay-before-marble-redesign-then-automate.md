---
layout: newsletter
title: "Clay Before Marble: Redesign, Then Automate"
author: Roger Mitchell
date: 2026-09-18
description: "Clay before marble: redesign processes before you automate with AI, use real security layers like Brex, and don't throw slop grenades."
tldr: "Iterate in clay before you chisel marble. Redesign the process before you automate it. Stack basic security like Swiss cheese. Use AI to sharpen trust, not blow it up with a slop grenade."
---

On a call this week, I offered a client this metaphor:

**Don't start chiseling marble for version 1. Start with clay, sun-bake it, and decide if it's appropriate to take it further.**

In their particular case, it was offered as a recommendation to avoid over-hardening parts of a solution their team is building to revamp how marketers build segments and activate those into campaigns. This metaphor also applies to the challenges folks are facing with AI adoption and seeing real returns on investment.

[HBR published an article earlier this week](https://hbr.org/2026/09/stop-automating-old-processes-design-new-ones-instead) that dives into that challenge by first explicitly naming what top-tier consulting firms are seeing, which I encourage you to take with a grain of salt:

- [BCG's AI Radar report from January](https://www.bcg.com/publications/2026/as-ai-investments-surge-ceos-take-the-lead) indicates that organizations are on track to double the proportion of revenue that flows into AI expenditure
- [PWC's Global CEO Survey](https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-global-ceo-survey.html) indicates a declining trend in confidence around revenue growth with only 12% stating AI has delivered benefits to revenue and cost
- [McKinsey's State of AI Survey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2025) from the end of 2025 notes that 39% of firms are seeing a bottom-line impact

All of those surveys were published more than eight months ago, which misses when agentic harnesses like OpenClaw were just releasing. They also entirely miss what the frontier labs offer agents that can control browsers and computers.

**Regardless, I agree with the authors' perspective that organizations need to redesign business processes before automating (with AI)**, specifically around [how to figure out what to redesign](https://hbr.org/2026/09/stop-automating-old-processes-design-new-ones-instead#:~:text=Decision%201%3A%20Choose%20What%20to%20Redesign) and [their framework for the level of involvement people have](https://hbr.org/2026/09/stop-automating-old-processes-design-new-ones-instead#:~:text=Decision%202%3A%20Decide%20Where%20Human%20Authority%20Remains) with an AI-enabled process. This also tracks with the clients that I work with that see strong revenue growth or substantial savings: they started from first principles and didn't take a "lift and shift" approach.

**Redesigning a business process involves questioning requirements and constraints, which can be easily discovered through iteratively designing and building the future state solution.** Returning to the opening metaphor, strive to iterate with clay, not marble; we can produce more iterations with less effort and less cost than if we jump straight to marble.

**Another peculiar thing about the rise of AI is the bipolarity of public opinion on trust and safety** as it relates to how organizations are producing and using AI.

[This lengthy essay](https://www.normaltech.ai/p/the-ai-as-normal-technology-view) dives into the intersection of cybersecurity and AI safety after [OpenAI's incident with Hugging Face](https://openai.com/index/hugging-face-incident-and-the-road-ahead/) and [Anthropic's risk report](https://www-cdn.anthropic.com/f61d49fa5596956a5dec75fea0e973bf6a6a8378/Redacted%20Risk%20Report%20August%202026%20.pdf) and "whistleblower". While these were high-profile events, this quote summarizes the post-incident analyses nicely:

> Cybersecurity practitioners have largely viewed these incidents as consequences of companies failing to adopt basic security precautions. They do not see the incidents as a sign of AI reaching a new milestone in cybersecurity.

**If you're not using basic security precautions, you expose yourself to risk. It's really that simple.**

The authors continue to argue that technical and policy levers are needed to prevent further loss-of-control events from occurring with AI. Arguably, there are already federal regulations that exist to address product liability, but it seems like the frontier labs either don't believe those apply to them (or might hope that they don't).

**As for mitigating risk, I've written about [the Swiss cheese metaphor](https://dodgelabs.com/newsletter/applying-the-swiss-cheese-metaphor/), which applied to that scenario shows how they have fewer slices than they need right now. There are simply too many holes that can be exploited.**

**Despite what's going on with the frontier labs, there are maximalists using AI safely in production and sharing what works for them.** Brex's CEO Pedro Franceschi discusses and demonstrates how his company is using AI on [Peter Yang's podcast](https://youtube.com/watch?v=LE0LNULrsEM); while the entire episode is worth watching, here is what I found noteworthy: 

- **Product managers have shifted to analyzing tons of data** from recorded sales conversations, customer onboarding, feedback, and support to define hypotheses, create prototypes, and validate with users before engaging software engineers to harden the solution
- **AI agents are created as virtual employees** that are given a persona, provided access to the same systems that a person would need to do their job, and monitor performance against a human counterpart
- **Imposing controls at the network layer (i.e. traffic to/from the internet or on-premise systems) to prevent unintended actions** adds another layer of defense beyond role-based access controls in systems the AI agents use

Applying the Swiss cheese metaphor, here are the slices Brex uses:

- Monitor actions in real-time
- Clear system instructions and prompts
- Enforce tight access controls to systems
- Report performance against human counterparts
- Block network traffic from their agentic harness

**Brex has mitigated their risk appropriately while still adopting bleeding edge technology.** With at least five layers of cheese, there may still exist some holes that would allow something to slip through, but it's unlikely. 

Brex also released their network layer security solution for managing AI agents as [an open-source utility on GitHub](https://github.com/brexhq/CrabTrap). There are other open-source options available, plus network layer controls are a standard offering from cloud infrastructure providers like Microsoft and Google.

**Switching gears to trust, Shopify's CEO Tobi Lutke coined the term ["slop grenade"](https://x.com/shaneparrish/status/2099852161576223202?s=20) to describe outputs from AI that causes more work (and damage) on the receiving end.** We've all experienced a slop grenade before, likely as an email that was way longer than it needed to be or documents that are overly generalized.

**The danger of a slop grenade is not safety, rather it can impact trust across a variety of dimensions.** As it relates to the hurling author of a slop grenade, these questions arise:

- Do we trust they understand the material and concepts? 
- Do we trust the person is respectful of the reader's time?
- Do we trust them to communicate effectively in other mediums? 
- Do we trust their attention to details that may be hallucinated?

**To end on a somewhat lighter note, AI and chainsaws have similar characteristics.** When used appropriately, it's a massive productivity gain compared to the alternative, yet there aren't many people using them consistently throughout the day. Both offer fairly crude safety mechanisms; experienced users bring additional equipment to keep themselves safe. There are also a few horror stories that lead people to worry about the downside.