new Vue ({
    el: '#app',
    data:{
        playerHp: 100,
        monsterHp: 100,
        logs: [],
    },
   computed:{
        updatePlayerHp(){
            return{width: this.playerHp + "%"}
        },
        updateMonsterHp(){
            return {width: this.monsterHp + "%"}
        },
    },
    methods:{
        randomDmg(){
            return 5+Math.floor(Math.random()*5);
        },
        randomHeal(){
            return 3+Math.floor(Math.random()*9);
        },
        resetGame: function(){
            this.playerHp = 100;
            this.monsterHp = 100;
            this.logs = [];
        },
        playerAtk: function(){
            let playerDmg = this.randomDmg();
            console.log(playerDmg);
            this.monsterHp -= playerDmg;
            this.logs.unshift(`Player damages monster by ${playerDmg} points`);
            this.monsterAtk();
        },
        monsterAtk: function(){
            let monsterDmg = this.randomDmg();
            this.playerHp -= monsterDmg;
            this.logs.unshift(`Monster damages player by ${monsterDmg} points`);
        },
        giveUp: function(){
            this.playerHp = 0;
            this.logs.unshift(`Defeat!`);
        },
        playerHeal: function(){
            // heals between 3 and 11
            let healPlayer = this.randomHeal()
            this.playerHp += healPlayer;
            this.logs.unshift(`Player heals by ${healPlayer} points`);
            setTimeout(() => this.monsterAtk(), 1000);
        }
    }


});