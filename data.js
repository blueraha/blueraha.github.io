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
  "2026-09-14": [{type:"event",title:"Gastech 2026",source:"Gastech",sourceMeta:"Sep 14-17",content:`<p>Bangkok</p>`,tags:["LNG"],link:"https://www.gastechevent.com/",coords:[100.5650,13.7275],location:"Bangkok"}],
  "2026-09-15": [{type:"event",title:"Gastech 2026",source:"Gastech",sourceMeta:"Sep 14-17",content:`<p>Bangkok</p>`,tags:["LNG"],link:"https://www.gastechevent.com/",coords:[100.5650,13.7275],location:"Bangkok"}],
  "2026-09-16": [{type:"event",title:"Gastech 2026",source:"Gastech",sourceMeta:"Sep 14-17",content:`<p>Bangkok</p>`,tags:["LNG"],link:"https://www.gastechevent.com/",coords:[100.5650,13.7275],location:"Bangkok"}],
  "2026-09-17": [{type:"event",title:"Gastech 2026",source:"Gastech",sourceMeta:"Sep 14-17",content:`<p>Bangkok</p>`,tags:["LNG"],link:"https://www.gastechevent.com/",coords:[100.5650,13.7275],location:"Bangkok"}],
  "2026-11-02": [{type:"event",title:"ADIPEC 2026",source:"ADIPEC",sourceMeta:"Nov 2-5",content:`<p>Abu Dhabi</p>`,tags:["Energy"],link:"https://www.adipec.com/",coords:[54.6095,24.3969],location:"Abu Dhabi"}],
  "2026-11-03": [{type:"event",title:"ADIPEC 2026",source:"ADIPEC",sourceMeta:"Nov 2-5",content:`<p>Abu Dhabi</p>`,tags:["Energy"],link:"https://www.adipec.com/",coords:[54.6095,24.3969],location:"Abu Dhabi"}],
  "2026-11-04": [{type:"event",title:"ADIPEC 2026",source:"ADIPEC",sourceMeta:"Nov 2-5",content:`<p>Abu Dhabi</p>`,tags:["Energy"],link:"https://www.adipec.com/",coords:[54.6095,24.3969],location:"Abu Dhabi"}],
  "2026-11-05": [{type:"event",title:"ADIPEC 2026",source:"ADIPEC",sourceMeta:"Nov 2-5",content:`<p>Abu Dhabi</p>`,tags:["Energy"],link:"https://www.adipec.com/",coords:[54.6095,24.3969],location:"Abu Dhabi"}]
};
