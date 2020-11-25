const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    setName(event){
      this.name = event.target.value;  
    },
    submitForm(event){
      
    },
    confirmName(){
      this.confirmedName = this.name;
    },
    add(num){
        this.counter += num;
    },
    reduce(num){
      this.counter -= num;
  }
  }
});

app.mount('#events');
