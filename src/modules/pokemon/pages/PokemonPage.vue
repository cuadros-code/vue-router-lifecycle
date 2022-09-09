<template>
  <h2>Pokemon page <span>{{ id }}</span> </h2>
  <!-- {{ pokemonId }} -->
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" alt="pokemon">
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      // pokemonId: this.$route.params.id
      pokemon: null,
    }
  },
  created() {
    // const { id } = this.$route.params
    // this.pokemonId = id
    this.getPokemon()
  },
  methods: {
    async getPokemon(){
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
                              .then( res => res.json() )
        this.pokemon = pokemon
      } catch (error) {
        this.$router.push('/')
      }
    }
  },
  watch: {
    id() {
      this.getPokemon()
    }
  }
}
</script>

<style scoped>
  img{ 
    width: 200px;
  }
</style>