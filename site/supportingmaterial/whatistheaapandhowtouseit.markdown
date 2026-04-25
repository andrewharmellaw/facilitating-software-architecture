---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
redirect_from: /what-is-the-arch-advice-process/
---
# What is the Architecture Advice Process (And How to Use It)
I get asked a lot for a quick intro to the Architecture Advice Process as well as a Guide How to Use It. While this is the topic of the book, I do understand that the book is 500+ pages. 

This then is that guide:
* in the [form of slides](https://docs.google.com/presentation/d/1-B0G1TIfiohmT_QIhUpEuBMi8iYEpTDV1W-31_RvSjE/edit?usp=sharing) with extensive notes
* a [video]() of me presenting it at Domain-Driven Design Europe 2026 (to follow)

## Additional Material
In the talk I mention a number of things that can heklp you in your adoption of the advice process. Here they are, collected into one handy list:
* **Section: The Warm Up**
  * _Sub-Section: The Landscape_
    * My talk on ["Variability, The Second Hardest Problem in Systems Architecture"](https://www.youtube.com/watch?v=AmJ1XRmRcUI)
    * [Chapter 1](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch01.html) of my book goes into much greater detail on the place of architecture practice in software delivery
  * _Sub-Section: The Central Practice_
    * My talk on the many approaches to decision-making at scale in Software, ["How We Decide"](https://docs.google.com/presentation/d/1RUiwtQ1JjEK1vYtIZZkpHC4uEAIz8QHkMVx_QMDr96w/edit?usp=sharing)
    * [Chapter 3](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch03.html) of my book goes into the same topic in even greater depth
    * [Chapter 4](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch04.html) of my book covers the Architecture Advice Process, including two, in-depth examples of it in action
    * [Chapter 7](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch07.html) of my book covers the topic of accountability, and how it is compatible with the Open Group's Open Agile Architecture (O-AA) framework.
    * The [Domain-Driven Design Europe "Everybody" Keynote](https://2022.dddeurope.com/keynote/) - this includes a link to the Miro board that in turn links to the raw data we collected
* **Section: The Reps**
  * _Sub-Section: Rep 1 - First Decision_
    * The MartinFowler.com page on all kinds of [Feature Toggles](https://martinfowler.com/articles/feature-toggles.html).
    * [Chapter 2](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch02.html) of my book goes into great detail (with examples) on the topic of significant architectural decisions
    * [Collaborative Software Design](https://collaborative-software-design.com/) by Evelyne Van Kelle, Gien Verschaste and Kenny Baas
    * [Chapter 5](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch05.html) of my book goes into the details of adopting the Architecture Advice Process from various starting points
  * _Sub-Section: Rep 2 - Deciding Out in the Open_
    *  The example ADR - "Use Environment-Variable Release Toggles to Decouple Change Deployments from Feature Releases"
      *  [With advice but before its been incorporated](https://docs.google.com/document/d/1E_XuQcf1xdvRLFesZnyH9lxy3PHvGuxuWLIAa8FcMsk/edit?usp=sharing)
      *  [Advice incorporated and decision taken](https://docs.google.com/document/d/1ZGL7DNSQY8YguGq_WYTF3oz8OpQVKHF8quLjhXJGHAA/edit?usp=sharing)
    * [Chapter 6](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch06.html) of my book goes into great detail on ADR writing, with two worked examples
  * _Sub-Section: Rep 3 - Deciding Together_
    * Example [ADR002 - Shorten Inventory IDs with Nanoid](/first-adr-example/)
    * Example [ADR003 - Change Subscription Mandates Without Costing the Customer of Company Money](/second-adr-example/)
    * [Chapter 13](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch13.html) of my book looked in great depth at both the value of, and how to keep decisions small
  * _Sub-Section: Rep 4 - Going Official_
    * [Chapter 8](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch08.html) of my book is all about setting up and running an Architecture Advice Forum (AAF)
    * An [example Architecture Advice Forum Terms of Reference](/example-aaf-tor/)
    * A [template invite for your first AAF](/aaf-first-invitation/)
    * An [example AAF standing agenda](/aaf-standing-agenda-example/)
    * My talk on Anarchy, ["Everything You Ever Wanted to Know About Anarchy (But Were Afraid to Ask)"](https://www.youtube.com/watch?v=F9CKaPWi-bQ)
    * My [conversation with Eberhard Wolff](https://www.youtube.com/watch?v=8FenEnkGGJU) that goes into even greater depth on the same topic
* **Section: Systemic Awareness**
  * _Sub-Section - System Sensing - Aspect I_
    * [Chapter 9](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch09.html) of my book covers the importance of of oganizational alignment, the concept of "minimal viable agreement", cross-functional requirements, and technology strategy
    * [Chapter 10](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch10.html) of my book dives deep into how to collectively source, and evolve Architectural Principles
    * [Chapter 11](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch11.html) of my book details how to build and maintain your organisation's own Technology Radar. (This chapter is [free to download](./../assets/pdf/facilitating_software_architecture_11.pdf) too.)
  * _Sub-Section - System Sensing - Aspect II_
    * [Chapter 15](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch15.html) of my book goes into details on safety, and how to build it
    * [Chapter 16](https://learning.oreilly.com/library/view/facilitating-software-architecture/9781098151850/ch16.html) of my book goes into leadership, and how to cultivate it at every level of your software delivery practice
* **Section: Conclusion**
  * Examples of Architecture Advice Process adoption from [OpenGI](https://www.infoq.com/presentations/teams-decision-making/), [Fleetworthy](https://www.infoq.com/articles/decentralized-architecture-advice-process/), and [Xapo Bank](https://martinfowler.com/articles/xapo-architecture-experience.html)
