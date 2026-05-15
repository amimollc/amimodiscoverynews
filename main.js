(function() {
    // ---------- EXPANDED FEEDS (increased limit per feed to 25 for more content) ----------
    const WORLD_FEEDS = [
        { name: "BBC World", url: "http://feeds.bbci.co.uk/news/world/rss.xml", category: "World", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=BBC" },
        { name: "CNN Top", url: "http://rss.cnn.com/rss/edition.rss", category: "World", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=CNN" },
        { name: "Al Jazeera", url: "https://www.aljazeera.com/xml/rss/all.xml", category: "World", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=Al+Jazeera" },
        { name: "Reuters World", url: "https://www.reutersagency.com/feed/?best-topics=world&post_type=best", category: "World", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=Reuters" },
        { name: "NPR News", url: "https://feeds.npr.org/1001/rss.xml", category: "World", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=NPR" },
        { name: "ABC News", url: "https://abcnews.go.com/abcnews/topstories", category: "World", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=ABC" },
        { name: "CBS News", url: "https://www.cbsnews.com/latest/rss/main", category: "World", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=CBS" },
        { name: "NBC News", url: "https://feeds.nbcnews.com/nbcnews/public/news", category: "World", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=NBC" },
        { name: "BBC Politics", url: "http://feeds.bbci.co.uk/news/politics/rss.xml", category: "Politics", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=BBC+Politics" },
        { name: "Variety", url: "https://variety.com/feed/", category: "Entertainment", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=Variety" },
        { name: "TechCrunch", url: "https://techcrunch.com/feed/", category: "Technology", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=TechCrunch" },
        { name: "The Verge", url: "https://www.theverge.com/rss/index.xml", category: "Technology", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=Verge" },
        { name: "ESPN", url: "https://www.espn.com/espn/rss/news", category: "Sports", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=ESPN" },
        { name: "BBC Sport", url: "http://feeds.bbci.co.uk/sport/rss.xml", category: "Sports", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=BBC+Sport" },
        { name: "CNN Sports", url: "http://rss.cnn.com/rss/edition_sport.rss", category: "Sports", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=CNN+Sports" },
        { name: "Sky Sports", url: "https://www.skysports.com/rss/12040", category: "Sports", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=Sky+Sports" },
        { name: "CBS Sports", url: "https://www.cbssports.com/rss/headlines/", category: "Sports", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=CBS+Sports" },
        { name: "Bleacher Report", url: "https://bleacherreport.com/articles/feed", category: "Sports", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=Bleacher" },
        { name: "Zambia Sports (Lusaka Times)", url: "https://www.lusakatimes.com/category/sports/feed/", category: "Sports", imgFallback: "https://placehold.co/600x400/1e6f5c/ffffff?text=Zambia+Sports" },
        { name: "Zambia Football News", url: "https://zambianfootball.co.zm/feed/", category: "Sports", imgFallback: "https://placehold.co/600x400/1e6f5c/ffffff?text=Zambia+Football" },
        { name: "Bloomberg", url: "https://feeds.bloomberg.com/markets/news.rss", category: "Business", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=Bloomberg" },
        { name: "CNN Health", url: "http://rss.cnn.com/rss/edition_health.rss", category: "Health", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=CNN+Health" },
    ];

    const countryFeedMap = new Map();
    function addFeeds(code, feeds) { countryFeedMap.set(code, feeds); }
    addFeeds("US", [{ name: "CNN US", url: "http://rss.cnn.com/rss/edition_us.rss", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=CNN+US" }, { name: "NY Times", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=NYT" }]);
    addFeeds("GB", [{ name: "BBC UK", url: "http://feeds.bbci.co.uk/news/uk/rss.xml", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=BBC+UK" }, { name: "Guardian", url: "https://www.theguardian.com/uk/rss", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=Guardian" }]);
    addFeeds("CA", [{ name: "CBC", url: "https://www.cbc.ca/cmlink/rss-topstories", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=CBC" }]);
    addFeeds("IN", [{ name: "Times of India", url: "https://timesofindia.indiatimes.com/rssfeedmostrecent.cms", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=TOI" }]);
    addFeeds("ZM", [{ name: "Lusaka Times", url: "https://www.lusakatimes.com/feed/", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=Lusaka" }, { name: "Zambia Daily Mail", url: "https://www.daily-mail.co.zm/feed/", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=Zambia+Mail" }]);
    addFeeds("AU", [{ name: "ABC Australia", url: "https://www.abc.net.au/news/feed/51120/rss.xml", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=ABC+AU" }]);
    addFeeds("DE", [{ name: "Deutsche Welle", url: "https://rss.dw.com/rdf/rss-en-all", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=DW" }]);
    addFeeds("FR", [{ name: "France24", url: "https://www.france24.com/en/rss", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=France24" }]);
    addFeeds("JP", [{ name: "Japan Times", url: "https://www.japantimes.co.jp/feed/", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=JapanTimes" }]);
    addFeeds("ZA", [{ name: "News24", url: "https://www.news24.com/rss", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=News24" }]);
    addFeeds("BR", [{ name: "Globo", url: "https://g1.globo.com/rss/g1/", category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=Globo" }]);

    function getFallbackFeeds(code) {
        return [{ name: `Google News ${code}`, url: `https://news.google.com/rss?hl=en-${code}&gl=${code}&ceid=${code}:en`, category: "Local", imgFallback: "https://placehold.co/600x400/e9e0ff/6c3fd4?text=News" }];
    }

    let allArticles = [];
    let currentCategory = "all";
    let userCountry = null;
    let userCountryName = "Worldwide";

    // Infinite scroll & pagination state
    let currentFilteredMaster = [];
    let currentDisplayLimit = 12;
    let isLoadingMore = false;
    let sentinelObserver = null;

    const newsFeed = document.getElementById('newsFeed');
    const statusMsg = document.getElementById('statusMsg');
    const trendingContainer = document.getElementById('trendingContainer');
    const activeCatDisplay = document.getElementById('activeCatDisplay');
    const countryBadge = document.getElementById('countryBadge');
    const locationInfo = document.getElementById('locationInfo');
    const localCatBtn = document.getElementById('localCatBtn');
    const categoryList = document.getElementById('categoryList');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    hamburgerBtn.addEventListener('click', () => {
        sideMenu.classList.add('open');
        overlay.classList.add('show');
    });
    function closeSideMenu() { sideMenu.classList.remove('open'); overlay.classList.remove('show'); }
    closeMenuBtn.addEventListener('click', closeSideMenu);
    overlay.addEventListener('click', closeSideMenu);

    categoryList.addEventListener('click', (e) => {
        const btn = e.target.closest('.cat-btn');
        if (!btn) return;
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.cat;
        updateActiveDisplay();
        closeSideMenu();
        applyCategoryFilter();
    });

    function updateActiveDisplay() {
        let catName = currentCategory === 'all' ? '🌍 All News' : currentCategory;
        if (currentCategory === 'Local') catName = `📍 ${userCountryName} News`;
        activeCatDisplay.innerHTML = `<i class="fas fa-layer-group"></i> ${catName}`;
    }

    async function fetchFeed(feedConfig) {
        try {
            const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedConfig.url)}`;
            const resp = await fetch(apiUrl);
            if (!resp.ok) return [];
            const data = await resp.json();
            if (data.status !== 'ok') return [];
            return data.items.slice(0, 25).map(item => {
                let img = feedConfig.imgFallback;
                if (item.thumbnail?.startsWith('http')) img = item.thumbnail;
                else if (item.enclosure?.link?.match(/\.(jpg|jpeg|png|webp)/i)) img = item.enclosure.link;
                else {
                    const m = item.description?.match(/<img[^>]+src="([^">]+)"/);
                    if (m) img = m[1];
                }
                const desc = (item.description || '').replace(/<[^>]*>/g, '').substring(0, 280);
                return { title: item.title, link: item.link, pubDate: item.pubDate, description: desc, source: feedConfig.name, category: feedConfig.category, imageUrl: img };
            });
        } catch (e) { return []; }
    }

    async function detectLocation() {
        try {
            const res = await fetch('https://ipapi.co/json/');
            const d = await res.json();
            userCountry = d.country_code;
            userCountryName = d.country_name || userCountry;
        } catch (e) { userCountry = 'US'; userCountryName = 'United States'; }
        countryBadge.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${userCountryName}`;
        locationInfo.innerHTML = `<i class="fas fa-map-pin"></i> Your location: <strong>${userCountryName}</strong>`;
        localCatBtn.innerHTML = `<i class="fas fa-location-dot"></i> ${userCountryName} News`;
    }

    function generateViewCount(seed) {
        let hash = 0;
        for (let i = 0; i < seed.length; i++) { hash = ((hash << 5) - hash) + seed.charCodeAt(i); hash |= 0; }
        return Math.max(1000, Math.abs(hash) % 500000);
    }
    function formatViews(num) { return num >= 1000000 ? (num/1000000).toFixed(1)+'M' : num >= 1000 ? (num/1000).toFixed(1)+'K' : num.toString(); }

    async function loadAll() {
        statusMsg.innerHTML = '<div class="loader"></div> Detecting location & fetching feeds...';
        await detectLocation();
        const worldPromises = WORLD_FEEDS.map(f => fetchFeed(f));
        const worldRes = await Promise.allSettled(worldPromises);
        let worldArticles = []; worldRes.forEach(r => { if (r.status === 'fulfilled') worldArticles.push(...r.value); });
        let localFeeds = countryFeedMap.get(userCountry) || getFallbackFeeds(userCountry);
        const localPromises = localFeeds.map(f => fetchFeed(f));
        const localRes = await Promise.allSettled(localPromises);
        let localArticles = []; localRes.forEach(r => { if (r.status === 'fulfilled') localArticles.push(...r.value); });
        allArticles = [...worldArticles, ...localArticles];
        const unique = new Map(); allArticles.forEach(a => { if (!unique.has(a.link)) unique.set(a.link, a); });
        allArticles = Array.from(unique.values());
        allArticles.forEach(a => { a.views = generateViewCount(a.link); });
        allArticles.sort((a,b) => new Date(b.pubDate) - new Date(a.pubDate));
        statusMsg.innerHTML = `✅ ${allArticles.length} stories ready`;
        updateActiveDisplay();
        renderTrending();
        applyCategoryFilter();
        setupInfiniteScroll();
    }

    function applyCategoryFilter() {
        let filtered = [];
        if (currentCategory === 'Local') filtered = allArticles.filter(a => a.category === 'Local');
        else if (currentCategory !== 'all') filtered = allArticles.filter(a => a.category === currentCategory);
        else filtered = [...allArticles];
        currentFilteredMaster = filtered;
        currentDisplayLimit = 12;
        renderCurrentView();
    }

    function renderCurrentView() {
        const toShow = currentFilteredMaster.slice(0, currentDisplayLimit);
        renderCards(toShow);
        const sentinel = document.getElementById('loadMoreSentinel');
        if (currentDisplayLimit >= currentFilteredMaster.length) {
            if(sentinel) sentinel.style.display = 'none';
        } else {
            if(sentinel) sentinel.style.display = 'block';
        }
    }

    function loadMoreItems() {
        if (isLoadingMore) return;
        if (currentDisplayLimit >= currentFilteredMaster.length) return;
        isLoadingMore = true;
        setTimeout(() => {
            currentDisplayLimit = Math.min(currentDisplayLimit + 12, currentFilteredMaster.length);
            renderCurrentView();
            isLoadingMore = false;
        }, 200);
    }

    function setupInfiniteScroll() {
        if (sentinelObserver) sentinelObserver.disconnect();
        const sentinel = document.getElementById('loadMoreSentinel');
        if (!sentinel) return;
        sentinelObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoadingMore && currentDisplayLimit < currentFilteredMaster.length) {
                loadMoreItems();
            }
        }, { threshold: 0.5 });
        sentinelObserver.observe(sentinel);
    }

    // Expand card: fetch full article content (no limits)
    async function expandCard(link, cardElement) {
        const expandDiv = cardElement.querySelector('.expanded-content-area');
        if (expandDiv && expandDiv.innerHTML !== '') {
            if (expandDiv.style.display === 'none') {
                expandDiv.style.display = 'block';
            } else {
                expandDiv.style.display = 'none';
            }
            return;
        }
        if (!expandDiv) return;
        expandDiv.innerHTML = '<div class="loading-expanded"><div class="loader"></div> <span>Loading full article...</span></div>';
        expandDiv.style.display = 'block';
        try {
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(link)}`;
            const resp = await fetch(proxyUrl);
            const data = await resp.json();
            if (data && data.contents) {
                const html = data.contents;
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const articleBody = doc.querySelector('article') || doc.querySelector('.article-body') || doc.querySelector('main');
                let fullText = '';
                if (articleBody) {
                    const paragraphs = articleBody.querySelectorAll('p');
                    paragraphs.forEach(p => { fullText += `<p>${p.innerText}</p>`; });
                } else {
                    const allParas = doc.body.querySelectorAll('p');
                    allParas.forEach(p => { if (p.innerText.length > 80) fullText += `<p>${p.innerText}</p>`; });
                }
                if (fullText.length < 100) fullText = `<p>${doc.body.innerText.slice(0, 2500)}</p>`;
                expandDiv.innerHTML = `<div class="expanded-article-content">${fullText.slice(0, 8000)}</div><button class="btn btn-outline collapse-expand-btn" style="margin-top:0.8rem;"><i class="fas fa-compress-alt"></i> Show less</button>`;
                expandDiv.querySelector('.collapse-expand-btn')?.addEventListener('click', (e) => {
                    e.stopPropagation();
                    expandDiv.style.display = 'none';
                });
            } else throw new Error('No content');
        } catch (err) {
            expandDiv.innerHTML = `<div class="expanded-article-content"><i class="fas fa-exclamation-triangle"></i> Could not load full article. <a href="${link}" target="_blank">Read original here</a>.</div><button class="btn btn-outline collapse-expand-btn">Close</button>`;
            expandDiv.querySelector('.collapse-expand-btn')?.addEventListener('click', () => expandDiv.style.display = 'none');
        }
    }

    function renderCards(articles) {
        if (!articles.length) { newsFeed.innerHTML = '<div style="text-align:center; padding:2rem;"><i class="fas fa-newspaper"></i> 📭 No articles.</div>'; return; }
        newsFeed.innerHTML = articles.map((a, idx) => {
            return `<div class="news-card" data-link="${escapeHtml(a.link)}" data-title="${escapeHtml(a.title)}">
                <img class="card-img" src="${escapeHtml(a.imageUrl)}" onerror="this.src='https://placehold.co/600x400/e9e0ff/6c3fd4?text=News'">
                <div class="card-body">
                    <div class="news-title"><a href="${a.link}" target="_blank">${escapeHtml(a.title)}</a></div>
                    <div class="news-meta"><span class="source-tag"><i class="fas fa-globe"></i> ${escapeHtml(a.source)}</span><span><i class="far fa-calendar-alt"></i> ${formatDate(a.pubDate)}</span><span><i class="fas fa-tag"></i> ${escapeHtml(a.category)}</span><span><i class="fas fa-eye"></i> ${formatViews(a.views)}</span></div>
                    <div class="news-desc">${escapeHtml(a.description)}</div>
                    <div class="action-row">
                        <button class="btn btn-primary expand-read-btn" data-link="${escapeHtml(a.link)}"><i class="fas fa-expand-alt"></i> Read More</button>
                        <button class="btn btn-outline share-btn" data-title="${escapeHtml(a.title)}" data-link="${escapeHtml(a.link)}"><i class="fas fa-share-alt"></i> Share</button>
                        <button class="btn btn-outline copy-btn" data-link="${window.location.origin}${window.location.pathname}?article=${encodeURIComponent(a.link)}"><i class="fas fa-copy"></i> Copy Link</button>
                    </div>
                    <div class="expanded-content-area" style="display:none;"></div>
                </div>
            </div>`;
        }).join('');

        // Event delegation for dynamic buttons
        newsFeed.addEventListener('click', (e) => {
            const expandBtn = e.target.closest('.expand-read-btn');
            if (expandBtn) {
                e.preventDefault();
                const card = expandBtn.closest('.news-card');
                const link = expandBtn.dataset.link;
                if (card) expandCard(link, card);
            }
            const shareBtn = e.target.closest('.share-btn');
            if (shareBtn) {
                const title = shareBtn.dataset.title;
                const url = shareBtn.dataset.link;
                if (navigator.share) navigator.share({ title, url });
                else copyToClipboard(url).then(() => alert('Link copied'));
            }
            const copyBtn = e.target.closest('.copy-btn');
            if (copyBtn) {
                const shareUrl = copyBtn.dataset.link;
                copyToClipboard(shareUrl).then(() => {
                    const original = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    setTimeout(() => { copyBtn.innerHTML = original; }, 2000);
                });
            }
        });
    }

    async function copyToClipboard(text) { try { await navigator.clipboard.writeText(text); } catch { let ta = document.createElement('textarea'); ta.value=text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); } }

    async function performSearch() {
        const query = document.getElementById('searchInput').value.trim();
        if (!query) { applyCategoryFilter(); statusMsg.innerHTML = `✅ ${allArticles.length} stories`; return; }
        statusMsg.innerHTML = `<div class="loader"></div> Searching across archive & Google News for "${query}"...`;
        const localResults = allArticles.filter(a => a.title.toLowerCase().includes(query.toLowerCase()) || a.description.toLowerCase().includes(query.toLowerCase()));
        let googleResults = [];
        try {
            const googleRSS = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-US&gl=US&ceid=US:en`;
            const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(googleRSS)}`;
            const res = await fetch(apiUrl);
            const data = await res.json();
            if (data.status === 'ok') {
                googleResults = data.items.slice(0, 20).map(item => ({
                    title: item.title,
                    link: item.link,
                    pubDate: item.pubDate,
                    description: (item.description || '').replace(/<[^>]*>/g, '').substring(0, 280),
                    source: 'Google News',
                    category: 'Search',
                    imageUrl: item.thumbnail || 'https://placehold.co/600x400/e9e0ff/6c3fd4?text=News',
                    views: generateViewCount(item.link)
                }));
            }
        } catch(e) { console.warn("Google News search failed", e); }
        const combined = [...localResults, ...googleResults];
        const uniqueMap = new Map();
        combined.forEach(a => { if (!uniqueMap.has(a.link)) uniqueMap.set(a.link, a); });
        currentFilteredMaster = Array.from(uniqueMap.values());
        currentDisplayLimit = 12;
        statusMsg.innerHTML = `🔍 Found ${currentFilteredMaster.length} results (${googleResults.length} from Google) for "${query}"`;
        renderCurrentView();
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    }

    // Trending auto-scroll logic
    let autoAnimId = null, autoScrollPaused = false, lastTimestampAuto = null;
    const SCROLL_SPEED_PX_SEC = 85;
    function stopAutoScroll() { if (autoAnimId) { cancelAnimationFrame(autoAnimId); autoAnimId = null; } }
    function startAutoScroll() { if (!trendingContainer) return; stopAutoScroll(); autoScrollPaused = false; lastTimestampAuto = null; function step(now) { if (!trendingContainer) return; if (autoScrollPaused) { autoAnimId = requestAnimationFrame(step); return; } const maxScroll = trendingContainer.scrollWidth - trendingContainer.clientWidth; if (maxScroll <= 0) { autoAnimId = requestAnimationFrame(step); return; } if (lastTimestampAuto === null) { lastTimestampAuto = now; autoAnimId = requestAnimationFrame(step); return; } let delta = Math.min(100, now - lastTimestampAuto); if (delta > 5) { let move = (SCROLL_SPEED_PX_SEC * delta) / 1000; let newLeft = trendingContainer.scrollLeft + move; if (newLeft >= maxScroll) newLeft = 0; trendingContainer.scrollLeft = newLeft; } lastTimestampAuto = now; autoAnimId = requestAnimationFrame(step); } autoAnimId = requestAnimationFrame(step); }
    function pauseAutoScrollTemp(durationMs = 5000) { autoScrollPaused = true; setTimeout(() => { autoScrollPaused = false; }, durationMs); }
    function attachSmoothScrollEvents() { if (!trendingContainer) return; trendingContainer.addEventListener('wheel', () => pauseAutoScrollTemp(5000), { passive: true }); trendingContainer.addEventListener('touchmove', () => pauseAutoScrollTemp(5000), { passive: true }); trendingContainer.addEventListener('scroll', () => pauseAutoScrollTemp(5000)); trendingContainer.addEventListener('mouseenter', () => { autoScrollPaused = true; }); trendingContainer.addEventListener('mouseleave', () => { autoScrollPaused = false; }); }
    function renderTrending() {
        const globalArts = allArticles.filter(a => a.category !== 'Local');
        const localArts = allArticles.filter(a => a.category === 'Local');
        const trending = [...globalArts.slice(0, 5), ...localArts.slice(0, 2)];
        if (trending.length === 0) { trendingContainer.innerHTML = '<div>No trending stories</div>'; return; }
        trendingContainer.innerHTML = trending.map(a => {
            const shareUrl = `${window.location.origin}${window.location.pathname}?article=${encodeURIComponent(a.link)}`;
            return `<div class="trend-card">
                <img class="trend-img" src="${escapeHtml(a.imageUrl)}" onerror="this.src='https://placehold.co/600x400/e9e0ff/6c3fd4?text=News'">
                <div class="trend-info">
                    <h4><a href="${a.link}" target="_blank">${escapeHtml(a.title.substring(0, 70))}</a></h4>
                    <div class="trend-meta"><span class="source-tag"><i class="fas fa-newspaper"></i> ${escapeHtml(a.source)}</span><span><i class="far fa-calendar-alt"></i> ${formatDate(a.pubDate)}</span><span><i class="fas fa-eye"></i> ${formatViews(a.views)}</span></div>
                    <div class="trend-desc">${escapeHtml(a.description?.substring(0, 100))}</div>
                    <button class="btn btn-outline share-trend-btn" data-shareurl="${escapeHtml(shareUrl)}" style="align-self:flex-start;"><i class="fas fa-share-alt"></i> Share</button>
                </div>
            </div>`;
        }).join('');
        document.querySelectorAll('.share-trend-btn').forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); const url = btn.dataset.shareurl; if(navigator.share) navigator.share({ title: 'Trending News', url }); else copyToClipboard(url).then(()=>alert('Link copied')); }));
        stopAutoScroll(); startAutoScroll(); attachSmoothScrollEvents();
    }

    function escapeHtml(str) { return str?.replace(/[&<>]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;'})[m]) || ''; }
    function formatDate(d) { try { return new Date(d).toLocaleString(undefined, { month:'short', day:'numeric', hour:'numeric', minute:'2-digit', hour12:true }); } catch(e){ return ''; } }

    document.getElementById('searchBtn').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keypress', (e) => { if(e.key === 'Enter') performSearch(); });
    loadAll();
})();
