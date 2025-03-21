import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    eventsDep: [
        {
            id: 1,
            title: 'Futbol Rapido',
            description: 'Mini torneo de 10 equipos.',
            date: '2021-10-10',
            image: '../assets/images/modals/soccerBall.png'
        },
        {
            id: 2,
            title: 'Futbol Americano',
            description: 'Semifinales de la liga escolar.',
            date: '2021-10-11',
            image: '../assets/images/modals/basketball.png'
        },
        {
            id: 3,
            title: 'Voleibol',
            description: 'Partidos de preparación.',
            date: '2021-10-12',
            image: '../assets/images/modals/futbolBall.png'
        },
        {
            id: 4,
            title: 'Basquetbol',
            description: '2 partido de la Gran Final de la liga escolar.',
            date: '2021-10-12',
            image: '../assets/images/modals/voleyball.png'
        }
    ],
    eventsCul: [
        {
            id: 1,
            title: 'Concurso de baile',
            description: 'Concurso de baile en el auditorio de la escuela',
            date: '2021-10-10',
        },
        {
            id: 2,
            title: 'Concurso de pintura',
            description: 'Concurso de pintura en la biblioteca de la escuela',
            date: '2021-10-11',
        },
        {
            id: 3,
            title: 'Conferencia de historia',
            description: 'Conferencia de historia en el auditorio de la escuela',
            date: '2021-10-12',
        }
    ],
    eventsAca: [
        {
            id: 1,
            title: 'Entrega Diplomas',
            description: 'Entrega de diplomas en el auditorio de la escuela',
            date: '2021-10-10',
        },
        {
            id: 2,
            title: 'Conferencia IA',
            description: 'Conferencia de inteligencia artificial en la biblioteca de la escuela',
            date: '2021-10-11',
        }

    ]
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setEvents(state, action) {
            state.events = action.payload;
        }
    },
});

export const { events } = counterSlice.actions;
export default counterSlice.reducer;
