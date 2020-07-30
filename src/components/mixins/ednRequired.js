//Mixin de simplification de spécification de messages pour les champs obligatoires.
export const ednRequired = {
  data() {
    return {
      rules: this.$attrs.required ? this.isRequired() : [],
    };
  },
  methods: {
    isRequired() {
      if (typeof this.$attrs.required === "string")
        return [(value) => !!value || this.$attrs.required];
      else if (this.$attrs.required === true || this.$attrs.required == "")
        return [(value) => !!value || "Merci de remplir ce champ"];
    },
  },
};
