import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
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
      fontSize: 16,
      textAlign: 'justify',
      paddingHorizontal: 10
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

  footer: {
    main: {
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
      paddingVertical: 10,
    }
  }

});
