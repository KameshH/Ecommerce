import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent:'center',
    alignSelf:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 310,
    // left:25,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.85,
    elevation: 5,
    backgroundColor: Colors.white,
    marginVertical:12,
    borderRadius:4,

  },

  title: {
    color: Colors.black,
    fontSize:18,
    fontWeight:'bold',
    // marginBottom:6
  },
  subtitle: {
    color: Colors.blue,
    fontSize:12
  },
  content: {
    
  },
});
