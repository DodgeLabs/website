---
layout: newsletter
title: "A Quirky Way to Use Generative AI to Customize Your Marketing & Sales Emails"
author: Roger Mitchell
date: 2024-10-31
description: "Plenty of folks have talked about how to use generative AI to write or edit emails, even crafting an entire marketing journey with a single prompt. Let's take a look at a small but mighty use case, plus two prompts to use as a starting point."
tldr: "Use generative AI within your automation routines to customize the content of your marketing and sales emails to enable hyper personalization."
---

Plenty of folks have talked about how to use generative AI to write or edit emails, even crafting an entire marketing journey with a single prompt. Let's take a look at a small but mighty use case, plus two prompts to use as a starting point.

By pairing generative AI with automation and your data, you can unlock hyper personalized content within your marketing and sales emails.

Here are a few use cases to consider using this approach:

* **Respond to a web form submission** by pairing data from the form, other data from your CRM or data enrichment tools, and information about your products or services
* **Send a reminder about an abandoned cart** by looking at a customer's past purchases, ecommerce site engagement data, and expressed interests to nudge them into buying
* **Request a donor to renew their gift** based on what they have given in the current and prior year by having a personalized "giving grid"

Let's see how this process works step by step:

1. **Start an automation routine** based on an event like a new web form submission, adding a person to a marketing campaign, or a schedule
2. **Collect data** that is needed for customization, like prior sales, marketing engagement data, or last year's giving for nonprofit fundraising
3. **Send a prompt to AI** to request a response with a specific format that can be used in your emails
4. **Use the response from AI** by either storing it for use when a marketing campaign is executed, or by drafting or sending the email

Note that to make this even more powerful, it's helpful to include as much detail as possible for the products or services that your organization offers.

The best way to approach this is by creating an "assistant", as this allows you to provide way more information for AI to use to craft its response. If you're curious about that, take a look at [this previous newsletter](/newsletter/how-to-create-a-helpful-ai-assistant-for-your-employees) that explores another use case.

Now, let's explore two prompts that you can plug into step 3 of that process.

**Prompt for Responding to a Sales Inquiry**  
We're using this prompt to recommend a specific service based on a prospect's inquiry to our fictional interior design agency's website.

This assumes that we have collected what the prospect submitted on our website in step 2, which is passed into the prompt after the line "generate a response given the following details".

The result is two paragraphs of text that tie back to the services offered, even with the little amount of details provided (i.e. "Redoing our main bathroom. Curious how you'd approach this.").

> I will provide you details about a person's web form submission that is interested in our services. Use that information plus the details about our services to respond with a suggested service that meets the person's needs.
>
> \*\*Our Services\*\*
>
> - Style Selection: We decide on different styles that can be used in a space based on your tastes and desired decor. This is a flat fee of $5,000.
>
> - Color Palettes: This serves as a baseline to recommend color palettes for a room, floor, or entire home. We offer three different options based on how many rooms and the level of research you'd like to coordinate with seasonal lighting and foliage. Tier 1 is for one or two rooms for a fee of $3,000; Tier 2 is for an entire home for a fee of $6,000; Tier 3 also covers an entire home, except we also research how seasonal lighting changes and foliage colors impact the space for a fee of $10,000.
>
> - Space Layouts: Based on styles and colors, we design the layout of a room or space based on your existing furniture or pieces that we recommend to align with your preferences. Each room is a fee of $5,000.
>
> Learn from the example below.
>
> Assume that I give you the following input:
>
> - Budget: $50,000
>
> - Commentary: Our entire house is being renovated and we need to decide on wall colors and themes. My partner and I do not fully agree on whether to go with mid century modern or Scandinavian modern.
>
> Below is the expected response:
>
> We'll start with our Style Selection to help you both decide on how to blend those preferences without sacrificing the modern feel. From there, we'll move to our Color Palettes selection, which we'd recommend doing either Tier 2 or Tier 3. It all depends on how you'd like to tie your rooms to the landscape outside.
>
> Once those are done, we'll start our Space Layouts with the rooms that you intend to use the most. To provide pricing, we'll need to know how many rooms you'd like us to design.
>
> Generate a response given the following details:
>
> - Budget: $20,000
>
> - Commentary: Redoing our main bathroom. Curious how you'd approach this.

**Prompt for Nonprofit Fundraising**  
We're using this prompt to create a "giving grid" of clickable links that would take the recipient to a web page with an embedded donation form, as these forms often allow you to preselect amounts with a parameter.

This assumes that we have defined what the customized amounts are for this donor in step 2 of our process, which are passed as the last line of the prompt as "[400, 800, 1200, 2400]".

The result is a clickable set of links with appropriately formatted numbers for the recipient (e.g. $2,400) and the amount that should be preselected (e.g. 2400).

You can either store those clickable links in a field within your CRM or email marketing platform, or merge it directly into an email that is drafted or sent on behalf of the fundraiser.

> I will provide you an array of numbers. For each number in the array, I expect you to respond with a line of HTML with the following:
>
> 1. The number is appended to the base URL "https://www.endchildhunger.org/donate?amount=125" in the <a> element href attribute
>
> 2. The number is the inner text of the <a> element with appropriate thousands separators and prepended with the USD dollar sign ($).
>
> Learn from the example below.
>
> Assume that I give you the input: [125, 250, 500, 1000]
>
> Below is the expected response. Your response should be plain text and not include anything other than the HTML requested.
>
> <a href="https://www.endchildhunger.org/donate?amount=125">$125</a>
>
> <a href="https://www.endchildhunger.org/donate?amount=250">$250</a>
>
> <a href="https://www.endchildhunger.org/donate?amount=500">$500</a>
>
> <a href="https://www.endchildhunger.org/donate?amount=1000">$1,000</a>
>
> Generate a response given this array: [400, 800, 1200, 2400]

**TLDR:** Use generative AI within your automation routines to customize the content of your marketing and sales emails to enable hyper personalization.
