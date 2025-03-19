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
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingVertical: 10,
    }
  },

  //Navigate Bar
  navigate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: '#cdeae6',
    borderRadius: 20,
    marginHorizontal: 10,
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
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
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
      paddingVertical: 50,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    containCards: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      backgroundColor: '#03197B'
    },
    card: {
      backgroundColor: '#03197B',
      
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

  footer: {
    main: {
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
      paddingVertical: 10,
    }
  }

});
