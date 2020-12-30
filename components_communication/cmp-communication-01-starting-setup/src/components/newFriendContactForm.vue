<template>
    <form @submit.prevent="addContact">
        <div>
            <label for="name">Name:</label>
            <input v-model="name" type="text" name="name">
        </div>
        <div>
            <label for="phone">Phone:</label>
            <input v-model="phone" type="text" name="phone">
        </div>
        <div>
            <label for="email">Email:</label>
            <input v-model="email" type="text" name="email">
        </div>
        <div> 
            <button>Add</button>
        </div>
    </form>
</template>

<script>
export default {
    emit: { 
        'add-contact': function(name, phone, email){
            if(name && phone && email){
                return true;
            }else{
                console.warn('Some parameter is missing'); 
                return false;
            }
        } 
    },
    data() {
        return{
            name: '',
            phone: '',
            email: '',
        };
    },
    methods: {
        addContact(){
            this.$emit('add-contact', this.name, this.phone, this.email);
        }
    },
}
</script>
