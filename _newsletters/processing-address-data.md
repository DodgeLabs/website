---
layout: newsletter
title: "Processing Address Data"
author: Roger Mitchell
date: 2024-08-26
description: "There are a handful of concepts related to address data and systems that are helpful even if your organization doesn’t send letters or packages to customers."
tldr: "Run address validation processes on your existing data, and optionally expand to include verification and enrichment to improve quality."
---

There are a handful of concepts related to address data and systems that are helpful even if your organization doesn’t send letters or packages to customers.

The three core concepts are address validation, verification, and enrichment:

1. **Address validation** confirms that an address meets the standards established by whatever postal agency governs that location
2. **Address verification** confirms that an address actually exists in some capacity, which means that it corresponds to a real physical location and/or can actually receive mail
3. **Address enrichment** provides additional data about a location like timezone; political districts; property value, size, and features (e.g. has a pool); zoning; tenants; etc.

In the United States, we can illustrate the first two concepts with postal codes. There is a standard format that expects 5 numbers that can optionally be appended with another 4 numbers.

* 18977 and 18977-9998 are both valid and are verified
* 54321 and 54321-9876 are both valid, but are not verified, as 54321 is not a real ZIP code
* H2Y 4B2 is not valid and not verified in the US, even though this is a real postal code for Montréal

It’s also worth noting that people often overload those concepts to include additional requirements:

* **Address validation** may be expected to include standardization to ensure that data is consistent (e.g. California becomes CA, Street becomes St)
* **Address verification** may be expected to include geocoding (i.e. getting coordinates for the location) and deliverability (i.e. it’s a real address that also can receive mail)

**Address enrichment** is especially helpful for segmentation use cases, whether you intend to market to specific audiences or engage constituents for advocacy campaigns.

One common misconception is that your CRM or e-commerce system provides address verification services because it offers typeahead search powered by Google Maps. This is a feature to make it easier for people to enter addresses, but it does not explicitly mean the address is verified.

In order of priority, address validation (including standardization) is worth doing to improve analytics and reporting. Depending on your organization’s needs, address enrichment and address verification swap second and third place.

**TLDR:** Run address validation processes on your existing data, and optionally expand to include verification and enrichment to improve quality.
