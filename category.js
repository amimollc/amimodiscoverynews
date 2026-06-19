// ================================================================
//  category.js – FULL with ad script in renderAdBanner()
// ================================================================

(function() {
  'use strict';

  // =============================================================
  // 1. FULL FEED LISTS
  // =============================================================

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
    { name: "Healthline", url: "https://www.healthline.com/feeds/rss", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Healthline" },
    { name: "WHO News", url: "https://www.who.int/rss-feeds/news-english.xml", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=WHO" },
    { name: "Harvard Health", url: "https://www.health.harvard.edu/feed", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Harvard+Health" },
    { name: "Medical Xpress", url: "https://medicalxpress.com/rss/", category: "Health", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Medical+Xpress" }
  ];

  const localMap = new Map();
  localMap.set("ZM", [
    { name: "Lusaka Times", url: "https://www.lusakatimes.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Lusaka" },
    { name: "Zambia Daily Mail", url: "https://www.daily-mail.co.zm/?feed=rss2", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Zambia+Mail" },
    { name: "Zambian Football", url: "https://zambianfootball.co.zm/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Zambia+Sports" },
    { name: "Zambia Reports", url: "https://zambiareports.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Zambia+Reports" },
    { name: "News Diggers Zambia", url: "https://diggers.news/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=News+Diggers" },
    { name: "Mwebantu", url: "https://mwebantu.news/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Mwebantu" },
    { name: "Zambia Sports News", url: "https://zambiasportsnews.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Zambia+Sports" },
    { name: "Zambia Politics Watch", url: "https://zambiapoliticswatch.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Politics+Watch" },
    { name: "Zambia Business Times", url: "https://zambiabtimes.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=ZBT" },
    { name: "Zambia Health News", url: "https://zambiahealthnews.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Health+ZM" },
    { name: "Zambian Observer", url: "https://zambianobserver.com/feed/", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=Observer" }
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

  const FALLBACK_LOCAL_FEEDS = [
    { name: "World News (VOA)", url: "https://www.voanews.com/rss", category: "Local", imgFallback: "https://placehold.co/800x450/3b82f6/white?text=VOA" }
  ];

  // =============================================================
  // 2. HELPER FUNCTIONS
  // =============================================================

  function generateViews(title) {
    let hash = 0;
    for (let i = 0; i < title.length; i++) hash = ((hash << 5) - hash) + title.charCodeAt(i);
    return Math.abs(hash) % 300000 + 5000;
  }

  function formatViews(num) {
    return num >= 1000000 ? (num / 1000000).toFixed(1) + 'M' :
           num >= 1000    ? (num / 1000).toFixed(1) + 'K' : num;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[m]);
  }

  function showToast(msg) {
    const t = document.createElement('div');
    t.innerText = msg;
    t.style.position = 'fixed';
    t.style.bottom = '70px';
    t.style.left = '20px';
    t.style.background = 'var(--accent-dark)';
    t.style.color = 'white';
    t.style.padding = '8px 18px';
    t.style.borderRadius = '40px';
    t.style.zIndex = '9999';
    t.style.backdropFilter = 'blur(8px)';
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2000);
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
      'Local': '4c1d95', 'World': '1e40af'
    };
    const color = categoryColors[feedCfg.category] || '3b82f6';
    return `https://placehold.co/800x450/${color}/white?text=${encodeURIComponent(feedCfg.name)}`;
  }

  function setImageWithRetry(imgElement, src, retries = 3, timeout = 3000) {
    let attempt = 0;
    const tryLoad = () => {
      const timer = setTimeout(() => {
        if (attempt < retries) { attempt++; tryLoad(); }
        else imgElement.src = 'https://placehold.co/800x450/6b7280/white?text=Image+Failed';
      }, timeout);
      imgElement.onload = () => clearTimeout(timer);
      imgElement.onerror = () => {
        clearTimeout(timer);
        if (attempt < retries) { attempt++; tryLoad(); }
        else imgElement.src = 'https://placehold.co/800x450/6b7280/white?text=Image+Failed';
      };
      imgElement.src = src;
    };
    tryLoad();
  }

  function lazyLoadImages() {
    const images = document.querySelectorAll('.card-img[data-src]');
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
  // 3. FETCH FEED
  // =============================================================

  async function fetchFeed(feedCfg) {
    try {
      const fresh = Date.now();
      const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedCfg.url)}&_fresh=${fresh}`;
      const resp = await fetch(proxyUrl, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' }
      });
      const data = await resp.json();
      if (data.status !== 'ok') return [];
      return data.items.slice(0, 15).map(item => {
        const imageUrl = extractImageFromItem(item, feedCfg);
        return {
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          description: (item.description || '').replace(/<[^>]*>/g, '').substring(0, 200),
          source: feedCfg.name,
          category: feedCfg.category,
          imageUrl: imageUrl,
          views: generateViews(item.title)
        };
      });
    } catch (e) {
      console.warn(`Failed to fetch ${feedCfg.name}`, e);
      return [];
    }
  }

  // =============================================================
  // 4. RENDER ARTICLE CARD
  // =============================================================

  function renderArticleCard(art) {
    const saved = JSON.parse(localStorage.getItem("amimo_saved") || "[]");
    const isSaved = saved.some(s => s.link === art.link);
    const formattedDate = new Date(art.pubDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    return `<div class="news-card">
      <img class="card-img" data-src="${art.imageUrl}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" loading="lazy">
      <div class="card-body">
        <div class="news-title"><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></div>
        <div class="news-meta"><span class="source-tag"><i class="fas fa-globe"></i> ${escapeHtml(art.source)}</span><span><i class="far fa-calendar-alt"></i> ${formattedDate}</span><span><i class="fas fa-eye"></i> ${formatViews(art.views)}</span></div>
        <div class="news-desc">${escapeHtml(art.description)}</div>
        <div class="action-row">
          <a href="${art.link}" target="_blank" class="btn-primary"><i class="fas fa-external-link-alt"></i> Read</a>
          <button class="btn-save save-btn" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${art.imageUrl}" data-source="${escapeHtml(art.source)}" data-desc="${escapeHtml(art.description)}">${isSaved ? '✅ Saved' : '💾 Save'}</button>
          <button class="btn-share share-btn" data-url="${art.link}" data-title="${escapeHtml(art.title)}"><i class="fas fa-share-alt"></i> Share</button>
        </div>
      </div>
    </div>`;
  }

  // =============================================================
  // 5. AD BANNER – INCLUDES YOUR AD SCRIPT
  // =============================================================

  function renderAdBanner() {
    // Your ad script is inserted directly – it will render the 468×60 iframe ad
    return `<div class="inline-ad">
              <script>
                atOptions = {
                  'key' : '4704d9e1de5c9e734e236139fd2ebaaf',
                  'format' : 'iframe',
                  'height' : 60,
                  'width' : 468,
                  'params' : {}
                };
                document.write('<scr' + 'ipt src="https://www.highperformanceformat.com/4704d9e1de5c9e734e236139fd2ebaaf/invoke.js"><\/scr' + 'ipt>');
              </script>
            </div>`;
  }

  // =============================================================
  // 6. SUBCATEGORY MAPPING FOR LOCAL
  // =============================================================

  function getLocalSubFeeds(countryCode) {
    const base = localMap.get(countryCode) || FALLBACK_LOCAL_FEEDS;
    const top = base.filter(f => /lusaka|daily.?mail|reports|diggers|mwebantu|observer/i.test(f.name));
    const headline = base.filter(f => /lusaka|daily.?mail|reports|diggers|mwebantu|observer|times/i.test(f.name));
    const politics = base.filter(f => /politics|watch|reports|observer/i.test(f.name));
    const football = base.filter(f => /football|sports/i.test(f.name));
    const used = new Set([...top, ...headline, ...politics, ...football].map(f => f.url));
    const discover = base.filter(f => !used.has(f.url));
    const worldMix = WORLD_FEEDS.slice(0, 10);
    return { top, headline, politics, football, discover: [...discover, ...worldMix] };
  }

  // =============================================================
  // 7. GLOBALS
  // =============================================================

  let categoryArticles = [];
  let displayLimit = 10;
  let isLoadingMore = false;
  let allFetched = false;
  let feedPool = [];
  let feedIndex = 0;
  let usedFeedUrls = new Set();
  let sentinel = null;
  let observer = null;

  let localSections = {
    top: { articles: [], feedPool: [], feedIndex: 0, displayLimit: 10, allFetched: false, sentinel: null, observer: null, isLoading: false, usedUrls: new Set() },
    headline: { articles: [], feedPool: [], feedIndex: 0, displayLimit: 10, allFetched: false, sentinel: null, observer: null, isLoading: false, usedUrls: new Set() },
    politics: { articles: [], feedPool: [], feedIndex: 0, displayLimit: 10, allFetched: false, sentinel: null, observer: null, isLoading: false, usedUrls: new Set() },
    football: { articles: [], feedPool: [], feedIndex: 0, displayLimit: 10, allFetched: false, sentinel: null, observer: null, isLoading: false, usedUrls: new Set() },
    discover: { articles: [], feedPool: [], feedIndex: 0, displayLimit: 10, allFetched: false, sentinel: null, observer: null, isLoading: false, usedUrls: new Set() }
  };

  // =============================================================
  // 8. LOCATION BADGE
  // =============================================================

  function updateLocationBadge() {
    const country = localStorage.getItem('amimo_country') || 'ZM';
    const badge = document.getElementById('countryBadge');
    if (badge) {
      badge.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${country} <i class="fas fa-chevron-down" style="font-size:0.6rem;margin-left:4px;"></i>`;
    }
  }

  document.getElementById('countryBadge')?.addEventListener('click', function(e) {
    e.stopPropagation();
    const current = localStorage.getItem('amimo_country') || 'ZM';
    const newCountry = prompt('Enter your country code (e.g., ZM, US, GB):', current);
    if (newCountry && newCountry.trim().length === 2) {
      localStorage.setItem('amimo_country', newCountry.trim().toUpperCase());
      updateLocationBadge();
      showToast('Country updated. Reloading category...');
      loadCategory();
    } else if (newCountry !== null) {
      showToast('Please enter a valid 2-letter country code.');
    }
  });

  // =============================================================
  // 9. STATE PERSISTENCE
  // =============================================================

  function saveCategoryState() {
    const category = new URLSearchParams(window.location.search).get('cat') || 'World';
    const state = {
      category: category,
      scrollY: window.scrollY,
      displayLimit: displayLimit,
      feedIndex: feedIndex,
      allFetched: allFetched,
      articlesCount: categoryArticles.length
    };
    if (category === 'Local') {
      state.localSections = {};
      for (const key of ['top', 'headline', 'politics', 'football', 'discover']) {
        const sec = localSections[key];
        state.localSections[key] = {
          displayLimit: sec.displayLimit,
          feedIndex: sec.feedIndex,
          allFetched: sec.allFetched,
          articlesCount: sec.articles.length
        };
      }
    }
    sessionStorage.setItem('amimo_category_state', JSON.stringify(state));
  }

  function restoreCategoryState() {
    const stored = sessionStorage.getItem('amimo_category_state');
    if (!stored) return;
    try {
      const state = JSON.parse(stored);
      const currentCat = new URLSearchParams(window.location.search).get('cat') || 'World';
      if (state.category === currentCat) {
        displayLimit = state.displayLimit || 10;
        feedIndex = state.feedIndex || 0;
        allFetched = state.allFetched || false;
        if (currentCat === 'Local' && state.localSections) {
          for (const key of ['top', 'headline', 'politics', 'football', 'discover']) {
            if (state.localSections[key]) {
              const sec = localSections[key];
              const st = state.localSections[key];
              sec.displayLimit = st.displayLimit || 10;
              sec.feedIndex = st.feedIndex || 0;
              sec.allFetched = st.allFetched || false;
            }
          }
        }
        setTimeout(() => {
          window.scrollTo(0, state.scrollY || 0);
        }, 600);
      }
      sessionStorage.removeItem('amimo_category_state');
    } catch (e) {
      sessionStorage.removeItem('amimo_category_state');
    }
  }

  window.addEventListener('beforeunload', saveCategoryState);

  // =============================================================
  // 10. DYNAMIC POOL REFILL
  // =============================================================

  function refillGlobalPool() {
    const available = WORLD_FEEDS.filter(f => !usedFeedUrls.has(f.url));
    if (available.length === 0) {
      usedFeedUrls.clear();
      return refillGlobalPool();
    }
    const newFeeds = available.sort(() => Math.random() - 0.5).slice(0, 10);
    newFeeds.forEach(f => usedFeedUrls.add(f.url));
    feedPool = feedPool.concat(newFeeds);
  }

  function refillSectionPool(sectionKey) {
    const sec = localSections[sectionKey];
    const available = WORLD_FEEDS.filter(f => !sec.usedUrls.has(f.url));
    if (available.length === 0) {
      sec.usedUrls.clear();
      return refillSectionPool(sectionKey);
    }
    const newFeeds = available.sort(() => Math.random() - 0.5).slice(0, 5);
    newFeeds.forEach(f => sec.usedUrls.add(f.url));
    sec.feedPool = sec.feedPool.concat(newFeeds);
  }

  // =============================================================
  // 11. RENDER HORIZONTAL SECTION
  // =============================================================

  function getSectionTitle(key) {
    const titles = { top: '🔥 Top Stories', headline: '📰 Main Headlines', politics: '🏛️ Politics', football: '⚽ Football', discover: '🔍 Discover More' };
    return titles[key] || key;
  }

  function renderHorizontalSection(containerId, title, articles, sectionKey) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (!articles || !articles.length) {
      container.innerHTML = `<p style="padding:1rem;color:var(--text-muted);">No articles in this section.</p>`;
      return;
    }
    const sec = localSections[sectionKey];
    const toShow = articles.slice(0, sec.displayLimit);
    let html = `<div class="horizontal-section">
                  <h3 class="section-title">${title}</h3>
                  <div class="horizontal-scroll" style="display:flex;overflow-x:auto;gap:1rem;padding-bottom:0.5rem;scroll-snap-type:x mandatory;">`;
    toShow.forEach(art => {
      html += renderSmallArticleCard(art);
      // Ad after every 5 articles in horizontal section
      if ((toShow.indexOf(art) + 1) % 5 === 0 && (toShow.indexOf(art) + 1) < toShow.length) {
        html += renderAdBanner();
      }
    });
    html += `</div>`;
    if (sec.displayLimit < articles.length || sec.feedIndex < sec.feedPool.length) {
      html += `<div class="section-sentinel" id="${sectionKey}Sentinel" style="height:5px;margin:10px 0;"></div>`;
    }
    html += `</div>`;
    container.innerHTML = html;
    document.querySelectorAll(`#${containerId} .save-btn`).forEach(btn => {
      btn.removeEventListener('click', saveHandler);
      btn.addEventListener('click', saveHandler);
    });
    document.querySelectorAll(`#${containerId} .share-btn`).forEach(btn => {
      btn.removeEventListener('click', shareHandler);
      btn.addEventListener('click', shareHandler);
    });
    lazyLoadImages();
    const sentinelEl = document.getElementById(`${sectionKey}Sentinel`);
    if (sentinelEl) {
      localSections[sectionKey].sentinel = sentinelEl;
      setupSectionInfinite(sectionKey);
    }
  }

  function renderSmallArticleCard(art) {
    const saved = JSON.parse(localStorage.getItem("amimo_saved") || "[]");
    const isSaved = saved.some(s => s.link === art.link);
    return `<div class="horizontal-card news-card" style="flex:0 0 240px;scroll-snap-align:start;">
      <img class="card-img" data-src="${art.imageUrl}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" loading="lazy" style="height:130px;">
      <div class="card-body" style="padding:0.6rem;">
        <div class="news-title" style="font-size:0.85rem;line-height:1.2;"><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></div>
        <div class="news-meta" style="font-size:0.65rem;margin:0.2rem 0;"><span class="source-tag">${escapeHtml(art.source)}</span></div>
        <div class="action-row" style="margin-top:0.3rem;gap:0.3rem;">
          <a href="${art.link}" target="_blank" class="btn-primary" style="padding:0.2rem 0.6rem;font-size:0.6rem;">Read</a>
          <button class="btn-save save-btn" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${art.imageUrl}" data-source="${escapeHtml(art.source)}" data-desc="${escapeHtml(art.description)}" style="padding:0.2rem 0.6rem;font-size:0.6rem;">${isSaved ? '✅' : '💾'}</button>
          <button class="btn-share share-btn" data-url="${art.link}" data-title="${escapeHtml(art.title)}" style="padding:0.2rem 0.6rem;font-size:0.6rem;"><i class="fas fa-share-alt"></i></button>
        </div>
      </div>
    </div>`;
  }

  // =============================================================
  // 12. SECTION INFINITE SCROLL
  // =============================================================

  function setupSectionInfinite(sectionKey) {
    const sec = localSections[sectionKey];
    if (sec.observer) sec.observer.disconnect();
    if (!sec.sentinel) return;
    sec.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !sec.isLoading && !sec.allFetched) {
        loadMoreSection(sectionKey);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px 200px 0px" });
    sec.observer.observe(sec.sentinel);
  }

  async function loadMoreSection(sectionKey) {
    const sec = localSections[sectionKey];
    if (sec.isLoading) return;
    if (sec.displayLimit < sec.articles.length) {
      sec.displayLimit += 10;
      renderHorizontalSection(`${sectionKey}Section`, getSectionTitle(sectionKey), sec.articles, sectionKey);
      return;
    }
    if (sec.allFetched) return;
    sec.isLoading = true;
    const spinner = document.createElement('div');
    spinner.className = 'end-loader';
    spinner.innerHTML = '<div class="loader"></div>';
    if (sec.sentinel && sec.sentinel.parentNode) sec.sentinel.parentNode.insertBefore(spinner, sec.sentinel);

    try {
      if (sec.feedPool.length === 0 || sec.feedIndex >= sec.feedPool.length) {
        refillSectionPool(sectionKey);
        if (sec.feedPool.length === 0 || sec.feedIndex >= sec.feedPool.length) {
          sec.allFetched = true;
          if (sec.sentinel) sec.sentinel.style.display = 'none';
          spinner.remove();
          sec.isLoading = false;
          return;
        }
      }
      const batch = sec.feedPool.slice(sec.feedIndex, sec.feedIndex + 5);
      sec.feedIndex += 5;
      if (batch.length === 0) {
        refillSectionPool(sectionKey);
        sec.isLoading = false;
        loadMoreSection(sectionKey);
        return;
      }
      const results = await Promise.all(batch.map(f => fetchFeed(f)));
      let newArticles = [];
      results.forEach(r => newArticles.push(...r));
      const existing = new Set(sec.articles.map(a => (a.link || '').split('?')[0]));
      const unique = newArticles.filter(a => !existing.has((a.link || '').split('?')[0]));
      if (unique.length) {
        unique.forEach(a => a.views = generateViews(a.title));
        sec.articles = [...sec.articles, ...unique];
        sec.displayLimit += unique.length;
        renderHorizontalSection(`${sectionKey}Section`, getSectionTitle(sectionKey), sec.articles, sectionKey);
        showToast(`✨ ${unique.length} new articles in ${getSectionTitle(sectionKey)}`);
      } else {
        if (sec.feedIndex < sec.feedPool.length) {
          sec.isLoading = false;
          loadMoreSection(sectionKey);
          return;
        } else {
          refillSectionPool(sectionKey);
          if (sec.feedIndex < sec.feedPool.length) {
            sec.isLoading = false;
            loadMoreSection(sectionKey);
            return;
          } else {
            sec.allFetched = true;
            if (sec.sentinel) sec.sentinel.style.display = 'none';
          }
        }
      }
      spinner.remove();
    } catch (e) {
      console.error(e);
      spinner.remove();
      const retry = document.createElement('div');
      retry.className = 'end-loader';
      retry.innerHTML = `<div><i class="fas fa-exclamation-triangle"></i> Failed to load more. <button class="retry-button">Retry</button></div>`;
      retry.querySelector('.retry-button').onclick = () => { retry.remove(); loadMoreSection(sectionKey); };
      if (sec.sentinel && sec.sentinel.parentNode) sec.sentinel.parentNode.insertBefore(retry, sec.sentinel);
    }
    sec.isLoading = false;
  }

  // =============================================================
  // 13. LOAD LOCAL CATEGORY (with step-by-step status)
  // =============================================================

  async function loadLocalCategory() {
    const statusDiv = document.getElementById('statusMsg');
    statusDiv.style.display = 'block';
    const userCountry = localStorage.getItem('amimo_country') || 'ZM';
    const subFeeds = getLocalSubFeeds(userCountry);

    const sectionKeys = ['top', 'headline', 'politics', 'football', 'discover'];
    const sectionNames = {
      top: 'Top Stories',
      headline: 'Main Headlines',
      politics: 'Politics',
      football: 'Football',
      discover: 'Discover More'
    };

    for (const key of sectionKeys) {
      statusDiv.innerHTML = `<div class="loader"></div> Loading ${sectionNames[key]}...`;
      const feeds = subFeeds[key] || [];
      const sec = localSections[key];
      sec.feedPool = feeds.slice();
      sec.feedIndex = 0;
      sec.articles = [];
      sec.displayLimit = 10;
      sec.allFetched = false;
      sec.usedUrls.clear();
      feeds.forEach(f => sec.usedUrls.add(f.url));
      const initialBatch = feeds.slice(0, 10);
      sec.feedIndex = 10;
      const results = await Promise.all(initialBatch.map(f => fetchFeed(f)));
      let articles = [];
      results.forEach(r => articles.push(...r));
      const uniqueMap = new Map();
      articles.forEach(a => { const link = (a.link || '').split('?')[0]; if (!uniqueMap.has(link)) uniqueMap.set(link, a); });
      articles = Array.from(uniqueMap.values());
      articles.forEach(a => a.views = generateViews(a.title));
      articles.sort((a,b) => new Date(b.pubDate) - new Date(a.pubDate));
      sec.articles = articles;
      statusDiv.innerHTML = `✅ ${sectionNames[key]}: ${articles.length} articles loaded.`;
      await new Promise(r => setTimeout(r, 200));
    }

    statusDiv.innerHTML = '✅ All sections loaded! Rendering...';
    await new Promise(r => setTimeout(r, 300));
    statusDiv.style.display = 'none';

    const sectionOrder = ['top', 'headline', 'politics', 'football'];
    for (const key of sectionOrder) {
      const containerId = `${key}Section`;
      if (document.getElementById(containerId)) {
        renderHorizontalSection(containerId, getSectionTitle(key), localSections[key].articles, key);
      }
    }

    categoryArticles = localSections.discover.articles;
    displayLimit = Math.min(10, categoryArticles.length);
    feedPool = localSections.discover.feedPool;
    feedIndex = localSections.discover.feedIndex;
    allFetched = localSections.discover.allFetched;
    usedFeedUrls = localSections.discover.usedUrls;
    renderCategoryFeed();
  }

  // =============================================================
  // 14. REGULAR CATEGORY LOAD
  // =============================================================

  async function loadRegularCategory(category) {
    const statusDiv = document.getElementById('statusMsg');
    statusDiv.style.display = 'block';
    const userCountry = localStorage.getItem('amimo_country') || 'ZM';

    let feeds = [];
    if (category === 'Local') {
      feeds = localMap.get(userCountry) || FALLBACK_LOCAL_FEEDS;
      feeds = feeds.concat(WORLD_FEEDS.slice(0, 10));
    } else {
      feeds = WORLD_FEEDS.filter(f => f.category === category);
      if (feeds.length === 0) feeds = WORLD_FEEDS.slice(0, 15);
    }
    feeds = feeds.sort(() => Math.random() - 0.5);
    feedPool = feeds.slice();
    feedIndex = 0;
    usedFeedUrls.clear();
    feeds.forEach(f => usedFeedUrls.add(f.url));
    categoryArticles = [];
    displayLimit = 10;
    allFetched = false;

    statusDiv.innerHTML = `<div class="loader"></div> Fetching ${category} news...`;

    const initialBatch = feeds.slice(0, 10);
    feedIndex = 10;
    let results = await Promise.all(initialBatch.map(f => fetchFeed(f)));
    let articles = [];
    results.forEach(r => articles.push(...r));

    const uniqueMap = new Map();
    articles.forEach(a => {
      const key = (a.link || '').split('?')[0];
      if (!uniqueMap.has(key)) uniqueMap.set(key, a);
    });
    articles = Array.from(uniqueMap.values());
    articles.forEach(a => { a.views = generateViews(a.title); });
    articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    let attempts = 0;
    while (articles.length < 5 && feedIndex < feeds.length && attempts < 5) {
      attempts++;
      statusDiv.innerHTML = `Fetching more articles... (${articles.length} loaded)`;
      const batch = feeds.slice(feedIndex, feedIndex + 5);
      feedIndex += batch.length;
      if (batch.length === 0) break;
      const extraResults = await Promise.all(batch.map(f => fetchFeed(f)));
      let extra = [];
      extraResults.forEach(r => extra.push(...r));
      const existing = new Set(articles.map(a => (a.link || '').split('?')[0]));
      const uniqueExtra = extra.filter(a => !existing.has((a.link || '').split('?')[0]));
      articles.push(...uniqueExtra);
      articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    }

    if (articles.length === 0) {
      statusDiv.innerHTML = '<p>No articles found. Try again later.</p>';
      return;
    }

    categoryArticles = articles;
    displayLimit = Math.min(10, categoryArticles.length);
    statusDiv.style.display = 'none';
    renderCategoryFeed();

    if (feedIndex < feeds.length && categoryArticles.length > 0) {
      ensureSentinel();
      initInfiniteScroll();
    } else {
      allFetched = true;
      if (sentinel) sentinel.style.display = 'none';
    }
  }

  // =============================================================
  // 15. RENDER CATEGORY FEED (with ad banners)
  // =============================================================

  function renderCategoryFeed() {
    const feedDiv = document.getElementById('categoryFeed');
    const toRender = categoryArticles.slice(0, displayLimit);
    if (toRender.length === 0) {
      feedDiv.innerHTML = '<div style="padding:2rem;text-align:center;">📭 No articles found.</div>';
      return;
    }
    let html = '';
    toRender.forEach((art, index) => {
      html += renderArticleCard(art);
      if ((index + 1) % 5 === 0 && (index + 1) < toRender.length) {
        html += renderAdBanner();
      }
    });
    feedDiv.innerHTML = html;
    attachEvents();
    lazyLoadImages();
    ensureSentinel();
    initInfiniteScroll();
  }

  // =============================================================
  // 16. MAIN INFINITE SCROLL
  // =============================================================

  function ensureSentinel() {
    const existing = document.getElementById('loadSentinel');
    if (existing) existing.remove();
    const el = document.createElement('div');
    el.id = 'loadSentinel';
    el.style.height = '10px';
    el.style.margin = '20px 0';
    const feedDiv = document.getElementById('categoryFeed');
    if (feedDiv && feedDiv.parentNode) {
      feedDiv.parentNode.insertBefore(el, feedDiv.nextSibling);
    }
    sentinel = el;
  }

  function initInfiniteScroll() {
    if (observer) observer.disconnect();
    ensureSentinel();
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoadingMore && !allFetched) {
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
      spinner.innerHTML = '<div class="loader"></div> Loading more...';
      if (sentinel && sentinel.parentNode) sentinel.parentNode.insertBefore(spinner, sentinel);
    } else if (!show && spinner) spinner.remove();
  }

  function showRetryButton(message, retryCallback) {
    let retryDiv = document.getElementById('retryContainer');
    if (retryDiv) retryDiv.remove();
    const wrapper = document.createElement('div');
    wrapper.id = 'retryContainer';
    wrapper.className = 'end-loader';
    wrapper.innerHTML = `<div><i class="fas fa-exclamation-triangle"></i> ${message}</div>
                         <button class="retry-button">Retry</button>`;
    wrapper.querySelector('.retry-button').onclick = async () => {
      wrapper.innerHTML = '<div class="loader"></div> Retrying...';
      await retryCallback();
    };
    if (sentinel && sentinel.parentNode) sentinel.parentNode.insertBefore(wrapper, sentinel);
  }

  async function loadMoreArticles() {
    if (isLoadingMore) return;
    if (displayLimit < categoryArticles.length) {
      displayLimit = Math.min(displayLimit + 10, categoryArticles.length);
      renderCategoryFeed();
      const category = new URLSearchParams(window.location.search).get('cat') || 'World';
      if (category === 'Local') {
        localSections.discover.displayLimit = displayLimit;
        localSections.discover.articles = categoryArticles;
        localSections.discover.allFetched = allFetched;
      }
      return;
    }
    if (allFetched) {
      if (sentinel) sentinel.style.display = 'none';
      showEndSpinner(false);
      return;
    }

    if (feedPool.length === 0 || feedIndex >= feedPool.length) {
      refillGlobalPool();
      if (feedPool.length === 0 || feedIndex >= feedPool.length) {
        allFetched = true;
        if (sentinel) sentinel.style.display = 'none';
        showEndSpinner(false);
        return;
      }
    }

    isLoadingMore = true;
    showEndSpinner(true);

    try {
      const batchSize = 5;
      const nextFeeds = feedPool.slice(feedIndex, feedIndex + batchSize);
      feedIndex += batchSize;

      if (nextFeeds.length === 0) {
        refillGlobalPool();
        isLoadingMore = false;
        loadMoreArticles();
        return;
      }

      const results = await Promise.all(nextFeeds.map(f => fetchFeed(f)));
      let newArticles = [];
      results.forEach(r => newArticles.push(...r));

      const existingLinks = new Set(categoryArticles.map(a => (a.link || '').split('?')[0]));
      const uniqueNew = newArticles.filter(a => !existingLinks.has((a.link || '').split('?')[0]));

      if (uniqueNew.length === 0) {
        isLoadingMore = false;
        showEndSpinner(false);
        if (feedIndex < feedPool.length) {
          setTimeout(() => loadMoreArticles(), 100);
        } else {
          refillGlobalPool();
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
      categoryArticles = [...categoryArticles, ...uniqueNew];
      categoryArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

      displayLimit = Math.min(displayLimit + uniqueNew.length, categoryArticles.length);
      renderCategoryFeed();
      showToast(`✨ ${uniqueNew.length} new articles loaded`);

      const category = new URLSearchParams(window.location.search).get('cat') || 'World';
      if (category === 'Local') {
        localSections.discover.articles = categoryArticles;
        localSections.discover.displayLimit = displayLimit;
        localSections.discover.feedIndex = feedIndex;
        localSections.discover.allFetched = allFetched;
        localSections.discover.usedUrls = usedFeedUrls;
      }

      if (feedIndex >= feedPool.length) {
        refillGlobalPool();
        if (feedPool.length === 0 || feedIndex >= feedPool.length) {
          allFetched = true;
          if (sentinel) sentinel.style.display = 'none';
        }
      }
      showEndSpinner(false);

    } catch (err) {
      console.error(err);
      showRetryButton("Failed to load more. Retry?", loadMoreArticles);
    }

    isLoadingMore = false;
    showEndSpinner(false);
  }

  // =============================================================
  // 17. SAVE / SHARE EVENTS
  // =============================================================

  function attachEvents() {
    document.querySelectorAll('.save-btn').forEach(btn => {
      btn.removeEventListener('click', saveHandler);
      btn.addEventListener('click', saveHandler);
    });
    document.querySelectorAll('.share-btn').forEach(btn => {
      btn.removeEventListener('click', shareHandler);
      btn.addEventListener('click', shareHandler);
    });
  }

  function saveHandler(e) {
    const btn = e.currentTarget;
    const link = btn.dataset.link;
    let saved = JSON.parse(localStorage.getItem("amimo_saved") || "[]");
    if (!saved.some(s => s.link === link)) {
      saved.push({
        title: btn.dataset.title,
        link,
        imageUrl: btn.dataset.img,
        source: btn.dataset.source,
        description: btn.dataset.desc,
        savedAt: Date.now()
      });
      localStorage.setItem("amimo_saved", JSON.stringify(saved));
      btn.innerHTML = '✅ Saved';
      btn.style.background = '#10b981';
      showToast('Saved offline!');
    } else {
      saved = saved.filter(s => s.link !== link);
      localStorage.setItem("amimo_saved", JSON.stringify(saved));
      btn.innerHTML = '💾 Save';
      btn.style.background = '#2563eb';
      showToast('Removed');
    }
    updateSavedCounter();
  }

  function shareHandler(e) {
    const btn = e.currentTarget;
    const title = btn.dataset.title;
    const url = btn.dataset.url;
    if (navigator.share) {
      try { navigator.share({ title, url }); } catch (e) {}
    } else {
      navigator.clipboard.writeText(url);
      showToast('Link copied!');
    }
  }

  function updateSavedCounter() {
    const saved = JSON.parse(localStorage.getItem("amimo_saved") || "[]");
    const c = document.getElementById('savedCounter');
    if (c) c.innerText = saved.length;
  }

  // =============================================================
  // 18. MAIN LOAD CATEGORY
  // =============================================================

  async function loadCategory() {
    const category = new URLSearchParams(window.location.search).get('cat') || 'World';
    const titleEl = document.getElementById('categoryTitle');
    titleEl.innerHTML = `<i class="fas fa-tag"></i> ${category}`;

    updateLocationBadge();

    if (category === 'Local') {
      document.getElementById('categoryFeed').style.display = 'block';
      document.getElementById('localSectionsContainer').style.display = 'block';
      await loadLocalCategory();
    } else {
      document.getElementById('categoryFeed').style.display = 'block';
      document.getElementById('localSectionsContainer').style.display = 'none';
      await loadRegularCategory(category);
    }
    restoreCategoryState();
  }

  // =============================================================
  // 19. NAVIGATION & UI EVENTS
  // =============================================================

  document.getElementById('backToHomeBtn')?.addEventListener('click', () => {
    window.location.href = './';
  });

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = btn.dataset.nav;
      let url = './';
      if (nav === 'saved') url += '?view=saved';
      else if (nav === 'tools') url += '?view=tools';
      else if (nav === 'live') url += '?view=live';
      window.location.href = url;
    });
  });

  document.getElementById('menuHome')?.addEventListener('click', () => {
    window.location.href = './';
    closeMenu();
  });
  document.getElementById('menuSaved')?.addEventListener('click', () => {
    window.location.href = './?view=saved';
    closeMenu();
  });
  document.getElementById('menuSearch')?.addEventListener('click', () => {
    document.getElementById('searchInput')?.focus();
    closeMenu();
  });
  document.getElementById('menuAbout')?.addEventListener('click', () => {
    alert("Amimo Discovery Category Page\n\n✅ 10 articles loaded at a time\n✅ Step-by-step status for Local\n✅ Infinite scroll with dynamic refill\n✅ Ad banners with your ad ID\n✅ All features included");
    closeMenu();
  });

  document.getElementById('searchBtn')?.addEventListener('click', () => {
    const q = document.getElementById('searchInput')?.value.trim();
    if (q) window.location.href = `./seachresult.html?q=${encodeURIComponent(q)}`;
  });
  document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') document.getElementById('searchBtn')?.click();
  });

  document.getElementById('viewSavedBtn')?.addEventListener('click', () => {
    window.location.href = './?view=saved';
  });

  const sideMenu = document.getElementById('sideMenu');
  const overlay = document.getElementById('overlay');
  document.getElementById('hamburgerBtn')?.addEventListener('click', () => {
    sideMenu?.classList.add('open');
    overlay?.classList.add('show');
  });
  document.getElementById('closeMenuBtn')?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  function closeMenu() {
    sideMenu?.classList.remove('open');
    overlay?.classList.remove('show');
  }

  const themeSwitch = document.getElementById('themeSwitch');
  if (themeSwitch) {
    themeSwitch.addEventListener('change', (e) => {
      document.body.classList.toggle('dark', e.target.checked);
      localStorage.setItem('blue_theme', e.target.checked ? 'dark' : 'light');
    });
    if (localStorage.getItem('blue_theme') === 'dark') {
      document.body.classList.add('dark');
      themeSwitch.checked = true;
    }
  }

  // =============================================================
  // 20. START
  // =============================================================

  updateSavedCounter();
  loadCategory();

})();