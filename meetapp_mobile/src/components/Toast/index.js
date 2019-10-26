import { WSnackBar } from 'react-native-smart-tip';

export default function Toast(text, type) {
  const errorFormat = {
    textColor: '#fff',
    backgroundColor: '#ff0000',
  };

  const successFormat = {
    textColor: '#fff',
    backgroundColor: '#007e3a',
  };

  const snackBarOpts = {
    data: text,
    position: WSnackBar.position.TOP,
    duration: WSnackBar.duration.SHORT,
    ...(type === 'error' ? errorFormat : successFormat),
  };

  WSnackBar.show(snackBarOpts);
}
