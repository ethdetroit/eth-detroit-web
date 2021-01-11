<template>
  <div class="about">


     <Navbar />



      <div class="flex mb-4">
        <div class="w-full bg-gray-800  ">


          <div class="m-6 p-4 bg-gray-100 pb-8 ">


                 <h3 class="text-lg font-bold mt-6 "> Learn about Ethereum </h3>


                <ul class="container mt-4">
                  <li> <a href="https://etherscan.io" target="_blank">Etherscan.io</a> - Visualize the 'Ethereum Mainnet' Network  </li>

                  <li> <a href="https://Metamask.io" target="_blank">Metamask.io</a> - Chrome/Firefox Browser Plugin for Ethereum Network Interactivity </li>

                  <li> <a href="https://Ethereum.org" target="_blank">Ethereum.org</a> - Technical Developer Resources Available on Ethereum Website   </li>


                </ul>

           </div>



        </div>

  </div>


  </div>
</template>


<script>

import Navbar from './Navbar.vue'



export default {
  name: 'Learn',
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
