import React from "react";
import "../pages-css/footer/footer-styled.css";
import ScriptFooter from "../pages-scripts/pagesFooterScripts/PagesFooter-script.js";


function PageFooter() {

    

    return (
        <html>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <section class="et-hero-tabs">
    <h1>EDUACAÇÃO DE QUALIDADE</h1>
    <h3>PLATAFORMA DE DESENVOLVIMENTO DE CARREIRA E APRENDIZAGEM</h3>
    <div class="et-hero-tabs-container">
      <a class="et-hero-tab" href="#tab-ex1">Testes</a>
      <a class="et-hero-tab" href="#tab-ex2">Orientação</a>
      <a class="et-hero-tab" href="#tab-ex3">Carreira</a>
      <a class="et-hero-tab" href="#tab-ex4">Atividades</a>
      <a class="et-hero-tab" href="#tab-ex5">Rankings</a>
      <a class="et-hero-tab" href="#tab-ex6 ">Recursos</a>
      <span class="et-hero-tab-slider"></span>
    </div>
  </section>

  <main class="et-main">
    <section class="et-slide" id="tab-ex1">
      <h1>Testes de Aptidão e Pesonalidade</h1>
      <h3>os alunos podem fazer testes online para identificar suas habilidades e interesses.<br></br> A partir dessas informações, a plataforma oferece sugestões de carreira e caminhos de estudo para os alunos explorarem.
</h3>
    </section>
    <section class="et-slide" id="tab-ex2">
      <h1>Orientação professional</h1>
      <h3> a plataforma fornece informações sobre diferentes campos de trabalho, incluindo requisitos de formação, habilidades necessárias, salários e perspectivas de carreira.<br>
      </br> Os alunos podem pesquisar diferentes carreiras e explorar opções de estudo em diferentes áreas.
</h3>
    </section>
    <section class="et-slide" id="tab-ex3">
      <h1>Plano de carreira personalizado</h1>
      <h3>a plataforma permite que os alunos criem um plano de carreira personalizado, estabelecendo metas e objetivos para o futuro e acompanhando seu progresso em relação a esses objetivos.
</h3>
    </section>
    <section class="et-slide" id="tab-ex4">
      <h1>Atividades em equipe</h1>
      <h3>a plataforma incentiva a aprendizagem colaborativa por meio de atividades em equipe, onde os alunos podem ganhar pontos e competir por prêmios. Para realizar essas atividades, os alunos precisam criar duplas ou grupos de estudo com outros alunos da plataforma, e participar de desafios e jogos para testar suas habilidades e conhecimentos.
</h3>
    </section>
    <section class="et-slide" id="tab-ex5">
      <h1>Pontuação e rankings</h1>
      <h3>a plataforma atribui pontos aos alunos com base em seu desempenho em testes, atividades e participação em equipe. Os alunos podem acompanhar sua pontuação e classificação na plataforma, e os três melhores alunos em cada área de estudo a cada bimestre serão premiados com prêmios personalizados.
</h3>
    </section>
    <section class="et-slide" id="tab-ex6">
      <h1>Recursos de apoio</h1>
      <h3>a plataforma oferece uma variedade de recursos de apoio, incluindo fóruns de discussão, vídeos educativos, artigos e orientação profissional de especialistas em carreira.</h3>
    </section>
  </main>
        </html>
    );
}    ScriptFooter();

export default PageFooter;