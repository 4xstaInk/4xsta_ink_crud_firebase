<template>
    <div>
    <div
      class="
        w-6/12
        mt-5
        py-5
        mx-auto
        flex flex-col
        justify-center
        sm:py-5
        shadow-lg
      "
    >
      <div class="relative py-3 w-11/12 max-w-xl sm:mx-auto">
        <div class="relative p-8 bg-white shadow-sm sm:rounded-xl">
          <form class="w-full" @submit.prevent="update">
            <div class="mb-5 relative">
              <input
              v-model="form.name"
                type="text"
                id="text"
                class="
                  peer
                  pt-8
                  border border-gray-200
                  focus:outline-none
                  rounded-md
                  focus:border-gray-500
                  focus:shadow-sm
                  w-full
                  p-3
                  h-16
                  placeholder-transparent
                "
                placeholder="John Doe"
                autocomplete="off"
              />
              <label
                for="name"
                class="
                  peer-placeholder-shown:opacity-100
                  opacity-75
                  peer-focus:opacity-75 peer-placeholder-shown:scale-100
                  scale-75
                  peer-focus:scale-75 peer-placeholder-shown:translate-y-0
                  -translate-y-3
                  peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0
                  translate-x-1
                  peer-focus:translate-x-1
                  absolute
                  top-0
                  left-0
                  px-3
                  py-5
                  h-full
                  pointer-events-none
                  transform
                  origin-left
                  transition-all
                  duration-100
                  ease-in-out
                "
                >Full name</label
              >
            </div>
            <div class="mb-5 relative">
              <input
              v-model="form.email"
                type="email"
                id="email"
                class="
                  peer
                  pt-8
                  border border-gray-200
                  focus:outline-none
                  rounded-md
                  focus:border-gray-500
                  focus:shadow-sm
                  w-full
                  p-3
                  h-16
                  placeholder-transparent
                "
                placeholder="person@email.com"
                autocomplete="off"
              />
              <label
                for="password"
                class="
                  peer-placeholder-shown:opacity-100
                  opacity-75
                  peer-focus:opacity-75 peer-placeholder-shown:scale-100
                  scale-75
                  peer-focus:scale-75 peer-placeholder-shown:translate-y-0
                  -translate-y-3
                  peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0
                  translate-x-1
                  peer-focus:translate-x-1
                  absolute
                  top-0
                  left-0
                  px-3
                  py-5
                  h-full
                  pointer-events-none
                  transform
                  origin-left
                  transition-all
                  duration-100
                  ease-in-out
                "
                >Email address</label
              >
            </div>
            <button
              type="submit"
              class="w-full bg-indigo-600 text-white p-3 rounded-md"
            >
            Update user
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getUser, updateUser } from "../firebase.js";
export default {
    setup () {
        const router = useRouter()
        const route = useRoute()
        const userId = computed(() => route.params.id)

        const form = reactive({
            name: '',
            email:''
        })

        onMounted(async () => {
            const user = await getUser(userId.value)
            form.name = user.name
            form.email = user.email
        })
        
        const update = async () => {
            await updateUser(userId.value, { ...form})
            router.push('/')
            form.name = ""
            form.email = ""
        }
        

        return {
            form,
            update
        }
    }
}
</script>

<style scoped>

</style>