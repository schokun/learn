<template>
    <span>
        {{timeIs}}
   </span>
</template>

<script>
    export default {
        name: 'times',
        data() {
            return {
                time: new Date(),
                time_is: '',
                month: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                    'иля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
            }
        },
        computed: {
            timeIs() {
               let date   =  this.time.getDate() + ' ';
               let months =  this.month[this.time.getMonth()] + ' ';
               let years  =  this.time.getFullYear() + ' г.' + ' ';
               let hours  =  this.time.getHours() + ':';
               let min    =  this.time.getMinutes()+ '.';
               if( min < 9 ) {
                   min = '0' + this.time.getMinutes()+ '.';
               }
               return date + months + years + hours + min
            }
        }
    }
</script>


<style>


</style>