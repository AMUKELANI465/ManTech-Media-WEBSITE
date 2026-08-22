// ==========================================================
// HOW TO POST A NEW STORY
// ==========================================================
//
// 1. Copy the block below (from "id:" to the closing "},")
// 2. Paste it as a new entry inside the articles[] array further
//    down this file — anywhere in the list, order doesn't matter.
// 3. Fill in your own title, text and category.
// 4. Save the file. That's it — no build step, nothing else to
//    run. The new story will automatically show up on:
//      - the homepage (if it's one of the newest)
//      - its category page (news / apple / devices / business / south-africa)
//      - search
//      - pages/article.html?id=YOUR-ID
//
// FIELD NOTES:
//   id           Must be unique, lowercase, words separated by
//                dashes. This becomes the URL: article.html?id=...
//   category     Must be exactly one of:
//                "news"  "apple"  "devices"  "business"  "south-africa"
//                (this decides which category page it appears on
//                and which placeholder image it uses)
//   categoryName The human-readable label shown on the page —
//                keep it matching the category, see the table below.
//   date         Format YYYY-MM-DD. Newest date = shows first.
//   image        Leave as the category placeholder shown below,
//                or point it at your own image inside assets/images/.
//   content      An array of paragraphs/headings, in reading order.
//                Use { type: "heading", text: "..." } for a subheading,
//                or { type: "paragraph", text: "..." } for body text.
//
//   category        categoryName      placeholder image
//   ------------------------------------------------------------
//   news            News              /assets/images/news.jpg
//   apple            Apple             /assets/images/apple.jpg
//   devices          Devices           /assets/images/devices.jpg
//   business         Business          /assets/images/business.jpg
//   south-africa     South Africa      /assets/images/south-africa.jpg
//
// ---- COPY FROM HERE ----
//
//     {
//         id: "your-story-slug-here",
//         title: "Your Headline Here",
//         description: "One or two sentences — used as the preview text and social share caption.",
//         category: "news",
//         categoryName: "News",
//         date: "2026-01-01",
//         readTime: "3 min read",
//         image: "/assets/images/news.jpg",
//         content: [
//             { type: "paragraph", text: "Your opening paragraph." },
//             { type: "heading", text: "An optional subheading" },
//             { type: "paragraph", text: "More body text." }
//         ]
//     },
//
// ---- COPY TO HERE ----

console.log("Mantech articles data loaded.");
console.log("Mantech articles data loaded.");

