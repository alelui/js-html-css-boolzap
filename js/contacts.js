// alert('cioane');

const app = new Vue({
    el: '#root',
    data:{
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
        ],

        selectedContact: 0,
        newMessage: ''
    },

    

    methods:{
        selectMessage: function(i){
            this.selectedContact = i;
        },

        changeClass: function(i){
            console.log(this.contacts[i].messages.status);
            // console.log(i);
        },

        addNewMessage(){
            if(this.newMessage !== ''){
                const y = new Date().toLocaleDateString();
                const h = new Date().toLocaleTimeString();
                const newObject = {
                    date: y + " " + h,
                    message: this.newMessage,
                    status: 'sent'
                };

                this.contacts[this.selectedContact].messages.push(newObject);
                this.newMessage = '';

                setTimeout(function () { this.addAnsware() }.bind(this), 3 * 1000)
            }
        },

        addAnsware: function(){
            const y = new Date().toLocaleDateString();
            const h = new Date().toLocaleTimeString();
            const newReceivedObject = {
                date: y + " " + h,
                message: 'ok',
                status: 'received'
            };
            this.contacts[this.selectedContact].messages.push(newReceivedObject);
        },
    
    }
});



