const pages = {
  experience: [
    {title:'教育经历', tag:'01 / EDUCATION', image:'assets/experience/education-wuhan.jpg', text:'在武汉大学戏剧影视文学本硕就读的六年，我从编剧、视听语言走向电影社会学与 AI 电影研究，逐渐学会在影像中理解人与时代。'},
    {title:'教育经历', tag:'02 / EXCHANGE', image:'assets/experience/education-rome.jpg', text:'在罗马的交换经历又让我再一次离开熟悉的坐标，在另一种文化中重新认识世界。电影于我，不只是银幕上的光影，更是一种走近生活、理解他人的方式。'},
    {title:'湖南卫视实习', tag:'03 / HUNAN TV', image:'assets/experience/hunan-1.jpg', text:'在湖南卫视担任人物编剧，是我第一次走进一个鲜活的人。从资料研究、深度访谈到 Follow PD，我在镜头与真实生活之间观察人物的成长。'},
    {title:'湖南卫视实习', tag:'04 / HUNAN TV', image:'assets/experience/hunan-2.jpg', text:'那时我意识到，每个人都不只是几个醒目的标签，一个停顿、一个眼神，比预设好的情节更动人。'},
    {title:'时尚芭莎实习', tag:'05 / HARPER’S BAZAAR', image:'assets/experience/bazaar-1.jpg', text:'在《时尚芭莎》，我参与了微信、微博与小红书的内容策划，独立完成时装稿件，并设计明星采访问题。'},
    {title:'时尚芭莎实习', tag:'06 / HARPER’S BAZAAR', image:'assets/experience/bazaar-2.jpg', text:'数据让我具体地看见内容如何抵达更多人群，也让我明白：好的传播不仅要理解平台，更要保留人物与内容本身的质感，让读者愿意为它停顿。'},
    {title:'小红书市场部实习', tag:'07 / XIAOHONGSHU', image:'assets/experience/xiaohongshu-1.jpg', text:'最近，在小红书，我参与了创作大赛与品牌联名项目，从趋势洞察、达人筛选、内容审核走向投流复盘与跨部门协作。'},
    {title:'小红书市场部实习', tag:'08 / XIAOHONGSHU', image:'assets/experience/xiaohongshu-2.jpg', text:'我逐渐理解，好的传播不是简单放大声音，而是找到品牌、平台与用户真诚相遇的位置，也开始学会将观察变成策略，让想法真正落地。'}
  ],
  writing: [
    {title:'公众号推文',tag:'ARTICLES / 01–02',articles:[
      {image:'assets/articles/article-01.jpg',link:'https://mp.weixin.qq.com/s/BEDbGiGzbrSlZR675aFqvA',label:'大小姐驾到：复古千金感回潮'},
      {image:'assets/articles/article-02.jpg',link:'https://mp.weixin.qq.com/s/eOXcarcRB3cWxycgnOjhSg',label:'街拍总火出圈？来抄“世女一”的基础款显贵公式'}
    ]},
    {title:'公众号推文',tag:'ARTICLES / 03–04',articles:[
      {image:'assets/articles/article-03.jpg',link:'https://mp.weixin.qq.com/s/QBXvSEBaitBcXKFHYL92Wg',label:'冬日战靴已就位，你选好了吗？'},
      {image:'assets/articles/article-04.jpg',link:'https://mp.weixin.qq.com/s/h_8mxDWTxWq2xYs0RXJYdg',label:'冬日必备：一件“能当主角”的柔软毛衣'}
    ]},
    {title:'《此心安处是吾乡》',tag:'SCRIPT / 01',pdf:'assets/writing/this-heart-is-home.pdf',text:'一场车祸夺走年轻夫妻的生命，只留下一个受精胚胎。三位失独父母因胚胎处置权重新联系，却在延续生命与直面伤痛之间产生分歧。随着记忆不断造访，他们最终不再逃避或伪装，各自安放失去孩子的苦痛，重新找到生活的方向与心之所安。'},
    {title:'《白鹭与黄鹂》',tag:'SCRIPT / 02',pdf:'assets/writing/white-egret-and-oriole.pdf',text:'三个来自不同阶层家庭的高三女孩，因为亲缘关系和高考短暂相遇。同处一间教室、共坐一张饭桌，她们却拥有截然不同的资源、眼界与出路。有人出国，有人进入名校，有人艰难复读。故事借三人的成长，展现阶层差异下年轻人的选择、困境与生命韧性。'},
    {title:'《办公室纪实》',tag:'SCRIPT / 03',pdf:'assets/writing/office-documentary.pdf',text:'故事发生在一天之内的办公室。一场意外“陷害”与“调查”，逐渐揭开同事之间的利益算计、隐秘比较和职场偏见。表面光鲜的电视行业背后，暗藏着流言、压迫与虚伪。剧本以独幕剧形式，让舞台同时呈现多重行动，勾勒出真实而复杂的职场众生相。'},
    {title:'《罗曼蒂克》',tag:'SCRIPT / 04',pdf:'assets/writing/romantic.pdf',text:'女歌手祁樱子突然自杀，只留下一本写给生命中重要之人的日记。前男友宋昱明替她逐一送信，却从不同人口中拼凑出彼此矛盾的樱子。没有人真正了解她的全部，正如她追寻的罗曼蒂克只是幻象。故事由此追问真实自我，以及理想与现实如何共存。'}
  ]
};
const state = Object.fromEntries(Object.keys(pages).map(k=>[k,0]));
function card(data, n) { return `<div class="placeholder-card">${data.image ? `<img class="experience-photo" src="${data.image}" alt="${data.title}" loading="lazy" decoding="async" />` : ''}<span class="badge">${data.tag}</span><strong>${data.title}${data.pair ? ` ${n ? 'B' : 'A'}`:''}</strong><p>${data.text}</p>${data.pdf ? `<a class="read-script" href="${data.pdf}" target="_blank" rel="noopener">点击阅读完整剧本 ↗</a>` : ''}</div>`; }
function articleCard(article) { return `<article class="article-card"><img src="${article.image}" alt="${article.label} 封面图" loading="lazy" decoding="async" /><a href="${article.link}" target="_blank" rel="noopener">${article.label} ↗</a></article>`; }
function renderBook(name) {
  const shell=document.querySelector(`[data-book="${name}"]`), data=pages[name], i=state[name]; if(!shell)return;
  const left=data[i], right=data[i+1];
  const fill=(item,n)=> item ? `<h2>${item.title}</h2>${item.articles ? item.articles.map(articleCard).join('') : item.pair ? card(item,0)+card(item,1) : card(item,n)}` : '<div class="empty-page"></div>';
  shell.querySelector('.left-content').innerHTML=fill(left,i);
  shell.querySelector('.right-content').innerHTML=fill(right,i+1);
  shell.querySelector('.left-page .page-number').textContent=left ? `${String(i+1).padStart(2,'0')} / ${data.length}` : '';
  shell.querySelector('.right-page .page-number').textContent=right ? `${String(i+2).padStart(2,'0')} / ${data.length}` : '';
  shell.querySelector('.prev').disabled=i===0;
  shell.querySelector('.next').disabled=i>=data.length-2;
}
Object.keys(pages).forEach(renderBook);
document.querySelectorAll('[data-book]').forEach(shell=>{
  const name=shell.dataset.book;
  shell.querySelector('.next').onclick=()=>{ state[name]=Math.min(state[name]+2,pages[name].length-2);renderBook(name); };
  shell.querySelector('.prev').onclick=()=>{ state[name]=Math.max(state[name]-2,0);renderBook(name); };
});
function showView(id='home'){ document.querySelectorAll('[data-view]').forEach(v=>v.classList.toggle('active',v.id===id)); document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${id}`)); document.body.classList.toggle('home-mode',id==='home'); window.scrollTo(0,0); }
function showViewFromHash(){ showView(location.hash.slice(1)||'home'); }
if (location.hash) history.replaceState(null, '', location.pathname + location.search);
window.addEventListener('hashchange',showViewFromHash);showView('home');
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>location.hash=b.dataset.go);
const videoModal = document.querySelector('.video-modal');
const videoFrameHost = document.querySelector('.video-frame-host');
const videoEmbedUrl = 'https://www.youtube-nocookie.com/embed/keQ2FBc7teY?autoplay=1&rel=0';
function closeVideoModal() {
  videoFrameHost.replaceChildren();
  videoModal.classList.remove('open');
  videoModal.setAttribute('aria-hidden','true');
}
document.querySelector('.video-launch')?.addEventListener('click',()=>{
  const frame = document.createElement('iframe');
  frame.className = 'modal-video';
  frame.title = '《副驾驶》';
  frame.src = videoEmbedUrl;
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  videoFrameHost.replaceChildren(frame);
  videoModal.classList.add('open');
  videoModal.setAttribute('aria-hidden','false');
});
document.querySelector('.close-modal').onclick=closeVideoModal;
videoModal.onclick=e=>{if(e.target===e.currentTarget)closeVideoModal()};
const stillPaths = [
  'assets/video/passenger-01.png',
  'assets/video/passenger-02.png',
  'assets/video/passenger-03.png',
  'assets/video/passenger-04.png',
  'assets/video/passenger-05.png',
  'assets/video/passenger-06.png'
];
document.querySelector('.stills').innerHTML=stillPaths.map((src,i)=>`<div class="still"><img src="${src}" alt="《副驾驶》剧照 ${i+1}" loading="lazy" decoding="async" /></div>`).join('');
const audioWorks = [
  { type:'播音作品', title:"Do you know what influences people's first impression", src:'assets/audio/first-impression.mp3' },
  { type:'播音作品', title:"Princesses' Talk", src:'assets/audio/princesses-talk.mp3' },
  { type:'编辑作品', title:'Spring of Chinese folk music', src:'assets/audio/chinese-folk-music.mp3' },
  { type:'编辑作品', title:'The Neapolitan Novels by Elena Ferrante', src:'assets/audio/neapolitan-novels.mp3' }
];
const episodes = document.querySelector('.episodes');
episodes.innerHTML = audioWorks.map((work,i)=>`<div class="episode"><button type="button" class="episode-play" data-index="${i}" title="播放 ${work.title}">▶</button><div><em>${work.type}</em><span>${work.title}</span></div></div>`).join('');
let activeEpisode = null, activeEpisodeButton = null;
episodes.querySelectorAll('.episode-play').forEach(button => button.addEventListener('click', () => {
  const work = audioWorks[Number(button.dataset.index)];
  if (activeEpisodeButton === button) {
    activeEpisode.paused ? activeEpisode.play() : activeEpisode.pause();
    return;
  }
  if (activeEpisode) { activeEpisode.pause(); activeEpisode.currentTime = 0; activeEpisodeButton.textContent = '▶'; activeEpisodeButton.classList.remove('playing'); }
  activeEpisode = new Audio(work.src); activeEpisodeButton = button;
  activeEpisode.addEventListener('ended', () => { button.textContent = '▶'; button.classList.remove('playing'); activeEpisode = null; activeEpisodeButton = null; });
  activeEpisode.addEventListener('play', () => { button.textContent = '❚❚'; button.classList.add('playing'); });
  activeEpisode.addEventListener('pause', () => { button.textContent = '▶'; button.classList.remove('playing'); });
  activeEpisode.play();
}));
const musicButton = document.querySelector('.music-player');
const backgroundMusic = new Audio('assets/music/jellyfish-background.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.32;
backgroundMusic.preload = 'auto';
let musicManuallyPaused = false;
function showMusicState(playing) { musicButton.classList.toggle('playing', playing); musicButton.setAttribute('aria-pressed',playing); }
async function playBackgroundMusic() {
  if (musicManuallyPaused) return;
  try { await backgroundMusic.play(); showMusicState(true); } catch { showMusicState(false); }
}
musicButton.addEventListener('click', () => {
  if (backgroundMusic.paused) { musicManuallyPaused = false; playBackgroundMusic(); }
  else { musicManuallyPaused = true; backgroundMusic.pause(); }
});
backgroundMusic.addEventListener('pause', () => showMusicState(false));
backgroundMusic.addEventListener('play', () => showMusicState(true));
window.addEventListener('load', playBackgroundMusic);
window.addEventListener('pageshow', playBackgroundMusic);
document.addEventListener('WeixinJSBridgeReady', playBackgroundMusic, false);
['pointerdown', 'touchstart', 'keydown'].forEach(event => document.addEventListener(event, playBackgroundMusic, { once:true, passive:true }));

// React Bits Aurora adapted for this dependency-free static site.
(() => {
  const canvas = document.querySelector('.aurora-bg');
  if (!canvas || !canvas.getContext) return;
  const gl = canvas.getContext('webgl2', { alpha: false, antialias: false });
  if (!gl) return;
  const vertex = `#version 300 es
  in vec2 p; void main(){gl_Position=vec4(p,0.,1.);}`;
  const fragment = `#version 300 es
  precision highp float; uniform vec2 r; uniform float t; out vec4 o;
  float n(vec2 p){return sin(p.x)*sin(p.y);}
  void main(){
    vec2 uv=gl_FragCoord.xy/r; float wave=n(vec2(uv.x*3.2+t*.12,uv.x*5.0-t*.09))*0.18;
    float band=smoothstep(.05,.7,1.-abs(uv.y-(.42+wave))*2.1);
    vec3 a=vec3(.18,.42,.65), b=vec3(.93,.34,.36), c=vec3(.97,.73,.26);
    vec3 col=mix(mix(a,b,uv.x),c,sin(uv.x*3.14159)*.45)*band;
    col+=vec3(.08,.09,.14)*(1.-band); o=vec4(col,1.);
  }`;
  function shader(type, source) { const s=gl.createShader(type); gl.shaderSource(s,source); gl.compileShader(s); return s; }
  const program=gl.createProgram(); gl.attachShader(program,shader(gl.VERTEX_SHADER,vertex)); gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fragment)); gl.linkProgram(program);
  if (!gl.getProgramParameter(program,gl.LINK_STATUS)) { canvas.remove(); return; }
  const buffer=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,buffer); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
  const pos=gl.getAttribLocation(program,'p'), resolution=gl.getUniformLocation(program,'r'), time=gl.getUniformLocation(program,'t');
  function resize(){ const d=Math.min(devicePixelRatio,1.5); canvas.width=innerWidth*d; canvas.height=innerHeight*d; gl.viewport(0,0,canvas.width,canvas.height); }
  function draw(now){ resize(); gl.useProgram(program); gl.bindBuffer(gl.ARRAY_BUFFER,buffer); gl.enableVertexAttribArray(pos); gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0); gl.uniform2f(resolution,canvas.width,canvas.height); gl.uniform1f(time,now*.001); gl.drawArrays(gl.TRIANGLES,0,3); requestAnimationFrame(draw); }
  addEventListener('resize',resize); requestAnimationFrame(draw);
})();

// React Bits ClickSpark adapted for the whole static portfolio.
(() => {
  const canvas = document.querySelector('.click-sparks');
  const ctx = canvas?.getContext('2d');
  if (!ctx) return;
  const sparks = []; let running = false;
  const duration = 500, count = 8, radius = 24, size = 28;
  function resize() { const d = Math.min(devicePixelRatio || 1, 2); canvas.width = innerWidth * d; canvas.height = innerHeight * d; canvas.style.width = `${innerWidth}px`; canvas.style.height = `${innerHeight}px`; ctx.setTransform(d, 0, 0, d, 0, 0); }
  function ease(t) { return t * (2 - t); }
  function draw(now) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = sparks.length - 1; i >= 0; i--) {
      const spark = sparks[i], elapsed = now - spark.start;
      if (elapsed >= duration) { sparks.splice(i, 1); continue; }
      const e = ease(elapsed / duration), d = e * radius, length = size * (1 - e);
      ctx.globalAlpha = 1 - e; ctx.strokeStyle = spark.color; ctx.lineWidth = 2; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(spark.x + d * Math.cos(spark.angle), spark.y + d * Math.sin(spark.angle)); ctx.lineTo(spark.x + (d + length) * Math.cos(spark.angle), spark.y + (d + length) * Math.sin(spark.angle)); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    if (sparks.length) requestAnimationFrame(draw); else running = false;
  }
  document.addEventListener('click', e => {
    const colors = ['#e34a47', '#3098d2', '#f7ce43', '#694107']; const now = performance.now();
    for (let i = 0; i < count; i++) sparks.push({ x:e.clientX, y:e.clientY, angle:(Math.PI * 2 * i) / count, start:now, color:colors[i % colors.length] });
    if (!running) { running = true; requestAnimationFrame(draw); }
  });
  addEventListener('resize', resize); resize();
})();
