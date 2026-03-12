---
layout: slides
title: Slides Test
---

# The Kitchen Sink
Welcome to the comprehensive Markdown test deck. 

Use the **Right Arrow** to advance to the next horizontal slide, or the **Down Arrow** for vertical slides.

---

## Text Formatting
You can use all standard inline text formatting.

* **Bold Text** (or __Bold Text__)
* *Italic Text* (or _Italic Text_)
* ***Bold and Italic***
* ~~Strikethrough~~

You can also use `inline code` to highlight specific words, or add [hyperlinks to Dodge Labs](https://dodgelabs.io).

---

## Section
Here is a standard bulleted list:

* First item
* Second item
* Third item
  * Indented sub-item 1
  * Indented sub-item 2
* Fourth item

Press **Down** to see Ordered Lists.

--

### Heading 3
Here is a numbered list:

1. First item
2. Second item
3. Third item
   1. Indented sub-item 1
   2. Indented sub-item 2
4. Fourth item

Press **Down** to see Task Lists.

--

#### Heading 4
Great for showing progress or checklists:

- [x] Integrate Reveal.js
- [x] Configure Dodge Labs branding
- [x] Write the CSS overrides
- [ ] Deliver the presentation

--

##### Heading 5
Great for showing progress or checklists:

- [x] Integrate Reveal.js
- [x] Configure Dodge Labs branding
- [x] Write the CSS overrides
- [ ] Deliver the presentation

--

###### Heading 6
Great for showing progress or checklists:

- [x] Integrate Reveal.js
- [x] Configure Dodge Labs branding
- [x] Write the CSS overrides
- [ ] Deliver the presentation

---

### Blockquotes
You can use blockquotes to highlight important statements or quotes.

> "If you can dodge a wrench, you can build a presentation."
> 
> – Patches O'Houlihan

Nested blockquotes also work:
> Level 1 quote
>> Level 2 quote

---

### Code Blocks
Reveal.js natively supports code highlighting. 

```javascript[1-11]
// A simple JavaScript function
function greetUser(name) {
  if (!name) {
    return "Hello, stranger!";
  }
  return `Hello, ${name}! Welcome to Dodge Labs.`;
}

console.log(greetUser("Client"));
```

---

### Tables

| Feature | Built-in Theme | Custom CSS |
| :--- | :---: | ---: |
| Fast Setup | **Yes** | No |
| Brand Match | No | **Yes** |
| Effort | Low | Medium |
| Effort | Low | Medium |
| Effort | Low | Medium |

---

## Images
You can embed images using standard markdown syntax. 

![Dodge Labs Logo](/assets/images/dodge-labs-logo-white.png)

*If this image is massive, we may need to add a `max-height` rule to the `img` tag in your `slides.css` file!*

---

## Thematic Breaks
Sometimes you just need a visual separator on a slide.

You can use three asterisks `***` or three underscores `___` (Make sure not to use three dashes, as Reveal will think it's a new slide!).

***

Like this.

---

# Speaker Notes
Reveal.js supports speaker notes that only you can see in the presenter view (Press **S** on your keyboard to open it!).

Here is how you write them:

Note:
This text will not appear on the main slide. 
It only shows up in the speaker notes window. You can use markdown in here too!

---

# The End
You're ready to start building decks.