<template>
    <div>
      <div class="uk-card uk-card-default">
        <div class="uk-card-media-top">
          <img :src="img" alt />
        </div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{title}}</h3>
          <p>{{description}}</p>
        </div>
        <div class="uk-card-footer">
          <a :href="url" class="uk-button uk-button-text">Voir</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "project",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    }
  }
};
</script>