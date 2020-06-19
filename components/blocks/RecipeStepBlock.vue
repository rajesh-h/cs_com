<template>
  <div class="recipe-steps-block">
    <div class="intro">
      <div v-if="article.featuredImage" class="rsb-image">
        <img :src="article.featuredImage" :alt="article.title" />
      </div>
      <div class="rsb-intro-text">
        <h4>{{ article.title }}</h4>
        <p v-if="article.recipeIntros">
          {{ article.recipeIntros[0].text }}
        </p>
      </div>
      <div class="meta">
        <table>
          <tbody>
            <tr>
              <th v-if="article.serves">Serves</th>
              <th v-if="article.prepTime">Prep Time</th>
              <th v-if="article.cookTime">Cook Time</th>
              <th v-if="article.totalTime">Total Time</th>
            </tr>
            <tr>
              <td v-if="article.serves">{{ article.serves }}</td>
              <td v-if="article.prepTime">{{ article.prepTime }}</td>
              <td v-if="article.cookTime">{{ article.cookTime }}</td>
              <td v-if="article.totalTime">{{ article.totalTime }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="rsb-steps-main">
      <h5>INGREDIENTS:</h5>
      <div class="rsb-section">
        <div
          v-for="(recipeGroup, gindex) in article.recipeIngredients"
          :key="gindex"
          class="rsb-group-title"
        >
          <h5 v-if="recipeGroup.group.name">{{ recipeGroup.group.name }}</h5>
          <div class="rsb-group-text">
            <ul>
              <li
                v-for="(ingredient, iindex) in recipeGroup.group.ingredients"
                :key="iindex"
              >
                {{ ingredient.ingredient }} - {{ ingredient.quantity }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="rsb-steps">
        <h5>RECIPE STEPS:</h5>
        <div class="rsb-section">
          <div
            v-for="(recipeGroup, index) in article.recipeSteps"
            :key="index"
            class="rsb-group-title"
          >
            <h5 v-if="recipeGroup.group.name">
              {{ recipeGroup.group.name }}
            </h5>
            <div class="rsb-group-text">
              <ol>
                <li
                  v-for="(step, sindex) in recipeGroup.group.steps"
                  :key="sindex"
                >
                  {{ step.text }}

                  <div v-if="step.stepImageUrl" class="rsb-step-image">
                    <img :src="step.stepImageUrl" :alt="step.text" />
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div v-if="article.recipeNotes" class="rsb-section">
        <h5>
          RECIPE NOTES :
        </h5>
        <div class="rsb-group-text">
          <p class="rsb-notes">{{ article.recipeNotes }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.recipe-steps-block {
  border-radius: 0.2rem;
  border-width: 0.1rem;
  margin-top: 1rem;
  box-shadow: -4px -4px 8px #f8fafe, 4px 4px 8px #ced2db;
  .intro {
    padding: 0.5rem;

    .rsb-image {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      img {
        display: block;
        border-radius: 0.5rem;
      }
    }
    .rsb-intro-text {
      h4 {
        font-size: $text-base;
        letter-spacing: $-ls2;
      }
      p {
        font-size: $text-ss;
      }
    }
    .meta {
      margin-top: 0.2rem;

      h5 {
        font-size: $text-sm;
        letter-spacing: $-ls2;
      }
      table {
        width: 100%;
        border-top: 0.05rem;
        border-bottom: 0.05rem;
        border-style: solid;
        tbody {
          font-size: $text-ss;
          tr {
            th {
              color: $gray-color;
            }

            td {
              text-align: center;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
  @media (min-width: $screen-sm) {
    .intro {
      padding: 0.5rem;
      overflow: auto;
      .rsb-image {
        float: left;
        max-width: 200px;
        img {
          display: block;
          border-radius: 0.5rem;
        }
      }

      .rsb-intro-text {
        margin-left: 210px;
        h4 {
          font-size: $text-base;
          letter-spacing: $-ls2;
        }
        p {
          font-size: $text-ss;
        }
      }
      .meta {
        margin-top: 0.2rem;

        h5 {
          font-size: $text-sm;
          letter-spacing: $-ls2;
        }
        table {
          width: 100%;
          border-top: 0.05rem;
          border-bottom: 0.05rem;
          border-style: solid;
          tbody {
            font-size: $text-ss;
            tr {
              th {
                color: $gray-color;
              }

              td {
                text-align: center;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
  .rsb-steps-main {
    padding: 0.5rem;
    h5 {
      font-size: $text-ss;
      letter-spacing: $-ls2;
    }
    p {
      font-size: $text-ss;
    }
    .rsb-section {
      padding: 0.5rem;
      .rsb-group-title {
        padding-left: 0.5rem;
      }
      .rsb-group-text {
        padding-left: 0.5rem;
        ul {
          list-style: disc;
          list-style-position: inside;
          li {
            font-size: $text-ss;
          }
        }
        ol {
          list-style: decimal;
          padding-left: 0.5rem;

          li {
            font-size: $text-ss;
          }
        }
        .rsb-step-image {
          margin-top: 0.2rem;
          margin-bottom: 0.2rem;
          width: 100%;
          img {
            border-radius: 0.5rem;
          }
        }
        @media (min-width: $screen-sm) {
          .rsb-step-image {
            width: 50% !important;
            display: block;
            padding-left: 0;
            img {
              border-radius: 0.5rem;
            }
          }
        }
        .rsb-notes {
          white-space: pre-wrap;
          font-size: $text-ss;
        }
      }
    }
  }
}
</style>
