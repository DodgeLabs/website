---
layout: newsletter
title: "Use Ambiguity as an Opportunity to Analyze Generative AI Vendors & Models"
author: Roger Mitchell
date: 2024-10-09
description: "Intentionally creating ambiguity about which generative AI vendors and models are being used helps mitigate risk, but it is an even larger opportunity as your organization learns and matures its usage of AI."
tldr: "Abstracting your users from the underlying models and vendors presents itself as an opportunity to determine best fit for specific tasks."
---

Intentionally creating ambiguity about which generative AI vendors and models are being used helps mitigate risk, but it is an even larger opportunity as your organization learns and matures its usage of AI.

For context, Conor Grennan and Jaeden Schafer recently spoke about [The Potential of Generative AI in Healthcare](https://podcasters.spotify.com/pod/show/ai-applied/episodes/The-Potential-of-Generative-AI-in-Healthcare-e2m5p6f).

A curious point they noted is that a CEO of a healthcare firm did not provide specifics about the vendors and models that were being used, although alluded to using major cloud platforms.

Creating this ambiguity and opacity is an opportunity to learn which vendors and models perform well for specific tasks.

This is especially useful if you're training your own models and create specific releases as parameters are tweaked and additional data is provided.

Here are the steps for how to realize this opportunity:

1. **Create an abstraction layer** between your users and AI, enabling you to choose which vendor and model to leverage at time of chat, which could always be the same or be randomly chosen from a set of options
2. **Capture feedback in an easy fashion** to enable users to provide their sentiment, which can take the form of quantifiable measures and qualitative commentary
3. **Monitor usage and feedback** to determine how well vendors and models perform on certain tasks

Here is one of many ways you can do this within your organization:

* Use Slack or Teams to have users interact with bots (e.g. @CardioBot) in a familiar setting
* Leverage an integration platform to start a new chat with generative AI when the bot is @ mentioned; you can do this with everything from Zapier to MuleSoft, Make to Azure
* Capture the initial request and response in a database with details like the names of user, bot, vendor, and model; plus, any tokens consumed, which is a proxy for cost
* As subsequent requests and responses are made, increment the tokens consumed for the request and response in your database
* Use a specific set of emoji reactions to capture feedback; again, this is logged to the database
* Monitor usage and analyze usage with a platform like Power BI or Tableau

**TLDR:** Abstracting your users from the underlying models and vendors presents itself as an opportunity to determine best fit for specific tasks.
