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
//   image        Use a local /assets/... path or a direct HTTPS image URL.
//                Change this URL later to swap the photo; no file download
//                or deletion is needed for remotely hosted images.
//   imageCredit  Required for sourced images: { text, url } with creator or
//                provider credit and a link to the source/license page.
//   content      An array of paragraphs/headings, in reading order.
//                Use { type: "heading", text: "..." } for a subheading,
//                { type: "paragraph", text: "..." } for body text, or
//                { type: "source", text: "...", url: "..." } for citations.
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
//         imageCredit: { text: "Photographer / provider (license)", url: "https://source.example/image-page" },
//         content: [
//             { type: "paragraph", text: "Your opening paragraph." },
//             { type: "heading", text: "An optional subheading" },
//             { type: "paragraph", text: "More body text." },
//             { type: "source", text: "Publisher: supporting report", url: "https://source.example/story" }
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
        title: "iPhone 18 Pro: What the New Camera and Ecosystem Changes Mean",
        description: "Apple's latest Pro phone is here. The useful question is how its camera, software and connected devices fit together.",
        category: "apple",
        categoryName: "Apple",
        date: "2026-10-06",
        readTime: "5 min read",
        image: "https://www.apple.com/newsroom/images/2026/09/the-latest-iphone-apple-watch-and-airpods-lineups-arrive-in-stores-worldwide/article/Apple-The-Exchange-TRX-Kuala-Lumpur-iPhone-18-Pro-lineup-260918_big.jpg.medium.jpg",
        imageCredit: { text: "iPhone 18 Pro lineup, Apple Newsroom", url: "https://www.apple.com/newsroom/2026/09/the-latest-iphone-apple-watch-and-airpods-lineups-arrive-in-stores-worldwide/" },
        content: [
            { type: "paragraph", text: "Apple's newest Pro iPhone arrived in September alongside new Watches and AirPods. That makes the camera only part of the story: the phone is also the hub for Apple Intelligence, health tracking, calls and audio across the rest of the lineup. Apple lists the iPhone 18 Pro as available now, but buyers should check local pricing, storage options and feature availability in South Africa before treating US launch details as local terms." },
            { type: "heading", text: "What to test before upgrading" },
            { type: "paragraph", text: "For a useful review, look beyond keynote comparisons. Test the main, ultra-wide and telephoto cameras in daylight and low light, compare stabilization while walking, and record a long clip to see whether quality and temperature remain consistent. Battery comparisons need the same brightness, network and workload. We have not independently tested this handset, so this is a buyer's checklist rather than a hands-on verdict." },
            { type: "heading", text: "The ecosystem question" },
            { type: "paragraph", text: "The upgrade is more compelling if you already use an Apple Watch, AirPods or Mac and value shared features such as notifications, audio handoff and cross-device continuity. If you mainly need messaging, photos and everyday apps, compare the standard iPhone and last year's Pro at current South African prices. A new model is not automatically better value, especially when a trade-in, warranty coverage or regional feature limits change the real cost." },
            { type: "source", text: "Apple: iPhone 18 Pro, Watch and AirPods lineup availability (September 18, 2026)", url: "https://www.apple.com/newsroom/2026/09/the-latest-iphone-apple-watch-and-airpods-lineups-arrive-in-stores-worldwide/" },
            { type: "source", text: "Apple: Final Cut Camera update for iPhone 18 Pro (September 29, 2026)", url: "https://www.apple.com/newsroom/2026/09/final-cut-camera-now-supports-variable-aperture-on-iphone-18-pro/" }
        ]
    },
    {
        id: "iphone-air-thinnest-iphone",
        title: "Inside the Apple Ecosystem: What iPhone, Watch, AirPods and Mac Share",
        description: "A practical guide to Apple's connected devices, their conveniences, their limits and the services tying them together.",
        category: "apple",
        categoryName: "Apple",
        date: "2026-10-06",
        readTime: "4 min read",
        image: "https://www.apple.com/newsroom/images/2026/09/the-latest-iphone-apple-watch-and-airpods-lineups-arrive-in-stores-worldwide/article/Apple-Fifth-Avenue-New-York-team-member-assisting-customer-with-Apple-Watch-purchase-260918_big.jpg.medium.jpg",
        imageCredit: { text: "Apple Watch lineup, Apple Newsroom", url: "https://www.apple.com/newsroom/2026/09/the-latest-iphone-apple-watch-and-airpods-lineups-arrive-in-stores-worldwide/" },
        content: [
            { type: "paragraph", text: "Apple's ecosystem is less a single feature than a set of small connections: AirPods can move between devices, Watch can mirror selected iPhone alerts, and Mac can continue some conversations and tasks. New platform releases continue to add cross-device functions, but some capabilities require specific hardware, an Apple Account, compatible software and supported language or region settings." },
            { type: "heading", text: "Where the convenience comes from" },
            { type: "paragraph", text: "The main benefit is reduced setup friction. A person can pair accessories once, keep messages and photos available on more than one screen, and use familiar services across iPhone, iPad and Mac. iCloud Shared Albums are also expanding to make it easier for Windows and Android users to contribute, a useful reminder that not every workflow needs to stay inside one brand." },
            { type: "heading", text: "The trade-offs are real" },
            { type: "paragraph", text: "Cross-device convenience can mean more dependence on one vendor's account, accessories and paid services. Compatibility varies by device generation, and Apple's own feature notes identify hardware, language and regional restrictions. Before buying a Watch, Mac or AirPods to complete a setup, list the tasks you expect it to improve, check the exact compatibility requirements, and compare the total cost with services that already work across platforms." },
            { type: "source", text: "Apple: platform updates and Apple Intelligence availability (September 14, 2026)", url: "https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/" },
            { type: "source", text: "Apple: latest iPhone, Watch and AirPods lineup (September 18, 2026)", url: "https://www.apple.com/newsroom/2026/09/the-latest-iphone-apple-watch-and-airpods-lineups-arrive-in-stores-worldwide/" }
        ]
    },
    {
        id: "macos-tahoe-apple-intelligence",
        title: "macOS 27 and Apple Intelligence: What Is Available and Where",
        description: "Apple's new software spans iPhone, Mac, Watch and iPad, but Siri AI and other features have hardware and regional limits.",
        category: "apple",
        categoryName: "Apple",
        date: "2026-10-06",
        readTime: "4 min read",
        image: "https://www.apple.com/newsroom/images/2026/09/major-updates-for-apples-software-platforms-are-now-available/article/Apple-OS-availability-hero_big.jpg.medium.jpg",
        imageCredit: { text: "iPhone 18 Pro, Mac, Watch and iPad with new software, Apple Newsroom", url: "https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/" },
        content: [
            { type: "paragraph", text: "Apple's September platform release brings iOS 27, iPadOS 27, macOS 27 and updates for Watch and Vision Pro. The company says the releases add system improvements as well as Apple Intelligence features, including a more capable Siri AI beta, screen awareness, cross-device conversation sync and changes to Photos, Safari and Shortcuts." },
            { type: "heading", text: "Availability is not universal" },
            { type: "paragraph", text: "Apple says Siri AI begins in English, with French, Japanese, Korean, Portuguese and Spanish planned for October. It also says Siri AI is initially unavailable on iOS and iPadOS in the European Union and unavailable in China while regulatory requirements are addressed. Device requirements differ by feature, so a software update alone does not guarantee access." },
            { type: "heading", text: "What to check before updating" },
            { type: "paragraph", text: "Check your exact device against Apple's compatibility list, confirm the operating-system version and language settings, and review regional availability for the feature you care about. Treat performance and capability comparisons in the launch announcement as Apple's claims until independent testing is available. For users who do not need the new AI tools, the update still includes platform refinements, but the practical value depends on their device and daily workflow." },
            { type: "source", text: "Apple: software platform releases, feature limits and device requirements (September 14, 2026)", url: "https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/" }
        ]
    },
    {
        id: "apple-watch-lineup-explained",
        title: "Apple Watch Series 12, Ultra 4 and AirPods 5: The Connected Lineup",
        description: "Apple's newest wearables share more than a launch date. Here is what each is for and what ecosystem features to check.",
        category: "apple",
        categoryName: "Apple",
        date: "2026-10-06",
        readTime: "5 min read",
        image: "https://www.apple.com/newsroom/images/2026/09/the-latest-iphone-apple-watch-and-airpods-lineups-arrive-in-stores-worldwide/article/Apple-Jingan-Shanghai-customer-demo-with-Apple-Watch-Ultra-4-and-Apple-Watch-Series-12-260918_big.jpg.medium.jpg",
        imageCredit: { text: "Apple Watch Series 12 and Ultra 4, Apple Newsroom", url: "https://www.apple.com/newsroom/2026/09/the-latest-iphone-apple-watch-and-airpods-lineups-arrive-in-stores-worldwide/" },
        content: [
            { type: "paragraph", text: "Apple's September release put iPhone 18 Pro, Watch Series 12, Watch Ultra 4 and AirPods 5 on sale together. That makes this a useful moment to compare the wearable lineup as a system, not just as a list of model numbers. The Series watch is the everyday option, Ultra is positioned for more demanding outdoor use, and AirPods add audio and calling features across compatible Apple devices." },
            { type: "heading", text: "Choose for your actual routine" },
            { type: "paragraph", text: "Start with your needs: notifications and basic activity tracking, long outdoor sessions, or listening and calls across several devices. Then compare battery life, fit, supported health features, phone compatibility, repair options and local pricing. Health tools are not a medical diagnosis, and availability can depend on country and software version." },
            { type: "heading", text: "The ecosystem is a bonus, not a requirement" },
            { type: "paragraph", text: "Apple's new software adds Watch features and more continuity across the product family, but these conveniences should not obscure cost or compatibility. Verify the exact model and feature list with Apple South Africa or an authorized retailer. The launch announcement confirms the lineup and global store date; it does not establish local prices or guarantee every service is available in every region." },
            { type: "source", text: "Apple: iPhone 18 Pro, Apple Watch Series 12, Ultra 4 and AirPods 5 availability (September 18, 2026)", url: "https://www.apple.com/newsroom/2026/09/the-latest-iphone-apple-watch-and-airpods-lineups-arrive-in-stores-worldwide/" },
            { type: "source", text: "Apple: software platform updates and Watch features (September 14, 2026)", url: "https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/" }
        ]
    },
    {
        id: "ipad-pro-m5-laptop-replacement",
        title: "Final Cut Camera and iPadOS 27: Apple's Creator Workflow Update",
        description: "Variable aperture arrives in Final Cut Camera for iPhone 18 Pro, while Apple's latest software adds more cross-device creator tools.",
        category: "apple",
        categoryName: "Apple",
        date: "2026-10-06",
        readTime: "5 min read",
        image: "https://www.apple.com/newsroom/images/2026/09/final-cut-camera-now-supports-variable-aperture-on-iphone-18-pro/article/Apple-Final-Cut-Camera-hero_big.jpg.medium.jpg",
        imageCredit: { text: "Final Cut Camera on iPhone 18 Pro, Apple Newsroom", url: "https://www.apple.com/newsroom/2026/09/final-cut-camera-now-supports-variable-aperture-on-iphone-18-pro/" },
        content: [
            { type: "paragraph", text: "Apple's latest creator update is a workflow story across iPhone, iPad and Mac. Final Cut Camera version 2.4 adds variable-aperture control for iPhone 18 Pro and new pro options with iOS 27. Apple says creators can adjust exposure controls in capture and carry footage into Final Cut Pro; these are announced capabilities, not independent test results." },
            { type: "heading", text: "What changed for capture" },
            { type: "paragraph", text: "Apple lists adjustable aperture, shutter-priority and aperture-priority modes, customizable overlays, exposure scopes, clean SDI output and genlock offset among the update's features. It also says Cinematic effects can be adjusted in Final Cut Pro for regular video, including ProRes and Apple Log footage. The practical value depends on the shoot: a creator should test the exact camera, file format, storage needs and editing setup before relying on the workflow professionally." },
            { type: "heading", text: "Check the whole pipeline" },
            { type: "paragraph", text: "The key questions are whether the app version and iPhone support the feature, whether the project can move smoothly to iPad or Mac, and whether storage and accessories fit the production. Apple lists support and availability details in its release notes. Treat the update as a promising toolkit, then verify output quality, transfer steps and compatibility with the apps used on set." },
            { type: "source", text: "Apple: Final Cut Camera adds variable aperture and pro options (September 29, 2026)", url: "https://www.apple.com/newsroom/2026/09/final-cut-camera-now-supports-variable-aperture-on-iphone-18-pro/" },
            { type: "source", text: "Apple: iOS 27 and platform feature availability (September 14, 2026)", url: "https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/" }
        ]
    },

    // ============================== DEVICES ==============================
    {
        id: "macbook-pro-m5-pro-max-review",
        title: "Mac mini M6 or Mac Studio M5: Which Apple Desktop Fits?",
        description: "Apple's September desktop refresh brings new chips and on-device AI claims. Compare the workloads before paying for the top configuration.",
        category: "devices",
        categoryName: "Devices",
        date: "2026-10-06",
        readTime: "5 min read",
        image: "https://www.apple.com/newsroom/images/2026/09/the-new-mac-mini-and-mac-studio-are-available-today/article/Apple-Mac-mini-and-Mac-Studio-available-hero_big.jpg.medium.jpg",
        imageCredit: { text: "Mac mini and Mac Studio, Apple Newsroom", url: "https://www.apple.com/newsroom/2026/09/the-new-mac-mini-and-mac-studio-are-available-today/" },
        content: [
            { type: "paragraph", text: "Apple's new Mac mini and Mac Studio became available on September 22. The Mac mini is offered with M6 or M5 Pro; Mac Studio with M5 Max or M5 Ultra. Apple positions the mini for everyday work, development and smaller creative setups, while Studio targets sustained, demanding professional tasks." },
            { type: "heading", text: "Match the machine to the workload" },
            { type: "paragraph", text: "For email, office apps, coding and occasional creative work, start with the least expensive configuration that meets your memory, storage and port needs. Consider Mac Studio only if your routine actually involves longer render jobs, large projects or multiple demanding workloads. Apple advertises substantial performance gains, but those are company test results; they are not a substitute for independent benchmarks using your software." },
            { type: "heading", text: "Check the South African total" },
            { type: "paragraph", text: "Apple's announcement quotes US prices and configurations. South African buyers should confirm local pricing, configuration options, warranty coverage and reseller availability before comparing value. Also budget for a display and peripherals if moving to a desktop. A cheaper desktop can become a more expensive setup once those items are included." },
            { type: "source", text: "Apple: new Mac mini and Mac Studio availability, specifications and US pricing (September 22, 2026)", url: "https://www.apple.com/newsroom/2026/09/the-new-mac-mini-and-mac-studio-are-available-today/" }
        ]
    },
    {
        id: "galaxy-s26-what-we-know",
        title: "Samsung Galaxy Tab S12 and SmartTag3: The New Device Releases",
        description: "Samsung's latest tablet and tracker announcements point to productivity and connected-device upgrades, not just phones.",
        category: "devices",
        categoryName: "Devices",
        date: "2026-10-06",
        readTime: "4 min read",
        image: "https://img.global.news.samsung.com/global/wp-content/uploads/2026/09/28100811/Samsung-Mobile-Galaxy-Tab-S12-Series_Main1.jpg",
        imageCredit: { text: "Galaxy Tab S12 series, Samsung Newsroom", url: "https://news.samsung.com/global/samsung-introduces-galaxy-tab-s12-series-the-ultimate-productivity-powerhouse-built-for-growth" },
        content: [
            { type: "paragraph", text: "Samsung's September announcements widened its device story beyond the Galaxy S phones. The company introduced the Galaxy Tab S12 series as a productivity tablet and announced SmartTag3, alongside updates to SmartThings. These are manufacturer announcements; hands-on battery life, performance and South African availability still need to be checked independently." },
            { type: "heading", text: "What matters in a tablet" },
            { type: "paragraph", text: "For a tablet used as a work device, assess app support, keyboard and pen costs, update commitments, screen behavior in your usual lighting and how files move between phone and computer. A larger display alone does not guarantee laptop-like multitasking. For SmartTag3, check device compatibility, network coverage and how location sharing works before relying on it to track valuables." },
            { type: "heading", text: "Wait for local terms" },
            { type: "paragraph", text: "Samsung's global newsroom does not establish South African launch dates, retail prices or every local feature. Confirm those details with Samsung South Africa before comparing the Tab S12 to an iPad or another Android tablet. Existing Galaxy S26 owners may also want to compare feature support before buying a second device in the same ecosystem." },
            { type: "source", text: "Samsung: Galaxy Tab S12 announcement (September 30, 2026)", url: "https://news.samsung.com/global/samsung-introduces-galaxy-tab-s12-series-the-ultimate-productivity-powerhouse-built-for-growth" },
            { type: "source", text: "Samsung: SmartTag3 announcement (September 30, 2026)", url: "https://news.samsung.com/global/samsung-galaxy-smarttag3-makes-it-easier-to-keep-track-of-what-matters" }
        ]
    },
    {
        id: "windows-laptops-2026-buying-guide",
        title: "Windows 11's 2026 Update: What Changes on Your PC",
        description: "Microsoft's September update is rolling out. Here is how to check eligibility, install it safely and judge whether new features matter.",
        category: "devices",
        categoryName: "Devices",
        date: "2026-10-06",
        readTime: "4 min read",
        image: "https://blogs.windows.com/wp-content/uploads/sites/2/2026/09/SUR25-COMMR-Laptop-13inch-Snapdragon-Platinum-Cafe-02-1600x1068.jpg",
        imageCredit: { text: "Surface Laptop, Windows Blog", url: "https://blogs.windows.com/windowsexperience/2026/09/29/how-to-get-windows-11-2026-update/" },
        content: [
            { type: "paragraph", text: "Microsoft began rolling out the Windows 11 2026 Update on September 29. The release is delivered through the normal update process, and availability can vary by device and rollout stage. Before installing, back up important files, check available storage and power, and use Windows Update or Microsoft's official instructions rather than third-party download links." },
            { type: "heading", text: "Check before you update" },
            { type: "paragraph", text: "A staged rollout means two compatible PCs may not receive the update on the same day. If it is not offered yet, Microsoft may still be expanding availability or investigating a compatibility hold. Avoid forcing an upgrade on a work-critical device until you have checked the manufacturer's driver and app guidance." },
            { type: "heading", text: "Buying a PC in the update cycle" },
            { type: "paragraph", text: "If you are shopping for a laptop, prioritize screen, keyboard, battery, repairability and enough memory for your real workload. AI branding should not replace checking which functions run locally, whether they are available in your region and what hardware they require. Microsoft's release notes are the authority for rollout instructions; independent reviews are still needed to judge battery impact and everyday performance." },
            { type: "source", text: "Microsoft: How to get the Windows 11 2026 Update (September 29, 2026)", url: "https://blogs.windows.com/windowsexperience/2026/09/29/how-to-get-windows-11-2026-update/" }
        ]
    },
    {
        id: "pixel-10-whats-new",
        title: "Google Pixel 11 and September Pixel Drop: The Current Lineup",
        description: "Google's latest phones, Watch and software drop are now available. Separate confirmed features from the upgrade hype.",
        category: "devices",
        categoryName: "Devices",
        date: "2026-10-06",
        readTime: "4 min read",
        image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Pixel_11_Launch_social.width-1600.format-webp.webp",
        imageCredit: { text: "Pixel 11 Pro, Google", url: "https://blog.google/products-and-platforms/devices/pixel/google-pixel-11-pro-xl/" },
        content: [
            { type: "paragraph", text: "Google's current Pixel generation is Pixel 11, which the company said became available to buy on August 25. Google's September Pixel Drop added further Pixel and Watch features on September 15. That puts the useful question beyond launch-day specs: which capabilities are exclusive to Pixel 11, which arrive through updates, and which depend on country or language?" },
            { type: "heading", text: "Look at software support and daily use" },
            { type: "paragraph", text: "Google's product blog highlights new camera tools, Pixel VIP updates and Watch features. Buyers should check the individual support pages for device eligibility and staged rollout timing. For an upgrade decision, compare the camera results you care about, battery life under your own apps, screen readability and the support period on your existing phone." },
            { type: "heading", text: "South African buyers should verify availability" },
            { type: "paragraph", text: "Google's international announcement does not confirm local stock, warranty or service support. Check authorized sellers and the exact local configuration before ordering from another market. A Pixel 10 or older model may still be the better deal if it receives the software feature you need and costs substantially less." },
            { type: "source", text: "Google: Pixel 11 phones and Pixel Watch 5 are available to buy (August 25, 2026)", url: "https://blog.google/products-and-platforms/devices/pixel/buy-pixel-11-phones-pixel-5-watch/" },
            { type: "source", text: "Google: September Pixel Drop (September 15, 2026)", url: "https://blog.google/products-and-platforms/devices/pixel/september-2026-pixel-drop/" }
        ]
    },
    {
        id: "how-to-choose-a-laptop-2026",
        title: "Smart Glasses in 2026: Useful Wearable or Privacy Problem?",
        description: "Camera-equipped glasses are expanding into new markets. Understand recording cues, privacy trade-offs and regional feature limits.",
        category: "devices",
        categoryName: "Devices",
        date: "2026-10-06",
        readTime: "5 min read",
        image: "https://about.fb.com/wp-content/uploads/2026/09/Introducing-Ray-Ban-Meta-Audio-and-More-AI-Glasses-Styles_Header.jpg?w=1024",
        imageCredit: { text: "Ray-Ban Meta and AI glasses styles, Meta Newsroom", url: "https://about.fb.com/news/2026/09/introducing-ray-ban-meta-audio-glasses-new-styles-plus-muse/" },
        content: [
            { type: "paragraph", text: "Smart glasses are moving from novelty to everyday electronics, combining cameras, microphones, speakers and AI assistants in ordinary-looking frames. Meta and eyewear partner EssilorLuxottica announced an expansion into South Africa, while AP reports that Norway is considering temporary limits in privacy-sensitive spaces. Availability and features differ across markets." },
            { type: "heading", text: "The privacy signal is not the whole story" },
            { type: "paragraph", text: "A recording light can help people nearby notice a capture, but it does not answer every question about ambient audio, cloud processing, retention, account access or the person who did not consent to being recorded. AP notes that Norway's proposal is not a total ban; it is aimed at specific places where privacy concerns are heightened. Local rules and venue policies may differ." },
            { type: "heading", text: "Check features before buying" },
            { type: "paragraph", text: "For South Africa, confirm local retail date, pricing, warranty and which assistant features work here. Meta's local launch report says some AI functions are not initially available outside the US. Before wearing camera glasses in a workplace, school, clinic or private venue, consider consent and the applicable policies rather than assuming the device's LED settles the issue." },
            { type: "source", text: "Associated Press: Norway considers temporary limits on smart glasses (October 5, 2026)", url: "https://apnews.com/article/norway-ai-glasses-ban-be20dbd949ce058023864b66219f9c2b" },
            { type: "source", text: "TechCentral: Meta smart glasses coming to South Africa (October 2, 2026)", url: "https://techcentral.co.za/meta-smart-glasses-south-africa-launch/286809/" }
        ]
    },

    // ============================== BUSINESS ==============================
    {
        id: "business-case-patient-product-development",
        title: "AI Spending Is Rising, but Returns Still Vary by Industry",
        description: "A new BCG study finds uneven results across sectors, with important limits on what the global numbers say about South Africa.",
        category: "business",
        categoryName: "Business",
        date: "2026-10-05",
        readTime: "5 min read",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Research_topics_in_Business-applied_Artificial_Intelligence.png",
        imageCredit: { text: "Business-applied artificial intelligence topics by Aboutbigdata (CC BY-SA 4.0), Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Research_topics_in_Business-applied_Artificial_Intelligence.png" },
        content: [
            { type: "paragraph", text: "A Boston Consulting Group study reported by TechCentral finds AI investment and returns differ sharply by sector. In the survey, telecom companies reported the clearest AI strategies but among the smallest average gains, while banks spent a larger share of revenue on AI and reported stronger returns. These are survey results, not audited accounts." },
            { type: "heading", text: "What the numbers do and do not show" },
            { type: "paragraph", text: "The study covered 1,330 senior executives and did not provide a South African or African breakdown. The local report also notes that the spending estimates come from different survey samples, and that some outcomes are self-reported. That matters: the global figures should not be presented as a forecast for South African firms." },
            { type: "heading", text: "A practical test for technology leaders" },
            { type: "paragraph", text: "For a company deciding whether to expand an AI program, the useful measures are tied to a specific workflow: cost per completed task, error and escalation rates, customer outcomes, staff time saved, and the ongoing cost of data, infrastructure and governance. Compare those against the existing process and publish the measurement period. A broad claim that AI is either paying off or failing to pay off hides the differences the study highlights." },
            { type: "source", text: "TechCentral: Banks top AI spending as telcos struggle to show returns (October 5, 2026)", url: "https://techcentral.co.za/banks-top-ai-spending-telcos-struggle-returns/286868/" },
            { type: "source", text: "Boston Consulting Group: The Formula for Agentic AI Value", url: "https://www.bcg.com/publications/2026/the-formula-for-agentic-ai-value" }
        ]
    },
    {
        id: "operating-playbook-rebuild",
        title: "Samsung's $1B Helix Investment Is About AI Infrastructure",
        description: "Samsung affiliates are backing a new data-center and power platform as compute capacity becomes a strategic bottleneck.",
        category: "business",
        categoryName: "Business",
        date: "2026-09-29",
        readTime: "5 min read",
        image: "https://live.staticflickr.com/8413/8756741567_28ebbecb26_b.jpg",
        imageCredit: { text: "A factory fit for the future by DFID (CC BY 2.0), Flickr; illustrative infrastructure photo", url: "https://www.flickr.com/photos/14214150@N02/8756741567" },
        content: [
            { type: "paragraph", text: "Samsung says six of its affiliates will invest a combined US$1 billion in Helix Digital Infrastructure, with Samsung Electronics contributing US$500 million and the other affiliates investing the remainder. Helix was established by KKR and is designed to build data centres, power generation and related infrastructure for AI workloads." },
            { type: "heading", text: "Why power and compute are part of the same deal" },
            { type: "paragraph", text: "The investment reflects a wider shift: AI infrastructure depends not only on accelerators and servers, but also on available electricity, cooling, transmission and financing. Samsung says Helix plans to work with energy developers, including Vistra. These are announced plans; delivery, customers, capacity and returns remain to be demonstrated." },
            { type: "heading", text: "What to watch next" },
            { type: "paragraph", text: "The business case will depend on how quickly Helix can secure power and permits, sign data-centre customers and turn capital commitments into operating capacity. Samsung's announcement describes its strategic rationale, not guaranteed returns. Investors should distinguish an announced investment from money already deployed and from a completed data-centre project." },
            { type: "source", text: "Samsung Newsroom: Samsung to invest US$1 billion in AI infrastructure company Helix (September 29, 2026)", url: "https://news.samsung.com/global/samsung-to-invest-usd-1-billion-in-ai-infrastructure-company-helix" }
        ]
    },
    {
        id: "cost-of-technical-hiring-2026",
        title: "Ghost's $3,499 Personal AI Computer Raises Questions for Buyers",
        description: "The startup has raised an $11M seed round for a local-first AI PC. Its privacy and autonomy claims still need independent testing.",
        category: "business",
        categoryName: "Business",
        date: "2026-10-05",
        readTime: "4 min read",
        image: "https://live.staticflickr.com/4630/39188583425_9b8f973480_b.jpg",
        imageCredit: { text: "A wafer of a D-Wave quantum computer by Steve Jurvetson (CC BY 2.0), Flickr; illustrative processor image", url: "https://www.flickr.com/photos/44124348109@N01/39188583425" },
        content: [
            { type: "paragraph", text: "Ghost emerged from stealth on October 5 with an $11 million seed round led by Andreessen Horowitz and announced Core, a US$3,499 computer designed to run personal AI agents. TechCrunch reports that the device includes an Nvidia RTX Pro 4000 SFF Blackwell GPU, preinstalled models and software for agent workflows. The device is not yet shipping; the company said the first batch is expected to ship in late October." },
            { type: "heading", text: "The promise is local processing" },
            { type: "paragraph", text: "Ghost's founder says personal data and model memory remain on the device and describes its security controls as a firewall for agent actions. Those are company claims, not independently audited results. The practical questions are how updates work, what data leaves the machine, how third-party apps are accessed, what happens if the vendor closes, and whether the system can be repaired or upgraded." },
            { type: "heading", text: "A costly new product category" },
            { type: "paragraph", text: "Core sits between a general-purpose desktop and a managed AI service: buyers pay more upfront for dedicated hardware and a bundled agent environment. Before treating it as a replacement for a Mac mini or cloud subscription, compare the supported models, power use, privacy documentation, warranty, software costs and performance on the tasks you actually run. The launch and funding are verified; the product's long-term value is not yet established." },
            { type: "source", text: "TechCrunch: Ghost raises $11M for its $3,499 personal AI computer (October 5, 2026)", url: "https://techcrunch.com/2026/10/05/at-19-ghost-founder-raises-11-million-to-build-a-3499-computer-for-your-personal-ai/" }
        ]
    },
    {
        id: "subscription-fatigue-saas",
        title: "Mistral's €3B Round Shows the Scale of Europe's AI Ambition",
        description: "Samsung led a record European tech funding round as Mistral plans to expand compute and sovereign AI infrastructure.",
        category: "business",
        categoryName: "Business",
        date: "2026-09-08",
        readTime: "4 min read",
        image: "https://live.staticflickr.com/65535/48988799182_a67d0631e0_b.jpg",
        imageCredit: { text: "Venture funding without dilution? by Steve Jurvetson (CC BY 2.0), Flickr; illustrative finance image", url: "https://www.flickr.com/photos/44124348109@N01/48988799182" },
        content: [
            { type: "paragraph", text: "Mistral AI said it raised €3 billion at a post-money valuation above €21 billion in a Series D round led by Samsung Electronics, with other existing and new investors participating. The company said it plans to expand compute capacity, infrastructure and commercial reach. Those are company plans; a large round does not by itself show that the company has found a durable business model." },
            { type: "heading", text: "Why investors are funding sovereign AI" },
            { type: "paragraph", text: "Mistral is positioning itself as an AI lab and infrastructure provider for governments and companies that want more control over where models run and which models they use. The round's investor mix includes European and international firms, illustrating how strategic the market has become. It also raises questions about how much capital is required to compete with larger US labs and whether customers will pay for regional control." },
            { type: "heading", text: "What the next milestones should prove" },
            { type: "paragraph", text: "Watch for disclosed revenue, paying customer growth, model performance, infrastructure delivery and the cost of serving workloads. The funding announcement confirms investor appetite, not profitability. Sovereign AI may matter to regulated industries, but buyers still need to compare reliability, privacy, cost and portability against other providers." },
            { type: "source", text: "TechCrunch: Mistral raises €3B as sovereign AI becomes big business (September 8, 2026)", url: "https://techcrunch.com/2026/09/08/mistral-raises-e3b-as-sovereign-ai-becomes-big-business/" },
            { type: "source", text: "Mistral AI: Funding and strategy announcement", url: "https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/" }
        ]
    },
    {
        id: "startups-staying-private-longer",
        title: "Amazon Pledges $1B for Data-Center Communities Amid Backlash",
        description: "The company says the money will support education, jobs, water and energy projects over five years as local opposition grows.",
        category: "business",
        categoryName: "Business",
        date: "2026-10-02",
        readTime: "4 min read",
        image: "https://live.staticflickr.com/2054/2414578731_82c451232d_b.jpg",
        imageCredit: { text: "Virginia Tech data center by cbowns (CC BY-SA 2.0), Flickr; illustrative data-center photo", url: "https://www.flickr.com/photos/15417585@N00/2414578731" },
        content: [
            { type: "paragraph", text: "Amazon says it will invest more than US$1 billion over five years in communities where it operates data centres, funding education, job training, water and energy initiatives. The announcement comes amid public debate about the facilities' local effects and rising opposition to new construction. The Associated Press reports that Amazon had already spent more than US$1 billion in such communities over the previous three years." },
            { type: "heading", text: "Transparency becomes part of the business plan" },
            { type: "paragraph", text: "Amazon's cloud chief also said the company will stop using non-disclosure agreements with government agencies on its data-centre projects and will hold community open houses. The commitments may help address distrust, but they do not settle questions about electricity demand, water use, local bills or the full public cost of grid upgrades." },
            { type: "heading", text: "A test for operators and host communities" },
            { type: "paragraph", text: "For technology firms, community investment is increasingly part of site selection and permitting, not just corporate philanthropy. Residents and policymakers will need project-specific data: expected power and water use, who pays for infrastructure, local jobs created, and whether promised benefits are measured publicly. Amazon's pledge is a commitment; its results will need to be assessed over time." },
            { type: "source", text: "Associated Press: Amazon to invest $1B into data center communities (October 2, 2026)", url: "https://apnews.com/article/amazon-data-centers-1-billion-investment-91b65ba1729540c1c0d92e35deef35d8" }
        ]
    },

    // ============================== SOUTH AFRICA ==============================
    {
        id: "sa-ai-adoption-execution",
        title: "South African Firms Spend on AI, but Measuring Returns Is Hard",
        description: "Global industry data suggests mixed returns and control gaps; local companies need workflow-level measures, not vendor promises.",
        category: "south-africa",
        categoryName: "South Africa",
        date: "2026-10-05",
        readTime: "5 min read",
        image: "https://images.pexels.com/photos/1181337/pexels-photo-1181337.jpeg?cs=srgb&dl=pexels-divinetechygirl-1181337.jpg&fm=jpg",
        imageCredit: { text: "IT professional in a data center by Christina Morillo (Pexels); illustrative image", url: "https://www.pexels.com/photo/software-engineer-in-brown-cardigan-1181337/" },
        content: [
            { type: "paragraph", text: "A new Boston Consulting Group study finds that AI returns vary by industry: surveyed telecom companies report clear strategies but small average gains, while banks invest more and report stronger returns. The global report does not provide South African or African results, so its numbers should not be presented as local performance data." },
            { type: "heading", text: "What local companies can measure" },
            { type: "paragraph", text: "South African firms deciding whether to scale a pilot should track the cost per completed task, error and human-escalation rates, customer outcomes, staff time saved, and local hosting or connectivity costs. Compare these against the existing process over a defined period. That gives a more useful answer than counting AI pilots or quoting a global benchmark." },
            { type: "heading", text: "Governance is part of the return" },
            { type: "paragraph", text: "TechCentral's report says BCG found gaps between companies' plans for autonomous agents and the controls they have in place. This is global survey data and self-reported, but it points to a practical local question: who can approve an agent's actions, inspect an audit trail, reverse a mistake and explain an outcome to a customer? Those controls have operating costs, but skipping them can make a promising tool unusable in higher-stakes work." },
            { type: "source", text: "TechCentral: Banks top AI spending as telcos struggle to show returns (October 5, 2026)", url: "https://techcentral.co.za/banks-top-ai-spending-telcos-struggle-returns/286868/" },
            { type: "source", text: "Boston Consulting Group: The Formula for Agentic AI Value", url: "https://www.bcg.com/publications/2026/the-formula-for-agentic-ai-value" }
        ]
    },
    {
        id: "sa-tech-teams-global-ambitions",
        title: "Meta Smart Glasses Are Coming to South Africa: What Buyers Should Know",
        description: "Ray-Ban and Oakley Meta glasses are planned for local retail expansion, but launch dates, prices and AI features remain market-specific.",
        category: "south-africa",
        categoryName: "South Africa",
        date: "2026-10-02",
        readTime: "4 min read",
        image: "https://about.fb.com/wp-content/uploads/2026/09/Introducing-Ray-Ban-Meta-Audio-and-More-AI-Glasses-Styles_Header.jpg?w=1024",
        imageCredit: { text: "Ray-Ban Meta and AI glasses styles, Meta Newsroom", url: "https://about.fb.com/news/2026/09/introducing-ray-ban-meta-audio-glasses-new-styles-plus-muse/" },
        content: [
            { type: "paragraph", text: "Meta and eyewear partner EssilorLuxottica say Ray-Ban Meta and Oakley Meta products are expected to reach South Africa later in 2026. This could bring camera, audio and assistant features to local buyers through official retail, but the companies have not yet confirmed exact launch dates, local prices, retail partners or which models will be sold here." },
            { type: "heading", text: "Some features may not travel with the hardware" },
            { type: "paragraph", text: "Meta says Muse, its personal AI agent, is available in the US and Canada, while TechCentral reports that the agent will initially be US-only on the glasses. Product availability, language support, account requirements and connected services can differ by country, so check the local feature list rather than assuming a global review describes the South African version." },
            { type: "heading", text: "Privacy is a product question too" },
            { type: "paragraph", text: "The glasses include a visible LED intended to alert nearby people when a camera is recording, but that does not answer every question about consent, storage or cloud processing. Before buying or wearing camera glasses at work, school or a private venue, check applicable rules and the venue's policy. The local launch details are still pending." },
            { type: "source", text: "TechCentral: Meta smart glasses are officially coming to South Africa (October 2, 2026)", url: "https://techcentral.co.za/meta-smart-glasses-south-africa-launch/286809/" },
            { type: "source", text: "Meta: Ray-Ban Meta Audio and expanded glasses lineup (September 23, 2026)", url: "https://about.fb.com/news/2026/09/introducing-ray-ban-meta-audio-glasses-new-styles-plus-muse/" }
        ]
    },
    {
        id: "sa-fibre-and-founders",
        title: "South Africa's Right-to-Repair Guidelines: What Changes for Phone Owners",
        description: "The Competition Commission warns against blocking independent repair, but its new guidance is non-binding and enforced case by case.",
        category: "south-africa",
        categoryName: "South Africa",
        date: "2026-10-05",
        readTime: "4 min read",
        image: "https://images.pexels.com/photos/6755075/pexels-photo-6755075.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6755075.jpg&fm=jpg",
        imageCredit: { text: "Smartphone repair by Tima Miroshnichenko (Pexels); illustrative photo", url: "https://www.pexels.com/photo/a-hand-fixing-an-electronic-device-using-screwdriver-6755075/" },
        content: [
            { type: "paragraph", text: "South Africa's Competition Commission has published final repair-service and maintenance guidelines warning electronics manufacturers that blocking independent repairers, including through software-locked replacement parts, could raise competition concerns. The guidance covers phones, tablets, game consoles, appliances and other products." },
            { type: "heading", text: "The guidance is not a new binding repair law" },
            { type: "paragraph", text: "The Commission says the guidelines do not create obligations beyond the Competition Act. They outline conduct the regulator may prioritize for investigation, including barriers to parts, repair information and market access. The Commission will consider each case and recognize exceptions for legitimate safety, security and intellectual-property reasons." },
            { type: "heading", text: "What consumers and repair shops can do" },
            { type: "paragraph", text: "Ask whether a repair affects warranty, whether an independent shop can source parts and diagnostic tools, and whether a replacement component will work without manufacturer activation. Keep invoices and records if a repair is refused. The framework relies on case-by-case competition enforcement, so it should not be described as a guarantee of free repairs or universal access to parts." },
            { type: "source", text: "TechCentral: Right to repair comes to South African electronics (October 5, 2026)", url: "https://techcentral.co.za/right-to-repair-south-african-electronics/286891/" },
            { type: "source", text: "Competition Commission: Final Repair Services and Maintenance Guidelines", url: "https://www.compcom.co.za/final-repair-service-maintenance-guidelines/" }
        ]
    },
    {
        id: "sa-early-stage-founders-playbook",
        title: "FNB Adds Crypto Trading, but Customers Cannot Withdraw Coins",
        description: "The bank and VALR let customers buy five crypto assets from R10 inside FNB's platform, with important custody and transfer limits.",
        category: "south-africa",
        categoryName: "South Africa",
        date: "2026-10-06",
        readTime: "4 min read",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Bitcoin_ATM_in_South_Africa.jpg/1280px-Bitcoin_ATM_in_South_Africa.jpg",
        imageCredit: { text: "Bitcoin ATM in South Africa by TapticInfo (CC BY-SA 4.0), Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Bitcoin_ATM_in_South_Africa.jpg" },
        content: [
            { type: "paragraph", text: "First National Bank has launched cryptocurrency trading on its share platform with VALR. Customers can trade bitcoin, ether, XRP, solana and USDT from R10 through Share Saver, Share Builder, Share Investor and Share Zero. The launch gives bank customers another route into a volatile asset class, but it is not the same as holding transferable coins in a personal wallet." },
            { type: "heading", text: "The key limit: trading stays inside FNB" },
            { type: "paragraph", text: "FNB says the crypto is ring-fenced within its ecosystem. Customers cannot transfer existing coins in, withdraw purchases to a private wallet or move them to another exchange. Purchases are funded from FNB accounts. Compare this custody model with other platforms, and read the fee, spread, security and account terms before buying." },
            { type: "heading", text: "A product launch amid regulatory debate" },
            { type: "paragraph", text: "The launch comes as South Africa's crypto sector challenges proposed cross-border rules from National Treasury and the Reserve Bank. FNB says it plans to add assets and education over time; that is a future intention, not a current product feature. Crypto prices can move sharply, and access through a bank does not remove investment risk." },
            { type: "source", text: "TechCentral: FNB launches crypto trading (October 6, 2026)", url: "https://techcentral.co.za/fnb-crypto-trading-valr/286930/" }
        ]
    },
    {
        id: "sa-startup-funding-landscape-2026",
        title: "Wits Hackathon's BlockFix Turns Local Repairs into a Civic-Tech Idea",
        description: "A student team won with a concept for community-funded pothole and illegal-dumping repairs; the next test is implementation.",
        category: "south-africa",
        categoryName: "South Africa",
        date: "2026-10-05",
        readTime: "5 min read",
        image: "https://images.pexels.com/photos/5530515/pexels-photo-5530515.jpeg?cs=srgb&dl=pexels-dothanhyb-5530515.jpg&fm=jpg",
        imageCredit: { text: "Students studying technology by Thành Đỗ (Pexels); illustrative image, not the reported Wits team", url: "https://www.pexels.com/photo/students-studying-on-computers-in-classroom-5530515/" },
        content: [
            { type: "paragraph", text: "BlockFix, a platform concept for residents to report local problems and pool small contributions toward repairs, won the Wits Social Good Hackathon announced on October 2. More than 300 students took part, and the winning team proposed letting users map potholes or illegal dumping, contribute to a repair bounty and connect verified workers with the task." },
            { type: "heading", text: "From hackathon pitch to public-service product" },
            { type: "paragraph", text: "The concept's difficult work starts after the demo: verifying reports, handling escrow and disputes, protecting residents' information, selecting qualified contractors and coordinating with municipalities. A prize-winning prototype is not yet a deployed service, and the report does not say BlockFix has launched or secured operating funding." },
            { type: "heading", text: "The wider value is talent and tested ideas" },
            { type: "paragraph", text: "The Wits event connects student projects with internships and potential investors. Its strongest contribution may be surfacing locally grounded problems and giving teams a route to refine their ideas. The next milestones to watch are a pilot, a transparent governance model for funds and evidence that communities and local authorities will use the platform." },
            { type: "source", text: "TechCentral: Pothole bounty app wins Wits hackathon (October 5, 2026)", url: "https://techcentral.co.za/pothole-bounty-app-wins-wits-hackathon/286907/" }
        ]
    },

    // ============================== NEWS ==============================
    {
        id: "ai-changing-software-development",
        title: "Mistral Large 4 Puts Open-Weight AI Back in the Spotlight",
        description: "The one-trillion-parameter model is not open-weight yet; Mistral says it plans to release weights after safety testing.",
        category: "news",
        categoryName: "News",
        date: "2026-10-06",
        readTime: "5 min read",
        image: "https://live.staticflickr.com/4630/39188583425_9b8f973480_b.jpg",
        imageCredit: { text: "A wafer of a D-Wave quantum computer by Steve Jurvetson (CC BY 2.0), Flickr; illustrative AI hardware image", url: "https://www.flickr.com/photos/44124348109@N01/39188583425" },
        content: [
            { type: "paragraph", text: "Mistral AI released Mistral Large 4 on October 6, describing it as a one-trillion-parameter multimodal model. The company says it will initially be available through a guarded public endpoint and that it plans to release model weights after additional safety testing. At launch, that means the model is not yet open-weight, despite the wider conversation about open AI." },
            { type: "heading", text: "Why the release matters" },
            { type: "paragraph", text: "Mistral is pitching the model as an alternative for enterprises and governments seeking more control over AI infrastructure. The company says it trained the model using 4,000 Nvidia GPUs and is targeting use cases such as cybersecurity, finance and chip design. Those are company statements; independent benchmark results were still pending in TechCrunch's launch coverage." },
            { type: "heading", text: "The trade-off is capability versus access" },
            { type: "paragraph", text: "A large model can be expensive to train and serve, and a delayed weight release limits what developers can inspect or run themselves. Mistral says the safety window is intended to reduce misuse risk. Buyers should watch for independent evaluations, published licensing terms, actual inference costs and whether the promised weights arrive on schedule before choosing it for a production system." },
            { type: "source", text: "TechCrunch: Mistral's new 1T model aims to leapfrog closed and open rivals (October 6, 2026)", url: "https://techcrunch.com/2026/10/06/mistrals-new-1t-model-aims-to-leapfrog-closed-and-open-rivals/" },
            { type: "source", text: "Mistral AI: Mistral Large 4 announcement", url: "https://mistral.ai/news/mistral-large-4/" }
        ]
    },
    {
        id: "windows-11-26h2-fall-update",
        title: "OpenAI Plans Invisible ChatGPT Text Watermarks in the EU",
        description: "The detector aims to identify OpenAI-generated text, but OpenAI says short, translated or heavily edited passages are harder to detect.",
        category: "news",
        categoryName: "News",
        date: "2026-10-05",
        readTime: "5 min read",
        image: "https://images.pexels.com/photos/10725897/pexels-photo-10725897.jpeg?cs=srgb&dl=pexels-mecanbay-10725897.jpg&fm=jpg",
        imageCredit: { text: "Code on a computer monitor by Mecanbay (Pexels); illustrative image", url: "https://www.pexels.com/photo/text-on-computer-monitor-10725897/" },
        content: [
            { type: "paragraph", text: "OpenAI says it will roll out an invisible watermark for text produced by ChatGPT and Codex to eligible users in the European Union. The method, named textGrain, subtly shapes word selection so a detector with the right key can identify a pattern after text is copied. It is not a visible badge and does not identify the person who generated the text." },
            { type: "heading", text: "A watermark is a signal, not proof" },
            { type: "paragraph", text: "OpenAI says its early tests found that replacing 10% of words with synonyms reduced detection from about 92% to 66%. Short passages, math answers and translated text are also harder to detect. The company warns that absence of a watermark does not prove human authorship, and that a signal cannot measure how much human editing or judgment went into a passage." },
            { type: "heading", text: "What changes for users and developers" },
            { type: "paragraph", text: "The EU rollout is planned over the coming weeks; developers using the API can enable the feature for select models, but it is off by default. OpenAI says access to the detector will initially be limited to approved researchers and expert organizations. The approach may help with provenance, but it is not a reliable stand-alone plagiarism or authorship test." },
            { type: "source", text: "TechCrunch: OpenAI will start watermarking ChatGPT's text in the EU (October 5, 2026)", url: "https://techcrunch.com/2026/10/05/openai-will-start-watermarking-chatgpts-text-in-the-eu/" },
            { type: "source", text: "OpenAI: Text provenance for the EU", url: "https://openai.com/index/eu-text-provenance/" }
        ]
    },
    {
        id: "startup-studios-quiet-return",
        title: "AI Agent Startups Compete on Trust, Not Just Capabilities",
        description: "Wajo's early product shows the promise and unresolved risks of agents that call businesses, access personal data and take actions.",
        category: "news",
        categoryName: "News",
        date: "2026-10-06",
        readTime: "4 min read",
        image: "https://images.pexels.com/photos/1597776/pexels-photo-1597776.jpeg?cs=srgb&dl=pexels-brett-sayles-1597776.jpg&fm=jpg",
        imageCredit: { text: "Server network cables by Brett Sayles (Pexels); illustrative infrastructure image", url: "https://www.pexels.com/photo/close-up-of-network-cables-with-server-ports-1597776/" },
        content: [
            { type: "paragraph", text: "The personal-agent market is attracting products that can message contacts, make calls, book services and handle errands. TechCrunch's October 6 report profiles Wajo, whose Fo agent works across iMessage and WhatsApp and can make calls or use a virtual card. The reporter describes some early tests as successful and others as unclear, including a call where disclosure was not clear." },
            { type: "heading", text: "Trust has to be demonstrated" },
            { type: "paragraph", text: "Wajo says it is building privacy and safety controls, including a virtual payment card and preferences for calls. Those are company claims and early product features, not proof that agents are safe in every context. Users should know what data an agent can access, how it identifies itself to other people, what actions need approval and how to revoke access." },
            { type: "heading", text: "Autonomy creates a new consent problem" },
            { type: "paragraph", text: "An agent acting on a person's behalf affects people who never chose to use it: the business receiving a call, the contact who gets a message or the service whose terms restrict automation. Clear disclosure, limits on delegated actions and an audit trail matter as much as the agent's task-completion rate. The market is moving quickly, but these are still unsettled product and policy questions." },
            { type: "source", text: "TechCrunch: Vinod Khosla backs Wajo on trust in the agent market (October 6, 2026)", url: "https://techcrunch.com/2026/10/06/vinod-khosla-believes-ex-deepmind-engineers-wajo-will-win-agent-market-on-trust/" }
        ]
    },
    {
        id: "on-device-ai-privacy",
        title: "Norway's Smart-Glasses Proposal Puts Privacy at the Center",
        description: "The proposal targets privacy-sensitive settings, not all use; camera indicators do not resolve every consent and data question.",
        category: "news",
        categoryName: "News",
        date: "2026-10-05",
        readTime: "4 min read",
        image: "https://about.fb.com/wp-content/uploads/2026/09/07_LISA.jpg?w=1024",
        imageCredit: { text: "Meta glasses collection, Meta Newsroom", url: "https://about.fb.com/news/2026/09/introducing-ray-ban-meta-audio-glasses-new-styles-plus-muse/" },
        content: [
            { type: "paragraph", text: "Norway is considering temporary restrictions on camera-equipped smart glasses in some privacy-sensitive places, according to the Associated Press. The reported proposal is not a blanket ban on the devices; it focuses on settings where people may have a strong expectation of privacy. The debate comes as smart glasses add cameras, microphones and AI assistants to frames designed to look ordinary." },
            { type: "heading", text: "A recording light cannot answer every question" },
            { type: "paragraph", text: "Manufacturers use visible indicators to signal when glasses are capturing images or video, but bystanders may not notice them, and indicators do not explain what happens to audio, metadata or AI requests. Privacy depends on device settings, the company's data practices, local law and the expectations of people nearby." },
            { type: "heading", text: "Rules are still developing" },
            { type: "paragraph", text: "The AP report describes a proposal under consideration, not an enacted nationwide prohibition. Other countries, workplaces and venues may set different rules. For users, the practical step is to check local guidance and ask permission before recording in private or sensitive settings; for manufacturers, clear capture signals and transparent retention controls remain important." },
            { type: "source", text: "Associated Press: Privacy concerns put smart glasses under scrutiny as Norway seeks temporary ban (October 5, 2026)", url: "https://apnews.com/article/norway-ai-glasses-ban-be20dbd949ce058023864b66219f9c2b" }
        ]
    },
    {
        id: "data-centres-power-grid-problem",
        title: "Amazon's $1B Data-Center Pledge Meets a Local Backlash",
        description: "The company promises five years of community investment, while residents and officials keep asking about power, water and local costs.",
        category: "news",
        categoryName: "News",
        date: "2026-10-02",
        readTime: "5 min read",
        image: "https://images.pexels.com/photos/17489158/pexels-photo-17489158.jpeg?cs=srgb&dl=pexels-cookiecutter-17489158.jpg&fm=jpg",
        imageCredit: { text: "Data-center control terminal by Panumas Nikhomkhai (Pexels); illustrative image", url: "https://www.pexels.com/photo/computer-server-in-data-center-room-17489158/" },
        content: [
            { type: "paragraph", text: "Amazon announced more than US$1 billion in community investments over five years in areas where it operates data centres. The company says the money will support education, job training, water and energy projects. The Associated Press reports the announcement comes as public opposition to large data-centre construction grows." },
            { type: "heading", text: "A pledge does not resolve local costs" },
            { type: "paragraph", text: "Amazon's cloud chief says the company will stop using non-disclosure agreements with government agencies on its projects and hold community open houses. Residents still need project-level answers about electricity and water demand, grid upgrades, construction impacts and who pays for shared infrastructure. A community fund cannot replace transparent utility data." },
            { type: "heading", text: "What to measure over the next five years" },
            { type: "paragraph", text: "Track the money actually spent, who benefits, how many local jobs last beyond construction, and whether energy and water commitments are independently measured. The AP report notes that data centres are becoming a political issue in the US; the same questions are relevant wherever new facilities are proposed. Amazon's announcement is a company commitment, not yet evidence of outcomes." },
            { type: "source", text: "Associated Press: Amazon to invest $1B into data center communities amid backlash (October 2, 2026)", url: "https://apnews.com/article/amazon-data-centers-1-billion-investment-91b65ba1729540c1c0d92e35deef35d8" }
        ]
    },
    {
        id: "lagos-life-viral-browser-game",
        title: "Lagos Life Surpasses 2 Million Players in Days, Taking the Tech Industry by Storm",
        description: "A Nigerian-made life simulator surged past two million players in its first week, turning work, rent and city life into a shared online world.",
        category: "news",
        categoryName: "News",
        date: "2026-10-11",
        readTime: "5 min read",
        image: "https://lagoslife.app/opengraph-image?3c97f788344d8ddc",
        imageCredit: { text: "Lagos Life, official game website", url: "https://lagoslife.app/" },
        content: [
            { type: "paragraph", text: "Lagos Life is a Nigerian-made, browser-based life simulation game built around a virtual version of everyday city life. Created by developer Shalom Rayhamen, it launched on October 1, 2026. Vanguard reported on October 7 that the game had passed two million players within its first week. That milestone comes from the creator and the game's dashboard; the reported traffic figures have not been independently audited." },
            { type: "heading", text: "A shared world built around everyday choices" },
            { type: "paragraph", text: "Players create characters, take jobs, earn virtual naira, pay rent, manage their characters' needs and explore locations inspired by Lagos. The multiplayer design lets people meet and interact in the same online world, rather than playing through a purely solo simulation. Because it runs in a web browser, it can be reached from a phone or computer without installing a large game." },
            { type: "heading", text: "Why it has travelled so quickly" },
            { type: "paragraph", text: "The format pairs easy access with a setting that feels familiar to its intended audience. Work, housing costs, transport and going out become game systems, giving players recognizable material to share and talk about. Rayhamen announced that Abuja and Port Harcourt had joined the experience alongside the two-million-player milestone, extending the virtual map beyond Lagos." },
            { type: "heading", text: "What the numbers do and do not show" },
            { type: "paragraph", text: "A fast-growing player count is a strong signal of attention, but it does not by itself establish how many people return, how well the shared world handles peak traffic or how the in-game economy develops. The reported concurrent-player and visit totals are based on the game's dashboard, not an independent audit. The naira earned in the game is virtual currency with no real-world cash value; Lagos Life is entertainment, not a way to earn or withdraw money." },
            { type: "source", text: "Vanguard News: Lagos Life game crosses 2 million users – here's how to play (October 7, 2026)", url: "https://www.vanguardngr.com/2026/10/lagos-life-game-crosses-2-million-users-heres-how-to-play/" },
            { type: "source", text: "Lagos Life: Official game website", url: "https://lagoslife.app/" }
        ]
    }

];
