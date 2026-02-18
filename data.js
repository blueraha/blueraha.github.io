// ═══════════════════════════════════════════════════════════════
// DATA.JS - All event data
// ═══════════════════════════════════════════════════════════════

const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

const events = {
  "2026-01-16": [{
    type: "news",
    title: "HMM to Install Avikus' HiNAS Control on 40 Ships",
    source: "BusinessKorea",
    sourceMeta: "businesskorea.co.kr · Jan 16, 2026",
    content: `<p>HMM announced it will install HD Hyundai's autonomous navigation solution <strong>HiNAS Control</strong>, developed by Avikus, on 40 ships in its fleet.</p><p>Including this contract, Avikus has now supplied HiNAS Control to approximately <strong>350 ships</strong> total.</p>`,
    tags: ["HMM","Avikus","Autonomous Navigation"],
    link: "https://www.businesskorea.co.kr/news/articleView.html?idxno=261088",
    coords: [127.0940, 37.3946],
    location: "Pangyo, South Korea"
  }],

  "2026-02-12": [
    {
      type: "accident",
      title: "USS Truxtun Collides With USNS Supply in Caribbean",
      source: "The War Zone",
      sourceMeta: "twz.com · Feb 12, 2026",
      content: `<p>USS <strong>Truxtun</strong> (DDG-103) collided with USNS <strong>Supply</strong> during UNREP in the Caribbean Sea. Two sailors sustained minor injuries.</p>`,
      tags: ["Collision","US Navy","UNREP"],
      link: "https://www.twz.com/sea/navy-destroyer-support-ship-collide-during-at-sea-resupply",
      coords: [-72.5, 16.5],
      location: "Caribbean Sea"
    },
    {
      type: "accident",
      title: "Fatal German Bight Collision 'Wholly Avoidable' - MAIB",
      source: "MAIB / gCaptain",
      sourceMeta: "gov.uk/maib · Feb 12, 2026",
      content: `<p>MAIB final report: <strong>Verity</strong> sank after collision with <strong>Polesie</strong> in October 2023. Five deaths. "Neither vessel applied COLREGS diligently."</p>`,
      tags: ["Collision","MAIB","COLREGS"],
      link: "https://gcaptain.com",
      coords: [7.8, 54.1],
      location: "German Bight"
    }
  ],

  "2026-04-22": [{type:"event",title:"Sea Japan 2026",source:"Informa",sourceMeta:"Apr 22-24",content:`<p>Tokyo Big Sight</p>`,tags:["Exhibition"],link:"https://www.seajapan.ne.jp/en/",coords:[139.7946,35.6301],location:"Tokyo"}],
  "2026-04-23": [{type:"event",title:"Sea Japan 2026",source:"Informa",sourceMeta:"Apr 22-24",content:`<p>Tokyo Big Sight</p>`,tags:["Exhibition"],link:"https://www.seajapan.ne.jp/en/",coords:[139.7946,35.6301],location:"Tokyo"}],
  "2026-04-24": [{type:"event",title:"Sea Japan 2026",source:"Informa",sourceMeta:"Apr 22-24",content:`<p>Tokyo Big Sight</p>`,tags:["Exhibition"],link:"https://www.seajapan.ne.jp/en/",coords:[139.7946,35.6301],location:"Tokyo"}],

  "2026-05-04": [{type:"event",title:"OTC 2026",source:"OTC",sourceMeta:"May 4-7",content:`<p>Houston</p>`,tags:["Conference"],link:"https://2026.otcnet.org/",coords:[-95.4094,29.6844],location:"Houston"}],
  "2026-05-05": [{type:"event",title:"OTC 2026",source:"OTC",sourceMeta:"May 4-7",content:`<p>Houston</p>`,tags:["Conference"],link:"https://2026.otcnet.org/",coords:[-95.4094,29.6844],location:"Houston"}],
  "2026-05-06": [{type:"event",title:"OTC 2026",source:"OTC",sourceMeta:"May 4-7",content:`<p>Houston</p>`,tags:["Conference"],link:"https://2026.otcnet.org/",coords:[-95.4094,29.6844],location:"Houston"}],
  "2026-05-07": [{type:"event",title:"OTC 2026",source:"OTC",sourceMeta:"May 4-7",content:`<p>Houston</p>`,tags:["Conference"],link:"https://2026.otcnet.org/",coords:[-95.4094,29.6844],location:"Houston"}],

  "2026-05-13": [{type:"event",title:"IMO MSC 111",source:"IMO",sourceMeta:"May 13-22",content:`<p>London</p>`,tags:["IMO"],link:"https://www.imo.org",coords:[-0.1185,51.4934],location:"London"}],
  "2026-05-14": [{type:"event",title:"IMO MSC 111",source:"IMO",sourceMeta:"May 13-22",content:`<p>London</p>`,tags:["IMO"],link:"https://www.imo.org",coords:[-0.1185,51.4934],location:"London"}],
  "2026-05-15": [{type:"event",title:"IMO MSC 111",source:"IMO",sourceMeta:"May 13-22",content:`<p>London</p>`,tags:["IMO"],link:"https://www.imo.org",coords:[-0.1185,51.4934],location:"London"}],
  "2026-05-16": [{type:"event",title:"IMO MSC 111",source:"IMO",sourceMeta:"May 13-22",content:`<p>London</p>`,tags:["IMO"],link:"https://www.imo.org",coords:[-0.1185,51.4934],location:"London"}],
  "2026-05-17": [{type:"event",title:"IMO MSC 111",source:"IMO",sourceMeta:"May 13-22",content:`<p>London</p>`,tags:["IMO"],link:"https://www.imo.org",coords:[-0.1185,51.4934],location:"London"}],
  "2026-05-18": [{type:"event",title:"IMO MSC 111",source:"IMO",sourceMeta:"May 13-22",content:`<p>London</p>`,tags:["IMO"],link:"https://www.imo.org",coords:[-0.1185,51.4934],location:"London"}],
  "2026-05-19": [{type:"event",title:"IMO MSC 111",source:"IMO",sourceMeta:"May 13-22",content:`<p>London</p>`,tags:["IMO"],link:"https://www.imo.org",coords:[-0.1185,51.4934],location:"London"}],
  "2026-05-20": [{type:"event",title:"IMO MSC 111",source:"IMO",sourceMeta:"May 13-22",content:`<p>London</p>`,tags:["IMO"],link:"https://www.imo.org",coords:[-0.1185,51.4934],location:"London"}],
  "2026-05-21": [{type:"event",title:"IMO MSC 111",source:"IMO",sourceMeta:"May 13-22",content:`<p>London</p>`,tags:["IMO"],link:"https://www.imo.org",coords:[-0.1185,51.4934],location:"London"}],
  "2026-05-22": [{type:"event",title:"IMO MSC 111",source:"IMO",sourceMeta:"May 13-22",content:`<p>London</p>`,tags:["IMO"],link:"https://www.imo.org",coords:[-0.1185,51.4934],location:"London"}],

  "2025-09-09": [{
    type: "accident",
    title: "Container Loss During Port Operation at Long Beach",
    source: "Port of Long Beach",
    sourceMeta: "Sep 9, 2025",
    content: `<p>접안 작업 중 약 75개 컨테이너가 해상으로 추락했다. 적재 불균형 또는 고정 불량 가능성이 제기되었다.</p>`,
    tags: ["Containership","Cargo","Port Operation"],
    link: "https://www.portoflongbeach.org/",
    coords: [-118.215, 33.754],
    location: "Port of Long Beach"
  }],

  "2025-09-12": [{
    type: "news",
    title: "Starlink Connectivity Expands in Shipyard Operations",
    source: "Shipyard Technology Report",
    sourceMeta: "Sep 12, 2025",
    content: `<p>조선소 현장에서 Starlink 위성 통신 도입이 확대되고 있다.</p>`,
    tags: ["Connectivity","Starlink","Shipyard"],
    link: "https://www.spacex.com/starlink/",
    coords: [129.365, 35.538],
    location: "Ulsan Shipyard"
  }]
};
