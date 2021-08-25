module.exports = {
    nameCard: (num) => {
        const card = { 
            2: 'MasterCard',

            3: {
                '4': 'American Express',
                '5': 'JCB',
                '6': 'Diners Club international',
                '7': 'American Express',
                '8': 'Diners Club international',
            },

            4: 'Visa',

            5: {
                '1': 'MasterCard',
                '2': 'MasterCard',
                '3': 'MasterCard',
                '4': 'MasterCard',
                '5': 'MasterCard',
                '6': 'Maestro',
                '7': 'Maestro',
                '8': 'Maestro',
                '9': 'Maestro',
            },
            6: {
                2: {
                    1: 'UnionPay',
                    2: 'Discover',
                    3: 'UnionPay',
                    4: 'UnionPay',
                    5: 'UnionPay',
                    6: 'UnionPay',
                    7: 'UnionPay',
                    8: 'UnionPay',
                    9: 'UnionPay',
                },
                4: {
                    4: 'Discover',
                    5: 'Discover',
                    6: 'Discover',
                    7: 'Discover',
                    8: 'Discover',
                    9: 'Discover',
                },

                5: 'Discover',
            }
        }
        
        if(num[0] ==='2' || num[0] === '4') { return card[num[0]]};
        if(num[0] === '3' || num[0]=== '5') { return card[num[0]][num[1]] || 'Card' };
        if(num[0] === '6' && num[1] === '2' || num[1] === '4') { return card[num[0]][num[1]][num[2]] || 'Card' };
        if(num[0] === '6' && num[1] === '5'){return card[num[0]][num[1]] || 'Card'}
    }
}