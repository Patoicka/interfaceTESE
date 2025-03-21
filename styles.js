import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  // Contenedores
  main: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },

  header: {
    main: {
      flexDirection: 'row',
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingVertical: 10,
    }
  },

  //Navigate Bar
  navigate: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 10,
    paddingVertical: 10,
    backgroundColor: '#cdeae6',
  },

  //Buttons
  button: {
    navigate: {
      backgroundColor: '#00897B',
      width: 120,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginHorizontal: 2
    },
    studentForm: {
      backgroundColor: '#00897B',
      width: 100,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    }
  },

  // Textos
  text: {
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    footer: {
      fontSize: 12,
    },
    buttonNav: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonForm: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonCard: {
      color: '#013731',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10
    },
    welcome: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    description: {
      fontSize: 22,
      textAlign: 'justify',
    },
    others: {
      fontSize: 18,
      textAlign: 'justify',
    },
    span: {
      paddingVertical: 10,
      fontSize: 16,
      fontStyle: 'italic',
      textAlign: 'center'
    },
    label: {
      fontSize: 16,
      textAlign: 'center'
    },
    warn: {
      fontSize: 16,
      textAlign: 'center',
      color: '#ea0909',
      fontWeight: 'bold',
      paddingBottom: 10
    },
  },

  // Elementos
  body: {
    main: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
    },
    welcome: {
      flex: 1,
      alignItems: 'start',
      borderRadius: 10,
      width: '100%',
      paddingTop: 10,
    },
    icon: {
      paddingVertical: 50,
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  },

  students: {
    main: {
      flex: 1,
      paddingVertical: 50,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    form: {
      paddingVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',

    },
  },

  events: {
    main: {
      flex: 1,
      paddingVertical: 10,
      justifyContent: 'center',
    },
    containCards: {
      flexDirection: 'row',
    },
    card: {
      flex: 1,
      backgroundColor: '#cdeae6',
      paddingVertical: 10,
      marginHorizontal: 5,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    cardHorizontal: {
      backgroundColor: '#cdeae6',
      marginVertical: 10,
      marginHorizontal: 5,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
  },

  input: {
    studentForm: {
      height: 40,
      borderColor: '#00897B',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      width: 200,
      marginVertical: 10,
      backgroundColor: '#fff'
    }
  },

  modal: {
    main: {
      width: '90%',
      height: '98%',
      marginVertical: '2%',
      marginHorizontal: '5%',
      position: 'absolute',
      backgroundColor: '#e1dede',
      justifyContent: 'flex-start',
      paddingTop: 20,
      alignItems: 'center',
      borderRadius: 20,
    },
    text: {
      tittle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
      }
    },
  },

  modalEvent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  card: {
    backgroundColor: '#fff',
    flex: 1,
    width: '96%',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    position: 'relative',
  },

  footer: {
    main: {
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      paddingVertical: 10,
    }
  }

});
