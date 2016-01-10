<active-link>

  <a href="#" if={opts.active} onclick={opts.clicked}>
    <yield/>
  </a>

  <span if={!opts.active}>
    <yield/>
  </span>

</active-link>
