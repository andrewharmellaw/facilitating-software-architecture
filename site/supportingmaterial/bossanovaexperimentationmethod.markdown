---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
redirect_from: /bossanova-experimentation/
---
# The BOSSAnova Method of Experimenting with Organizational Change
In this post I’ll share a method to tackle organizational learning in the practice of software architecture which I have found solid, predictable, and most importantly safe, and open to everyone. (It flows on from the topics I introduced in [Chapter 7: Replacing Hierarchy With Decentralized Trust](LINK-ME-IN)

|<b>Advice</b>|
|:-------|
|Just like with everything else which follows, I’m not suggesting in any way that you need to use this approach, followed to the letter. Even Netflix doesn't use it that way. As with everything else, use it as you would training wheels on a bike, but never lose sight of where you want to ultimately ride. Eventually the idea of disciplined experimentation to right-size your supporting elements will become as much a part of your culture as trust did.|

The approach is called [BOSSAnova](https://www.amazon.co.uk/Company-wide-Agility-Beyond-Budgeting-Sociocracy-ebook/dp/B0841298GC/) and it is an approach from Jutta Eckstien and John Buck to creating and sustaining an agile organization. That’s a broad remit, aligned to the general changes which Patty McCord talked about in [Powerful](https://www.amazon.co.uk/Powerful-Building-Culture-Freedom-Responsibility-ebook/dp/B077Y4WVPT/). We are more specific in our needs, being focused solely on the part of the organization where software architecture is practiced, but the techniques are entirely suitable, and perhaps easier to implement given our far narrower scope.

BOSSAnova works because it builds on top of the [Cynefin](https://thecynefin.co/about-us/about-cynefin-framework/) model appropriate for uncertain, complex and ambiguous environments; that of probe, sense, and respond. It adopts this because, as the authors state, “if you face a complex situation there is no recipe or formula you can follow. Rather than have simple recipes we will suggest simple probes to help you start experiments to test possible solutions”. 

Probes here are small, safe-to-fail experiments based on hypotheses derived from reflection on the current situation as well as on theory. When combined with sensing and responding, they allow organizations to monitor any aspect of their approach, ask questions of it in the form of experiments, and implement changes as a consequence which are suited to them and their particular circumstances. 

By being grounded in the Cynefin model of uncertainty, a BOSSAnova approach isn’t relying on things which you can’t predict or control. Neither are you trying to blindly adopt a simplistic copy of someone else’s solution to their specific circumstances and issues. What is more, with the experimental approach there is no failure, but there is true organizational learning. It’s ideally suited to our circumstances. 

So, what does a BOSSAnova experiment look like? Let’s consider a pair from the book which I’ll quote in full:

|<b>Probe: Do we need standardized metrics?<b>|
|:-------|
|<i>Background:</i> A classic problem of large, successful organizations is that bureaucracy becomes oppressive. The bureaucracy assumes that people are not inclined to use their common sense and are only looking for their own personal advantage. For example, if you are asked to report the status of your work as red, yellow, green you will be tempted to favor yellow because green is risky – it could go wrong and you’d be criticized. And red draws too much attention.|
|<i>Hypothesis:</i> Standardized reporting procedures give the illusion of an accurate picture of what's actually happening. A trusting approach would simply ask people to provide their own metric – something that reflects, from their perspective, what is actually happening and needs to be shared.|
|<i>Experiment:</i> Set aside time for members of a reporting unit, including the person they report to, to reflect on ways they might be able to describe in succinct ways how to let the others know what is actually happening with their work and them to get feedback on what they are doing. They then report using metrics they develop individually. Try for two months and then have a retrospective with everyone involved, including the manager, that asks: “do we want to continue this way of reporting?”|

and

|<b>Probe: How can we have autonomy as a team while supporting the organization’s focus?<b>|
|:-------|
|<i>Background:</i> Your team is not focusing on the things that are the most important, but is coming up with one idea after another.|
|<i>Hypothesis:</i> Although the team is self-organizing very well, there is no clear understanding about the purpose of the team or, in other words, there is passion which is not bound by the responsibility for the common aim. In this case the overall goal (which is most likely serving the needs of a customer) is not clearly understood. Giving direct exposure to the customer will focus the team on customer needs.|
|<i>Experiment:</i> Establish a closer connection with the customer so the team can understand (and at best experience) the actual need of the customer. Arrange for some team members to work with the customers and learn about their demands by experiencing the customer’s work themselves. The expected result is that the team will come up with better ideas for solving customer’s needs and greater understanding of the team’s common aim. If so, make the approach of walking and working with their customers a practice for all teams.|

BOSSAnova experiments are incredibly simple, and that’s the point. You’ve made things simpler and useful, and you need a means to keep them that way. This experimental approach, deployed with the mindset is how to do it.

A few questions arise from this. I’ll tackle each in turn.

## Where do the probes come from? 
Firstly, let’s address where the probes for experiments come from. As you can see from the examples, they are articulated in the form of a question. Think back to the story I shared in [Chapter 7: Replacing Hierarchy With Decentralized Trust](LINK-THIS-IN) regarding the all-remote company. There, after the CTO pointed out how the new supporting element was in direct opposition to their existing ways, and before we came to our alternative outcome, we challenged ourselves to ask “are the current elements of our approach to architecture practice sufficient? Is an additional supporting element necessary? How will it work with what we already have (both organization and culture)? In what form ought we to adopt it? Do we need to make subsequent changes to it? Will it break anything we already have in place? Did it create a new bureaucracy? Do we still only have what is sufficient, or is anything superfluous? Are we optimizing the overall flow (a good thing) or simply maximizing locally (a bad thing)?”

These question probes can be asked by anyone, but in my experience, they tend to come from those traditionally playing the architecture role. Why architects? Because they, more than anyone, are tasked with stewarding the overall system, now and for the future and the way to do this is to optimize the flow of delivery of quality software and learn from the feedback this generates.

This is not to say that these probe-questions solely come from architects. The benefit of the flow-finding mindset is that it can and should be taken on by everyone engaged in the act of building and running the software. When anyone and everyone is engaged in this activity the sociotechnical system–the combination of the software and the people who build, run and evolve it–becomes self-making and self-maintaining. That’s very powerful. 

Call to mind the problems in scaling groups Jo Freeman identified in her article [The Tyranny of Structurelessness](https://www.jofreeman.com/joreen/tyranny.htm) too. It’s a failure to have a supporting element of any kind imposed by one (or a few) on the many in a group. The means of adopting, shaping, reforming, and ultimately abandoning supporting elements must lie with the group. If this power permanently moves to a subset of the group then you’re again failing (just in a different way). You’re restricting who decides who decides.

|<b>CAUTION: The very first probes must come from architects</b>|
|:---------|
|The only time the “anyone can propose an experiment” rule should be broken is when first implementing the Architecture Advice Process and ADRs. I shared in Chapter 5 three approaches to adopting the Advice Process. I showed first how, while a team could take it upon themselves to model the process, they were still beholden to the responsible architect for the ultimate decision. In order for the decision–making power to be shared it has to be offered to the wider group by someone who currently holds it. It cannot be taken.|

Hopefully you can also see in the [Chapter 5: Rolling Out the Architecture Advice Process](LINK-THIS-IN) adoption tips the fundamental principles of this experimental approach with one exception. This first jump to adopt the Advice Process is a significant one, and one best associated with the adoption of ADRs in support. While it makes sense to experiment with adoption in the small to begin with, proving the benefits of this approach before committing to something more wide-ranging and significant, “in the small” still needs to incorporate the Advice Process and ADRs as a record. Adopting the former without the latter is in 99.99% of circumstances a recipe for failure.

Once the Architecture Advice Process and ADRs are up and running probes can come from anyone who is using them to practice architecture. Watch out for an “experiment class” emerging. It’s likely that those used to taking a systemic view (e.g., Architects) will be better at diagnosing blockers in flow to begin with, but this doesn’t mean they should be the only source. Coach everyone to help them think in terms of probes when they experience friction in terms of their architecture practice.

One further aspect needs to be made explicit at this point of considering where probes arise from. Probe suggestions from outside the sociotechnical system–from those not directly involved in the building, running and evolving of the software systems–should not be sought, expected, or relied upon. For example, you should not, ever, set up a team explicitly and solely tasked with “improving the flow of delivery” or somesuch. Such an “experiment class” will end up being the thing they purport to remove - a blocker in the system. Instead, those involved in delivery should look for, and experiment with, improving their own flow.

There is a reason for this, and it's the same reason Thoughtworks prefers to do “transformation through delivery”; because if you have skin in the game, and the game is (dare I mention it again) delivery and running of software, then you are best placed to make these changes. Changes, even probes, which come in from outside the system might, knowingly, but far more likely accidentally, detract from this goal.  

By allowing for, even expecting, probes to come from anyone and anywhere within the system you are optimizing your collective sense-network, and opening everyone up to signals from the entire lifecycle of software delivery and running. That is a good thing. You don’t want to get carried away with the improvements to the organization at the expense of the actual build and run of software and that brings me on to the next question.

## Running experiments
Now I’ve made it clear where experiments can arise from, let’s turn to how best to approach them.

### Who decides which experiments are run?
Questions that give rise to probes can and should come from anywhere within the engineering sociotechnical system. However, just because a question has been asked doesn't mean it should be run as an experiment.

Remember, your primary goal is always to ship valuable software and learn from it, not to finely tune the leanest organization that could ship that software. Running experiments is not a zero-time activity. You need to take the time to design them (which shouldn’t take long, but it’s not a matter of a few seconds), to run them as designed, and to capture, analyze and learn from the results. 

Now I’m not advocating here for full-blown scientific-method rigor, but neither am I suggesting you  put zero thought and preparation into things. You can see the level of detail required from the BOSSAnova example. 

### Who runs the experiments?
I’ve already warned about the emergence of an “experiment class” consisting entirely of architects.  It's also important to guard against “experiment-target favoritism”. Experiments shouldn't always be run with the same group, over and over again. This indicates the existence of favoritism. Diversity in all things is good. This means, when experiments are run, keep an eye on who they are run with over time, and if they are the same group over and over its time to see if the task could be spread out a little. 

This is not to say “experimentation should be spread equally”. Some will be more open to experimentation and have more time for it. Others will just want to be left alone. It's a bit like parenting. I’m raising this to make sure you keep an eye out for it. Remember, this whole approach is putting culture and social aspects far more front and center. This is why it’s important to implement the BOSSAnova experimental approach as carefully as the supporting elements you experiment with. All of them send messages to the collective.

### How to run the experiments
It turns out, after having set this approach up for various enterprises, and listened to others who have done similar, that there is no “best way” to decide who runs them, though there are a few no-nos. Where probes should and should not come from is relevant here. I would (unsurprisingly) aim to keep it light, open, and free from bureaucracy. The following steps work well:

1. Someone in the system suggests a probe, perhaps at a retro, standup, or other meeting, or on a group chat
1. Probe-suggestors write up the probe, and experiment details, as per BOSSAnova in the open, for everyone to see. This include all the relevant sections, with particular attention paid to the hypothesis, metrics/measurements, duration of running, and who runs it
1. The whole group decides if, when and how the experiment will be run (using either one of the decision mechanisms from chapter two, or the advice process) 
1. If selected, the experiment is run
1. Once run, the results are collated, written up, and again shared openly with the whole group
1. If successful (the hypothesis was proven), a further decision is taken by the group as to whether and how the change will be implemented by everyone. 

Additionally, because they can (as intended) have dramatic impacts on what, how, and who things are done, experiment design should incorporate input from the relevant people. 

### How long should an experiment run for?
How long should an experiment be run for? The short answer is “long enough” but how do you know how long that is? The slightly more detailed, though no more useful answer, is “long enough to be sure you’ve given the system time to respond fully”.

We can get some insight from Donella Meadows, queen of systems thinking, in this excerpt from her essay “Dancing with Systems”:

“In the strict systems sense there is no long-term/short-term distinction. Phenomena at different time-scales are nested within each other. Actions taken now have some immediate effects and some that radiate out for decades to come. 

When you’re walking along a tricky, curving, unknown, surprising, obstacle-strewn path, you’d be a fool to keep your head down and look just at the next step in front of you. You’d be equally a fool just to peer far ahead and never notice what’s immediately under your feet. You need to be watching both the short and the long term–the whole system.”

By running experiments you are making changes to the dynamics of the sociotechnical engineering system. Some of these effects will be immediate and self-evident. But not all. While it is important not to run experiments forever, it is equally important to run them for long enough that at least some second (and perhaps third) order effects begin to manifest.

Donella Meadows has a great example of these effects when she introduces the basic concepts in her book Thinking in Systems: A Primer. She talks about a bath that is filled up by a tap and drained via a plug hole. She goes through various scenarios which allows her to point out that, over time the bath might eventually empty if the rate of water coming into the bath is less than the rate it is going out the plug hole. Clearly, in this type of situation, a small change (increasing the flow of the tap slightly) there might be one of three, eventual outcomes: 

* Outcome one: the bath still keeps draining, but at a slower rate than before. 
* Outcome two: the level of water in the bath is maintained as the in and out flow rates are balanced. 
* Outcome three: the bath starts filling up

The first and third outcomes also have second order effects:

* Outcome one: the bath empties 
* Outcome three: the bath eventually overflows

These second-order effects are simply a factor of turning the tap on or off a little. If flow rates are low, observing the bath for a few seconds, or even a few minutes, would not let you know what the overall outcome would be. This is where we need to keep our eyes not only on the immediate (the tap and the plug hole) but also on the water level.

Now, this is a very simple example. Artificially simple. In the real world we are dealing with far more variables, ones we know about and ones we aren’t. There is no way to be sure if you have ever seen all the impacts of a change, but you can look out for a few things.

Firstly, you can continue to rely on everyone in the sociotechnical system to tell you what they see happening. They are a great wide-area sensing network. Not everything they pick up will be related in a meaningful way to the experiment that you are running, but it’s far better to have the awareness than not. 

Secondly, you can also pay close attention to the focus of the aspects you expect to be directly impacted by the experiment. Are there any strange things you notice? Is there a greater or lesser change than you were expecting? Is it possible to discern why? Can you see any second or third order effects? This observation can tell you a lot, and when coupled with the wide-area intelligence can give you an idea of what might be going on.

Thirdly, you get an idea of how long various experiments should be run for simply by having run others previously. Practice looking out for things at the various time horizons. The greater the order of the effect, the harder it is to spot, but practice makes perfect.

### Run one experiment at a time
Just like debugging problems on production, it’s nigh-on impossible to understand a running system of any complexity when more than one thing is being changed at any one time. Likewise with experiments. Therefore, keep your life simple initially by only running one experiment at a time. 

Once you get practiced, it is sometimes possible to scope experiments to individual teams, but watch out for the second- and third-order effects on shared elements. 

If you are still finding you are getting frustrated at the backlog of experiments building up, use this as a cue to start prioritizing the experiments. What do you think will have the greatest positive impact? Run that next.  It will also help you to focus on good experiment design and implementation, because you don’t want your time to be wasted.

### Act on the results
Finally a note or two about how to go about implementing the changes which your experiments have shown to have a net-positive impact.

This is not a book on the practice of transformations. There are others which are far better suited to giving advice on that front. (I’m thinking here of classics such as [Agile Retrospectives](https://www.amazon.co.uk/Agile-Retrospectives-Making-Pragmatic-Programmers/dp/0977616649) by Esther Derby and Diana Larsen, [The Fifth Discipline](https://www.amazon.co.uk/Fifth-Discipline-Practice-Learning-Organization-ebook/dp/B003ELY7OW/) by Peter Senge and [Dynamic Re-Teaming](https://www.heidihelfand.com/dynamic-reteaming/) by Heidi Helfand.) I do however want to share one technique which I’ve practiced unconsciously, and subsequently consciously in recent years. It takes inspiration from Rune Ulvnes’ Tight-Loose-Tight approach, but more from the name and spirit than anything else.

My approach has three stages when it comes to adopting a change. The first is “tight”. When doing this, you roll out the change making it as clear and definite what the change is as possible. For example, you are adding a new field to all new ADRs as shown in the following example probe. You can see how it tells everyone this new practice is being adopted, why, and what it is hoped will be gained from it. If needed, the experiment can be referred back to in order to make clear why this is being adopted.


|<b>Probe:</br> How do we find out how people are feeling about this new permission to decide?|
|:-------|
|<i>Background:</i> We’ve adopted the Architecture Advice Process supported by ADRs and while some teams have jumped at the chance to do their own deciding, others haven’t. Many of those teams are halfway there, but rather than deciding themselves, are asking architects to do it for them.|
|<i>Hypothesis:</i> Teams want to decide, but are afraid to take the final step and drive decisions themselves, putting their names against the outcome.|
|<i>Experiment:</i> Following the [research of Ken Power and Rebecca Wirfs-Brock](https://dl.acm.org/doi/abs/10.1007/978-3-030-29983-5_4), add a further field to the ADR template called “Mental / Physical State” which can be populated with one or more of the following options: Energized, Confident, Accommodating, Frustrated, Focused, Tired, Anxious, Angry, Relaxed, Accepting, Resigned.|

Encourage those deciding to complete this field when taking the decision (at the time the decision is moved to the “Accepted” status). Following up on this information will allow targeted interventions to support deciding by as wide a cohort as possible.

As the change rolls out, you keep a close eye on how this goes, making sure everyone is sticking to the new supporting element. For example, checking that all new ADRs have this section, and that it is completed, and completed properly. When mistakes or omissions are made, then they are called out and corrected. Not everyone may be comfortable with it to begin with, but whatever happens, the experiment will be worthwhile as it will reveal some information.

This formality is necessary because, as we saw from Jo Freeman, this sufficient structure is intended to support the collective in their mission. Typically those who will push back initially against the new measure are not the ones whom it is intended to support, and consequently to them it will seem like an additional burden (which it is) and an unnecessary one (which it isn’t). Each time I have to provide this clarity I make sure everyone understands what we were aiming for, and why what was happening was wrong. I’m certain I’m annoying to some whenever I do this, but eventually it sticks. 

The initial “tight” phase allows everyone to get past this early, painful stage, and for the systemic benefits to have a chance of noticeably kicking in. When you start to detect these, then it is time to move to the “loose” phase.

In this loose phase you are stepping back and trusting that the discipline will stay in place. You are also making space for the collective to truly understand and assimilate this new practice. This might result in innovative changes taking place. Ones which would not be possible under the harsh glare of the first “tight” phase. This is important because it allows the new element, with now generally understood outcomes, to be molded by and to the existing culture. During the loose phase you want to look for and celebrate this creativity so that everyone is aware of it, and the fact that it is not simply welcomed, but valued. In the example of the new field in the ADR template you can allow it to be left empty, and also allow other values to be recorded beyond the ones in the probe list. You can also see which of the proposed values are never used. In this stage I’m far quieter. I don’t pounce on every slip-up, instead making space for the collective to do it, and invariably, they do. It’s important at this stage to celebrate the fact the team is taking this into their own culture, using it as a way of solving their problems (to return to Edgar Schein’s definition of culture from 2004: "organizational culture is a pattern of shared basic assumptions that a group working together for a common goal has created in learning to cope with the problems of external adaptation and internal integration.").

Finally comes the second “tight” phase. Once the new element or element change has been assimilated into the system in a solid and predictable way you can start taking advantage of it and building on top of it. For that reason the return is not as abrupt. While the first “tight” was to a certain extent (necessarily) overbearing and bureaucratic, this second “tight” phase is relying on the culture to do the reinforcement. Again in the new ADR field example the list could be restricted again but to the updated list and its completion again made mandatory (assuming the experiment proved it was useful, if not, the field could be dropped entirely). I know it’s happening when I hear individuals explaining the same things I used to in the first tight stage, but now without any intervention from me. They’ll be able to explain why too. And apply it in far more subtle and nuanced ways.
