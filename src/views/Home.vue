<template>
<div>


	<Navbar />


  <div class="flex mb-4">

    <div class="w-full bg-gray-800  relative"  >

			<carousel :per-page="1" :autoplay="true" :autoplayTimeout="15000" :speed="500" :navigationEnabled="false" :paginationEnabled="false" :loop="true">

				<slide style='height:600px'>
							<img src="@/assets/img/detroit3.jpeg"  style="position: absolute;top: 0;object-fit: cover;"  class="w-full"  height="600" />
				</slide>


				<slide style='height:600px'>
							<img src="@/assets/img/detroit2.jpeg"  style="position: absolute;bottom: 0;object-fit: cover;"  class="w-full"  height="600" />
				</slide>

				<slide style='height:600px;'>

						<img src="@/assets/img/detroit1.jpeg"  style="position: absolute;top: 0;object-fit: cover;" class="w-full" height="600" />

				</slide>
				</carousel>



				<div class="absolute " style="top:0">

					<div class="m-4 p-4 text-white inline-block  " style="background: #3339">
							The Ethereum Network is the future of the internet.
					</div>

					<br>

					<div class="m-4 p-4 text-white inline-block " style="background: #3339">
							Join us on our journey to better understand it, to deploy software on Ethereum, and to improve our community.
					</div>


				</div>

    </div>
  </div>




</div>
</template>


<script>

import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import { Carousel, Slide } from 'vue-carousel';

import Navbar from './Navbar.vue'



export default {
  name: 'Home',
  components: {
			Navbar, Carousel, Slide
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
