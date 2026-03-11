---
layout: newsletter
title: "Applying the Hub & Spoke Model to Each Stakeholder"
author: Roger Mitchell
date: 2024-10-22
description: "We talk about the hub and spoke model when designing systems architecture, although this wide perspective often loses sight of each stakeholder group. Beyond the entire systems landscape, each stakeholder group needs a hub, too."
tldr: "Define a hub for each stakeholder so they can operate efficiently with the right data and tools, especially if they can't access the overall hub."
---

We talk about the hub and spoke model when designing systems architecture, although this wide perspective often loses sight of each stakeholder group. Beyond the entire systems landscape, each stakeholder group needs a hub, too.

As a quick refresher, the hub and spoke model is a way to organize multiple systems to establish a central point (hub) that connects to many other systems (spokes).

One of the challenges with the concept is that while an organization has a hub, stakeholders may not be able to access that hub. Instead, they're using systems that interact with it, but they might not have their own central place.

For example, let's consider someone that is working in a sales role that uses a CRM platform like Salesforce. They might rely on data from marketing platforms like HubSpot, financial data from an ERP to compare actuals to forecasted spend, and other systems in the overall landscape.

From a pure technologist's perspective, the organization's hub would be their data warehouse (Snowflake). However, our sales stakeholder does not directly access Snowflake.

Instead, we must define a hub for our sales stakeholder based on the systems they do have access to. Their hub will be their central point for consuming and contributing data to the wider network of systems.

Depending on their level within the sales organization, their hub might be the CRM platform (Salesforce) or an analytics platform (Power BI). It all depends on the processes they participate in, decisions they need to make, and specific data requirements of their role.

While a hub exists at the organizational level, each stakeholder needs their own hub that supports their overall workflow.

To illustrate this with a familiar concept that is not tied to roles and systems your organization might have, let's explore how this concept works with a metaphor with United Airlines in the US:

* If we're considering all stakeholders groups, their hub is Chicago
* If we're considering only those stakeholders in the New York City metro area, their hub is in Newark
* Other geographic stakeholder group may align to either the organization's hub or another hub in the overall network like San Francisco, Denver, Houston, or DC

**TLDR:** Define a hub for each stakeholder so they can operate efficiently with the right data and tools, especially if they can't access the overall hub.
