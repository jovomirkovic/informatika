<template>
  <div>
    <label v-if="allFiles.length > 0">{{ allFiles[0].name }}</label>
    <br />
    <input
      type="file"
      @change="onChange"
      :multiple="multiple"
      name="file"
      id="file"
      class="inputfile"
    />
    <label
      for="file"
      style="
        text-transform: uppercase;
        font-size: 10pt;
        color: white;
        border-radius: 8px;
        box-shadow: 3px 0px 0px;
      "
      :style="{
        backgroundColor: genderLocal,
        boxShadow: [
          '0px 3px 0px 0px ' +
            shadowColor +
            ', 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)',
        ],
      }"
      class="myShadow"
      >{{ label }}</label
    >
  </div>
</template>

<script>
/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
 * Licensed Under MIT (http://opensource.org/licenses/MIT)
 *
 * Vue File Base64 @ Version 1.0.0
 *
 * refs: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
 */
export default {
  props: ["multiple", "label", "gender"],
  data() {
    return {
      genderLocal: "",
      shadowColor: "",
      allFiles: [],
    };
  },
  mounted() {
    this.genderLocal =
      this.gender == "male"
        ? "#759eff"
        : this.gender == "female"
        ? "#de60ba"
        : "#e1e1e1";
    this.shadowColor =
      this.gender == "male"
        ? "#5d7ecc"
        : this.gender == "female"
        ? "#ab498f"
        : "#c1c1c1";
    console.log("onMounted");
    console.log(this.gender);
    console.log(this.label);
    if (this.label == undefined || this.label == "")
      this.label = "Choose a file";
  },
  methods: {
    reset() {
      document.getElementById("file").value = null;
    },
    onChange(e) {
      debugger;

      let files = e.target.files;
      // if(files[0].size/1000 > 900){
      //   this.$q.notify({
      //       message: "Fajl ne sme biti veci od 900kb!",
      //       color: "red"
      //     });
      //     return;
      // }
      // Prvo proveri da li je slika
      if (!files[0].type.startsWith("image/")) {
        this.$q.notify({
          message: "Fajl mora biti slika!",
          color: "red",
        });
        return;
      }
      // Process each file
      this.allFiles = [];
      for (var i = 0; i < files.length; i++) {
        let file = files[i];
        // Make new FileReader
        let reader = new FileReader();
        // Convert the file to base64 text
        reader.readAsDataURL(file);
        // on reader load somthing...
        reader.onload = () => {
          // Make a fileInfo Object

          let fileInfo = {
            name: file.name,
            type: file.type,
            size: Math.round(file.size / 1000) + " kB",
            base64: reader.result,
            file: file,
          };
          // Push it to the state
          this.allFiles.push(fileInfo);
          // If all files have been proceed
          if (this.allFiles.length == files.length) {
            // Apply Callback function
            console.log(this.allFiles);
            console.log(this.multiple);
            if (this.multiple) this.$emit("done", this.allFiles);
            else this.$emit("done", this.allFiles[0]);
          }
        }; // reader.onload
      } // for
    }, // onChange()
  },
};
</script>
<style scoped>
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputfile + label {
  font-size: 1.25em;
  font-weight: 700;
  padding: 10px 15px;
  color: white;
  background-color: black;
  display: inline-block;
  border-radius: 3px;
}

.inputfile:focus + label,
.inputfile + label:hover {
  background-color: red;
}
</style>
