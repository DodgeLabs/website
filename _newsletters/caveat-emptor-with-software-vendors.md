---
layout: newsletter
title: "Caveat Emptor with Software Vendors"
author: Roger Mitchell
date: 2024-08-21
description: "Using independent software vendors (ISVs) to satisfy parts of your digital transformation project can accelerate when timelines and enables you to realize value faster, yet it comes with tradeoffs."
tldr: "Using prebuilt solutions from vendors can accelerate your initiatives, but comes with its own set of tradeoffs."
---

Using independent software vendors (ISVs) to satisfy parts of your digital transformation project can accelerate timelines and enables you to realize value faster, yet it comes with tradeoffs.

ISVs have the benefit of domain expertise and exposure to a lot of customers, enabling you to benefit from collective knowledge around a particular problem.

While you could build your own contract lifecycle management or sales cadencing solutions, most organizations prefer to use ISVs that have deep knowledge on those topics and continue to offer innovation as the market evolves.

However, reliance on ISVs as part of your technology stack also come with tradeoffs:

* **Lack of control:** You may be able to influence the roadmap, but in many ways you’re at the mercy of the ISV to build things that you identify as gaps
* **Single point of failure:** A bug or service disruption can halt your business processes entirely
* **Increased threat surface:** In some cases, you expose your data and IP to the ISV’s tech stack and staff, which requires initial and recurring reviews to maintain whatever your desired security posture is
* **Integration points:** You may be able to integrate nicely or need to find workarounds for how to get data in and out of your ISV’s service
* **Uncertain renewal rates:** Your licensing costs may increase more than expected at time of renewal, often with little time to pivot to another ISV or build your own solution

Zooming into the Salesforce ecosystem, here are examples of risks that I’ve seen with my clients:

* **Trust, but verify:** A provider of apps for multiple industries within financial services attempted to gloss over the fact that their application had not gone through security review, a process that Salesforce’s AppExchange uses to identify “trustworthy” apps
* **Zombies:** A nonprofit consulting firm published multiple apps as an ISV and then went out of business, leaving their clients and customers with apps that no longer had any support or future roadmap
* **Leaky boat:** A financial services firm has an app that integrates data bidirectionally with their core service, yet that core service has multiple security vulnerabilities around data access and entitlements
* **Black box:** A provider of accounting and ERP apps requires its customers to give them access to production systems to perform upgrades due to the complexity of their app and limitations on how its customers can configure settings within its packages

Stay tuned for a future post with a checklist of questions to ask and things to look for as part of your vetting process with ISVs.

**TLDR:** Using prebuilt solutions from vendors can accelerate your initiatives, but comes with its own set of tradeoffs.
