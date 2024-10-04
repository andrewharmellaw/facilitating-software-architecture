---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
redirect_from: /alternative-architectural-principle-flavors/
---
# Alternative Architectural Principle Flavors
What I described in [Chapter 10: Collectively Sourced Architectural Principles](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch10.html) is only one way of working with principles. I arrived at it by research, experiment, trial and error, and learning from my mistakes. It is the approach to creating and using principles that I find most useful. This is not to say that you need to go about things the exact same way. As I suggested in the previous chapter, you might not even need explicit principles, at least not to begin with.

Alternatively, a change in organizational vision and goals might be so significant that it leads to a very specific strategic direction, one which ought to be captured immediately not only as principles, but also in the form of ADRs.

There are. I’ll share examples of both scenarios below. This will give you the opportunity to see principles in action in various forms, and how these differences were accommodated.

## Capture implicit principles from ADRs and advice
The first scenario occurred when I was at an organization where the principles were already (or at least largely) implicitly agreed. You could see it in the code, the architecture, and in the individual decisions as they came up. When I applied the principle of least surprise, everything felt reassuring. 

But this utopia couldn’t go on forever. The shared agreement was internalized by the current team members and could not be easily shared with new joiners. Without a way to quickly convey these agreements with new colleagues, things will ultimately get sticky. At a slower pace of growth, this could be expected to happen organically, as a consequence of working with more tenured colleagues. However, when an organization is scaling up and hiring as many new members of staff as this company was, then something additional was needed.

Although we could have held a principles workshop, I realized that there might be a more organic way of achieving the same ends. Principles could be extracted from the advice offered by some of the oldest hands at the company, specifically from their extensive and generously detailed comments on ADRs.

I wondered if these might be principles, and when I sat in an advice forumAAF one day and heard one of these more tenured individuals refer a new joiner driving a decision towards a comment they had left on an ADR which predated their less tenured colleague I realized I was onto something. Consequently, I took this comment and turned it into a “new principle” ADR. If my hypothesis was solid, then this would pass; and it did. 

Over the course of time, a few more principles emerged. By the time I moved on, we hadn’t reached the magic number 8, but I wasn’t concerned. I could have spent time capturing the other principles which I felt were implicit in the code and architecture but they still seemed self-evident to everyone. While this was the case, it felt (to me at least) that I would have been writing something down purely for its own sake. And the approach to transposing these into principles had been transparent so others could continue it after I left.

## Codify key principles as ADRs
At the other end of the scale I worked with a client who had a legacy, single-tenant, on-prem product that they wanted to convert to a multi-tenant, cloud-based SaaS offering. This was a massive change in strategy, one which they had already proven successfully with some significant supplementary offerings which began their life as cloud-native. 

Prior to my starting work with them, a colleague of mine had already done a great deal of detailed technical strategy work with them. The road ahead was clear, very clear in fact. They knew which cloud provider they would target, they knew what their definition of a tenant would be, and how the data and traffic for individual tenant customers would be kept separate. 

One outcome of this work was a pre-set list of new principles which everyone had signed up to. While they had come from the pen of one person, they had been arrived at via consultation and close collaboration with a broad spectrum of experts: product managers had contributed to a business capability map, infrastructure teams and infosec had made clear the constraints which would have to be worked within, and tech / architecture had elaborated on the intricacies of the domain, and key CFRs which would need to be catered for. 

But in order to reach the level of detail required to validate the strategy, things hadn’t stopped at the principle and CFR level of detail. As I mentioned previously, some baseline technical decisions had also been made. 

Consequently, I captured these as a set of retrospective ADRs so that they would stay at the heart of the everyday technical documentation and not get lost in a many-page strategy document intended largely for the CTO, their peers, and direct reports. The first was that a single cloud provider had been selected. The second was that the system was to be a cloud-native SaaS, and the third was that the concept of tenancy was to be handled in a certain way.

These three ADRs laid the foundation for everything that was to come. They, and the principles that they encoded, were referred to, and built on top of, again and again. Infra ADRs talked about how the roads to this SaaS would be paved and how continuous deployment and team independence was to be achieved. Other ADRs in dev teams told how key performance CFRs would be met, and how the non-trivial problems of allowing clients to self-serve which modules they wanted to enable and disable in their system, and how their individual usage and billing stats would be made available to them via bespoke dashboards.

These ADRs didn’t get referred to in depth as frequently as the principles that they underpinned, especially as slowly all the teams became comfortable with the new target architecture, but they were a deeply valuable resource, serving to articulate how we thought we would actually deliver on the technical strategy. When we wanted to see what we were thinking at some point in the past we could jump straight back to it. When we just needed to know the broad conclusions which had driven it, we stayed with the principles.
