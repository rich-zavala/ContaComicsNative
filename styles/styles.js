export const Colors = {
  dark: '#424242',
  header: '#333',
  headerBtn: '#e6e6e6',
  headerBtnUnder: '#333',
  white: 'white',
  sideBarBtn: '#bfbfbf',
  icon: 'white'
};

const paddings = {
  btn: 10,
  subtitle: 16
};

export const Styles = {
  header: {
    container: {
      // padding: 10,
      backgroundColor: Colors.header,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      height: 50
    },
    textContainer: {
      marginTop: 4,
    },
    text: {
      marginTop: 10,
      color: Colors.headerBtn,
      fontSize: 20
    },
    btnMenuContainer: {
      marginRight: 20,
      backgroundColor: 'yellow',
      padding: 12,
    },
    btnMenu: {
      fontSize: 22,
      color: Colors.headerBtn,
      borderWidth: 1,
      borderColor: 'green'
    },
    btnAddContainer: {
      position: 'absolute',
      right: 4,
      top: 7
    },
    btnAddIcon: {
      fontSize: 20,
      color: Colors.header
    },
    btnAddText: {
      color: Colors.header
    }
  },
  sidebar: {
    container: {
      flex: 1,
      backgroundColor: Colors.dark,
      marginTop: 24,
      // padding: 10
    },
    divider: {
      backgroundColor: Colors.sideBarBtn,
      marginTop: 0,
      marginBottom: 8
    },
    header: {
      alignItems: 'center',
      padding: 60,
      paddingLeft: 20,
      paddingRight: 20,
      width: '100%',
      backgroundColor: 'black'
    },
    logo: {
      fontSize: 30,
      color: Colors.white,
      marginBottom: 12
    },
    btnContainer: {
      flexDirection: 'row',
      width: '100%',
      padding: paddings.btn
    },
    btnIconContainer: {
      width: 38,
      marginRight: 24,
      alignItems: 'center'
    },
    btnIcon: {
      fontSize: 24,
      marginTop: 5,
      color: Colors.icon
    },
    btnTxt: {
      fontSize: 19,
      color: Colors.sideBarBtn,
      marginTop: 5,
      marginBottom: 6
    },
    text: {
      color: Colors.white
    },
    subtitle: {
      fontSize: 14,
      color: 'gray',
      paddingLeft: paddings.subtitle,
      marginBottom: 10
    },
    yearConainer: {
      paddingLeft: 16,
      padding: paddings.btn
    }
  }
};