(function () {
  "use strict";
  const data = window.COMPUTER_SCIENCE_MAP;
  if (!data || !Array.isArray(data.categories) || !Array.isArray(data.topics)) {
    document.getElementById("topicsGrid").textContent = "Nie udało się załadować danych mapy.";
    return;
  }
  const $ = (id) => document.getElementById(id);
  const state = {category:"algorithms",search:"",group:"all"};
  const algorithmTopics = data.topics.filter(t => t.category === "algorithms");
  const algorithmGroups = [...new Set(algorithmTopics.map(t => t.group))];
  const algorithmGroup = $("algorithmGroup");
  for (const group of algorithmGroups) {
    const count = algorithmTopics.filter(t => t.group === group).length;
    const option = elOption(group, `${group.charAt(0)}${group.slice(1).toLocaleLowerCase("pl")} (${count})`);
    algorithmGroup.append(option);
  }
  function elOption(value, label) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    return option;
  }
  const total = data.topics.length;
  const theory = data.topics.filter(t => t.theory).length;
  const practice = data.topics.filter(t => t.practice).length;
  $("statTotal").textContent = total;
  $("statTheory").textContent = theory;
  $("statPractice").textContent = practice;
  const pct = total ? Math.round(100 * theory / total) : 0;
  $("statPercent").textContent = pct + "%";
  $("progressFill").style.width = pct + "%";
  const el = (tag,cls,txt) => {const node=document.createElement(tag);if(cls)node.className=cls;if(txt!==undefined)node.textContent=txt;return node;};
  const countFor = (id) => data.topics.filter(t=>t.category===id).length;
  function selectCategory(id) {
    state.category=id;state.search="";state.group="all";algorithmGroup.value="all";$("searchInput").value="";
    render();$("topics").scrollIntoView({behavior:"smooth",block:"start"});
  }
  function renderNav() {
    const nav=$("sidebarNav");nav.replaceChildren();
    data.categories.forEach(c=>{
      const btn=el("button","side-btn"+(c.id===state.category&&!state.search?" active":""),"");
      btn.type="button";btn.setAttribute("aria-pressed",String(c.id===state.category&&!state.search));
      btn.append(el("span","side-icon",c.icon),el("span","side-name",c.name),el("span","side-count",String(countFor(c.id)).padStart(2,"0")));
      btn.addEventListener("click",()=>selectCategory(c.id));nav.append(btn);
    });
  }
  function renderCategories() {
    const grid=$("categoryGrid");grid.replaceChildren();
    data.categories.forEach((c,i)=>{
      const count=countFor(c.id),btn=el("button","category-btn"+(c.id===state.category&&!state.search?" active":"")+(count?" has-topics":""));
      btn.type="button";btn.setAttribute("aria-pressed",String(c.id===state.category&&!state.search));
      const head=el("div","cat-header");head.append(el("span","cat-icon",c.icon),el("span","cat-number",String(i+1).padStart(2,"0")+" / 08"));
      btn.append(head,el("span","cat-title",c.name),el("span","cat-desc",c.desc),el("span","cat-bottom",count?count+" TEMATY":"W PLANIE"));
      btn.addEventListener("click",()=>selectCategory(c.id));grid.append(btn);
    });
  }
  function makeTopic(t,n) {
    const article=el("article","topic-card");
    const header=el("div","topic-card-head");header.append(el("span","topic-tag",t.group),el("span","topic-index",String(n+1).padStart(2,"0")));
    article.append(header,el("h4","",t.title),el("p","topic-description",t.description));
    const statuses=el("div","topic-checklist");
    statuses.append(el("span","chip "+(t.theory?"yes":"no"),t.theory?"✓ Teoria poznana":"○ Teoria do nauki"));
    statuses.append(el("span","chip "+(t.practice?"yes":"no"),t.practice?"✓ Praktyka zweryfikowana":"○ Praktyka do zrobienia"));
    article.append(statuses);
    const next=el("div","topic-next");next.append(el("strong","", "Następny krok: "),document.createTextNode(t.next));article.append(next);
    if(t.url){const a=el("a","topic-link","Otwórz notatkę ↗");a.href=t.url;a.target="_blank";a.rel="noopener noreferrer";article.append(a);}
    return article;
  }
  function renderTopics() {
    const search=state.search.toLocaleLowerCase("pl").trim();
    const category=data.categories.find(c=>c.id===state.category);
    let topics=data.topics;
    if(search){
      topics=topics.filter(t=>{
        const c=data.categories.find(item=>item.id===t.category);
        return [t.title,t.subtitle,t.group,t.description,c?c.name:""].join(" ").toLocaleLowerCase("pl").includes(search);
      });
    }else{topics=topics.filter(t=>t.category===state.category);}
    if(state.category==="algorithms" && state.group!=="all") {
      topics=topics.filter(t=>t.category==="algorithms" && t.group===state.group);
    }
    $("algorithmFilters").hidden=state.category!=="algorithms";
    $("algorithmGroupMeta").textContent=topics.length+" z "+algorithmTopics.length+" algorytmów";
    $("categoryLabel").textContent=search?"WYNIKI WYSZUKIWANIA":"DZIEDZINA / "+(category?category.name.toLocaleUpperCase("pl"):"");
    $("categoryHeading").textContent=search?"Szukasz: "+state.search:category?category.name:"Mapa wiedzy";
    $("categoryDescription").textContent=search?"Wyniki ze wszystkich działów mapy.":category?category.desc:"";
    $("topicCount").textContent=topics.length+" "+(topics.length===1?"temat":(topics.length>=2&&topics.length<=4?"tematy":"tematów"));
    const grid=$("topicsGrid");grid.replaceChildren();
    if(!topics.length){
      const empty=el("div","empty-state");
      empty.append(el("strong","",search?"Nie znaleziono zagadnień":"Ta dziedzina czeka na rozwinięcie"),el("p","",search?"Spróbuj innego słowa kluczowego.":"Dodamy tutaj tematy, kiedy zaczniemy je opracowywać. Nic nie jest oznaczone jako nauczone na zapas."));
      grid.append(empty);return;
    }
    topics.forEach((t,i)=>grid.append(makeTopic(t,i)));
  }
  function render(){renderNav();renderCategories();renderTopics();}
  $("searchInput").addEventListener("input",(event)=>{state.search=event.target.value;render();});
  algorithmGroup.addEventListener("change",(event)=>{state.group=event.target.value;renderTopics();});
  document.addEventListener("keydown",(event)=>{
    if(event.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)&&!event.ctrlKey&&!event.metaKey){
      event.preventDefault();$("searchInput").focus();
    }
    if(event.key==="Escape"&&document.activeElement===$("searchInput")){$("searchInput").blur();}
  });
  render();
})();