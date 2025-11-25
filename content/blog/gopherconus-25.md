+++
author = "hannah"
title = "i went to my first conference ever (GopherConUS '25!)"
date = "2025-08-30"
description = "AND i gave a talk."
tags = [
    "technical",
]
+++

*"If you hold a Linux shell up to your ear... you can hear the C"* - Bill Kennedy

By the time I'm starting this blog, it's August 28th and we're wrapping up GopherCon talks. It's been a long week of talks, social events, and me frantically preparing for a talk because someone thought it was a good idea to accept me (a Gopher with barely even 1 year of experience) and to let me on stage in front of hundreds of more experienced engineers. In all honesty, I was not expecting to be accepted to talk, but I was, and now here I am.

My talk, "Invisible Insight: Strategies for Auto-Instrumenting Go Applications Without Code Changes", was a journey that stretched over nearly 2 months. I went from someone who had never touched auto-instrumentation to someone who kind of, almost, *maybe* understands the ins and outs of compile time and run time instrumentation in Go. I would not claim to yet be an expert in this area, because I think it would take many more months or maybe years to reach that kind of level, but I'm 2 months smarter than I was before, and that's all I'm going to ask for.

Auto-instrumentation is, as it turns out, and entire can of worms that I did not realize I was getting into. For starters, I can't even use most other programming languages as as template for what happens in Go. Since Go is a compile-time language, other approaches to auto-instrumentation like eBPF, library injection, and annotations are difficult and sometimes impossible. The option that we, at DataDog, opted for was to use this flag called `-toolexec`. It's a funny thing that, in very simple terms, allows you to wrap the standard Go compiler (and other tools) to do extra, self-defined work for you. And when you bundle up that self-defined work into a library that you can run with a simple script, you get our tool, Orchestrion.

My talk focused mostly on Orchestrion and how it compares to the other big auto-instrumentation approach we have in the Go community: OpenTelemetry's eBPF (extended Berkeley package filter) library. As I alluded to earlier, eBPF is a runtime approach that I, at first, expected to be impossible with Go. But turns out, when you're determined (and smart) enough, eBPF *does* work. The only limitation we have with Go, once you boil it down far enough, is that we cannot make changes to our source code at runtime. So what eBPF does is to make changes to the *kernel* at runtime. Really mindblowing, if you ask me. 

So then, what's the difference? You can watch my talk to find out, or I can just tell you now. There are a couple of main differences:

| Pillar | Compile time instrumentation | eBPF |
|--------|-------------|------|
| Performance | one-time overhead at compile time | overhead at runtime |
| Safety | safe to use | requires privileged access to kernel, potentially inviting malicious parties |
| Portability | available for any program that is able to compile | requires a Linux kernel |
| Stability | only requires that your code compiles | depends on calculating address offsets, memory, and the stack |

Ta-da! All the conclusions I came to during my talk have been boiled down into that table.

More than just eBPF, toolchain and compiler systems, and telemetry knowledge, I've come out of this process with a whole lot of presentation learnings. I've done a fair share of presentations before, but they've always been small scale. Think science fairs, mini workshops in college, etc. Never once have I spoke to hundreds of people at once, live. Much less with a live demo that was not *supposed* to be live until about 10 minutes before I got up on stage. Because presentations never Go as you expect, and this one was no different.

Turns out, cramming as much as I can about an entire field of instrumentation is *hard*. There were so many details that I missed (how could I forget that a Mac does NOT run on Linux???). I'm incredibly lucky to have my amazing coworker, Kemal, who helped me throughout this entire process and helped sanity check my results. He even donated his machine to run my code on a Linux VM because my machine would *not* behave. It was his demo that got shown during my talk, so huge shoutout to him, the secret supporter behind the scenes.

And of course, as things always do, things went wrong. The demo didn't work. Or at least, it was working, but it was not giving the values that I was expecting to see. Numbers were a little off, and I have no idea how navigate it. For a brief moment (that felt like around 30 years, but was realistically around 3 seconds), I could only freeze and go through every single option I had. Bluff it off? I'm not nearly tenured or experienced enough to pull that off. Admit things were wrong and move on? Yeah.

After I got off stage, I could only sigh and immediately text all of my friends with the most dramatic retelling of how everything fell apart on stage. Because I love to exaggerate and to tell stories. But it was fine; it was a risky move to try showing things live, and it was a risk I wanted to take. It didn't work out exactly like I wanted it to, but that's fine! I can only accept that and move on in the moment.

Is there more to do? Absolutely. There is still more in the demo that I want to improve, and I want to get my Linux VM working on my machine so that I can actually see the results directly on my screen. I could make the demo more realisitic, rather than the small, black box example I currently have. I'm planning to work with Kemal to build this up. Shoutout to him again for teaching me all I know about instrumentation, and hopefully we can present the updated version of this talk in another conference!

Aside from my talk, GopherCon was a lot of fun! I've met so many Gophers from across the world and re-met several I've known. It was great seeing Katie, my former manager at Datadog, giving her talk right after me and Felix, my coworker at Datadog, going on stage right before me! And it was fantastic helping out at the Asian Alliance meetup, even if it was just to order a whole lot of sushi for the group. 

At time of writing, the recording of my talk is not yet up on the [Gopher Academy YouTube channel](https://www.youtube.com/c/GopherAcademy?app=desktop) yet, but it should be uploaded sometime soon. But if you're reading this and you're interested to see the code and to learn more, my GitHub project, including all of the code and my slides, is [here](https://github.com/hannahkm/gopherconus-2025).