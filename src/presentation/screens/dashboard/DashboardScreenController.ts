import {useNavigation} from '@react-navigation/native';
import useAppViewModel from '../../viewmodel/useAppViewModel';
import {AppDestinations} from '../common/AppDestinations';

const DashboardScreenController = () => {
  const navigation = useNavigation();
  const {notesList, removeNote, timeOfDay} = useAppViewModel();
  const onFabClick = () => {
    navigation.navigate(AppDestinations.AddScreen as never);
  };

  const onItemRemove = (id: string) => removeNote(id);

  return {
    notesList,
    timeOfDay,
    onFabClick,
    onItemRemove,
  };
};

export default DashboardScreenController;
