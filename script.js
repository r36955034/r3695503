/* ===== Jain Sanskar Arohan — static script ===== */

/* Year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Header scroll state */
const header = document.getElementById("site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* Mobile menu */
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => mobileMenu.classList.remove("open"))
);

/* Reveal-on-scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ===== CURRICULUM DATA ===== */
const numerals = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];

const levels = [
  { n: 1, reg: "https://forms.gle/gZQ21DsV6QemBX3m7", wa: "https://chat.whatsapp.com/FYoAzljoIf32JuNWkjHBl5",
    topics: ["नमस्कार मंत्र – सार्थ प्रश्नोत्तर","गुरु वन्दन (तिव्रुत्तो का पाठ) – सार्थ प्रश्नोत्तर","आलोचना सूत्र (इच्छाकारणों का पाठ) – सार्थ प्रश्नोत्तर","पंचनमसी बोल – 1 से 5 बोल","'नहीं' के 10 बोल","'मूल' के 8 बोल","हे प्रभो! आनंददाता","जय बोलो महावीर स्वामी की","बारह व्रत (पद्य में)","सामान्य प्रश्नोत्तर","तीर्थंकर परिचय","गणधर परिचय","श्रावक के तीन मनोरथ","जैन ध्वज सम्यक कुप्यसन","भगवान महावीर की पूर्वार्ध जीवन गाथा","भगवान पार्श्वनाथ की करुणा","अमर कुमार की श्रद्धा"] },
  { n: 2, reg: "https://forms.gle/HCNd2Cx7ewJXxWow5", wa: "https://chat.whatsapp.com/LZqWlR2VZTLGBqCMPssmgo",
    topics: ["उत्तरिकरण सूत्र","चतुर्विंशत्स्तव सूत्र","प्रतिज्ञा सूत्र","पच्चीस बोल (6 से 11 बोल)","ज्ञानवृद्धि के 11 बोल","दया के 12 बोल","ज्ञान घटने के 7 बोल","पाँच बोल – क्या कहाँ","परमात्मा वंदना","पाँच अभिगम","बारह भावना","सामान्य प्रश्नोत्तर","बीस विहर्मान जी","सोलह सतीयाँ जी","आठ मद","इन्हें भी जानिये","मुश्किल के आठ बोल","भगवान महावीर की शेष जीवन गाथा","सेठ सुदर्शन की कथा","पूज्य श्री जयमल जी म.सा. जीवन झांकी"] },
  { n: 3, reg: "https://forms.gle/XdAWyWKzUh6f4w4fA", wa: "https://chat.whatsapp.com/EYqfdYP3hBu3lxb1hu6Qm9",
    topics: ["शक्रस्तव सूत्र (णमोत्तृण का पाठ) सार्थ प्रश्नोत्तर","सामायिक पारने का पाठ – सार्थ प्रश्नोत्तर","सामायिक लेने की एवं पारने की विधि","पच्चीस बोल – 12 से 18 बोल","तीर्थंकर पद प्राप्ति के 20 बोल","सवणे णाणे","दस मुण्डन","मंगलाचरण","प्रभो भक्ति में ध्यान रहे","लोगस्स – स्तुति","श्लाघनीय पुरुष – सामान्य प्रश्नोत्तर","महासतियों की स्मरण यात्रा","महापुरुषों की प्रसिद्धि","महासती चन्दनबाला","पुद्गल का स्वभाव","आचार्य श्री आत्माराम जी महाराज"] },
  { n: 4, reg: "https://forms.gle/p22NZpefa9JvMEWZA", wa: "https://chat.whatsapp.com/JF3oUFZDeseATD0sHtPxKK",
    topics: ["इच्छामि णं भन्ते का पाठ","इच्छामि ठाणं का पाठ","ज्ञानतीव्रचार का पाठ","दर्शन सम्यक्त्व का पाठ","बारह व्रतों के अत्याचार","संलेखना के पाँच अत्याचारों का पाठ","इच्छामि खमासमणो का पाठ","चत्तारि मंगल का पाठ","पंचवीस बोल – 19 से 25 बोल","मेरी भावना","श्री वज्रपंजर स्तोत्र","तिथि संदेश","चौदह नियम","बारह महापापी","संत दर्शन से आठ कर्म की निर्जरा","जैन पर्व","भगवान ऋषभदेव","आचार्य सम्राट श्री आनंदऋषि जी महाराज"] },
  { n: 5, reg: "https://forms.gle/tZFh538TeNfjcb28A", wa: "https://chat.whatsapp.com/CXnmeH4rggSL3SzAvxU0GX",
    topics: ["बारह भावनों के अतिचार सहित पाठ, अर्थ व प्रश्नोत्तर","बड़ी संलेखना का पाठ, अर्थ व प्रश्नोत्तर","तस्स धम्मस्स का पाठ एवं अर्थ","व्यवहार समकित के 67 बोल","अभव्य की अनंत यात्रा","मोक्ष मार्ग का थोकड़ा","मानव मन","उपसर्ग–हर स्तोत्र सार्थ","सबका मंगल सबका उत्तम","महालाभ का बोल","प्रभु वीर के 10 महास्वप्न व फल","प्रभु वीर की अनुपम तपस्या यात्रा","प्रभु वीर की वर्षावास यात्रा","पुण्यवान को प्राप्त उत्तम सामग्री","वर्षीदान की महिमा","जीव के दुःख पाने के 14 बोल","गणधर श्री इन्द्रभूति जी गौतम","युवाचार्य श्री मिश्रीमलजी महाराज \"मधुकर\""] },
  { n: 6, reg: "https://forms.gle/tZFh538TeNfjcb28A", wa: "https://chat.whatsapp.com/GCn65idA943E0pLDjnaylL",
    topics: ["पाँच पदों की वन्दना से अंतिम पाठ तक सार्थ प्रश्नोत्तर","प्रतिक्रमण की विधि तथा प्रश्नोत्तर","कषाय का थोकड़ा","तीर्थंकर भगवान का थोकड़ा","शीघ्र मोक्ष जाने के 23 बोल","जैन श्रावक – लक्षण, पहचान, गुण आदि","प्रवर्जित होने के कारण","महावीराष्टक स्तोत्र","तीर्थंकर के 34 अतिशय","आचार्य श्री सुधर्मस्वामी जी","कामदेव श्रावक"] },
  { n: 7, reg: "https://forms.gle/oD7ccVoyHPn26SKC", wa: "https://chat.whatsapp.com/F3XfSbYwedN0vMIvISe9eu",
    topics: ["जैन आगम – एक परिचय","प्रत्याख्यान सूत्र","काल-चक्र (छः आरा)","25 क्रियाएं","महामोहनीय कर्म बंध के तीस कारण","समवसरण परिचय","दस आश्चर्य","जैन शासन के गौरवशाली तपस्वी","सात निन्हव","रत्नाकर पच्चीसी","भगवान मल्लिनाथ","सेवामूर्ति मुनि नंदीषेण"] },
  { n: 8, reg: "https://forms.gle/Qte5VwktckuKrgmm9", wa: "https://chat.whatsapp.com/Iouh3mGPOvo8YJqmcbWbiI",
    topics: ["Portion 1","Portion 2","Portion 3"] },
  { n: 9, reg: "https://forms.gle/Qte5VwktckuKrgmm9", wa: "https://chat.whatsapp.com/Iouh3mGPOvo8YJqmcbWbiI",
    topics: ["Portion 1","Portion 2","Portion 3"] },
  { n: 10, reg: "https://forms.gle/Qte5VwktckuKrgmm9", wa: "https://chat.whatsapp.com/Iouh3mGPOvo8YJqmcbWbiI",
    topics: ["Portion 1","Portion 2","Portion 3"] },
];

