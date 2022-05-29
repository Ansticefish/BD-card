<template>
  <div class="signIn">
    <div 
      :class="['signIn__container', { 'open': showAlert}]"
    >
      <form class="signIn__container__form">
        <label for="password">
          <img
            src="../assets/icons/note.png" 
            alt="instruction"
          >
        </label>
        <input 
          v-model="password"
          @input="checkPassword"
          type="text" 
          id="password"
          required="required"
          autofocus
        >
        <button type="button" disabled="true">
          <img
            src="../assets/icons/handle.png" 
            alt="door handle"
          >
        </button>
      </form>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      password: '',
      showAlert: false
    }
  },
  methods: {
    checkPassword () {
      if (this.password === "1324") {
        this.showAlert = true
        setTimeout(()=> {
          this.$router.push('room')
        }, 2000)  
      } else if (this.password.length === 4 && this.password !== "1324"){
        this.password = 'Wrong numbers!'
        setTimeout(()=> {
          this.password = ''
        }, 1000)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.signIn {
  width: 100vw;
  height: 100vh;
  background: #ccffff;
  // to prevent border collapse
  border: 1px solid #ccffcc;
  display: flex;
  align-items: center;
  justify-content: center;
  &__container {
    width: 70%;
    height: 650px;
    padding: 25px;
    background: #ffcc99;
    // to prevent border collapse
    border: 1px solid #ffcc99;
    -webkit-box-shadow: 1px 17px 7px -8px rgba(253, 255, 227, 0.8);
    box-shadow: 1px 17px 7px -8px rgba(253, 255, 227, 0.8);
    &__form {
      position: relative;
      width: 90%;
      margin: 0 auto;
      img {
        width: 100%;
      }
      input {
        position: absolute;
        top: 100px;
        left: 15px;
        text-decoration: none;
        border: none;
        width: 80%;
        height: 40px;
        background-color: #fff3c7;
        color: #8e8e8e;
        text-align: center;
        &:focus {
          outline: 0.5px dashed #ffcc99;
        }
      }
      button {
        text-decoration: none;
        border: none;
        background: transparent;
        img {
          width: 75%;
          margin-top: 30px;
          animation: alert 1s ease-in-out infinite alternate;
        }
      }
    }
  }
}



.open {
  animation: openDoor 2s linear;
}

@keyframes alert {
  to {
    transform: rotate(90deg);
  }
}

@keyframes openDoor {
  to {
    transform: rotateY(180deg);
    transform-origin: right;
  }
}

</style>