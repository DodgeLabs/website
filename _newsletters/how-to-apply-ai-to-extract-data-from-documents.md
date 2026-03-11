---
layout: newsletter
title: "How to Apply AI to Extract Data from Documents"
author: Roger Mitchell
date: 2024-09-30
description: "Documents are part of every organization's processes. Some rely on paper-driven workflows that result in typewritten or handwritten documents, and others need to process lengthy documents as part of their everyday work. AI can help streamline these workflows and make it easier to use the data in oth"
tldr: "Extracting data from documents with AI is a great first step for paper-heavy processes; you can improve accuracy and reduce processing times."
---

Documents are part of every organization's processes. Some rely on paper-driven workflows that result in typewritten or handwritten documents, and others need to process lengthy documents as part of their everyday work. AI can help streamline these workflows and make it easier to use the data in other processes.

Here are three common use cases with an example:

* **Read an entire document:** all of the text is read, which is helpful for contracts, legal filings, academic papers, etc
* **Extract form fields:** specific pieces of a document are read and each is assigned a name (e.g. first name, phone number, city) to use downstream for automating data entry
* **Extract tabular data:** useful for reading repeated sets of data like pulling out invoice line items, expenses claimed on tax returns, financial holdings, etc

**How does this work?**  
Essentially, documents are a grid of pixels, which means that a computer can recognize patterns from pixels that are near each other, then compare those to a known set of patterns for typewritten and handwritten letters and numbers.

For extracting data from a form (in both fields and tables), part of the process involves overlaying rectangles on the document to tell AI where to read.

**Where do you go to get started?**  
A few SaaS offerings include [Docparser](https://docparser.com/) and [Docsumo](https://www.docsumo.com/), both of which can integrate via Zapier or Make for no-code / low-code integrations.

For more control and extensibility, all of the major PaaS vendors have offerings as well: [Amazon](https://aws.amazon.com/pm/textract/), [Azure](https://azure.microsoft.com/en-us/products/ai-services/ai-document-intelligence), [Google](https://cloud.google.com/document-ai?hl=en).

All of these include prebuilt templates for reading common forms like a Passport or W-2, and allow you to upload your own documents to create custom templates.

**TLDR:** Extracting data from documents with AI is a great first step for paper-heavy processes; you can improve accuracy and reduce processing times.
