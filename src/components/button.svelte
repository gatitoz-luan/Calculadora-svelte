<script lang="ts">
  export let text: string;
  export let triple: boolean = false;
  export let double: boolean = false;
  export let operation: boolean = false;
  export let featured: boolean = false;
  export let onClick: (valor: string) => void = () => {};
</script>

<button
  class="btn"
  class:triple
  class:double
  class:operation
  class:featured
  on:click={() => onClick(text)}
>
  {text}
</button>

<style>
  .btn {
    margin: 0;
    border: 1px solid var(--backgroundColor);
    flex-basis: 25%;
  }

  .double {
    flex-basis: 50%;
  }

  .triple {
    flex-basis: 75%;
  }

  .operation {
    background-color: orange;
    color: white;
  }

  .featured {
    background-color: orangered;
    color: white;
  }
</style>