const articles = [

    // ============================== APPLE ==============================
    {
        id: "iphone-17-pro-review",
        title: "iPhone 17 Pro: What Actually Changed This Year",
        description: "A heat-forged aluminum unibody, a vapor chamber, and Apple's biggest camera jump in years.",
        category: "apple",
        categoryName: "Apple",
        date: "2026-08-14",
        readTime: "5 min read",
        image: "/assets/images/articles/iphone-17-pro-review.jpg",
        content: [
            { type: "paragraph", text: "Apple's iPhone Pro line has looked more or less the same for a few years running — a familiar silhouette, a familiar camera bump, incremental gains you'd only notice on a spec sheet. The iPhone 17 Pro is the first real design shift in a while, and almost all of it is in service of one unglamorous problem: heat." },
            { type: "heading", text: "A new chassis, built around cooling" },
            { type: "paragraph", text: "The iPhone 17 Pro moves to a heat-forged aluminum unibody with an internal vapor chamber, a first for the iPhone line. It sounds like a manufacturing footnote, but it changes what the phone can actually do. The A19 Pro chip inside is meaningfully faster than its predecessor on paper, but the more important number is how long it can hold that performance before throttling. In our own use, the difference showed up exactly where you'd expect: fifteen-plus minutes into a demanding game, or partway through exporting a long 4K clip, the phone was still running near full tilt instead of visibly slowing down." },
            { type: "paragraph", text: "None of this matters if you mostly use your phone for messages, email and the odd photo. It matters a great deal if you're a creator, a mobile gamer, or someone who leans on their phone as a genuine production tool." },
            { type: "heading", text: "The camera system gets a real upgrade" },
            { type: "paragraph", text: "All three rear cameras are now 48-megapixel, including the telephoto, which brings 8x optical-quality zoom — the longest reach Apple has offered on an iPhone. Past generations treated the telephoto lens as the weakest of the three; this year it finally behaves like the other two, holding detail well past the point where older iPhone zooms would fall apart into mush. The front camera jumps to 18 megapixels with a new Center Stage mode that automatically reframes group selfies as people move in and out of frame, which is a small feature but a genuinely useful one." },
            { type: "quote", text: "The upgrade that matters most isn't the headline megapixel count. It's that the telephoto lens finally behaves like the other two." },
            { type: "heading", text: "Price and where it sits in the lineup" },
            { type: "paragraph", text: "The iPhone 17 Pro starts at $1,099, with the larger Pro Max starting at $1,199. That sits above the standard iPhone 17 at $799 and the iPhone Air at $999. Storage now starts at 256GB across the entire Pro range, which quietly removes the awkward 128GB base option that felt stingy in previous years given how large modern photo and video files have become." },
            { type: "paragraph", text: "For anyone still carrying an iPhone 14 or older, this is one of the most straightforward upgrade arguments Apple has made in a few generations — faster, cooler-running, and a camera system that's finally consistent across all three lenses. For iPhone 16 Pro owners, the case is thinner. The cooling and camera gains are real, but they're built for people who push their phone hard — heavy gaming, long video shoots, sustained workloads — rather than everyday use. If that's not you, it's a generation you can comfortably skip." }
        ]
    },
    {
        id: "iphone-air-thinnest-iphone",
        title: "iPhone Air: Apple's Thinnest iPhone Yet, And The Trade-offs That Come With It",
        description: "A new tier between the standard iPhone 17 and the Pro line, built around one number: thickness.",
        category: "apple",
        categoryName: "Apple",
        date: "2026-08-07",
        readTime: "4 min read",
        image: "/assets/images/articles/iphone-air-thinnest-iphone.jpg",
        content: [
            { type: "paragraph", text: "The iPhone Air is Apple's answer to a question it hasn't really asked before: what if the priority wasn't the best camera system, or the fastest chip, but simply how the phone feels the moment you pick it up? It's a genuinely different kind of iPhone, and it's worth understanding what you're trading away to get it." },
            { type: "heading", text: "What you actually get" },
            { type: "paragraph", text: "At $999, the iPhone Air sits between the standard iPhone 17 and the Pro models. It ships with a single 48-megapixel rear camera rather than the Pro's triple system, and it leans entirely on computational photography to make up the difference in versatility. For most everyday shooting — people, food, travel snapshots — it holds up well. Where it falls short is anything requiring real optical zoom or the kind of low-light flexibility a second or third lens provides." },
            { type: "heading", text: "The trade-off nobody can engineer around" },
            { type: "paragraph", text: "Thinner phones have less room for battery, and no amount of chip efficiency fully solves that. Apple's answer is an optional battery pack accessory that clips on and restores a full day of typical use. It's a sensible solution, but it also tells you most of what you need to know about the Air's standalone battery life: strong for a light day, tight for a heavy one, and genuinely limiting if you travel or work away from a charger for long stretches." },
            { type: "paragraph", text: "In daily testing, the Air comfortably covered a normal day of messaging, browsing, music and moderate camera use, finishing with enough charge to feel safe. Add sustained navigation, hotspot use, or a few hours of video calls, and the battery pack stops feeling optional." },
            { type: "heading", text: "Who it's actually for" },
            { type: "paragraph", text: "This isn't a phone for someone chasing the best zoom lens or the longest battery life on the market — the iPhone 17 Pro and Pro Max exist for exactly that. The Air is for someone who wants an iPhone that genuinely disappears in a pocket or a small bag, and who is willing to plan their day, or carry a battery pack, around that trade-off. If that description doesn't sound like you, the standard iPhone 17 at $799 gives up very little of the Air's design language while keeping a more forgiving battery." }
        ]
    },
    {
        id: "macos-tahoe-apple-intelligence",
        title: "macOS Tahoe And Apple Intelligence: What's Actually Working Now",
        description: "Apple Intelligence is out of beta in more places, but language and region support still shape the experience.",
        category: "apple",
        categoryName: "Apple",
        date: "2026-08-02",
        readTime: "4 min read",
        image: "/assets/images/articles/macos-tahoe-apple-intelligence.jpg",
        content: [
            { type: "paragraph", text: "macOS Tahoe has been available as a free update for a few months now, which makes it a much more useful thing to write about than it was on launch day. Early reviews of any operating system tend to describe what a company promised. This is a look at what's actually holding up once the update has been living on real machines, doing real work, for a while." },
            { type: "heading", text: "The system-level improvements are the real story" },
            { type: "paragraph", text: "Independent of Apple Intelligence entirely, macOS Tahoe brings a noticeably snappier Spotlight, a redesigned notification system that's easier to triage at a glance, and better multi-display handling for anyone working across more than one screen. These are the kind of changes that don't make for exciting keynote slides but that you feel every single day." },
            { type: "heading", text: "Apple Intelligence, region by region" },
            { type: "paragraph", text: "Apple Intelligence support currently spans English, French, German, Spanish, Japanese, and both simplified and traditional Chinese, with more languages promised on a rolling basis. Availability still varies meaningfully by region, and a handful of the more ambitious features — particularly around deep Siri integration with third-party apps — remain in limited beta even where the base language is supported." },
            { type: "paragraph", text: "The practical effect is that two people running the exact same macOS Tahoe build can have quite different experiences of \"Apple Intelligence\" depending on where they live and which language their system is set to. Apple has been reasonably transparent about this in its release notes, but it's easy to miss unless you go looking." },
            { type: "heading", text: "What's actually reliable today" },
            { type: "paragraph", text: "Writing tools — proofreading, tone rewriting, summarization — are the most consistently polished part of the release, and they work offline on any Apple Silicon Mac without needing a server round-trip, which also means they're fast. Photo cleanup tools for removing background objects are similarly solid. The more ambitious, deeply personalized Siri features are still the weakest link, occasionally understanding a request perfectly and occasionally missing context a human would catch instantly." },
            { type: "paragraph", text: "The honest takeaway for anyone deciding whether to update: the core system improvements in macOS Tahoe are worth having regardless of whether Apple Intelligence features are fully available in your language yet. Treat the AI layer as a bonus that gets better every few months, not the reason to update today." }
        ]
    },
    {
        id: "apple-watch-lineup-explained",
        title: "Apple Watch Series 11, Ultra 3 and SE 3: The Full Lineup, Explained",
        description: "Three watches, three very different buyers — how Apple's current lineup actually breaks down.",
        category: "apple",
        categoryName: "Apple",
        date: "2026-07-29",
        readTime: "5 min read",
        image: "/assets/images/articles/apple-watch-lineup-explained.jpg",
        content: [
            { type: "paragraph", text: "Apple's current Watch lineup — Series 11, Ultra 3 and SE 3 — is the most clearly segmented it has ever been. In previous years the difference between models was mostly a matter of budget: pay more, get more sensors, roughly in a straight line. That's no longer really true. Each model today is built around a specific kind of buyer, and picking the wrong one means either overpaying for features you'll never use or under-buying for a lifestyle that needed more." },
            { type: "heading", text: "Series 11 — the right choice for most people" },
            { type: "paragraph", text: "Starting at $399, the Series 11 runs on a new S10 chip and adds cardiovascular sensors capable of flagging early signs of hypertension over time — a first for the Watch line, though Apple is careful, correctly, to frame this as a wellness signal rather than a diagnosis. For the person who wants accurate activity tracking, sleep monitoring, notifications, and a watch that looks like a watch rather than a piece of sports equipment, this is still the sensible default." },
            { type: "heading", text: "Ultra 3 — built for endurance, not everyday wear" },
            { type: "paragraph", text: "At $799, the Ultra 3 adds satellite connectivity for messaging outside cell coverage, dual-frequency GPS for more accurate tracking in dense urban environments or under tree cover, and roughly double the battery life of the Series 11. It is, genuinely, overkill for someone who commutes, works out at a gym, and sleeps in their own bed most nights. It is exactly right for someone who hikes multi-day routes, sails, or spends serious time somewhere a phone signal doesn't reach." },
            { type: "heading", text: "SE 3 — the value pick, with real compromises" },
            { type: "paragraph", text: "At $249, the SE 3 skips ECG and blood oxygen monitoring entirely, but keeps an always-on display and fast charging — both of which were Series-exclusive features just two generations ago. It's a genuinely good watch for the price, provided you're comfortable giving up the more clinical health tracking that the Series 11 offers." },
            { type: "heading", text: "The deciding factor isn't really the hardware" },
            { type: "paragraph", text: "All three watches run watchOS 26 and share the same core health platform, notification system and app ecosystem. Which means the decision that matters most isn't a spec sheet comparison — it's an honest look at how you'll actually use the watch. Someone buying the Ultra 3 for occasional weekend walks is paying for a battery and a satellite chip they'll rarely need. Someone buying the SE 3 for serious training is going to miss blood oxygen data they didn't realize they wanted. Match the watch to the life, not the other way around." }
        ]
    },
    {
        id: "ipad-pro-m5-laptop-replacement",
        title: "iPad Pro With M5: Is It Finally A Laptop Replacement?",
        description: "Faster than most laptops on paper, still held back by the same old problem: the software.",
        category: "apple",
        categoryName: "Apple",
        date: "2026-06-30",
        readTime: "5 min read",
        image: "/assets/images/articles/ipad-pro-m5-laptop-replacement.jpg",
        content: [
            { type: "paragraph", text: "Every iPad Pro launch comes with some version of the same question: is this finally the one that replaces a laptop? The M5 iPad Pro is, on raw hardware terms, the strongest case Apple has ever made. Whether that translates into an honest yes depends entirely on what kind of work you actually do." },
            { type: "heading", text: "The hardware case is basically settled" },
            { type: "paragraph", text: "The M5 chip inside this iPad Pro outperforms the base M5 MacBook Air in sustained multi-core workloads, thanks to a slightly more aggressive cooling design hidden inside that impossibly thin body. Photo and video editing, even fairly demanding timelines in apps built for iPadOS, run smoothly. The Liquid Retina display remains best-in-class for anyone doing colour-sensitive creative work. If the argument were purely about horsepower, this piece would end here." },
            { type: "heading", text: "Where it still runs into iPadOS" },
            { type: "paragraph", text: "The limitation was never the chip. It's the operating system sitting on top of it. Multitasking on iPadOS has improved steadily over several years and is genuinely capable now for anyone who's willing to learn its particular gestures and window management model — but it is still not the same mental model as a desktop OS, and switching between the two regularly creates real friction. File management, background processes, and running more specialised professional software (the kind that simply doesn't have an iPad version and likely never will) remain the iPad's weak points." },
            { type: "paragraph", text: "External monitor support is solid but not universal across every app, and certain pro workflows — heavier coding environments, some music production setups, anything relying on niche desktop-only software — simply aren't available no matter how fast the chip underneath is." },
            { type: "heading", text: "Who should actually make the switch" },
            { type: "paragraph", text: "If your work already lives comfortably inside apps that have strong iPadOS versions — most creative suites, note-taking, writing, presentation building, most everyday business tasks — the M5 iPad Pro paired with the Magic Keyboard is a genuinely great laptop alternative, and a lighter one to carry. If your job depends on specific desktop software with no iPad equivalent, or on file and window management that behaves exactly like macOS or Windows, this remains a brilliant tablet that happens to be extremely fast, not a laptop replacement. The hardware stopped being the limiting factor years ago. The honest answer to \"can this replace my laptop\" has always been about your workflow, not Apple's silicon." }
        ]
    },

    // ============================== DEVICES ==============================
    {
        id: "macbook-pro-m5-pro-max-review",
        title: "MacBook Pro With M5 Pro And M5 Max: Is The Upgrade Worth It?",
        description: "Apple's March refresh brought Thunderbolt 5 and a new N1 networking chip — but the leap is smaller than the marketing suggests.",
        category: "devices",
        categoryName: "Devices",
        date: "2026-08-13",
        readTime: "5 min read",
        image: "/assets/images/articles/macbook-pro-m5-pro-max-review.jpg",
        content: [
            { type: "paragraph", text: "Apple's 14- and 16-inch MacBook Pro models with M5 Pro and M5 Max became available in March, following the base M5 model that had already arrived the previous October. The pitch is a familiar one for Apple at this point in a chip cycle: faster processors, longer battery life, the same design language carried over largely unchanged." },
            { type: "heading", text: "What's actually new" },
            { type: "paragraph", text: "The most meaningful change in this refresh isn't the CPU or GPU core counts, which improve incrementally as expected. It's the new N1 chip — Apple's own networking silicon — which brings Wi-Fi 7 support and Bluetooth 6 to the MacBook Pro for the first time. Thunderbolt 5 also arrives across these models, enabling faster external displays and considerably quicker external storage throughput than the outgoing generation supported." },
            { type: "paragraph", text: "Design and display hardware are unchanged from the previous generation, and the camera and audio components carry over as well. This is, in the clearest possible terms, a components refresh rather than a redesign — which is not a criticism so much as an accurate description of what you're paying for." },
            { type: "heading", text: "Real-world performance" },
            { type: "paragraph", text: "In our rendering and export tests, the M5 Pro model showed solid but genuinely incremental gains over last year's base M5 chip — noticeable in sustained, longer export and render workloads where extra GPU cores and thermal headroom have time to compound, considerably less dramatic in everyday tasks like browsing, writing or video calls. For anyone doing serious video editing or 3D rendering professionally, the jump is worth having and will save real hours over a working week. For general use, the base M5 model remains the better value by a wide margin." },
            { type: "heading", text: "Pricing" },
            { type: "paragraph", text: "The 14-inch M5 Pro model starts at $2,199, rising to $2,699 for the 16-inch version. The M5 Max configuration starts at $3,599. The entry-level 14-inch MacBook Pro with the base M5 chip remains available from $1,599 for buyers who don't need Pro or Max-level performance — and based on our testing, that's a larger group of people than the marketing around this launch would suggest." },
            { type: "paragraph", text: "The honest recommendation: if your work genuinely requires sustained heavy compute — long render queues, large 3D scenes, professional colour grading — the M5 Pro or Max earns its price premium. If your heaviest regular task is a video call, a spreadsheet, or the occasional photo edit, you are very unlikely to notice the difference between this chip and the base M5 in daily use, and the money is better spent elsewhere." }
        ]
    },
    {
        id: "galaxy-s26-what-we-know",
        title: "Samsung Galaxy S26: The Chip, The Camera, And What Changed",
        description: "Samsung's early-year flagship launched with a new Exynos chip and a design Samsung calls its most refined yet.",
        category: "devices",
        categoryName: "Devices",
        date: "2026-08-10",
        readTime: "4 min read",
        image: "/assets/images/articles/galaxy-s26-what-we-know.jpg",
        content: [
            { type: "paragraph", text: "Samsung kept its usual early-year rhythm, unveiling the Galaxy S26 lineup at Unpacked with the Galaxy S26 Ultra leading the range, alongside the standard S26 and S26 Plus. If you've followed Samsung's flagship cadence for a few years, the broad strokes will feel familiar: a refined design, a new chip, and Galaxy AI pushed further into daily use than the year before." },
            { type: "heading", text: "A new chip, built in-house" },
            { type: "paragraph", text: "The headline hardware story is the Exynos 2600, which Samsung says brings a world-first manufacturing process and a meaningful jump in power efficiency over the previous generation's Snapdragon-heavy split. It's a clear signal that Samsung is leaning back into its own silicon program rather than relying solely on Qualcomm variants for its flagship line — a strategic bet as much as a technical one, since it gives Samsung more control over cost and supply going forward." },
            { type: "paragraph", text: "In our early benchmarking, the Exynos 2600 held its own comfortably against last year's chip in sustained workloads, with noticeably better thermal behaviour during extended gaming sessions — an area where earlier Exynos generations sometimes lagged behind their Snapdragon counterparts." },
            { type: "heading", text: "Galaxy AI, expanded" },
            { type: "paragraph", text: "As expected, Galaxy AI featured heavily at Unpacked, extending further into the camera, keyboard and multitasking experience. Real-time translation during calls is noticeably faster and more natural-sounding than the previous generation's implementation. Samsung has also confirmed it's exploring on-device \"vibe coding\" tools that would let people build simple phone apps directly on a Galaxy device — still early and clearly experimental, but a clear signal of where the company sees AI on mobile heading next." },
            { type: "heading", text: "Who should upgrade" },
            { type: "paragraph", text: "For anyone currently on a Galaxy S23 or older, the S26 represents a substantial jump across chip performance, camera quality and battery efficiency — a genuinely compelling upgrade case. For S24 and S25 owners, this generation reads more as a refinement than a must-have: real improvements, but not the kind that will make your current phone feel dramatically outdated. If your S24 or S25 is running well, there's little urgency to move this cycle." }
        ]
    },
    {
        id: "windows-laptops-2026-buying-guide",
        title: "What To Look For In A Windows Laptop Right Now",
        description: "Between Copilot+ requirements and new chip options, a few new specs are worth checking before you buy.",
        category: "devices",
        categoryName: "Devices",
        date: "2026-07-28",
        readTime: "4 min read",
        image: "/assets/images/articles/windows-laptops-2026-buying-guide.jpg",
        content: [
            { type: "paragraph", text: "The Windows laptop market has quietly added a new spec worth checking before you buy, one that barely existed as a consumer talking point two years ago: NPU performance, measured in TOPS (trillions of operations per second). This number now determines whether a machine qualifies as a Copilot+ PC and gets access to a growing set of on-device AI features that run locally rather than over the internet." },
            { type: "heading", text: "Why the NPU number actually matters" },
            { type: "paragraph", text: "On-device AI features — live captioning, background blur that doesn't chew through battery, local image generation tools built into Windows — all lean on the NPU rather than the CPU or GPU. A laptop below the Copilot+ threshold can often still run these features, just slower, hotter and with a noticeably shorter battery life while doing so. If any of these features matter to you, checking the TOPS rating before buying is now a genuinely practical step, not a marketing footnote to skip past." },
            { type: "heading", text: "Beyond the chip: what still matters most" },
            { type: "paragraph", text: "For most everyday buyers, the practical advice hasn't changed much despite all the new AI branding. Prioritise a sharp, colour-accurate display over an extra few hundred megahertz of CPU clock speed — you'll notice a good screen every single time you open the lid, and you'll rarely notice a marginal clock speed bump in daily use. Check battery life claims against independent, real-world reviews rather than manufacturer marketing numbers, which are almost always measured under best-case conditions nobody actually experiences." },
            { type: "paragraph", text: "Build quality is worth paying attention to as well. A laptop with a slightly weaker chip but a sturdier hinge and a better keyboard will often serve you better over three years than one with marginally faster benchmarks and a chassis that starts creaking within twelve months." },
            { type: "heading", text: "RAM is not the place to save money" },
            { type: "paragraph", text: "For anyone doing heavier creative or technical work — video editing, larger spreadsheets, running multiple demanding applications at once — RAM matters more than most spec sheets suggest. 16GB is a reasonable floor in 2026, not a premium option, and 8GB configurations that are still marketed as sufficient for \"everyday use\" will feel noticeably strained within a year or two as software continues to grow heavier. If a retailer is pushing you toward an 8GB model to hit a lower price point, treat that as a real trade-off, not a rounding error." }
        ]
    },
    {
        id: "pixel-10-whats-new",
        title: "Google Pixel 10: What Actually Changed This Year",
        description: "Google's own chip gets faster, the camera gets smarter, and Gemini goes deeper into the phone than any assistant has before.",
        category: "devices",
        categoryName: "Devices",
        date: "2026-05-14",
        readTime: "4 min read",
        image: "/assets/images/articles/pixel-10-whats-new.jpg",
        content: [
            { type: "paragraph", text: "The Pixel line has always been Google's clearest statement about what a phone should feel like when the hardware and software are built by the same company with the same priorities. The Pixel 10 continues that story, and this year the most interesting changes are less about raw specs and more about how deeply Gemini has been woven into the phone itself." },
            { type: "heading", text: "A faster, cooler-running Tensor chip" },
            { type: "paragraph", text: "Google's Tensor chips have historically traded some raw benchmark performance for a design tuned specifically around AI and camera processing. The chip inside the Pixel 10 continues that philosophy, but closes the sustained-performance gap with rival flagships noticeably compared to previous generations — the phone runs demanding tasks for longer before you feel any real slowdown, a common complaint with earlier Tensor chips." },
            { type: "heading", text: "The camera leans harder into computational smarts" },
            { type: "paragraph", text: "Google has never tried to win the megapixel race outright, betting instead on processing. That bet continues to pay off: low-light photography remains among the best available on any phone, and a new editing feature can identify and remove moving objects from a burst of shots with impressive, occasionally uncanny accuracy. It's the kind of feature that sounds like a gimmick in a keynote and turns out to be genuinely useful the first time your kid's soccer game photo has a stranger walking through the background." },
            { type: "heading", text: "Gemini, everywhere" },
            { type: "paragraph", text: "The bigger shift is how far Gemini now reaches into the operating system. It can read the content of an app you're currently looking at and offer relevant actions — summarising a long group chat, extracting a date from a screenshot into your calendar, drafting a reply to an email in your own established tone — without you needing to manually copy anything across apps. It's the clearest expression yet of Google's advantage as both the phone maker and the AI company: this kind of deep, cross-app integration is hard for a manufacturer without their own foundation model to replicate quickly." },
            { type: "paragraph", text: "For existing Pixel owners on a Pixel 8 or newer, the Pixel 10 is a solid but not urgent upgrade — most of the software-side Gemini features are rolling out to older Pixels too, on a staggered schedule. For anyone switching from another Android phone, or from an iPhone specifically to get closer to Google's AI ecosystem, it's currently the most complete expression of that experience on the market." }
        ]
    },
    {
        id: "how-to-choose-a-laptop-2026",
        title: "How To Choose A Laptop In 2026 Without Overspending",
        description: "A practical framework for matching what you actually do to what you actually need to pay for.",
        category: "devices",
        categoryName: "Devices",
        date: "2026-04-18",
        readTime: "5 min read",
        image: "/assets/images/articles/how-to-choose-a-laptop-2026.jpg",
        content: [
            { type: "paragraph", text: "Every laptop buying guide eventually becomes a spec sheet comparison, which is exactly backwards. The right question isn't which laptop has the best numbers — it's which numbers actually matter for what you're going to do with the thing every single day. Here's a simpler way to think about it." },
            { type: "heading", text: "Start with your heaviest regular task, not your occasional one" },
            { type: "paragraph", text: "It's tempting to buy for the one time a year you might edit a video or run a big spreadsheet model. Don't. Buy for what you do most days. If that's browsing, documents, video calls and streaming, almost any current mid-range laptop with 16GB of RAM will handle it comfortably for years, and spending more buys you very little you'll notice. If your daily work genuinely involves video editing, software development, or heavier creative tools, build your budget around that baseline instead — and accept that the everyday tasks will feel effortless as a side effect." },
            { type: "heading", text: "Screen and keyboard beat clock speed, almost every time" },
            { type: "paragraph", text: "You will look at your laptop's screen and touch its keyboard thousands of times before you ever think consciously about its processor. A sharp, colour-accurate display and a keyboard with good key travel and a solid deck (no flex when you type) will improve your daily experience more reliably than an extra 10% on a benchmark chart. If a retailer offers you a choice between a faster chip and a better screen at the same price, take the screen." },
            { type: "heading", text: "Battery life claims need a discount" },
            { type: "paragraph", text: "Manufacturer battery estimates are measured under conditions nobody actually replicates — minimum brightness, no background apps, often video playback rather than real mixed use. As a rule of thumb, expect real-world battery life to land at roughly 60-70% of the advertised figure under normal daily use. If a laptop claims 18 hours and you need it to reliably last a full workday without a charger, that's a comfortable margin. If it claims 10 hours and you need a full workday, it's a closer call than the spec sheet suggests." },
            { type: "heading", text: "The upgrade you can't do later is the one to prioritise now" },
            { type: "paragraph", text: "On most modern laptops, RAM and storage are soldered in and cannot be upgraded after purchase. Processor speed is fixed regardless. If you're choosing between spending extra on RAM versus a slightly faster chip at the same price point, choose RAM — it's the one decision you genuinely can't undo six months from now when your workload has quietly grown heavier than you expected." }
        ]
    },

    // ============================== BUSINESS ==============================
    {
        id: "business-case-patient-product-development",
        title: "The Business Case For Patient Product Development",
        description: "Why technology leaders are investing in fewer bets — and giving them longer to work.",
        category: "business",
        categoryName: "Business",
        date: "2026-08-13",
        readTime: "5 min read",
        image: "/assets/images/articles/business-case-patient-product-development.jpg",
        content: [
            { type: "paragraph", text: "For a few years, speed was the entire strategy in technology: ship fast, learn fast, move on to the next bet before the current one has fully proven itself either way. A growing number of technology leaders are now openly questioning whether that pace was ever building anything durable, or simply generating the appearance of progress." },
            { type: "heading", text: "Fewer bets, longer runways" },
            { type: "paragraph", text: "The businesses making this case aren't slowing down out of caution or a loss of ambition. They're choosing to build fewer products at once and deliberately giving each one the runway to find a real, sustainable market — rather than judging its viability after a single disappointing quarter and moving on to the next idea." },
            { type: "paragraph", text: "One senior product leader we spoke with described the old approach bluntly: \"We were optimising for a good-looking roadmap slide, not a good business. Killing a product after one quarter tells you almost nothing except that it didn't go viral immediately — which was never a reasonable bar in the first place.\"" },
            { type: "heading", text: "A harder story to tell investors, an easier one to tell customers" },
            { type: "paragraph", text: "This shift is proving to be a harder pitch in the boardroom, where investors accustomed to counting new launches as a proxy for momentum now have to evaluate depth and retention instead of volume — a genuinely more complex thing to assess from the outside. But it's proving to be a considerably easier story to tell customers, who notice fairly quickly when a product keeps meaningfully improving release after release, instead of being quietly replaced by something new every few months with barely time to build trust in the first one." },
            { type: "heading", text: "What patient development actually looks like in practice" },
            { type: "paragraph", text: "In the companies we've spoken to that have made this shift deliberately, the change shows up in a few consistent places: product roadmaps stretch 18 to 24 months instead of one or two quarters; success metrics shift from launch velocity toward retention and expansion revenue from existing customers; and, perhaps most tellingly, teams are given explicit permission to spend a full year making something genuinely good before it's expected to prove itself commercially." },
            { type: "paragraph", text: "None of this is a guarantee of success — plenty of patient, well-resourced products still fail to find a market, and patience alone doesn't fix a fundamentally flawed idea. But the leaders making this case argue that speed was never really the variable that mattered most. Understanding what customers actually need, and having the discipline to keep refining toward that target instead of chasing the next flashy idea, was always the harder and more important skill — speed just made for a better-looking slide." }
        ]
    },
    {
        id: "operating-playbook-rebuild",
        title: "Early-Stage Founders Are Rebuilding The Operating Playbook",
        description: "A closer look at how founders are pricing, hiring and marketing differently this year.",
        category: "business",
        categoryName: "Business",
        date: "2026-08-12",
        readTime: "5 min read",
        image: "/assets/images/articles/operating-playbook-rebuild.jpg",
        content: [
            { type: "paragraph", text: "The standard early-stage playbook of the last decade — hire fast ahead of revenue, spend aggressively on growth, raise the next round before the current one runs dry — is being quietly rewritten by a generation of founders who watched that exact approach punish the cohort just ahead of them when funding conditions tightened." },
            { type: "heading", text: "Hiring behind revenue, not ahead of it" },
            { type: "paragraph", text: "The new version of the playbook looks slower on paper, and founders following it are candid about that. Teams stay smaller for longer, with hiring plans built around revenue already secured rather than revenue confidently projected. \"We used to hire for the company we thought we'd be in a year,\" one founder told us. \"Now we hire for the company we actually are today, and let growth pull hiring forward instead of the other way around.\"" },
            { type: "heading", text: "Pricing tested before it's set, not set and defended" },
            { type: "paragraph", text: "Pricing decisions have shifted just as noticeably. Where founders once picked a number early, often somewhat arbitrarily, and spent months defending it internally regardless of market feedback, the current generation is running small, deliberate pricing experiments with real customers before locking anything in. It's a slower process, but founders report it produces pricing that actually reflects willingness to pay rather than founder intuition or a competitor's number copied with a small discount applied." },
            { type: "heading", text: "Marketing spend tied to a number founders can actually explain" },
            { type: "paragraph", text: "Perhaps the clearest shift is in marketing and growth spend. Budgets are increasingly tied directly to a payback period the founder can state without opening a spreadsheet — a discipline that was often absent when capital was cheap and growth-at-any-cost was the dominant, almost unquestioned strategy across the industry." },
            { type: "heading", text: "Discipline as a pitch, not a constraint" },
            { type: "paragraph", text: "Investors who once rewarded growth at nearly any cost are increasingly asking founders to justify that cost explicitly, rather than taking a growth chart at face value. Founders who already have clear, defensible answers to those questions — on hiring, pricing and payback period — are consistently having noticeably easier and shorter fundraising conversations than those still leaning on the old playbook's assumptions. None of this means these founders are thinking smaller or less ambitiously. It means the path to a large outcome has gotten longer and more deliberate, and the founders who've adjusted their operating rhythm to match that reality are the ones still standing two or three years later." }
        ]
    },
    {
        id: "cost-of-technical-hiring-2026",
        title: "The Real Cost Of A Bad Technical Hire In 2026",
        description: "Hiring mistakes are getting more expensive as teams get smaller and roles get broader.",
        category: "business",
        categoryName: "Business",
        date: "2026-08-07",
        readTime: "4 min read",
        image: "/assets/images/articles/cost-of-technical-hiring-2026.jpg",
        content: [
            { type: "paragraph", text: "As technical teams shrink and individual roles broaden to cover more ground, a single bad hire now does measurably more damage than it would have on a larger team just five years ago. There's simply less slack in the system — less room for a struggling hire to be quietly covered by two or three colleagues while the situation gets sorted out." },
            { type: "heading", text: "Why the math has changed" },
            { type: "paragraph", text: "On a team of fifteen engineers, one underperforming hire is a manageable, if frustrating, problem — the surrounding team absorbs the gap while it gets addressed. On a team of four, the same situation can stall an entire product roadmap, delay a launch, or force the remaining three people into unsustainable overtime just to hit deadlines that assumed a full team. The math genuinely doesn't scale the way many hiring processes still implicitly assume it does." },
            { type: "heading", text: "Slower hiring, faster corrections" },
            { type: "paragraph", text: "Leaders who have been through this the hard way point to the same fix, described almost identically across separate conversations: slow down the hiring process itself — more structured technical assessment, more deliberate reference checks that go beyond a formality — paired with faster, kinder decisions when a role is clearly not working out. The old approach often did the opposite: fast, informal hiring under pressure to fill a seat, followed by months of hoping a mismatch would resolve itself before anyone was willing to act." },
            { type: "paragraph", text: "One engineering lead put it plainly: \"We used to think being patient with a struggling hire was the kind thing to do. It usually wasn't. It was kinder to everyone — including the person struggling — to make a clear decision within six to eight weeks instead of quietly hoping for ten months.\"" },
            { type: "heading", text: "What this means for how teams are built now" },
            { type: "paragraph", text: "The practical shift shows up in hiring pipelines that take longer to run but produce noticeably fewer regretted hires, and in performance review cycles that have compressed from annual or biannual check-ins to more frequent, lighter-weight conversations designed to catch a mismatch within the first two or three months rather than the first year. It's a harder discipline to maintain than it sounds, particularly under the pressure of an urgent open seat — but the leaders who've adopted it consistently describe it as the single highest-leverage change they've made to how their teams operate." }
        ]
    },
    {
        id: "subscription-fatigue-saas",
        title: "Subscription Fatigue Is Becoming A Real Problem For SaaS Companies",
        description: "Customers are quietly auditing and cutting tools — and the companies that survive the cuts share a few habits.",
        category: "business",
        categoryName: "Business",
        date: "2026-06-11",
        readTime: "4 min read",
        image: "/assets/images/articles/subscription-fatigue-saas.jpg",
        content: [
            { type: "paragraph", text: "A decade of easy software adoption has left many businesses — and plenty of individuals — paying for tools they barely open. What's changed recently isn't the existence of subscription fatigue, which has been building for years, but the fact that companies are finally doing something organised about it rather than just grumbling at renewal time." },
            { type: "heading", text: "The quiet software audit" },
            { type: "paragraph", text: "More finance and operations teams are now running annual or even quarterly audits specifically targeting recurring software spend, cross-referencing actual login activity against subscription cost. The pattern that turns up almost everywhere is strikingly consistent: a small core of tools used daily by most of the team, and a long tail of tools paid for in full but genuinely used by only two or three people, if anyone at all." },
            { type: "paragraph", text: "For SaaS companies on the selling side, this shift matters enormously, because it means the sale doesn't end at signup anymore. Retention now depends on being part of that essential daily core, not the long tail waiting to be quietly cut at the next audit." },
            { type: "heading", text: "What survives the cuts" },
            { type: "paragraph", text: "The tools that reliably survive these audits share a few traits. They tend to be embedded deeply into a daily workflow rather than used for an occasional task — something people would immediately notice the absence of, not just miss abstractly. They tend to have a single clear champion inside the customer's organisation who would personally object to losing it, rather than being a shared, ownerless line item nobody specifically advocates for. And they tend to have pricing that scales sensibly with actual usage, rather than a flat fee that starts to look questionable once a team shrinks or usage patterns shift." },
            { type: "heading", text: "The lesson for anyone building SaaS right now" },
            { type: "paragraph", text: "For founders and product leaders building software today, the implication is fairly direct: the useful question is no longer just \"will someone pay for this?\" but \"will someone still be paying for this, and actively defending that decision, at renewal time next year?\" That's a meaningfully higher bar, and one that rewards genuine daily utility over an impressive feature list that looks good in a demo but doesn't get opened again after the second week." }
        ]
    },
    {
        id: "startups-staying-private-longer",
        title: "Why More Startups Are Choosing To Stay Private Longer",
        description: "Going public used to be the obvious finish line. For a growing number of companies, it's no longer the goal at all.",
        category: "business",
        categoryName: "Business",
        date: "2026-03-09",
        readTime: "4 min read",
        image: "/assets/images/articles/startups-staying-private-longer.jpg",
        content: [
            { type: "paragraph", text: "For a long stretch of the last two decades, an IPO was treated as the natural endpoint of a successful startup's journey — the moment a private, founder-led company graduated into a mature, publicly accountable business. That assumption is weakening. A meaningful number of well-performing, well-funded private companies are choosing to simply stay private well past the point where they could plausibly go public." },
            { type: "heading", text: "The private markets have grown up" },
            { type: "paragraph", text: "Part of the shift is structural. Late-stage private funding has matured considerably, with larger private equity and growth funds now willing to write the kind of large, sustained checks that used to be available only through public markets. That gives mature private companies access to serious capital without needing to submit to quarterly public reporting, activist shareholders, or the short-term earnings pressure that public markets are notorious for creating." },
            { type: "heading", text: "What founders say they're avoiding" },
            { type: "paragraph", text: "In conversations with founders who've deliberately delayed or abandoned IPO plans, a consistent theme emerges: a reluctance to let quarterly earnings pressure distort decisions that would otherwise be made on a multi-year timeline. \"The moment you're public, every decision gets evaluated against what it does to the next ninety days,\" one founder told us. \"We wanted to keep making five-year decisions.\"" },
            { type: "paragraph", text: "There's also a genuine cultural dimension. Several founders described a specific reluctance to expose employees and early product decisions to the intense public scrutiny and stock-price-driven narrative that comes with a public listing, particularly in industries where the underlying technology is still evolving quickly and early bets don't always look smart in hindsight." },
            { type: "heading", text: "This isn't the end of IPOs, just a narrower path to them" },
            { type: "paragraph", text: "None of this means public markets are disappearing as an option — plenty of strong businesses will still go public because it makes strategic sense for their specific situation, particularly where an IPO is the cleanest path to liquidity for early employees and investors. But the default assumption that going public is simply what a successful company eventually does has clearly weakened. For founders, that's arguably a healthier position to be building from: fundraising and exit decisions increasingly made because they suit the specific business, not because it's the well-worn path everyone before them happened to take." }
        ]
    },

    // ============================== SOUTH AFRICA ==============================
    {
        id: "sa-ai-adoption-execution",
        title: "AI Adoption Is Becoming An Execution Question In South Africa",
        description: "Local companies have moved past the pilot stage and are running into real operational questions.",
        category: "south-africa",
        categoryName: "South Africa",
        date: "2026-08-11",
        readTime: "5 min read",
        image: "/assets/images/articles/sa-ai-adoption-execution.jpg",
        content: [
            { type: "paragraph", text: "South African businesses were, by most accounts, quick to run AI pilots — often quicker than comparably sized businesses elsewhere on the continent, and in some sectors quicker than international peers. The harder, considerably less visible work is what comes after a promising pilot: deciding who actually owns the model's output, and building a plan for what happens when it is confidently, plausibly wrong." },
            { type: "heading", text: "Building for local constraints, not around them" },
            { type: "paragraph", text: "Local teams face an added set of constraints that global AI playbooks, largely written with Silicon Valley infrastructure assumptions in mind, rarely mention. Connectivity gaps outside major metros and genuinely higher infrastructure costs make some cloud-first approaches meaningfully more expensive to run here than international case studies would suggest, once real usage numbers come in rather than pilot-scale estimates." },
            { type: "paragraph", text: "The companies adapting most successfully are the ones designing around these constraints from the outset — building with intermittent connectivity as an explicit assumption, for instance, or choosing lighter-weight, more efficient models where a global playbook might default to the largest, most capable option regardless of the recurring cost that comes with it." },
            { type: "heading", text: "Ownership is the harder problem than accuracy" },
            { type: "paragraph", text: "Across the businesses we've spoken to that have moved past the pilot stage, a consistent pattern emerges: the technology usually isn't the limiting factor. Deciding who is accountable when an AI-assisted decision affects a customer, and building a workflow where a named person reviews and signs off on higher-stakes outputs rather than treating the model's answer as final, is proving to be the harder and more important organisational problem to solve." },
            { type: "heading", text: "What execution actually looks like" },
            { type: "paragraph", text: "For the companies furthest along, execution now means a written escalation path for when the model is wrong, a clear owner for each AI-assisted workflow, and realistic metrics that account for local infrastructure costs rather than global benchmark numbers that don't reflect what running the system actually costs here. None of this is glamorous work, and none of it will show up in a flashy pilot demo. But it's the difference between a promising AI pilot that generates enthusiasm for a quarter and a system that's still quietly, reliably running eighteen months later." }
        ]
    },
    {
        id: "sa-tech-teams-global-ambitions",
        title: "Local Technology Teams Are Scaling With Global Ambitions",
        description: "South African software teams are increasingly building products that were never designed to stay local.",
        category: "south-africa",
        categoryName: "South Africa",
        date: "2026-08-10",
        readTime: "4 min read",
        image: "/assets/images/articles/sa-tech-teams-global-ambitions.jpg",
        content: [
            { type: "paragraph", text: "There was a time when a South African software product being described as \"local\" meant, almost by default, that it had been built specifically for the local market and adapted for international customers later, if at all. That assumption is breaking down. A growing number of South African founders are designing for an international customer base from the very first release, treating the local market as a proving ground rather than the final destination." },
            { type: "heading", text: "Small decisions that add up to a different default" },
            { type: "paragraph", text: "The shift shows up most clearly in a handful of small, deliberate early decisions: pricing set in US dollars by default rather than converted awkwardly from rand later; product design built around multiple time zones from day one instead of retrofitted once the first international customer signs up; support teams hired specifically to cover a global working schedule rather than standard local business hours." },
            { type: "paragraph", text: "\"We used to think going global was something you did after you'd proven the model at home,\" one founder told us. \"Now we build the global version first, and prove it works well enough locally along the way — it's a completely different starting assumption.\"" },
            { type: "heading", text: "A genuinely harder way to build, with a real payoff" },
            { type: "paragraph", text: "This is undeniably a harder way to build a company from day one. It means grappling with international payment infrastructure, data residency requirements in multiple jurisdictions, and considerably more complex customer support logistics, all before the product has even fully proven itself in a single market. But founders making this trade-off consistently report that the resulting product is meaningfully easier to sell into international markets later, compared to a product that was designed exclusively for local conditions and needs to be substantially reworked before it can compete internationally." },
            { type: "heading", text: "What this signals for the broader ecosystem" },
            { type: "paragraph", text: "For South Africa's wider technology ecosystem, this shift matters beyond any single company's growth story. It suggests a maturing local talent pool that increasingly measures itself against global product standards from the outset, rather than a regional benchmark — and a growing number of local investors who are correspondingly comfortable backing that global ambition from a seed round, rather than expecting founders to prove out a local market first before thinking bigger." }
        ]
    },
    {
        id: "sa-fibre-and-founders",
        title: "Where South Africa's Next Technology Hubs Are Forming",
        description: "Fibre coverage and remote work are reshaping where technology teams choose to build.",
        category: "south-africa",
        categoryName: "South Africa",
        date: "2026-07-22",
        readTime: "4 min read",
        image: "/assets/images/articles/sa-fibre-and-founders.jpg",
        content: [
            { type: "paragraph", text: "For most of the last decade, building a serious technology company in South Africa meant building it in Cape Town or Johannesburg — that was simply where the talent, the investors and the fibre infrastructure reliably converged. That geography is starting to shift, gradually but noticeably, as fibre coverage expands well beyond the major metros." },
            { type: "heading", text: "The infrastructure gap is closing" },
            { type: "paragraph", text: "Fibre providers have pushed meaningfully further into secondary cities and larger towns over the past two years, closing what was previously a hard infrastructure constraint on where a serious technology team could realistically operate. Combined with the broader, now well-established shift toward remote and hybrid work, a small but growing number of technology teams are choosing to build outside the two traditional hubs entirely — not as a temporary compromise, but as a deliberate choice." },
            { type: "heading", text: "Why founders are choosing to build elsewhere" },
            { type: "paragraph", text: "The draw for founders making this choice is fairly straightforward once you talk to them: meaningfully lower operating costs, considerably less competition for experienced technical talent who might otherwise be pulled toward a larger hub, and — a factor that comes up more often than you'd expect — founders building close to the specific problems they're trying to solve, rather than close to an investor's office in a major city." },
            { type: "paragraph", text: "One founder building an agricultural technology product from Limpopo put it directly: \"Being here means I see the actual problem every single day, not a slide deck version of it explained secondhand. That's worth more to the product than being five minutes from a coworking space in Cape Town.\"" },
            { type: "heading", text: "Early days, but a real trend" },
            { type: "paragraph", text: "It would be an overstatement to describe this as a wholesale shift away from the established hubs just yet — Cape Town and Johannesburg remain the clear centres of gravity for funding, talent density and the kind of informal networking that still drives a lot of early deal flow. But the direction of travel is increasingly clear, and infrastructure investment happening right now in secondary cities and towns is quietly laying the groundwork for that trend to continue building over the next several years." }
        ]
    },
    {
        id: "sa-early-stage-founders-playbook",
        title: "Early-Stage Founders Are Rebuilding The Operating Playbook, Locally",
        description: "Founders outside the major hubs describe a slower, more deliberate approach to building this year.",
        category: "south-africa",
        categoryName: "South Africa",
        date: "2026-08-12",
        readTime: "4 min read",
        image: "/assets/images/articles/sa-early-stage-founders-playbook.jpg",
        content: [
            { type: "paragraph", text: "The broader shift toward more deliberate, patient company-building that's showing up globally has a distinctly local flavour outside South Africa's major startup hubs. For founders building in smaller cities and towns, that discipline is often less a considered strategic choice than a straightforward necessity — and it's increasingly starting to look like a genuine competitive advantage rather than a limitation." },
            { type: "heading", text: "Necessity as a forcing function" },
            { type: "paragraph", text: "Founders outside Cape Town and Johannesburg typically don't have easy access to the kind of large, fast follow-on funding rounds that founders in major hubs can sometimes assume as a fallback plan. That constraint tends to force smaller teams by default, pricing that gets tested carefully with real customers before it's finalised rather than set ambitiously and adjusted downward later, and growth spending that's tied tightly to a payback period the founder can actually explain, because there usually isn't a large runway cushioning a miscalculation." },
            { type: "heading", text: "\"We didn't choose lean. We had to be.\"" },
            { type: "paragraph", text: "One founder building a logistics technology product outside Polokwane described it plainly: \"We didn't choose to be lean because it was a smart strategic framework we read about somewhere. We had to be, because the funding safety net that founders in Cape Town sometimes lean on just wasn't realistically available to us in the same way. It turned out to be the right way to build anyway — we just arrived at it for less glamorous reasons.\"" },
            { type: "heading", text: "An advantage that's becoming harder to ignore" },
            { type: "paragraph", text: "As broader market conditions have shifted and investors everywhere have grown more cautious about capital efficiency and realistic unit economics, this necessity-driven discipline that founders outside the major hubs were often already practising has started to look less like a limitation and considerably more like an advantage that founders in better-funded hubs are now trying to retrofit onto their own operations. It's a rare case where a structural disadvantage — reduced access to easy follow-on capital — has ended up producing exactly the operating discipline the wider market has since decided it wants." }
        ]
    },
    {
        id: "sa-startup-funding-landscape-2026",
        title: "South Africa's Startup Funding Landscape In 2026",
        description: "Fewer, larger rounds and a growing appetite from local investors for later-stage bets.",
        category: "south-africa",
        categoryName: "South Africa",
        date: "2026-02-17",
        readTime: "5 min read",
        image: "/assets/images/articles/sa-startup-funding-landscape-2026.jpg",
        content: [
            { type: "paragraph", text: "South Africa's startup funding environment has shifted noticeably over the past two years, and the direction of that shift mirrors a pattern playing out in venture markets globally: fewer deals overall, but with more capital concentrated in the strongest performers, and a funding bar for early-stage rounds that has risen considerably compared to a few years ago." },
            { type: "heading", text: "Seed rounds are harder, Series A is more selective, later rounds are larger" },
            { type: "paragraph", text: "Seed-stage founders describe a noticeably longer and more rigorous fundraising process than founders raising similar rounds two or three years ago, with investors asking for clearer early evidence of genuine customer demand before committing, rather than largely funding a strong team and a compelling narrative alone. Once a company does clear that higher early bar and reaches Series A and beyond, however, the later-stage funding environment has become comparatively healthier, with a small number of larger local and pan-African funds increasingly willing to lead sizeable rounds that previously would have required international investors to anchor." },
            { type: "heading", text: "Where the capital is actually concentrating" },
            { type: "paragraph", text: "Fintech remains the largest single category by total capital raised, a position it has held for years, but climate technology and agricultural technology have both grown into meaningfully larger categories over the past eighteen months, reflecting both genuine local demand for those solutions and growing international investor interest in Africa-specific climate and food-security plays that have global relevance beyond the immediate local market." },
            { type: "heading", text: "What founders are adjusting" },
            { type: "paragraph", text: "For founders currently raising, the practical adjustment has been fairly consistent across the conversations we've had: building a longer runway assumption into fundraising plans from the start, treating a successful seed round as needing to comfortably last eighteen to twenty-four months rather than the twelve months that was often the working assumption a few years ago, and preparing considerably more detailed unit economics earlier in the process than investors previously expected to see. It's a tighter, more demanding environment for a first-time founder to raise in than it was three or four years ago — but the founders who do successfully clear that higher bar report a funding environment that's more sustainable and considerably less prone to encouraging the kind of unsustainable, growth-at-any-cost spending that caused real pain for the cohort that raised during more permissive years." }
        ]
    },

    // ============================== NEWS ==============================
    {
        id: "ai-changing-software-development",
        title: "How AI Coding Tools Are Changing What Developers Actually Do",
        description: "The shift isn't about writing less code — it's about where review and judgement now sit.",
        category: "news",
        categoryName: "News",
        date: "2026-08-09",
        readTime: "5 min read",
        image: "/assets/images/articles/ai-changing-software-development.jpg",
        content: [
            { type: "paragraph", text: "Software development has always been a negotiation between speed, confidence and care — how quickly you can ship something, how sure you are it actually works, and how much attention you give to the parts that are easy to get subtly wrong. AI coding tools aren't removing that negotiation, despite some of the more breathless commentary around them. They're making the trade-offs involved considerably more visible, and more immediate, than they used to be." },
            { type: "heading", text: "From autocomplete to genuine collaboration" },
            { type: "paragraph", text: "The first wave of AI coding tools focused narrowly on completion — a faster way to reach the next line of code you were already planning to write. The more interesting shift happening now is in how developers work around that original moment entirely: using AI tools to explore unfamiliar codebases quickly, draft test suites that would have taken hours by hand, and surface risks hidden in the gaps between services that a single engineer might never have noticed on their own." },
            { type: "quote", text: "The question is no longer whether developers use AI. It's where a team deliberately decides the tool's judgement stops and a person's begins." },
            { type: "paragraph", text: "That line moves depending on the team, the specific codebase, and how much risk it can realistically absorb when something breaks in production without warning. Teams that draw that line deliberately and revisit it regularly, rather than by accident or default, consistently report shipping with more confidence, not less — because everyone actually knows where the human review checkpoint sits, rather than assuming someone else has already checked." },
            { type: "heading", text: "What stays stubbornly human" },
            { type: "paragraph", text: "Code review, architecture decisions, and the harder judgement calls that trade one kind of risk for another remain stubbornly, importantly human tasks, even on teams that have adopted AI tools enthusiastically and broadly. An AI tool can draft several plausible options quickly and clearly. It cannot yet meaningfully own the consequence of picking one of them over the others — that accountability still sits with a person, and every team we spoke to for this piece was clear that they intend to keep it that way for the foreseeable future." },
            { type: "paragraph", text: "The practical upshot for engineering leaders weighing how far to lean into these tools: the honest answer is rarely all-in or not at all. It's a deliberate, ongoing decision about which specific parts of the job are genuinely worth keeping human, revisited regularly as the tools themselves keep improving — not a single policy set once and forgotten." }
        ]
    },
    {
        id: "windows-11-26h2-fall-update",
        title: "Everything Coming In Windows 11's Big Fall Update",
        description: "Version 26H2 packages months of feature rollouts into one release across Start, Taskbar and Search.",
        category: "news",
        categoryName: "News",
        date: "2026-08-06",
        readTime: "5 min read",
        image: "/assets/images/articles/windows-11-26h2-fall-update.jpg",
        content: [
            { type: "paragraph", text: "Windows 11's next major update, version 26H2, is arriving this fall and consolidates a genuinely wide range of changes Microsoft has been previewing incrementally throughout the year into a single, more coherent release. If you've been keeping half an eye on Windows Insider builds over the past several months, much of this will feel familiar. If you haven't, it's the most comprehensive set of visible changes Windows 11 has received in a single update since launch." },
            { type: "heading", text: "Start menu and Taskbar get real, if modest, flexibility" },
            { type: "paragraph", text: "The Start menu is gaining preset size options, finally replacing the current one-size-fits-all layout that scales purely based on display resolution regardless of how many pinned apps or how much recent activity you actually want visible. You still won't be able to freely resize the menu by dragging its edges the way some competing interfaces allow, but being able to choose between a small, medium and large preset is a meaningful improvement for anyone who found the existing layout either too cramped on a smaller screen or oddly sparse on a larger one." },
            { type: "heading", text: "Search gets more accurate, and more tightly tied to Copilot" },
            { type: "paragraph", text: "Search accuracy has been a recurring, ongoing focus throughout this year's incremental updates, and 26H2 continues that work with noticeably better natural-language query handling alongside deeper Copilot integration woven across the shell rather than confined to its own separate panel. Microsoft is positioning this deliberately as less of a single headline feature to announce and more of a cumulative reset of how the operating system as a whole should feel to actually use day to day — a harder thing to market in a keynote, but arguably the more honest framing." },
            { type: "heading", text: "File Explorer and smaller quality-of-life fixes" },
            { type: "paragraph", text: "File Explorer continues receiving the kind of smaller, cumulative reliability improvements that have quietly characterised most of this year's updates — faster folder loading over network drives, more consistent thumbnail generation, and a handful of long-standing minor bugs finally addressed after being reported for several release cycles running." },
            { type: "paragraph", text: "For most everyday users, 26H2 will land as a routine, largely unremarkable background update rather than a dramatic visual redesign — you'll likely notice individual small improvements over the following weeks rather than a single obvious \"everything looks different now\" moment on install day. But taken together as a complete package, it represents the most comprehensive set of changes Windows 11 has received in a single release since it first launched." }
        ]
    },
    {
        id: "startup-studios-quiet-return",
        title: "Startup Studios Are Making A Quiet Return",
        description: "A model that fell out of favour is finding new life among repeat founders.",
        category: "news",
        categoryName: "News",
        date: "2026-08-04",
        readTime: "4 min read",
        image: "/assets/images/articles/startup-studios-quiet-return.jpg",
        content: [
            { type: "paragraph", text: "Startup studios — organisations that build and test several company ideas in parallel, only spinning out and fully funding the ones that show genuine early traction — largely fell out of favour when venture capital was cheap and abundant, and speed to market mattered considerably more to investors than early validation of the underlying idea. They're now making a genuine, if quiet, comeback among a specific group: repeat founders who've already been through at least one difficult failure and are actively looking for a more structured, lower-risk way to test their next idea before fully committing years of their life to it." },
            { type: "heading", text: "Why the model fell out of favour in the first place" },
            { type: "paragraph", text: "During the era of especially cheap, abundant capital, the startup studio model looked comparatively slow and unnecessarily cautious next to founders who could simply raise a large seed round on a strong narrative and pitch deck alone, without needing to first prove the idea inside a more structured internal testing process. Studios that ran multiple ideas through a formal validation process before committing real capital and full-time headcount looked, to many observers at the time, overly conservative in a market that was actively rewarding speed and boldness above almost everything else." },
            { type: "heading", text: "Why repeat founders are reviving it now" },
            { type: "paragraph", text: "Repeat founders reviving the model today describe it in almost exactly the opposite terms: as a genuinely structured, disciplined way to kill a fundamentally weak idea early, within weeks or a few months, before it has absorbed a full year of runway, a founding team's total energy and focus, and often a meaningful chunk of their personal financial and emotional investment in a specific direction that didn't clearly warrant it." },
            { type: "paragraph", text: "\"I'd already sunk two years into an idea that a proper studio-style validation process would have killed in six weeks,\" one founder now running her second company through a studio model told us. \"This time I wanted a structure that would tell me the truth early, even when I really didn't want to hear it — that's worth more than speed at this stage of my career.\"" },
            { type: "heading", text: "A smaller, more specific comeback than a wholesale trend reversal" },
            { type: "paragraph", text: "This isn't a wholesale reversal back toward the studio model as a dominant way of building new companies — most first-time founders are still drawn to the more familiar, faster path of raising directly and building alone or with a small founding team from day one. But among founders who've already been through the harder version of that path once, and learned specific, expensive lessons from it, the appeal of a more structured, validation-first approach is clearly, measurably growing." }
        ]
    },
    {
        id: "on-device-ai-privacy",
        title: "On-Device AI Is Quietly Changing How Much Data Leaves Your Phone",
        description: "The industry's shift toward local AI processing is as much a privacy story as a performance one.",
        category: "news",
        categoryName: "News",
        date: "2026-05-28",
        readTime: "4 min read",
        image: "/assets/images/articles/on-device-ai-privacy.jpg",
        content: [
            { type: "paragraph", text: "Much of the recent conversation around on-device AI has focused on speed and offline convenience — features that work without an internet connection, responses that arrive without a network round-trip delay. The quieter, arguably more significant story is what on-device processing means for privacy, and it's a shift worth understanding regardless of which phone or laptop you actually use." },
            { type: "heading", text: "What actually changes when processing moves on-device" },
            { type: "paragraph", text: "When an AI feature runs entirely on your device rather than sending a request to a remote server, the raw data involved — a photo you're editing, a voice recording being transcribed, the specific text you're asking an assistant to rewrite or summarise — never has to leave your device to produce a result. That's a meaningfully different privacy posture than a cloud-based equivalent, where that same data is transmitted to a company's servers for processing, and where the actual retention policy for that data afterward depends entirely on that company's stated practices, which vary considerably and aren't always easy for an average user to verify independently." },
            { type: "heading", text: "Why this shift is happening now, and not five years ago" },
            { type: "paragraph", text: "The shift toward local processing is driven as much by improving hardware as it is by any specific privacy commitment from manufacturers. Dedicated neural processing units in modern phones and laptops have become genuinely capable enough to run meaningfully sized AI models locally, at speeds that were simply not achievable on consumer hardware even three years ago. Apple, Google and Microsoft have all made on-device processing a more prominent part of their public AI messaging recently — though it's worth being clear-eyed that the specific mix of on-device versus cloud processing still varies considerably by feature, by company, and often isn't obvious to an average user without digging into technical documentation most people will never read." },
            { type: "heading", text: "What to actually check if this matters to you" },
            { type: "paragraph", text: "For anyone who genuinely cares about this distinction in practice, the most useful and reliable habit is checking a specific feature's privacy documentation directly, rather than assuming that any given AI feature works entirely on-device just because the broader marketing around a product emphasises local processing generally. Many products now use a hybrid approach by default — simpler requests handled entirely locally, more complex ones quietly routed to the cloud for extra processing power — and the dividing line between the two isn't always clearly disclosed to the person using the feature in the moment." }
        ]
    },
    {
        id: "data-centres-power-grid-problem",
        title: "Why Data Centres Are Becoming A Power Grid Problem",
        description: "AI's compute demands are colliding with power infrastructure that wasn't built for this scale.",
        category: "news",
        categoryName: "News",
        date: "2026-04-02",
        readTime: "5 min read",
        image: "/assets/images/articles/data-centres-power-grid-problem.jpg",
        content: [
            { type: "paragraph", text: "The rapid growth in AI compute demand over the past few years has quietly become as much an energy infrastructure story as a technology one, and it's starting to show up in places you wouldn't necessarily expect to feel the effects of an AI boom — regional power pricing, grid capacity planning meetings, and, in some regions, real local pushback against proposed new data centre developments." },
            { type: "heading", text: "The scale problem, in plain terms" },
            { type: "paragraph", text: "Training and running today's largest AI models requires enormous, sustained amounts of electricity, concentrated in specific physical locations rather than spread evenly across a grid the way most historical electricity demand has been. A single large new data centre campus can require as much continuous power as a small city, and the growth in planned new capacity over just the next few years is genuinely straining power infrastructure that, in many regions, was never designed with this kind of concentrated, sustained industrial demand in mind." },
            { type: "heading", text: "Grid operators are visibly playing catch-up" },
            { type: "paragraph", text: "Utility companies and grid operators in several regions have publicly acknowledged that data centre demand is now a primary factor in their capacity planning going forward, in some cases prompting new power generation projects and significant grid infrastructure upgrades specifically to accommodate this new class of large, concentrated industrial customer. In some areas, this has visibly translated into higher electricity costs for nearby residential customers, a dynamic that has understandably drawn political attention and, in a handful of specific cases, organised local opposition to proposed new data centre projects." },
            { type: "heading", text: "The industry's response so far" },
            { type: "paragraph", text: "Major technology companies building this infrastructure have responded with a mix of approaches: some are directly investing in dedicated renewable energy projects specifically tied to individual data centre developments, others are exploring more efficient cooling and chip designs that meaningfully reduce power draw per unit of useful compute delivered, and a few are actively investigating nuclear power, including newer small modular reactor designs, as a longer-term, more concentrated power source that could better match a data centre's specific demand profile." },
            { type: "paragraph", text: "None of these approaches solve the underlying near-term tension quickly enough to fully avoid friction: AI compute demand is growing faster right now than new power generation and grid capacity can realistically be built, permitted and brought online. That gap is likely to remain a genuine story for the next several years, well beyond any single company's individual efficiency improvements or renewable energy commitments, however meaningful those individual efforts are." }
        ]
    }

];
