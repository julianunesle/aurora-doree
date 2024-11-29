<template>
    
    <div class="login-container">
       
            <input type="text" placeholder="email@exemple.com">
            <input type="password" placeholder="******">
            <input type="submit" placeholder="Entrar">
     
    </div>
</template>
<style lang="scss">
.login-container {
    @include flex-column();
    align-items: center;
    min-height:80vh;
    justify-content: center;

    
}
</style>