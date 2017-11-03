<template>
  <div class="QuestionsList">
     <div class="QuestionsList-body">
        <header>
          <div class="score-legend">
             <div class="score-legend_item">
               <div class="score-legend_item-text">
                  > 1000
                </div>
                <div class="score-legend_item-img">
                   <img src="../assets/ice-cream.png">
                 </div>
             </div>
             <div class="score-legend_item">
               <div class="score-legend_item-text">
                  > 2000
                </div>
                <div class="score-legend_item-img">
                   <img src="../assets/coffe.png">
                 </div>
             </div>
             <div class="score-legend_item">
               <div class="score-legend_item-text">
                  > 3000
                </div>
                <div class="score-legend_item-img">
                   <img src="../assets/coffe.png">
                   <img src="../assets/ice-cream.png">
                </div>
             </div>
          </div>
           <div class="score">
              <span>Ваш счет:</span>
              <span>{{count}}</span>
           </div>
        </header>
        <div class="wr">
          <main class="questions">
             <question v-for="(question, i) in qiestions" key="'q'+i" :question="question" :index="i"></question>
          </main>
          <big-question v-if="showBig" :question="activeQuestion.question" :class="activeQuestion.class"></big-question>
        </div>
     </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import Data from './data.json'
  import Question from './Question'
  import BigQuestion from './BigQuestion'
  export default {
    name: 'QuestionsList',
    data () {
      return {
        qiestions: Data.Questions
      }
    },
    components: { Question, BigQuestion },
    mounted () {
    },
    computed: {
      ...mapState(['activeQuestion', 'count']),
      bigQiestions () {
      },
      showBig () {
        return this.activeQuestion.show
      }
    },
    methods: {
      ...mapActions([])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .score-legend {
    display: flex;
  }
  .score-legend_item {
    display: flex;
    align-items: center;
    margin-right: 40px;
  }
  .score-legend_item-img  img{
    width:50px;
  }
  .score-legend_item-text {
    margin-right: 20px;
  }
   header {
     height:80px;
     background: rgba(0, 0, 0, 0.5);
     margin-bottom: 30px;
     display: flex;
     justify-content:space-between;
     align-items: center;
     font-size: 30px;
     padding: 0 5%;
     color:#04e104;
   }
  .QuestionsList {
    background: url('../assets/back.jpg');
    padding:0 0;
    min-height: 100vh;
    width:100%;
  }
  .questions {
    width:100%;
    display: grid;
    grid-template-columns: repeat(7, var(--card-width));
    grid-gap: 2rem;
    align-items: center;
    justify-content: center;

  }
  .wr {
    position: relative;
  }
</style>
