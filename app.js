const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;


const pages = [
  { path: '/', label: 'Quem sou eu?' },
  { path: '/o-que-faco', label: 'O que faço' },
  { path: '/hobbies', label: 'Hobbies' }
];

const socials = [
  { name: 'Facebook',  icon: 'fa-brands fa-facebook-f',  url: 'https://www.facebook.com/daniel.silva.digitalsurfing/' },
  { name: 'Twitter / X', icon: 'fa-brands fa-x-twitter', url: 'https://x.com/Celtichunt8121' },
  { name: 'LinkedIn',  icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/in/danimagsilva/' },
  { name: 'Instagram', icon: 'fa-brands fa-instagram',   url: 'https://www.instagram.com/danimagsilva2023/' },
  { name: 'GitHub',    icon: 'fa-brands fa-github',      url: 'https://github.com/al58727/' }
];

const skills = ['PHP', 'JavaScript', 'HTML5 / CSS', 'WordPress', 'Elementor', 'MySQL / SQL',
                'Java', 'C / C++ / C#', 'Git', 'Microsoft Office'];

const timeline = [
  { when: '2020 – presente', what: 'Técnico Superior, Ministério da Educação (Agrupamento de Escolas de Vila Nova de Foz Côa)' },
  { when: '2023 – 2024', what: 'Docente de TIC, Instituto Politécnico da Guarda' },
  { when: '2019 – 2020', what: 'Formador de Programação, Consultua (Mirandela)' },
  { when: 'Set. 2019', what: 'Formador de Xamarin (C#), InforTraining (Barcelos)' },
  { when: '2017 – 2018', what: 'Bolseiro de Investigação, Instituto Politécnico de Bragança' },
  { when: '2013 – 2017', what: 'Licenciatura em Informática, UTAD (Vila Real)' }
];

const works = [
  { name: 'Grapple Hotel & Spa ****', url: 'https://www.grapplehotel.pt' },
  { name: 'Terraços de Baco (Turismo Rural)', url: 'https://www.terracosdebaco.pt' },
  { name: 'HF Imobiliária Premium', url: 'https://www.hfimobiliaria.pt' },
  { name: 'Agrupamento de Escolas de V. N. de Foz Côa', url: 'https://www.fozcoa.net' }
];

const hobbies = [
  { icon: 'fa-solid fa-microchip', title: 'Eletrónica e robótica', text: 'micro:bit, Arduino e Lego Spike Prime: o que ensino no Clube de Tecnologia e Multimédia também é o que gosto de montar nos tempos livres.' },
  { icon: 'fa-solid fa-music', title: 'Música', text: 'Além de companhia no trabalho e estudo, faço também parte de um grupo "Ecos da Montanha", em que modernizamos a cultura folk musical tradicional dos Montes com músicas originais' },
  { icon: 'fa-solid fa-people-group', title: 'Associativismo', text: 'Membro da Assembleia de Freguesia de Amedo e Zedes, presidente do Conselho Fiscal da ACDR Areias e membro da associação “Bota para Carrazeda”.' },
  { icon: 'fa-solid fa-paw', title: 'Passeios com o cão', text: 'Caminhadas pelo Douro Superior para descansar o ecrã.' }
];

/* ---------- Páginas (componentes) ---------- */
const Sobre = {
  template: `
  <section>
    <h1>Olá, sou o Daniel.</h1>
    <p class="lead">Técnico Superior de Informática no Ministério da Educação, em Vila Nova de Foz Côa, e formador.
      Apoio tecnicamente a comunidade escolar no dia a dia e formo professores no uso das plataformas educativas.</p>
    <p>Desenvolvi e giro o site do Agrupamento com PHP, JavaScript, WordPress e Elementor. Sou licenciado em
      Informática pela UTAD, sou proativo, gosto de resolver problemas e falo inglês e francês com fluência.</p>
    <h2>Percurso</h2>
    <ol class="timeline">
      <li v-for="t in timeline" :key="t.what"><b>{{ t.when }}</b><span>{{ t.what }}</span></li>
    </ol>
    <p class="contact"><i class="fa-solid fa-envelope"></i>
      <a href="mailto:daniel.silva@fozcoa.net">daniel.silva@fozcoa.net</a></p>
  </section>`,
  data: () => ({ timeline })
};

const Faco = {
  template: `
  <section>
    <h1>O que faço</h1>
    <div class="grid">
      <article>
        <h2>Apoio técnico</h2>
        <p>Resolvo problemas informáticos da comunidade escolar e formo professores nas plataformas educativas e nas redes sociais da escola.</p>
      </article>
      <article>
        <h2>Desenvolvimento web</h2>
        <p>Crio e giro sites em PHP, JavaScript, WordPress e Elementor, incluindo o do Agrupamento e de clientes do turismo e do imobiliário.</p>
      </article>
      <article>
        <h2>Ensino e formação</h2>
        <p>Dou aulas de programação do 2.º ao 4.º ano, TIC no Politécnico da Guarda (Word, Excel, PowerPoint) e orientei cursos de C, C++, Java e Xamarin.</p>
      </article>
      <article>
        <h2>Clube de Tecnologia</h2>
        <p>Acompanho os alunos em pequenos projetos com micro:bit, Arduino e Lego Spike Prime.</p>
      </article>
    </div>
    <h2>Tecnologias</h2>
    <ul class="chips"><li v-for="s in skills" :key="s">{{ s }}</li></ul>
    <h2>Portefólio</h2>
    <ul class="works">
      <li v-for="w in works" :key="w.url"><a :href="w.url" target="_blank" rel="noopener">{{ w.name }}</a><small>{{ w.url.replace('https://', '') }}</small></li>
    </ul>
  </section>`,
  data: () => ({ skills, works })
};

const Hobbies = {
  template: `
  <section>
    <h1>Hobbies</h1>
    <p class="lead">O que faço quando fecho o portátil.</p>
    <ul class="hobbies">
      <li v-for="h in hobbies" :key="h.title">
        <i :class="h.icon"></i>
        <div><h2>{{ h.title }}</h2><p>{{ h.text }}</p></div>
      </li>
    </ul>
  </section>`,
  data: () => ({ hobbies })
};

/* ---------- Router + app ---------- */
const router = createRouter({
  history: createWebHashHistory(), // funciona também ao abrir o index.html diretamente
  routes: [
    { path: '/', component: Sobre },
    { path: '/o-que-faco', component: Faco },
    { path: '/hobbies', component: Hobbies },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior: () => ({ top: 0 })
});

createApp({ data: () => ({ pages, socials }) }).use(router).mount('#app');
