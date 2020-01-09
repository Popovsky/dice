console.log('App was loaded...');
let cash = 1000;
let attempt = 0;
(function(){
    const playRate = () => {
        const userRate = +prompt(`Enter the number from 1 to ${cash}`);
        if (cash >= userRate && userRate >= 1) {
            cash -= userRate;
            const playNumber = () => {
                const userNumber = +prompt('Enter the number from 2 to 12');
                if (userNumber > 1 && userNumber < 13) {
                    attempt++;
                    let firstDice;
                    let secondDice;
                    let res;
                    attempt < 3 ? userNumber % 2 ? (firstDice = Math.ceil(userNumber / 2),secondDice = Math.floor(userNumber / 2)) 
                        : (firstDice = userNumber / 2,secondDice = userNumber / 2) : (firstDice = Math.ceil(Math.random() * 6),secondDice = Math.ceil(Math.random() * 6));
                    res = firstDice + secondDice;
                    res === userNumber ? firstDice === secondDice ? cash += userRate * 3 : cash += userRate * 2 : null;
                    console.log(`Your rate: ${userRate}`);
                    console.log(`Your number: ${userNumber}`);
                    console.log(`Your first dice: ${firstDice}`);
                    console.log(`Your second dice: ${secondDice}`);
                    console.log(`Your res: ${res}`);
                    console.log(`Your attempt: ${attempt}`);
                    console.log(`Your cash: ${cash}`);
                } else playNumber();
            };
            playNumber();
        } else playRate();
        if (cash < 10000 && cash > 0) {
            playRate();
        } else if (cash >= 10000) {
            const final = confirm('Congratulations! You won! Do you want to continue?');
            final ? playRate() : console.log(`Your winnings totaled ${cash}`);
        } else console.log('You lose!');
    };
    playRate();
}());
