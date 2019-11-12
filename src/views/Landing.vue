<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Nathan PLOUVIER</h1>
            <h4>Développeur Web FullStack PHP et Javascript</h4>
            <h4>42 Student</h4>
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
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
                      <p class="card-description">
                        Développeur passionné, grimpeur compulsif, grand buveur de thé, gaga avec son chat.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                      <md-button href="javascript:void(0)" class="md-just-icon md-simple">
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
                    Mais aussi une année intensive à <strong>l'école 42</strong> avec au programme des projets hardcore, de l'investissement dans une association, un stage d'assistant technique et pédagogique. Et en ce moment, je participe au module d'entreprenariat de l'EM Lyon. Voir CV pour le détail.
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
                  <p>
                    Comme tout être humain, j'ai aussi mes lacunes et si nous sommes amenés à collaborer, autant que vous les connaissiez.
                    Google est mon meilleur ami et sans lui, je ne serai pas développeur. Je suis super nul en design et beaucoup d'aspects front restent mystiques à mes yeux.
                    Taper 1000 lignes de code à la minute, c'est pas mon truc. Je passe beaucoup de temps à réfléchir à comment faire les choses bien et proprement.
                    Je bois énormément de thé. Pas fan des réunions trop longues et des appels téléphoniques. Pas de voiture, pas de permis. ¯\_(ツ)_/¯
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Contact</h2>
              <h4
                class="text-center description"
              >Pour plus d'infos ou me rencontrer, c'est par ici (personne n'utilise ce genre de formulaire mais sait-on jamais)</h4>
              <form class="contact-form">
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
                    <md-button class="md-success">Envoyer</md-button>
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
  data() {
    return {
      name: null,
      email: null,
      message: null
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
</style>
