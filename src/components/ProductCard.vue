<template>
    <RouterLink :to="`/produto/${idItem}`">
        <div class="card">
            <div class="img-wrap">
                <img :src="img">
            </div>
            <span class="info">
                <h2>
                    {{ title ? title : 'Titulo Fixed' }}
                </h2>
                <span> R$2.89 <button>+</button></span>
            </span>
        </div>
    </RouterLink>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    props: {
        title: String,
        img: String,
        idItem: Number
    }
}
</script>
<style lang="scss">
a{
    width: min-content;
}
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