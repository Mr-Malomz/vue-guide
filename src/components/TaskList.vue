<script lang="ts">
import { type Task } from "../keelClient";
import { defineComponent, type PropType } from "vue"

export default defineComponent({
    props: {
        tasks: {
            type: Array as PropType<Task[]>,
            default: () => [],
        },
    },

    setup(props) {
        return { props };
    }
})
</script>

<template>
    <ul>
        <li v-for="task in props.tasks" :key="task.id">
            <div>
                <div>
                    <p>{{ task.description }}</p>
                    <div>
                        <button>
                            <p>Edit</p>
                        </button>
                        <button>
                            <p>Delete</p>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>
