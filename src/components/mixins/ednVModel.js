//Mixin de transfert bilatérale du v-model
export const ednVModel = {
    props: {
        value: null
    },
    data() {
        return {
            content: this.value
        }
    },
    watch: {
        content() {
            this.$emit("input", this.content);

        },
        value() {
            if(this.value!=this.content) this.content = this.value
            
        }
    }
};
