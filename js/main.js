// ==========================================================
// MAIN.JS — runs on every page (homepage, category, article)
// ==========================================================
// This file handles the things every page shares: today's date
// in the header, the mobile menu, search, and the "Subscribe"
// box. Homepage-only sections (featured story, South Africa
// list, devices list, business list) are also built here, but
// each one checks first that its container exists on the page
// and that articles[] (from data/articles.js) has loaded, so
// this same file is safe to include everywhere.
//
// Story data itself never lives in this file — see
// data/articles.js for that, and read the "HOW TO POST A NEW
// STORY" comment at the top of it if you're adding content.
// ==========================================================

// ==========================================================
// SECURITY HELPER
// ==========================================================
// Search below echoes back whatever the visitor typed (e.g.
// "No stories found for '...'"). escapeHTML() makes sure that
// text can never be interpreted as HTML/JavaScript before it's
// inserted with innerHTML — a basic, standard safeguard.
function escapeHTML(value) {

    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;

}


console.log("Mantech Media is running.");


// ==========================================
// CURRENT DATE
// ==========================================

const today = new Date();

const formattedDate = today.toLocaleDateString("en-ZA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});

const todayDate =
    document.getElementById("todayDate");

if (todayDate) {

    todayDate.textContent =
        formattedDate;

}

// ==========================================
// HOMEPAGE CONTENT
// ==========================================

const featuredStory =
    document.getElementById("featuredStory");

const latestList =
    document.getElementById("latestList");


if (
    typeof articles !== "undefined"
) {

    // ==========================================
    // SORT ARTICLES
    // NEWEST FIRST
    // ==========================================

    const sortedArticles =
        [...articles].sort(function (a, b) {

            return new Date(b.date) -
                   new Date(a.date);

        });


    // ==========================================
    // FEATURED STORY
    // ==========================================

    if (
        featuredStory &&
        sortedArticles.length > 0
    ) {

        const featured =
            sortedArticles[0];


        featuredStory.innerHTML = `

            <a
                href="pages/article.html?id=${featured.id}"
                class="featured-image"
            >

                <img
                    src="${featured.image}"
                    alt="${featured.title}"
                >

            </a>


            <div class="featured-information">

                <div class="story-meta">

                    <span>
                        ${featured.categoryName}
                    </span>

                    <span>
                        ${featured.readTime}
                    </span>

                </div>


                <h2>

                    <a
                        href="pages/article.html?id=${featured.id}"
                    >

                        ${featured.title}

                    </a>

                </h2>


                <p>

                    ${featured.description}

                </p>


                <a
                    href="pages/article.html?id=${featured.id}"
                    class="text-link"
                >

                    Read story

                    <span>
                        →
                    </span>

                </a>

            </div>

        `;

    }


    // ==========================================
    // LATEST STORIES
    // ==========================================

    if (latestList) {

        const latestArticles =
            sortedArticles.slice(1, 4);


        latestList.innerHTML =
            latestArticles
                .map(function (article) {

                    return `

                        <article class="latest-story">

                            <a
                                href="pages/article.html?id=${article.id}"
                                class="latest-image"
                            >

                                <img
                                    src="${article.image}"
                                    alt="${article.title}"
                                    loading="lazy"
                                >

                            </a>


                            <div class="latest-information">

                                <div class="story-meta">

                                    <span>
                                        ${article.categoryName}
                                    </span>

                                    <span>
                                        ${article.readTime}
                                    </span>

                                </div>


                                <h3>

                                    <a
                                        href="pages/article.html?id=${article.id}"
                                    >

                                        ${article.title}

                                    </a>

                                </h3>


                                <p>

                                    ${article.description}

                                </p>


                                <time>
                                    ${article.date}
                                </time>

                            </div>

                        </article>

                    `;

                })
                .join("");

    }

}

// ==========================================
// SOUTH AFRICA
// ==========================================

const southAfricaLayout =
    document.getElementById("southAfricaLayout");


if (
    southAfricaLayout &&
    typeof articles !== "undefined"
) {

    const southAfricaArticles =
        articles.filter(function (article) {

            return article.category === "south-africa";

        });


    southAfricaArticles.sort(function (a, b) {

        return new Date(b.date) -
               new Date(a.date);

    });


    if (southAfricaArticles.length > 0) {

        const mainStory =
            southAfricaArticles[0];

        const sideStories =
            southAfricaArticles.slice(1, 4);


        southAfricaLayout.innerHTML = `

            <article class="sa-main-story">

                <a
                    href="pages/article.html?id=${mainStory.id}"
                    class="sa-image"
                >

                    <img
                        src="${mainStory.image}"
                        alt="${mainStory.title}"
                    >

                </a>


                <div class="story-meta">

                    <span>
                        ${mainStory.categoryName}
                    </span>

                    <span>
                        ${mainStory.readTime}
                    </span>

                </div>


                <h3>

                    <a
                        href="pages/article.html?id=${mainStory.id}"
                    >

                        ${mainStory.title}

                    </a>

                </h3>


                <p>
                    ${mainStory.description}
                </p>

            </article>


            <div class="sa-side-stories">

                ${sideStories.map(function (article) {

                    return `

                        <article class="compact-story">

                            <div>

                                <span class="compact-category">

                                    ${article.categoryName}

                                </span>


                                <h3>

                                    <a
                                        href="pages/article.html?id=${article.id}"
                                    >

                                        ${article.title}

                                    </a>

                                </h3>

                            </div>


                            <span class="story-arrow">
                                ↗
                            </span>

                        </article>

                    `;

                }).join("")}

            </div>

        `;

    }

}


// ==========================================
// DEVICES
// ==========================================

const deviceLayout =
    document.getElementById("deviceLayout");


if (
    deviceLayout &&
    typeof articles !== "undefined"
) {

    const deviceArticles =
        articles.filter(function (article) {

            return article.category === "devices";

        });


    deviceArticles.sort(function (a, b) {

        return new Date(b.date) -
               new Date(a.date);

    });


    if (deviceArticles.length > 0) {

        const mainDevice =
            deviceArticles[0];

        const sideDevices =
            deviceArticles.slice(1, 3);


        deviceLayout.innerHTML = `

            <article class="device-main">

                <a
                    href="pages/article.html?id=${mainDevice.id}"
                    class="device-main-image"
                >

                    <img
                        src="${mainDevice.image}"
                        alt="${mainDevice.title}"
                    >

                </a>


                <div class="story-meta">

                    <span>
                        ${mainDevice.categoryName}
                    </span>

                </div>


                <h3>

                    <a
                        href="pages/article.html?id=${mainDevice.id}"
                    >

                        ${mainDevice.title}

                    </a>

                </h3>

            </article>


            <div class="device-side">

                ${sideDevices.map(function (article) {

                    return `

                        <article class="device-small">

                            <a
                                href="pages/article.html?id=${article.id}"
                            >

                                <img
                                    src="${article.image}"
                                    alt="${article.title}"
                                    loading="lazy"
                                >

                            </a>


                            <div>

                                <span>
                                    ${article.categoryName}
                                </span>


                                <h3>

                                    <a
                                        href="pages/article.html?id=${article.id}"
                                    >

                                        ${article.title}

                                    </a>

                                </h3>

                            </div>

                        </article>

                    `;

                }).join("")}

            </div>

        `;

    }

}


// ==========================================
// BUSINESS
// ==========================================

const businessStories =
    document.getElementById("businessStories");


if (
    businessStories &&
    typeof articles !== "undefined"
) {

    const businessArticles =
        articles.filter(function (article) {

            return article.category === "business";

        });


    businessArticles.sort(function (a, b) {

        return new Date(b.date) -
               new Date(a.date);

    });


    // The grid holds 3 slots. We fill 2 with real business stories
    // and reserve the last one for a quiet Mantech Studio mention —
    // same card style as the stories around it, just a different
    // destination. This is the site's one subtle, native "ad" slot.
    businessStories.innerHTML =
        businessArticles
            .slice(0, 2)
            .map(function (article) {

                return `

                    <article>

                        <span>
                            ${article.categoryName}
                        </span>


                        <h3>

                            <a
                                href="pages/article.html?id=${article.id}"
                            >

                                ${article.title}

                            </a>

                        </h3>


                        <a
                            href="pages/article.html?id=${article.id}"
                            class="text-link"
                        >

                            Read story →

                        </a>

                    </article>

                `;

            })
            .join("")

        +

        `
            <article class="studio-promo-card">

                <span>
                    Mantech Studio
                </span>


                <h3>

                    <a href="pages/studio.html">

                        Need a website, product or IT
                        support? That's us too.

                    </a>

                </h3>


                <a
                    href="pages/studio.html"
                    class="text-link"
                >

                    See our work →

                </a>

            </article>
        `;

}


// ==========================================
// MOBILE MENU
// ==========================================

const menuButton =
    document.getElementById("menuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");


if (menuButton && mobileNavigation) {

    menuButton.addEventListener(
        "click",
        function () {

            mobileNavigation.classList.toggle("active");

            const isOpen =
                mobileNavigation.classList.contains("active");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );

}


// ==========================================
// SEARCH
// ==========================================

const searchButton =
    document.getElementById("searchButton");

const searchOverlay =
    document.getElementById("searchOverlay");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


// ==========================================
// OPEN SEARCH
// ==========================================

if (searchButton && searchOverlay) {

    searchButton.addEventListener(
        "click",
        function () {

            searchOverlay.classList.add("active");

            document.body.classList.add("search-open");


            setTimeout(function () {

                if (searchInput) {

                    searchInput.focus();

                }

            }, 100);

        }
    );

}


// ==========================================
// CLOSE SEARCH
// ==========================================

function closeSearchOverlay() {

    if (searchOverlay) {

        searchOverlay.classList.remove("active");

    }

    document.body.classList.remove("search-open");

}


if (closeSearch) {

    closeSearch.addEventListener(
        "click",
        function () {

            closeSearchOverlay();

        }
    );

}


// ==========================================
// ESCAPE KEY CLOSES SEARCH
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeSearchOverlay();

        }

    }
);


