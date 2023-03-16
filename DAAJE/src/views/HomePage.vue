<script setup>
import HomeCard from "../components/HomeCard.vue";
import UserAvatar from "../components/UserAvatar.vue";
</script>

<template>
  <div class="row wrapper">
    <div class="col pt-medium">
      <UserAvatar
        :img="imgPath"
        :userGreeting="userGreeting"
        :userDesc="userDesc"
      />
      <div class="hero-text">
        <h1>Welcome to your favorite Quiz App</h1>
        <h4>Increase your students performance!</h4>
      </div>
      <main class="main-content">
        <div class="card-wrapper">
          <HomeCard
            v-for="(option, index) in options"
            :key="index"
            :option="option"
          />
        </div>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    UserAvatar,
    HomeCard,
  },
  data() {
    return {
      options: [
        {
          cardTitle: "Create questions",
          cardDescription: "Create tailored questions for a course",
          cardButton: "Action",
          path: "/create-quiz",
        },
        {
          cardTitle: "Previous Quiz",
          cardDescription: "Use a previous created Quiz",
          cardButton: "Action",
          path: "/quiz",
        },
        {
          cardTitle: "Review prior results",
          cardDescription: "Review students previous results",
          cardButton: "Action",
          path: "/quiz",
        },
      ],
      userInfo: {
        imgPath: "",
        userGreeting: "Hello, Richard",
        userDesc: "JavaScript Educator",
      },
    };
  },
};
</script>

<style scoped>
/* .wrapper {
 height: 100vh;
} */

.pt-medium {
  padding-top: 20px;
}

.hero-text {
  padding: 3rem 0.3rem;
  color: #d9d7d7;
}

.main-content {
  min-height: 100vh;
  margin: 0 -20px;
  padding: 120px 20px 0 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(9px);
  backdrop-filter: blur(9px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
