---
layout: newsletter
title: "Metaphors for Authentication & Authorization"
author: Roger Mitchell
date: 2024-08-31
description: "Authentication and authorization are two concepts that are often misinterpreted when designing and integrating systems. Fortunately, there are a couple of relatable metaphors to use in discussions."
tldr: "Authentication verifies who you are. Authorization defines what you can do."
---

Authentication and authorization are two concepts that are often misinterpreted when designing and integrating systems. Fortunately, there are a couple of relatable metaphors to use in discussions.

**The Nightclub & Jay-Z**

We’re going to a popular nightclub. The bouncer at the door checks our drivers license to confirm we are who we say we are, which is authentication. Once we’re inside, we’re able to walk around, awkwardly dance (in my case, maybe you have better moves), and notice there’s a private balcony with Jay-Z. Heading to this balcony, the security checks whether we’re on the special guest list, which is authorization.

**Hotel Pools & Gyms**

We’re checking into a hotel. The receptionist checks our passport to confirm we are who we say we are and asks for a credit card, which is authentication. We have a hotel keycard that provides access to the elevator and rooms, along with the pool and gym. Overnight, the pool and gym are not available when we try to train for a triathlon at midnight. However, the keycard still allows use of the elevator and getting back into the room.

The hotel metaphor can be extended a bit to talk about a few other topics.

* **Multi-factor authentication:** if the receptionist checks that the names on the passport and credit card match, this is an example of multi-factor authentication
* **Compromised identity & breaches:** if we lose or give the hotel keycard to someone else, this is similar to having our identity compromised or breached by bad actors
* **Revoking access:** if the hotel has a strict policy to get a new hotel keycard every 7 days, this forces us to authenticate again with the receptionist
* **Threat monitoring:** if the hotel notices that we are entering the pool and gym more than usual, they might take a variety of actions (including revoking access) to determine whether this atypical usage is normal

**TLDR:** Authentication verifies who you are. Authorization defines what you can do.
