new Vue ({
    el: '#app',
    data:{
        playerHp: 100,
        monsterHp: 100,
        logs: [],
        end: false,
        game: false
    },
    methods:{
        updateHp(kind){
            if(kind == 'player')return{width: this.playerHp + "%"};
            return {width: this.monsterHp + "%"}
        },
        randomNum(min, length){
            return  min+Math.floor(Math.random()*length)
        },
        resetGame(){
            this.playerHp = 100;
            this.monsterHp = 100;
            this.logs = [];
            this.end = false;
            this.game = true;
        },
        attack(kind, special){
            let damage = 0;
            if(!special) damage = this.randomNum(5,9);
            else damage = this.randomNum(3,11);
            if (kind == 'player'){
                this.monsterHp -= damage;
                if (this.monsterHp < 0) this.monsterHp = 0;
                this.logs.unshift(`Player hits monster by ${damage} points`);
                this.endCheck();
                if(!this.end)this.attack('monster',true);
            }
            else{
                this.playerHp -= damage;
                if (this.playerHp < 0) this.playerHp = 0;
                this.logs.unshift(`Monster hits player by ${damage} points`);
                this.endCheck();
            }
        },
        giveUp(){
            this.playerHp = 0;
            this.endCheck();
        },
        heal(){
            this.playerHp += 7;
            if (this.playerHp > 100) this.playerHp = 100;
            this.logs.unshift(`Player heals by 7 points`);
            this.attack('monster');
        },
        endCheck(){
            if (this.playerHp == 0 | this.monsterHp == 0){
                if(this.playerHp == 0)this.logs.unshift('Defeat!'); 
                else this.logs.unshift('Victory!')
                this.end = true; 
                setTimeout(() => this.resetGame(), 1000);
            }
        }
    }
});