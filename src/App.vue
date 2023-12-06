<script lang="ts">
import { defineComponent } from "vue"
import { type Task } from "./keelClient";
import { createClient } from "./utils/createClient";
import CreateTaskForm from "./components/CreateTaskForm.vue";
import TaskList from "./components/TaskList.vue";

export default defineComponent({
  components: { CreateTaskForm, TaskList },

  data() {
    return {
      tasks: [] as Task[],
      errorMsg: ""
    };
  },
  methods: {
    async fetchData() {
      const client = createClient();
      const response = await client.api.queries.listTask();
      if (response.data) {
        this.tasks = response.data.results;
      }
      else {
        this.errorMsg = response.error.message;
      }
    },
    handleTaskCreated(createdTask: Task) {
      this.tasks.unshift(createdTask);
    }
  },
  mounted() {
    this.fetchData();
  },

})

</script>

<template>
  <main>
    <div>
      <div>
        <CreateTaskForm @task-created="handleTaskCreated" />
        <section>
          <p v-if="errorMsg !== ''">{{ errorMsg }}</p>
          <p v-else-if="tasks.length === 0">No tasks yet!</p>
          <TaskList v-else :tasks="tasks" />
        </section>
      </div>
    </div>
  </main>
</template>