const escapeHtml = (s) => s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

const levelsHTML = levels.map(lvl => `
  <article class="level reveal">
    <div class="level-head">
      <div class="level-num">${numerals[lvl.n - 1]}</div>
      <div class="level-head-text">
        <small>Class ${lvl.n}</small>
        <strong>Portions &amp; Registration</strong>
      </div>
      <div class="level-topics-count">${lvl.topics.length} topics</div>
    </div>
    <div class="level-body">
      <div class="level-portions">
        <div class="subhead">📜 Portions</div>
        <ul class="portions-list">
          ${lvl.topics.map(t => `<li><span>${escapeHtml(t)}</span></li>`).join("")}
        </ul>
      </div>
      <div class="level-join">
        <div class="subhead">✦ Join Class ${lvl.n}</div>
        <a class="join-card" href="${lvl.reg}" target="_blank" rel="noreferrer">
          <div class="meta">
            <div class="icon-box icon-maroon">↗</div>
            <div><strong>Registration Link</strong><small>Sign up via Google Form</small></div>
          </div>
          <span style="color: var(--maroon);">→</span>
        </a>
        <a class="join-card" href="${lvl.wa}" target="_blank" rel="noreferrer">
          <div class="meta">
            <div class="icon-box icon-wa">💬</div>
            <div><strong>WhatsApp Group</strong><small>Updates &amp; meeting links shared here</small></div>
          </div>
          <span style="color: var(--maroon);">→</span>
        </a>
        <div class="join-note">
          <span>👥</span>
          <span>Weekly online class meeting links are shared inside the WhatsApp group above.</span>
        </div>
      </div>
    </div>
  </article>
`).join("");

const levelsHost = document.getElementById("levels");
levelsHost.innerHTML = levelsHTML;

/* Re-observe newly added .reveal nodes */
levelsHost.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Smooth scroll for footer links

document.querySelectorAll('.footer-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});


// Dynamic Year Update

const copyText = document.querySelector('.footer-copy');

if (copyText) {
  const year = new Date().getFullYear();

  copyText.innerHTML =
    `मिच्छामि दुक्कड़म् · © ${year} Jain Sanskar Arohan · All rights reserved`;
}
