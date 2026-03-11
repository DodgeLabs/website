---
layout: newsletter
title: "How to Mitigate Bias of Perceived vs. Actual Complexity When Vetting Vendors"
author: Roger Mitchell
date: 2023-12-17
description: "A common mental trap that you can fall into with digital transformation projects is assuming that less vendors results in less complexity. However, this is highly dependent on knowing how mature and complete the set of features are that you're using."
tldr: "Don't assume that less vendors yields less complexity. Composing a solution from multiple vendors is often easier to implement and less complex."
---

A common mental trap that you can fall into with digital transformation projects is assuming that less vendors results in less complexity. However, this is highly dependent on knowing how mature and complete the set of features are that you're using.

Major cloud platforms offer multiple products, each of which has its own level of feature maturity, technical debt, and roadmap. Those vendors also have their opinions and constraints as it relates to integrating their own products together, plus how to integrate with solutions from other vendors.

The trap of perceived versus actual complexity first appears during the design and evaluation phase of a project, which is often filled with tedious work.

Comparing and contrasting how vendors solve particular use cases can range from easy to extremely hard depending on:

* How collaborative and transparent their sales and solution engineering teams are
* Their product and support documentation
* Whether your use cases are considered "typical"

Plus, stakeholders are increasingly eager to see the build phase begin, as that is when they start to see progress.

To mitigate the bias of perceived versus actual complexity, keep these points in mind during your evaluation:

* **Feature maturity:** determine how stable the features are by reviewing documentation, seeing demos, and reading release notes for the past few updates
* **Feature completeness:** identify gaps in how the feature's capabilities address your use cases, and how those gaps would be filled with that vendor's tools and third-party options
* **Long-term viability:** ask what technical debt exists, what appears on the product roadmap, and how support is offered

All of those points are worth discussing with current customers that are leveraging features that you intend to use. As a proxy, you could explore the vendor's online forums if those are publicly accessible.

To see how this manifests in reality, let's consider a project that involves creating a data warehouse to support downstream requirements like visualization, mastering data, and segmentation.

For the purposes of this example, we're going to assume that this project involves setting up the data warehouse and building the data pipelines necessary for getting the data into it.

A single vendor solution is technically possible with Microsoft's technologies, which would either involve Fabric or a combination of Azure and Power Platform products (which is what Fabric really is).

However, a multi-vendor solution leveraging best-in-class tools like Snowflake and Fivetran will be easier to implement and maintain, which reduces both one-time and ongoing expenses for resourcing.

We may perceive that a solution using Microsoft is less complex because there is only one vendor, however the reality is that it is likely more complex as it relates to how the solution is built and maintained.

**TLDR:** Don't assume that less vendors yields less complexity. Composing a solution from multiple vendors is often easier to implement and less complex.
