// ==========================================================
// CATEGORY.JS — runs only on pages/category.html
// ==========================================================
// Reads ?category= from the URL (e.g. category.html?category=apple),
// looks up that category's title/description, and lists every
// story from articles[] (data/articles.js) that belongs to it,
// newest first. Nothing here needs editing to add a new story —
// new articles appear automatically as long as their "category"
// field matches one of the five keys used across the site.
// ==========================================================

console.log("Mantech category page is running.");


// ==========================================
// GET CATEGORY
// ==========================================

const parameters =
    new URLSearchParams(window.location.search);

const categoryName =
    parameters.get("category");


// ==========================================
// PAGE ELEMENTS
// ==========================================

const categoryTitle =
    document.getElementById("categoryTitle");

const categoryDescription =
    document.getElementById("categoryDescription");

const categoryStories =
    document.getElementById("categoryStories");


// ==========================================
// CATEGORY INFORMATION
// ==========================================

const categories = {

    news: {
        title: "News",
        description:
            "The latest stories shaping technology, business and the digital world."
    },

    apple: {
        title: "Apple",
        description:
            "Apple, its ecosystem, products, software and the technology shaping its future."
    },

    devices: {
        title: "Devices",
        description:
            "The latest smartphones, computers, wearables and technology devices."
    },

    business: {
        title: "Business",
        description:
            "Technology, companies, startups, money and the business behind the digital economy."
    },

    "south-africa": {
        title: "South Africa",
        description:
            "Technology, innovation and the digital economy shaping South Africa."
    }

};


// ==========================================
// FIND CATEGORY
// ==========================================

const selectedCategory =
    categories[categoryName];


// ==========================================
// CATEGORY NOT FOUND
// ==========================================

if (!selectedCategory) {

    categoryTitle.textContent =
        "Category not found";

    categoryDescription.textContent =
        "We couldn't find the category you're looking for.";

    categoryStories.innerHTML = `

        <div class="empty-category">

            <p>
                Try choosing another category.
            </p>

            <a href="../index.html">
                Return home →
            </a>

        </div>

    `;

} else {


    // ==========================================
    // UPDATE PAGE
    // ==========================================

    categoryTitle.textContent =
        selectedCategory.title;


    categoryDescription.textContent =
        selectedCategory.description;


    document.title =
        `${selectedCategory.title} — Mantech Media`;


    // ==========================================
    // FIND ARTICLES
    // ==========================================

    let filteredArticles =
        articles.filter(function (article) {

            return (
                article.category === categoryName
            );

        });


    // ==========================================
    // SORT NEWEST FIRST
    // ==========================================

    filteredArticles.sort(function (a, b) {

        return new Date(b.date) -
               new Date(a.date);

    });


    // ==========================================
    // NO STORIES
    // ==========================================

    if (filteredArticles.length === 0) {

        categoryStories.innerHTML = `

            <div class="empty-category">

                <h2>
                    No stories yet.
                </h2>

                <p>
                    We're working on stories for this category.
                </p>

            </div>

        `;

    } else {


        // ==========================================
        // DISPLAY ARTICLES
        // ==========================================

        categoryStories.innerHTML =
            filteredArticles.map(function (article) {

                return `

                    <article class="category-card">

                        <a
                            href="article.html?id=${article.id}"
                            class="category-card-image"
                        >

                            <img
                                src="${article.image}"
                                alt="${article.title}"
                                loading="lazy"
                            >

                        </a>


                        <div class="category-card-content">

                            <span class="category-card-category">

                                ${article.categoryName}

                            </span>


                            <h2>

                                <a
                                    href="article.html?id=${article.id}"
                                >

                                    ${article.title}

                                </a>

                            </h2>


                            <p>

                                ${article.description}

                            </p>


                            <div class="category-card-meta">

                                <time>
                                    ${article.date}
                                </time>

                                <span>
                                    ${article.readTime}
                                </span>

                            </div>

                        </div>

                    </article>

                `;

            }).join("");

    }

}