import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  // Contenedor principal
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: '500px',
    borderColor: '#000000',
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
  },

  body: {
    flexGrow: 1,
    maxHeight: 580,
    height: height * 1,
    alignItems: 'stretch',
    backgroundColor: '#F2F2F2',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingHorizontal: 10,
  },

  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 10
  },

  //Navigate Bar
  navigate: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,

    backgroundColor: '#cdeae6',

  },

  //Buttons
  button: {
    navigate: {
      backgroundColor: '#00897B',
      width: 110,
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
      width: 170,
      fontSize: 20,
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
      fontSize: 20,
      fontWeight: 'bold'

    },
    welcome: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 10,
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

  students: {
    form: {
      height: height * 0.5,
      paddingVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',

    },
  },


  events: {
    containCards: {
      justifyContent: 'center',
      borderRadius: 15,
      backgroundColor: '#fff',
      padding: 5
    },
    containRow: {
      flexDirection: 'row',
      maxWidth: '100%',
      backgroundColor: '#fff',
      borderRadius: 15,
      marginHorizontal: 5,
      justifyContent: 'center',
    },
    card: {
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 15,
      borderStyle: 'solid',
      padding: 10,
      marginHorizontal: 5
    },
    cardHorizontal: {
      width: '100%',
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 15,
      borderStyle: 'solid',
      padding: 10,
      marginTop: 10
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
      height: '95%',
      width: '100%',
      overflow: 'hidden',
      marginVertical: height * 0.02,
      position: 'absolute',
      backgroundColor: '#e1dede',
      justifyContent: 'center',
      borderRadius: 20,
    },
    children: {
      flexGrow: 1,
      height: '100%',
      justifyContent: 'center'
    },
    text: {
      tittle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
      }
    },
  },

  card: {
    height: 90,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 15
  },

  footer: {
    height: 50,
    backgroundColor: '#fff',
    borderTopColor: '#000000',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
