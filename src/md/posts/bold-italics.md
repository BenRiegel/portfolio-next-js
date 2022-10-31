---
title: 'Questions not to ask: How do I italicize / bold text using CSS?'
date: '2020-10-03'
description: 'In this post, I will explain the right way to go about italicizing or bolding text when creating code.'
---

# Questions not to ask: How do I italicize / bold text using CSS?

When you're creating code, it's sometimes necessary to italicize text or make it bold. At one point when I first began coding, I tried to figure out how to do this. It's actually not as straightforward as one might think. Instead of asking, "How do I italicize / bold this text?", a better question to ask is "Does this text have some semantic content or is the italics / bolding done merely for aesthetic reasons?" If it’s the former, you should wrap the content in an appropriate semantic HTML tag. If it’s the latter, then you should use a non-semantic tag (e.g. 'span') and give it the desired styling using CSS.

## Semantic HTML tags

The following are some examples of semantic HTML tags. Pay attention to the context (written or verbal or both).

1) Use the 'i' tag if you want to highlight a specific term (e.g. taxonomic term, technical term, idiomatic term, ship name, foreign language word) or a thought. Example: "There is a white pine (*Pinus strobus*) growing in my yard." The context here is usually to make a term standout when reading. In some cases (e.g. idiomatic term), it’s possible to achieve the same results using just quotation marks.

2)	Use the 'em' tag when you want to emphasize a word or words (e.g. Get out of bed *now*! This is *not* a drill!). The context is usually to make a word or word stand out when spoken. 'em' is used to change the meaning of a sentence as spoken emphasis does (“I *love* trees” vs. “I love *trees*”).

3)	Use the 'strong' tag when you want to convey that the content has strong importance, seriousness, or urgency (e.g. a warning). The context may be writing or spoken words. Example: "The last thing I want to tell you is: **Do not open that door.**"

4) Other tags should be used in the context of definitions ('dfn'), citation ('cite'), or highlight ('mark').

## Other Notes:

Use 'b' tag when you want to draw attention to text without indicating that it’s more important. Cases might include keywords or product names in a review (e.g. "We are open every day of the year except **Christmas** and **Halloween**"). In the example, the two terms are bolded to help improve readability. There's not really any semantic meaning to 'b'. Traditionally, it has been styled with bold. If you don’t want bold (perhaps all caps), then it might be better to pick a different, non-semantic tag (e.g. 'span').

The above tags may have default styling (e.g. 'i' is italicized). It’s good practice to go ahead and give them css styling. For italics, use “font-style:italic.” For bold, use “font-weight:bold.”

In general, it’s better not to underline text unless it’s a link.
