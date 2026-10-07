// ==========================================================
// ARTICLE.JS — runs only on pages/article.html
// ==========================================================
// Reads ?id= from the URL (e.g. article.html?id=iphone-17-pro-review),
// finds the matching entry in articles[] (data/articles.js), and
// fills in the headline, byline, body copy and social-share tags.
// If the id doesn't match anything, it shows a "story not found"
// state instead of a blank page.
// ==========================================================

console.log("Mantech article page is running.");


// ==========================================
// GET ARTICLE ID
// ==========================================

const parameters =
    new URLSearchParams(window.location.search);

const articleId =
    parameters.get("id");


// ==========================================
// FIND ARTICLE
// ==========================================

const article =
    articles.find(function (item) {

        return item.id === articleId;

    });


// ==========================================
// ARTICLE ELEMENTS
// ==========================================

const headline =
    document.getElementById("articleHeadline");

const description =
    document.getElementById("articleDek");

const category =
    document.getElementById("articleCategory");

const date =
    document.getElementById("articleDate");

const readTime =
    document.getElementById("articleReadTime");

const image =
    document.getElementById("articleImage");

const imageCredit =
    document.getElementById("articleImageCredit");

const content =
    document.getElementById("articleContent");


// ==========================================
// ARTICLE NOT FOUND
// ==========================================

if (!article) {

    document.title =
        "Article not found — Mantech Media";


    headline.textContent =
        "We couldn't find that story.";


    description.textContent =
        "The article may have been moved, removed or does not exist.";


    category.textContent =
        "MANTECH MEDIA";


    date.textContent =
        "";


    readTime.textContent =
        "";


    image.style.display =
        "none";


    content.innerHTML = `

        <p>

            Try returning to the homepage and
            choosing another story.

        </p>

        <p>

            <a href="../index.html">
                Return to Mantech →
            </a>

        </p>

    `;

}


// ==========================================
// DISPLAY ARTICLE
// ==========================================

else {

    // ==========================================
    // PAGE TITLE
    // ==========================================

    document.title =
        `${article.title} — Mantech Media`;


    // ==========================================
    // SEO DESCRIPTION
    // ==========================================

    const articleDescription =
        document.getElementById("articleDescription");

    if (articleDescription) {

        articleDescription.setAttribute(
            "content",
            article.description
        );

    }


    // ==========================================
    // OPEN GRAPH TITLE
    // ==========================================

    const articleOgTitle =
        document.getElementById("articleOgTitle");

    if (articleOgTitle) {

        articleOgTitle.setAttribute(
            "content",
            article.title
        );

    }


    // ==========================================
    // OPEN GRAPH DESCRIPTION
    // ==========================================

    const articleOgDescription =
        document.getElementById("articleOgDescription");

    if (articleOgDescription) {

        articleOgDescription.setAttribute(
            "content",
            article.description
        );

    }


    // ==========================================
    // OPEN GRAPH IMAGE
    // ==========================================

    const articleOgImage =
        document.getElementById("articleOgImage");

    if (articleOgImage) {

        articleOgImage.setAttribute(
            "content",
            article.image.replace("/assets/", "../assets/")
        );

    }


    // ==========================================
    // ARTICLE HEADER
    // ==========================================

    headline.textContent =
        article.title;


    description.textContent =
        article.description;


    category.textContent =
        article.categoryName;


    category.href =
        `category.html?category=${article.category}`;


    date.textContent =
        article.date;


    readTime.textContent =
        article.readTime;


    // ==========================================
    // HERO IMAGE
    // ==========================================

    image.src =
        article.image;


    image.alt =
        article.title;

    if (imageCredit && article.imageCredit) {

        imageCredit.innerHTML =
            `Image: <a href="${article.imageCredit.url}" target="_blank" rel="noopener noreferrer">${article.imageCredit.text}</a>`;

    }


    // ==========================================
    // ARTICLE CONTENT
    // ==========================================

    content.innerHTML =
        article.content
            .map(function (block) {

                if (block.type === "heading") {

                    return `
                        <h2>
                            ${block.text}
                        </h2>
                    `;

                }

                if (block.type === "source") {

                    return `
                        <p class="article-source">
                            Source: <a href="${block.url}" target="_blank" rel="noopener noreferrer">${block.text}</a>
                        </p>
                    `;

                }


                return `
                    <p>
                        ${block.text}
                    </p>
                `;

            })
            .join("");


    // ==========================================
    // RELATED STORIES
    // ==========================================

    const relatedStories =
        articles
            .filter(function (item) {

                return (
                    item.category === article.category &&
                    item.id !== article.id
                );

            })
            .sort(function (a, b) {

                return new Date(b.date) -
                       new Date(a.date);

            })
            .slice(0, 3);


    const relatedContainer =
        document.getElementById(
            "articleRelatedStories"
        );


    if (relatedContainer) {

        if (relatedStories.length === 0) {

            relatedContainer.innerHTML = `
                <p>
                    More stories in this category
                    are coming soon.
                </p>
            `;

        }

        else {

            relatedContainer.innerHTML =
                relatedStories
                    .map(function (item) {

                        return `

                            <article
                                class="article-related-card"
                            >

                                <a
                                    href="article.html?id=${item.id}"
                                    class="article-related-image"
                                >

                                    <img
                                        src="${item.image}"
                                        alt="${item.title}"
                                        loading="lazy"
                                    >

                                </a>


                                <div
                                    class="article-related-content"
                                >

                                    <span>
                                        ${item.categoryName}
                                    </span>


                                    <h3>

                                        <a
                                            href="article.html?id=${item.id}"
                                        >

                                            ${item.title}

                                        </a>

                                    </h3>


                                    <time>
                                        ${item.date}
                                    </time>

                                </div>

                            </article>

                        `;

                    })
                    .join("");

        }

    }


    // ==========================================
    // CATEGORY LINK
    // ==========================================

    const articleRelatedCategory =
        document.getElementById(
            "articleRelatedCategory"
        );


    if (articleRelatedCategory) {

        articleRelatedCategory.href =
            `category.html?category=${article.category}`;

    }

}