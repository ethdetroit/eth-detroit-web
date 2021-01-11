<template>
  <div class="about">


     <Navbar />




           <div class="flex mb-4">
             <div class="w-full bg-gray-800 ">

               <div class="m-6 p-4 bg-gray-100 pb-8 ">


                      <h3 class="text-lg font-bold mt-6 "> Upcoming Meet-ups</h3>


                      <div class="container mt-4">
                        In-person meetups are restricted until further notice by the State of Michigan.  Check back soon.
                      </div>


                      <h3 class="text-lg font-bold mt-6 "> Join us in the Discord Online Forum</h3>


                      <div class="container mt-4">
                       <a href="https://discord.gg/e32ZjTYApt" target="_blank"> Click here to join the ETH Detroit Discord Channel </a>
                      </div>

                </div>



        </div>

  </div>


  </div>
</template>


<script>

import Navbar from './Navbar.vue'



export default {
  name: 'Connect',
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
