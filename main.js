// ===================== MAIN.JS - Amimo Discovery (Updated: Grouped All View, Share Icon, Reduced Card Height) =====================
(function() {
    // ========== RSS FEEDS (EXPANDED - same as before) ==========
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
        { name: "South China Morning Post", url: "https://www.scmp.com/rss/2/feed", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=SCMP" },
        { name: "The Japan Times", url: "https://www.japantimes.co.jp/feed/", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=JapanTimes" },
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
        { name: "Entertainment Weekly", url: "https://ew.com/feed/", category: "Entertainment", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=EW" },
        { name: "BBC Politics", url: "https://feeds.bbci.co.uk/news/politics/rss.xml", category: "Politics", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Politics" },
        { name: "Politico", url: "https://www.politico.com/rss/politics.xml", category: "Politics", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Politico" },
        { name: "The Hill", url: "https://thehill.com/feed/", category: "Politics", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=TheHill" },
        { name: "Bloomberg", url: "https://feeds.bloomberg.com/markets/news.rss", category: "Business", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Bloomberg" },
        { name: "CNBC", url: "https://www.cnbc.com/id/100003114/device/rss/rss.html", category: "Business", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CNBC" },
        { name: "Financial Times", url: "https://www.ft.com/?format=rss", category: "Business", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=FT" },
        { name: "Business Insider", url: "https://www.businessinsider.com/rss", category: "Business", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=BI" },
        { name: "CNN Health", url: "https://rss.cnn.com/rss/edition_health.rss", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Health" },
        { name: "WebMD", url: "https://feeds.webmd.com/rss/rss.aspx", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=WebMD" },
        { name: "Medical News Today", url: "https://www.medicalnewstoday.com/feeds/rss", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=MNT" },
        { name: "Healthline", url: "https://www.healthline.com/feeds/rss", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Healthline" }
    ];

    const localMap = new Map();
    localMap.set("ZM", [ 
        { name: "Lusaka Times", url: "https://www.lusakatimes.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Lusaka" },
        { name: "Zambia Daily Mail", url: "https://www.daily-mail.co.zm/?feed=rss2", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Zambia+Mail" },
        { name: "Zambian Football", url: "https://zambianfootball.co.zm/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Zambia+Sports" }
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
        { name: "Sydney Morning Herald", url: "https://www.smh.com.au/rss/feed", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=SMH" },
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

    // ========== GLOBALS ==========
    let allArticles = [];
    let currentCategory = "all";
    let userCountry = "ZM";
    let userCountryName = "World";
    let currentFiltered = [];
    let displayLimit = 30;
    let isLoadingMore = false;
    let isLoadingEndless = false;
    let savedArticles = JSON.parse(localStorage.getItem("amimo_saved") || "[]");
    let scrollObserver = null;
    let sentinelElement = document.getElementById('loadSentinel');
    let retryContainer = null;
    let carouselInterval = null;
    let autoScrollActive = true;
    let currentView = "home";
    let hasMoreArticles = true;

    // ========== HELPER FUNCTIONS ==========
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
        const categoryColors = { 'Politics':'1e3a8a', 'Technology':'0f172a', 'Sports':'b91c1c', 'Entertainment':'831843', 'Business':'065f46', 'Health':'0e7c7c', 'Local':'4c1d95', 'World':'1e40af' };
        const color = categoryColors[category] || '3b82f6';
        return `https://placehold.co/800x450/${color}/white?text=${encodeURIComponent(item.source || category)}`;
    }

    // Share function
    async function shareArticle(title, url) {
        if (navigator.share) {
            try {
                await navigator.share({ title: title, url: url });
            } catch (err) { console.log('Share cancelled'); }
        } else {
            navigator.clipboard.writeText(url);
            showToast('Link copied to clipboard!');
        }
    }

    // ========== FETCH FUNCTIONS ==========
    async function fetchFeed(feedCfg) {
        try {
            const resp = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedCfg.url)}`);
            const data = await resp.json();
            if(data.status !== 'ok') return [];
            return data.items.slice(0, 12).map(item => {
                let img = feedCfg.imgFallback;
                if(item.thumbnail && item.thumbnail.startsWith('http')) img = item.thumbnail;
                else if(item.enclosure && item.enclosure.link) img = item.enclosure.link;
                else if(item.description) {
                    const match = item.description.match(/<img[^>]+src="([^">]+)"/);
                    if(match && match[1].startsWith('http')) img = match[1];
                }
                return {
                    title: item.title, link: item.link, pubDate: item.pubDate,
                    description: (item.description||"").replace(/<[^>]*>/g, '').substring(0, 200),
                    source: feedCfg.name, category: feedCfg.category, imageUrl: img
                };
            });
        } catch(e) { return []; }
    }

    async function fetchMoreForCategory(category) {
        let feedsToFetch = [];
        if (category === 'all') {
            const worldFeeds = WORLD_FEEDS.filter(f => f.category !== 'Local');
            const localFeeds = localMap.get(userCountry) || [];
            feedsToFetch = [...worldFeeds, ...localFeeds];
        } else if (category === 'Local') {
            feedsToFetch = localMap.get(userCountry) || [];
        } else {
            feedsToFetch = WORLD_FEEDS.filter(f => f.category === category);
        }
        if (feedsToFetch.length === 0) feedsToFetch = WORLD_FEEDS.slice(0, 15);
        
        const results = await Promise.all(feedsToFetch.slice(0, 15).map(f => fetchFeed(f)));
        let newArticles = [];
        results.forEach(r => newArticles.push(...r));
        const existingLinks = new Set(allArticles.map(a => a.link));
        const uniqueNew = newArticles.filter(a => !existingLinks.has(a.link));
        if (uniqueNew.length) {
            uniqueNew.forEach(a => { a.views = generateViews(a.title); });
            allArticles = [...uniqueNew, ...allArticles];
            allArticles.sort((a,b)=> new Date(b.pubDate) - new Date(a.pubDate));
            storeAllArticlesForSearch();
            hasMoreArticles = true;
        } else {
            hasMoreArticles = false;
        }
        return uniqueNew.length;
    }

    function storeAllArticlesForSearch() {
        if (allArticles.length) {
            const searchable = allArticles.map(art => ({ title: art.title, link: art.link, description: art.description, source: art.source }));
            localStorage.setItem('amimoAllArticles', JSON.stringify(searchable));
        }
    }

    function redirectToSearchPage(query) {
        if (!query.trim()) return;
        storeAllArticlesForSearch();
        window.location.href = `seachresult.html?q=${encodeURIComponent(query)}`;
    }

    async function loadAllFeeds() {
        const statusDiv = document.getElementById('statusMsg');
        statusDiv.innerHTML = '<div class="loader"></div> Fetching latest news from 50+ providers...';
        const allFeeds = [...WORLD_FEEDS, ...(localMap.get(userCountry) || [])];
        const results = await Promise.all(allFeeds.map(f => fetchFeed(f)));
        let arts = [];
        results.forEach(r => arts.push(...r));
        const uniqueMap = new Map();
        arts.forEach(a => { if(!uniqueMap.has(a.link)) uniqueMap.set(a.link, a); });
        allArticles = Array.from(uniqueMap.values());
        allArticles.forEach(a => { a.views = generateViews(a.title); });
        allArticles.sort((a,b)=> new Date(b.pubDate) - new Date(a.pubDate));
        statusDiv.innerHTML = `✅ ${allArticles.length} fresh stories ready`;
        storeAllArticlesForSearch();
        applyCategoryFilter();
        renderTrendingCarousel();
        updateSavedCounter();
    }

    // ========== RENDER FUNCTIONS ==========
    function applyCategoryFilter() {
        if (currentCategory === 'all') {
            // For "all" category, we don't use simple filtering; we use grouped rendering
            renderAllCategoryGrouped();
            if (scrollObserver) scrollObserver.disconnect(); // disable infinite scroll for all view
        } else {
            // Normal category filtering
            if (currentCategory === 'Local') currentFiltered = allArticles.filter(a => a.category === 'Local');
            else currentFiltered = allArticles.filter(a => a.category === currentCategory);
            displayLimit = 30;
            renderNewsFeed();
            // Re-enable infinite scroll observer for non-all categories
            if (scrollObserver && sentinelElement && currentView === 'home') {
                scrollObserver.disconnect();
                scrollObserver.observe(sentinelElement);
            }
            if (currentFiltered.length < 40 && !isLoadingMore) setTimeout(() => attemptBackgroundFetch(), 500);
        }
    }

    // New grouped rendering for "all" category
    function renderAllCategoryGrouped() {
        const feedDiv = document.getElementById('newsFeed');
        if (!allArticles.length) {
            feedDiv.innerHTML = '<div style="padding:2rem; text-align:center;">📭 No articles available</div>';
            return;
        }

        // Define categories order (excluding "Local" because we handle it first)
        const categoriesOrder = ['World', 'Politics', 'Technology', 'Sports', 'Entertainment', 'Business', 'Health'];
        
        // Helper to get articles by category (limit)
        function getArticlesByCategory(cat, limit) {
            return allArticles.filter(a => a.category === cat).slice(0, limit);
        }

        let html = '';

        // 1. Local section: 3 articles + Show More button
        const localArticles = getArticlesByCategory('Local', 3);
        if (localArticles.length) {
            html += `<div class="category-section" data-cat="Local">
                        <div class="category-section-title"><i class="fas fa-location-dot"></i> Local News</div>`;
            localArticles.forEach(art => {
                html += renderArticleCard(art);
            });
            html += `<button class="show-more-btn" data-target-cat="Local"><i class="fas fa-chevron-right"></i> Show More Local News</button>
                    </div>`;
        }

        // 2. For each other category: 2-5 articles (random between 2 and 5) + Show More button
        for (let cat of categoriesOrder) {
            const articleCount = Math.floor(Math.random() * 4) + 2; // 2 to 5
            const catArticles = getArticlesByCategory(cat, articleCount);
            if (catArticles.length) {
                html += `<div class="category-section" data-cat="${cat}">
                            <div class="category-section-title"><i class="fas ${getCategoryIcon(cat)}"></i> ${cat}</div>`;
                catArticles.forEach(art => {
                    html += renderArticleCard(art);
                });
                html += `<button class="show-more-btn" data-target-cat="${cat}"><i class="fas fa-chevron-right"></i> Show More ${cat} News</button>
                        </div>`;
            }
        }

        feedDiv.innerHTML = html;
        
        // Attach event listeners to "Show More" buttons
        document.querySelectorAll('.show-more-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetCat = btn.dataset.targetCat;
                if (targetCat) {
                    switchCategory(targetCat);
                }
            });
        });
        
        // Attach save and share events for all cards
        attachSaveEvents();
        attachShareEvents();
    }

    function getCategoryIcon(cat) {
        const icons = {
            'World': 'fa-globe',
            'Politics': 'fa-landmark',
            'Technology': 'fa-microchip',
            'Sports': 'fa-futbol',
            'Entertainment': 'fa-mask',
            'Business': 'fa-chart-line',
            'Health': 'fa-heartbeat',
            'Local': 'fa-location-dot'
        };
        return icons[cat] || 'fa-newspaper';
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
                    <a href="${art.link}" target="_blank" class="btn-primary" style="text-decoration:none;"><i class="fas fa-external-link-alt"></i> Read</a>
                    <button class="btn-save save-btn" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${imgSrc}" data-source="${escapeHtml(art.source)}" data-desc="${escapeHtml(art.description)}">${isSaved ? '✅ Saved' : '💾 Save'}</button>
                    <button class="btn-share share-btn" data-url="${art.link}" data-title="${escapeHtml(art.title)}"><i class="fas fa-share-alt"></i> Share</button>
                </div>
            </div>
        </div>`;
    }

    function renderNewsFeed() {
        if (currentCategory === 'all') {
            renderAllCategoryGrouped();
            return;
        }
        const feedDiv = document.getElementById('newsFeed');
        const toRender = currentFiltered.slice(0, displayLimit);
        if(toRender.length === 0) { 
            feedDiv.innerHTML = '<div style="padding:2rem; text-align:center;">📭 No articles in this category. Pull to refresh or check back later.</div>'; 
            return; 
        }
        let html = '';
        for(let i=0; i<toRender.length; i++) {
            const art = toRender[i];
            html += renderArticleCard(art);
            if((i+1) % 5 === 0 && i+1 < toRender.length) html += `<div class="inline-ad"><i class="fas fa-ad"></i> Advertisement — Support our journalism</div>`;
        }
        feedDiv.innerHTML = html;
        attachSaveEvents();
        attachShareEvents();
    }

    function attachSaveEvents() {
        document.querySelectorAll('.save-btn').forEach(btn => { btn.removeEventListener('click', saveHandler); btn.addEventListener('click', saveHandler); });
    }
    
    function attachShareEvents() {
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.removeEventListener('click', shareHandler);
            btn.addEventListener('click', shareHandler);
        });
    }
    
    function shareHandler(e) {
        const btn = e.currentTarget;
        const url = btn.dataset.url;
        const title = btn.dataset.title;
        shareArticle(title, url);
    }
    
    function saveHandler(e) {
        const btn = e.currentTarget; const link = btn.dataset.link;
        if(!savedArticles.some(s => s.link === link)) {
            savedArticles.push({ title: btn.dataset.title, link, imageUrl: btn.dataset.img, source: btn.dataset.source, description: btn.dataset.desc, savedAt: Date.now() });
            localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
            btn.innerHTML = '✅ Saved'; btn.style.background = '#10b981'; showToast('Saved offline!');
        } else {
            savedArticles = savedArticles.filter(s => s.link !== link);
            localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
            btn.innerHTML = '💾 Save'; btn.style.background = '#2563eb'; showToast('Removed from saved');
        }
        updateSavedCounter();
        if (currentView === 'saved') renderSavedArticles();
        // Refresh current view if in all category to reflect saved status
        if (currentCategory === 'all' && currentView === 'home') renderAllCategoryGrouped();
    }
    
    function updateSavedCounter() { 
        const counter = document.getElementById('savedCounter');
        if(counter) counter.innerText = savedArticles.length; 
    }

    function renderTrendingCarousel() {
        const categories = ['Politics', 'Technology', 'Sports', 'Entertainment', 'Business', 'Health', 'World', 'Local'];
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
                    <h3><a href="${art.link}" target="_blank" style="text-decoration:none;">${escapeHtml(art.title)}</a></h3>
                    <div class="trend-meta"><span><i class="fas fa-globe"></i> ${art.source}</span><span><i class="fas fa-eye"></i> ${formatViews(generateViews(art.title))} views</span></div>
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
                } else {
                    showToast('Already saved');
                }
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

    async function attemptBackgroundFetch() {
        if (isLoadingMore) return;
        isLoadingMore = true;
        try {
            const newCount = await fetchMoreForCategory(currentCategory);
            if (newCount > 0) {
                applyCategoryFilter();
                showToast(`✨ ${newCount} new articles loaded`);
            }
        } catch(e) { console.warn(e); }
        isLoadingMore = false;
    }

    // Infinite scroll for non-all categories
    function clearRetryButton() { if(retryContainer && retryContainer.parentNode) retryContainer.remove(); retryContainer = null; }
    
    function showRetryButton(message, retryCallback) {
        clearRetryButton();
        const wrapper = document.createElement('div');
        wrapper.className = 'end-loader';
        wrapper.innerHTML = `<div><i class="fas fa-exclamation-triangle"></i> ${message}</div><button class="retry-button"><i class="fas fa-sync-alt"></i> Reload More</button>`;
        wrapper.querySelector('.retry-button').onclick = async () => {
            wrapper.innerHTML = '<div class="loader"></div> Fetching...';
            const newCount = await retryCallback();
            if(newCount > 0) { clearRetryButton(); applyCategoryFilter(); showToast(`✅ ${newCount} new articles`); }
            else wrapper.innerHTML = `<div>No new articles found. <button class="retry-button">Retry</button></div>`;
        };
        if(sentinelElement && sentinelElement.parentNode) {
            sentinelElement.parentNode.insertBefore(wrapper, sentinelElement);
            retryContainer = wrapper;
        }
    }

    async function attemptLoadMore() {
        if(isLoadingMore || isLoadingEndless || currentCategory === 'all') return false;
        isLoadingEndless = true;
        showEndSpinner(true);
        let newCount = 0;
        try {
            newCount = await fetchMoreForCategory(currentCategory);
            if(newCount > 0) { 
                applyCategoryFilter(); 
                window.scrollBy({ top: 60, behavior: 'smooth' }); 
                clearRetryButton();
                showToast(`✨ ${newCount} more articles loaded`);
            } else if (hasMoreArticles === false) {
                showRetryButton("End of content. Tap to check for new articles.", async () => await fetchMoreForCategory(currentCategory));
            } else {
                showRetryButton("No more articles at the moment. Tap to refresh.", async () => await fetchMoreForCategory(currentCategory));
            }
        } catch(err) { 
            showRetryButton("Failed to load more. Tap to retry.", async () => await fetchMoreForCategory(currentCategory)); 
        }
        finally { 
            isLoadingEndless = false; 
            showEndSpinner(false); 
        }
        return newCount > 0;
    }

    function showEndSpinner(show) {
        let spinner = document.getElementById('endSpinner');
        if(show && !spinner) { 
            spinner = document.createElement('div'); 
            spinner.id = "endSpinner"; 
            spinner.className = "end-loader"; 
            spinner.innerHTML = '<div class="loader"></div> Loading more articles...'; 
            if(sentinelElement && sentinelElement.parentNode) {
                sentinelElement.parentNode.insertBefore(spinner, sentinelElement); 
            }
        } else if(!show && spinner) spinner.remove();
    }

    function initScrollObserver() {
        if(scrollObserver) scrollObserver.disconnect();
        scrollObserver = new IntersectionObserver(async (entries) => {
            if(entries[0].isIntersecting && !isLoadingMore && !isLoadingEndless && currentView === 'home' && currentCategory !== 'all') {
                if(displayLimit < currentFiltered.length) {
                    isLoadingMore = true;
                    showEndSpinner(true);
                    setTimeout(() => {
                        displayLimit = Math.min(displayLimit + 25, currentFiltered.length);
                        renderNewsFeed();
                        isLoadingMore = false;
                        showEndSpinner(false);
                        if (displayLimit + 10 >= currentFiltered.length) {
                            setTimeout(() => attemptBackgroundFetch(), 200);
                        }
                    }, 150);
                } 
                else if (displayLimit >= currentFiltered.length && !isLoadingEndless) {
                    await attemptLoadMore();
                }
            }
        }, { threshold: 0.1, rootMargin: "0px 0px 200px 0px" });
        if(sentinelElement && currentCategory !== 'all') scrollObserver.observe(sentinelElement);
    }

    // ========== CATEGORY & LOCATION ==========
    function switchCategory(cat) {
        if(currentCategory === cat) return;
        currentCategory = cat;
        // Update active pill
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        const activePill = Array.from(document.querySelectorAll('.cat-pill')).find(p => p.dataset.cat === cat);
        if(activePill) activePill.classList.add('active');
        clearRetryButton();
        hasMoreArticles = true;
        applyCategoryFilter();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Re-init observer for non-all categories
        if (cat !== 'all') {
            initScrollObserver();
        }
    }

    async function detectLocation() {
        try {
            const res = await fetch('https://ipapi.co/json/');
            const d = await res.json();
            if(d.country_code) { 
                userCountry = d.country_code; 
                userCountryName = d.country_name || userCountry; 
            }
        } catch(e) { userCountry="ZM"; userCountryName="Zambia"; }
        const badge = document.getElementById('countryBadge');
        if(badge) badge.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${userCountryName}`;
    }

    // ========== SAVED VIEW ==========
    function renderSavedArticles() {
        const savedDiv = document.getElementById('savedFeed');
        if(!savedDiv) return;
        if(!savedArticles.length) {
            savedDiv.innerHTML = '<div style="padding:2rem;text-align:center;background:var(--card-bg);border-radius:32px;"><i class="fas fa-archive"></i> No saved articles yet. Tap 💾 on any news to store offline.</div>';
            return;
        }
        let html = '';
        savedArticles.forEach(art => {
            html += `<div class="news-card">
                <img class="card-img" src="${art.imageUrl || 'https://placehold.co/800x450/3b82f6/white?text=Saved'}" onerror="this.src='https://placehold.co/400x300/3b82f6/white?text=News'">
                <div class="card-body">
                    <div class="news-title"><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></div>
                    <div class="news-meta"><span class="source-tag"><i class="fas fa-globe"></i> ${escapeHtml(art.source)}</span><span>saved offline</span></div>
                    <div class="news-desc">${escapeHtml(art.description || 'No description')}</div>
                    <div class="action-row" style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
                        <a href="${art.link}" target="_blank" class="btn-primary" style="margin-right: 0.5rem;">Read Original</a>
                        <button class="btn-remove unsave-btn" data-link="${art.link}"><i class="fas fa-trash-alt"></i> Remove</button>
                        <button class="btn-share share-saved-btn" data-url="${art.link}" data-title="${escapeHtml(art.title)}"><i class="fas fa-share-alt"></i> Share</button>
                    </div>
                </div>
            </div>`;
        });
        savedDiv.innerHTML = html;
        document.querySelectorAll('.unsave-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                let link = btn.dataset.link;
                savedArticles = savedArticles.filter(s => s.link !== link);
                localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
                updateSavedCounter();
                renderSavedArticles();
                if (currentView === 'home') {
                    if (currentCategory === 'all') renderAllCategoryGrouped();
                    else renderNewsFeed();
                }
                showToast('Article removed from saved');
            });
        });
        document.querySelectorAll('.share-saved-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                shareArticle(btn.dataset.title, btn.dataset.url);
            });
        });
    }

    // ========== VIEW SWITCHING ==========
    function showHomeView() {
        currentView = 'home';
        const homeDiv = document.getElementById('homeView');
        const savedDiv = document.getElementById('savedView');
        if(homeDiv) homeDiv.style.display = 'block';
        if(savedDiv) savedDiv.style.display = 'none';
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        const homeNav = document.querySelector('.nav-item[data-nav="home"]');
        if(homeNav) homeNav.classList.add('active');
        if (carouselInterval) clearInterval(carouselInterval);
        startCarouselScroll();
        applyCategoryFilter(); // refresh home view with current category
    }

    function showSavedView() {
        currentView = 'saved';
        const homeDiv = document.getElementById('homeView');
        const savedDiv = document.getElementById('savedView');
        if(homeDiv) homeDiv.style.display = 'none';
        if(savedDiv) savedDiv.style.display = 'block';
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
        themeSwitch.addEventListener('change', (e) => { 
            if(e.target.checked) document.body.classList.add('dark'); 
            else document.body.classList.remove('dark'); 
            localStorage.setItem('blue_theme', e.target.checked ? 'dark' : 'light'); 
        });
        if(localStorage.getItem('blue_theme') === 'dark') { 
            document.body.classList.add('dark'); 
            themeSwitch.checked = true; 
        }
    }

    const sideMenu = document.getElementById('sideMenu'), overlayDiv = document.getElementById('overlay');
    function closeMenu() { 
        if(sideMenu) sideMenu.classList.remove('open'); 
        if(overlayDiv) overlayDiv.classList.remove('show'); 
    }
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    if(hamburgerBtn) hamburgerBtn.onclick = () => { if(sideMenu) sideMenu.classList.add('open'); if(overlayDiv) overlayDiv.classList.add('show'); };
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    if(closeMenuBtn) closeMenuBtn.onclick = closeMenu;
    if(overlayDiv) overlayDiv.onclick = closeMenu;
    
    const menuHome = document.getElementById('menuHome');
    const menuTrending = document.getElementById('menuTrending');
    const menuNotification = document.getElementById('menuNotification');
    const menuSearch = document.getElementById('menuSearch');
    const menuAbout = document.getElementById('menuAbout');
    const menuSaved = document.getElementById('menuSaved');
    const viewSavedBtn = document.getElementById('viewSavedBtn');
    
    if(menuHome) menuHome.addEventListener('click', () => { showHomeView(); switchCategory('all'); closeMenu(); });
    if(menuTrending) menuTrending.addEventListener('click', () => { const trending = document.getElementById('trendingCarousel'); if(trending) trending.scrollIntoView({ behavior: 'smooth', block: 'start' }); closeMenu(); });
    if(menuNotification) menuNotification.addEventListener('click', () => { alert("🔔 Notifications coming soon."); closeMenu(); });
    if(menuSearch) menuSearch.addEventListener('click', () => { closeMenu(); const search = document.getElementById('searchInput'); if(search) search.focus(); });
    if(menuAbout) menuAbout.addEventListener('click', () => { alert("Amimo Blue v12.0\n✨ Grouped All view\n🔁 Show More buttons\n📱 Share icon on cards\n🏆 Local first"); closeMenu(); });
    if(menuSaved) menuSaved.addEventListener('click', () => { showSavedView(); closeMenu(); });
    if(viewSavedBtn) viewSavedBtn.onclick = () => showSavedView();

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    if(searchBtn) searchBtn.addEventListener('click', () => { const q = searchInput.value.trim(); if(q) redirectToSearchPage(q); });
    if(searchInput) searchInput.addEventListener('keypress', (e) => { if(e.key === 'Enter' && searchBtn) searchBtn.click(); });

    const searchZone = document.getElementById('searchZone');
    function enableFloating() {
        if(!searchZone) return;
        searchZone.classList.add('floating-top');
        document.body.style.paddingTop = '80px';
        const removeFloat = (e) => { 
            if(!searchZone.contains(e.target)) { 
                searchZone.classList.remove('floating-top'); 
                document.body.style.paddingTop = '0px'; 
                document.removeEventListener('click', removeFloat); 
            } 
        };
        setTimeout(() => document.addEventListener('click', removeFloat), 50);
        if(searchInput) searchInput.focus();
    }
    if(searchInput) searchInput.addEventListener('focus', enableFloating);

    // Bottom bar navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.nav === 'home') showHomeView();
            else if (btn.dataset.nav === 'saved') showSavedView();
        });
    });

    // ========== INIT ==========
    detectLocation().then(() => {
        loadAllFeeds().then(() => {
            initScrollObserver();
        });
    });
})();<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>Amimo Discovery • Blue Horizon</title>
    <!-- External Fonts & Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="manifest" href="manifest.json">
    <link rel="icon" type="image/svg+xml" href="favicon.png">
    <!-- Main CSS -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="main-header">
    <div class="logo-area">
        <button class="hamburger" id="hamburgerBtn"><i class="fas fa-bars"></i></button>
        <div class="logo"><i class="fas fa-cloud-moon"></i> Amimo Discovery</div>
    </div>
    <div class="location-badge" id="countryBadge"><i class="fas fa-map-marker-alt"></i> locating...</div>
</div>

<div class="search-zone" id="searchZone">
    <div class="search-wrapper">
        <i class="fas fa-search" style="color: var(--accent-blue);"></i>
        <input type="text" id="searchInput" placeholder="Search news... click to float up">
        <button id="searchBtn"><i class="fas fa-search"></i></button>  <!-- Changed to icon only -->
    </div>
</div>
<div id="loadingProgress" class="loading-progress"></div>

<!-- HOME VIEW (entire website content) -->
<div id="homeView">
    <div class="categories-row" id="categoryScroll">
        <div class="cat-pill active" data-cat="all"><i class="fas fa-globe"></i> All</div>
        <div class="cat-pill" data-cat="Politics"><i class="fas fa-landmark"></i> Politics</div>
        <div class="cat-pill" data-cat="Entertainment"><i class="fas fa-mask"></i> Entertainment</div>
        <div class="cat-pill" data-cat="Technology"><i class="fas fa-microchip"></i> Tech</div>
        <div class="cat-pill" data-cat="Sports"><i class="fas fa-futbol"></i> Sports</div>
        <div class="cat-pill" data-cat="Business"><i class="fas fa-chart-line"></i> Business</div>
        <div class="cat-pill" data-cat="Health"><i class="fas fa-heartbeat"></i> Health</div>
        <div class="cat-pill" data-cat="Local"><i class="fas fa-location-dot"></i> Local</div>
    </div>
    <div class="ad-banner" id="globalAdBanner"><i class="fas fa-ad"></i> Advertisement · Your banner could be here · Support Amimo</div>
    <div class="trending-section" id="trendingSection">
        <div class="trending-title"><i class="fas fa-fire"></i> Trending Now</div>
        <div class="trending-carousel" id="trendingCarousel"></div>
    </div>
    <div id="newsFeedContainer" style="position: relative;">
        <div id="statusMsg" style="text-align:center; padding:1rem;"><div class="loader"></div> Loading fresh news...</div>
        <div id="newsFeed" class="news-feed"></div>
        <div id="loadSentinel" style="height: 20px;"></div>
    </div>
</div>

<!-- SAVED VIEW (only cached articles) -->
<div id="savedView" style="display: none;">
    <div style="padding: 1rem; background: var(--card-bg); margin: 1rem 1.2rem; border-radius: 32px; text-align: center;">
        <i class="fas fa-bookmark"></i> <strong>Your offline library</strong> — articles stored locally
    </div>
    <div id="savedFeedContainer">
        <div id="savedFeed" class="saved-feed"></div>
    </div>
</div>

<footer>
    <i class="fas fa-bookmark"></i> Offline saved · <span id="savedCounter">0</span> saved · <button id="viewSavedBtn" style="background: none; border: none; color: var(--accent-glow); cursor: pointer;">📚 View saved</button><br>
    © Amimo Blue · Sticky categories · Infinite scroll
</footer>

<!-- BOTTOM TAB BAR (home & saved) -->
<div class="bottom-nav" id="bottomNav">
    <button class="nav-item active" data-nav="home"><i class="fas fa-home"></i><span>Home</span></button>
    <button class="nav-item" data-nav="saved"><i class="fas fa-save"></i><span>Saved</span></button>
</div>

<div class="overlay" id="overlay"></div>
<div class="side-menu" id="sideMenu">
    <div style="display: flex; justify-content: space-between;">
        <h3><i class="fas fa-bars"></i> Menu</h3>
        <button id="closeMenuBtn" style="background:none; border:none; font-size:1.8rem; cursor:pointer;">&times;</button>
    </div>
    <div class="menu-item" id="menuHome"><i class="fas fa-home"></i> Home (All News)</div>
    <div class="menu-item" id="menuTrending"><i class="fas fa-fire"></i> Trending</div>
    <div class="menu-item" id="menuNotification"><i class="fas fa-bell"></i> Notifications <span class="notification-badge">3</span></div>
    <div class="menu-item" id="menuSearch"><i class="fas fa-search"></i> Search Focus</div>
    <div class="menu-item" id="menuAbout"><i class="fas fa-info-circle"></i> About Amimo</div>
    <div class="theme-toggle">
        <span><i class="fas fa-moon"></i> Dark / Light</span>
        <label><input type="checkbox" id="themeSwitch"> <span style="margin-left:8px;">🌓</span></label>
    </div>
    <div class="menu-item" id="menuSaved"><i class="fas fa-database"></i> Saved Articles (offline)</div>
    <div><small><i class="fas fa-info-circle"></i> Tap "Save" on any article → stored offline.</small></div>
</div>

<!-- Main JavaScript -->
<script src="main.js"></script>
<script>
    // Service Worker registration (preserved)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', async () => {
            try {
                const registration = await navigator.serviceWorker.register('sw.js');
                console.log('SW registered');
                if ('Notification' in window) await Notification.requestPermission();
            } catch(err) { console.log('SW failed', err); }
        });
    }
</script>
</body>
</html>
