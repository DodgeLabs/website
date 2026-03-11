---
layout: newsletter
title: "How to Create a Helpful AI Assistant for Your Employees"
author: Roger Mitchell
date: 2024-10-19
description: "If you're curious about how to get started with generative AI, a benign place to get started is by creating a helpful AI assistant for your employees. Let's explore why this use case and how to do it."
tldr: "It's easier than you think to create an AI assistant to help employees get answers about internal policies and procedures, plus it's a wide use case."
---

If you're curious about how to get started with generative AI, a benign place to get started is by creating a helpful AI assistant for your employees. Let's explore why this use case and how to do it.

**Why this use case?**  
For starters, practically all organizations have at least one document outlining employee policies. If you don't, start writing one of those before playing around with generative AI.

Although most organizations have dozens of such documents scattered across many different places, like an intranet page that has more links than monthly page views, and a SharePoint site accessible only to managers.

As a result, it's hard for employees to find information for themselves, which often means asking questions of their manager (that may face the same challenge), HR business partner (I always cringe a bit while saying that), or discussing a policy violation after the fact.

This is a great use case for leveraging generative AI, especially as every employee has a question to ask, which means you have a large set of questions to use for testing and providing examples as context.

**How do you create the assistant?**  
Choose a generative AI vendor and get started. For the purposes of this, we're going to explore using OpenAI's GPT feature within ChatGPT; you can learn more about those in [their documentation](https://help.openai.com/en/articles/8554407-gpts-faq).

Creating a GPT requires providing it a name and description, plus you can provide a nice logo or avatar. Feel free to have fun that part.

It also involves defining instructions, creating a list of potential conversation starters, and knowledge; that is the really powerful part, so spend as much time here as you can.

**Instructions**  
Tell the GPT that it is acting as an assistant to employees within your organization around topics related to your internal policies. Instruct it to only refer to the documentation uploaded as knowledge, and to not rely on its broader general knowledge for answers.

You can also tell it to have a default response (e.g. "reach out to your manager or our HR help desk via [people@organization.com](mailto:people@organization.com) with this question") if it does not find an answer in the documents.

You can also embrace the concept of "few shot learning" by defining examples of questions or requests that people may submit along with the answer that you expect it to provide.

**Conversation Starters**  
Ideally, these are real questions from employees that are frequently asked or highlight areas that are underutilized. You can collect these from your fellow stakeholders working on this project, or as part of a wider survey.

Here are a few examples:

* Which holidays do we have?
* Am I able to fly economy premium?
* Do we match gifts that I make to a nonprofit?
* What is an HR business partner? (just kidding, y'all...)

**Knowledge**  
Upload documents that contain the relevant policies and procedures that you want to use for answering those questions. You can always add new documents and replace existing documents with new versions later on.

Here are a handful that are worth adding:

* Employee Handbook
* Travel and Expense Policy
* Performance Review Process
* Vacation, Time Off, and Leave Policies
* IT & Security Guidelines

Once you've created the GPT, start asking questions to test its responses. You may tweak the instructions of the GPT before rolling out to a wider test group or sharing to your entire organization.

**TLDR:** It's easier than you think to create an AI assistant to help employees get answers about internal policies and procedures, plus it's a wide use case.
