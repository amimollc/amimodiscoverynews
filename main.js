// ===================== MAIN.JS - Amimo Discovery (Fully Updated) =====================
(function() {
    // ---------- GLOBAL DATA ----------
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
    let carouselInterval = null;
    let autoScrollActive = true;
    let currentView = "home";

    // RSS FEEDS & local map (same as before)
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
    localMap.set("US", [{ name: "CNN US", url: "https://rss.cnn.com/rss/edition_us.rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=US+News" }, { name: "NY Times", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=NYT" }]);
    localMap.set("GB", [{ name: "BBC UK", url: "https://feeds.bbci.co.uk/news/uk/rss.xml", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=BBC+UK" }]);
    localMap.set("IN", [{ name: "Times of India", url: "https://timesofindia.indiatimes.com/rssfeedmostrecent.cms", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=TOI" }]);
    localMap.set("CA", [{ name: "CBC", url: "https://www.cbc.ca/cmlink/rss-topstories", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=CBC" }]);
    localMap.set("AU", [{ name: "ABC Australia", url: "https://www.abc.net.au/news/feed/51120/rss.xml", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=ABC+AU" }]);

    // Helper functions
    function escapeHtml(str) { return str?.replace(/[&<>]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;'})[m]) || ''; }
    function generateViews(title) { let h=0; for(let i=0;i<title.length;i++) h=((h<<5)-h)+title.charCodeAt(i); return Math.abs(h)%300000+5000; }
    function formatViews(n){ return n>=1000000?(n/1000000).toFixed(1)+'M':n>=1000?(n/1000).toFixed(1)+'K':n; }
    function getImageUrl(art, cat) { return art.imageUrl && art.imageUrl.startsWith('http') ? art.imageUrl : `https://placehold.co/800x450/3b82f6/white?text=${escapeHtml(art.source||cat)}`; }
    function showToast(msg) { 
        let t=document.createElement('div'); 
        t.innerText=msg; 
        t.style.position='fixed'; 
        t.style.bottom='90px'; 
        t.style.left='20px'; 
        t.style.background='var(--accent-dark)'; 
        t.style.color='white'; 
        t.style.padding='8px 18px'; 
        t.style.borderRadius='40px'; 
        t.style.zIndex='9999'; 
        t.style.backdropFilter='blur(8px)';
        document.body.appendChild(t); 
        setTimeout(()=>t.remove(),2000); 
    }
    
    // Fetch RSS feed
    async function fetchFeed(cfg) { 
        try { 
            let resp=await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(cfg.url)}`); 
            let data=await resp.json(); 
            if(data.status!=='ok') return []; 
            return data.items.slice(0,12).map(item=>({
                title:item.title, 
                link:item.link, 
                pubDate:item.pubDate, 
                description:(item.description||"").replace(/<[^>]*>/g,'').substring(0,200), 
                source:cfg.name, 
                category:cfg.category, 
                imageUrl:item.thumbnail||cfg.imgFallback
            })); 
        } catch(e){ return []; } 
    }

    // Load all feeds
    async function loadAllFeeds() {
        const statusDiv=document.getElementById('statusMsg');
        statusDiv.innerHTML='<div class="loader"></div> Fetching latest news from 30+ sources...';
        let allFeeds=[...WORLD_FEEDS, ...(localMap.get(userCountry)||[])];
        let results=await Promise.all(allFeeds.map(f=>fetchFeed(f)));
        let arts=[]; 
        results.forEach(r=>arts.push(...r));
        let uniqueMap=new Map(); 
        arts.forEach(a=>{if(!uniqueMap.has(a.link)) uniqueMap.set(a.link,a);});
        allArticles=Array.from(uniqueMap.values()); 
        allArticles.forEach(a=>{a.views=generateViews(a.title);});
        allArticles.sort((a,b)=>new Date(b.pubDate)-new Date(a.pubDate));
        statusDiv.innerHTML=`✅ ${allArticles.length} fresh stories ready`;
        localStorage.setItem('amimoAllArticles', JSON.stringify(allArticles.map(a=>({title:a.title,link:a.link,description:a.description,source:a.source}))));
        applyCategoryFilter(); 
        renderTrendingCarousel(); 
        updateSavedCounter();
        startCarouselAutoScroll();  // start auto-scroll after rendering
    }
    
    // Category filtering
    function applyCategoryFilter() {
        if(currentCategory==='all') currentFiltered=[...allArticles];
        else if(currentCategory==='Local') currentFiltered=allArticles.filter(a=>a.category==='Local');
        else currentFiltered=allArticles.filter(a=>a.category===currentCategory);
        displayLimit=30; 
        renderNewsFeed();
    }
    
    // Render news feed (home)
    function renderNewsFeed() {
        const feedDiv=document.getElementById('newsFeed');
        let toRender=currentFiltered.slice(0,displayLimit);
        if(!toRender.length){ feedDiv.innerHTML='<div style="padding:2rem;text-align:center;">📭 No articles in this category</div>'; return; }
        let html='';
        toRender.forEach((art,i)=>{
            let savedFlag=savedArticles.some(s=>s.link===art.link);
            let img=getImageUrl(art,art.category);
            html+=`<div class="news-card"><img class="card-img" src="${img}" onerror="this.src='https://placehold.co/400x300/3b82f6/white?text=News'"><div class="card-body"><div class="news-title"><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></div><div class="news-meta"><span class="source-tag"><i class="fas fa-globe"></i> ${escapeHtml(art.source)}</span><span>${new Date(art.pubDate).toLocaleDateString()}</span><span><i class="fas fa-eye"></i> ${formatViews(art.views)}</span></div><div class="news-desc">${escapeHtml(art.description)}</div><div class="action-row"><a href="${art.link}" target="_blank" class="btn-primary"><i class="fas fa-external-link-alt"></i> Read Original</a><button class="btn-save save-btn" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${img}" data-source="${escapeHtml(art.source)}" data-desc="${escapeHtml(art.description)}">${savedFlag?'✅ Saved':'💾 Save Offline'}</button></div></div></div>`;
            if((i+1)%5===0 && i+1<toRender.length) html+=`<div class="inline-ad"><i class="fas fa-ad"></i> Advertisement — Support Amimo</div>`;
        });
        feedDiv.innerHTML=html; 
        attachSaveEvents();
    }
    
    // Attach save button events
    function attachSaveEvents(){ 
        document.querySelectorAll('.save-btn').forEach(btn=>{ btn.removeEventListener('click',saveHandler); btn.addEventListener('click',saveHandler); }); 
    }
    
    function saveHandler(e){
        let btn=e.currentTarget, link=btn.dataset.link;
        if(!savedArticles.some(s=>s.link===link)){
            savedArticles.push({ title:btn.dataset.title, link, imageUrl:btn.dataset.img, source:btn.dataset.source, description:btn.dataset.desc, savedAt:Date.now() });
            localStorage.setItem("amimo_saved",JSON.stringify(savedArticles));
            btn.innerHTML='✅ Saved'; btn.style.background='#10b981'; showToast('Saved offline!');
        } else {
            savedArticles=savedArticles.filter(s=>s.link!==link);
            localStorage.setItem("amimo_saved",JSON.stringify(savedArticles));
            btn.innerHTML='💾 Save Offline'; btn.style.background='var(--accent-dark)'; showToast('Removed from saved');
        }
        updateSavedCounter(); 
        if(currentView==='saved') renderSavedArticles();
    }
    
    function updateSavedCounter(){ 
        let counterSpan = document.getElementById('savedCounter');
        if(counterSpan) counterSpan.innerText = savedArticles.length; 
    }
    
    // Render saved articles view
    function renderSavedArticles(){
        const savedDiv=document.getElementById('savedFeed');
        if(!savedDiv) return;
        if(!savedArticles.length){ 
            savedDiv.innerHTML='<div style="padding:2rem;text-align:center;background:var(--card-bg);border-radius:32px;"><i class="fas fa-archive"></i> No saved articles yet. Tap 💾 on any news to store offline.</div>'; 
            return; 
        }
        let html='';
        savedArticles.forEach(art=>{
            html+=`<div class="news-card"><img class="card-img" src="${art.imageUrl||'https://placehold.co/800x450/3b82f6/white?text=Saved'}" onerror="this.src='https://placehold.co/400x300/3b82f6/white?text=News'"><div class="card-body"><div class="news-title"><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></div><div class="news-meta"><span class="source-tag"><i class="fas fa-globe"></i> ${escapeHtml(art.source)}</span><span>saved offline</span></div><div class="news-desc">${escapeHtml(art.description||'No description')}</div><div class="action-row"><a href="${art.link}" target="_blank" class="btn-primary">Read Original</a><button class="btn-remove unsave-btn" data-link="${art.link}"><i class="fas fa-trash-alt"></i> Remove</button></div></div></div>`;
        });
        savedDiv.innerHTML=html;
        document.querySelectorAll('.unsave-btn').forEach(btn=>{
            btn.addEventListener('click',(e)=>{
                let link=btn.dataset.link;
                savedArticles=savedArticles.filter(s=>s.link!==link);
                localStorage.setItem("amimo_saved",JSON.stringify(savedArticles));
                updateSavedCounter();
                renderSavedArticles();
                if(currentView==='home') attachSaveEvents(); // refresh home buttons
                showToast('Article removed from saved');
            });
        });
    }
    
    // Trending carousel with auto-scroll
    function renderTrendingCarousel(){ 
        let cats=['Politics','Technology','Sports','Entertainment','Business','Health','World','Local'];
        let selected=[]; 
        for(let cat of cats){ 
            let art=allArticles.filter(a=>a.category===cat).slice(0,2); 
            selected.push(...art); 
        }
        let carousel=document.getElementById('trendingCarousel');
        if(!carousel) return;
        if(!selected.length){ carousel.innerHTML='<div>No trending available</div>'; return; }
        carousel.innerHTML=selected.map(art=>{
            let imgSrc = getImageUrl(art, art.category);
            return `<div class="trend-card-full"><img src="${imgSrc}" onerror="this.src='https://placehold.co/800x400/3b82f6/white?text=Trend'"><div class="trend-info"><h3><a href="${art.link}" target="_blank" style="text-decoration:none;">${escapeHtml(art.title)}</a></h3><div class="trend-meta"><span><i class="fas fa-globe"></i> ${art.source}</span><span><i class="fas fa-eye"></i> ${formatViews(generateViews(art.title))} views</span></div><button class="btn-save save-trend" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${imgSrc}" data-source="${art.source}" data-desc="${escapeHtml(art.description)}">💾 Save</button></div></div>`;
        }).join('');
        
        // Attach save events for trending buttons
        document.querySelectorAll('.save-trend').forEach(btn=>{ 
            btn.addEventListener('click',()=>{ 
                if(!savedArticles.some(s=>s.link===btn.dataset.link)){ 
                    savedArticles.push({ title:btn.dataset.title, link:btn.dataset.link, imageUrl:btn.dataset.img, source:btn.dataset.source, description:btn.dataset.desc, savedAt:Date.now() }); 
                    localStorage.setItem("amimo_saved",JSON.stringify(savedArticles)); 
                    btn.innerHTML='✅ Saved'; 
                    updateSavedCounter(); 
                    if(currentView==='saved') renderSavedArticles(); 
                    showToast('Saved offline');
                } else {
                    showToast('Already saved');
                }
            }); 
        });
    }
    
    // Auto-scroll logic for trending carousel
    function startCarouselAutoScroll() {
        if(carouselInterval) clearInterval(carouselInterval);
        const container = document.getElementById('trendingCarousel');
        if(!container) return;
        autoScrollActive = true;
        
        // Stop auto-scroll on hover, restart on leave
        container.addEventListener('mouseenter', () => { autoScrollActive = false; });
        container.addEventListener('mouseleave', () => { autoScrollActive = true; });
        
        carouselInterval = setInterval(() => {
            if(!autoScrollActive) return;
            if(!container) return;
            const maxScroll = container.scrollWidth - container.clientWidth;
            if(maxScroll <= 0) return;
            let newLeft = container.scrollLeft + (container.clientWidth * 0.8);
            if(newLeft >= maxScroll) newLeft = 0;
            container.scrollTo({ left: newLeft, behavior: 'smooth' });
        }, 6000);
    }
    
    // Infinite scroll observer
    function initScrollObserver(){
        if(scrollObserver) scrollObserver.disconnect();
        scrollObserver = new IntersectionObserver(async(entries)=>{ 
            if(entries[0].isIntersecting && !isLoadingMore && currentView==='home') { 
                if(displayLimit < currentFiltered.length){ 
                    isLoadingMore = true;
                    // Simulate loading more from existing articles
                    setTimeout(() => {
                        displayLimit = Math.min(displayLimit + 25, currentFiltered.length);
                        renderNewsFeed();
                        isLoadingMore = false;
                    }, 300);
                } else {
                    // Optionally fetch more from RSS (background)
                    if(!isLoadingMore && allArticles.length > 0) {
                        // background fetch can be added, but not critical for auto-scroll fix
                    }
                }
            } 
        },{threshold:0.1, rootMargin: "0px 0px 200px 0px"});
        if(sentinelElement) scrollObserver.observe(sentinelElement);
    }
    
    // Category switching
    function switchCategory(cat){ 
        if(currentCategory===cat) return; 
        currentCategory=cat; 
        let pills = document.querySelectorAll('.cat-pill');
        pills.forEach(p=>p.classList.remove('active')); 
        let activePill = Array.from(pills).find(p=>p.dataset.cat===cat); 
        if(activePill) activePill.classList.add('active'); 
        applyCategoryFilter(); 
        window.scrollTo({top:0, behavior:'smooth'}); 
    }
    
    // Detect user location
    async function detectLocation(){ 
        try{ 
            let res=await fetch('https://ipapi.co/json/'); 
            let d=await res.json(); 
            if(d.country_code){ userCountry=d.country_code; userCountryName=d.country_name||userCountry; } 
        } catch(e){ userCountry="ZM"; userCountryName="Zambia"; } 
        let badge = document.getElementById('countryBadge');
        if(badge) badge.innerHTML=`<i class="fas fa-map-marker-alt"></i> ${userCountryName}`; 
    }
    
    // View switching (home / saved)
    function showHomeView(){
        currentView='home';
        let homeDiv = document.getElementById('homeView');
        let savedDiv = document.getElementById('savedView');
        if(homeDiv) homeDiv.style.display = 'block';
        if(savedDiv) savedDiv.style.display = 'none';
        let navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(btn=>btn.classList.remove('active'));
        let homeNav = document.querySelector('.nav-item[data-nav="home"]');
        if(homeNav) homeNav.classList.add('active');
        if(scrollObserver && sentinelElement) scrollObserver.observe(sentinelElement);
        // Refresh feed in case articles changed
        renderNewsFeed();
        // Restart carousel auto-scroll if visible
        if(carouselInterval) clearInterval(carouselInterval);
        startCarouselAutoScroll();
    }
    
    function showSavedView(){
        currentView='saved';
        let homeDiv = document.getElementById('homeView');
        let savedDiv = document.getElementById('savedView');
        if(homeDiv) homeDiv.style.display = 'none';
        if(savedDiv) savedDiv.style.display = 'block';
        let navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(btn=>btn.classList.remove('active'));
        let savedNav = document.querySelector('.nav-item[data-nav="saved"]');
        if(savedNav) savedNav.classList.add('active');
        if(scrollObserver) scrollObserver.disconnect();
        renderSavedArticles();
        // Pause carousel auto-scroll when in saved view
        if(carouselInterval) clearInterval(carouselInterval);
        carouselInterval = null;
    }
    
    // Floating search bar
    function initFloatingSearch() {
        const searchZone = document.getElementById('searchZone');
        const searchInput = document.getElementById('searchInput');
        if(!searchZone || !searchInput) return;
        function enableFloating() {
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
            searchInput.focus();
        }
        searchInput.addEventListener('focus', enableFloating);
    }
    
    // ---- Event Listeners & Initialization ----
    window.onload = async () => {
        await detectLocation();
        await loadAllFeeds();
        initScrollObserver();
        initFloatingSearch();
        
        // Category pills
        document.querySelectorAll('.cat-pill').forEach(pill => {
            pill.addEventListener('click', () => switchCategory(pill.dataset.cat));
        });
        
        // Search
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        if(searchBtn) {
            searchBtn.addEventListener('click', () => { 
                let q = searchInput.value.trim(); 
                if(q) window.location.href = `seachresult.html?q=${encodeURIComponent(q)}`; 
            });
        }
        if(searchInput) {
            searchInput.addEventListener('keypress', e => { if(e.key === 'Enter') searchBtn.click(); });
        }
        
        // Dark mode
        const themeSwitch = document.getElementById('themeSwitch');
        if(themeSwitch) {
            themeSwitch.addEventListener('change', e => { 
                if(e.target.checked) document.body.classList.add('dark'); 
                else document.body.classList.remove('dark'); 
                localStorage.setItem('blue_theme', e.target.checked ? 'dark' : 'light'); 
            });
            if(localStorage.getItem('blue_theme') === 'dark') { 
                document.body.classList.add('dark'); 
                themeSwitch.checked = true; 
            }
        }
        
        // Side menu
        const hamburger = document.getElementById('hamburgerBtn');
        const sideMenu = document.getElementById('sideMenu');
        const overlay = document.getElementById('overlay');
        const closeMenuBtn = document.getElementById('closeMenuBtn');
        function closeMenu() { 
            if(sideMenu) sideMenu.classList.remove('open'); 
            if(overlay) overlay.classList.remove('show'); 
        }
        if(hamburger) {
            hamburger.onclick = () => { 
                if(sideMenu) sideMenu.classList.add('open'); 
                if(overlay) overlay.classList.add('show'); 
            };
        }
        if(closeMenuBtn) closeMenuBtn.onclick = closeMenu;
        if(overlay) overlay.onclick = closeMenu;
        
        // Menu items
        const menuHome = document.getElementById('menuHome');
        const menuSaved = document.getElementById('menuSaved');
        const menuTrending = document.getElementById('menuTrending');
        const menuNotification = document.getElementById('menuNotification');
        const menuSearch = document.getElementById('menuSearch');
        const menuAbout = document.getElementById('menuAbout');
        const viewSavedBtn = document.getElementById('viewSavedBtn');
        
        if(menuHome) menuHome.onclick = () => { showHomeView(); switchCategory('all'); closeMenu(); };
        if(menuSaved) menuSaved.onclick = () => { showSavedView(); closeMenu(); };
        if(menuTrending) menuTrending.onclick = () => { 
            const trendingSec = document.getElementById('trendingSection');
            if(trendingSec) trendingSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMenu(); 
        };
        if(menuNotification) menuNotification.onclick = () => { alert("🔔 Notifications coming soon."); closeMenu(); };
        if(menuSearch) menuSearch.onclick = () => { closeMenu(); if(searchInput) searchInput.focus(); };
        if(menuAbout) menuAbout.onclick = () => { alert("Amimo Blue v10.0\nTrending with auto-scroll\nSaved articles offline\nInfinite scroll enabled"); closeMenu(); };
        if(viewSavedBtn) viewSavedBtn.onclick = () => showSavedView();
        
        // Bottom navigation
        const bottomNavHome = document.querySelector('.nav-item[data-nav="home"]');
        const bottomNavSaved = document.querySelector('.nav-item[data-nav="saved"]');
        if(bottomNavHome) bottomNavHome.addEventListener('click', () => showHomeView());
        if(bottomNavSaved) bottomNavSaved.addEventListener('click', () => showSavedView());
        
        // Additional: if already in saved view on load (should not happen)
        showHomeView();
    };
})();
