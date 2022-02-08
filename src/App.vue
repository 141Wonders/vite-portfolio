<script >
function toggleCollapse(elementID) {
    document.getElementById(elementID).classList.toggle("hidden");
    document.getElementById(elementID).classList.toggle("hidden");
}
</script>

<template>
      <!-- top Nav bar -->
      <nav class="text-white relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div class="container px-4 mx-auto flex flex-wrap items-end justify-between px-8 md:px-12 lg:px-16">
            <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a class="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-2xl" href="#">
                WebWorld Wonders
            </a>
            <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onclick="toggleCollapse('mobile-menu')">
                <svg width="28px" height="28px" viewBox="0 0 28 28" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="white"/><path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="white"/><path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="white"/></svg>
            </button>
            </div>
            <div class="lg:flex flex-grow items-center hidden" id="mobile-menu">
            <ul class="flex flex-col text-base lg:flex-row list-none lg:ml-auto items-center">
                <li class="nav-item  text-selected-text">
                <a class="px-3 py-4 flex items-center" href="#">
                    <span class="ml-2">Home</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="px-3 py-4 flex items-center" href="#work">
                    <span class="ml-2">My Work</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="px-3 py-4 flex items-center " href="#hire">
                    <button class="hover:scale-105 px-4 py-1 bg-theme border">Start a Project</button>
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

     <!--Hero section-->
     <div class="text-white container h-screen flex justify-between mx-auto px-8 md:px-12 lg:px-16 w-full  bg-fixed bg-center bg-cover custom-img">
         <div class="flex flex-wrap sm:flex-nowrap max-h-1">
             
             <!--Side nav-->
             <nav class="inline-block sm:mr-24 sm:w-4 fixed left-percentage hidden lg:block">
               
                 <div class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-20">
                   <button type="button" data-modal-toggle="defaultModal" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 rounded-sm px-1 pt-2 text-center"><ion-icon size="large" name="information-circle-outline"></ion-icon></button>
                     <a href="#" class="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                         <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                     </a>
                     <a href="#work" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                         <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Work</span>
                     </a>
                     <a href="#hire" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                         <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Hire</span>
                     </a>
                 </div>
             </nav>
  
             <div class="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl md:my-12 z-1">
                <h1 class="font-rokkitt text-outline font-bold text-6xl md:text-6xl lg:text-8xl text-center md:text-left ">Crafting your<br>online wonders.</h1>

                <!-- Modal toggle -->
                <button type="button" data-modal-toggle="defaultModal" class="sm:hidden text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 rounded-lg px-2 py-1 text-center mr-1 mb-1"><ion-icon size="large" name="information-circle-outline"></ion-icon><p>INFO</p></button>

                <!-- Main modal -->
                
             </div> 
                <div id="defaultModal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-screen md:h-full md:inset-0">
                    <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
                        <!-- Modal content -->
                        <div class=" relative bg-badge rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div class="flex justify-between items-start p-3 rounded-t border-b dark:border-gray-600">
                                <h3 class="text-2xl font-semibold text-white-900 lg:text-3xl dark:text-white">
                                  Innovative - Resourceful - Tenacious
                                </h3>   
                                <button type="button" class="text-white-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                </button>
                            </div>
                            <!-- Modal body -->
                            <div class="p-4 space-y-2">
                                <p class="text-xl leading-relaxed text-white-500 dark:text-gray-400">
                                    I'm Elliot Henriquez and I create interactive web presences for clients. With WebWorld Wonders, I aim to engage users with imaginative online experiences. I currently focus on responsive, creative UX design for each and every wonder. 
                                </p>
                            </div>
                            <!-- Modal footer -->
                            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <a href="/src/assets/ElliotHenriquez_WebDev_2022.pdf"><button type="button" class="text-white bg-theme hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Resume</button></a>
                                <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     </div>
     
  
     <!-- Clients -->
    <div class="text-white container mt-20 sm:mt-44 flex justify-between items-center mx-auto px-10 md:px-16 lg:px-28 w-full">
      <section class="w-full">
        <h2 id="work" class="text-left secondary-title">Projects</h2>
        <p class="section-paragraph text-left">I've had the pleasure of working for a diverse set of clients. With clear communication and dedication; we can create, design, and implement modern web projects.</p>
                
        <!-- Clients -->
        <div class="space-y-10 my-16">
                    
                    <div class="w-full border border-nav hover:border-white p-6 lg:px-24 lg:py-14 lg:space-x-24 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                        <div class="bg-theme lg:w-1/6 -m-14 flex"></div>
                        <!-- Client info -->
                        <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                            <h3 class="text-white text-3xl font-semibold font-rokkitt">Derek Henriquez:<br>Trailer & Digital Editor</h3>
                            
                            <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                <div class="badge hover:scale-105">Frontend Development</div>
                                <div class="badge hover:scale-105">UX Design</div>
                                <div class="badge hover:scale-105">Vimeo API</div>
                            </div>
                            
                            <p class="text-lg font-rokkitt">Derek Henriquez is an accomplished media entertainment editor and works in groundbreaking television series and movies. Experienced in multiple genres and various production companies, this site showcases the best of his work.</p>
                        </div>
                        <!-- Client logo -->
                        <div class="w-1/2 lg:w-full mt-6 lg:mb-0 flex flex-wrap justify-center space-x-2">
                            <img src="/src/assets/dh-logo.png" alt="dh-logo">
                            <a class="visit-badge hover:scale-105 mt-4" href="https://derekhenriquez-editor.com/">Visit Site</a>
                            <a class="code-badge border border-theme hover:scale-105 mt-4" href="https://github.com/141Wonders/vimeoalbum-portfolio">View Code</a>
                        </div>
                    </div>
  
                    <div class="w-full border border-nav hover:border-white p-6 lg:px-24 lg:py-14 lg:space-x-24 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                        <div class="bg-theme lg:w-1/6 -m-14 flex"></div>
                        <!-- Client info -->
            <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                            <h3 class="text-white text-3xl font-semibold font-rokkitt">Refrigeration Gaskets <br>of Texas, INC</h3>
            
              <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                <div class="badge hover:scale-105">UI Design</div>
                <div class="badge hover:scale-105">E-Commerce Development</div>
              </div>
                            
              <p class="text-lg font-rokkitt">RGT is a Houston based refrigeration goods manufacturer. The company specializes in custom made gaskets, doors, and refrigeration boxes. With an online store presence, the company is now ahead of their competitors across state lines.</p>
            </div>
                        <!-- Client logo -->
                        <div class="w-1/2 lg:w-full mt-6 lg:mb-0 flex flex-wrap justify-center">
                            <img src="/src/assets/rgt-logo.png" alt="rgt-logo">
                            <a class="visit-badge hover:scale-105 mt-4" href="https://refrigerationgaskets.com/">Visit Site</a>
                        </div>
          </div>
  
                    <div class="w-full border border-nav hover:border-white p-6 lg:px-24 lg:py-14 lg:space-x-24 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                        <div class="bg-theme lg:w-1/6 -m-14 flex"></div>
                        <!-- Client info -->
                        <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                            <h3 class="text-white text-3xl font-semibold font-rokkitt">**Under Construction</h3>
                            
                            <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                <div class="badge hover:scale-105">Popular Javascript Frameworks</div>
                                <div class="badge hover:scale-105">Innovative CSS Trends</div>
                                <div class="badge hover:scale-105">Database Implementation</div>
                                <div class="badge hover:scale-105">Graphics Editing</div>
                            </div>
                            
                            <p class="text-lg font-rokkitt">Currently creating new online wonders for clients. WebWorld Wonders will provide a multitude of web services and support to turn your idea in to a web wonder. If you'd like to see your art/business/endeavor online, let's start a project today!</p>
                        </div>
                        <!-- Client logo -->
                        <div class="w-1/2 lg:w-full mt-6 lg:mb-0">
                            <img src="/src/assets/hammer.png" alt="hammer-logo">
                        </div>
                    </div>
  
        </div>
      </section>
    </div>
  
        <!-- Hire me -->
    <div class="text-white container mt-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <section class="w-full text-left">
        <h2 id="hire" class=" secondary-title">Hire Me</h2>
        <p class="section-paragraph">Feel free to to contact me any time, through any method below.</p>
  
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-32 mt-12 mb-12">
          <div class="space-y-12">
            <form method="POST" action="https://formsubmit.co/92cb9ddf59f1e62ddc366d8322abea72">
            <div>
              <label class="text-white block mb-6 text-xl font-bold">Name</label>
              <input type="text" name="name" class="w-full border border-input-border bg-input px-4 py-4">
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold">Email</label>
              <input type="email" name="email" class="w-full border border-input-border bg-input px-4 py-4">
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold">Message</label>
              <textarea name="message" class="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
            </div>
            <button class="hover:scale-105 mt-6 px-6 py-2 bg-theme text-white font-bold">Send it!</button>
            </form>
          </div>
  
          <div class=" mt-12">
            <!-- Contact info -->
             <h3 class="secondary-title">Reach Out</h3>
             <br>
             <p class="text-lg">281-781-3432</p>
             <p class="text-lg">Houston, TX</p>
             <a href="mailto:elliothenriq@gmail.com" class="text-lg underline mt-3 block">elliothenriq@gmail.com</a>
  
            <!-- Socials -->
            <div class="relative flex mt-20 space-x-6">
              <!-- LinkedIn -->
              <a href="https://www.linkedin.com/in/elliothenriq/" class="">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <!-- GitHub -->
              <a href="https://github.com/141Wonders">
                <ion-icon  name="logo-github"></ion-icon>
              </a>
            </div>
          </div>
          
        </div>
  
      </section>
    </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
ion-icon {
  font-size: 64px;
}
</style>
