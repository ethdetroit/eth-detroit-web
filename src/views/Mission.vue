<template>
  <div class="about">


     <Navbar />



      <div class="flex mb-4">
        <div class="w-full bg-gray-800  ">

          <div class="m-6 p-4 bg-gray-100 pb-8 ">




            <h3 class="text-lg font-bold"> Our Mission - ETH Detroit</h3>


            <div class="container mt-8">
                Founded in 2021, ETH Detroit is an inclusive community with the goal to educate and embolden the community of Detroit through the use of live meet-ups, webinars, and collaboration.

                 Topics of education are focused around emerging digital technologies, specifically as they relate to the Ethereum Protocol for smart contracts and scarce digital assets.  This includes public and private implementations of the Ethereum protocol, the Solidity smart contract language, Layer 2 sidechains, and other scaling solutions.


            </div>

        </div>





        </div>

  </div>


  </div>
</template>


<script>

import Navbar from './Navbar.vue'



export default {
  name: 'Mission',
  components: {
      Navbar
  },
  props: [],
  data() {
    return {

    }
  },
  methods: {

    setContent (contentName) {

    }
  }
}
</script>
