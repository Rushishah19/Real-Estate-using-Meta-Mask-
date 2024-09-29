import React from "react";

const AboutUs = () => {
 return(
    <section class="bg-white dark:bg-rich-black">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-[1.75px] font-poppins font-semibold text-gray-900 dark:text-white">Rushi Shah </h2>
            <p  class="mb-4 text-2x1 tracking-[1.5px]">- Founder and Web Developer </p>
            <p class="mb-4 tracking-wide" >Welcome to <b>Ghar Dekho</b> , where your dreams of finding the perfect property become a reality. We are a premier real estate company dedicated to providing exceptional service, expert guidance, and unparalleled market insight. Whether you are looking to sell,we are here to make your real estate journey seamless and successful.</p>
           
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="src/assets/images/profile.png" alt="profile_1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="src/assets/images/profile_2.jpg" alt="profile_2"/>
        </div>
    </div>
</section>
 )
    
}

export default AboutUs;