// ==========================================
// SEARCH
// ==========================================

function performSearch() {

    if (
        !searchInput ||
        !searchResults
    ) {

        return;

    }


    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    if (searchTerm === "") {

        searchResults.innerHTML = `

            <p>
                Start typing to search Mantech.
            </p>

        `;

        return;

    }


    if (
        typeof articles === "undefined"
    ) {

        searchResults.innerHTML = `

            <div class="no-search-results">

                <h3>
                    Search unavailable
                </h3>

                <p>
                    Our stories could not be loaded.
                </p>

            </div>

        `;

        return;

    }


    const matchingStories =
        articles.filter(
            function (article) {

                return (

                    article.title
                        .toLowerCase()
                        .includes(searchTerm)

                    ||

                    article.categoryName
                        .toLowerCase()
                        .includes(searchTerm)

                    ||

                    article.description
                        .toLowerCase()
                        .includes(searchTerm)

                );

            }
        );


    if (
        matchingStories.length === 0
    ) {

        searchResults.innerHTML = `

            <div class="no-search-results">

                <h3>
                    No stories found
                </h3>

                <p>
                    We couldn't find anything matching
                    "${escapeHTML(searchInput.value)}".
                </p>

            </div>

        `;

        return;

    }


    searchResults.innerHTML =
        matchingStories
            .map(
                function (article) {

                    return `

                        <a
                            href="pages/article.html?id=${article.id}"
                            class="search-result"
                        >

                            <div class="search-result-category">

                                ${article.categoryName}

                            </div>


                            <h3>

                                ${article.title}

                            </h3>


                            <p>

                                ${article.description}

                            </p>


                            <div class="search-result-meta">

                                ${article.date}

                            </div>

                        </a>

                    `;

                }
            )
            .join("");

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            performSearch();

        }
    );

}

