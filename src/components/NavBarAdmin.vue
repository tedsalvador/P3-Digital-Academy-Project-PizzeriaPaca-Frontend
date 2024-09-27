<script setup></script>
<template>
  <ul>
    <RouterLink to="/admindashboard" class="RouterLink"><li>STOCK</li></RouterLink>
    <RouterLink to="/ordermanagement" class="RouterLink"><li>FACTURAS</li></RouterLink>

  </ul>
</template>
<style scoped>
.RouterLink {
  text-decoration: none;
}
ul {
  display: flex;
  width: 100%;
  height: 110px;
  margin: auto;
  max-width: 1000px;
  justify-content: space-between;
  text-align: center;
  list-style-type: none;
}
li {
  padding: 1rem 2rem 1.15rem;
  text-transform: uppercase;
  cursor: pointer;
  color: #ebebeb;
  min-width: 80px;
  margin: auto;
  font-size: 35px;
}

li:hover,
.router-link-active li {
  background-image: url("../assets/img/navbar/navbackground.png");
  background-size: 100% 100%;
  color: #1b150f;
  animation: spring 300ms ease-out;
  font-weight: bold;
}
li:active {
  transform: translateY(4px);
}

@keyframes spring {
  15% {
    -webkit-transform-origin: center center;
    -webkit-transform: scale(1.2, 1.1);
  }
  40% {
    -webkit-transform-origin: center center;
    -webkit-transform: scale(0.95, 0.95);
  }
  75% {
    -webkit-transform-origin: center center;
    -webkit-transform: scale(1.05, 1);
  }
  100% {
    -webkit-transform-origin: center center;
    -webkit-transform: scale(1, 1);
  }
}

.shameless-plug {
  position: absolute;
  bottom: 10px;
  right: 0;
  padding: 8px 20px;
  color: #ccc;
  text-decoration: none;
}
@media (min-width: 481px) and (max-width: 1024px) {
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
    width: 100%;
  }
  li {
    font-size: 35px;
    padding: 10px 15px;
    min-width: auto;
    margin: 5px;

    text-align: center;
  }
}
@media (max-width: 480px) {
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
    width: 100%;
  }
  li {
    font-size: 15px;
    padding: 10px 15px;
    min-width: auto;
    margin: 5px;

    text-align: center;
  }
}
</style>
