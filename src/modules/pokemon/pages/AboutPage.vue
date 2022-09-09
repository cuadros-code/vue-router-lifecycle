<template>
  <h2>About</h2>
  <hr>
  <h2>{{ name }}</h2>
  <button @click="changeName" >Cambiar nombre</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Kevin"
    }
  },
  methods: {
    changeName() {
      this.name = 'Kevin Cuadros'
    }
  },
  beforeCreate(){ 
    console.log('beforeCreate')
  },
  created() { 
    //  Peticiones HTTP
    console.log('created')
  },
  beforeMount() {  
    console.log('beforeMount')
  },
  mounted() { 
    console.log('mounted')
  },
  beforeUpdate() {  
    console.log('beforeUpdate')
  },
  updated() {  
    console.log('updated')
  },
  activated() {  
    console.log('activated')
  },
  deactivated(){  
    console.log('deactivated')
  },
  beforeUnmount() {  
    console.log('beforeUnmount')
  },
  unmounted() {  
    console.log('unmounted')
  },
  errorCaptured() {  
    console.log('errorCaptured')
  },
  renderTracked() {  
    console.log('renderTracked')
  },
  renderTriggered() { 
    console.log('renderTriggered')
  }
}
</script>

<style>

</style>