// ==========================================================
// SUBSCRIBE (email, sent via your own mail app — no backend)
// ==========================================================
//
// How this works, in plain terms:
//   1. Reader types their email and clicks "Subscribe".
//   2. We open their email app with a message already addressed
//      to the CTO's inbox (mabasaamu0@gmail.com), with their
//      email in the body. They just hit send.
//   3. There's no server here to store the address automatically
//      — it lands in the CTO's inbox as a normal email, ready to
//      be added to a mailing list by hand (or imported into a
//      real email tool like Mailchimp/Buttondown later on).
//   4. We also remember, in this browser only, that they
//      subscribed — so on their next visit to the homepage we
//      can say "3 new stories since your last visit" under the
//      form. That part is just a nice bonus and never leaves
//      their device.
//
// Upgrading later: once you're ready for automatic daily
// emails, swap the mailto link below for a real signup form
// action (Mailchimp, Buttondown, ConvertKit all have a free
// tier and a copy-paste HTML form) — everything else on this
// page can stay exactly as it is.

const CTO_EMAIL = "mabasaamu0@gmail.com";
const SUBSCRIBED_KEY = "mantechSubscribed";
const LAST_SEEN_KEY = "mantechLastSeenDate";

const newsletterForm =
    document.getElementById("newsletterForm");

