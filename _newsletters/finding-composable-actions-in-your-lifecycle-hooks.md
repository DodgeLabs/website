---
layout: newsletter
title: "Finding Composable Actions in Your Lifecycle Hooks"
author: Roger Mitchell
date: 2025-02-05
description: "Learn how defining reusable actions in business processes can streamline design, reduce maintenance time, and improve documentation clarity."
tldr: "See if the actions associated with lifecycle hooks in your business processes can be defined as reusable components. This standardization makes processes easier to build and maintain, plus the documentation is easier to read."
---

Yesterday, we discussed how [using lifecycle hooks in business process design](/newsletter/using-lifecycle-hooks-in-business-process-design) can improve how you think about, design, and document solutions and we left off on the topic of actions.

At each step in your business process, there are likely actions associated with at least one of the lifecycle hooks. Those actions might need a person to do something or could be a system performing logic.

Some actions will be unique, in the sense that trying to find a more generic or abstract version is not possible or not worthwhile. However, there will be actions that can be abstracted and those will help you design and implement solutions.

The key to this is the concept of composability.

Each abstract action can support being used many different times, which means we can reduce the overall amount of time spent building and maintaining the solutions that facilitate our business processes.

Let's consider a fairly standard B2B sales process that might have actions like:

* Send high level quote range to prospect
* Get notified when prospect downloads quote
* Send proposal and MSA to execute via DocuSign
* Send notification on closed won to start onboarding

Each of those actions could be distilled into an action like "send notification", which depends on a few things to be meaningful:

* Recipients
* Subject
* Body
* Attachments

Perhaps not all of our actions will use that abstract definition (e.g. most e-signature products can send a proposal via their service), but it gives us a place to start to identify what functionality our systems need to support.

Composability also forces us to think critically about what makes up an action, like assembling tiny building blocks. These tend to be pieces of data like referencing a sales opportunity's owner (a person in the organization) or a deck template used for quoting.

When there are one-offs or high variability in how actions are performed, it likely deserves additional attention to try standardizing and gain efficiencies.

**TLDR:** See if the actions associated with lifecycle hooks in your business processes can be defined as reusable components. This standardization makes processes easier to build and maintain, plus the documentation is easier to read.
