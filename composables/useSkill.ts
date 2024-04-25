import slide1 from "~/assets/images/slides/slide1.jpg";
import slide2 from "~/assets/images/slides/slide2.jpg";
import slide3 from "~/assets/images/slides/slide3.jpg";
import slide4 from "~/assets/images/slides/slide4.jpg";
export default function useSkill() {
  const skills = [
    {
      name: "Web Development",
      program: ["Node js", "Vue Js", "Nuxt Js"],
      bg: "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png",
    },
    {
      name: "Mobile Development",
      program: ["Node js", "Vue Js", "Nuxt Js"],
      bg: "https://www.ideamotive.co/hubfs/app%20development%20cost.png",
    },

    {
      name: "Design UI/UX",
      program: ["Node js", "Vue Js", "Nuxt Js"],
      bg: "https://img.freepik.com/free-vector/gradient-style-ui-ux-background_52683-69621.jpg",
    },
    {
      name: "Automated ",
      program: ["Node js", "Vue Js", "Nuxt Js"],
      bg: "https://img.freepik.com/free-vector/gradient-style-ui-ux-background_52683-69621.jpg",
    },
  ];

  const currentIndex = ref(0);
  const Images = [
    {
      src: slide1,
      alt: "Image 1",
    },
    {
      src: slide2,
      alt: "Image 2",
    },
    {
      src: slide3,
      alt: "Image 3",
    },
    {
      src: slide4,
      alt: "Image 4",
    },
  ];

  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % Images.length;
    console.log(currentIndex.value);
  };

  const prevSlide = () => {
    currentIndex.value =
      (currentIndex.value - 1 + Images.length) % Images.length;
  };

  const selectedIndex = (index: number) => {
    currentIndex.value = index;
  };

  onMounted(() => {
    setInterval(() => {
      nextSlide();
    }, 5000);
  });

  return {
    skills,
    currentIndex,
    Images,
    nextSlide,
    prevSlide,
    selectedIndex,
  };
}
