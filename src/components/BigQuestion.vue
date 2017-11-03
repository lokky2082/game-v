<template>
  <div class="BigQuestion">
    <div class="BigQuestion-body">
        <div class="BigQuestion-text">
          {{question.text}}
        </div>
        <ol type="A" class="BigQuestion-variants"  v-if="gif === ''">
          <li v-for="(variant, i) in question.variants" :key="'variant'+i" @click="ShowGif(variant.right)">{{variant.text}}</li>
        </ol>
        <div v-if="gif !== ''" class="gif">
           <img :src="gif">
        </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'big-question',
  props: {
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
          ]
        }
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      gif: ''
    }
  },
  methods: {
    ...mapActions(['setQuestion', 'increase']),
    ShowGif (right) {
      if (right) {
        this.gif = this.question.rightGif
        this.increase(this.question.price)
      } else {
        this.gif = this.question.falseGif
      }
      setTimeout(() => {
        let obj = {
          show: false,
          question: {},
          class: ''
        }
        this.setQuestion(obj)
      }, 3500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .BigQuestion-text {
   font-size: 40px;
 }
 .BigQuestion {
   position: absolute;
   top:0;
   left:0;
   width:100%;
   padding: 5%;
   height:calc(100vh - 100px);
 }
 .BigQuestion-body  {
   height:100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

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
 .BigQuestion-variants {
   display: flex;
   flex-wrap: wrap;
   margin-top: 100px;
   justify-content: space-between;
 }
  .BigQuestion-variants li {
    width:45%;
    text-align: left;
    font-size: 30px;
    margin-bottom: 50px;
    padding: 10px;
    cursor:pointer;
    line-height: 1.3;
    border-bottom: 1px solid #000000;
  }
  .gif {
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
  }
</style>
