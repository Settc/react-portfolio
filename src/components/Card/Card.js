import "./card.css"

function Card( {img, name, github, deployed, info} ) {
    return(
<div class="ba dark-gray b--black-10 mh2">
  <img src={img} class="db br2 br--top center" alt="" />
  <div class="pa2 ph3-ns pb3-ns">
    <div class="dt mt1 flex flex-column">
      <div class="dtc">
        <h1 class=" f4-ns mv0">{name}</h1>
      </div>
      <div class="dtc ">
        <h4 class=" mv0">{github}</h4>
        <h4 class=" mv0">{deployed}</h4>
      </div>
    </div>
    <p class="f6 lh-copy measure mt2 mid-gray">
      {info}
    </p>
  </div>
</div>

    )
}

export default Card