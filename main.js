// ================================================================
//  main.js – FULL with All view showing Local sub‑sections & Discover
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

  // ---- LOCAL FEEDS with category: "Local" and section ----
  const localMap = new Map();

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

  const FALLBACK_LOCAL_FEEDS = {
    top: [
      { name: "World News (VOA)", url: "https://www.voanews.com/rss", section: "top", category: "Local" }
    ],
    politics: [
      { name: "BBC Politics", url: "https://feeds.bbci.co.uk/news/politics/rss.xml", section: "politics", category: "Local" }
    ],
    tech: [
      { name: "TechCrunch", url: "https://techcrunch.com/feed/", section: "tech", category: "Local" }
    ],
    health: [
      { name: "WHO News", url: "https://www.who.int/rss-feeds/news-english.xml", section: "health", category: "Local" }
    ],
    football: [
      { name: "ESPN", url: "https://www.espn.com/espn/rss/news", section: "football", category: "Local" }
    ],
    discover: [
      { name: "Google News (Global)", url: "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en", section: "discover", category: "Local" }
    ]
  };

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
      'Local': '4c1d95', 'World': '1e40af', 'Top': 'f59e0b'
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
  // 3. FETCH FEED – with AbortController timeout (10s)
  // =============================================================

  async function fetchFeed(feedCfg) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
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
      return data.items.slice(0, 15).map(item => {
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
  // 4. RENDER ARTICLE CARD
  // =============================================================

  function renderArticleCard(art) {
    const isSaved = savedArticles.some(s => s.link === art.link);
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
  // 5. AD BANNER – with your ad script
  // =============================================================

  function renderAdBanner() {
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
  // 6. GLOBALS
  // =============================================================

  let allArticles = [];
  let currentCategory = "all";
  let userCountry = localStorage.getItem('amimo_country') || 'ZM';
  let userCountryName = 'World';
  let savedArticles = JSON.parse(localStorage.getItem("amimo_saved") || "[]");
  let carouselInterval = null;
  let autoScrollActive = true;
  let currentView = "home";

  // Top news
  let topNewsArticles = [];
  let topNewsDisplayed = 5;
  let isLoadingTopNews = false;
  let topNewsSentinel = null;
  let topNewsObserver = null;
  let hasMoreTopNews = true;
  let topNewsFeedPool = [];
  let topNewsFeedIndex = 0;
  let usedTopNewsUrls = new Set();

  // Main feed
  let currentFiltered = [];
  let displayLimit = 20;
  let isLoadingMore = false;
  let allFetched = false;
  let feedPool = [];
  let feedIndex = 0;
  let usedFeedUrls = new Set();
  let sentinel = null;
  let observer = null;

  // Local sections
  let localSectionFeeds = {
    top: [],
    politics: [],
    tech: [],
    health: [],
    football: [],
    discover: []
  };
  let localSectionArticles = {
    top: [],
    politics: [],
    tech: [],
    health: [],
    football: [],
    discover: []
  };
  let localSectionDisplay = {
    top: 5,
    politics: 5,
    tech: 5,
    health: 5,
    football: 5,
    discover: 10
  };
  let localSectionExpanded = {
    top: false,
    politics: false,
    tech: false,
    health: false,
    football: false,
    discover: false
  };
  let localSectionAllFetched = {
    top: false,
    politics: false,
    tech: false,
    health: false,
    football: false,
    discover: false
  };

  // Discover sentinel for All view
  let discoverSentinel = null;
  let discoverObserver = null;
  let isLoadingDiscover = false;

  // =============================================================
  // 7. LOCATION & OFFLINE DETECTION
  // =============================================================

  async function detectLocation() {
    const badge = document.getElementById('countryBadge');
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
      } catch (e) {}
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
        } catch (e) {}
      }
      if (!detected) await new Promise(r => setTimeout(r, 1000));
    }
    if (!detected) { userCountry = "ZM"; userCountryName = "Zambia (fallback)"; }
    localStorage.setItem('amimo_country', userCountry);
    updateLocationBadge();
  }

  function updateLocationBadge() {
    const badge = document.getElementById('countryBadge');
    badge.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${userCountryName} <i class="fas fa-chevron-down" style="font-size:0.6rem;margin-left:4px;"></i>`;
  }

  document.getElementById('countryBadge')?.addEventListener('click', function(e) {
    e.stopPropagation();
    const newCountry = prompt('Enter your country code (e.g., ZM, US, GB):', userCountry);
    if (newCountry && newCountry.trim().length === 2) {
      userCountry = newCountry.trim().toUpperCase();
      localStorage.setItem('amimo_country', userCountry);
      const feeds = localMap.get(userCountry);
      userCountryName = feeds ? feeds[0]?.category || userCountry : userCountry;
      updateLocationBadge();
      showToast('Country updated. Reloading news...');
      loadAllFeeds();
    } else if (newCountry !== null) {
      showToast('Please enter a valid 2-letter country code.');
    }
  });

  function showOfflineOverlay(show) {
    const overlay = document.getElementById('offlineOverlay');
    if (overlay) overlay.style.display = show ? 'flex' : 'none';
  }

  function checkOnlineStatus() {
    if (!navigator.onLine) {
      showOfflineOverlay(true);
    } else {
      showOfflineOverlay(false);
    }
  }
  window.addEventListener('online', () => showOfflineOverlay(false));
  window.addEventListener('offline', () => showOfflineOverlay(true));
  document.getElementById('offlineRetryBtn')?.addEventListener('click', () => {
    if (navigator.onLine) {
      showOfflineOverlay(false);
      location.reload();
    } else {
      showToast('Still offline. Check your connection.');
    }
  });

  // =============================================================
  // 8. ENSURE CATEGORY COUNTS (Local: 10, others: 5)
  // =============================================================

  async function ensureCategoryCounts() {
    const categories = ['Local', 'World', 'Politics', 'Technology', 'Sports', 'Entertainment', 'Business', 'Health'];
    let needsMore = true;
    let iterations = 0;
    const maxIterations = 6;

    while (needsMore && iterations < maxIterations) {
      needsMore = false;
      iterations++;
      for (const cat of categories) {
        const target = (cat === 'Local') ? 10 : 5;
        const count = allArticles.filter(a => a.category === cat).length;
        if (count < target) {
          needsMore = true;
          let feedsToFetch = [];
          if (cat === 'Local') {
            const countryData = localMap.get(userCountry) || FALLBACK_LOCAL_FEEDS;
            for (let sec of ['top', 'politics', 'tech', 'health', 'football', 'discover']) {
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
            allArticles.sort((a,b)=> new Date(b.pubDate) - new Date(a.pubDate));
          }
        }
      }
    }
  }

  // =============================================================
  // 9. STATE PERSISTENCE
  // =============================================================

  function saveState() {
    const state = {
      category: currentCategory,
      scrollY: window.scrollY,
      view: currentView
    };
    sessionStorage.setItem('amimo_state', JSON.stringify(state));
  }

  function restoreState() {
    const stored = sessionStorage.getItem('amimo_state');
    if (!stored) return;
    try {
      const state = JSON.parse(stored);
      if (state.category && state.category !== 'all') {
        switchCategory(state.category);
      }
      setTimeout(() => {
        window.scrollTo(0, state.scrollY || 0);
      }, 500);
      sessionStorage.removeItem('amimo_state');
    } catch (e) {
      sessionStorage.removeItem('amimo_state');
    }
  }

  window.addEventListener('beforeunload', saveState);

  // =============================================================
  // 10. CATEGORY SWITCH & FILTER
  // =============================================================

  function switchCategory(cat) {
    if (currentCategory === cat) return;
    currentCategory = cat;
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    const active = Array.from(document.querySelectorAll('.cat-pill')).find(p => p.dataset.cat === cat);
    if (active) active.classList.add('active');

    const topContainer = document.getElementById('topNewsContainer');
    if (currentCategory === 'all') {
      if (topContainer) topContainer.style.display = 'block';
    } else {
      if (topContainer) topContainer.style.display = 'none';
    }

    allFetched = false;
    displayLimit = 20;
    isLoadingMore = false;
    isLoadingDiscover = false;

    const feedDiv = document.getElementById('newsFeed');
    feedDiv.innerHTML = '<div style="padding:2rem; text-align:center;"><div class="loader"></div> Loading articles...</div>';

    if (currentCategory === 'all') {
      renderAllCategoryGrouped();
    } else if (currentCategory === 'Local') {
      renderLocalSections();
    } else {
      currentFiltered = allArticles.filter(a => a.category === currentCategory);
      if (currentFiltered.length === 0) {
        fetchMoreForCategory(currentCategory).then(newArticles => {
          if (newArticles.length) {
            const unique = newArticles.filter(a => !allArticles.some(ex => (ex.link || '').split('?')[0] === (a.link || '').split('?')[0]));
            unique.forEach(a => { a.views = generateViews(a.title); });
            allArticles = [...allArticles, ...unique];
            allArticles.sort((a,b) => new Date(b.pubDate) - new Date(a.pubDate));
            currentFiltered = allArticles.filter(a => a.category === currentCategory);
            displayLimit = Math.min(20, currentFiltered.length);
            renderCategoryFeed(currentFiltered.slice(0, displayLimit));
          } else {
            feedDiv.innerHTML = '<div style="padding:2rem; text-align:center;">📭 No articles found for this category.</div>';
          }
        });
        return;
      }
      displayLimit = Math.min(20, currentFiltered.length);
      renderCategoryFeed(currentFiltered.slice(0, displayLimit));
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      ensureSentinel();
      initInfiniteScroll();
    }, 100);
  }

  // =============================================================
  // 11. RENDER FUNCTIONS
  // =============================================================

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

  // ---- ALL view ----
  function renderAllCategoryGrouped() {
    const feedDiv = document.getElementById('newsFeed');
    if (!allArticles.length) {
      feedDiv.innerHTML = '<div style="padding:2rem; text-align:center;">📭 No articles available</div>';
      return;
    }

    const categoriesOrder = ['Local', 'World', 'Politics', 'Technology', 'Sports', 'Entertainment', 'Business', 'Health'];
    let html = '';

    for (let cat of categoriesOrder) {
      if (cat === 'Local') {
        // --- Local: render sub-sections ---
        html += `<div class="category-section" data-cat="Local">
                    <div class="category-section-title"><i class="fas fa-location-dot"></i> Local</div>`;
        // Sub-sections: Top, Politics, Tech, Health, Football
        const subSections = ['top', 'politics', 'tech', 'health', 'football'];
        const sectionTitles = {
          top: '🔥 Top Stories',
          politics: '🏛️ Politics',
          tech: '💻 Technology',
          health: '🏥 Health',
          football: '⚽ Football'
        };
        for (let sec of subSections) {
          const articles = localSectionArticles[sec] || [];
          const limit = 5;
          const toShow = articles.slice(0, limit);
          html += `<div class="sub-section" data-section="${sec}">
                      <div class="sub-section-title">${sectionTitles[sec]}</div>`;
          if (toShow.length) {
            toShow.forEach(art => {
              html += renderArticleCard(art);
            });
          } else {
            html += `<p style="padding:0.5rem 0;color:var(--text-muted);font-style:italic;">No articles in this section yet.</p>`;
          }
          html += `</div>`;
        }
        // Discover section – with sentinel for infinite scroll
        html += `<div class="sub-section" id="discoverSection">
                    <div class="sub-section-title">🔍 Discover More Local News</div>`;
        const discoverArticles = localSectionArticles.discover || [];
        const discoverLimit = localSectionDisplay.discover;
        const toShowDiscover = discoverArticles.slice(0, discoverLimit);
        if (toShowDiscover.length) {
          toShowDiscover.forEach(art => {
            html += renderArticleCard(art);
          });
        } else {
          html += `<p style="padding:0.5rem 0;color:var(--text-muted);font-style:italic;">Loading discover articles...</p>`;
        }
        // Sentinel for Discover
        html += `<div id="discoverSentinel" style="height:10px;margin:20px 0;"></div>`;
        html += `</div>`;
        html += `</div>`;
      } else {
        // Other categories: show 5 articles + "Show More" button
        const limit = 5;
        const catArticles = allArticles.filter(a => a.category === cat).slice(0, limit);
        if (catArticles.length) {
          const icon = getCategoryIcon(cat);
          html += `<div class="category-section" data-cat="${cat}">
                      <div class="category-section-title"><i class="fas ${icon}"></i> ${cat}</div>`;
          catArticles.forEach(art => {
            html += renderArticleCard(art);
          });
          html += `<button class="show-more-btn" data-cat="${cat}">
                      <i class="fas fa-chevron-right"></i> Show More ${cat} News
                  </button>`;
          html += renderAdBanner();
          html += `</div>`;
        }
      }
    }

    feedDiv.innerHTML = html;
    attachSaveEvents();
    attachShareEvents();
    lazyLoadImages();

    // Attach show more handlers for non-Local categories
    document.querySelectorAll('.show-more-btn').forEach(btn => {
      btn.removeEventListener('click', showMoreHandler);
      btn.addEventListener('click', showMoreHandler);
    });

    // Set up sentinel for the main feed (All view – loads more world articles)
    ensureSentinel();
    initInfiniteScroll();

    // Set up discover sentinel for local articles
    setupDiscoverSentinel();
  }

  function showMoreHandler(e) {
    const cat = this.dataset.cat;
    if (cat) {
      switchCategory(cat);
    }
  }

  // ---- Category Feed (for non-Local, non-All) ----
  function renderCategoryFeed(articles) {
    const feedDiv = document.getElementById('newsFeed');
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

  // ---- Local sections (for Local category) ----
  function renderLocalSections() {
    const feedDiv = document.getElementById('newsFeed');
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
    for (let section of sections) {
      const articles = localSectionArticles[section];
      const limit = localSectionDisplay[section];
      const toShow = articles.slice(0, limit);
      if (toShow.length) {
        html += `<div class="category-section" data-section="${section}">
                    <div class="category-section-title">${sectionTitles[section]}</div>`;
        toShow.forEach(art => {
          html += renderArticleCard(art);
        });
        // Show More / Show Less button
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
    // Attach section show more handlers
    document.querySelectorAll('.show-more-section-btn').forEach(btn => {
      btn.removeEventListener('click', sectionShowMoreHandler);
      btn.addEventListener('click', sectionShowMoreHandler);
    });
    ensureSentinel();
    initInfiniteScroll();
  }

  // =============================================================
  // 12. LOCAL SECTIONS – POPULATE DATA (called once during load)
  // =============================================================

  async function populateLocalSections() {
    const countryData = localMap.get(userCountry) || FALLBACK_LOCAL_FEEDS;
    const sections = ['top', 'politics', 'tech', 'health', 'football', 'discover'];
    for (let section of sections) {
      const feeds = countryData[section] || [];
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
      uniqueArticles.sort((a,b) => new Date(b.pubDate) - new Date(a.pubDate));
      localSectionArticles[section] = uniqueArticles;
      localSectionDisplay[section] = (section === 'discover') ? 10 : 5;
      localSectionExpanded[section] = false;
      localSectionAllFetched[section] = false;
    }
  }

  // =============================================================
  // 13. DISCOVER SENTINEL (for All view)
  // =============================================================

  function setupDiscoverSentinel() {
    const sentinelEl = document.getElementById('discoverSentinel');
    if (!sentinelEl) return;
    if (discoverObserver) discoverObserver.disconnect();
    discoverObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoadingDiscover && !localSectionAllFetched.discover && navigator.onLine) {
        loadMoreDiscoverArticles();
      }
    }, { threshold: 0.1, rootMargin: "0px 0px 200px 0px" });
    discoverObserver.observe(sentinelEl);
  }

  async function loadMoreDiscoverArticles() {
    if (isLoadingDiscover) return;
    if (!navigator.onLine) {
      showToast('Offline – cannot load more.');
      return;
    }
    // If we already have enough in array, just show more
    if (localSectionDisplay.discover < localSectionArticles.discover.length) {
      localSectionDisplay.discover += 10;
      renderAllCategoryGrouped(); // re-render All view with updated display
      return;
    }
    if (localSectionAllFetched.discover) {
      showToast('No more local articles.');
      return;
    }
    isLoadingDiscover = true;
    try {
      const feeds = localSectionFeeds.discover;
      const available = feeds.filter(f => !usedFeedUrls.has(f.url));
      if (available.length === 0) {
        localSectionAllFetched.discover = true;
        showToast('No more local articles.');
        isLoadingDiscover = false;
        return;
      }
      const toFetch = available.sort(() => Math.random() - 0.5).slice(0, 5);
      const results = await Promise.all(toFetch.map(f => fetchFeed(f)));
      let newArticles = [];
      results.forEach(r => newArticles.push(...r));
      toFetch.forEach(f => usedFeedUrls.add(f.url));
      const existingLinks = new Set(localSectionArticles.discover.map(a => (a.link || '').split('?')[0]));
      const uniqueNew = newArticles.filter(a => !existingLinks.has((a.link || '').split('?')[0]));
      if (uniqueNew.length) {
        uniqueNew.forEach(a => a.views = generateViews(a.title));
        localSectionArticles.discover = [...localSectionArticles.discover, ...uniqueNew];
        localSectionArticles.discover.sort((a,b) => new Date(b.pubDate) - new Date(a.pubDate));
        localSectionDisplay.discover += uniqueNew.length;
        renderAllCategoryGrouped();
        showToast(`✨ ${uniqueNew.length} new local articles`);
      } else {
        // no new articles – try again later
        setTimeout(() => loadMoreDiscoverArticles(), 200);
      }
    } catch (e) {
      console.error(e);
      showToast('Error loading more local articles.');
    }
    isLoadingDiscover = false;
  }

  // =============================================================
  // 14. SECTION SHOW MORE (for Local category)
  // =============================================================

  async function sectionShowMoreHandler(e) {
    const btn = e.currentTarget;
    const section = btn.dataset.section;
    const expanded = localSectionExpanded[section];
    if (expanded) {
      // Collapse: set display back to 5
      localSectionDisplay[section] = 5;
      localSectionExpanded[section] = false;
      renderLocalSections();
      return;
    } else {
      // Expand: increase limit by 5 or fetch more if needed
      const current = localSectionArticles[section].length;
      if (current <= 5) {
        // Fetch more articles for this section
        const feeds = localSectionFeeds[section];
        const usedUrls = new Set(localSectionArticles[section].map(a => (a.link || '').split('?')[0]));
        const available = feeds.filter(f => !usedUrls.has(f.url));
        if (available.length === 0) {
          localSectionAllFetched[section] = true;
          showToast('No more articles for this section.');
          // Still expand to show all we have
          localSectionDisplay[section] = current;
          localSectionExpanded[section] = true;
          renderLocalSections();
          return;
        }
        const toFetch = available.sort(() => Math.random() - 0.5).slice(0, 5);
        const results = await Promise.all(toFetch.map(f => fetchFeed(f)));
        let newArticles = [];
        results.forEach(r => newArticles.push(...r));
        const unique = newArticles.filter(a => !usedUrls.has((a.link || '').split('?')[0]));
        if (unique.length) {
          unique.forEach(a => a.views = generateViews(a.title));
          localSectionArticles[section] = [...localSectionArticles[section], ...unique];
          localSectionArticles[section].sort((a,b) => new Date(b.pubDate) - new Date(a.pubDate));
        }
      }
      const newLimit = Math.min(localSectionArticles[section].length, localSectionDisplay[section] + 5);
      localSectionDisplay[section] = newLimit;
      localSectionExpanded[section] = true;
      renderLocalSections();
    }
  }

  // =============================================================
  // 15. INFINITE SCROLL (sentinel and observer)
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
    const btn = wrapper.querySelector('.retry-button');
    btn.onclick = async () => {
      wrapper.innerHTML = '<div class="loader"></div> Retrying...';
      await retryCallback();
    };
    if (sentinel && sentinel.parentNode) sentinel.parentNode.insertBefore(wrapper, sentinel);
  }

  // =============================================================
  // 16. LOAD MORE ARTICLES (main infinite scroll logic)
  // =============================================================

  async function loadMoreArticles() {
    if (isLoadingMore) return;
    if (!navigator.onLine) {
      showToast('Offline – cannot load more.');
      return;
    }

    // For "All" category: use global feed pool
    if (currentCategory === 'all') {
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
        const batchSize = 5;
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
        allArticles.sort((a,b) => new Date(b.pubDate) - new Date(a.pubDate));
        displayLimit = Math.min(displayLimit + uniqueNew.length, allArticles.length);
        renderAllCategoryGrouped();
        showToast(`✨ ${uniqueNew.length} new articles loaded`);
        if (feedIndex >= feedPool.length) {
          allFetched = true;
          refillMainFeedPool();
          if (feedPool.length > 0 && feedIndex < feedPool.length) {
            allFetched = false;
          }
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

    // For Local category: discover section infinite scroll (already handled separately)
    if (currentCategory === 'Local') {
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
        const toFetch = available.sort(() => Math.random() - 0.5).slice(0, 5);
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
        localSectionArticles.discover.sort((a,b) => new Date(b.pubDate) - new Date(a.pubDate));
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

    // For other specific categories: infinite scroll
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
      const newArticles = await fetchMoreForCategory(currentCategory);
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
      allArticles.sort((a,b) => new Date(b.pubDate) - new Date(a.pubDate));
      currentFiltered = allArticles.filter(a => a.category === currentCategory);
      displayLimit += uniqueNew.length;
      renderCategoryFeed(currentFiltered.slice(0, displayLimit));
      showToast(`✨ ${uniqueNew.length} new ${currentCategory} articles`);
      showEndSpinner(false);
    } catch (err) {
      console.error(err);
      showRetryButton("Failed to load more. Retry?", loadMoreArticles);
    }
    isLoadingMore = false;
    showEndSpinner(false);
  }

  // Helper to fetch more for category (world categories)
  async function fetchMoreForCategory(category) {
    let feedsToFetch = [];
    if (category === 'Local') return []; // handled separately
    feedsToFetch = WORLD_FEEDS.filter(f => f.category === category);
    if (feedsToFetch.length === 0) feedsToFetch = WORLD_FEEDS.slice(0, 15);
    const available = feedsToFetch.filter(f => !usedFeedUrls.has(f.url));
    if (available.length === 0) return [];
    const toFetch = available.sort(() => Math.random() - 0.5).slice(0, 5);
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
  // 17. TOP NEWS (infinite for "All" view)
  // =============================================================

  function initTopNewsPool() {
    topNewsFeedPool = TOP_NEWS_FEEDS.slice();
    topNewsFeedIndex = 0;
    usedTopNewsUrls.clear();
    TOP_NEWS_FEEDS.forEach(f => usedTopNewsUrls.add(f.url));
  }

  function refillTopNewsPool() {
    const available = WORLD_FEEDS.filter(f => !usedTopNewsUrls.has(f.url));
    if (available.length === 0) {
      usedTopNewsUrls.clear();
      TOP_NEWS_FEEDS.forEach(f => usedTopNewsUrls.add(f.url));
      return refillTopNewsPool();
    }
    const newFeeds = available.sort(() => Math.random() - 0.5).slice(0, 10);
    newFeeds.forEach(f => usedTopNewsUrls.add(f.url));
    topNewsFeedPool = topNewsFeedPool.concat(newFeeds);
  }

  function renderTopNews() {
    const container = document.getElementById('topNewsContainer');
    if (!container) return;
    container.innerHTML = '';
    if (!topNewsArticles.length || currentCategory !== 'all') {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'block';
    container.style.padding = '0 1.5rem 2rem';

    const toShow = topNewsArticles.slice(0, topNewsDisplayed);
    let html = `<div class="top-news-section">
                    <div class="top-news-title"><i class="fas fa-chart-line"></i> 🔥 Top News</div>
                    <div class="top-news-grid" style="display:flex;flex-direction:column;gap:1.25rem;">`;

    toShow.forEach((art, index) => {
      html += renderArticleCard(art);
      if ((index + 1) % 5 === 0 && (index + 1) < toShow.length) {
        html += renderAdBanner();
      }
    });

    html += `</div>`;
    if (topNewsFeedIndex < topNewsFeedPool.length || hasMoreTopNews) {
      html += `<div id="topNewsSentinel" style="height:10px;margin:20px 0;"></div>`;
    } else if (!hasMoreTopNews && topNewsDisplayed >= topNewsArticles.length && topNewsArticles.length > 0) {
      html += `<div style="text-align:center;padding:1rem;color:var(--text-muted);font-size:0.9rem;">— No more top news —</div>`;
    }
    html += `</div>`;
    container.innerHTML = html;

    attachSaveEvents();
    attachShareEvents();
    lazyLoadImages();

    topNewsSentinel = document.getElementById('topNewsSentinel');
    if (topNewsSentinel) {
      setupTopNewsInfinite();
    } else if (topNewsObserver) {
      topNewsObserver.disconnect();
      topNewsObserver = null;
    }
  }

  function setupTopNewsInfinite() {
    if (topNewsObserver) topNewsObserver.disconnect();
    if (!topNewsSentinel) return;
    topNewsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoadingTopNews && currentCategory === 'all' && navigator.onLine) {
        loadMoreTopNews();
      }
    }, { threshold: 0.1, rootMargin: "0px 0px 200px 0px" });
    topNewsObserver.observe(topNewsSentinel);
  }

  function showTopNewsSpinner(show) {
    let spinner = document.getElementById('topNewsEndSpinner');
    if (show && !spinner && topNewsSentinel) {
      spinner = document.createElement('div');
      spinner.id = 'topNewsEndSpinner';
      spinner.className = 'end-loader';
      spinner.innerHTML = '<div class="loader"></div> Loading more top news...';
      topNewsSentinel.parentNode.insertBefore(spinner, topNewsSentinel);
    } else if (!show && spinner) spinner.remove();
  }

  function showTopNewsRetry(msg) {
    if (!topNewsSentinel) return;
    let retryDiv = document.getElementById('topNewsRetry');
    if (retryDiv) retryDiv.remove();
    retryDiv = document.createElement('div');
    retryDiv.id = 'topNewsRetry';
    retryDiv.className = 'end-loader';
    retryDiv.innerHTML = `<div><i class="fas fa-exclamation-triangle"></i> ${msg}</div>
                          <button class="retry-button" id="topNewsRetryBtn">Retry</button>`;
    topNewsSentinel.parentNode.insertBefore(retryDiv, topNewsSentinel);
    document.getElementById('topNewsRetryBtn').onclick = () => {
      retryDiv.remove();
      loadMoreTopNews();
    };
  }

  async function loadMoreTopNews() {
    if (isLoadingTopNews) return;
    isLoadingTopNews = true;
    showTopNewsSpinner(true);

    try {
      if (topNewsFeedIndex >= topNewsFeedPool.length) {
        refillTopNewsPool();
        if (topNewsFeedIndex >= topNewsFeedPool.length) {
          hasMoreTopNews = false;
          renderTopNews();
          showTopNewsSpinner(false);
          isLoadingTopNews = false;
          return;
        }
      }

      const batchSize = 3;
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
        renderTopNews();
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
            renderTopNews();
            showTopNewsRetry("No new top news. Retry?");
          }
        }
      }
    } catch (e) {
      console.error("Top news load error:", e);
      showTopNewsRetry("Failed to load. Retry?");
    }

    isLoadingTopNews = false;
    showTopNewsSpinner(false);
  }

  // =============================================================
  // 18. TRENDING CAROUSEL (with share button)
  // =============================================================

  function renderTrendingCarousel() {
    const categories = ['Local','World','Politics','Technology','Sports','Entertainment','Business','Health'];
    const selected = [];
    for (const cat of categories) {
      const catArticles = allArticles.filter(a => a.category === cat).slice(0, 2);
      selected.push(...catArticles);
    }
    const trendingItems = selected.slice(0, 16);
    const carousel = document.getElementById('trendingCarousel');
    if (!trendingItems.length) { carousel.innerHTML = '<div>No trending</div>'; return; }
    carousel.innerHTML = trendingItems.map(art => {
      const imgSrc = art.imageUrl;
      return `<div class="trend-card-full">
        <img class="trend-img" data-src="${imgSrc}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" loading="lazy">
        <div class="trend-info">
          <h3><a href="${art.link}" target="_blank">${escapeHtml(art.title)}</a></h3>
          <div class="trend-meta"><span><i class="fas fa-globe"></i> ${art.source}</span><span><i class="fas fa-eye"></i> ${formatViews(art.views)}</span></div>
          <div class="action-row" style="margin-top:0.5rem;">
            <button class="btn-save save-trend" data-link="${art.link}" data-title="${escapeHtml(art.title)}" data-img="${imgSrc}" data-source="${art.source}" data-desc="${escapeHtml(art.description)}">💾 Save</button>
            <button class="btn-share share-trend" data-url="${art.link}" data-title="${escapeHtml(art.title)}"><i class="fas fa-share-alt"></i> Share</button>
          </div>
        </div>
      </div>`;
    }).join('');
    document.querySelectorAll('.save-trend').forEach(btn => {
      btn.addEventListener('click', () => {
        const link = btn.dataset.link;
        if (!savedArticles.some(s=>s.link===link)) {
          savedArticles.push({ title: btn.dataset.title, link, imageUrl: btn.dataset.img, source: btn.dataset.source, description: btn.dataset.desc, savedAt: Date.now() });
          localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
          btn.innerHTML = '✅ Saved';
          updateSavedCounter();
          if (currentView === 'saved') renderSavedArticles();
          showToast('Saved offline');
        } else { showToast('Already saved'); }
      });
    });
    document.querySelectorAll('.share-trend').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.dataset.title;
        const url = btn.dataset.url;
        if (navigator.share) {
          try { navigator.share({ title, url }); } catch (e) {}
        } else {
          navigator.clipboard.writeText(url);
          showToast('Link copied!');
        }
      });
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
  // 19. SAVE / SHARE EVENTS
  // =============================================================

  function attachSaveEvents() {
    document.querySelectorAll('.save-btn, .save-top-btn, .save-trend').forEach(btn => {
      btn.removeEventListener('click', saveHandler);
      btn.addEventListener('click', saveHandler);
    });
  }

  function attachShareEvents() {
    document.querySelectorAll('.share-btn, .share-top-btn, .share-trend').forEach(btn => {
      btn.removeEventListener('click', shareHandler);
      btn.addEventListener('click', shareHandler);
    });
  }

  function saveHandler(e) {
    const btn = e.currentTarget;
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
      localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
      btn.innerHTML = '✅ Saved';
      btn.style.background = '#10b981';
      showToast('Saved offline!');
    } else {
      savedArticles = savedArticles.filter(s => s.link !== link);
      localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
      btn.innerHTML = '💾 Save';
      btn.style.background = '#2563eb';
      showToast('Removed');
    }
    updateSavedCounter();
    if (currentView === 'saved') renderSavedArticles();
    if (currentCategory === 'all') renderAllCategoryGrouped();
    else if (currentCategory === 'Local') renderLocalSections();
    else renderCategoryFeed(currentFiltered.slice(0, displayLimit));
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
    const c = document.getElementById('savedCounter');
    if (c) c.innerText = savedArticles.length;
  }

  // =============================================================
  // 20. SAVED VIEW
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
      html += `<div class="news-card">
        <img class="card-img" data-src="${art.imageUrl || 'https://placehold.co/800x450/3b82f6/white?text=Saved'}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" loading="lazy">
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
    lazyLoadImages();
    document.querySelectorAll('.unsave-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        savedArticles = savedArticles.filter(s => s.link !== btn.dataset.link);
        localStorage.setItem("amimo_saved", JSON.stringify(savedArticles));
        updateSavedCounter();
        renderSavedArticles();
        if (currentView === 'home') {
          if (currentCategory === 'all') renderAllCategoryGrouped();
          else if (currentCategory === 'Local') renderLocalSections();
          else renderCategoryFeed(currentFiltered.slice(0, displayLimit));
        }
        showToast('Removed');
      });
    });
    document.querySelectorAll('.share-saved-btn').forEach(btn => {
      btn.addEventListener('click', () => shareArticle(btn.dataset.title, btn.dataset.url));
    });
  }

  // =============================================================
  // 21. VIEWS (Home, Saved, Tools, Live)
  // =============================================================

  function showHomeView() {
    currentView = 'home';
    document.getElementById('appView').style.display = 'block';
    document.getElementById('savedView').style.display = 'none';
    document.getElementById('toolsView').style.display = 'none';
    document.getElementById('liveView').style.display = 'none';
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    const homeNav = document.querySelector('.nav-item[data-nav="home"]');
    if (homeNav) homeNav.classList.add('active');
    if (carouselInterval) clearInterval(carouselInterval);
    startCarouselScroll();
    if (currentCategory !== 'all') {
      switchCategory('all');
    } else {
      renderAllCategoryGrouped();
      renderTopNews();
      ensureSentinel();
      initInfiniteScroll();
    }
  }

  function showSavedView() {
    currentView = 'saved';
    document.getElementById('appView').style.display = 'none';
    document.getElementById('savedView').style.display = 'block';
    document.getElementById('toolsView').style.display = 'none';
    document.getElementById('liveView').style.display = 'none';
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    const savedNav = document.querySelector('.nav-item[data-nav="saved"]');
    if (savedNav) savedNav.classList.add('active');
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = null;
    renderSavedArticles();
    if (topNewsObserver) topNewsObserver.disconnect();
    if (observer) observer.disconnect();
  }

  // ------ TOOLS with real file management ------
  let currentDirectoryHandle = null;

  async function showToolsView() {
    currentView = 'tools';
    document.getElementById('appView').style.display = 'none';
    document.getElementById('savedView').style.display = 'none';
    document.getElementById('toolsView').style.display = 'block';
    document.getElementById('liveView').style.display = 'none';
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    const toolsNav = document.querySelector('.nav-item[data-nav="tools"]');
    if (toolsNav) toolsNav.classList.add('active');
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = null;
    if (topNewsObserver) topNewsObserver.disconnect();
    if (observer) observer.disconnect();
    // Show initial storage info
    updateStorageInfo();
    if (currentDirectoryHandle) {
      browseDirectory(currentDirectoryHandle);
    } else {
      document.getElementById('toolOutput').innerHTML = `
        <p>Click "Browse Files" to select a folder and manage files.</p>
        <p><strong>Storage Info:</strong> <span id="storageInfo">Loading...</span></p>
      `;
    }
  }

  function showLiveView() {
    currentView = 'live';
    document.getElementById('appView').style.display = 'none';
    document.getElementById('savedView').style.display = 'none';
    document.getElementById('toolsView').style.display = 'none';
    document.getElementById('liveView').style.display = 'block';
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    const liveNav = document.querySelector('.nav-item[data-nav="live"]');
    if (liveNav) liveNav.classList.add('active');
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = null;
    if (topNewsObserver) topNewsObserver.disconnect();
    if (observer) observer.disconnect();
    const iframe = document.getElementById('liveIframe');
    if (iframe) {
      iframe.src = 'https://www.youtube.com/embed?listType=search&list=live+news&autoplay=0&rel=0';
    }
  }

  // =============================================================
  // 22. TOOLS FUNCTIONS – REAL FILE MANAGEMENT
  // =============================================================

  async function updateStorageInfo() {
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
        const info = `Used: ${usedMB} MB / ${quotaMB} MB (${percent}%) · Free: ${freeMB} MB`;
        const infoEl = document.getElementById('storageInfo');
        if (infoEl) infoEl.textContent = info;
        return info;
      } else {
        const msg = 'Storage API not supported.';
        const infoEl = document.getElementById('storageInfo');
        if (infoEl) infoEl.textContent = msg;
        return msg;
      }
    } catch (e) {
      const msg = 'Error retrieving storage info.';
      const infoEl = document.getElementById('storageInfo');
      if (infoEl) infoEl.textContent = msg;
      return msg;
    }
  }

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
    } catch (e) {
      console.warn('Directory access denied or not supported', e);
      return null;
    }
  }

  async function browseDirectory(dirHandle, path = '') {
    const output = document.getElementById('toolOutput');
    output.innerHTML = '<div class="loader"></div> Loading directory...';
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
      html += `<p><strong>Storage Info:</strong> <span id="storageInfo">Loading...</span></p>`;
      html += `<ul style="list-style:none;padding:0;">`;
      for (let entry of fileList) {
        const icon = entry.isDirectory ? '<i class="fas fa-folder"></i>' : '<i class="fas fa-file"></i>';
        const size = entry.size ? ` (${(entry.size / 1024).toFixed(1)} KB)` : '';
        const deleteBtn = !entry.isDirectory ? `<button class="delete-file-btn" data-handle="${entry.handle}" data-name="${entry.name}" style="background:red;color:white;border:none;border-radius:20px;padding:0.2rem 0.8rem;font-size:0.7rem;">Delete</button>` : '';
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
      updateStorageInfo();
      document.querySelectorAll('.delete-file-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const handle = btn.dataset.handle;
          const name = btn.dataset.name;
          if (confirm(`Delete "${name}"?`)) {
            try {
              await handle.remove();
              showToast(`Deleted "${name}"`);
              browseDirectory(currentDirectoryHandle, path);
            } catch (e) {
              showToast('Error deleting file.');
            }
          }
        });
      });
    } catch (e) {
      output.innerHTML = `<p>Error reading directory: ${e.message}</p>`;
    }
  }

  async function scanJunkFiles() {
    const output = document.getElementById('toolOutput');
    output.innerHTML = '<div class="loader"></div> Scanning for junk files...';
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
        updateStorageInfo();
        return;
      }
      let html = `<p>Found ${junk.length} junk files:</p><ul style="list-style:none;padding:0;">`;
      junk.forEach(j => {
        html += `<li style="padding:0.5rem;border-bottom:1px solid var(--ad-bg);display:flex;justify-content:space-between;align-items:center;">
          <span>${escapeHtml(j.name)} (${(j.size / (1024 * 1024)).toFixed(2)} MB)</span>
          <button class="delete-file-btn" data-handle="${j.handle}" style="background:red;color:white;border:none;border-radius:20px;padding:0.2rem 0.8rem;">Delete</button>
        </li>`;
      });
      html += '</ul>';
      output.innerHTML = html;
      document.querySelectorAll('.delete-file-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const handle = btn.dataset.handle;
          if (confirm('Delete this junk file?')) {
            try {
              await handle.remove();
              showToast('File deleted');
              btn.closest('li').remove();
              updateStorageInfo();
            } catch (e) {
              showToast('Error deleting file.');
            }
          }
        });
      });
      updateStorageInfo();
    } catch (e) {
      output.innerHTML = `<p>Error: ${e.message}</p>`;
    }
  }

  async function scanBigFiles() {
    const output = document.getElementById('toolOutput');
    output.innerHTML = '<div class="loader"></div> Scanning for large files (>50MB)...';
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
        updateStorageInfo();
        return;
      }
      let html = `<p>Found ${big.length} large files:</p><ul style="list-style:none;padding:0;">`;
      big.forEach(b => {
        html += `<li style="padding:0.5rem;border-bottom:1px solid var(--ad-bg);display:flex;justify-content:space-between;align-items:center;">
          <span>${escapeHtml(b.name)} (${(b.size / (1024 * 1024)).toFixed(2)} MB)</span>
          <button class="delete-file-btn" data-handle="${b.handle}" style="background:red;color:white;border:none;border-radius:20px;padding:0.2rem 0.8rem;">Delete</button>
        </li>`;
      });
      html += '</ul>';
      output.innerHTML = html;
      document.querySelectorAll('.delete-file-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const handle = btn.dataset.handle;
          if (confirm('Delete this file?')) {
            try {
              await handle.remove();
              showToast('File deleted');
              btn.closest('li').remove();
              updateStorageInfo();
            } catch (e) {
              showToast('Error deleting file.');
            }
          }
        });
      });
      updateStorageInfo();
    } catch (e) {
      output.innerHTML = `<p>Error: ${e.message}</p>`;
    }
  }

  async function browseFiles() {
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
        if (!files.length) {
          document.getElementById('toolOutput').innerHTML = '<p>No files selected.</p>';
          return;
        }
        let html = `<p>Selected ${files.length} files. (Read-only)</p><ul>`;
        for (let f of files) {
          html += `<li>${escapeHtml(f.name)} (${(f.size/1024).toFixed(1)} KB)</li>`;
        }
        html += '</ul>';
        document.getElementById('toolOutput').innerHTML = html;
        updateStorageInfo();
      };
      input.click();
    }
  }

  window.browseParentDir = async function() {
    if (currentDirectoryHandle) {
      const parent = await requestDirectoryPermission();
      if (parent) {
        browseDirectory(parent);
      }
    }
  };

  window.browseFiles = browseFiles;

  // =============================================================
  // 23. SEARCH
  // =============================================================

  function storeAllArticlesForSearch() {
    if (allArticles.length) {
      const searchable = allArticles.map(art => ({ title: art.title, link: art.link, description: art.description, source: art.source }));
      localStorage.setItem('amimoAllArticles', JSON.stringify(searchable));
    }
  }

  function redirectToSearchPage(query) {
    if (!query.trim()) return;
    storeAllArticlesForSearch();
    window.location.href = `/amimodiscoverynews/seachresult.html?q=${encodeURIComponent(query)}`;
  }

  // =============================================================
  // 24. MAIN LOAD ALL FEEDS
  // =============================================================

  async function loadAllFeeds() {
    const statusDiv = document.getElementById('statusMsg');
    statusDiv.innerHTML = '<div class="loader"></div> Loading...';

    // Initialize pools
    feedPool = [];
    feedIndex = 0;
    usedFeedUrls.clear();
    allFetched = false;

    // Populate local sections
    await populateLocalSections();

    // Collect local articles
    let localArticles = [];
    for (let sec of ['top', 'politics', 'tech', 'health', 'football', 'discover']) {
      localArticles = localArticles.concat(localSectionArticles[sec]);
    }

    // Fetch world feeds
    let worldArticles = [];
    for (let i = 0; i < WORLD_FEEDS.length; i += 8) {
      const batch = WORLD_FEEDS.slice(i, i+8);
      const results = await Promise.all(batch.map(f => fetchFeed(f)));
      results.forEach(r => worldArticles.push(...r));
      batch.forEach(f => {
        if (!usedFeedUrls.has(f.url)) {
          usedFeedUrls.add(f.url);
          feedPool.push(f);
        }
      });
      await new Promise(r => setTimeout(r, 100));
    }
    allArticles = [...localArticles, ...worldArticles];
    // Deduplicate
    const uniqueMap = new Map();
    allArticles.forEach(a => {
      const key = (a.link || '').split('?')[0];
      if (!uniqueMap.has(key)) uniqueMap.set(key, a);
    });
    allArticles = Array.from(uniqueMap.values());
    allArticles.forEach(a => { a.views = generateViews(a.title); });
    allArticles.sort((a,b)=> new Date(b.pubDate) - new Date(a.pubDate));

    statusDiv.innerHTML = 'Ensuring each category has articles (Local→10)...';
    await ensureCategoryCounts();

    // Load top news
    statusDiv.innerHTML = 'Loading top news...';
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
    topNewsArticles.sort((a,b)=> new Date(b.pubDate) - new Date(a.pubDate));
    topNewsDisplayed = 5;
    if (topNewsDisplayed > topNewsArticles.length) topNewsDisplayed = topNewsArticles.length;
    hasMoreTopNews = true;

    storeAllArticlesForSearch();

    // Render initial view (All)
    currentCategory = 'all';
    renderAllCategoryGrouped();

    // Place top news container
    const topContainer = document.getElementById('topNewsContainer');
    const feedDiv = document.getElementById('newsFeed');
    if (topContainer && feedDiv && feedDiv.parentNode) {
      feedDiv.parentNode.insertBefore(topContainer, feedDiv.nextSibling);
    }
    renderTopNews();
    renderTrendingCarousel();
    updateSavedCounter();
    statusDiv.style.display = 'none';

    ensureSentinel();
    initInfiniteScroll();

    checkOnlineStatus();
    restoreState();
  }

  // =============================================================
  // 25. EVENT LISTENERS
  // =============================================================

  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const cat = pill.dataset.cat;
      switchCategory(cat);
    });
  });

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

  const menuHome = document.getElementById('menuHome');
  const menuTrending = document.getElementById('menuTrending');
  const menuNotification = document.getElementById('menuNotification');
  const menuSearch = document.getElementById('menuSearch');
  const menuAbout = document.getElementById('menuAbout');
  const menuSaved = document.getElementById('menuSaved');
  const menuTools = document.getElementById('menuTools');
  const menuLive = document.getElementById('menuLive');
  const viewSavedBtn = document.getElementById('viewSavedBtn');

  if (menuHome) menuHome.addEventListener('click', () => { showHomeView(); closeMenu(); });
  if (menuTrending) menuTrending.addEventListener('click', () => {
    document.getElementById('trendingCarousel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMenu();
  });
  if (menuNotification) menuNotification.addEventListener('click', () => { alert("🔔 Notifications coming soon."); closeMenu(); });
  if (menuSearch) menuSearch.addEventListener('click', () => { closeMenu(); document.getElementById('searchInput')?.focus(); });
  if (menuAbout) menuAbout.addEventListener('click', () => {
    alert("Amimo Discovery v46.0\n✅ All view shows Local sub-sections (Top, Politics, Tech, Health, Football)\n✅ Discover infinite scroll for local articles\n✅ All features working");
    closeMenu();
  });
  if (menuSaved) menuSaved.addEventListener('click', () => { showSavedView(); closeMenu(); });
  if (menuTools) menuTools.addEventListener('click', () => { showToolsView(); closeMenu(); });
  if (menuLive) menuLive.addEventListener('click', () => { showLiveView(); closeMenu(); });
  if (viewSavedBtn) viewSavedBtn.onclick = () => showSavedView();

  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) searchBtn.addEventListener('click', () => {
    const q = searchInput.value.trim();
    if (q) redirectToSearchPage(q);
  });
  if (searchInput) searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBtn?.click();
  });

  const searchZone = document.getElementById('searchZone');
  if (searchInput) searchInput.addEventListener('focus', () => {
    if (!searchZone) return;
    searchZone.classList.add('floating-top');
    document.body.style.paddingTop = '80px';
    const removeFloat = (e) => {
      if (!searchZone.contains(e.target)) {
        searchZone.classList.remove('floating-top');
        document.body.style.paddingTop = '0px';
        document.removeEventListener('click', removeFloat);
      }
    };
    setTimeout(() => document.addEventListener('click', removeFloat), 50);
  });

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = btn.dataset.nav;
      if (nav === 'home') showHomeView();
      else if (nav === 'saved') showSavedView();
      else if (nav === 'tools') showToolsView();
      else if (nav === 'live') showLiveView();
    });
  });

  document.getElementById('scanJunkBtn')?.addEventListener('click', scanJunkFiles);
  document.getElementById('scanBigFilesBtn')?.addEventListener('click', scanBigFiles);
  document.getElementById('accessFilesBtn')?.addEventListener('click', browseFiles);

  // =============================================================
  // 26. START
  // =============================================================

  detectLocation().then(() => {
    loadAllFeeds();
  });

})();