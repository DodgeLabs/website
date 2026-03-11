---
layout: newsletter
title: "Define a Backup Strategy for Your Systems"
author: Roger Mitchell
date: 2024-08-23
description: "Operating without backups of your systems is like driving a car without wearing a seatbelt."
tldr: "Define backup plans for each of your systems. Start taking backups if you aren’t already, then look to automate."
---

Operating without backups of your systems is like driving a car without wearing a seatbelt.

Cloud platforms like Google, Microsoft, and Salesforce have data backups and service redundancy that are geographically dispersed to ensure that incidents do not affect their ability to provide customers with functionality.

But, the definition of “incident” matters though: things you encounter that are incidents are likely not a large enough scale problem for the platform providers, so they don’t have you covered.

Here are a few common incidents that don’t move the needle for the platform provider:

* **Deletion of data:** whether accidentally or intentionally, deletions happen and in some cases it’s not recoverable within that system directly
* **Automation goes awry:** it might have solved one use case but introduced bugs that impact other datasets
* **Integrations get iffy:** data flowing between systems might errantly overwrite data (e.g. creating vs updating data might have different requirements that weren’t captured appropriately)
* **Reversion to reset:** updates made to a system’s configuration or customizations need to be rolled back to a previous version

Note that these incidents involve both data and metadata.

* **Data:** the stuff you track for your business like customers, orders, financial accounts, etc
* **Metadata:** the configuration and customization of your platforms like marketing sequences, email templates, code-based logic, database schema, etc

Start by creating a manifest of the apps and platforms you’re using. This should include your collaboration suite, CRM, marketing tools, website, finance and accounting, ERP, etc.

Then, do these steps for each of the systems on your manifest:

1. **Decide whether to backup:** some services might not be worth backing up, like the data that drives your analytics tool’s dashboards (because that data comes from another system on your list)
2. **Check for built-in backup functionality:** practically all major platforms offer some ability to export data (and metadata), although maybe not encompassing everything that you need or as often as you would like
3. **Define a frequency:** this is essentially like saying how much data you’re willing to lose while being pragmatic about the fact that real limitations exist (I.e. you can’t backup every second)

With that information, you can start taking backups and decide which will require automation or procurement of tools to improve the process.

**TLDR:** Define backup plans for each of your systems. Start taking backups if you aren’t already, then look to automate.
