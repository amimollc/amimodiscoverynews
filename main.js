// ===================== MAIN.JS - TRUE INFINITE + MIXED ARTICLES + TOP NEWS INFINITE =====================
(function() {
    // ========== RSS FEEDS ==========
    const WORLD_FEEDS = [
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
        { name: "SCMP", url: "https://www.scmp.com/rss/2/feed", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=SCMP" },
        { name: "Japan Times", url: "https://www.japantimes.co.jp/feed/", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=JapanTimes" },
        { name: "Euronews", url: "https://www.euronews.com/rss", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Euronews" },
        { name: "NYT World", url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=NYT+World" },
        { name: "WaPo World", url: "https://feeds.washingtonpost.com/rss/world", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=WaPo+World" },
        { name: "TechCrunch", url: "https://techcrunch.com/feed/", category: "Technology", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=TechCrunch" },
        { name: "The Verge", url: "https://www.theverge.com/rss/index.xml", category: "Technology", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Verge" },
        { name: "Wired", url: "https://www.wired.com/feed/rss", category: "Technology", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Wired" },
        { name: "Ars Technica", url: "https://feeds.feedburner.com/arstechnica/index", category: "Technology", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Ars" },
        { name: "ZDNet", url: "https://www.zdnet.com/news/rss.xml", category: "Technology", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=ZDNet" },
        { name: "CNET", url: "https://www.cnet.com/rss/news/", category: "Technology", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CNET" },
        { name: "ESPN", url: "https://www.espn.com/espn/rss/news", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=ESPN" },
        { name: "Sky Sports", url: "https://www.skysports.com/rss/12040", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=SkySports" },
        { name: "Bleacher Report", url: "https://bleacherreport.com/articles/feed", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Bleacher" },
        { name: "BBC Sport", url: "https://feeds.bbci.co.uk/sport/rss.xml", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=BBCSport" },
        { name: "The Athletic", url: "https://theathletic.com/feed/", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Athletic" },
        { name: "FOX Sports", url: "https://www.foxsports.com/rss", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=FOXSports" },
        { name: "CBS Sports", url: "https://www.cbssports.com/rss/headlines", category: "Sports", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CBSSports" },
        { name: "Variety", url: "https://variety.com/feed/", category: "Entertainment", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Variety" },
        { name: "Hollywood Reporter", url: "https://www.hollywoodreporter.com/feed/", category: "Entertainment", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=THR" },
        { name: "Deadline", url: "https://deadline.com/feed/", category: "Entertainment", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Deadline" },
        { name: "EW", url: "https://ew.com/feed/", category: "Entertainment", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=EW" },
        { name: "BBC Politics", url: "https://feeds.bbci.co.uk/news/politics/rss.xml", category: "Politics", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Politics" },
        { name: "Politico", url: "https://www.politico.com/rss/politics.xml", category: "Politics", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Politico" },
        { name: "The Hill", url: "https://thehill.com/feed/", category: "Politics", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=TheHill" },
        { name: "Bloomberg", url: "https://feeds.bloomberg.com/markets/news.rss", category: "Business", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Bloomberg" },
        { name: "CNBC", url: "https://www.cnbc.com/id/100003114/device/rss/rss.html", category: "Business", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CNBC" },
        { name: "FT", url: "https://www.ft.com/?format=rss", category: "Business", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=FT" },
        { name: "Business Insider", url: "https://www.businessinsider.com/rss", category: "Business", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=BI" },
        { name: "CNN Health", url: "https://rss.cnn.com/rss/edition_health.rss", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Health" },
        { name: "WebMD", url: "https://feeds.webmd.com/rss/rss.aspx", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=WebMD" },
        { name: "Medical News Today", url: "https://www.medicalnewstoday.com/feeds/rss", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=MNT" },
        { name: "Healthline", url: "https://www.healthline.com/feeds/rss", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Healthline" },
        { name: "WHO", url: "https://www.who.int/rss-feeds/news-english.xml", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=WHO" },
        { name: "Harvard Health", url: "https://www.health.harvard.edu/feed", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Harvard+Health" },
        { name: "Medical Xpress", url: "https://medicalxpress.com/rss/", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Medical+Xpress" }
    ];

    const localMap = new Map();
    localMap.set("ZM", [ 
        { name: "Lusaka Times", url: "https://www.lusakatimes.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Lusaka" },
        { name: "Zambia Daily Mail", url: "https://www.daily-mail.co.zm/?feed=rss2", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Zambia+Mail" },
        { name: "Zambian Football", url: "https://zambianfootball.co.zm/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Zambia+Sports" },
        { name: "Zambia Reports", url: "https://zambiareports.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Zambia+Reports" },
        { name: "News Diggers", url: "https://diggers.news/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=News+Diggers" },
        { name: "Mwebantu", url: "https://mwebantu.news/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Mwebantu" }
    ]);
    localMap.set("US", [ 
        { name: "CNN US", url: "https://rss.cnn.com/rss/edition_us.rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=US+News" }, 
        { name: "NY Times", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=NYT" }, 
        { name: "LA Times", url: "https://www.latimes.com/rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=LAT" },
        { name: "USA Today", url: "https://www.usatoday.com/rss/news", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=USA+Today" },
        { name: "NBC News", url: "https://feeds.nbcnews.com/nbcnews/public/news", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=NBC" },
        { name: "ESPN US", url: "https://www.espn.com/espn/rss/news", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=ESPN+US" }
    ]);
    localMap.set("GB", [ 
        { name: "BBC UK", url: "https://feeds.bbci.co.uk/news/uk/rss.xml", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=BBC+UK" }, 
        { name: "The Guardian UK", url: "https://www.theguardian.com/uk/rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Guardian" },
        { name: "Sky News UK", url: "https://news.sky.com/feeds/rss/uk", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Sky+UK" },
        { name: "BBC Sport UK", url: "https://feeds.bbci.co.uk/sport/rss.xml", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=BBC+Sport+UK" }
    ]);
    localMap.set("IN", [ 
        { name: "Times of India", url: "https://timesofindia.indiatimes.com/rssfeedmostrecent.cms", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=TOI" }, 
        { name: "NDTV", url: "https://feeds.feedburner.com/ndtvnews-top-stories", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=NDTV" },
        { name: "The Hindu", url: "https://www.thehindu.com/news/feeder/default.rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=The+Hindu" },
        { name: "Indian Express", url: "https://indianexpress.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Indian+Express" },
        { name: "Sportskeeda", url: "https://www.sportskeeda.com/feed", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Sportskeeda" }
    ]);
    localMap.set("CA", [ 
        { name: "CBC", url: "https://www.cbc.ca/cmlink/rss-topstories", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CBC" },
        { name: "Toronto Star", url: "https://www.thestar.com/content/thestar/feed.RSS", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Toronto+Star" },
        { name: "TSN Sports", url: "https://www.tsn.ca/rss/feed", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=TSN+Sports" }
    ]);
    localMap.set("AU", [ 
        { name: "ABC Australia", url: "https://www.abc.net.au/news/feed/51120/rss.xml", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=ABC+AU" },
        { name: "SMH", url: "https://www.smh.com.au/rss/feed", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=SMH" },
        { name: "Fox Sports AU", url: "https://www.foxsports.com.au/feed", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Fox+Sports+AU" }
    ]);
    localMap.set("NG", [ 
        { name: "Pulse Nigeria", url: "https://www.pulse.ng/rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Pulse+NG" },
        { name: "The Guardian NG", url: "https://guardian.ng/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Guardian+NG" },
        { name: "Complete Sports", url: "https://www.completesports.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Complete+Sports" }
    ]);
    localMap.set("ZA", [ 
        { name: "News24", url: "https://www.news24.com/feeds", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=News24" },
        { name: "IOL", url: "https://www.iol.co.za/rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=IOL" },
        { name: "KickOff", url: "https://www.kickoff.com/rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=KickOff" }
    ]);
    localMap.set("KE", [ 
        { name: "Daily Nation", url: "https://www.nation.co.ke/rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Daily+Nation" },
        { name: "The Star Kenya", url: "https://www.the-star.co.ke/rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=The+Star" }
    ]);
    const FALLBACK_LOCAL_FEEDS = [
        { name: "VOA News", url: "https://www.voanews.com/rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=VOA" }
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

    // ========== GLOBALS ==========
    let allArticles = [];
    let currentCategory = "all";
    let userCountry = "ZM";
    let userCountryName = "World";
    let currentFiltered = [];
    let displayLimit = 20;
    let isLoadingMore = false;
    let isLoadingEndless = false;
    let savedArticles = JSON.parse(localStorage.getItem("amimo_saved") || "[]");
    let scrollObserver = null;
    let sentinelElement = null;
    let retryContainer = null;
    let carouselInterval = null;
    let autoScrollActive = true;
    let currentView = "home";
    let hasMoreArticles = true;

    // Top news infinite
    let topNewsArticles = [];
    let topNewsDisplayed = 5;
    let isLoadingTopNews = false;
    let topNewsSentinel = null;
    let topNewsObserver = null;
    let hasMoreTopNews = true;

    // ========== HELPERS ==========
    function generateViews(title) {
        let hash = 0;
        for(let i=0;i<title.length;i++) hash = ((hash<<5)-hash)+title.charCodeAt(i);
        return Math.abs(hash) % 300000 + 5000;
    }
    function formatViews(num) { return num>=1000000?(num/1000000).toFixed(1)+'M':num>=1000?(num/1000).toFixed(1)+'K':num; }
    function escapeHtml(str) { return str?.replace(/[&<>]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;'})[m]) || ''; }
    function showToast(msg) {
        let t = document.createElement('div');
        t.innerText = msg;
        t.style.position = 'fixed'; t.style.bottom = '70px'; t.style.left = '20px';
        t.style.background = 'var(--accent-dark)'; t.style.color = 'white';
        t.style.padding = '8px 18px'; t.style.borderRadius = '40px'; t.style.zIndex = '9999';
        t.style.backdropFilter = 'blur(8px)';
        document.body.appendChild(t);
        setTimeout(()=>t.remove(),2000);
    }
    function getImageUrl(item, category) {
        if (item.imageUrl && item.imageUrl.startsWith('http')) return item.imageUrl;
        const categoryColors = { 'Politics':'1e3a8a', 'Technology':'0f172a', 'Sports':'b91c1c', 'Entertainment':'831843', 'Business':'065f46', 'Health':'0e7c7c', 'Local':'4c1d95', 'World':'1e40af', 'Top':'f59e0b' };
        const color = categoryColors[category] || '3b82f6';
        return `https://placehold.co/800x450/${color}/white?text=${encodeURIComponent(item.source || category)}`;
    }
    async function shareArticle(title, url) {
        if (navigator.share) try { await navigator.share({ title, url }); } catch(e) {}
        else { navigator.clipboard.writeText(url); showToast('Link copied!'); }
    }

    // ========== FETCH FUNCTIONS ==========
    async function fetchFeed(feedCfg) {
        try {
            const fresh = Date.now();
            const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedCfg.url)}&_fresh=${fresh}`;
            const resp = await fetch(proxyUrl, { cache: 'no-store', headers: { 'Cache-Control': 'no-cache' } });
            const data = await resp.json();
            if(data.status !== 'ok') return [];
            return data.items.slice(0, 12).map(item => {
                let img = feedCfg.imgFallback;
                if (item.thumbnail?.startsWith('http')) img = item.thumbnail;
                else if (item.media?.thumbnail?.url) img = item.media.thumbnail.url;
                else if (item['media:thumbnail']?.url) img = item['media:thumbnail'].url;
                else if (item.enclosure?.link && (item.enclosure.type?.startsWith('image') || item.enclosure.link.match(/\.(jpg|jpeg|png|gif|webp)/i))) img = item.enclosure.link;
                else if (item.description) {
                    const match = item.description.match(/<img[^>]+src=["']([^"']+)["']/i);
                    if (match?.[1]?.startsWith('http')) img = match[1];
                }
                if (item['content:encoded']) {
                    const match = item['content:encoded'].match(/<img[^>]+src=["']([^"']+)["']/i);
                    if (match?.[1]?.startsWith('http')) img = match[1];
                }
                return {
                    title: item.title, link: item.link, pubDate: item.pubDate,
                    description: (item.description||"").replace(/<[^>]*>/g, '').substring(0, 200),
                    source: feedCfg.name, category: feedCfg.category, imageUrl: img
                };
            });
        } catch(e) { return []; }
    }

    // Fetch local feeds first (used in initial load)
    async function fetchLocalFeeds() {
        let localFeeds = localMap.get(userCountry) || FALLBACK_LOCAL_FEEDS;
        let articles = [];
        for (let feed of localFeeds) {
            const res = await fetchFeed(feed);
            articles.push(...res);
        }
        return articles;
    }

    async function fetchWorldFeeds() {
        let all = [];
        for (let i = 0; i < WORLD_FEEDS.length; i += 8) {
            const batch = WORLD_FEEDS.slice(i, i+8);
            const results = await Promise.all(batch.map(f => fetchFeed(f)));
            results.forEach(r => all.push(...r));
            await new Promise(r => setTimeout(r, 100));
        }
        return all;
    }

    // ========== TOP NEWS INFINITE ==========
    async function loadMoreTopNews() {
        if (isLoadingTopNews) return;
        isLoadingTopNews = true;
        showTopNewsSpinner(true);
        try {
            const freshArticles = [];
            const results = await Promise.all(TOP_NEWS_FEEDS.map(f => fetchFeed({ ...f, category: "Top" })));
            results.forEach(r => freshArticles.push(...r));
            // Remove duplicates based on link
            const existingLinks = new Set(topNewsArticles.map(a => a.link));
            const newUnique = freshArticles.filter(a => !existingLinks.has(a.link));
            if (newUnique.length) {
                newUnique.forEach(a => { a.views = generateViews(a.title); });
                topNewsArticles = [...topNewsArticles, ...newUnique];
                topNewsArticles.sort((a,b)=> new Date(b.pubDate) - new Date(a.pubDate));
                hasMoreTopNews = true;
                topNewsDisplayed += 5;
                renderTopNews();
                showToast(`✨ ${newUnique.length} new top stories`);
            } else {
                hasMoreTopNews = false;
                showTopNewsRetry("No new top news. Tap to retry.");
            }
        } catch(e) {
            showTopNewsRetry("Failed to load more top news. Retry?");
        }
        isLoadingTopNews = false;
        showTopNewsSpinner(false);
    }

    function showTopNewsSpinner(show) {
        let spinner = document.getElementById('topNewsEndSpinner');
        if(show && !spinner && topNewsSentinel) {
            spinner = document.createElement('div');
            spinner.id = 'topNewsEndSpinner';
            spinner.className = 'end-loader';
            spinner.innerHTML = '<div class="loader"></div> Loading more top news...';
            topNewsSentinel.parentNode.insertBefore(spinner, topNewsSentinel);
        } else if(!show && spinner) spinner.remove();
    }

    function showTopNewsRetry(msg) {
        if(!topNewsSentinel) return;
        let retryDiv = document.getElementById('topNewsRetry');
        if(retryDiv) retryDiv.remove();
        retryDiv = document.createElement('div');
        retryDiv.id = 'topNewsRetry';
        retryDiv.className = 'end-loader';
        retryDiv.innerHTML = `<div><i class="fas fa-exclamation-triangle"></i> ${msg}</div><button class="retry-button" id="topNewsRetryBtn">Reload More</button>`;
        topNewsSentinel.parentNode.insertBefore(retryDiv, topNewsSentinel);
        document.getElementById('topNewsRetryBtn').onclick = () => {
            retryDiv.remove();
            loadMoreTopNews();
        };
    }

    function setupTopNewsInfinite() {
        if(topNewsObserver) topNewsObserver.disconnect();
        topNewsSentinel = document.getElementById('topNewsSentinel');
        if(!topNewsSentinel) return;
        topNewsObserver = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && !isLoadingTopNews && hasMoreTopNews && currentCategory === 'all') {
                loadMoreTopNews();
            }
        }, { threshold: 0.1, rootMargin: "0px 0px 200px 0px" });
        topNewsObserver.observe(topNewsSentinel);
    }

    // ========== MAIN LOAD (initial) ==========
    async function loadAllFeeds() {
        const statusDiv = document.getElementById('statusMsg');
        statusDiv.innerHTML = '<div class="loader"></div> Fetching local news first...';
        let localArticles = await fetchLocalFeeds();
        let allArts = [...localArticles];
        statusDiv.innerHTML = `✅ Local: ${localArticles.length} stories. Fetching world...`;
        let worldArticles = await fetchWorldFeeds();
        allArts.push(...worldArticles);
        const unique = new Map();
        allArts.forEach(a => { if(!unique.has(a.link)) unique.set(a.link, a); });
        allArticles = Array.from(unique.values());
        allArticles.forEach(a => { a.views = generateViews(a.title); });
        allArticles.sort((a,b)=> new Date(b.pubDate) - new Date(a.pubDate));
        statusDiv.innerHTML = `✅ ${allArticles.length} total stories ready`;
        storeAllArticlesForSearch();
        
        // Load top news separately
        const topRes = await Promise.all(TOP_NEWS_FEEDS.map(f => fetchFeed({ ...f, category: "Top" })));
        let topTemp = [];
        topRes.forEach(r => topTemp.push(...r));
        const topUnique = new Map();
        topTemp.forEach(a => { if(!topUnique.has(a.link)) topUnique.set(a.link, a); });
        topNewsArticles = Array.from(topUnique.values());
        topNewsArticles.forEach(a => { a.views = generateViews(a.title); });
        topNewsArticles.sort((a,b)=> new Date(b.pubDate) - new Date(a.pubDate));
        topNewsDisplayed = 5;
        hasMoreTopNews = true;
        
        applyCategoryFilter();
        renderTrendingCarousel();
        updateSavedCounter();
        setupTopNewsInfinite();
    }

    function storeAllArticlesForSearch() {
        if (allArticles.length) {
            const searchable = allArticles.map(art => ({ title: art.title, link: art.link, description: art.description, source: art.source }));
            localStorage.setItem('amimoAllArticles', JSON.stringify(searchable));
        }
    }

    // ========== FETCH MORE FOR INFINITE SCROLL (ALL CATEGORIES) ==========
    async function fetchMoreForCategory(category) {
        let feedsToFetch = [];
        if (category === 'all') {
            let localFeeds = localMap.get(userCountry) || FALLBACK_LOCAL_FEEDS;
            // Mix local and world feeds, take 15 total
            const worldSample = WORLD_FEEDS.slice(0, 12);
            feedsToFetch = [...localFeeds, ...worldSample];
        } else if (category === 'Local') {
            feedsToFetch = localMap.get(userCountry) || FALLBACK_LOCAL_FEEDS;
        } else {
            feedsToFetch = WORLD_FEEDS.filter(f => f.category === category);
        }
        if (feedsToFetch.length === 0) feedsToFetch = WORLD_FEEDS.slice(0, 15);
        
        const BATCH_SIZE = 15;
        const limited = feedsToFetch.slice(0, BATCH_SIZE);
        const results = await Promise.all(limited.map(f => fetchFeed(f)));
        let newArticles = [];
        results.forEach(r => newArticles.push(...r));
        const existingLinks = new Set(allArticles.map(a => a.link));
        const uniqueNew = newArticles.filter(a => !existingLinks.has(a.link));
        if (uniqueNew.length) {
            uniqueNew.forEach(a => { a.views = generateViews(a.title); });
            allArticles = [...uniqueNew, ...allArticles];
            allArticles.sort((a,b)=> new Date(b.pubDate) - new Date(a.pubDate));
            storeAllArticlesForSearch();
            return uniqueNew.length;
        } else {
            return 0;
        }
    }

    // ========== RENDER MAIN FEED ==========
    function applyCategoryFilter() {
        if (currentCategory === 'all') {
            renderAllCategoryGrouped();
            if (scrollObserver) scrollObserver.disconnect();
            // Top news container handled separately
            const topContainer = document.getElementById('topNewsContainer');
            if (topContainer) {
                topContainer.style.display = 'block';
                renderTopNews();
                setupTopNewsInfinite();
            }
            initScrollObserver(); // infinite for main feed
        } else {
            const topContainer = document.getElementById('topNewsContainer');
            if (topContainer) topContainer.style.display = 'none';
            if (currentCategory === 'Local') {
                currentFiltered = allArticles.filter(a => a.category === 'Local');
            } else {
                currentFiltered = allArticles.filter(a => a.category === currentCategory);
            }
            displayLimit = 20;
            renderNewsFeed();
            initScrollObserver();
        }
    }

    function renderTopNews() {
        const container = document.getElementById('topNewsContainer');
        if (!container) return;
        if (!topNewsArticles.length) { container.style.display = 'none'; return; }
        container.style.display = 'block';
        const toShow = topNewsArticles.slice(0, topNewsDisplayed);
        let html = `<div class="top-news-section">
                        <div class="top-news-title"><i class="fas fa-chart-line"></i> 🔥 Top News</div>
                        <div class="top-news-grid">`;
        toShow.forEach(art => {
            const isSaved = savedArticles.some(s => s.link === art.link);
            const formattedDate = new Date(art.pubDate).toLocaleDateString(undefined, { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
            const imgSrc = getImageUrl(art, art.category);
            html += `<div class="news-card">
                        <img class="card-img" src="${imgSrc}" onerror="this.src='https://placehold.co/400x300/f59e0b/white?text=Top'">
                        <div class="card-body">
                            <div class="news-title"><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></div>
                            <div class="news-meta"><span class="source-tag"><i class="fas fa-globe"></i> ${escapeHtml(art.source)}</span><span><i class="far fa-calendar-alt"></i> ${formattedDate}</span><span><i class="fas fa-eye"></i> ${formatViews(art.views)}</span></div>
                            <div class="news-desc">${escapeHtml(art.description)}</div>
                            <div class="action-row">
                                <a href="${art.link}" target="_blank" class="btn-primary"><i class="fas fa-external-link-alt"></i> Read</a>
                                <button class="btn-save save-top-btn" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${imgSrc}" data-source="${escapeHtml(art.source)}" data-desc="${escapeHtml(art.description)}">${isSaved ? '✅ Saved' : '💾 Save'}</button>
                                <button class="btn-share share-top-btn" data-url="${art.link}" data-title="${escapeHtml(art.title)}"><i class="fas fa-share-alt"></i> Share</button>
                            </div>
                        </div>
                    </div>`;
        });
        html += `</div>`;
        if (hasMoreTopNews && topNewsDisplayed < topNewsArticles.length) {
            html += `<div id="topNewsSentinel" style="height:10px;margin:10px 0;"></div>`;
        } else if (hasMoreTopNews) {
            html += `<div id="topNewsSentinel" style="height:10px;margin:10px 0;"></div>`;
        }
        html += `</div>`;
        container.innerHTML = html;
        attachSaveEvents();
        attachShareEvents();
        // Re-attach top news sentinel observer
        topNewsSentinel = document.getElementById('topNewsSentinel');
        if(topNewsSentinel) setupTopNewsInfinite();
    }

    function renderAllCategoryGrouped() {
        const feedDiv = document.getElementById('newsFeed');
        if (!allArticles.length) { feedDiv.innerHTML = '<div style="padding:2rem;text-align:center;">📭 No articles</div>'; return; }
        const categoriesOrder = ['Local', 'World', 'Politics', 'Technology', 'Sports', 'Entertainment', 'Business', 'Health'];
        function getArticlesByCategory(cat, limit) { return allArticles.filter(a => a.category === cat).slice(0, limit); }
        let html = '';
        for (let cat of categoriesOrder) {
            const limit = (cat === 'Local') ? 6 : 3;
            const catArticles = getArticlesByCategory(cat, limit);
            if (catArticles.length) {
                html += `<div class="category-section" data-cat="${cat}">
                            <div class="category-section-title"><i class="fas ${getCategoryIcon(cat)}"></i> ${cat}</div>`;
                catArticles.forEach(art => { html += renderArticleCard(art); });
                html += `<button class="show-more-btn" data-target-cat="${cat}"><i class="fas fa-chevron-right"></i> Show More ${cat} News</button>
                        </div>`;
            }
        }
        feedDiv.innerHTML = html;
        document.querySelectorAll('.show-more-btn').forEach(btn => {
            btn.addEventListener('click', () => switchCategory(btn.dataset.targetCat));
        });
        attachSaveEvents();
        attachShareEvents();
        ensureSentinel();
    }

    function renderNewsFeed() {
        if (currentCategory === 'all') { renderAllCategoryGrouped(); return; }
        const feedDiv = document.getElementById('newsFeed');
        const toRender = currentFiltered.slice(0, displayLimit);
        if(toRender.length === 0) { feedDiv.innerHTML = '<div style="padding:2rem;text-align:center;">📭 No articles</div>'; return; }
        let html = '';
        for(let i=0; i<toRender.length; i++) {
            html += renderArticleCard(toRender[i]);
            if((i+1) % 5 === 0 && i+1 < toRender.length) html += `<div class="inline-ad"><i class="fas fa-ad"></i> Advertisement</div>`;
        }
        feedDiv.innerHTML = html;
        attachSaveEvents();
        attachShareEvents();
        ensureSentinel();
    }

    function renderArticleCard(art) {
        const isSaved = savedArticles.some(s => s.link === art.link);
        const formattedDate = new Date(art.pubDate).toLocaleDateString(undefined, { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
        const imgSrc = getImageUrl(art, art.category);
        return `<div class="news-card">
            <img class="card-img" src="${imgSrc}" onerror="this.src='https://placehold.co/400x300/3b82f6/white?text=News'">
            <div class="card-body">
                <div class="news-title"><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></div>
                <div class="news-meta"><span class="source-tag"><i class="fas fa-globe"></i> ${escapeHtml(art.source)}</span><span><i class="far fa-calendar-alt"></i> ${formattedDate}</span><span><i class="fas fa-eye"></i> ${formatViews(art.views)}</span></div>
                <div class="news-desc">${escapeHtml(art.description)}</div>
                <div class="action-row">
                    <a href="${art.link}" target="_blank" class="btn-primary"><i class="fas fa-external-link-alt"></i> Read</a>
                    <button class="btn-save save-btn" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${imgSrc}" data-source="${escapeHtml(art.source)}" data-desc="${escapeHtml(art.description)}">${isSaved ? '✅ Saved' : '💾 Save'}</button>
                    <button class="btn-share share-btn" data-url="${art.link}" data-title="${escapeHtml(art.title)}"><i class="fas fa-share-alt"></i> Share</button>
                </div>
            </div>
        </div>`;
    }

    function getCategoryIcon(cat) {
        const icons = { 'Local':'fa-location-dot', 'World':'fa-globe', 'Politics':'fa-landmark', 'Technology':'fa-microchip', 'Sports':'fa-futbol', 'Entertainment':'fa-mask', 'Business':'fa-chart-line', 'Health':'fa-heartbeat' };
        return icons[cat] || 'fa-newspaper';
    }

    function attachSaveEvents() {
        document.querySelectorAll('.save-btn, .save-top-btn').forEach(btn => { btn.removeEventListener('click', saveHandler); btn.addEventListener('click', saveHandler); });
    }
    function attachShareEvents() {
        document.querySelectorAll('.share-btn, .share-top-btn').forEach(btn => { btn.removeEventListener('click', shareHandler); btn.addEventListener('click', shareHandler); });
    }
    function shareHandler(e) { shareArticle(e.currentTarget.dataset.title, e.currentTarget.dataset.url); }
    function saveHandler(e) {
        const btn = e.currentTarget;
        const link = btn.dataset.link;
        if(!savedArticles.some(s => s.link === link)) {
            savedArticles.push({ title: btn.dataset.title, link, imageUrl: btn.dataset.img, source: btn.dataset.source, description: btn.dataset.desc, savedAt: Date.now() });
            localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
            btn.innerHTML = '✅ Saved'; btn.style.background = '#10b981'; showToast('Saved offline!');
        } else {
            savedArticles = savedArticles.filter(s => s.link !== link);
            localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
            btn.innerHTML = '💾 Save'; btn.style.background = '#2563eb'; showToast('Removed');
        }
        updateSavedCounter();
        if (currentView === 'saved') renderSavedArticles();
        if (currentCategory === 'all' && currentView === 'home') { renderAllCategoryGrouped(); renderTopNews(); }
    }
    function updateSavedCounter() { const c = document.getElementById('savedCounter'); if(c) c.innerText = savedArticles.length; }

    // ========== TRENDING CAROUSEL ==========
    function renderTrendingCarousel() {
        const categories = ['Local','World','Politics','Technology','Sports','Entertainment','Business','Health'];
        const selected = [];
        for (const cat of categories) {
            const catArticles = allArticles.filter(a => a.category === cat).slice(0, 2);
            selected.push(...catArticles);
        }
        const trendingItems = selected.slice(0, 16);
        const carousel = document.getElementById('trendingCarousel');
        if(!trendingItems.length) { carousel.innerHTML = '<div>No trending</div>'; return; }
        carousel.innerHTML = trendingItems.map(art => {
            const imgSrc = getImageUrl(art, art.category);
            return `<div class="trend-card-full">
                <img src="${imgSrc}" onerror="this.src='https://placehold.co/800x400/3b82f6/white?text=Trend'">
                <div class="trend-info">
                    <h3><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></h3>
                    <div class="trend-meta"><span><i class="fas fa-globe"></i> ${art.source}</span><span><i class="fas fa-eye"></i> ${formatViews(generateViews(art.title))}</span></div>
                    <button class="btn-save save-trend" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${imgSrc}" data-source="${art.source}" data-desc="${escapeHtml(art.description)}">💾 Save</button>
                </div>
            </div>`;
        }).join('');
        document.querySelectorAll('.save-trend').forEach(btn => {
            btn.addEventListener('click', () => {
                const link = btn.dataset.link;
                if(!savedArticles.some(s=>s.link===link)) {
                    savedArticles.push({ title: btn.dataset.title, link, imageUrl: btn.dataset.img, source: btn.dataset.source, description: btn.dataset.desc, savedAt: Date.now() });
                    localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
                    btn.innerHTML = '✅ Saved'; updateSavedCounter();
                    if (currentView === 'saved') renderSavedArticles();
                    showToast('Saved offline');
                } else { showToast('Already saved'); }
            });
        });
        startCarouselScroll();
    }

    function startCarouselScroll() {
        if(carouselInterval) clearInterval(carouselInterval);
        const container = document.getElementById('trendingCarousel');
        if(!container) return;
        autoScrollActive = true;
        container.addEventListener('mouseenter', () => { autoScrollActive = false; });
        container.addEventListener('mouseleave', () => { autoScrollActive = true; });
        carouselInterval = setInterval(() => {
            if(!autoScrollActive) return;
            const maxScroll = container.scrollWidth - container.clientWidth;
            if(maxScroll <= 0) return;
            let newLeft = container.scrollLeft + (container.clientWidth * 0.8);
            if(newLeft >= maxScroll) newLeft = 0;
            container.scrollTo({ left: newLeft, behavior: 'smooth' });
        }, 6000);
    }

    // ========== INFINITE SCROLL FOR MAIN FEED ==========
    function ensureSentinel() {
        const existing = document.getElementById('loadSentinel');
        if (existing && existing.parentNode) existing.remove();
        const sentinel = document.createElement('div');
        sentinel.id = 'loadSentinel';
        sentinel.style.height = '10px';
        sentinel.style.margin = '20px 0';
        const feedDiv = document.getElementById('newsFeed');
        if (feedDiv && feedDiv.parentNode) feedDiv.parentNode.insertBefore(sentinel, feedDiv.nextSibling);
        else document.body.appendChild(sentinel);
        sentinelElement = sentinel;
    }

    function clearRetryButton() { if(retryContainer && retryContainer.parentNode) retryContainer.remove(); retryContainer = null; }

    function showRetryButton(message, retryCallback) {
        clearRetryButton();
        ensureSentinel();
        const wrapper = document.createElement('div');
        wrapper.className = 'end-loader';
        wrapper.innerHTML = `<div><i class="fas fa-exclamation-triangle"></i> ${message}</div><button class="retry-button">Reload More</button>`;
        const btn = wrapper.querySelector('.retry-button');
        btn.onclick = async () => {
            wrapper.innerHTML = '<div class="loader"></div> Fetching...';
            const newCount = await retryCallback();
            if(newCount > 0) { clearRetryButton(); applyCategoryFilter(); showToast(`✅ ${newCount} new articles`); }
            else { wrapper.innerHTML = `<div>No new articles. <button class="retry-button">Retry</button></div>`; }
        };
        if(sentinelElement && sentinelElement.parentNode) sentinelElement.parentNode.insertBefore(wrapper, sentinelElement);
        retryContainer = wrapper;
    }

    async function attemptLoadMore() {
        if(isLoadingEndless) return false;
        isLoadingEndless = true;
        showEndSpinner(true);
        try {
            const newCount = await fetchMoreForCategory(currentCategory);
            if(newCount > 0) {
                applyCategoryFilter();
                window.scrollBy({ top: 60, behavior: 'smooth' });
                clearRetryButton();
                showToast(`✨ ${newCount} more articles`);
                return true;
            } else {
                showRetryButton("End of content. Tap to check for new articles.", async () => await fetchMoreForCategory(currentCategory));
                return false;
            }
        } catch(err) {
            showRetryButton("Failed to load more. Tap to retry.", async () => await fetchMoreForCategory(currentCategory));
            return false;
        } finally {
            isLoadingEndless = false;
            showEndSpinner(false);
        }
    }

    function showEndSpinner(show) {
        let spinner = document.getElementById('endSpinner');
        if(show && !spinner) {
            spinner = document.createElement('div');
            spinner.id = "endSpinner";
            spinner.className = "end-loader";
            spinner.innerHTML = '<div class="loader"></div> Loading more...';
            if(sentinelElement && sentinelElement.parentNode) sentinelElement.parentNode.insertBefore(spinner, sentinelElement);
        } else if(!show && spinner) spinner.remove();
    }

    function initScrollObserver() {
        if(scrollObserver) scrollObserver.disconnect();
        ensureSentinel();
        scrollObserver = new IntersectionObserver(async (entries) => {
            const entry = entries[0];
            if(entry.isIntersecting && !isLoadingEndless && currentView === 'home') {
                if(currentCategory !== 'all') {
                    if(displayLimit < currentFiltered.length) {
                        // just load more from existing filtered array
                        isLoadingMore = true;
                        showEndSpinner(true);
                        setTimeout(() => {
                            displayLimit = Math.min(displayLimit + 10, currentFiltered.length);
                            renderNewsFeed();
                            isLoadingMore = false;
                            showEndSpinner(false);
                            if (displayLimit + 5 >= currentFiltered.length) {
                                // background fetch to add new articles
                                fetchMoreForCategory(currentCategory).then(cnt => {
                                    if(cnt > 0) applyCategoryFilter();
                                });
                            }
                        }, 300);
                    } else {
                        // need to fetch new articles from feeds
                        await attemptLoadMore();
                    }
                } else {
                    // For 'all' category, always fetch more from feeds
                    await attemptLoadMore();
                }
            }
        }, { threshold: 0.2, rootMargin: "0px 0px 300px 0px" });
        if(sentinelElement) scrollObserver.observe(sentinelElement);
    }

    // ========== CATEGORY SWITCH ==========
    function switchCategory(cat) {
        if(currentCategory === cat) return;
        currentCategory = cat;
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        const active = Array.from(document.querySelectorAll('.cat-pill')).find(p => p.dataset.cat === cat);
        if(active) active.classList.add('active');
        clearRetryButton();
        if(currentCategory !== 'all') {
            const topContainer = document.getElementById('topNewsContainer');
            if(topContainer) topContainer.style.display = 'none';
        }
        applyCategoryFilter();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => initScrollObserver(), 100);
    }

    // ========== LOCATION ==========
    async function detectLocation() {
        const badge = document.getElementById('countryBadge');
        badge.innerHTML = `<i class="fas fa-map-marker-alt"></i> locating...`;
        let detected = false;
        for (let i=0; i<2; i++) {
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
            } catch(e) {}
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
                } catch(e) {}
            }
            if (!detected) await new Promise(r => setTimeout(r, 1000));
        }
        if (!detected) { userCountry = "ZM"; userCountryName = "Zambia (fallback)"; }
        badge.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${userCountryName}`;
    }

    // ========== SAVED VIEW ==========
    function renderSavedArticles() {
        const savedDiv = document.getElementById('savedFeed');
        if(!savedDiv) return;
        if(!savedArticles.length) { savedDiv.innerHTML = '<div style="padding:2rem;text-align:center;"><i class="fas fa-archive"></i> No saved articles.</div>'; return; }
        let html = '';
        savedArticles.forEach(art => {
            html += `<div class="news-card">
                <img class="card-img" src="${art.imageUrl || 'https://placehold.co/800x450/3b82f6/white?text=Saved'}" onerror="this.src='https://placehold.co/400x300/3b82f6/white?text=News'">
                <div class="card-body">
                    <div class="news-title"><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></div>
                    <div class="news-meta"><span class="source-tag"><i class="fas fa-globe"></i> ${escapeHtml(art.source)}</span><span>saved offline</span></div>
                    <div class="news-desc">${escapeHtml(art.description || 'No description')}</div>
                    <div class="action-row">
                        <a href="${art.link}" target="_blank" class="btn-primary">Read Original</a>
                        <button class="btn-remove unsave-btn" data-link="${art.link}"><i class="fas fa-trash-alt"></i> Remove</button>
                        <button class="btn-share share-saved-btn" data-url="${art.link}" data-title="${escapeHtml(art.title)}"><i class="fas fa-share-alt"></i> Share</button>
                    </div>
                </div>
            </div>`;
        });
        savedDiv.innerHTML = html;
        document.querySelectorAll('.unsave-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                savedArticles = savedArticles.filter(s => s.link !== btn.dataset.link);
                localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
                updateSavedCounter();
                renderSavedArticles();
                if (currentView === 'home') {
                    if (currentCategory === 'all') { renderAllCategoryGrouped(); renderTopNews(); }
                    else renderNewsFeed();
                }
                showToast('Removed');
            });
        });
        document.querySelectorAll('.share-saved-btn').forEach(btn => {
            btn.addEventListener('click', () => shareArticle(btn.dataset.title, btn.dataset.url));
        });
    }

    function showHomeView() {
        currentView = 'home';
        document.getElementById('homeView').style.display = 'block';
        document.getElementById('savedView').style.display = 'none';
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        const homeNav = document.querySelector('.nav-item[data-nav="home"]');
        if(homeNav) homeNav.classList.add('active');
        if (carouselInterval) clearInterval(carouselInterval);
        startCarouselScroll();
        applyCategoryFilter();
    }

    function showSavedView() {
        currentView = 'saved';
        document.getElementById('homeView').style.display = 'none';
        document.getElementById('savedView').style.display = 'block';
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        const savedNav = document.querySelector('.nav-item[data-nav="saved"]');
        if(savedNav) savedNav.classList.add('active');
        if (scrollObserver) scrollObserver.disconnect();
        if (carouselInterval) clearInterval(carouselInterval);
        carouselInterval = null;
        renderSavedArticles();
    }

    // ========== EVENT LISTENERS ==========
    document.querySelectorAll('.cat-pill').forEach(pill => pill.addEventListener('click', () => switchCategory(pill.dataset.cat)));
    const themeSwitch = document.getElementById('themeSwitch');
    if(themeSwitch) {
        themeSwitch.addEventListener('change', (e) => { document.body.classList.toggle('dark', e.target.checked); localStorage.setItem('blue_theme', e.target.checked ? 'dark' : 'light'); });
        if(localStorage.getItem('blue_theme') === 'dark') { document.body.classList.add('dark'); themeSwitch.checked = true; }
    }

    const sideMenu = document.getElementById('sideMenu'), overlayDiv = document.getElementById('overlay');
    function closeMenu() { sideMenu?.classList.remove('open'); overlayDiv?.classList.remove('show'); }
    document.getElementById('hamburgerBtn')?.addEventListener('click', () => { sideMenu?.classList.add('open'); overlayDiv?.classList.add('show'); });
    document.getElementById('closeMenuBtn')?.addEventListener('click', closeMenu);
    if(overlayDiv) overlayDiv.onclick = closeMenu;

    const menuHome = document.getElementById('menuHome');
    const menuTrending = document.getElementById('menuTrending');
    const menuNotification = document.getElementById('menuNotification');
    const menuSearch = document.getElementById('menuSearch');
    const menuAbout = document.getElementById('menuAbout');
    const menuSaved = document.getElementById('menuSaved');
    const viewSavedBtn = document.getElementById('viewSavedBtn');
    if(menuHome) menuHome.addEventListener('click', () => { showHomeView(); switchCategory('all'); closeMenu(); });
    if(menuTrending) menuTrending.addEventListener('click', () => { document.getElementById('trendingCarousel')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); closeMenu(); });
    if(menuNotification) menuNotification.addEventListener('click', () => { alert("🔔 Notifications coming soon."); closeMenu(); });
    if(menuSearch) menuSearch.addEventListener('click', () => { closeMenu(); document.getElementById('searchInput')?.focus(); });
    if(menuAbout) menuAbout.addEventListener('click', () => { alert("Amimo Blue v19.0\n✅ True infinite scroll for ALL categories\n✅ Top News also infinite\n✅ Reload button works\n✅ Mixed articles from 15+ sources"); closeMenu(); });
    if(menuSaved) menuSaved.addEventListener('click', () => { showSavedView(); closeMenu(); });
    if(viewSavedBtn) viewSavedBtn.onclick = () => showSavedView();

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    if(searchBtn) searchBtn.addEventListener('click', () => { const q = searchInput.value.trim(); if(q) redirectToSearchPage(q); });
    if(searchInput) searchInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') searchBtn?.click(); });

    const searchZone = document.getElementById('searchZone');
    if(searchInput) searchInput.addEventListener('focus', () => {
        if(!searchZone) return;
        searchZone.classList.add('floating-top');
        document.body.style.paddingTop = '80px';
        const removeFloat = (e) => { if(!searchZone.contains(e.target)) { searchZone.classList.remove('floating-top'); document.body.style.paddingTop = '0px'; document.removeEventListener('click', removeFloat); } };
        setTimeout(() => document.addEventListener('click', removeFloat), 50);
    });

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => { if (btn.dataset.nav === 'home') showHomeView(); else if (btn.dataset.nav === 'saved') showSavedView(); });
    });

    function redirectToSearchPage(q) {
        storeAllArticlesForSearch();
        window.location.href = `seachresult.html?q=${encodeURIComponent(q)}`;
    }

    // ========== START ==========
    detectLocation().then(() => { loadAllFeeds(); });
})();