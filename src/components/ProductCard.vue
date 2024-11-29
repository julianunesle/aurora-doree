<template>
    <RouterLink to="/produto/1">
    <div class="card">
        <div class="img-wrap">

            <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg">
        </div>
        <span class="info">
            <h2>
                Titulo
            </h2>
            <!-- <p>Ännu en berömd och utsökt kall dryck för dem som föredrar choklad. Tänk dig smaken av en shake med
                choklad och vispad grädde på toppen.</p> -->
            <span> R$2.89 <button>+</button></span>
        </span>
    </div>
</RouterLink>
</template>
<script>
import { RouterLink } from 'vue-router';
</script>
<style lang="scss">
.card {
    margin: 10px;
    width: 250px;
    height: 350px;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: .5s;

    &:hover {
        box-shadow: 8px 8px 16px $palebrown;
    }

    .img-wrap {
        width: 100%;
        height: 250px;
        overflow: hidden;

        img {
            width: 100%;
            height: 250px;
        }
    }

    .info {
        padding-inline: 8px;
        display: inline-block;

        h2 {
            text-align: center;
        }

        p {
            text-align: justify;
        }
    }


}
</style>