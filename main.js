// ================================================================
//  main.js – Amimo Discovery (Clean, Full, Optimized)
//  All errors resolved, loading messages centered with "stay" prompt
// ================================================================

(function() {
    'use strict';

    // =============================================================
    // 1. CONFIGURATION
    // =============================================================

    const CONFIG = {
        MAX_ARTICLES_PER_FEED: 15,
        BATCH_SIZE: 5,
        CATEGORY_LIMIT: 3,
        LOCAL_SECTION_LIMIT: 5,
        TOP_NEWS_BATCH: 3,
        TOP_NEWS_DISPLAY: 5,
        TIMEOUT_MS: 10000,
        MAX_ITERATIONS: 6,
        STORAGE_KEY: 'amimo_saved',
        COUNTRY_KEY: 'amimo_country',
        THEME_KEY: 'blue_theme',
        STATE_KEY: 'amimo_state',
        SEARCH_KEY: 'amimoAllArticles',
    };

    // =============================================================
    // 2. FEED DATASETS
    // =============================================================

    const WORLD_FEEDS = [
        // World
        { name: "BBC World", url: "https://feeds.bbci.co.uk/news/world/rss.xml", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=BBC" },
        { name: "CNN International", url: "https://rss.cnn.com/rss/edition.rss", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CNN" },
        { name: "Al Jazeera", url: "https://www.aljazeera.com/xml/rss/all.xml", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=AJ" },
        { name: "Reuters World", url: "https://www.reutersagency.com/feed/?best-topics=world&post_type=best", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Reuters" },
        { name: "The Guardian", url: "https://www.theguardian.com/world/rss", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Guardian" },
        { name: "France 24", url: "https://www.france24.com/en/rss", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=France24" },
        { name: "Deutsche Welle", url: "https://rss.dw.com/rdf/rss-en-top", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=DW" },
        { name: "ABC News (AU)", url: "https://www.abc.net.au/news/feed/51120/rss.xml", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=ABC+AU" },
        { name: "CBC News", url: "https://www.cbc.ca/cmlink/rss-topstories", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CBC" },
        { name: "NDTV World", url: "https://feeds.feedburner.com/ndtvnews-world-news", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=NDTV" },
        { name: "South China Morning Post", url: "https://www.scmp.com/rss/2/feed", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=SCMP" },
        { name: "The Japan Times", url: "https://www.japantimes.co.jp/feed/", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=JapanTimes" },
        { name: "Euronews", url: "https://www.euronews.com/rss", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Euronews" },
        { name: "The New York Times World", url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=NYT+World" },
        { name: "The Washington Post World", url: "https://feeds.washingtonpost.com/rss/world", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=WaPo+World" },
        // Technology
        { name: "TechCrunch", url: "https://techcrunch.com/feed/", category: "Technology", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=TechCrunch" },
        { name: "The Verge", url: "https://www.theverge.com/rss/index.xml", category: "Technology", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Verge" },
        { name: "Wired", url: "https://www.wired.com/feed/rss", category: "Technology", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Wired" },
        { name: "Ars Technica", url: "https://feeds.feedburner.com/arstechnica/index", category: "Technology", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Ars" },
        { name: "ZDNet", url: "https://www.zdnet.com/news/rss.xml", category: "Technology", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=ZDNet" },
        { name: "CNET", url: "https://www.cnet.com/rss/news/", category: "Technology", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CNET" },
        // Sports
        { name: "ESPN", url: "https://www.espn.com/espn/rss/news", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=ESPN" },
        { name: "Sky Sports", url: "https://www.skysports.com/rss/12040", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=SkySports" },
        { name: "Bleacher Report", url: "https://bleacherreport.com/articles/feed", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Bleacher" },
        { name: "BBC Sport", url: "https://feeds.bbci.co.uk/sport/rss.xml", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=BBCSport" },
        { name: "The Athletic", url: "https://theathletic.com/feed/", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Athletic" },
        { name: "FOX Sports", url: "https://www.foxsports.com/rss", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=FOXSports" },
        { name: "CBS Sports", url: "https://www.cbssports.com/rss/headlines", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CBSSports" },
        // Entertainment
        { name: "Variety", url: "https://variety.com/feed/", category: "Entertainment", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Variety" },
        { name: "Hollywood Reporter", url: "https://www.hollywoodreporter.com/feed/", category: "Entertainment", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=THR" },
        { name: "Deadline", url: "https://deadline.com/feed/", category: "Entertainment", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Deadline" },
        { name: "Entertainment Weekly", url: "https://ew.com/feed/", category: "Entertainment", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=EW" },
        // Politics
        { name: "BBC Politics", url: "https://feeds.bbci.co.uk/news/politics/rss.xml", category: "Politics", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Politics" },
        { name: "Politico", url: "https://www.politico.com/rss/politics.xml", category: "Politics", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Politico" },
        { name: "The Hill", url: "https://thehill.com/feed/", category: "Politics", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=TheHill" },
        // Business
        { name: "Bloomberg", url: "https://feeds.bloomberg.com/markets/news.rss", category: "Business", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Bloomberg" },
        { name: "CNBC", url: "https://www.cnbc.com/id/100003114/device/rss/rss.html", category: "Business", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CNBC" },
        { name: "Financial Times", url: "https://www.ft.com/?format=rss", category: "Business", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=FT" },
        { name: "Business Insider", url: "https://www.businessinsider.com/rss", category: "Business", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=BI" },
        // Health
        { name: "CNN Health", url: "https://rss.cnn.com/rss/edition_health.rss", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Health" },
        { name: "WebMD", url: "https://feeds.webmd.com/rss/rss.aspx", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=WebMD" },
        { name: "Medical News Today", url: "https://www.medicalnewstoday.com/feeds/rss", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=MNT" },
        { name: "Healthline", url: "https://www.healthline.com/feeds/rss", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Healthline" },
        { name: "WHO News", url: "https://www.who.int/rss-feeds/news-english.xml", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=WHO" },
        { name: "Harvard Health", url: "https://www.health.harvard.edu/feed", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Harvard+Health" },
        { name: "Medical Xpress", url: "https://medicalxpress.com/rss/", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Medical+Xpress" }
    ];

    const TOP_NEWS_FEEDS = [
        { name: "Google News", url: "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=Google+News" },
        { name: "Yahoo News", url: "https://www.yahoo.com/news/rss", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=Yahoo+News" },
        { name: "Fox News", url: "https://moxie.foxnews.com/google-publisher/latest.xml", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=Fox+News" },
        { name: "NPR", url: "https://feeds.npr.org/1001/rss.xml", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=NPR" },
        { name: "ABC News", url: "https://abcnews.go.com/abcnews/topstories", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=ABC+News" },
        { name: "CBS News", url: "https://www.cbsnews.com/latest/rss/main", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=CBS+News" },
        { name: "NBC News", url: "https://feeds.nbcnews.com/nbcnews/public/news", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=NBC+News" },
        { name: "USA Today", url: "https://www.usatoday.com/rss/news", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=USA+Today" },
        { name: "The Guardian", url: "https://www.theguardian.com/world/rss", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=Guardian" },
        { name: "Reuters", url: "https://www.reutersagency.com/feed/?best-topics=top-news&post_type=best", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=Reuters" },
        { name: "Al Jazeera", url: "https://www.aljazeera.com/xml/rss/all.xml", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=Al+Jazeera" },
        { name: "BBC Top", url: "https://feeds.bbci.co.uk/news/rss.xml", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=BBC+Top" }
    ];

    // =============================================================
    // 3. LOCAL FEEDS (by country)
    // =============================================================

    const localMap = new Map();

    function googleNewsRss(query, country) {
        return `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-US&gl=${country}&ceid=${country}:en`;
    }

    // --- ZAMBIA ---
    localMap.set("ZM", {
        top: [
            { name: "Lusaka Times", url: "https://www.lusakatimes.com/feed/", section: "top", category: "Local" },
            { name: "Zambia Daily Mail", url: "https://www.daily-mail.co.zm/?feed=rss2", section: "top", category: "Local" },
            { name: "Zambia Reports", url: "https://zambiareports.com/feed/", section: "top", category: "Local" },
            { name: "News Diggers Zambia", url: "https://diggers.news/feed/", section: "top", category: "Local" },
            { name: "Mwebantu", url: "https://mwebantu.news/feed/", section: "top", category: "Local" },
            { name: "Zambian Observer", url: "https://zambianobserver.com/feed/", section: "top", category: "Local" }
        ],
        politics: [
            { name: "Zambia Politics Watch", url: "https://zambiapoliticswatch.com/feed/", section: "politics", category: "Local" },
            { name: "Zambia Reports Politics", url: "https://zambiareports.com/category/politics/feed/", section: "politics", category: "Local" }
        ],
        tech: [
            { name: "Zambia Tech News", url: "https://zambiantechnews.com/feed/", section: "tech", category: "Local" }
        ],
        health: [
            { name: "Zambia Health News", url: "https://zambiahealthnews.com/feed/", section: "health", category: "Local" }
        ],
        football: [
            { name: "Zambian Football", url: "https://zambianfootball.co.zm/feed/", section: "football", category: "Local" },
            { name: "Zambia Sports News", url: "https://zambiasportsnews.com/feed/", section: "football", category: "Local" }
        ],
        discover: []
    });

    // --- USA ---
    localMap.set("US", {
        top: [
            { name: "CNN US", url: "https://rss.cnn.com/rss/edition_us.rss", section: "top", category: "Local" },
            { name: "NY Times", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", section: "top", category: "Local" },
            { name: "USA Today", url: "https://www.usatoday.com/rss/news", section: "top", category: "Local" },
            { name: "NBC News", url: "https://feeds.nbcnews.com/nbcnews/public/news", section: "top", category: "Local" }
        ],
        politics: [
            { name: "Politico", url: "https://www.politico.com/rss/politics.xml", section: "politics", category: "Local" },
            { name: "The Hill", url: "https://thehill.com/feed/", section: "politics", category: "Local" },
            { name: "Washington Post Politics", url: "https://feeds.washingtonpost.com/rss/politics", section: "politics", category: "Local" }
        ],
        tech: [
            { name: "TechCrunch", url: "https://techcrunch.com/feed/", section: "tech", category: "Local" },
            { name: "The Verge", url: "https://www.theverge.com/rss/index.xml", section: "tech", category: "Local" },
            { name: "Wired", url: "https://www.wired.com/feed/rss", section: "tech", category: "Local" }
        ],
        health: [
            { name: "CNN Health", url: "https://rss.cnn.com/rss/edition_health.rss", section: "health", category: "Local" },
            { name: "WebMD", url: "https://feeds.webmd.com/rss/rss.aspx", section: "health", category: "Local" },
            { name: "Medical News Today", url: "https://www.medicalnewstoday.com/feeds/rss", section: "health", category: "Local" }
        ],
        football: [
            { name: "ESPN", url: "https://www.espn.com/espn/rss/news", section: "football", category: "Local" },
            { name: "FOX Sports", url: "https://www.foxsports.com/rss", section: "football", category: "Local" },
            { name: "CBS Sports", url: "https://www.cbssports.com/rss/headlines", section: "football", category: "Local" }
        ],
        discover: []
    });

    // --- UK ---
    localMap.set("GB", {
        top: [
            { name: "BBC UK", url: "https://feeds.bbci.co.uk/news/uk/rss.xml", section: "top", category: "Local" },
            { name: "The Guardian UK", url: "https://www.theguardian.com/uk/rss", section: "top", category: "Local" },
            { name: "Sky News UK", url: "https://news.sky.com/feeds/rss/uk", section: "top", category: "Local" }
        ],
        politics: [
            { name: "BBC Politics", url: "https://feeds.bbci.co.uk/news/politics/rss.xml", section: "politics", category: "Local" },
            { name: "The Guardian Politics", url: "https://www.theguardian.com/politics/rss", section: "politics", category: "Local" }
        ],
        tech: [
            { name: "TechCrunch", url: "https://techcrunch.com/feed/", section: "tech", category: "Local" },
            { name: "The Verge", url: "https://www.theverge.com/rss/index.xml", section: "tech", category: "Local" }
        ],
        health: [
            { name: "NHS News", url: "https://www.england.nhs.uk/feed/", section: "health", category: "Local" }
        ],
        football: [
            { name: "BBC Sport", url: "https://feeds.bbci.co.uk/sport/rss.xml", section: "football", category: "Local" },
            { name: "Sky Sports", url: "https://www.skysports.com/rss/12040", section: "football", category: "Local" }
        ],
        discover: []
    });

    // --- INDIA ---
    localMap.set("IN", {
        top: [
            { name: "Times of India", url: "https://timesofindia.indiatimes.com/rssfeedmostrecent.cms", section: "top", category: "Local" },
            { name: "NDTV", url: "https://feeds.feedburner.com/ndtvnews-top-stories", section: "top", category: "Local" },
            { name: "The Hindu", url: "https://www.thehindu.com/news/feeder/default.rss", section: "top", category: "Local" },
            { name: "Indian Express", url: "https://indianexpress.com/feed/", section: "top", category: "Local" }
        ],
        politics: [
            { name: "NDTV Politics", url: "https://feeds.feedburner.com/ndtvnews-politics", section: "politics", category: "Local" }
        ],
        tech: [
            { name: "TechCrunch", url: "https://techcrunch.com/feed/", section: "tech", category: "Local" }
        ],
        health: [
            { name: "WHO India", url: "https://www.who.int/rss-feeds/india-news-english.xml", section: "health", category: "Local" }
        ],
        football: [
            { name: "Sportskeeda", url: "https://www.sportskeeda.com/feed", section: "football", category: "Local" }
        ],
        discover: []
    });

    // --- NIGERIA ---
    localMap.set("NG", {
        top: [
            { name: "Pulse Nigeria", url: "https://www.pulse.ng/rss", section: "top", category: "Local" },
            { name: "The Guardian NG", url: "https://guardian.ng/feed/", section: "top", category: "Local" }
        ],
        politics: [
            { name: "Premium Times Politics", url: "https://www.premiumtimesng.com/politics/feed/", section: "politics", category: "Local" }
        ],
        tech: [
            { name: "TechCrunch", url: "https://techcrunch.com/feed/", section: "tech", category: "Local" }
        ],
        health: [
            { name: "WHO Nigeria", url: "https://www.who.int/rss-feeds/nigeria-news-english.xml", section: "health", category: "Local" }
        ],
        football: [
            { name: "Complete Sports", url: "https://www.completesports.com/feed/", section: "football", category: "Local" }
        ],
        discover: []
    });

    // --- SOUTH AFRICA ---
    localMap.set("ZA", {
        top: [
            { name: "News24", url: "https://www.news24.com/feeds", section: "top", category: "Local" },
            { name: "IOL", url: "https://www.iol.co.za/rss", section: "top", category: "Local" }
        ],
        politics: [
            { name: "Mail & Guardian Politics", url: "https://mg.co.za/politics/feed/", section: "politics", category: "Local" }
        ],
        tech: [
            { name: "TechCentral", url: "https://techcentral.co.za/feed/", section: "tech", category: "Local" }
        ],
        health: [
            { name: "WHO South Africa", url: "https://www.who.int/rss-feeds/south-africa-news-english.xml", section: "health", category: "Local" }
        ],
        football: [
            { name: "KickOff", url: "https://www.kickoff.com/rss", section: "football", category: "Local" }
        ],
        discover: []
    });

    // --- KENYA ---
    localMap.set("KE", {
        top: [
            { name: "Daily Nation", url: "https://www.nation.co.ke/rss", section: "top", category: "Local" },
            { name: "The Star Kenya", url: "https://www.the-star.co.ke/rss", section: "top", category: "Local" }
        ],
        politics: [
            { name: "Nation Politics", url: "https://www.nation.co.ke/politics/feed/", section: "politics", category: "Local" }
        ],
        tech: [
            { name: "TechCrunch", url: "https://techcrunch.com/feed/", section: "tech", category: "Local" }
        ],
        health: [
            { name: "WHO Kenya", url: "https://www.who.int/rss-feeds/kenya-news-english.xml", section: "health", category: "Local" }
        ],
        football: [
            { name: "Goal Kenya", url: "https://www.goal.com/feeds/news/kenya", section: "football", category: "Local" }
        ],
        discover: []
    });

    // --- BRAZIL ---
    localMap.set("BR", {
        top: [
            { name: "CNN Brasil", url: "https://www.cnnbrasil.com.br/feed/", section: "top", category: "Local" },
            { name: "Globo News", url: "https://g1.globo.com/rss/g1/", section: "top", category: "Local" },
            { name: "Folha de S.Paulo", url: "https://feeds.folha.uol.com.br/folha/emcima_hora.xml", section: "top", category: "Local" }
        ],
        politics: [
            { name: "Poder360", url: "https://www.poder360.com.br/feed/", section: "politics", category: "Local" }
        ],
        tech: [
            { name: "TechCrunch", url: "https://techcrunch.com/feed/", section: "tech", category: "Local" }
        ],
        health: [
            { name: "WHO Brazil", url: "https://www.who.int/rss-feeds/brazil-news-english.xml", section: "health", category: "Local" }
        ],
        football: [
            { name: "ESPN Brasil", url: "https://www.espn.com.br/rss/", section: "football", category: "Local" }
        ],
        discover: []
    });

    // --- FRANCE ---
    localMap.set("FR", {
        top: [
            { name: "Le Monde", url: "https://www.lemonde.fr/rss/une.xml", section: "top", category: "Local" },
            { name: "Le Figaro", url: "https://www.lefigaro.fr/rss/figaro_actualites.xml", section: "top", category: "Local" },
            { name: "France 24", url: "https://www.france24.com/en/rss", section: "top", category: "Local" }
        ],
        politics: [
            { name: "Le Monde Politique", url: "https://www.lemonde.fr/politique/rss.xml", section: "politics", category: "Local" }
        ],
        tech: [
            { name: "TechCrunch", url: "https://techcrunch.com/feed/", section: "tech", category: "Local" }
        ],
        health: [
            { name: "WHO France", url: "https://www.who.int/rss-feeds/france-news-english.xml", section: "health", category: "Local" }
        ],
        football: [
            { name: "L'Équipe", url: "https://www.lequipe.fr/rss/actu.xml", section: "football", category: "Local" }
        ],
        discover: []
    });

    // --- GERMANY ---
    localMap.set("DE", {
        top: [
            { name: "DW News", url: "https://rss.dw.com/rdf/rss-en-top", section: "top", category: "Local" },
            { name: "Spiegel Online", url: "https://www.spiegel.de/schlagzeilen/index.rss", section: "top", category: "Local" },
            { name: "Frankfurter Allgemeine", url: "https://www.faz.net/rss/aktuell/", section: "top", category: "Local" }
        ],
        politics: [
            { name: "Spiegel Politik", url: "https://www.spiegel.de/politik/index.rss", section: "politics", category: "Local" }
        ],
        tech: [
            { name: "TechCrunch", url: "https://techcrunch.com/feed/", section: "tech", category: "Local" }
        ],
        health: [
            { name: "WHO Germany", url: "https://www.who.int/rss-feeds/germany-news-english.xml", section: "health", category: "Local" }
        ],
        football: [
            { name: "Kicker", url: "https://www.kicker.de/rss/", section: "football", category: "Local" }
        ],
        discover: []
    });

    // --- ITALY ---
    localMap.set("IT", {
        top: [
            { name: "Corriere della Sera", url: "https://www.corriere.it/rss/", section: "top", category: "Local" },
            { name: "La Repubblica", url: "https://www.repubblica.it/rss/", section: "top", category: "Local" }
        ],
        politics: [
            { name: "Corriere Politica", url: "https://www.corriere.it/politica/rss/", section: "politics", category: "Local" }
        ],
        tech: [
            { name: "TechCrunch", url: "https://techcrunch.com/feed/", section: "tech", category: "Local" }
        ],
        health: [
            { name: "WHO Italy", url: "https://www.who.int/rss-feeds/italy-news-english.xml", section: "health", category: "Local" }
        ],
        football: [
            { name: "Gazzetta dello Sport", url: "https://www.gazzetta.it/feed/", section: "football", category: "Local" }
        ],
        discover: []
    });

    // --- SPAIN ---
    localMap.set("ES", {
        top: [
            { name: "El País", url: "https://feeds.elpais.com/rss/", section: "top", category: "Local" },
            { name: "El Mundo", url: "https://www.elmundo.es/rss/", section: "top", category: "Local" }
        ],
        politics: [
            { name: "El País Política", url: "https://feeds.elpais.com/rss/politica/", section: "politics", category: "Local" }
        ],
        tech: [
            { name: "TechCrunch", url: "https://techcrunch.com/feed/", section: "tech", category: "Local" }
        ],
        health: [
            { name: "WHO Spain", url: "https://www.who.int/rss-feeds/spain-news-english.xml", section: "health", category: "Local" }
        ],
        football: [
            { name: "Marca", url: "https://www.marca.com/rss/", section: "football", category: "Local" }
        ],
        discover: []
    });

    // =============================================================
    // 4. STATE
    // =============================================================

    let allArticles = [];
    let topNewsArticles = [];
    let savedArticles = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY) || "[]");
    let userCountry = localStorage.getItem(CONFIG.COUNTRY_KEY) || 'ZM';
    let userCountryName = 'World';
    let currentCategory = "all";
    let currentView = "home";
    let isOffline = false;
    let isCategoryPage = false;
    let isInitialLoad = true;

    // Feed pagination state
    let feedPool = [];
    let feedIndex = 0;
    let usedFeedUrls = new Set();
    let allFetched = false;
    let isLoadingMore = false;
    let displayLimit = 20;

    // Top news
    let topNewsFeedPool = [];
    let topNewsFeedIndex = 0;
    let usedTopNewsUrls = new Set();
    let topNewsDisplayed = CONFIG.TOP_NEWS_DISPLAY;
    let hasMoreTopNews = true;
    let isLoadingTopNews = false;

    // Local sections
    let localSectionFeeds = { top: [], politics: [], tech: [], health: [], football: [], discover: [] };
    let localSectionArticles = { top: [], politics: [], tech: [], health: [], football: [], discover: [] };
    let localSectionDisplay = { top: 5, politics: 5, tech: 5, health: 5, football: 5, discover: 10 };
    let localSectionExpanded = { top: false, politics: false, tech: false, health: false, football: false, discover: false };
    let localSectionAllFetched = { top: false, politics: false, tech: false, health: false, football: false, discover: false };

    // DOM refs
    let sentinel = null;
    let observer = null;
    let topNewsInlineObserver = null;
    let carouselInterval = null;
    let autoScrollActive = true;

    // Tools
    let currentDirectoryHandle = null;
    let _fileOutput = null;

    // =============================================================
    // 5. HELPERS
    // =============================================================

    function generateViews(title) {
        let hash = 0;
        for (let i = 0; i < title.length; i++) hash = ((hash << 5) - hash) + title.charCodeAt(i);
        return Math.abs(hash) % 300000 + 5000;
    }

    function formatViews(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num;
    }

    function escapeHtml(str) {
        if (!str) return '';
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };
        return str.replace(/[&<>]/g, m => map[m]);
    }

    function showToast(msg) {
        const t = document.createElement('div');
        t.textContent = msg;
        Object.assign(t.style, {
            position: 'fixed',
            bottom: '70px',
            left: '20px',
            background: 'var(--accent-dark)',
            color: 'white',
            padding: '8px 18px',
            borderRadius: '40px',
            zIndex: '9999',
            backdropFilter: 'blur(8px)',
            maxWidth: '90%',
            fontSize: '0.85rem'
        });
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 2500);
    }

    function getCategoryIcon(cat) {
        const icons = {
            'Local': 'fa-location-dot',
            'World': 'fa-globe',
            'Politics': 'fa-landmark',
            'Technology': 'fa-microchip',
            'Sports': 'fa-futbol',
            'Entertainment': 'fa-mask',
            'Business': 'fa-chart-line',
            'Health': 'fa-heartbeat'
        };
        return icons[cat] || 'fa-newspaper';
    }

    function extractImageFromItem(item, feedCfg) {
        const candidates = [];
        if (item.media?.content?.[0]?.url) candidates.push(item.media.content[0].url);
        if (item['media:content']?.url) candidates.push(item['media:content'].url);
        if (item.media?.thumbnail?.[0]?.url) candidates.push(item.media.thumbnail[0].url);
        if (item['media:thumbnail']?.url) candidates.push(item['media:thumbnail'].url);
        if (item.enclosure?.link && (item.enclosure.type?.startsWith('image') || item.enclosure.link.match(/\.(jpg|jpeg|png|gif|webp)/i))) candidates.push(item.enclosure.link);
        if (item.thumbnail?.startsWith('http')) candidates.push(item.thumbnail);
        if (item.description) {
            const imgMatches = item.description.match(/<img[^>]+src=["']([^"']+)["']/gi);
            if (imgMatches) {
                imgMatches.forEach(m => {
                    const src = m.match(/src=["']([^"']+)["']/i);
                    if (src && src[1].startsWith('http')) candidates.push(src[1]);
                });
            }
        }
        if (item['content:encoded']) {
            const imgMatches = item['content:encoded'].match(/<img[^>]+src=["']([^"']+)["']/gi);
            if (imgMatches) {
                imgMatches.forEach(m => {
                    const src = m.match(/src=["']([^"']+)["']/i);
                    if (src && src[1].startsWith('http')) candidates.push(src[1]);
                });
            }
        }
        const valid = [...new Set(candidates.filter(url => url && url.startsWith('http')))];
        if (valid.length) return valid[0];
        const categoryColors = {
            'Politics': '1e3a8a', 'Technology': '0f172a', 'Sports': 'b91c1c',
            'Entertainment': '831843', 'Business': '065f46', 'Health': '0e7c7c',
            'Local': '4c1d95', 'World': '1e40af', 'Top': 'f59e0b'
        };
        const color = categoryColors[feedCfg.category] || '3b82f6';
        return `https://placehold.co/800x450/${color}/white?text=${encodeURIComponent(feedCfg.name)}`;
    }

    function setImageWithRetry(imgElement, src, retries = 3, timeout = 3000) {
        let attempt = 0;
        const tryLoad = () => {
            const timer = setTimeout(() => {
                if (attempt < retries) { attempt++; tryLoad(); } else {
                    imgElement.src = 'https://placehold.co/800x450/6b7280/white?text=Image+Failed';
                }
            }, timeout);
            imgElement.onload = () => clearTimeout(timer);
            imgElement.onerror = () => {
                clearTimeout(timer);
                if (attempt < retries) { attempt++; tryLoad(); } else {
                    imgElement.src = 'https://placehold.co/800x450/6b7280/white?text=Image+Failed';
                }
            };
            imgElement.src = src;
        };
        tryLoad();
    }

    function lazyLoadImages() {
        const images = document.querySelectorAll('.card-img[data-src], .trend-img[data-src]');
        if (!images.length) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src && src.startsWith('http') && !img.dataset.retryApplied) {
                        img.dataset.retryApplied = 'true';
                        setImageWithRetry(img, src, 3, 3000);
                    }
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '200px' });
        images.forEach(img => observer.observe(img));
    }

    // =============================================================
    // 6. FETCH FEED
    // =============================================================

    async function fetchFeed(feedCfg) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), CONFIG.TIMEOUT_MS);
        try {
            const fresh = Date.now();
            const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedCfg.url)}&_fresh=${fresh}`;
            const resp = await fetch(proxyUrl, {
                cache: 'no-store',
                headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' },
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            const data = await resp.json();
            if (data.status !== 'ok') return [];
            return data.items.slice(0, CONFIG.MAX_ARTICLES_PER_FEED).map(item => {
                const imageUrl = extractImageFromItem(item, feedCfg);
                return {
                    title: item.title,
                    link: item.link,
                    pubDate: item.pubDate,
                    description: (item.description || '').replace(/<[^>]*>/g, '').substring(0, 200),
                    source: feedCfg.name,
                    category: feedCfg.category || 'World',
                    section: feedCfg.section || null,
                    imageUrl: imageUrl,
                    views: generateViews(item.title)
                };
            });
        } catch (e) {
            clearTimeout(timeoutId);
            console.warn(`Failed to fetch ${feedCfg.name}`, e);
            return [];
        }
    }

    // =============================================================
    // 7. RENDER ARTICLE CARD
    // =============================================================

    function renderArticleCard(art) {
        const isSaved = savedArticles.some(s => s.link === art.link);
        const formattedDate = new Date(art.pubDate).toLocaleDateString(undefined, {
            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });
        const safeTitle = escapeHtml(art.title);
        const safeSource = escapeHtml(art.source);
        const safeDesc = escapeHtml(art.description);
        return `<div class="news-card">
            <img class="card-img" data-src="${art.imageUrl}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" loading="lazy" alt="${safeTitle}">
            <div class="card-body">
                <div class="news-title"><a href="${art.link}" target="_blank" rel="noopener">${safeTitle}</a></div>
                <div class="news-meta">
                    <span class="source-tag"><i class="fas fa-globe"></i> ${safeSource}</span>
                    <span><i class="far fa-calendar-alt"></i> ${formattedDate}</span>
                    <span><i class="fas fa-eye"></i> ${formatViews(art.views)}</span>
                </div>
                <div class="news-desc">${safeDesc}</div>
                <div class="action-row">
                    <a href="${art.link}" target="_blank" rel="noopener" class="btn-primary"><i class="fas fa-external-link-alt"></i> Read</a>
                    <button class="btn-save save-btn" data-link="${art.link}" data-title="${safeTitle}" data-img="${art.imageUrl}" data-source="${safeSource}" data-desc="${safeDesc}">${isSaved ? '✅ Saved' : '💾 Save'}</button>
                    <button class="btn-share share-btn" data-url="${art.link}" data-title="${safeTitle}"><i class="fas fa-share-alt"></i> Share</button>
                </div>
            </div>
        </div>`;
    }

    // =============================================================
    // 8. AD BANNER
    // =============================================================

    function renderAdBanner() {
        return `<div class="inline-ad">
            <i class="fas fa-ad"></i> Advertisement · Your banner could be here
        </div>`;
    }

    // =============================================================
    // 9. LOADING STATUS – CENTERED with "stay" message
    // =============================================================

    function showLoadingStatus(message, showStay = true) {
        const statusDiv = document.getElementById('statusMsg');
        if (!statusDiv) return;
        const stayMsg = showStay ? '<br><small style="font-size:0.75rem;color:var(--text-muted);display:block;margin-top:0.4rem;">⏳ Please stay on this page — articles are loading…</small>' : '';
        statusDiv.style.display = 'block';
        statusDiv.style.textAlign = 'center';
        statusDiv.style.padding = '2rem 1rem';
        statusDiv.innerHTML = `<div class="loader" style="margin:0 auto 0.8rem auto;"></div>${message}${stayMsg}`;
    }

    function hideLoadingStatus() {
        const statusDiv = document.getElementById('statusMsg');
        if (statusDiv) statusDiv.style.display = 'none';
    }

    // =============================================================
    // 10. SAVE / SHARE EVENTS
    // =============================================================

    function attachSaveEvents() {
        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.removeEventListener('click', saveHandler);
            btn.addEventListener('click', saveHandler);
        });
    }

    function attachShareEvents() {
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.removeEventListener('click', shareHandler);
            btn.addEventListener('click', shareHandler);
        });
    }

    function saveHandler(e) {
        const btn = e.currentTarget;
        const link = btn.dataset.link;
        const idx = savedArticles.findIndex(s => s.link === link);
        if (idx === -1) {
            savedArticles.push({
                title: btn.dataset.title,
                link,
                imageUrl: btn.dataset.img,
                source: btn.dataset.source,
                description: btn.dataset.desc,
                savedAt: Date.now()
            });
            localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(savedArticles));
            btn.innerHTML = '✅ Saved';
            btn.style.background = '#10b981';
            showToast('Saved offline!');
        } else {
            savedArticles.splice(idx, 1);
            localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(savedArticles));
            btn.innerHTML = '💾 Save';
            btn.style.background = '#2563eb';
            showToast('Removed');
        }
        updateSavedCounter();
        if (currentView === 'saved') renderSavedArticles();
    }

    function shareHandler(e) {
        const btn = e.currentTarget;
        const title = btn.dataset.title;
        const url = btn.dataset.url;
        if (navigator.share) {
            try { navigator.share({ title, url }); } catch (_) {}
        } else {
            navigator.clipboard.writeText(url).then(() => showToast('Link copied!')).catch(() => showToast('Share: ' + url));
        }
    }

    function updateSavedCounter() {
        const c = document.getElementById('savedCounter');
        if (c) c.textContent = savedArticles.length;
    }

    // =============================================================
    // 11. RENDER SAVED
    // =============================================================

    function renderSavedArticles() {
        const savedDiv = document.getElementById('savedFeed');
        if (!savedDiv) return;
        if (!savedArticles.length) {
            savedDiv.innerHTML = '<div style="padding:2rem;text-align:center;"><i class="fas fa-archive"></i> No saved articles.</div>';
            return;
        }
        let html = '';
        savedArticles.forEach(art => {
            const safeTitle = escapeHtml(art.title);
            const safeSource = escapeHtml(art.source);
            const safeDesc = escapeHtml(art.description || 'No description');
            html += `<div class="news-card">
                <img class="card-img" data-src="${art.imageUrl || 'https://placehold.co/800x450/3b82f6/white?text=Saved'}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" loading="lazy" alt="${safeTitle}">
                <div class="card-body">
                    <div class="news-title"><a href="${art.link}" target="_blank" rel="noopener">${safeTitle}</a></div>
                    <div class="news-meta"><span class="source-tag"><i class="fas fa-globe"></i> ${safeSource}</span><span>saved offline</span></div>
                    <div class="news-desc">${safeDesc}</div>
                    <div class="action-row">
                        <a href="${art.link}" target="_blank" rel="noopener" class="btn-primary">Read Original</a>
                        <button class="btn-remove unsave-btn" data-link="${art.link}"><i class="fas fa-trash-alt"></i> Remove</button>
                        <button class="btn-share share-saved-btn" data-url="${art.link}" data-title="${safeTitle}"><i class="fas fa-share-alt"></i> Share</button>
                    </div>
                </div>
            </div>`;
        });
        savedDiv.innerHTML = html;
        lazyLoadImages();
        document.querySelectorAll('.unsave-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                savedArticles = savedArticles.filter(s => s.link !== btn.dataset.link);
                localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(savedArticles));
                updateSavedCounter();
                renderSavedArticles();
                showToast('Removed');
            });
        });
        document.querySelectorAll('.share-saved-btn').forEach(btn => {
            btn.addEventListener('click', () => shareHandler(btn));
        });
    }

    // =============================================================
    // 12. LOCATION
    // =============================================================

    async function detectLocation() {
        const badge = document.getElementById('countryBadge');
        if (!badge) return;
        badge.innerHTML = `<i class="fas fa-map-marker-alt"></i> locating...`;
        let detected = false;
        for (let i = 0; i < 2; i++) {
            try {
                const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
                if (res.ok) {
                    const d = await res.json();
                    if (d.country_code) {
                        userCountry = d.country_code;
                        userCountryName = d.country_name || userCountry;
                        detected = true;
                        break;
                    }
                }
            } catch (_) {}
            if (!detected) {
                try {
                    const res = await fetch('https://ipinfo.io/json', { signal: AbortSignal.timeout(3000) });
                    if (res.ok) {
                        const d = await res.json();
                        if (d.country) {
                            userCountry = d.country;
                            userCountryName = d.country;
                            detected = true;
                            break;
                        }
                    }
                } catch (_) {}
            }
            if (!detected) await new Promise(r => setTimeout(r, 1000));
        }
        if (!detected) { userCountry = "ZM";
            userCountryName = "Zambia (fallback)"; }
        localStorage.setItem(CONFIG.COUNTRY_KEY, userCountry);
        badge.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${userCountryName} <i class="fas fa-chevron-down" style="font-size:0.6rem;margin-left:4px;"></i>`;
    }

    document.getElementById('countryBadge')?.addEventListener('click', function(e) {
        e.stopPropagation();
        const newCountry = prompt('Enter your country code (e.g., ZM, US, GB):', userCountry);
        if (newCountry && newCountry.trim().length === 2) {
            userCountry = newCountry.trim().toUpperCase();
            localStorage.setItem(CONFIG.COUNTRY_KEY, userCountry);
            const feeds = localMap.get(userCountry);
            userCountryName = feeds ? 'Country' : userCountry;
            document.getElementById('countryBadge').innerHTML =
                `<i class="fas fa-map-marker-alt"></i> ${userCountryName} <i class="fas fa-chevron-down" style="font-size:0.6rem;margin-left:4px;"></i>`;
            showToast('Country updated. Reloading news...');
            loadAllFeeds();
        } else if (newCountry !== null) {
            showToast('Please enter a valid 2-letter country code.');
        }
    });

    // =============================================================
    // 13. OFFLINE
    // =============================================================

    function showOfflineMessage(show) {
        const feedDiv = document.getElementById('newsFeed');
        if (!feedDiv) return;
        const existing = document.getElementById('offlineMessage');
        if (existing) existing.remove();
        if (show && currentView === 'home') {
            const msg = document.createElement('div');
            msg.id = 'offlineMessage';
            Object.assign(msg.style, {
                padding: '1rem',
                margin: '0.5rem 0',
                background: 'var(--ad-bg)',
                borderRadius: '20px',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.9rem'
            });
            msg.innerHTML = '<i class="fas fa-wifi"></i> You are offline – showing cached content. <button onclick="location.reload()" style="background:var(--accent-blue);color:white;border:none;border-radius:20px;padding:0.2rem 1rem;cursor:pointer;margin-left:0.5rem;">Retry</button>';
            feedDiv.prepend(msg);
        }
    }

    function checkOnlineStatus() {
        isOffline = !navigator.onLine;
        showOfflineMessage(isOffline);
    }

    window.addEventListener('online', () => {
        isOffline = false;
        showOfflineMessage(false);
        loadAllFeeds();
    });
    window.addEventListener('offline', () => {
        isOffline = true;
        showOfflineMessage(true);
    });

    // =============================================================
    // 14. INFINITE SCROLL
    // =============================================================

    function ensureSentinel() {
        const existing = document.getElementById('loadSentinel');
        if (existing) existing.remove();
        const el = document.createElement('div');
        el.id = 'loadSentinel';
        el.style.height = '10px';
        el.style.margin = '20px 0';
        const feedDiv = document.getElementById('newsFeed');
        if (feedDiv && feedDiv.parentNode) {
            feedDiv.parentNode.insertBefore(el, feedDiv.nextSibling);
        }
        sentinel = el;
    }

    function initInfiniteScroll() {
        if (observer) observer.disconnect();
        ensureSentinel();
        observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoadingMore && !allFetched && navigator.onLine) {
                loadMoreArticles();
            }
        }, { threshold: 0.1, rootMargin: "0px 0px 200px 0px" });
        if (sentinel) observer.observe(sentinel);
    }

    function showEndSpinner(show) {
        let spinner = document.getElementById('endSpinner');
        if (show && !spinner) {
            spinner = document.createElement('div');
            spinner.id = "endSpinner";
            spinner.className = "end-loader";
            spinner.style.textAlign = 'center';
            spinner.style.padding = '1rem';
            spinner.innerHTML = '<div class="loader" style="margin:0 auto 0.5rem auto;"></div> Loading more articles…';
            if (sentinel && sentinel.parentNode) sentinel.parentNode.insertBefore(spinner, sentinel);
        } else if (!show && spinner) spinner.remove();
    }

    function showRetryButton(message, retryCallback) {
        let retryDiv = document.getElementById('retryContainer');
        if (retryDiv) retryDiv.remove();
        const wrapper = document.createElement('div');
        wrapper.id = 'retryContainer';
        wrapper.className = 'end-loader';
        wrapper.style.textAlign = 'center';
        wrapper.style.padding = '1rem';
        wrapper.innerHTML =
            `<div><i class="fas fa-exclamation-triangle"></i> ${message}</div><button class="retry-button" style="background:var(--accent-dark);color:white;border:none;padding:0.6rem 1.8rem;border-radius:40px;cursor:pointer;font-weight:600;margin-top:0.5rem;">Retry</button>`;
        const btn = wrapper.querySelector('.retry-button');
        btn.onclick = async () => {
            wrapper.innerHTML = '<div class="loader" style="margin:0 auto 0.5rem auto;"></div> Retrying...';
            await retryCallback();
        };
        if (sentinel && sentinel.parentNode) sentinel.parentNode.insertBefore(wrapper, sentinel);
    }

    // =============================================================
    // 15. LOAD MORE
    // =============================================================

    async function loadMoreArticles() {
        if (isLoadingMore || !navigator.onLine) return;

        // Home / All view
        if (!isCategoryPage) {
            if (displayLimit < allArticles.length) {
                displayLimit += 20;
                renderAllCategoryGrouped();
                return;
            }
            if (allFetched) {
                refillMainFeedPool();
                if (feedPool.length === 0 || feedIndex >= feedPool.length) {
                    if (sentinel) sentinel.style.display = 'none';
                    showEndSpinner(false);
                    return;
                }
                allFetched = false;
            }
            isLoadingMore = true;
            showEndSpinner(true);
            try {
                if (feedPool.length === 0 || feedIndex >= feedPool.length) {
                    refillMainFeedPool();
                    if (feedPool.length === 0 || feedIndex >= feedPool.length) {
                        allFetched = true;
                        if (sentinel) sentinel.style.display = 'none';
                        showEndSpinner(false);
                        isLoadingMore = false;
                        return;
                    }
                }
                const batchSize = CONFIG.BATCH_SIZE;
                const nextFeeds = feedPool.slice(feedIndex, feedIndex + batchSize);
                feedIndex += batchSize;
                if (nextFeeds.length === 0) {
                    refillMainFeedPool();
                    if (feedPool.length === 0 || feedIndex >= feedPool.length) {
                        allFetched = true;
                        if (sentinel) sentinel.style.display = 'none';
                        showEndSpinner(false);
                        isLoadingMore = false;
                        return;
                    }
                    isLoadingMore = false;
                    loadMoreArticles();
                    return;
                }
                const results = await Promise.all(nextFeeds.map(f => fetchFeed(f)));
                let newArticles = [];
                results.forEach(r => newArticles.push(...r));
                const existingLinks = new Set(allArticles.map(a => (a.link || '').split('?')[0]));
                const uniqueNew = newArticles.filter(a => !existingLinks.has((a.link || '').split('?')[0]));
                if (uniqueNew.length === 0) {
                    isLoadingMore = false;
                    showEndSpinner(false);
                    if (feedIndex < feedPool.length) {
                        setTimeout(() => loadMoreArticles(), 100);
                    } else {
                        refillMainFeedPool();
                        if (feedIndex < feedPool.length) {
                            setTimeout(() => loadMoreArticles(), 100);
                        } else {
                            allFetched = true;
                            if (sentinel) sentinel.style.display = 'none';
                        }
                    }
                    return;
                }
                uniqueNew.forEach(a => { a.views = generateViews(a.title); });
                allArticles = [...allArticles, ...uniqueNew];
                allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
                displayLimit = Math.min(displayLimit + uniqueNew.length, allArticles.length);
                renderAllCategoryGrouped();
                showToast(`✨ ${uniqueNew.length} new articles loaded`);
                if (feedIndex >= feedPool.length) {
                    allFetched = true;
                    refillMainFeedPool();
                    if (feedPool.length > 0 && feedIndex < feedPool.length) allFetched = false;
                }
                showEndSpinner(false);
            } catch (err) {
                console.error(err);
                showRetryButton("Failed to load more. Retry?", loadMoreArticles);
            }
            isLoadingMore = false;
            showEndSpinner(false);
            return;
        }

        // Category page: Local
        const category = window.location.pathname.split('/').pop().replace('.html', '');
        if (category === 'Local') {
            if (localSectionDisplay.discover < localSectionArticles.discover.length) {
                localSectionDisplay.discover += 10;
                renderLocalSections();
                return;
            }
            if (localSectionAllFetched.discover) {
                if (sentinel) sentinel.style.display = 'none';
                showEndSpinner(false);
                return;
            }
            isLoadingMore = true;
            showEndSpinner(true);
            try {
                const feeds = localSectionFeeds.discover;
                const available = feeds.filter(f => !usedFeedUrls.has(f.url));
                if (available.length === 0) {
                    localSectionAllFetched.discover = true;
                    if (sentinel) sentinel.style.display = 'none';
                    showEndSpinner(false);
                    isLoadingMore = false;
                    return;
                }
                const toFetch = available.sort(() => Math.random() - 0.5).slice(0, CONFIG.BATCH_SIZE);
                const results = await Promise.all(toFetch.map(f => fetchFeed(f)));
                let newArticles = [];
                results.forEach(r => newArticles.push(...r));
                toFetch.forEach(f => usedFeedUrls.add(f.url));
                const existingLinks = new Set(localSectionArticles.discover.map(a => (a.link || '').split('?')[0]));
                const uniqueNew = newArticles.filter(a => !existingLinks.has((a.link || '').split('?')[0]));
                if (uniqueNew.length === 0) {
                    isLoadingMore = false;
                    showEndSpinner(false);
                    setTimeout(() => loadMoreArticles(), 200);
                    return;
                }
                uniqueNew.forEach(a => { a.views = generateViews(a.title); });
                localSectionArticles.discover = [...localSectionArticles.discover, ...uniqueNew];
                localSectionArticles.discover.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
                localSectionDisplay.discover += uniqueNew.length;
                renderLocalSections();
                showToast(`✨ ${uniqueNew.length} new local articles`);
                showEndSpinner(false);
            } catch (err) {
                console.error(err);
                showRetryButton("Failed to load more. Retry?", loadMoreArticles);
            }
            isLoadingMore = false;
            showEndSpinner(false);
            return;
        }

        // Other categories
        if (displayLimit < currentFiltered.length) {
            displayLimit += 20;
            renderCategoryFeed(currentFiltered.slice(0, displayLimit));
            return;
        }
        if (allFetched) {
            if (sentinel) sentinel.style.display = 'none';
            showEndSpinner(false);
            return;
        }
        isLoadingMore = true;
        showEndSpinner(true);
        try {
            const newArticles = await fetchMoreForCategory(category);
            if (newArticles.length === 0) {
                allFetched = true;
                if (sentinel) sentinel.style.display = 'none';
                showEndSpinner(false);
                isLoadingMore = false;
                return;
            }
            const existingLinks = new Set(allArticles.map(a => (a.link || '').split('?')[0]));
            const uniqueNew = newArticles.filter(a => !existingLinks.has((a.link || '').split('?')[0]));
            if (uniqueNew.length === 0) {
                isLoadingMore = false;
                showEndSpinner(false);
                setTimeout(() => loadMoreArticles(), 200);
                return;
            }
            uniqueNew.forEach(a => { a.views = generateViews(a.title); });
            allArticles = [...allArticles, ...uniqueNew];
            allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
            currentFiltered = allArticles.filter(a => a.category === category);
            displayLimit += uniqueNew.length;
            renderCategoryFeed(currentFiltered.slice(0, displayLimit));
            showToast(`✨ ${uniqueNew.length} new ${category} articles`);
            showEndSpinner(false);
        } catch (err) {
            console.error(err);
            showRetryButton("Failed to load more. Retry?", loadMoreArticles);
        }
        isLoadingMore = false;
        showEndSpinner(false);
    }

    async function fetchMoreForCategory(category) {
        let feedsToFetch = WORLD_FEEDS.filter(f => f.category === category);
        if (feedsToFetch.length === 0) feedsToFetch = WORLD_FEEDS.slice(0, 15);
        const available = feedsToFetch.filter(f => !usedFeedUrls.has(f.url));
        if (available.length === 0) return [];
        const toFetch = available.sort(() => Math.random() - 0.5).slice(0, CONFIG.BATCH_SIZE);
        const results = await Promise.all(toFetch.map(f => fetchFeed(f)));
        let newArticles = [];
        results.forEach(r => newArticles.push(...r));
        toFetch.forEach(f => usedFeedUrls.add(f.url));
        return newArticles;
    }

    function refillMainFeedPool() {
        const available = WORLD_FEEDS.filter(f => !usedFeedUrls.has(f.url));
        if (available.length === 0) {
            usedFeedUrls.clear();
            return refillMainFeedPool();
        }
        const newFeeds = available.sort(() => Math.random() - 0.5).slice(0, 10);
        newFeeds.forEach(f => usedFeedUrls.add(f.url));
        feedPool = feedPool.concat(newFeeds);
    }

    // =============================================================
    // 16. TOP NEWS
    // =============================================================

    function initTopNewsPool() {
        const shuffledWorld = WORLD_FEEDS.slice().sort(() => Math.random() - 0.5).slice(0, 10);
        const allTopFeeds = [...TOP_NEWS_FEEDS, ...shuffledWorld];
        const uniqueFeeds = [];
        const seenUrls = new Set();
        for (const feed of allTopFeeds) {
            if (!seenUrls.has(feed.url)) {
                seenUrls.add(feed.url);
                uniqueFeeds.push(feed);
            }
        }
        topNewsFeedPool = uniqueFeeds;
        topNewsFeedIndex = 0;
        usedTopNewsUrls.clear();
        topNewsFeedPool.forEach(f => usedTopNewsUrls.add(f.url));
    }

    function refillTopNewsPool() {
        const available = WORLD_FEEDS.filter(f => !usedTopNewsUrls.has(f.url));
        if (available.length === 0) {
            usedTopNewsUrls.clear();
            initTopNewsPool();
            return;
        }
        const newFeeds = available.sort(() => Math.random() - 0.5).slice(0, 10);
        newFeeds.forEach(f => usedTopNewsUrls.add(f.url));
        topNewsFeedPool = topNewsFeedPool.concat(newFeeds);
    }

    async function loadMoreTopNews() {
        if (isLoadingTopNews) return;
        isLoadingTopNews = true;
        try {
            if (topNewsFeedIndex >= topNewsFeedPool.length) {
                refillTopNewsPool();
                if (topNewsFeedIndex >= topNewsFeedPool.length) {
                    hasMoreTopNews = false;
                    isLoadingTopNews = false;
                    return;
                }
            }
            const batchSize = CONFIG.TOP_NEWS_BATCH;
            const feeds = topNewsFeedPool.slice(topNewsFeedIndex, topNewsFeedIndex + batchSize);
            topNewsFeedIndex += batchSize;
            const results = await Promise.all(feeds.map(f => fetchFeed({ ...f, category: "Top" })));
            let fresh = [];
            results.forEach(r => fresh.push(...r));
            const existingLinks = new Set(topNewsArticles.map(a => (a.link || '').split('?')[0]));
            const newUnique = fresh.filter(a => !existingLinks.has((a.link || '').split('?')[0]));
            if (newUnique.length) {
                topNewsArticles.push(...newUnique);
                topNewsDisplayed += 5;
                if (topNewsDisplayed > topNewsArticles.length) topNewsDisplayed = topNewsArticles.length;
                if (!isCategoryPage) renderTopNewsInline();
                showToast(`✨ ${newUnique.length} new top stories`);
                hasMoreTopNews = true;
            } else {
                if (topNewsFeedIndex < topNewsFeedPool.length) {
                    setTimeout(() => loadMoreTopNews(), 100);
                } else {
                    refillTopNewsPool();
                    if (topNewsFeedIndex < topNewsFeedPool.length) {
                        setTimeout(() => loadMoreTopNews(), 100);
                    } else {
                        hasMoreTopNews = false;
                    }
                }
            }
        } catch (e) {
            console.error("Top news load error:", e);
        }
        isLoadingTopNews = false;
    }

    function renderTopNewsInline() {
        const container = document.getElementById('topNewsContainer');
        if (!container) return;
        container.innerHTML = '';
        if (!topNewsArticles.length) {
            container.innerHTML = '<div style="padding:1rem;text-align:center;color:var(--text-muted);">Loading top news...</div>';
            return;
        }
        const shuffled = [...topNewsArticles].sort(() => Math.random() - 0.5);
        const toShow = shuffled.slice(0, topNewsDisplayed);
        let html = '';
        toShow.forEach((art, index) => {
            html += renderArticleCard(art);
            if ((index + 1) % 5 === 0 && (index + 1) < toShow.length) {
                html += renderAdBanner();
            }
        });
        container.innerHTML = html;
        attachSaveEvents();
        attachShareEvents();
        lazyLoadImages();
        if (hasMoreTopNews && topNewsDisplayed < topNewsArticles.length) {
            const sentinelEl = document.createElement('div');
            sentinelEl.id = 'topNewsInlineSentinel';
            sentinelEl.style.height = '10px';
            sentinelEl.style.margin = '20px 0';
            container.appendChild(sentinelEl);
            setupTopNewsInlineInfinite();
        } else if (!hasMoreTopNews && topNewsDisplayed >= topNewsArticles.length && topNewsArticles.length > 0) {
            const msg = document.createElement('div');
            msg.style.textAlign = 'center';
            msg.style.padding = '1rem';
            msg.style.color = 'var(--text-muted)';
            msg.textContent = '— No more top news —';
            container.appendChild(msg);
        }
    }

    function setupTopNewsInlineInfinite() {
        if (topNewsInlineObserver) topNewsInlineObserver.disconnect();
        const sentinelEl = document.getElementById('topNewsInlineSentinel');
        if (!sentinelEl) return;
        topNewsInlineObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoadingTopNews && !isCategoryPage && navigator.onLine) {
                loadMoreTopNewsInline();
            }
        }, { threshold: 0.1, rootMargin: "0px 0px 200px 0px" });
        topNewsInlineObserver.observe(sentinelEl);
    }

    async function loadMoreTopNewsInline() {
        await loadMoreTopNews();
        renderTopNewsInline();
    }

    // =============================================================
    // 17. TRENDING CAROUSEL
    // =============================================================

    function renderTrendingCarousel() {
        const carousel = document.getElementById('trendingCarousel');
        if (!carousel) return;
        const categories = ['Local', 'World', 'Politics', 'Technology', 'Sports', 'Entertainment', 'Business', 'Health'];
        const selected = [];
        for (const cat of categories) {
            const catArticles = allArticles.filter(a => a.category === cat).slice(0, 2);
            selected.push(...catArticles);
        }
        const trendingItems = selected.slice(0, 16);
        if (!trendingItems.length) {
            carousel.innerHTML = '<div style="text-align:center;padding:1rem;">No trending</div>';
            return;
        }
        carousel.innerHTML = trendingItems.map(art => {
            const safeTitle = escapeHtml(art.title);
            const safeSource = escapeHtml(art.source);
            const safeDesc = escapeHtml(art.description);
            const imgSrc = art.imageUrl;
            return `<div class="trend-card-full">
                <img class="trend-img" data-src="${imgSrc}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" loading="lazy" alt="${safeTitle}">
                <div class="trend-info">
                    <h3><a href="${art.link}" target="_blank" rel="noopener">${safeTitle}</a></h3>
                    <div class="trend-meta"><span><i class="fas fa-globe"></i> ${safeSource}</span><span><i class="fas fa-eye"></i> ${formatViews(art.views)}</span></div>
                    <div class="action-row" style="margin-top:0.5rem;">
                        <button class="btn-save save-trend" data-link="${art.link}" data-title="${safeTitle}" data-img="${imgSrc}" data-source="${safeSource}" data-desc="${safeDesc}">💾 Save</button>
                        <button class="btn-share share-trend" data-url="${art.link}" data-title="${safeTitle}"><i class="fas fa-share-alt"></i> Share</button>
                    </div>
                </div>
            </div>`;
        }).join('');
        document.querySelectorAll('.save-trend').forEach(btn => {
            btn.addEventListener('click', () => {
                const link = btn.dataset.link;
                if (!savedArticles.some(s => s.link === link)) {
                    savedArticles.push({
                        title: btn.dataset.title,
                        link,
                        imageUrl: btn.dataset.img,
                        source: btn.dataset.source,
                        description: btn.dataset.desc,
                        savedAt: Date.now()
                    });
                    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(savedArticles));
                    btn.innerHTML = '✅ Saved';
                    updateSavedCounter();
                    if (currentView === 'saved') renderSavedArticles();
                    showToast('Saved offline');
                } else { showToast('Already saved'); }
            });
        });
        document.querySelectorAll('.share-trend').forEach(btn => {
            btn.addEventListener('click', () => shareHandler(btn));
        });
        lazyLoadImages();
        startCarouselScroll();
    }

    function startCarouselScroll() {
        if (carouselInterval) clearInterval(carouselInterval);
        const container = document.getElementById('trendingCarousel');
        if (!container) return;
        autoScrollActive = true;
        container.addEventListener('mouseenter', () => { autoScrollActive = false; });
        container.addEventListener('mouseleave', () => { autoScrollActive = true; });
        carouselInterval = setInterval(() => {
            if (!autoScrollActive) return;
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (maxScroll <= 0) return;
            let newLeft = container.scrollLeft + (container.clientWidth * 0.8);
            if (newLeft >= maxScroll) newLeft = 0;
            container.scrollTo({ left: newLeft, behavior: 'smooth' });
        }, 6000);
    }

    // =============================================================
    // 18. LOCAL SECTIONS
    // =============================================================

    async function populateLocalSections() {
        const countryData = localMap.get(userCountry) || {};
        const sections = ['top', 'politics', 'tech', 'health', 'football', 'discover'];
        for (const section of sections) {
            let feeds = countryData[section] || [];
            if (!feeds.length) {
                const query = `${userCountryName} ${section}`.trim();
                const url = googleNewsRss(query, userCountry);
                feeds = [{
                    name: `Google News (${section})`,
                    url: url,
                    section: section,
                    category: 'Local'
                }];
            }
            localSectionFeeds[section] = feeds;
            const articles = [];
            const batch = feeds.slice(0, 10);
            const results = await Promise.all(batch.map(f => fetchFeed(f)));
            results.forEach(r => articles.push(...r));
            const uniqueMap = new Map();
            articles.forEach(a => {
                const key = (a.link || '').split('?')[0];
                if (!uniqueMap.has(key)) uniqueMap.set(key, a);
            });
            const uniqueArticles = Array.from(uniqueMap.values());
            uniqueArticles.forEach(a => a.views = generateViews(a.title));
            uniqueArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
            localSectionArticles[section] = uniqueArticles;
            localSectionDisplay[section] = (section === 'discover') ? 10 : 5;
            localSectionExpanded[section] = false;
            localSectionAllFetched[section] = false;
        }
    }

    function renderLocalSections() {
        const feedDiv = document.getElementById('newsFeed');
        if (!feedDiv) return;
        let html = '';
        const sections = ['top', 'politics', 'tech', 'health', 'football', 'discover'];
        const sectionTitles = {
            top: '🔥 Top Stories',
            politics: '🏛️ Politics',
            tech: '💻 Technology',
            health: '🏥 Health',
            football: '⚽ Football',
            discover: '🔍 Discover More Local News'
        };
        for (const section of sections) {
            const articles = localSectionArticles[section];
            const limit = localSectionDisplay[section];
            const toShow = articles.slice(0, limit);
            if (toShow.length) {
                html += `<div class="category-section" data-section="${section}">
                            <div class="category-section-title">${sectionTitles[section]}</div>`;
                toShow.forEach(art => { html += renderArticleCard(art); });
                const total = articles.length;
                const expanded = localSectionExpanded[section];
                if (total > 5 || !localSectionAllFetched[section] || expanded) {
                    const label = expanded ? 'Show Less' : 'Show More';
                    const loadText = (!localSectionAllFetched[section] && expanded) ? ' (load more...)' : '';
                    html += `<button class="show-more-section-btn" data-section="${section}" data-expanded="${expanded}">
                                ${label} ${loadText}
                            </button>`;
                }
                if (section === 'discover') {
                    html += `<div id="loadSentinel" style="height:10px;margin:20px 0;"></div>`;
                }
                html += `</div>`;
            }
        }
        feedDiv.innerHTML = html;
        attachSaveEvents();
        attachShareEvents();
        lazyLoadImages();
        document.querySelectorAll('.show-more-section-btn').forEach(btn => {
            btn.removeEventListener('click', sectionShowMoreHandler);
            btn.addEventListener('click', sectionShowMoreHandler);
        });
        ensureSentinel();
        initInfiniteScroll();
    }

    async function sectionShowMoreHandler(e) {
        const btn = e.currentTarget;
        const section = btn.dataset.section;
        const expanded = localSectionExpanded[section];
        if (expanded) {
            localSectionDisplay[section] = 5;
            localSectionExpanded[section] = false;
            renderLocalSections();
            return;
        } else {
            const current = localSectionArticles[section].length;
            if (current <= 5) {
                const feeds = localSectionFeeds[section];
                const usedUrls = new Set(localSectionArticles[section].map(a => (a.link || '').split('?')[0]));
                const available = feeds.filter(f => !usedUrls.has(f.url));
                if (available.length === 0) {
                    localSectionAllFetched[section] = true;
                    showToast('No more articles for this section.');
                    localSectionDisplay[section] = current;
                    localSectionExpanded[section] = true;
                    renderLocalSections();
                    return;
                }
                const toFetch = available.sort(() => Math.random() - 0.5).slice(0, CONFIG.BATCH_SIZE);
                const results = await Promise.all(toFetch.map(f => fetchFeed(f)));
                let newArticles = [];
                results.forEach(r => newArticles.push(...r));
                const unique = newArticles.filter(a => !usedUrls.has((a.link || '').split('?')[0]));
                if (unique.length) {
                    unique.forEach(a => a.views = generateViews(a.title));
                    localSectionArticles[section] = [...localSectionArticles[section], ...unique];
                    localSectionArticles[section].sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
                }
            }
            const newLimit = Math.min(localSectionArticles[section].length, localSectionDisplay[section] + 5);
            localSectionDisplay[section] = newLimit;
            localSectionExpanded[section] = true;
            renderLocalSections();
        }
    }

    // =============================================================
    // 19. RENDER MAIN FEED (ALL)
    // =============================================================

    function renderAllCategoryGrouped() {
        const feedDiv = document.getElementById('newsFeed');
        if (!feedDiv) return;

        if (!allArticles.length && !localSectionArticles.top.length) {
            showLoadingStatus('Loading articles…', true);
            return;
        }
        hideLoadingStatus();

        const categoriesOrder = ['Local', 'World', 'Politics', 'Technology', 'Sports', 'Entertainment', 'Business', 'Health'];
        let html = '';
        const LIMIT = CONFIG.CATEGORY_LIMIT;

        for (const cat of categoriesOrder) {
            if (cat === 'Local') {
                html += `<div class="category-section" data-cat="Local">
                            <div class="category-section-title"><i class="fas fa-location-dot"></i> Local</div>`;
                const articles = localSectionArticles.top || [];
                const toShow = articles.slice(0, LIMIT);
                if (toShow.length) {
                    toShow.forEach(art => { html += renderArticleCard(art); });
                } else {
                    html += `<div style="padding:0.5rem 0;color:var(--text-muted);font-style:italic;">
                                <span class="loader" style="width:16px;height:16px;display:inline-block;margin-right:0.5rem;"></span> Loading local top stories…
                            </div>`;
                }
                html += `<a href="Local.html" class="show-more-btn" style="text-decoration:none;display:block;text-align:center;background:var(--accent-blue);color:white;padding:0.6rem;border-radius:40px;margin:0.5rem 0;">
                            <i class="fas fa-chevron-right"></i> Show More Local News
                        </a>`;
                html += renderAdBanner();
                html += `</div>`;
            } else {
                const catArticles = allArticles.filter(a => a.category === cat).slice(0, LIMIT);
                if (catArticles.length) {
                    const icon = getCategoryIcon(cat);
                    html += `<div class="category-section" data-cat="${cat}">
                                <div class="category-section-title"><i class="fas ${icon}"></i> ${cat}</div>`;
                    catArticles.forEach(art => { html += renderArticleCard(art); });
                    html += `<a href="${cat}.html" class="show-more-btn" style="text-decoration:none;display:block;text-align:center;background:var(--accent-blue);color:white;padding:0.6rem;border-radius:40px;margin:0.5rem 0;">
                                <i class="fas fa-chevron-right"></i> Show More ${cat} News
                            </a>`;
                    html += renderAdBanner();
                    html += `</div>`;
                }
            }
        }

        // Top News mixed
        html += `<div class="top-news-inline" style="margin:1.5rem 0 2rem 0;">
                    <div class="category-section-title" style="border-left-color:#f59e0b;color:#f59e0b;">
                        <i class="fas fa-chart-line"></i> 🔥 Top News (mixed)
                    </div>
                    <div id="topNewsContainer" style="display:block;padding:0;"></div>
                </div>`;

        feedDiv.innerHTML = html;
        attachSaveEvents();
        attachShareEvents();
        lazyLoadImages();
        renderTopNewsInline();
        ensureSentinel();
        initInfiniteScroll();
        if (isOffline) showOfflineMessage(true);
    }

    // =============================================================
    // 20. RENDER CATEGORY PAGE
    // =============================================================

    function renderCategoryPage(category) {
        const feedDiv = document.getElementById('newsFeed');
        if (!feedDiv) return;

        if (category === 'Local') {
            renderLocalSections();
            return;
        }

        currentFiltered = allArticles.filter(a => a.category === category);
        if (currentFiltered.length === 0) {
            showLoadingStatus(`Loading ${category} articles…`, true);
            return;
        }
        hideLoadingStatus();
        displayLimit = Math.min(20, currentFiltered.length);
        renderCategoryFeed(currentFiltered.slice(0, displayLimit));
    }

    function renderCategoryFeed(articles) {
        const feedDiv = document.getElementById('newsFeed');
        if (!feedDiv) return;
        if (!articles || !articles.length) {
            feedDiv.innerHTML = '<div style="padding:2rem; text-align:center;">📭 No articles in this category</div>';
            return;
        }
        let html = '';
        articles.forEach((art, index) => {
            html += renderArticleCard(art);
            if ((index + 1) % 5 === 0 && (index + 1) < articles.length) {
                html += renderAdBanner();
            }
        });
        feedDiv.innerHTML = html;
        attachSaveEvents();
        attachShareEvents();
        lazyLoadImages();
        ensureSentinel();
        initInfiniteScroll();
    }

    // =============================================================
    // 21. ENSURE CATEGORY COUNTS
    // =============================================================

    async function ensureCategoryCounts() {
        const categories = ['Local', 'World', 'Politics', 'Technology', 'Sports', 'Entertainment', 'Business', 'Health'];
        let needsMore = true;
        let iterations = 0;
        while (needsMore && iterations < CONFIG.MAX_ITERATIONS) {
            needsMore = false;
            iterations++;
            for (const cat of categories) {
                const target = (cat === 'Local') ? 10 : 5;
                const count = allArticles.filter(a => a.category === cat).length;
                if (count < target) {
                    needsMore = true;
                    let feedsToFetch = [];
                    if (cat === 'Local') {
                        const countryData = localMap.get(userCountry) || {};
                        for (const sec of ['top', 'politics', 'tech', 'health', 'football', 'discover']) {
                            feedsToFetch = feedsToFetch.concat(countryData[sec] || []);
                        }
                    } else {
                        feedsToFetch = WORLD_FEEDS.filter(f => f.category === cat);
                    }
                    if (feedsToFetch.length === 0) {
                        feedsToFetch = WORLD_FEEDS.slice(0, 5);
                    }
                    feedsToFetch = feedsToFetch.sort(() => Math.random() - 0.5).slice(0, 10);
                    const results = await Promise.all(feedsToFetch.map(f => fetchFeed(f)));
                    let newArticles = [];
                    results.forEach(r => newArticles.push(...r));
                    const existingLinks = new Set(allArticles.map(a => (a.link || '').split('?')[0]));
                    const uniqueNew = newArticles.filter(a => !existingLinks.has((a.link || '').split('?')[0]));
                    if (uniqueNew.length) {
                        uniqueNew.forEach(a => { a.views = generateViews(a.title); });
                        allArticles = [...allArticles, ...uniqueNew];
                        allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
                    }
                }
            }
        }
    }

    // =============================================================
    // 22. SEARCH
    // =============================================================

    function storeAllArticlesForSearch() {
        if (allArticles.length) {
            const searchable = allArticles.map(art => ({
                title: art.title,
                link: art.link,
                description: art.description,
                source: art.source
            }));
            localStorage.setItem(CONFIG.SEARCH_KEY, JSON.stringify(searchable));
        }
    }

    function redirectToSearchPage(query) {
        if (!query.trim()) return;
        storeAllArticlesForSearch();
        window.location.href = `/amimodiscoverynews/seachresult.html?q=${encodeURIComponent(query)}`;
    }

    // =============================================================
    // 23. VIEWS (Home, Saved, Tools, Live)
    // =============================================================

    function showHomeView() {
        currentView = 'home';
        const appView = document.getElementById('appView');
        const savedView = document.getElementById('savedView');
        const toolsView = document.getElementById('toolsView');
        const liveView = document.getElementById('liveView');
        if (appView) appView.style.display = 'block';
        if (savedView) savedView.style.display = 'none';
        if (toolsView) toolsView.style.display = 'none';
        if (liveView) liveView.style.display = 'none';

        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        const homeNav = document.querySelector('.nav-item[data-nav="home"]');
        if (homeNav) homeNav.classList.add('active');

        if (carouselInterval) clearInterval(carouselInterval);
        startCarouselScroll();

        if (!isCategoryPage) {
            renderAllCategoryGrouped();
            ensureSentinel();
            initInfiniteScroll();
        } else {
            const category = window.location.pathname.split('/').pop().replace('.html', '');
            renderCategoryPage(category);
            ensureSentinel();
            initInfiniteScroll();
        }
        if (isOffline) showOfflineMessage(true);
    }

    function showSavedView() {
        currentView = 'saved';
        const appView = document.getElementById('appView');
        const savedView = document.getElementById('savedView');
        const toolsView = document.getElementById('toolsView');
        const liveView = document.getElementById('liveView');
        if (appView) appView.style.display = 'none';
        if (savedView) savedView.style.display = 'block';
        if (toolsView) toolsView.style.display = 'none';
        if (liveView) liveView.style.display = 'none';

        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        const savedNav = document.querySelector('.nav-item[data-nav="saved"]');
        if (savedNav) savedNav.classList.add('active');

        if (carouselInterval) clearInterval(carouselInterval);
        carouselInterval = null;
        renderSavedArticles();
        if (topNewsInlineObserver) topNewsInlineObserver.disconnect();
        if (observer) observer.disconnect();
        showOfflineMessage(false);
    }

    function showToolsView() {
        currentView = 'tools';
        const appView = document.getElementById('appView');
        const savedView = document.getElementById('savedView');
        const toolsView = document.getElementById('toolsView');
        const liveView = document.getElementById('liveView');
        if (appView) appView.style.display = 'none';
        if (savedView) savedView.style.display = 'none';
        if (toolsView) toolsView.style.display = 'block';
        if (liveView) liveView.style.display = 'none';

        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        const toolsNav = document.querySelector('.nav-item[data-nav="tools"]');
        if (toolsNav) toolsNav.classList.add('active');

        if (carouselInterval) clearInterval(carouselInterval);
        carouselInterval = null;
        if (topNewsInlineObserver) topNewsInlineObserver.disconnect();
        if (observer) observer.disconnect();

        const output = document.getElementById('toolOutput');
        output.innerHTML = `
            <div style="margin-bottom:1.5rem;">
                <div id="storageInfo" style="background:var(--card-bg); padding:1rem; border-radius:20px; box-shadow:var(--shadow-sm);"></div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:0.8rem;margin-bottom:1.5rem;">
                <button class="tool-btn" onclick="window.browseFiles()"><i class="fas fa-folder-open"></i> Browse Files</button>
                <button class="tool-btn" onclick="window.scanJunkFiles()"><i class="fas fa-trash-alt"></i> Scan Junk</button>
                <button class="tool-btn" onclick="window.scanBigFiles()"><i class="fas fa-file-archive"></i> Find Big Files</button>
                <button class="tool-btn" onclick="window.clearBrowserCache()"><i class="fas fa-broom"></i> Clear Cache</button>
                <button class="tool-btn" onclick="window.clearSavedArticles()"><i class="fas fa-bookmark"></i> Clear Saved</button>
            </div>
            <div id="fileManagerOutput" style="background:var(--card-bg); border-radius:28px; padding:1rem; max-height:400px; overflow-y:auto;">
                <p>Select a folder using "Browse Files" to manage your files.</p>
            </div>
        `;
        _fileOutput = document.getElementById('fileManagerOutput');
        updateStorageInfo('storageInfo');
        if (currentDirectoryHandle) {
            browseDirectory(currentDirectoryHandle);
        }
    }

    function showLiveView() {
        currentView = 'live';
        const appView = document.getElementById('appView');
        const savedView = document.getElementById('savedView');
        const toolsView = document.getElementById('toolsView');
        const liveView = document.getElementById('liveView');
        if (appView) appView.style.display = 'none';
        if (savedView) savedView.style.display = 'none';
        if (toolsView) toolsView.style.display = 'none';
        if (liveView) liveView.style.display = 'block';

        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        const liveNav = document.querySelector('.nav-item[data-nav="live"]');
        if (liveNav) liveNav.classList.add('active');

        if (carouselInterval) clearInterval(carouselInterval);
        carouselInterval = null;
        if (topNewsInlineObserver) topNewsInlineObserver.disconnect();
        if (observer) observer.disconnect();
        const iframe = document.getElementById('liveIframe');
        if (iframe) {
            iframe.src = 'https://www.youtube.com/embed?listType=search&list=live+news&autoplay=0&rel=0';
        }
    }

    // =============================================================
    // 24. TOOLS
    // =============================================================

    async function updateStorageInfo(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        try {
            if ('storage' in navigator && 'estimate' in navigator.storage) {
                const estimate = await navigator.storage.estimate();
                const used = estimate.usage || 0;
                const quota = estimate.quota || 0;
                const free = quota - used;
                const usedMB = (used / (1024 * 1024)).toFixed(2);
                const quotaMB = (quota / (1024 * 1024)).toFixed(2);
                const freeMB = (free / (1024 * 1024)).toFixed(2);
                const percent = quota ? ((used / quota) * 100).toFixed(1) : 0;
                container.innerHTML = `
                    <div style="margin-bottom: 0.5rem;">
                        <span style="font-weight:600;">Storage</span>
                        <span style="float:right;">${usedMB} MB / ${quotaMB} MB</span>
                    </div>
                    <div style="background: #e2e8f0; border-radius: 20px; overflow: hidden; height: 8px; margin-bottom: 0.3rem;">
                        <div style="background: var(--accent-blue); width: ${percent}%; height: 100%; transition: width 0.3s;"></div>
                    </div>
                    <div style="font-size:0.8rem; color:var(--text-muted);">Free: ${freeMB} MB · ${percent}% used</div>
                    <div style="font-size:0.7rem; color:var(--text-muted); margin-top:0.2rem;">
                        <i class="fas fa-database"></i> Total: ${quotaMB} MB
                    </div>
                `;
            } else {
                container.textContent = 'Storage API not supported.';
            }
        } catch (_) {
            container.textContent = 'Error retrieving storage info.';
        }
    }

    window.clearBrowserCache = async function() {
        if (confirm('Clear all browser caches? This may affect offline performance.')) {
            try {
                const keys = await caches.keys();
                await Promise.all(keys.map(key => caches.delete(key)));
                showToast('Browser cache cleared.');
                updateStorageInfo('storageInfo');
            } catch (_) {
                showToast('Error clearing cache.');
            }
        }
    };

    window.clearSavedArticles = function() {
        if (confirm('Delete all saved articles from local storage?')) {
            localStorage.removeItem(CONFIG.STORAGE_KEY);
            savedArticles = [];
            updateSavedCounter();
            if (currentView === 'saved') renderSavedArticles();
            showToast('Saved articles cleared.');
        }
    };

    async function requestDirectoryPermission() {
        try {
            if ('showDirectoryPicker' in window) {
                const dirHandle = await window.showDirectoryPicker();
                currentDirectoryHandle = dirHandle;
                return dirHandle;
            } else {
                showToast('File System Access API not supported in this browser.');
                return null;
            }
        } catch (_) {
            return null;
        }
    }

    async function browseDirectory(dirHandle, path = '') {
        const output = _fileOutput || document.getElementById('fileManagerOutput');
        if (!output) return;
        output.innerHTML = '<div class="loader" style="margin:0 auto 0.5rem auto;"></div> Loading directory...';
        let fileList = [];
        try {
            for await (const [name, handle] of dirHandle.entries()) {
                const entry = { name, handle, path: path + '/' + name };
                if (handle.kind === 'file') {
                    const file = await handle.getFile();
                    entry.size = file.size;
                    entry.lastModified = file.lastModified;
                    fileList.push(entry);
                } else {
                    entry.isDirectory = true;
                    fileList.push(entry);
                }
            }
            fileList.sort((a, b) => {
                if (a.isDirectory && !b.isDirectory) return -1;
                if (!a.isDirectory && b.isDirectory) return 1;
                return a.name.localeCompare(b.name);
            });
            let html = `<p><strong>Current folder:</strong> ${path || '/'}</p>`;
            html += `<ul style="list-style:none;padding:0;">`;
            for (const entry of fileList) {
                const icon = entry.isDirectory ? '<i class="fas fa-folder"></i>' : '<i class="fas fa-file"></i>';
                const size = entry.size ? ` (${(entry.size / 1024).toFixed(1)} KB)` : '';
                const deleteBtn = !entry.isDirectory ? `<button class="delete-file-btn" data-handle="${entry.handle}" data-name="${entry.name}" style="background:red;color:white;border:none;border-radius:20px;padding:0.2rem 0.8rem;font-size:0.7rem;cursor:pointer;">Delete</button>` : '';
                html += `<li style="padding:0.3rem 0;border-bottom:1px solid var(--ad-bg);display:flex;justify-content:space-between;align-items:center;">
                    <span>${icon} ${escapeHtml(entry.name)}${size}</span>
                    ${deleteBtn}
                </li>`;
            }
            html += `</ul>`;
            if (path !== '') {
                html += `<button class="tool-btn" style="margin-top:1rem;" onclick="window.browseParentDir()"><i class="fas fa-arrow-up"></i> Parent Directory</button>`;
            }
            output.innerHTML = html;
            updateStorageInfo('storageInfo');
            output.querySelectorAll('.delete-file-btn').forEach(btn => {
                btn.addEventListener('click', async () => {
                    const handle = btn.dataset.handle;
                    const name = btn.dataset.name;
                    if (confirm(`Delete "${name}"?`)) {
                        try {
                            await handle.remove();
                            showToast(`Deleted "${name}"`);
                            browseDirectory(currentDirectoryHandle, path);
                        } catch (_) {
                            showToast('Error deleting file.');
                        }
                    }
                });
            });
        } catch (_) {
            output.innerHTML = `<p>Error reading directory.</p>`;
        }
    }

    window.browseFiles = async function() {
        const dirHandle = await requestDirectoryPermission();
        if (dirHandle) {
            browseDirectory(dirHandle);
        } else {
            const input = document.createElement('input');
            input.type = 'file';
            input.webkitdirectory = true;
            input.multiple = true;
            input.onchange = (e) => {
                const files = e.target.files;
                const output = _fileOutput || document.getElementById('fileManagerOutput');
                if (!output) return;
                if (!files.length) {
                    output.innerHTML = '<p>No files selected.</p>';
                    return;
                }
                let html = `<p>Selected ${files.length} files. (Read-only)</p><ul>`;
                for (const f of files) {
                    html += `<li>${escapeHtml(f.name)} (${(f.size / 1024).toFixed(1)} KB)</li>`;
                }
                html += '</ul>';
                output.innerHTML = html;
                updateStorageInfo('storageInfo');
            };
            input.click();
        }
    };

    window.browseParentDir = async function() {
        if (currentDirectoryHandle) {
            const parent = await requestDirectoryPermission();
            if (parent) {
                browseDirectory(parent);
            }
        }
    };

    window.scanJunkFiles = async function() {
        const output = _fileOutput || document.getElementById('fileManagerOutput');
        if (!output) return;
        output.innerHTML = '<div class="loader" style="margin:0 auto 0.5rem auto;"></div> Scanning for junk files...';
        try {
            const dirHandle = await requestDirectoryPermission();
            if (!dirHandle) {
                output.innerHTML = '<p>Permission denied or not supported.</p>';
                return;
            }
            let junk = [];
            for await (const [name, handle] of dirHandle.entries()) {
                if (handle.kind === 'file') {
                    const file = await handle.getFile();
                    const isJunk = file.size > 10 * 1024 * 1024 || /\.(tmp|log|cache|temp)$/i.test(name);
                    if (isJunk) {
                        junk.push({ name, size: file.size, handle });
                    }
                }
            }
            if (!junk.length) {
                output.innerHTML = '<p>✅ No junk files found.</p>';
                updateStorageInfo('storageInfo');
                return;
            }
            let html = `<p>Found ${junk.length} junk files:</p><ul style="list-style:none;padding:0;">`;
            junk.forEach(j => {
                html += `<li style="padding:0.5rem;border-bottom:1px solid var(--ad-bg);display:flex;justify-content:space-between;align-items:center;">
                    <span>${escapeHtml(j.name)} (${(j.size / (1024 * 1024)).toFixed(2)} MB)</span>
                    <button class="delete-file-btn" data-handle="${j.handle}" style="background:red;color:white;border:none;border-radius:20px;padding:0.2rem 0.8rem;cursor:pointer;">Delete</button>
                </li>`;
            });
            html += '</ul>';
            output.innerHTML = html;
            output.querySelectorAll('.delete-file-btn').forEach(btn => {
                btn.addEventListener('click', async () => {
                    const handle = btn.dataset.handle;
                    if (confirm('Delete this junk file?')) {
                        try {
                            await handle.remove();
                            showToast('File deleted');
                            btn.closest('li').remove();
                            updateStorageInfo('storageInfo');
                        } catch (_) {
                            showToast('Error deleting file.');
                        }
                    }
                });
            });
            updateStorageInfo('storageInfo');
        } catch (_) {
            output.innerHTML = `<p>Error scanning files.</p>`;
        }
    };

    window.scanBigFiles = async function() {
        const output = _fileOutput || document.getElementById('fileManagerOutput');
        if (!output) return;
        output.innerHTML = '<div class="loader" style="margin:0 auto 0.5rem auto;"></div> Scanning for large files (>50MB)...';
        try {
            const dirHandle = await requestDirectoryPermission();
            if (!dirHandle) {
                output.innerHTML = '<p>Permission denied or not supported.</p>';
                return;
            }
            let big = [];
            for await (const [name, handle] of dirHandle.entries()) {
                if (handle.kind === 'file') {
                    const file = await handle.getFile();
                    if (file.size > 50 * 1024 * 1024) {
                        big.push({ name, size: file.size, handle });
                    }
                }
            }
            if (!big.length) {
                output.innerHTML = '<p>✅ No files larger than 50MB.</p>';
                updateStorageInfo('storageInfo');
                return;
            }
            let html = `<p>Found ${big.length} large files:</p><ul style="list-style:none;padding:0;">`;
            big.forEach(b => {
                html += `<li style="padding:0.5rem;border-bottom:1px solid var(--ad-bg);display:flex;justify-content:space-between;align-items:center;">
                    <span>${escapeHtml(b.name)} (${(b.size / (1024 * 1024)).toFixed(2)} MB)</span>
                    <button class="delete-file-btn" data-handle="${b.handle}" style="background:red;color:white;border:none;border-radius:20px;padding:0.2rem 0.8rem;cursor:pointer;">Delete</button>
                </li>`;
            });
            html += '</ul>';
            output.innerHTML = html;
            output.querySelectorAll('.delete-file-btn').forEach(btn => {
                btn.addEventListener('click', async () => {
                    const handle = btn.dataset.handle;
                    if (confirm('Delete this file?')) {
                        try {
                            await handle.remove();
                            showToast('File deleted');
                            btn.closest('li').remove();
                            updateStorageInfo('storageInfo');
                        } catch (_) {
                            showToast('Error deleting file.');
                        }
                    }
                });
            });
            updateStorageInfo('storageInfo');
        } catch (_) {
            output.innerHTML = `<p>Error scanning files.</p>`;
        }
    };

    // =============================================================
    // 25. STATE PERSISTENCE
    // =============================================================

    function saveState() {
        const state = {
            category: currentCategory,
            scrollY: window.scrollY,
            view: currentView
        };
        sessionStorage.setItem(CONFIG.STATE_KEY, JSON.stringify(state));
    }

    function restoreState() {
        const stored = sessionStorage.getItem(CONFIG.STATE_KEY);
        if (!stored) return;
        try {
            const state = JSON.parse(stored);
            setTimeout(() => {
                window.scrollTo(0, state.scrollY || 0);
            }, 500);
            sessionStorage.removeItem(CONFIG.STATE_KEY);
        } catch (_) {
            sessionStorage.removeItem(CONFIG.STATE_KEY);
        }
    }

    window.addEventListener('beforeunload', saveState);

    // =============================================================
    // 26. MAIN LOAD
    // =============================================================

    async function loadAllFeeds() {
        // Detect if category page
        const path = window.location.pathname;
        const validCategories = ['Local', 'World', 'Politics', 'Technology', 'Sports', 'Entertainment', 'Business', 'Health'];
        const fileName = path.split('/').pop().replace('.html', '');
        isCategoryPage = validCategories.includes(fileName);
        let targetCategory = isCategoryPage ? fileName : null;

        // Show loading with "stay" message
        showLoadingStatus('Loading fresh news…', true);

        // Reset state
        feedPool = [];
        feedIndex = 0;
        usedFeedUrls.clear();
        allFetched = false;

        // Populate local sections
        await populateLocalSections();

        let localArticles = [];
        for (const sec of ['top', 'politics', 'tech', 'health', 'football', 'discover']) {
            localArticles = localArticles.concat(localSectionArticles[sec]);
        }

        let worldArticles = [];

        if (targetCategory) {
            const feedsToFetch = WORLD_FEEDS.filter(f => f.category === targetCategory);
            const results = await Promise.all(feedsToFetch.map(f => fetchFeed(f)));
            results.forEach(r => worldArticles.push(...r));
            feedsToFetch.forEach(f => {
                if (!usedFeedUrls.has(f.url)) {
                    usedFeedUrls.add(f.url);
                    feedPool.push(f);
                }
            });
        } else {
            for (let i = 0; i < WORLD_FEEDS.length; i += 8) {
                const batch = WORLD_FEEDS.slice(i, i + 8);
                const results = await Promise.all(batch.map(f => fetchFeed(f)));
                results.forEach(r => worldArticles.push(...r));
                batch.forEach(f => {
                    if (!usedFeedUrls.has(f.url)) {
                        usedFeedUrls.add(f.url);
                        feedPool.push(f);
                    }
                });
                await new Promise(r => setTimeout(r, 100));
                if (worldArticles.length > 30) break;
            }
        }

        allArticles = [...localArticles, ...worldArticles];
        const uniqueMap = new Map();
        allArticles.forEach(a => {
            const key = (a.link || '').split('?')[0];
            if (!uniqueMap.has(key)) uniqueMap.set(key, a);
        });
        allArticles = Array.from(uniqueMap.values());
        allArticles.forEach(a => { a.views = generateViews(a.title); });
        allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        if (!targetCategory) {
            await ensureCategoryCounts();
        }

        // Load Top News
        showLoadingStatus('Loading top stories…', true);
        initTopNewsPool();
        const topRes = await Promise.all(TOP_NEWS_FEEDS.map(f => fetchFeed({ ...f, category: "Top" })));
        let topTemp = [];
        topRes.forEach(r => topTemp.push(...r));
        const topUnique = new Map();
        topTemp.forEach(a => {
            const key = (a.link || '').split('?')[0];
            if (!topUnique.has(key)) topUnique.set(key, a);
        });
        topNewsArticles = Array.from(topUnique.values());
        topNewsArticles.forEach(a => { a.views = generateViews(a.title); });
        topNewsArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        topNewsDisplayed = CONFIG.TOP_NEWS_DISPLAY;
        if (topNewsDisplayed > topNewsArticles.length) topNewsDisplayed = topNewsArticles.length;
        hasMoreTopNews = true;

        storeAllArticlesForSearch();

        // Render
        hideLoadingStatus();
        if (targetCategory) {
            renderCategoryPage(targetCategory);
        } else {
            renderAllCategoryGrouped();
            renderTrendingCarousel();
        }

        updateSavedCounter();
        ensureSentinel();
        initInfiniteScroll();
        checkOnlineStatus();
        restoreState();
        isInitialLoad = false;
    }

    // =============================================================
    // 27. EVENT BINDING
    // =============================================================

    // Theme
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', (e) => {
            document.body.classList.toggle('dark', e.target.checked);
            localStorage.setItem(CONFIG.THEME_KEY, e.target.checked ? 'dark' : 'light');
        });
        if (localStorage.getItem(CONFIG.THEME_KEY) === 'dark') {
            document.body.classList.add('dark');
            themeSwitch.checked = true;
        }
    }

    // Menu
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');

    function closeMenu() {
        sideMenu?.classList.remove('open');
        overlay?.classList.remove('show');
    }

    document.getElementById('hamburgerBtn')?.addEventListener('click', () => {
        sideMenu?.classList.add('open');
        overlay?.classList.add('show');
    });
    document.getElementById('closeMenuBtn')?.addEventListener('click', closeMenu);
    if (overlay) overlay.onclick = closeMenu;

    // Side menu items
    const menuMap = {
        'menuHome': () => { showHomeView();
            closeMenu(); },
        'menuTrending': () => { document.getElementById('trendingCarousel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMenu(); },
        'menuNotification': () => { alert("🔔 Notifications coming soon.");
            closeMenu(); },
        'menuSearch': () => { closeMenu();
            document.getElementById('searchInput')?.focus(); },
        'menuAbout': () => { alert("Amimo Discovery v53.0\n✅ Real page navigation\n✅ All view: Local only top stories\n✅ Category pages: full content\n✅ Back button, location detection\n✅ Fixed view switching – re‑renders on home\n✅ Mixed top news\n✅ Centered loading with 'stay' message");
            closeMenu(); },
        'menuSaved': () => { showSavedView();
            closeMenu(); },
        'menuTools': () => { showToolsView();
            closeMenu(); },
        'menuLive': () => { showLiveView();
            closeMenu(); }
    };
    Object.keys(menuMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', menuMap[id]);
    });

    document.getElementById('viewSavedBtn')?.addEventListener('click', showSavedView);

    // Search
    document.getElementById('searchBtn')?.addEventListener('click', () => {
        const q = document.getElementById('searchInput').value.trim();
        if (q) redirectToSearchPage(q);
    });
    document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById('searchBtn')?.click();
    });

    // Bottom navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const nav = btn.dataset.nav;
            if (nav === 'home') showHomeView();
            else if (nav === 'saved') showSavedView();
            else if (nav === 'tools') showToolsView();
            else if (nav === 'live') showLiveView();
        });
    });

    // =============================================================
    // 28. START
    // =============================================================

    detectLocation().then(() => {
        loadAllFeeds();
    });

})();