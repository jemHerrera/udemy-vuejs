const vue = new Vue({
  el: '#exercise',
  data: {
    effect: true,
    class1: '',
    activate: '',
    myStyles: ''
  },
  methods: {
    startEffect: function() {
      let vm = this;
      setInterval(function(){
        vm.effect = !vm.effect;
      }, 1000);
    }
  },
  computed:{
    applyClass: function(){
      console.log(this.class1);
      return `${this.class1}`;
    },
    activateClass: function(){
      console.log(this.activate);
      if (this.activate == 'true') return 'white-font';
    },
    applyStyle: function(){
      return {
        backgroundColor: this.myStyles,
        width: '200px',
        height: '200px'
      }
    }
  }
});
