<template>
  <div>
    <h1>{{simple}}</h1>
    <foo :foo="foo"/>
    <h2>{{fullName}}</h2>
    <h3 v-bind="{attr: 1}">h3</h3>
  </div>
</template>
<script>
import Foo from './foo';
export default {
  components:{
    Foo
  },
  data(){
    return{
      simple: 'simple',
      foo: 'foo',
      name: 'Foo',
      surname: 'Bar'
    };
  },
  computed: {
    fullName(){
      return `${this.name} ${this.surname}`
    }
  },
}
</script>

