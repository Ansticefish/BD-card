<template>
  <div class="room">  
    <img
      class="room__rainbow" 
      src="../assets/icons/rainbow.png" 
      alt="rainbow"
    >
    <img
      class="room__bd" 
      src="../assets/icons/BDpng.png" 
      alt="Happy Birthday"
    >
    <div class="room__beds">
      <img 
        @click="openModal(0)"
        class="room__beds__kiki"
        src="../assets/icons/kiki.png" 
        alt="Kiki"
      >
      <img 
        @click="openModal(1)"
        class="room__beds__anstice"
        src="../assets/icons/me.png" 
        alt="Anstice"
      >
      <img 
        @click="openModal(2)"
        class="room__beds__judy"
        src="../assets/icons/judy.png" 
        alt="Judy"
      >
      <div class="room__beds__fox">
        <div
          v-if="!infoClose"    
          class="room__beds__fox__modal"
        >
          <img
            @click="toggleInfo"
            class="room__beds__fox__modal__btn--cancel"
            src="../assets/icons/cross.png"
          >
          <p>
            Hey, Sally! Your friends wrote letters to you! Click the dolls to read their letters!
          </p>
        </div>
        <img 
          @click="toggleInfo"
          class="room__beds__fox__sally"
          src="../assets/icons/sally.png" 
          alt="Sally"
        >
      </div>
    </div>
    <div
      v-if="!modalClose" 
      class="room__modal"
    >
      <img
        @click="closeModal"
        class="room__modal__btn"
        src="../assets/icons/cross-modal.png"
      >
      <img 
       class="room__modal__card"
       :src="modalImg" 
       alt="card"
      >
    </div>
  </div>
</template>

<script>
const modalInfo = [
  {
    name: 'kiki',
    img: require('../assets/icons/KikiCard.png')
  },
  {
    name: 'anstice',
    img: require('../assets/icons/AnsticeCard.png')
  },
  {
    name: 'judy',
    img: require('../assets/icons/JudyCard.png')
  }
]

export default {
  name: 'Room',
  data () {
    return {
      infoClose: false,
      modalClose: true,
      modalImg: ''
    }
  },
  methods: {
    toggleInfo () {
      this.infoClose = !this.infoClose
    },
    openModal (id) {
      this.modalImg = modalInfo[id].img
      this.modalClose = false
    },
    closeModal () {
      this.modalClose = true
    }
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 100vw;
}

.room {
  width: 100vw;
  height: 100vh;
  background: #b99cd0;
  border: 1px solid #b99cd0;
  & > img {
    position: absolute;
    top: 10px;
    left: 0;
    z-index: 99;
    opacity: 1;
    animation: birthday 2s ease-in-out reverse;
  }
  &__beds {
    width: 100vw;
    height: calc(100vh - 30px);
    margin-top: 30px;
    background-image: url('../assets/icons/roomNew.png');
    background-size: cover;
    & > img {
      position: absolute;
    }
    &__fox {
      &__modal {
        position: absolute;
        bottom: 30px;
        right: 0;
        height: 120px;
        width: 50vw;
        padding: 10px;
        background-color: rgb(22, 126, 245);
        border-radius: 10px;
        animation: show 3s ease-in-out reverse;
        &__btn--cancel {
          position: absolute;
          top: 10px;
          z-index: 99;
          width: 20px;
          height: 20px;
        }
        & p {
          margin-top: 30px;
          color: #ffffff;
        }
      }
      &__sally {
        position: absolute;
        bottom: 30px;
        width: 60%;
        transform: rotate(0deg);
        animation: sallyMove 3s linear infinite alternate;
      }
    }
  }
}


// image style
.room__beds {
  &__kiki {
    top: 210px;
    left: -30px;
    width: 50%;
    animation: kikiMove 2s ease-in-out infinite alternate;
    z-index: 99;
  }
  &__anstice {
    top: 150px;
    right: -40px;
    width: 50%;
    animation: ansticeMove 2s linear infinite alternate;
    z-index: 99;
  }
  &__judy {
    top: 380px;
    right: 20px; 
    width: 40%;
    transform: rotate(-10deg);
    animation: judyMove 2s linear infinite alternate;
  }
}

// modal
.room__modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;
  &__btn {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 20px;
    z-index: 120;
  }
  &__card {
    margin-top: 50px;
    width: 90vw;
  }
}


// animation
@keyframes kikiMove {
  to {
   transform: translate(10%, 10%) rotate(30deg);
   transform-origin: top left;
  }
}

@keyframes ansticeMove {
  to {
    transform: translate(10%, 15%) rotate(5deg);
    transform-origin: bottom right;
  }
}

@keyframes judyMove {
  to {
    transform: rotate(10deg);
  }
}

@keyframes sallyMove {
  to {
    transform: rotate(-5deg);
  }
}

@keyframes birthday {
  to {
    opacity: 0;
    width: 10vw;
    transform: rotate(180deg);
  }
}

@keyframes show {
  to {
    opacity: 0;
  }
}

</style>