(function() {
    // ========== FEED DATABASE ==========
    const WORLD_FEEDS = [
        { name: "BBC World", url: "https://feeds.bbci.co.uk/news/world/rss.xml", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=BBC" },
        { name: "CNN International", url: "https://rss.cnn.com/rss/edition.rss", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CNN" },
        { name: "Al Jazeera", url: "https://www.aljazeera.com/xml/rss/all.xml", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=AJ" },
        { name: "Reuters World", url: "https://www.reutersagency.com/feed/?best-topics=world&post_type=best", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Reuters" },
        { name: "The Guardian", url: "https://www.theguardian.com/world/rss", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Guardian" },
        { name: "France 24", url: "https://www.france24.com/en/rss", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=France24" },
        { name: "Deutsche Welle", url: "https://rss.dw.com/rdf/rss-en-top", category: "World", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=DW" },
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
    localMap.set("ZM", [{ name: "Lusaka Times", url: "https://www.lusakatimes.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Lusaka" }]);
    localMap.set("US", [{ name: "CNN US", url: "https://rss.cnn.com/rss/edition_us.rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=US+News" }, { name: "NY Times", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=NYT" }, { name: "LA Times", url: "https://www.latimes.com/rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=LAT" }]);
    localMap.set("GB", [{ name: "BBC UK", url: "https://feeds.bbci.co.uk/news/uk/rss.xml", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=BBC+UK" }, { name: "The Guardian UK", url: "https://www.theguardian.com/uk/rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Guardian" }]);
    localMap.set("IN", [{ name: "Times of India", url: "https://timesofindia.indiatimes.com/rssfeedmostrecent.cms", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=TOI" }, { name: "NDTV", url: "https://feeds.feedburner.com/ndtvnews-top-stories", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=NDTV" }]);
    localMap.set("CA", [{ name: "CBC", url: "https://www.cbc.ca/cmlink/rss-topstories", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CBC" }]);
    localMap.set("AU", [{ name: "ABC Australia", url: "https://www.abc.net.au/news/feed/51120/rss.xml", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=ABC+AU" }]);

    // ========== GLOBALS ==========
    let allArticles = [];
    let currentCategory = "all";
    let userCountry = "ZM";
    let userCountryName = "World";
    let currentFiltered = [];
    let displayLimit = 30;
    let isLoadingMore = false;
    let savedArticles = JSON.parse(localStorage.getItem("amimo_saved") || "[]");
    let scrollObserver = null;
    let sentinelElement = document.getElementById('loadSentinel');
    let retryContainer = null;
    let carouselInterval = null;
    let autoScrollActive = true;

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
        t.innerText=msg;
        t.style.position='fixed'; t.style.bottom='70px'; t.style.left='20px';
        t.style.background='var(--accent-dark)'; t.style.color='white';
        t.style.padding='8px 18px'; t.style.borderRadius='40px'; t.style.zIndex='9999';
        document.body.appendChild(t);
        setTimeout(()=>t.remove(),2000);
    }
    function getImageUrl(item, category) {
        if (item.imageUrl && item.imageUrl.startsWith('http')) return item.imageUrl;
        const categoryColors = { 'Politics':'1e3a8a', 'Technology':'0f172a', 'Sports':'b91c1c', 'Entertainment':'831843', 'Business':'065f46', 'Health':'0e7c7c', 'Local':'4c1d95', 'World':'1e40af' };
        const color = categoryColors[category] || '3b82f6';
        return `https://placehold.co/800x450/${color}/white?text=${encodeURIComponent(item.source || category)}`;
    }

    function saveCurrentState() {
        sessionStorage.setItem('amimo_saved_state', JSON.stringify({ allArticles, currentCategory, scrollY: window.scrollY, displayLimit }));
    }
    function restoreSavedState() {
        const saved = sessionStorage.getItem('amimo_saved_state');
        if (saved) {
            try {
                const state = JSON.parse(saved);
                if (state.allArticles && state.allArticles.length) {
                    allArticles = state.allArticles;
                    currentCategory = state.currentCategory || "all";
                    displayLimit = state.displayLimit || 30;
                    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
                    const activePill = Array.from(document.querySelectorAll('.cat-pill')).find(p => p.dataset.cat === currentCategory);
                    if (activePill) activePill.classList.add('active');
                    applyCategoryFilter();
                    renderTrendingCarousel();
                    updateSavedCounter();
                    setTimeout(() => window.scrollTo(0, state.scrollY || 0), 100);
                    document.getElementById('statusMsg').innerHTML = `✅ ${allArticles.length} stories ready (cached)`;
                    return true;
                }
            } catch(e) {}
        }
        return false;
    }

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
        if (feedsToFetch.length === 0) feedsToFetch = WORLD_FEEDS.slice(0,10);
        
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
            saveCurrentState();
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
        saveCurrentState();
        storeAllArticlesForSearch();
        window.location.href = `seachresult.html?q=${encodeURIComponent(query)}`;
    }

    async function loadAllFeeds() {
        const statusDiv = document.getElementById('statusMsg');
        statusDiv.innerHTML = '<div class="loader"></div> Fetching from 30+ providers...';
        const allFeeds = [...WORLD_FEEDS, ...(localMap.get(userCountry) || [])];
        const results = await Promise.all(allFeeds.map(f => fetchFeed(f)));
        let arts = [];
        results.forEach(r => arts.push(...r));
        const uniqueMap = new Map();
        arts.forEach(a => { if(!uniqueMap.has(a.link)) uniqueMap.set(a.link, a); });
        allArticles = Array.from(uniqueMap.values());
        allArticles.forEach(a => { a.views = generateViews(a.title); });
        allArticles.sort((a,b)=> new Date(b.pubDate) - new Date(a.pubDate));
        statusDiv.innerHTML = `✅ ${allArticles.length} stories ready`;
        storeAllArticlesForSearch();
        saveCurrentState();
        applyCategoryFilter();
        renderTrendingCarousel();
        updateSavedCounter();
    }

    function applyCategoryFilter() {
        if (currentCategory === 'all') currentFiltered = [...allArticles];
        else if (currentCategory === 'Local') currentFiltered = allArticles.filter(a => a.category === 'Local');
        else currentFiltered = allArticles.filter(a => a.category === currentCategory);
        displayLimit = 30;
        renderNewsFeed();
        if (currentFiltered.length < 40 && !isLoadingMore) setTimeout(() => attemptBackgroundFetch(), 500);
    }

    async function attemptBackgroundFetch() {
        if (isLoadingMore) return;
        isLoadingMore = true;
        try {
            const newCount = await fetchMoreForCategory(currentCategory);
            if (newCount > 0) applyCategoryFilter();
        } catch(e) { console.warn(e); }
        isLoadingMore = false;
    }

    function renderNewsFeed() {
        const feedDiv = document.getElementById('newsFeed');
        const toRender = currentFiltered.slice(0, displayLimit);
        if(toRender.length === 0) { feedDiv.innerHTML = '<div style="padding:2rem; text-align:center;">📭 No articles in this category</div>'; return; }
        let html = '';
        for(let i=0; i<toRender.length; i++) {
            const art = toRender[i];
            const isSaved = savedArticles.some(s => s.link === art.link);
            const formattedDate = new Date(art.pubDate).toLocaleDateString(undefined, { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
            const imgSrc = getImageUrl(art, art.category);
            html += `<div class="news-card">
                <img class="card-img" src="${imgSrc}" onerror="this.src='https://placehold.co/400x300/3b82f6/white?text=News'">
                <div class="card-body">
                    <div class="news-title"><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></div>
                    <div class="news-meta"><span class="source-tag"><i class="fas fa-globe"></i> ${escapeHtml(art.source)}</span><span><i class="far fa-calendar-alt"></i> ${formattedDate}</span><span><i class="fas fa-eye"></i> ${formatViews(art.views)} views</span></div>
                    <div class="news-desc">${escapeHtml(art.description)}</div>
                    <div class="action-row"><a href="${art.link}" target="_blank" class="btn-primary" style="text-decoration:none;"><i class="fas fa-external-link-alt"></i> Read Original</a><button class="btn-save save-btn" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${imgSrc}" data-source="${escapeHtml(art.source)}" data-desc="${escapeHtml(art.description)}">${isSaved ? '✅ Saved' : '💾 Save Offline'}</button></div>
                </div>
            </div>`;
            if((i+1) % 5 === 0 && i+1 < toRender.length) html += `<div class="inline-ad"><i class="fas fa-ad"></i> Advertisement — Support our journalism</div>`;
        }
        feedDiv.innerHTML = html;
        attachSaveEvents();
    }

    function attachSaveEvents() {
        document.querySelectorAll('.save-btn').forEach(btn => { btn.removeEventListener('click', saveHandler); btn.addEventListener('click', saveHandler); });
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
            btn.innerHTML = '💾 Save Offline'; btn.style.background = '#2563eb'; showToast('Removed from saved');
        }
        updateSavedCounter();
    }
    function updateSavedCounter() { document.getElementById('savedCounter').innerText = savedArticles.length; }

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
                    savedArticles.push({ title: btn.dataset.title, link, imageUrl: btn.dataset.img, source: btn.dataset.source, description: btn.dataset.desc });
                    localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
                    btn.innerHTML = '✅ Saved'; updateSavedCounter();
                }
            });
        });
        startCarouselScroll();
    }

    function startCarouselScroll() {
        if(carouselInterval) clearInterval(carouselInterval);
        const container = document.getElementById('trendingCarousel');
        if(!container) return;
        carouselInterval = setInterval(() => {
            if(!autoScrollActive) return;
            const maxScroll = container.scrollWidth - container.clientWidth;
            if(maxScroll <= 0) return;
            let newLeft = container.scrollLeft + (container.clientWidth * 0.8);
            if(newLeft >= maxScroll) newLeft = 0;
            container.scrollTo({ left: newLeft, behavior: 'smooth' });
        }, 6000);
        container.addEventListener('mouseenter', () => autoScrollActive = false);
        container.addEventListener('mouseleave', () => autoScrollActive = true);
    }

    function clearRetryButton() { if(retryContainer && retryContainer.parentNode) retryContainer.remove(); retryContainer = null; }
    function showRetryButton(message, retryCallback) {
        clearRetryButton();
        const wrapper = document.createElement('div');
        wrapper.className = 'end-loader';
        wrapper.innerHTML = `<div><i class="fas fa-exclamation-triangle"></i> ${message}</div><button class="retry-button"><i class="fas fa-sync-alt"></i> Reload</button>`;
        wrapper.querySelector('.retry-button').onclick = async () => {
            wrapper.innerHTML = '<div class="loader"></div> Fetching...';
            const newCount = await retryCallback();
            if(newCount > 0) { clearRetryButton(); applyCategoryFilter(); showToast(`✅ ${newCount} new articles`); }
            else wrapper.innerHTML = `<div>No new articles. <button class="retry-button">Retry</button></div>`;
        };
        sentinelElement.parentNode.insertBefore(wrapper, sentinelElement);
        retryContainer = wrapper;
    }

    async function attemptLoadMore() {
        if(isLoadingMore) return false;
        isLoadingMore = true;
        showEndSpinner(true);
        let newCount = 0;
        try {
            newCount = await fetchMoreForCategory(currentCategory);
            if(newCount > 0) { applyCategoryFilter(); window.scrollBy({ top: 60, behavior: 'smooth' }); clearRetryButton(); }
            else showRetryButton("No more articles. Tap to reload.", async () => await fetchMoreForCategory(currentCategory));
        } catch(err) { showRetryButton("Failed to load. Tap to retry.", async () => await fetchMoreForCategory(currentCategory)); }
        finally { isLoadingMore = false; showEndSpinner(false); }
        return newCount > 0;
    }

    function showEndSpinner(show) {
        let spinner = document.getElementById('endSpinner');
        if(show && !spinner) { spinner = document.createElement('div'); spinner.id = "endSpinner"; spinner.className = "end-loader"; spinner.innerHTML = '<div class="loader"></div> Loading more...'; sentinelElement.parentNode.insertBefore(spinner, sentinelElement); }
        else if(!show && spinner) spinner.remove();
    }

    function initScrollObserver() {
        if(scrollObserver) scrollObserver.disconnect();
        scrollObserver = new IntersectionObserver(async (entries) => {
            if(entries[0].isIntersecting && !isLoadingMore) {
                if(displayLimit < currentFiltered.length) {
                    isLoadingMore = true;
                    showEndSpinner(true);
                    setTimeout(() => {
                        displayLimit = Math.min(displayLimit + 25, currentFiltered.length);
                        renderNewsFeed();
                        isLoadingMore = false;
                        showEndSpinner(false);
                        if (displayLimit + 15 >= currentFiltered.length) setTimeout(() => attemptBackgroundFetch(), 200);
                    }, 100);
                } else if(!isLoadingMore) await attemptLoadMore();
            }
        }, { threshold: 0.1, rootMargin: "0px 0px 1200px 0px" });
        if(sentinelElement) scrollObserver.observe(sentinelElement);
    }

    function switchCategory(cat) {
        if(currentCategory === cat) return;
        currentCategory = cat;
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        const activePill = Array.from(document.querySelectorAll('.cat-pill')).find(p => p.dataset.cat === cat);
        if(activePill) activePill.classList.add('active');
        clearRetryButton();
        applyCategoryFilter();
        saveCurrentState();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function detectLocation() {
        try {
            const res = await fetch('https://ipapi.co/json/');
            const d = await res.json();
            if(d.country_code) { userCountry = d.country_code; userCountryName = d.country_name || userCountry; }
        } catch(e) { userCountry="ZM"; userCountryName="Zambia"; }
        document.getElementById('countryBadge').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${userCountryName}`;
    }

    // ========== EVENT LISTENERS ==========
    document.querySelectorAll('.cat-pill').forEach(pill => pill.addEventListener('click', () => switchCategory(pill.dataset.cat)));
    const themeSwitch = document.getElementById('themeSwitch');
    themeSwitch.addEventListener('change', (e) => { if(e.target.checked) document.body.classList.add('dark'); else document.body.classList.remove('dark'); localStorage.setItem('blue_theme', e.target.checked ? 'dark' : 'light'); });
    if(localStorage.getItem('blue_theme') === 'dark') { document.body.classList.add('dark'); themeSwitch.checked = true; }

    const sideMenu = document.getElementById('sideMenu'), overlayDiv = document.getElementById('overlay');
    function closeMenu() { sideMenu.classList.remove('open'); overlayDiv.classList.remove('show'); }
    document.getElementById('hamburgerBtn').onclick = () => { sideMenu.classList.add('open'); overlayDiv.classList.add('show'); };
    document.getElementById('closeMenuBtn').onclick = closeMenu;
    overlayDiv.onclick = closeMenu;
    document.getElementById('menuHome').addEventListener('click', () => { switchCategory('all'); closeMenu(); });
    document.getElementById('menuTrending').addEventListener('click', () => { document.getElementById('trendingCarousel').scrollIntoView({ behavior: 'smooth', block: 'start' }); closeMenu(); });
    document.getElementById('menuNotification').addEventListener('click', () => { alert("🔔 Notifications coming soon."); closeMenu(); });
    document.getElementById('menuSearch').addEventListener('click', () => { closeMenu(); document.getElementById('searchInput').focus(); });
    document.getElementById('menuAbout').addEventListener('click', () => { alert("Amimo Blue v10.0\nTrending shows 2 per category, local in All, fast infinite scroll."); closeMenu(); });
    document.getElementById('menuSaved').addEventListener('click', () => { alert(`📚 Saved (${savedArticles.length}):\n` + savedArticles.map(a=>a.title).join("\n").slice(0,500)); closeMenu(); });
    document.getElementById('viewSavedBtn').onclick = () => alert(`${savedArticles.length} saved articles.`);

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', () => { const q = searchInput.value.trim(); if(q) redirectToSearchPage(q); });
    searchInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') searchBtn.click(); });

    const searchZone = document.getElementById('searchZone');
    function enableFloating() {
        searchZone.classList.add('floating-top');
        document.body.style.paddingTop = '80px';
        const removeFloat = (e) => { if(!searchZone.contains(e.target)) { searchZone.classList.remove('floating-top'); document.body.style.paddingTop = '0px'; document.removeEventListener('click', removeFloat); } };
        setTimeout(() => document.addEventListener('click', removeFloat), 50);
        searchInput.focus();
    }
    searchInput.addEventListener('focus', enableFloating);

    // ========== INIT ==========
    detectLocation().then(() => {
        const restored = restoreSavedState();
        if (!restored) loadAllFeeds().then(() => initScrollObserver());
        else { initScrollObserver(); setTimeout(() => attemptBackgroundFetch(), 2000); }
    });
})();
