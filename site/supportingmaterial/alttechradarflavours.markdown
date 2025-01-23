---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
redirect_from: /alternative-tech-radar-flavors/
---
# Alternative Technology Radar Flavors
I welcome you to experiment with your [tech radar](https://github.com/andrewharmellaw/facilitating-software-architecture/tree/main/radar) and see how it can work best for you and the facilitating of your software architecture. Both the quadrants and rings can be easily changed and I encourage you to experiment with them whenever you feel the need. Also play with how you engage with the radar, what extra information you store in it and alongside it. As always, don’t be restricted by these alone.  Come up with your own different approaches, tailor-made for your unique circumstances.
 
Experimentation doesn’t need to happen when you first adopt the radar. Just like the systems we build, it’s nice to be able to evolve our tooling and approaches when the circumstances indicate it might be useful. 

I’m sure you will come up with some excellent proposals of things to experiment with all on your own, but here are a few ideas to get you thinking.  

## Consciously managing strategic interventions
Organization-internal radars typically use different rings than the Thoughtworks version because the Thoughtworks version has an understandable bias towards the industry and cross-organization, while yours will reflect how _you_ build, run and evolve your systems. Yours will consequently pay much broader attention to your organization's present and past, reflecting how technologies are passing through your organization. In practice, this frequently means dropping the “trial” ring from the Thoughtworks version of the radar and adding a “retire” ring to your own radar.

Broad technology trends have life cycles all of their own, and you can’t control them, but organizations can intervene, ensuring they are in the best position to take advantage given their specific circumstances. These interventions can be either investments at the start of a blip’s life, or divestments at the end. Both of these involve time, effort, and money directed away from the day-to-day work of building and running systems. 

These investments are justified by their being directed where they will have the greatest impact, one that directly responds to the day-to-day reality of teams working with the systems. A technology radar can inform the decider, most likely an enterprise architect, where to put this investment.

### Managing strategic investments
In the ["Technology Strategy" section of Chapter 9](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch09.html#ch09_technology_strategy_1728361844867957), I talked about how your organization's vision informs what your organization invests in. The radar, specifically the interaction between blips and decisions in the advice process, provides excellent input into this incremental investment approach.

Blips can offer strong signals for areas to strategically invest in. The more attention a blip in “adopt” (or perhaps in “trial” if things are moving fast) receives in ADRs, the more likely it is a candidate for support. To direct deciders to blips which have associated strategic investments, name the expert in the blip description, and tag the blip title with an “[S]”’

This simple flagging doesn’t only help teams obtain further advice. Remember, level 1 of strategic investment (“speak to the expert”) is when you have time set aside for the expert(s) to roll their sleeves up and help teams get things working in the blip area. For example, if “Gradle” is the only build tool blip in the “Adopt” ring then this level of investment will be to name someone, let’s say Russ (who has been playing around with this build tool for their personal open source tool for a while) as the “Gradle expert" and make some of their time available to help others get their Gradle builds working.

This has benefits both ways. While Russ is helping teams get their strategically aligned builds up and running rapidly he has the benefit of seeing yet another example of this blip in the wild of your organization's technical landscape, with all its subtle differences and edge cases. This also ties your Radar into the advice process more deeply because those needing the expertise on a strategic blip know who to seek advice from. 

Strategic investment levels 2 and 3 (“On-request” and “Self-service”) operate in a similar fashion, just with increasing levels of investment. While the push to make level 1 investments might arise from the interaction between blips and decisions, these higher levels will more likely be driven by uptake of the level 1 “expertise” service. Russ might be getting asked to spend more and more of their time helping teams, and in the process has started to create some reusable artifacts–wiki pages, templates, examples and the like–to make their life easier.

When blips make this move from level 1 to level 2 (and ultimately 3) its description text should again reflect the strategic investment level. This should then in turn be reflected in decisions; a decision that goes contrary to a level 1 strategic blip ought to attract less attention than a decision that goes against a level 3. 

For example, despite all of Russ and their team’s efforts, a new team decides to use Apache Ant for one of their builds. They make a strong case in their ADR, citing certain features they need from a build tool that wasn’t available from Gradle. Russ’ team makes time to investigate this and see if they can work with Gradle to make it suitable for this use case in the future.

It hopefully goes without saying that any blips which it is decided should attract strategic investment ought to follow an advice process, and that the ADR which accompanies this should refer out to all supporting information such as independent teams’ ADRs where relevant.

### Strategic divestment and legacy displacement
That was strategic investment, but what about strategic divestment? By which I mean the cessation of investment in something when it stops being valuable to the organization. 

In software, divestment is more than just deeming a technology to be "legacy." Legacy technology can still provide value–they're just no longer receiving investment. Divestment is a step further, where time and effort (and money) is put into actively removing something. 

You might recall that when I took you through making your own radar I mentioned that I tend to drop the “assess” ring and add a “retire” ring. The latter helps you drive divestment and flag legacy migrations.

By moving a blip into “retire” you are signaling you are actively making an effort (most likely backed by time, effort, and funding) to remove a blip from your landscape entirely. (This differs from “hold” which simply signals that “we have this, it's working for us, but its legacy because we don’t want to put any more time and effort into it”.)

How can you know when to move a blip into “retire”? Periodical consideration of blips in “hold” (for example in light of vendor end-of-lifing and or generally upping support costs) combined with the flow of decisions and ADRs flagging “Relevant blips” offers detailed and context-specific inputs–what support was the blip offering teams? What issues was it causing? When combined with an idea of which teams are using or dependent upon a blip, and which others are keen to move on to other technologies and approaches, captured in detail in ADR records, this can be a data-driven conversation. What is more, it is a conversation in which all teams will have a voice given their interactions with the blips over time.

When the time comes to expend effort in strategically divesting from one or more blips, this can immediately be flagged by the blip moving to the new ring, and an associated ADR is produced explaining the thought process behind this move. The subsequent advice process offers teams and other affected parties and experts to offer their inputs. Consequently, the divestment happens explicitly, and with more risks mitigated before it even begins compared to any other approach I am aware of.

## Additional blip information
It’s up to you what information you capture in your radar. While I’d advise against changing the look and feel of the visualization itself (I’ve tried myself and it’s amazing how rapidly the addition of even one more visual element can trash its simplicity and ability to communicate a lot of information) the details area, and associated blip pages on your wiki should be considered open, fertile ground. 

The two most important aspects to bear in mind are the contents of your radar and their purpose. 

The contents of a radar are a point-in-time, frequently-updated, team-sourced view of the technical landscape and climate that you are collectively experiencing now, have experienced in the past, and can see in front of you. 

The purpose of such a radar is to offer guidance that aligns and assists decentralized deciding. 

Any changes you make ought to enhance these aspects, not detract from them. I have seen the following approaches used to manage this:

Recording which teams are using or following advice from a blip
Encouraging ad-hoc comments on blip wiki pages (similar to the “talk” tabs behind Wikipedia pages)

Good luck with any experiments you might try.
