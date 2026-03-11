---
layout: newsletter
title: "How to Use Generative AI to Suggest Products or Services"
author: Roger Mitchell
date: 2024-10-06
description: "Recommending products or services used to be a task that was best done using predictive AI, however, there is another way to approach this problem using generative AI."
tldr: "Spin up a new chat, provide context on your products or services, details about a person that recently reached out, and ask for recommendations."
---

Recommending products or services used to be a task that was best done using predictive AI, however, there is another way to approach this problem using generative AI.

The entire process can be achieved in one large prompt composed of three sections. Let's take a look at how to compose the prompt.

**Your Products & Services**  
Start with what you do and the various offerings you have. Create a consistently formatted block of text that describes each, along with relevant details about volumes, timing, etc.

For a really large set of productions, you may want to structure this in a file that is uploaded with the request; CSV and JSON are likely the easiest to produce and are consumed well.

**The Subject for Your Recommendations**  
Next, include any details you have about the person to whom you want to recommend products or services. If there are concerns about personally identifiable information (PII), don't include that in your request and use placeholders instead (e.g. [First Name]).

If you have previous data about the person like their order history, engagement with email campaigns, be sure to include this as well.

**Your Desired Output**  
Finally, ask for what you expect to receive in return. This might be a bulleted list that starts with the product name (maybe even formatted as a link to your website) and a reason why it was recommended; or, it could be an entire email drafted that you can lightly edit and send.

Be sure to provide an example of what the output should look like along with constraints to ensure that you don't have more turns in the conversation.

**TLDR:** Spin up a new chat, provide context on your products or services, details about a person that recently reached out, and ask for recommendations.
