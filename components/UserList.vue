<template>
    <div>
<div class="md:px-32 py-8 w-full">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-indigo-600 text-white">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
        </tr>
      </thead>
    <tbody class="text-gray-700 bg-white">
      <tr
      v-for="{id, name, email } in users" :key="id"
       class="bg-white">
        <td class="w-1/3 text-left py-3 px-4">
        {{name}}
        </td>
        <td class="w-1/3 text-left py-3 px-4">
        {{email}}
        </td>
        <td class="w-1/3 text-left py-3 px-4">
        <router-link :to="`/edit/${id}`">
        <button class="bg-gray-200"
         :title="'Edit '+name"
        >
          <mdi:pencil/>
        </button>
        </router-link>
         <button class="bg-gray-200 ml-3" 
         :title="'Delete '+name"
          @click="deleteUser(id)">
          <mdi:trash-can/>
        </button>
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</div>
    </div>
</template>

<script>
import {useLoadUsers, deleteUser } from "../firebase.js";

export default {
    setup () {
        const users = useLoadUsers()
        return {
            users,
            deleteUser
        }
    }
}
</script>

<style scoped>

</style>