<template>
    <footer>
        <p>Copyright &copy; 2024</p>
        <router-link to="/about">About</router-link>
    </footer>
</template>
    
<style scoped>
    a {
        color: #333
    }

    footer {
        margin-top: 30px;
        text-align: center;
    }
</style>
    
    <script>
        export default {
            name: 'FooterComponent',
            props: {
                text: String,
                color: String
            },
            methods: {
                onClick(){
                    this.$emit('btn-click')
                }
            }
        }  
    </script>