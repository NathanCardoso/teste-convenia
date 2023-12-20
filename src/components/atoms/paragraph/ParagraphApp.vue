<template>
  <div class="paragraph">
    <p :class="paragraphColor(color, bold)">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "ParagraphApp",
  props: {
    message: {
      type: [String, Number],
    },
    color: {
      type: String,
      default: "gray",
      validator: (value) => {
        return [
          "gray",
          "purple-primary",
          "purple-third",
          "white-primary",
          "red-primary",
        ].includes(value);
      },
    },
    bold: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    paragraphColor(colorProp, boldProp) {
      const colorClass = "paragraph__item--" + colorProp;
      const boldClass = "paragraph__item--bold";

      return boldProp ? `${colorClass} ${boldClass}` : colorClass;
    },
  },
};
</script>

<style scoped>
.paragraph {
  font-size: 1rem;
  font-weight: 500;
}
.paragraph .paragraph__item--gray {
  color: var(--graySecondary);
}
.paragraph .paragraph__item--purple-primary {
  color: var(--purplePrimary);
}
.paragraph .paragraph__item--purple-third {
  color: var(--purpleThird);
}
.paragraph .paragraph__item--white-primary {
  color: var(--whitePrimary);
}
.paragraph .paragraph__item--red-primary {
  color: var(--redPrimary);
}
.paragraph .paragraph__item--bold {
  font-weight: 700;
}
</style>
