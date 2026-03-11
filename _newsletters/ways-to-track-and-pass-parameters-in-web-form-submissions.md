---
layout: newsletter
title: "Ways to Track & Pass Parameters in Web Form Submissions"
author: Roger Mitchell
date: 2024-10-05
description: "Referring people to your website and being able to capture part of that data in web form submissions is helpful to create traceability for your marketing efforts, plus it can pre-fill parts of the form to save people time. Let's take a look at ways to do this."
tldr: "Use URL parameters to track marketing data and pre-fill fields. Pass them along immediately or use techniques to keep those stored for use later."
---

Referring people to your website and being able to capture part of that data in web form submissions is helpful to create traceability for your marketing efforts, plus it can pre-fill parts of the form to save people time. Let's take a look at ways to do this.

If you're not familiar with URL parameters, read the next section; otherwise, skip ahead if you already know what those are.

**What are URL parameters?**  
They're a set of keys and values that are appended to a URL; you may also refer to these as query string or query arguments. The question mark defines where the parameters start and subsequent parameters are separated with ampersands.

Below is an example URL that has some parameters.

</newsletter?utm_campaign=october+2024+newsletter&utm_medium=email&utm_source=kit>

Using that example, there are three parameters and accompanying values:

1. utm\_campaign: october 2024 newsletter
2. utm\_medium: email
3. utm\_source: kit

**How do you track and pass these into your web form submissions?**  
There are multiple ways to do this depending on your use cases and familiarity with

1. **Use a form tool with this functionality** like [Typeform](https://www.typeform.com/help/a/dynamically-pass-hidden-fields-from-a-url-to-an-embedded-form-4404652303892/), [Gravity Forms](https://docs.gravityforms.com/using-dynamic-population/#h-query-string), etc, as these can pull data from the URL and pre-fill fields on the form, including ones that are hidden (i.e. not visible to the end user). Use this if you expect the person will fill out the form before going elsewhere on your site.
2. **Use code and a cookie** to pull the parameters from the URL, store them as a cookie (a little piece of "storage" that can stick around on the user's browser), and check the cookie when the form is being submitted to include additional data as needed. Use this if you expect the person may not fill out the form before going elsewhere, which even includes use cases where they won't come back to your site for days.
3. **Use code and server-side tracking** to pull the parameters from the URL, then store those for later use when the form is submitted. Use this if you expect the user's browser may not have cookies enabled and you need to track this data.

My preference is to use the first two, as the third can present privacy challenges by removing control from your users.

**TLDR:** Use URL parameters to track marketing data and pre-fill fields. Pass them along immediately or use techniques to keep those stored for use later.
