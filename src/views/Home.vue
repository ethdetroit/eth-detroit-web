<template>
<div>

<nav id="header" class="w-full z-10 pin-t">

	<!--

	<div id="progress" class="h-1 z-20  " style="background: linear-gradient(to right, rgb(0, 0, 0), #edfffdd1);"></div>
-->

		<div class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-3 bg-gray-300 px-4">

			<div class="pl-4">
				<img  src="@/assets/img/ethlogo1_sm.png" alt="ETH avatar" class="rounded-full h-6 w-6 inline-block" style="vertical-align: sub;">


				<a class="text-gray-800 text-base no-underline hover:no-underline font-extrabold text-xl inline-block"  href="#">

						ETH Detroit

				</a>
      </div>


			<div class="  flex items-center w-auto mt-2 lg:mt-0 bg-grey-lightest md:bg-transparent z-20" id="nav-content">
				<div class="  lg:flex justify-end flex-1 items-center">

				</div>
			</div>
		</div>
	</nav>



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



export default {
  name: 'Home',
  components: {

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
