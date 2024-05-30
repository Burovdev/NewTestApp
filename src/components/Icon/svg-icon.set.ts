import BackIcon from '../../assets/icons/back_icon.svg';

import {SvgProps} from 'react-native-svg';

type SvgIconType = {
  [key: string]: React.FC<SvgProps>;
};

export const SvgIconSet: SvgIconType = {
  BackIcon,
};

export {BackIcon};
