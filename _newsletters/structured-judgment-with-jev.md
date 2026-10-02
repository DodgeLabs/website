---
layout: newsletter
title: "Structured Judgment with Jev"
author: Roger Mitchell
date: 2026-10-02
description: "Jev from TypeSafe.ai runs one-shot choice, score, and noul questions on structured state so systems can act on calibrated answers, not another chat transcript. Meeting notes as an example use case."
tldr: "Chat gives you more text. Jev gives you structured judgment—Choice, Score, Noul—on one pass. Use meeting notes as the doorway: ask questions a CRM or workflow can act on, not another summary."
---
**This week, we’re diving into Jev, a new type of AI model available from TypeSafe.ai** that was [released a few weeks ago](https://typesafe.ai/blog/introducing-system-one-models-and-jev). They’re approaching AI from a different direction with a new class of models that are optimized for making structured decisions.

**The core difference between Jev and other LLMs comes down to how we interact with it.** Existing LLMs largely involve passing unstructured text with the ability to subsequently send additional messages to refine the output.

**Jev adds structure into what it expects for inputs and outputs, and it only runs one iteration.** Because Jev’s outputs are always the same expected shape, downstream applications can reliably work with the data without the fear of breaking due to LLM hallucinations.

The structure requires a little more planning and work upfront, but it’s worth it: **Jev is over 100x faster and cheaper than frontier AI models.**

**Let’s go a bit deeper and unpack how Jev works.**

* Each request consists of state and questions  
* Each response has answers to every question asked  
* There are three types of questions: choice, score, and noul

**State is the context or data that the questions are targeting**. This can be unstructured text, numbers, collections of things.

**A choice question is a set of labels where Jev’s answer provides a probability on a per choice basis and an overall confidence.** Think of this like how emails are classified as important, spam, or marketing content within Outlook and Gmail.

**A score question is similar although it contains an ordered list of outcomes like a rubric or letter grade; Jev’s answer is similar to that of a choice question, plus it includes an average score**. Think of this like a 360 review where each person gives you a score from 1 to 5 and you get an average score of 4.6.

**A noul question provides context about what something looks like if it’s true or false, and Jev’s answer returns a probability of it being true.** Think of this like figuring out whether someone agreed to receive more information about a service or product.

**Because this sounds a bit esoteric, let’s explore a use case that most of us are familiar with: meeting notes.** Practically all of my clients have adopted AI-generated transcripts and notes on their meeting platforms, which produce a bunch of unstructured text.

**The transcript and notes are the state passed into the request.** Additional pieces of state may include descriptions of each of the participants, their role, and details about why the meeting happened.

**Several questions can be asked about the meeting** that align to each of the question types that Jev supports.

* **Choice:** What type of meeting is this?  
* **Choice:** What emotions were present?  
* **Score:** Where does the sentiment rank from negative to positive?  
* **Score:** Is there convergence or divergence present in the topic discussed?  
* **Noul:** Is there a clear next action from this meeting?  
* **Noul:** Was a decision made during the meeting?

**Jev’s answers to these questions can be handled by automation tools to update systems, trigger escalations, or pass into AI to produce coaching and guidance.** That’s the benefit of Jev’s structured judgment: it’s not just another summary of a meeting, rather a set of answers that systems can act on.

The same pattern shows up elsewhere, like assigning a score to a prospect, determining what stage a relationship has hit, or to decide whether to initiate an action. **Even if you never touch Jev, the redesign is the same: decide the questions and shapes before sending data to AI.**