---
layout: newsletter
title: "Reflections on Salesforce's Agentforce World Tour NYC 2024"
author: Roger Mitchell
date: 2023-12-17
description: "After attending Salesforce's Agentforce World Tour NYC 2024 event today, it's clear that Salesforce wants you to use as much of their products as possible. But, does that actually make sense?"
tldr: "Salesforce's products are compelling if you're all-in with them. Competitive offerings are cheaper, more complete, and have greater interoperability."
---

After attending Salesforce's Agentforce World Tour NYC 2024 event today, it's clear that Salesforce wants you to use as much of their products as possible. But, does that actually make sense?

**Salesforce's core platform**, including **Sales Cloud** and **Service Cloud**, offers a great blend of functionality to solve typical CRM use cases, along with having an extensible platform that can be tailored to your organization's specific needs.

Compared to other offerings from HubSpot, Microsoft, and industry-specific vendors, it is by far the leader in terms of what it can do.

But, the value proposition starts to get murkier as you drift further away from the core.

Anything falling into the industry cloud data models (e.g. **Financial Services Cloud**, **Nonprofit Cloud**) neuters core functionality that has worked reasonably well for decades (e.g. reports and dashboards).

Looking at **Slack** versus its competitors as a collaboration platform:

* If you're using Google Workspace, Slack blows away Google Chat in terms of integrations, integrated functionality, and ability to collaborate with outside organizations
* If you're using Microsoft 365, it's a really hard sell against Teams *unless* you're using multiple Salesforce products (e.g. core platform with an industry cloud and Tableau) or work with a lot of partners or customers that already use Slack

Plus, that's an additional expense that some organizations would not deem valuable unless they're using Slack's capabilities around process orchestration via its native workflow and integrations.

Let's look at **Tableau** versus its competitors around data visualization:

* Power BI is significantly cheaper and has a centralized focus in terms of its features for modeling, transformations, and visualizations
* Domo and Looker are both aimed at the enterprise, and while it might be similarly priced to Tableau, they have a more complete feature set around data modeling and ingestion
* Databox, Looker Studio, and tons of other vendors exist for smaller organizations that don't need an enterprise-grade platform

Switching to the data and AI side of the house, **Data Cloud** is technically impressive in terms of how it democratizes traditionally tedious work to ingest, model, transform, coalesce, and publish data.

The features it offers are wide-reaching, like:

* Support for [a lot of data stores and services outside of Salesforce's stack](https://www.salesforce.com/data/connectivity/data-cloud-connectors/) to ingest and publish data (the latter is a much smaller list)
* Create unified profiles by resolving identity across disparate data sources
* Ability for non-technical users build their own predictive and generative AI models from structured and unstructured data

Even with that, you still have dependencies on third party vendors for needs like:

* Data lake to store raw data
* Data warehouse for computationally intensive workloads or code-based tasks
* Pipelines to move data from unsupported apps and services
* Segmentation platform for tasks that are beyond Data Cloud's segment activations

As for **Agentforce**, which appears to be **Einstein Bots** injected with third party generative AI (or your own LLMs, if you're doing that well) is also technically impressive, yet feels like a solution looking for a problem.

Let's consider the work to [make an Agentforce Service Agent](https://trailhead.salesforce.com/content/learn/projects/quick-start-build-your-first-agent-with-agentforce), which includes:

1. Defining use cases that will be included or excluded
2. Building necessary actions to surface and modify data
3. Creating instructions to ensure the AI agent does what is expected (i.e. prompt engineering)
4. Rapidly iterating during your build and after releasing the initial version to account for real-world usage

Does your team have the bandwidth to handle those last two steps?

Even if they do, is it better to do those first two tasks along with these?

* Leverage automation to improve the efficiency and effectiveness of the business process
* Improve the content and user experience of your digital properties (i.e. website, portals)
* Drop in AI from another vendor to help someone discover information

Plus, if you pursue that strategy, you don't have to worry about people laughing when you say you spent time working on a "Salesforce Agentforce Service Agent".

Talk about *forced* branding.

**TLDR:** Salesforce's products are compelling if you're all-in with them. Competitive offerings are cheaper, more complete, and have greater interoperability.
