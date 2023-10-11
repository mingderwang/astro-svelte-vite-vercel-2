<script>
    import { Button, truncate, breakpoints } from "carbon-components-svelte";
    import { Airplane } from "carbon-pictograms-svelte";
    import { Link } from "carbon-components-svelte";
    import "carbon-components-svelte/css/all.css";
    let count = 0;
    $: doubled = count * 2;

function increment() {
    count += 1;
}
  </script>
  
  <Link href="https://www.carbondesignsystem.com/">Carbon Design System</Link>
  
  <Button on:click={increment}>{count}</Button>
  
  <Airplane />
  <p>{count} doubled is {doubled}</p>
  
  <div use:truncate>Text...</div>
  
  {JSON.stringify(breakpoints)}