const emailInput =
    document.getElementById("emailInput");

const subscribeButton =
    document.getElementById("subscribeButton");

const newsletterMessage =
    document.getElementById("newsletterMessage");

const DEFAULT_MESSAGE =
    "One message to send, then you're set. We never share your email with anyone else.";


// If this browser already subscribed once, check how many
// articles were published since their last visit and swap the
// caption to mention it — a small "welcome back" touch.
function showNewStoriesSinceLastVisit() {

    const isSubscribed =
        localStorage.getItem(SUBSCRIBED_KEY) === "true";

    if (!isSubscribed || typeof articles === "undefined") {

        return;

    }

    const lastSeen =
        localStorage.getItem(LAST_SEEN_KEY);

    if (lastSeen) {

        const newCount = articles.filter(function (article) {
            return new Date(article.date) > new Date(lastSeen);
        }).length;

        if (newCount > 0 && newsletterMessage) {

            newsletterMessage.textContent =
                newCount === 1
                    ? "Welcome back — 1 new story since your last visit."
                    : "Welcome back — " + newCount + " new stories since your last visit.";

        }

    }

    // Reset the counter so today's stories aren't counted again
    // on the next visit.
    localStorage.setItem(LAST_SEEN_KEY, new Date().toISOString());

}


if (newsletterForm && emailInput) {

    showNewStoriesSinceLastVisit();

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const email =
                emailInput.value.trim();

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                if (newsletterMessage) {

                    newsletterMessage.textContent =
                        "Please enter a valid email address.";

                }

                return;

            }

            // Remember (in this browser only) that they've subscribed,
            // so future visits can show the "what's new" message above.
            localStorage.setItem(SUBSCRIBED_KEY, "true");
            localStorage.setItem(LAST_SEEN_KEY, new Date().toISOString());

            // Hand off to the reader's own email app — this is what
            // actually gets their address to the CTO's inbox.
            const subject =
                encodeURIComponent("Add me to Mantech Daily");

            const body =
                encodeURIComponent(
                    "Please add me to daily updates: " + email
                );

            window.location.href =
                "mailto:" + CTO_EMAIL + "?subject=" + subject + "&body=" + body;

            // Small, temporary thank-you — not a big banner.
            // It fades back to the normal caption after a few seconds.
            if (newsletterMessage) {

                newsletterMessage.textContent =
                    "Thanks! Check your mail app to send it through.";
                newsletterMessage.classList.add("newsletter-message--confirmed");

                setTimeout(function () {
                    newsletterMessage.textContent = DEFAULT_MESSAGE;
                    newsletterMessage.classList.remove("newsletter-message--confirmed");
                }, 4000);

            }

            newsletterForm.reset();

        }
    );

}
