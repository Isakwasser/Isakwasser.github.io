<template>
    <div class="post mb-5">
        <div class="card w-100">
            <div class="card-body">
                <h5 class="card-title">{{post.id}}. {{post.title}}</h5>
                <p class="card-text">{{post.body}}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Author: {{ Author }}</li>
            </ul>
            <div class="card-body">
                <button class="card-link" @click="showComments = !showComments">{{showComments? 'Скрыть':
                    'Показать'}}
                    комментарии</button>
            </div>
            <ul class="list-group list-group-flush" v-if="showComments">
                <li class="list-group-item " v-for="(el,i) in comments[post.id]" :key="i">
                    <div class="row">
                        <div class="col-md-2">
                            <b>{{el.email}}:</b>
                        </div>
                        <div class="col-md-10">
                            <div>
                                <b>{{el.name}}</b>
                            </div>
                            <div>
                                {{el.body}}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showComments: false,
        }
    },
    props: ['post', 'users', 'comments'],
    computed: {
        Author() {
            if (!this.users[this.post.userId]) {
                return 'Not identified'
            }
            return this.users[this.post.userId].name + ', ' + this.users[this.post.userId].email
        }
    },
}
</script>