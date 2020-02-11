//Mixin de simplification de spécification de messages pour les champs obligatoires.

export const ednRequired = {

  data() {
    return {
      rules: this.isRequired()

    }
  },
  methods: {
    isRequired() {
      if (typeof this.$attrs.required === "string")
        return [value => !!value || this.$attrs.required];
      else if (this.$attrs.required === true)
        return [value => !!value || "Merci de remplir ce champs."];
    }
  }
};
