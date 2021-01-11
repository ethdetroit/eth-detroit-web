<template>


    <nav id="header" class="w-full z-10 pin-t">

      <div class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-3 bg-gray-300 px-4">

  			<div class="pl-4">
  				<img  src="@/assets/img/ethlogo1_sm.png" alt="ETH avatar" class="rounded-full h-6 w-6 inline-block" style="vertical-align: sub;">


          <router-link class=" text-gray-800 text-base no-underline hover:no-underline font-extrabold text-xl inline-block " to="/">ETH Detroit</router-link>


        </div>


  			<div class="  flex items-center w-auto mt-2 lg:mt-0 bg-grey-lightest md:bg-transparent z-20" id="nav-content">
  				<div class="  lg:flex justify-end flex-1 items-center">


            <router-link class="  text-gray-700  hover:underline" to="/mission">Our Mission</router-link>


              <span class="mx-2 text-gray-500">|</span>

            <router-link class="text-gray-700 hover:underline" to="/connect">Connect</router-link>


             <span class="mx-2 text-gray-500">|</span>


            <router-link class="text-gray-700   hover:underline" to="/learn">Learn</router-link>




  				</div>
  			</div>
  		</div>
    	</nav>



</template>


<script>

export default {
  name: 'Navbar',
  props: [],
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
