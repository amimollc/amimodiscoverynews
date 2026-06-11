// ===================== MAIN.JS - Amimo Discovery (Top News Mixed Sources + Continuous Infinite Scroll) =====================
(function() {
    // ========== RSS FEEDS (unchanged) ==========
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
        { name: "Harvard Health", url: "https://www.health.harvard.edu/feed", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Harvard+Health" }
    ];

    // Local feeds
    const localMap = new Map();
    localMap.set("ZM", [
        { name: "Lusaka Times", url: "https://www.lusakatimes.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Lusaka" },
        { name: "Zambia Daily Mail", url: "https://www.daily-mail.co.zm/?feed=rss2", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Zambia+Mail" }
    ]);
    localMap.set("US", [
        { name: "CNN US", url: "https://rss.cnn.com/rss/edition_us.rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=US+News" },
        { name: "NY Times", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=NYT" }
    ]);
    localMap.set("GB", [
        { name: "BBC UK", url: "https://feeds.bbci.co.uk/news/uk/rss.xml", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=BBC+UK" }
    ]);
    localMap.set("IN", [
        { name: "Times of India", url: "https://timesofindia.indiatimes.com/rssfeedmostrecent.cms", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=TOI" }
    ]);

    // ========== GLOBALS ==========
    let allArticles = [];
    let currentCategory = "all";
    let userCountry = null;
    let userCountryName = "World";
    let savedArticles = JSON.parse(localStorage.getItem("amimo_saved") || "[]");
    let scrollObserver = null;
    let sentinelElement = document.getElementById('loadSentinel');
    let carouselInterval = null;
    let autoScrollActive = true;
    let currentView = "home";
    let isLoading = false;
    let currentFeedIndex = 0;
    let currentFeedsList = [];
    let hasMoreFeeds = true;
    let batchSize = 2;
    let allFlatArticles = [];
    let allFlatIndex = 0;

    // Top News
    let topNewsFeeds = [
        { name: "Google News Top Stories", url: "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=Google+News" },
        { name: "Yahoo News", url: "https://www.yahoo.com/news/rss", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=Yahoo+News" },
        { name: "Fox News", url: "https://moxie.foxnews.com/google-publisher/latest.xml", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=Fox+News" },
        { name: "NPR", url: "https://feeds.npr.org/1001/rss.xml", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=NPR" },
        { name: "ABC News", url: "https://abcnews.go.com/abcnews/topstories", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=ABC+News" },
        { name: "CBS News", url: "https://www.cbsnews.com/latest/rss/main", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=CBS+News" },
        { name: "NBC News", url: "https://feeds.nbcnews.com/nbcnews/public/news", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=NBC+News" },
        { name: "USA Today", url: "https://www.usatoday.com/rss/news", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=USA+Today" },
        { name: "The Guardian Top Stories", url: "https://www.theguardian.com/world/rss", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=Guardian" },
        { name: "Reuters Top News", url: "https://www.reutersagency.com/feed/?best-topics=top-news&post_type=best", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=Reuters" },
        { name: "Al Jazeera Top", url: "https://www.aljazeera.com/xml/rss/all.xml", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=Al+Jazeera" },
        { name: "BBC Top Stories", url: "https://feeds.bbci.co.uk/news/rss.xml", category: "Top", imgFallback: "https://placehold.co/800x450/f59e0b/white?text=BBC+Top" }
    ];
    let topNewsArticles = [];
    let topNewsLimit = 5;
    let isLoadingTopNews = false;
    let topNewsObserver = null;

    // Ad counter for unique IDs
    let adCounter = 0;

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
        if (navigator.share) {
            try { await navigator.share({ title: title, url: url }); } catch(e) {}
        } else {
            navigator.clipboard.writeText(url);
            showToast('Link copied to clipboard!');
        }
    }

    // ========== FETCH FEED ==========
    async function fetchSingleFeed(feedCfg) {
        try {
            const fresh = Date.now();
            const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedCfg.url)}&_fresh=${fresh}`;
            const resp = await fetch(url, { cache: 'no-store', headers: { 'Cache-Control': 'no-cache' } });
            const data = await resp.json();
            if(data.status !== 'ok') return [];
            return data.items.slice(0, 8).map(item => {
                let img = feedCfg.imgFallback;
                if(item.thumbnail && item.thumbnail.startsWith('http')) img = item.thumbnail;
                else if(item.enclosure && item.enclosure.link && item.enclosure.link.match(/\.(jpg|jpeg|png|gif|webp)/i)) img = item.enclosure.link;
                else if(item.description) {
                    const match = item.description.match(/<img[^>]+src=["']([^"']+)["']/i);
                    if(match && match[1].startsWith('http')) img = match[1];
                }
                return {
                    title: item.title, link: item.link, pubDate: item.pubDate,
                    description: (item.description||"").replace(/<[^>]*>/g, '').substring(0, 200),
                    source: feedCfg.name, category: feedCfg.category, imageUrl: img,
                    views: generateViews(item.title)
                };
            });
        } catch(e) { return []; }
    }

    async function fetchMoreArticles(useFlat = false) {
        if (isLoading || !hasMoreFeeds) return false;
        isLoading = true;
        showEndSpinner(true);
        const nextFeeds = currentFeedsList.slice(currentFeedIndex, currentFeedIndex + batchSize);
        if (nextFeeds.length === 0) {
            hasMoreFeeds = false;
            isLoading = false;
            showEndSpinner(false);
            setTimeout(() => {
                if (currentFeedIndex >= currentFeedsList.length && hasMoreFeeds === false) {
                    // Optionally, you could re-fetch or just keep false
                }
            }, 30000);
            return false;
        }
        const results = await Promise.all(nextFeeds.map(f => fetchSingleFeed(f)));
        let newArticles = [];
        results.forEach(r => newArticles.push(...r));
        const existingLinks = new Set(allArticles.map(a => a.link));
        const uniqueNew = newArticles.filter(a => !existingLinks.has(a.link));
        if (uniqueNew.length) {
            if (useFlat) {
                allFlatArticles.push(...uniqueNew);
            } else {
                allArticles.push(...uniqueNew);
            }
            currentFeedIndex += batchSize;
            renderNewsFeed();
            showToast(`📰 ${uniqueNew.length} new articles`);
        }
        isLoading = false;
        showEndSpinner(false);
        return uniqueNew.length > 0;
    }

    function showEndSpinner(show) {
        let spinner = document.getElementById('endSpinner');
        if(show && !spinner) {
            spinner = document.createElement('div');
            spinner.id = "endSpinner";
            spinner.className = "end-loader";
            spinner.innerHTML = '<div class="loader"></div> Loading more...';
            if(sentinelElement && sentinelElement.parentNode) {
                sentinelElement.parentNode.insertBefore(spinner, sentinelElement);
            }
        } else if(!show && spinner) spinner.remove();
    }

    // ========== RENDER FUNCTIONS ==========
    function renderNewsFeed() {
        const feedDiv = document.getElementById('newsFeed');
        if (currentCategory === 'all') {
            renderAllCategoryGrouped();
            return;
        }
        const toRender = allArticles.filter(a => a.category === currentCategory);
        if(toRender.length === 0) {
            feedDiv.innerHTML = '<div style="padding:2rem; text-align:center;">📭 Loading articles...</div>';
            return;
        }
        let html = '';
        for(let i=0; i<toRender.length; i++) {
            const art = toRender[i];
            html += renderArticleCard(art);
            if((i+1) % 5 === 0 && i+1 < toRender.length) {
                adCounter++;
                html += `<div class="inline-ad" data-ad-id="ad-${adCounter}"><i class="fas fa-ad"></i> Advertisement — Support Amimo</div>`;
            }
        }
        feedDiv.innerHTML = html;
        attachSaveEvents();
        attachShareEvents();
    }

    function renderAllCategoryGrouped() {
        const feedDiv = document.getElementById('newsFeed');
        const categoriesOrder = ['Local', 'World', 'Politics', 'Technology', 'Sports', 'Entertainment', 'Business', 'Health'];
        let html = '';
        for (let cat of categoriesOrder) {
            const catArticles = allArticles.filter(a => a.category === cat).slice(0, 10);
            if (catArticles.length > 0) {
                html += `<div class="category-section" data-cat="${cat}">
                            <div class="category-section-title"><i class="fas ${getCategoryIcon(cat)}"></i> ${cat}</div>`;
                catArticles.forEach(art => { html += renderArticleCard(art); });
                html += `<button class="show-more-btn" data-target-cat="${cat}"><i class="fas fa-chevron-right"></i> Show More ${cat} News</button>
                        </div>`;
            }
        }
        // Append flat infinite scroll section
        if (allFlatArticles.length > 0 && allFlatIndex < allFlatArticles.length) {
            html += `<div class="category-section"><div class="category-section-title"><i class="fas fa-infinity"></i> More News</div>`;
            const toShow = allFlatArticles.slice(0, allFlatIndex + 10);
            for (let i = allFlatIndex; i < toShow.length; i++) {
                html += renderArticleCard(toShow[i]);
            }
            allFlatIndex = toShow.length;
            html += `</div>`;
        }
        feedDiv.innerHTML = html;
        document.querySelectorAll('.show-more-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetCat = btn.dataset.targetCat;
                if (targetCat) switchCategory(targetCat);
            });
        });
        attachSaveEvents();
        attachShareEvents();
    }

    function getCategoryIcon(cat) {
        const icons = { 'Local':'fa-location-dot', 'World':'fa-globe', 'Politics':'fa-landmark', 'Technology':'fa-microchip', 'Sports':'fa-futbol', 'Entertainment':'fa-mask', 'Business':'fa-chart-line', 'Health':'fa-heartbeat' };
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
                    <a href="${art.link}" target="_blank" class="btn-primary"><i class="fas fa-external-link-alt"></i> Read</a>
                    <button class="btn-save save-btn" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${imgSrc}" data-source="${escapeHtml(art.source)}" data-desc="${escapeHtml(art.description)}">${isSaved ? '✅ Saved' : '💾 Save'}</button>
                    <button class="btn-share share-btn" data-url="${art.link}" data-title="${escapeHtml(art.title)}"><i class="fas fa-share-alt"></i> Share</button>
                </div>
            </div>
        </div>`;
    }

    function attachSaveEvents() {
        document.querySelectorAll('.save-btn').forEach(btn => { btn.removeEventListener('click', saveHandler); btn.addEventListener('click', saveHandler); });
    }
    function attachShareEvents() {
        document.querySelectorAll('.share-btn').forEach(btn => { btn.removeEventListener('click', shareHandler); btn.addEventListener('click', shareHandler); });
    }
    function shareHandler(e) { shareArticle(e.currentTarget.dataset.title, e.currentTarget.dataset.url); }
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
        if (currentCategory === 'all' && currentView === 'home') renderAllCategoryGrouped();
    }
    function updateSavedCounter() { document.getElementById('savedCounter').innerText = savedArticles.length; }

    // ========== INFINITE SCROLL OBSERVER ==========
    function initScrollObserver() {
        if(scrollObserver) scrollObserver.disconnect();
        scrollObserver = new IntersectionObserver(async (entries) => {
            if(entries[0].isIntersecting && !isLoading && currentView === 'home' && hasMoreFeeds) {
                if (currentCategory === 'all') {
                    if (allFlatIndex < allFlatArticles.length) {
                        renderAllCategoryGrouped();
                    } else if (hasMoreFeeds && currentFeedIndex < currentFeedsList.length) {
                        await fetchMoreArticles(true);
                    }
                } else {
                    await fetchMoreArticles(false);
                }
            }
        }, { threshold: 0.3, rootMargin: "0px 0px 300px 0px" });
        if(sentinelElement) scrollObserver.observe(sentinelElement);
    }

    // ========== CATEGORY SWITCHING ==========
    async function switchCategory(cat) {
        if(currentCategory === cat) return;
        currentCategory = cat;
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        const activePill = Array.from(document.querySelectorAll('.cat-pill')).find(p => p.dataset.cat === cat);
        if(activePill) activePill.classList.add('active');
        
        currentFeedIndex = 0;
        hasMoreFeeds = true;
        isLoading = false;
        
        if (cat === 'all') {
            allFlatArticles = [];
            allFlatIndex = 0;
            const allFeeds = [...WORLD_FEEDS];
            const localFeeds = localMap.get(userCountry) || [];
            if (localFeeds.length) allFeeds.push(...localFeeds);
            currentFeedsList = allFeeds;
            await fetchMoreArticles(false);
            while (allArticles.filter(a => a.category !== 'Local' && a.category !== 'World').length < 80 && currentFeedIndex < currentFeedsList.length) {
                await fetchMoreArticles(false);
            }
            renderAllCategoryGrouped();
            if (currentFeedIndex < currentFeedsList.length) {
                await fetchMoreArticles(true);
            }
        } else {
            let feeds = [];
            if (cat === 'Local') {
                let localFeeds = localMap.get(userCountry) || [];
                if (localFeeds.length === 0 && userCountry) {
                    const googleUrl = `https://news.google.com/rss?hl=en-${userCountry}&gl=${userCountry}&ceid=${userCountry}:en`;
                    localFeeds = [{ name: `Google News ${userCountryName}`, url: googleUrl, category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Local" }];
                }
                if (localFeeds.length === 0) localFeeds = WORLD_FEEDS.slice(0, 5);
                feeds = localFeeds;
            } else {
                feeds = WORLD_FEEDS.filter(f => f.category === cat);
                if (feeds.length === 0) feeds = WORLD_FEEDS.slice(0, 10);
            }
            currentFeedsList = feeds;
            allArticles = [];
            renderNewsFeed();
            await fetchMoreArticles(false);
        }
        initScrollObserver();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ========== LOCATION DETECTION ==========
    async function detectLocation() {
        const badge = document.getElementById('countryBadge');
        badge.innerHTML = `<i class="fas fa-map-marker-alt"></i> detecting...`;
        try {
            const res = await fetch('https://ipapi.co/json/');
            if (res.ok) {
                const d = await res.json();
                if (d.country_code) {
                    userCountry = d.country_code;
                    userCountryName = d.country_name || userCountry;
                }
            }
        } catch(e) { console.log("Location detection failed"); }
        if (!userCountry) {
            userCountry = null;
            userCountryName = "World";
        }
        badge.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${userCountryName}`;
    }

    // ========== TOP NEWS (UPDATED: SHUFFLED FOR MIXED SOURCES) ==========
    async function fetchTopNewsFeed(feedCfg) {
        try {
            const fresh = Date.now();
            const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedCfg.url)}&_fresh=${fresh}`;
            const resp = await fetch(url, { cache: 'no-store' });
            const data = await resp.json();
            if(data.status !== 'ok') return [];
            return data.items.slice(0, 8).map(item => {
                let img = feedCfg.imgFallback;
                if(item.thumbnail && item.thumbnail.startsWith('http')) img = item.thumbnail;
                else if(item.description) {
                    const match = item.description.match(/<img[^>]+src=["']([^"']+)["']/i);
                    if(match && match[1].startsWith('http')) img = match[1];
                }
                return {
                    title: item.title, link: item.link, pubDate: item.pubDate,
                    description: (item.description||"").replace(/<[^>]*>/g, '').substring(0, 200),
                    source: feedCfg.name, category: "Top", imageUrl: img,
                    views: generateViews(item.title)
                };
            });
        } catch(e) { return []; }
    }
    async function loadTopNews(loadMore = false) {
        if (isLoadingTopNews) return;
        isLoadingTopNews = true;
        const container = document.getElementById('topNewsContainer');
        if (!container) { isLoadingTopNews = false; return; }
        if (!loadMore) {
            topNewsArticles = [];
            const results = await Promise.all(topNewsFeeds.map(f => fetchTopNewsFeed(f)));
            results.forEach(r => topNewsArticles.push(...r));
            const uniqueMap = new Map();
            topNewsArticles.forEach(a => { if(!uniqueMap.has(a.link)) uniqueMap.set(a.link, a); });
            topNewsArticles = Array.from(uniqueMap.values());
            // --- SHUFFLE to mix articles from different sources ---
            for (let i = topNewsArticles.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [topNewsArticles[i], topNewsArticles[j]] = [topNewsArticles[j], topNewsArticles[i]];
            }
            topNewsLimit = 5;
        } else {
            topNewsLimit += 5;
        }
        renderTopNews();
        isLoadingTopNews = false;
        setupTopNewsInfiniteScroll();
    }
    function renderTopNews() {
        const container = document.getElementById('topNewsContainer');
        if (!container) return;
        if (!topNewsArticles.length) { container.style.display = 'none'; return; }
        container.style.display = 'block';
        const toShow = topNewsArticles.slice(0, topNewsLimit);
        let html = `<div class="top-news-section"><div class="top-news-title"><i class="fas fa-chart-line"></i> 🔥 Top News</div><div class="top-news-grid">`;
        toShow.forEach(art => {
            const isSaved = savedArticles.some(s => s.link === art.link);
            const formattedDate = new Date(art.pubDate).toLocaleDateString(undefined, { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
            const imgSrc = getImageUrl(art, art.category);
            html += `<div class="news-card"><img class="card-img" src="${imgSrc}" onerror="this.src='https://placehold.co/400x300/f59e0b/white?text=Top'"><div class="card-body"><div class="news-title"><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></div><div class="news-meta"><span class="source-tag"><i class="fas fa-globe"></i> ${escapeHtml(art.source)}</span><span><i class="far fa-calendar-alt"></i> ${formattedDate}</span><span><i class="fas fa-eye"></i> ${formatViews(art.views)}</span></div><div class="news-desc">${escapeHtml(art.description)}</div><div class="action-row"><a href="${art.link}" target="_blank" class="btn-primary">Read</a><button class="btn-save save-top-btn" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${imgSrc}" data-source="${escapeHtml(art.source)}" data-desc="${escapeHtml(art.description)}">${isSaved ? '✅ Saved' : '💾 Save'}</button><button class="btn-share share-top-btn" data-url="${art.link}" data-title="${escapeHtml(art.title)}"><i class="fas fa-share-alt"></i> Share</button></div></div></div>`;
        });
        html += `</div>`;
        if (topNewsLimit < topNewsArticles.length) html += `<div id="topNewsLoadMoreSentinel" style="height: 10px;"></div>`;
        html += `</div>`;
        container.innerHTML = html;
        document.querySelectorAll('.save-top-btn').forEach(btn => btn.addEventListener('click', saveHandler));
        document.querySelectorAll('.share-top-btn').forEach(btn => btn.addEventListener('click', shareHandler));
    }
    function setupTopNewsInfiniteScroll() {
        if (topNewsObserver) topNewsObserver.disconnect();
        const sentinel = document.getElementById('topNewsLoadMoreSentinel');
        if (!sentinel) return;
        topNewsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoadingTopNews && topNewsLimit < topNewsArticles.length) loadTopNews(true);
        }, { threshold: 0.1 });
        topNewsObserver.observe(sentinel);
    }

    // ========== SAVED VIEW ==========
    function renderSavedArticles() {
        const savedDiv = document.getElementById('savedFeed');
        if(!savedDiv) return;
        if(!savedArticles.length) {
            savedDiv.innerHTML = '<div style="padding:2rem;text-align:center;"><i class="fas fa-archive"></i> No saved articles yet. Tap 💾 on any news to store offline.</div>';
            return;
        }
        let html = '';
        savedArticles.forEach(art => {
            html += `<div class="news-card"><img class="card-img" src="${art.imageUrl || 'https://placehold.co/800x450/3b82f6/white?text=Saved'}" onerror="this.src='https://placehold.co/400x300/3b82f6/white?text=News'"><div class="card-body"><div class="news-title"><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></div><div class="news-meta"><span class="source-tag"><i class="fas fa-globe"></i> ${escapeHtml(art.source)}</span><span>saved offline</span></div><div class="news-desc">${escapeHtml(art.description || 'No description')}</div><div class="action-row"><a href="${art.link}" target="_blank" class="btn-primary">Read</a><button class="btn-remove unsave-btn" data-link="${art.link}"><i class="fas fa-trash-alt"></i> Remove</button><button class="btn-share share-saved-btn" data-url="${art.link}" data-title="${escapeHtml(art.title)}"><i class="fas fa-share-alt"></i> Share</button></div></div></div>`;
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
            btn.addEventListener('click', () => shareArticle(btn.dataset.title, btn.dataset.url));
        });
    }

    // ========== VIEW SWITCHING ==========
    function showHomeView() {
        currentView = 'home';
        document.getElementById('homeView').style.display = 'block';
        document.getElementById('savedView').style.display = 'none';
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.nav-item[data-nav="home"]').classList.add('active');
        if (carouselInterval) clearInterval(carouselInterval);
        startCarouselScroll();
        switchCategory(currentCategory);
    }
    function showSavedView() {
        currentView = 'saved';
        document.getElementById('homeView').style.display = 'none';
        document.getElementById('savedView').style.display = 'block';
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.nav-item[data-nav="saved"]').classList.add('active');
        if (scrollObserver) scrollObserver.disconnect();
        if (carouselInterval) clearInterval(carouselInterval);
        carouselInterval = null;
        renderSavedArticles();
    }

    // ========== TRENDING CAROUSEL ==========
    function renderTrendingCarousel() {
        const categories = ['Politics', 'Technology', 'Sports', 'Entertainment', 'Business', 'Health', 'World', 'Local'];
        const selected = [];
        for (const cat of categories) {
            const catArticles = allArticles.filter(a => a.category === cat).slice(0, 2);
            selected.push(...catArticles);
        }
        const carousel = document.getElementById('trendingCarousel');
        if(!selected.length) { carousel.innerHTML = '<div>No trending</div>'; return; }
        carousel.innerHTML = selected.map(art => {
            const imgSrc = getImageUrl(art, art.category);
            return `<div class="trend-card-full"><img src="${imgSrc}"><div class="trend-info"><h3><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></h3><div class="trend-meta"><span>${art.source}</span><span>${formatViews(art.views)} views</span></div><button class="btn-save save-trend" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${imgSrc}" data-source="${art.source}" data-desc="${escapeHtml(art.description)}">💾 Save</button></div></div>`;
        }).join('');
        document.querySelectorAll('.save-trend').forEach(btn => {
            btn.addEventListener('click', () => {
                const link = btn.dataset.link;
                if(!savedArticles.some(s=>s.link===link)) {
                    savedArticles.push({ title: btn.dataset.title, link, imageUrl: btn.dataset.img, source: btn.dataset.source, description: btn.dataset.desc });
                    localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
                    btn.innerHTML = '✅ Saved'; updateSavedCounter();
                    if (currentView === 'saved') renderSavedArticles();
                    showToast('Saved offline');
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
        container.addEventListener('mouseenter', () => autoScrollActive = false);
        container.addEventListener('mouseleave', () => autoScrollActive = true);
        carouselInterval = setInterval(() => {
            if(!autoScrollActive) return;
            const maxScroll = container.scrollWidth - container.clientWidth;
            if(maxScroll <= 0) return;
            let newLeft = container.scrollLeft + (container.clientWidth * 0.8);
            if(newLeft >= maxScroll) newLeft = 0;
            container.scrollTo({ left: newLeft, behavior: 'smooth' });
        }, 6000);
    }

    // ========== INITIAL LOAD ==========
    async function init() {
        await detectLocation();
        // Initial All category load
        currentCategory = 'all';
        const allFeeds = [...WORLD_FEEDS];
        const localFeeds = localMap.get(userCountry) || [];
        if (localFeeds.length) allFeeds.push(...localFeeds);
        currentFeedsList = allFeeds;
        currentFeedIndex = 0;
        hasMoreFeeds = true;
        // Load initial batch (first 15 feeds)
        const initialBatchCount = Math.min(15, currentFeedsList.length);
        const initialFeeds = currentFeedsList.slice(0, initialBatchCount);
        const results = await Promise.all(initialFeeds.map(f => fetchSingleFeed(f)));
        let arts = [];
        results.forEach(r => arts.push(...r));
        const uniqueMap = new Map();
        arts.forEach(a => { if(!uniqueMap.has(a.link)) uniqueMap.set(a.link, a); });
        allArticles = Array.from(uniqueMap.values());
        currentFeedIndex = initialBatchCount;
        // Pre-load flat articles from remaining feeds
        if (currentFeedIndex < currentFeedsList.length) {
            await fetchMoreArticles(true);
        }
        renderAllCategoryGrouped();
        loadTopNews(false);
        startCarouselScroll();
        updateSavedCounter();
        initScrollObserver();

        // Global ad banners (add IDs)
        const globalAd = document.getElementById('globalAdBanner');
        if (globalAd) globalAd.setAttribute('data-ad-id', 'global-ad-1');

        // Event listeners
        document.querySelectorAll('.cat-pill').forEach(pill => pill.addEventListener('click', () => switchCategory(pill.dataset.cat)));
        const themeSwitch = document.getElementById('themeSwitch');
        if(themeSwitch) {
            themeSwitch.addEventListener('change', (e) => {
                if(e.target.checked) document.body.classList.add('dark');
                else document.body.classList.remove('dark');
                localStorage.setItem('blue_theme', e.target.checked ? 'dark' : 'light');
            });
            if(localStorage.getItem('blue_theme') === 'dark') { document.body.classList.add('dark'); themeSwitch.checked = true; }
        }
        const sideMenu = document.getElementById('sideMenu'), overlay = document.getElementById('overlay');
        function closeMenu() { sideMenu.classList.remove('open'); overlay.classList.remove('show'); }
        document.getElementById('hamburgerBtn').onclick = () => { sideMenu.classList.add('open'); overlay.classList.add('show'); };
        document.getElementById('closeMenuBtn').onclick = closeMenu;
        overlay.onclick = closeMenu;
        document.getElementById('menuHome').addEventListener('click', () => { showHomeView(); closeMenu(); });
        document.getElementById('menuSaved').addEventListener('click', () => { showSavedView(); closeMenu(); });
        document.getElementById('menuTrending').addEventListener('click', () => { document.getElementById('trendingCarousel').scrollIntoView({ behavior: 'smooth' }); closeMenu(); });
        document.getElementById('menuAbout').addEventListener('click', () => { alert("Amimo Blue – Top news now mixed from all sources\nContinuous infinite scroll\nAd IDs ready"); closeMenu(); });
        document.getElementById('viewSavedBtn').onclick = () => showSavedView();
        document.getElementById('searchBtn').addEventListener('click', () => { const q = document.getElementById('searchInput').value.trim(); if(q) window.location.href = `seachresult.html?q=${encodeURIComponent(q)}`; });
        document.getElementById('searchInput').addEventListener('keypress', (e) => { if(e.key === 'Enter') document.getElementById('searchBtn').click(); });
        const searchZone = document.getElementById('searchZone');
        document.getElementById('searchInput').addEventListener('focus', () => {
            searchZone.classList.add('floating-top');
            document.body.style.paddingTop = '80px';
            const removeFloat = (e) => { if(!searchZone.contains(e.target)) { searchZone.classList.remove('floating-top'); document.body.style.paddingTop = '0px'; document.removeEventListener('click', removeFloat); } };
            setTimeout(() => document.addEventListener('click', removeFloat), 50);
        });
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', () => { if (btn.dataset.nav === 'home') showHomeView(); else showSavedView(); });
        });
    }
    init();
})();