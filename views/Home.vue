<template>
    <div>
<UserCreate />
<UserList />
    </div>
</template>

<script>
import UserCreate from "../components/UserCreate.vue";
import UserList from "../components/UserList.vue";

export default {
    components: {
        UserCreate,
        UserList
    },
    setup () {
        

        return {}
    }
}
</script>

<style  scoped>

</style>