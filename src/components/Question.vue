<template>
  <div class="Question" @click="showQuestion(question)" :class="indexArr >= 0 ? 'disabled':''" >
    <div class="Question-body" :class="categoryClass">
       <p class="Question-price">{{question.price}}</p>
       <p>{{question.category}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'question',
  props: {
    index: {
      type: Number
    },
    question: {
      type: Object,
      default () {
        return {
          text: 'Кто придумал карточную игру Magic: The Gathering?',
          category: 'Magic',
          price: 200,
          variants: [
            {
              text: 'математик Ричард Гарфилд',
              right: true
            },
            {
              text: 'магистры карт Таро Артур Эдвард Уэйт и мадам Ленорман',
              right: false
            },
            {
              text: 'белый маг Дэвид Копперфильд',
              right: false
            },
            {
              text: 'Дарт Вейдер',
              right: false
            }
          ],
          rightGif: 'https://media.giphy.com/media/d2Z4V5Zey8FXHYwo/giphy.gif',
          falseGif: 'https://media.giphy.com/media/xT4ApAg8gUAk0f1APK/giphy.gif'
        }
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState(['disabled']),
    indexArr () {
      return this.disabled.indexOf(this.index)
    },
    categoryClass () {
      let className = ''
      if (this.question.category === 'Magic') {
        className = 'Magic'
      } else if (this.question.category === 'DC') {
        className = 'DC'
      } else {
        className = 'SW'
      }
      return className
    }
  },
  methods: {
    ...mapActions(['setQuestion', 'setDisabled']),
    showQuestion (question) {
      if (this.indexArr < 0) {
        let obj = {
          show: true,
          question: question,
          class: this.categoryClass
        }
        this.setDisabled(this.index)
        this.setQuestion(obj)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  p {
    margin: 0;
  }
  .Question {
    cursor: pointer;
    transition:transform 1s ease;
    box-shadow: -1px 0px 40px -1px rgba(0,0,0,1);
  }
  .Question.disabled {
    filter: grayscale(80%);
      cursor: default;
  }
  .Question.disabled:hover {
    transform: scale(1);
  }
  .Question:hover {
    transform: scale(1.2);
  }
  .Question-body {
    background: #fff;
    box-shadow: -1px 0px 26px -1px rgba(0,0,0,0.75);
    height: var(--card-height);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    perspective: 1000px;
  }
  .Magic {
    background: var(--magicBack);
    color:var(--magicText);
  }
  .DC {
      background: var(--dcBack);
      color:var(--dcText);
  }
  .SW {
      background: var(--swBack);
      color:var(--swText);
  }
  .Question-price {
    font-size: 40px;
    weight:600;
  }
</style>
