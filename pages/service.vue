<template>
  <!-- Banner and some description -->
  <div class="body">
    <section class="section1">
      <div class="w-full grid justify-center text-center">
        <div>
          <p>Hello! I'm</p>
          <div class="myName">Senghong-Hang</div>
        </div>
        <div class="flex juctify-center gap-4 items-center">
          <span>My Favorite</span>
          <div>
            <img
              src="~/assets/images/person01.png"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
          <span>Programming</span>
        </div>
      </div>
    </section>
    <section class="top-section">
      <div class="about">
        <div class="h1">About Me</div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          magnam culpa nisi eveniet autem explicabo debitis eius laudantium quae
          assumenda impedit, quia vitae, labore fugit ut earum tempore facilis
          voluptate necessitatibus odio. Placeat iusto et velit corrupti
          voluptatum in laborum facere porro tempora quibusdam! Eaque, ipsum!
          Excepturi beatae tempora nostrum, veritatis expedita animi possimus
          placeat ab adipisci unde libero voluptas natus ducimus, eveniet ad
          repellendus aut blanditiis recusandae molestias iste nobis iure! Non
          magnam cumque quis neque ut nisi deleniti nam excepturi veniam dolorem
          eligendi quae consequatur dolor, velit molestias minus, modi ad rem
          beatae exercitationem itaque odio porro natus. Recusandae
          exercitationem quam a est numquam dolores debitis dolor asperiores!
          Eligendi, sed repellendus voluptas sapiente non accusamus perferendis
          excepturi saepe sunt dolore ad aperiam incidunt maxime tempore culpa
          ducimus quis quos eius, sint voluptatibus. Excepturi error est nulla,
          culpa quam magnam voluptas tenetur iste enim explicabo repellendus a
          modi provident sapiente ad illum optio sit amet inventore nesciunt
          eum, officiis accusantium voluptates earum. Veritatis ducimus
          accusantium dicta, fugit sequi consectetur iure adipisci officiis.
          Cumque repudiandae vitae possimus, quam reiciendis eos deserunt
          deleniti animi corporis, facere, aperiam voluptatum. Veniam impedit
          reprehenderit similique fugiat placeat est, veritatis, velit, repellat
          laboriosam aut autem.
        </p>
      </div>
    </section>
  </div>
</template>
<script></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap");
.body {
  font-family: "Noto Serif", serif;
}
p {
  font-size: 20px;
  font-weight: 500;
}
.myName {
  font-size: 60px;
  font-weight: 700;
  text-shadow: 2px 2px 0 #015d17;
  animation: transformation 5s ease-in-out infinite;
  z-index: 1;
}
span {
  font-size: 14px;
}
.h1 {
  font-size: 30px;
  font-weight: 500;
}
.about > .h1 {
  text-align: center;
}
.about > p {
  text-align: justify;
}
@keyframes transformation {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-10%);
    color: #015d17;
  }
  40% {
    transform: translateX(10%);
    color: #4900dc;
  }
  60% {
    transform: translateX(-10%);
    color: #e0f404;
  }
  80% {
    transform: translateX(10%);
    color: #f506bd;
  }
  100% {
    transform: translateX(0%);
  }
}
.section1 {
  background-image: linear-gradient(90deg, #ffff, #7c9486, #ffff);
  margin-bottom: -80px;
  padding: 4rem;
}
.top-section {
  position: relative;
  padding: 5rem;
  z-index: 2;
}
.top-section::after {
  content: "";
  position: absolute;
  background-image: linear-gradient(45deg, #cdcdcd, #98b083, #16cff4);
  inset: 0;
  z-index: -1;
  transform: skewY(-5deg);
}

@media (max-width: 700px) {
  .myName {
    font-size: 20px;
  }
  p {
    font-size: 12px;
  }
  .section1 {
    padding: 1rem;
    margin-bottom: -25px;
  }
  .top-section {
    padding: 1rem;
  }
}
</style>
