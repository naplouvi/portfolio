<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Nathan PLOUVIER</h1>
            <h4 class="text-white">Développeur Web FullStack PHP et Javascript</h4>
            <h4 class="text-white">42 Student</h4>
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-info md-lg"
              target="_blank"
            >
              <i class="fas fa-play"></i> Voir la vidéo
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div id="who" class="section text-center">
        <div class="container">
          <h2 class="title">About.</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-25 mx-auto">
                      <img
                        :src="picture"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Nathan
                      <br />
                    </h4>

                    <md-card-content>
                      <p
                        class="card-description"
                      >Développeur passionné, grimpeur compulsif, grand buveur de thé, gaga avec son chat.</p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                      <md-button href="http://github.com" class="md-just-icon md-simple">
                        <i class="fab fa-github-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="how" class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Time to be honest.</h2>
              <h5 class="description">
                Je recherche un stage
                <strong>stylé</strong> front-end, back-end ou les deux.
                <br />J'adore farfouiller dans le code et découvrir de nouvelles technos (et même des anciennes !) alors n'hésitez pas à me contacter.
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>timeline</md-icon>
                  </div>
                  <h4 class="info-title">XP</h4>
                  <p>
                    Un an et demi de développement en
                    <strong>freelance</strong> dans les locaux d'un
                    <strong>incubateur de Startups</strong> et en remote.
                    Plusieurs expériences pro dans des milieux variés. Une licence de sciences humaines et sociales, excellente pour les
                    <strong>soft skills</strong>.
                    Mais aussi une année intensive à
                    <strong>l'école 42</strong> avec au programme des projets hardcore, de l'investissement dans une association, un stage d'assistant technique et pédagogique. Et en ce moment, je participe au module d'entreprenariat de l'EM Lyon.
                    <a href="/cv" target="_blank">Voir CV pour le détail.</a>
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>palette</md-icon>
                  </div>
                  <h4 class="info-title">Skills</h4>
                  <p>
                    C'est indéniablement côté back-end que je suis le plus à l'aise pour en avoir beaucoup fait. Les
                    <strong>API</strong> n'ont plus de secrets pour moi (pour peu qu'elles soient documentées) pour en avoir consommé et designé à gogo dans mes projets.
                    J'ai surtout travaillé en
                    <strong>node.js (express)</strong> et
                    <strong>PHP</strong> (vanilla) avec respectivement Mongodb et MySQL pour les bases de données.
                    Pour le front, du
                    <strong>HTML/CSS/JS</strong> classique, du
                    <strong>Vue.js</strong>, avec une priorité mise sur l'expérience utilisateur, le
                    <strong>responsive</strong> et la simplicité. Mes projets ont souvent un aspect minimaliste, mais c'est bien aussi... non ?
                    J'utilise
                    <strong>Git</strong> quotidiennement, pianote des trucs dans le terminal et reste informé sur les nouveautés tech.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>sentiment_dissatisfied</md-icon>
                  </div>
                  <h4 class="info-title">Boo</h4>
                  <p>En vrac, la liste non exhaustive de mes points faibles : super nul en design, réfléchis trop, répond jamais au téléphone, déteste les réunions, fais des blagues pas drôles, n'aime pas sortir, n'aime pas la foule, pas de voiture, pas de permis. ¯\_(ツ)_/¯</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="what" class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-100 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Work.</h2>
              <div class="uk-child-width-1-2@m" uk-grid>
                <div v-for="project in projects" :key="project.id">
                  <Project
                    :key="project.id"
                    :title="project.title"
                    :description="project.description"
                    :url="project.url"
                    :img="project.img"
                  ></Project>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Contact.</h2>
              <h4
                class="text-center description"
              >Pour plus d'infos ou me rencontrer, c'est par ici (personne n'utilise ce genre de formulaire mais sait-on jamais)</h4>
              <form action="/api/v1/project" method="POST" class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Ton prénom</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Ton email (pour te répondre)</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Le message</label>
                  <md-textarea v-model="message"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button type="submit" class="md-info">Envoyer</md-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project";

export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/86369.jpg")
    },
    picture: {
      type: String,
      default: require("@/assets/img/naplouvi.jpg")
    }
  },
  components: {
    Project
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      projects: [
        {
          id: "1",
          title: "Intranet pour les tuteurs de 42 Lyon",
          description:
            "Plateforme web d'organisation pour les tuteurs de l'école 42, il comporte une partie publique de blogging accessible aux étudiants de l'école. Les tuteurs ont accés à plus de fonctionnalités (proposer et lancer des projets, collaborer et s'organiser entre eux). Réalisé avec le framework CodeIgniter et Bootstrap.",
          img: require("@/assets/img/projects/intratuteur.jpg"),
          url: "https://tuteurs.le-101.fr"
        },
        {
          id: "2",
          title: "42 Lyon",
          description:
            "WIP. Nouveau site de l'école 42 Lyon suite au changement de nom (anciennement le-101). Réalisé en Python Flask et Materialize.",
          img: require("@/assets/img/projects/42lyon.png"),
          url: "https://42lyon.fr"
        },
        {
          id: "3",
          title: "Camagru",
          description:
            "42 Project. Plateforme de partage de photos. Mode studio : uploader ou prendre une photo avec la webcam et y ajouter des filtres. Conception de mon propre MVC en PHP vanilla, Javascript vanilla et Bulma pour le css + Docker.",
          img: require("@/assets/img/projects/camagru.png"),
          url: "https://github.com/naplouvi/camagru"
        },
        {
          id: "4",
          title: "Matcha",
          description:
            "42 Project. Plateforme de rencontre en ligne. Mix entre Tinder et Meetic. Utilisation de mon propre MVC PHP couplé à un serveur node.js et socket.io pour les évènements dynamiques (notifications/messagerie instantanée), environnement Docker. Stratégies d'authentifications omniauth (oAuth2).",
          img: require("@/assets/img/projects/matcha.png"),
          url: "https://github.com/naplouvi/matcha"
        },
        {
          id: "5",
          title: "Hypertube",
          description:
            "42 Project. Projet de fin de branche Web. Application web de streaming vidéo en utilisant le protocole bittorent. Utilisation d'une fullstack Javascript (MongoDB, Express, Vue.js, Node.js) et développement d'une API REST.",
          img: require("@/assets/img/projects/hypertube.png"),
          url: "https://github.com/naplouvi/hypertube"
        }
      ]
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}

.text-white {
  color: #ffff;
}
</style>
