<template>
  <div class="calculator">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_1_1195)">
        <path
          d="M24 24H0V3.5C0 2.57174 0.368749 1.6815 1.02513 1.02513C1.6815 0.368749 2.57174 0 3.5 0L20.5 0C21.4283 0 22.3185 0.368749 22.9749 1.02513C23.6313 1.6815 24 2.57174 24 3.5V24ZM3 21H21V3.5C21 3.36739 20.9473 3.24021 20.8536 3.14645C20.7598 3.05268 20.6326 3 20.5 3H3.5C3.36739 3 3.24021 3.05268 3.14645 3.14645C3.05268 3.24021 3 3.36739 3 3.5V21ZM19 5H5V9H19V5ZM8 11H5V14H8V11ZM8 16H5V19H8V16ZM13 11H10V14H13V11ZM19 11H15V14H19V11ZM13 16H10V19H13V16ZM19 16H15V19H19V16Z"
          fill="#EEE5FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1195">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "CalculatorIcon",
};
</script>

<style>
.calculator {
  width: 4.0625rem;
  height: 4.0625rem;
  border-radius: 0.625rem;
  background: var(--purplePrimary);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
