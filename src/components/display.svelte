<script lang="ts">
  export let valeu: string = "0";
  export let accumulator: string = "";

  $: sizeFont = valeu.length > 20 ? "small" : `s-${valeu.length}`;
</script>

<div class="display">
  <div class="small">{accumulator}</div>
  <div class={`result ${sizeFont}`}>
    {valeu}
  </div>
</div>

<style>
  .display {
    background-color: aliceblue;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    align-items: flex-end;
    justify-content: space-between;
    padding: 5px 5px 0 5px;
    border-radius: 2px;

    font-size: 1.7rem;
    font-family: sans-serif;
    margin: 2px 1px;
  }

  .s-10 {
    font-size: 1.5rem;
  }
  .s-11 {
    font-size: 1.35rem;
  }
  .s-12 {
    font-size: 1.15rem;
  }
  .s-13 {
    font-size: 1.1rem;
  }

  .s-14 {
    font-size: 1.05rem;
  }

  .s-15 {
    font-size: 1rem;
  }

  .s-16 {
    font-size: 1rem;
  }
  .s-17 {
    font-size: 0.85rem;
  }

  .s-18 {
    font-size: 0.8rem;
  }

  .s-19 {
    font-size: 0.75rem;
  }
  .s-20 {
    font-size: 0.6rem;
  }

  .small {
    font-size: 0.5rem;
  }
</style>
