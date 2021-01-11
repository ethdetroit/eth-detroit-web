<template>
<div>


	<Navbar />


  <div class="flex mb-4">

    <div class="w-full bg-gray-800  ">
      <div class="m-6 p-4 bg-gray-100">




				<h3 class="text-lg font-bold">Your Assets</h3>


				<div class="container mt-8">


				</div>

	  </div>
    </div>
  </div>




</div>
</template>


<script>


const Web3 = require('web3');
import Navbar from './Navbar.vue'



export default {
  name: 'Home',
  components: {
			Navbar
  },
  data () {
    return {

    }
  },
  created () {



  },
  methods: {




  }

}
</script>
