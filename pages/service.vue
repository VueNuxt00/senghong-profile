<template>
  <!-- Banner and some description -->
  <div class="body">
    <section class="section1">
      <div class="w-full grid justify-center text-center">
        <div>
          <p>Hello! I'm</p>
          <div class="myName">Senghong-Hang</div>
        </div>
        <div class="text-center">
          <img
            src="~/assets/images/person01.png"
            class="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="top-section">
      <div>
        <div>Hell</div>
      </div>
    </section>
  </div>
</template>
<script></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap");
p,
.myName {
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
</style>
