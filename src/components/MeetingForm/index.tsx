import React, {useEffect, useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../../shared/components/Button';
import {Meetings} from '../../types/meetings';
import {getCollaborators} from '../../services/collaborators';
import {saveMeeting, updateMeeting} from '../../services/meetings';
import {useRoute, RouteProp} from '@react-navigation/native';
import {NavigationContainerRef} from '@react-navigation/native';
import {Collaborators} from '../../types/collaborators';
import {useMessage, TypeNotification} from '../../context/Notification';

import {
  Container,
  ContentForm,
  TextInput,
  Label,
  IconButton,
  Row,
  ContentButton,
  DateSelected,
  Body,
  Footer,
  SelectMultipleStyled,
  Error,
  ContetMultiSelect,
} from './styles';

const windowWidth = Dimensions.get('window').width;

const FormSchema = Yup.object().shape({
  title: Yup.string().required('Insira um título'),
  description: Yup.string(),
});

interface ErrosProps {
  collaborators: null | string;
}

interface FormProps {
  title: string;
  description: string;
}

interface nativeEventProps {
  timestamp?: number;
}

interface Event {
  nativeEvent: nativeEventProps;
  type: string;
}

type ParamList = {
  MeetingForm: {
    meeting?: Meetings;
  };
};

interface MeetingFormProps {
  navigation: NavigationContainerRef;
}

const MeetingForm: React.FC<MeetingFormProps> = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [startAt, setStartAt] = useState(new Date());
  const [endAt, setEndAt] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showStartAt, setShowStartAt] = useState(false);
  const [showEndAt, setShowEndAt] = useState(false);
  const [initialValues, setInitialValues] = useState({
    title: '',
    description: '',
  });
  const [collaborators, setCollaborators] = useState<Collaborators[]>([]);
  const [listCollaborators, setListCollaborators] = useState<string[]>([]);
  const [errosWitoutFormik, setErrosWitoutFormik] = useState<ErrosProps>({
    collaborators: null,
  });
  const title = useRef(null);
  const description = useRef(null);
  const route = useRoute<RouteProp<ParamList, 'MeetingForm'>>();
  const [loading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [idItemUpdate, setIdItemUpdate] = useState<number | undefined>(
    undefined,
  );
  const {setMessage, setShowNotification, setTypeMessage} = useMessage();

  const changeDate = (Event: Event) => {
    setShowDate((state) => !state);
    if (Event.nativeEvent.timestamp) {
      const dateSelected = new Date(Event.nativeEvent.timestamp);
      setDate(dateSelected);
    }
  };

  const changeStartAt = (Event: Event) => {
    setShowStartAt((state) => !state);
    if (Event.nativeEvent.timestamp) {
      const timeSelected = new Date(Event.nativeEvent.timestamp);
      setStartAt(timeSelected);
    }
  };

  const changeEndAt = (Event: Event) => {
    setShowEndAt((state) => !state);
    if (Event.nativeEvent.timestamp) {
      const timeSelected = new Date(Event.nativeEvent.timestamp);
      setEndAt(timeSelected);
    }
  };

  const onSelectionsChange = (selectedCollaborators: Collaborators[]) => {
    setCollaborators(selectedCollaborators);
  };

  const validateCollaborators = () => {
    if (collaborators.length <= 0) {
      setErrosWitoutFormik({
        ...errosWitoutFormik,
        collaborators: 'Selecione ao menos um colaborador.',
      });

      return false;
    } else {
      setErrosWitoutFormik({
        ...errosWitoutFormik,
        collaborators: null,
      });

      return true;
    }
  };

  const generateId = () => {
    const id = new Date().getTime();
    return id;
  };

  const handleSubmit = (values: FormProps) => {
    const id = idItemUpdate ? idItemUpdate : generateId();

    const valid = validateCollaborators();

    const submitItens = {...values, collaborators, date, startAt, endAt, id};

    if (valid && !isUpdate) {
      saveMeeting(submitItens)
        .then((response) => {
          setMessage('Reunião salva com sucesso!');
          setTypeMessage(TypeNotification.sucess);
          setShowNotification(true);

          navigation.navigate('MeetingList');
        })
        .catch(() => {
          setMessage('Não foi possível salvar essa reunião!');
          setTypeMessage(TypeNotification.error);
          setShowNotification(true);
        });
    } else if (valid && isUpdate) {
      updateMeeting(submitItens)
        .then((reponse) => {
          setMessage('Alteração realizada com sucesso!');
          setTypeMessage(TypeNotification.sucess);
          setShowNotification(true);

          navigation.navigate('MeetingList');
        })
        .catch((err) => {
          setMessage('Não foi possível realizar essa alteração!');
          setTypeMessage(TypeNotification.error);
          setShowNotification(true);
        });
    }
  };

  const getAllCollaborators = () => {
    getCollaborators()
      .then((response) => {
        setListCollaborators(response);
      })
      .catch((err) => {
        setMessage('Não foi possível carregar a lista de colaboradores!');
        setTypeMessage(TypeNotification.error);
        setShowNotification(true);
      });
  };

  const formatDate = (date: Date) => {
    const newDate = new Date(date);
    const dateFormated = newDate.toISOString().split('T');
    return dateFormated[0];
  };

  const populateForm = (meeting: Meetings) => {
    setInitialValues({
      title: meeting.title,
      description: meeting.description ? meeting.description : '',
    });

    setDate(new Date(meeting.date));
    setStartAt(new Date(meeting.startAt));
    setEndAt(new Date(meeting.endAt));
    setCollaborators(meeting.collaborators);
  };

  const verifyUpdate = () => {
    const item = route.params?.meeting;
    if (item) {
      setIsUpdate(true);
      populateForm(item);
      setIdItemUpdate(item.id);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [initialValues]);

  useEffect(() => {
    setLoading(true);
    verifyUpdate();
    getAllCollaborators();
  }, []);

  return (
    <Container>
      {!loading && (
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={FormSchema}
        >
          {({values, handleChange, handleSubmit, errors, resetForm}) => (
            <ContentForm>
              <Body>
                <Label>Título</Label>
                <TextInput
                  ref={title}
                  value={values.title}
                  onChangeText={handleChange('title')}
                />
                {errors.title && <Error>{errors.title}</Error>}
                <Label>Descrição</Label>
                <TextInput
                  ref={description}
                  value={values.description}
                  onChangeText={handleChange('description')}
                />
                {errors.description && <Error>{errors.description}</Error>}
                <Row>
                  <Label>Data: </Label>
                  <DateSelected>{formatDate(date)}</DateSelected>
                  <IconButton onPress={() => setShowDate(true)}>
                    <ContentButton>+</ContentButton>
                  </IconButton>
                </Row>
                {showDate && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={(data) => changeDate(data)}
                  />
                )}
                <Row>
                  <Label>Início: </Label>
                  <DateSelected>
                    {startAt.toTimeString().split(' ')[0]}
                  </DateSelected>
                  <IconButton onPress={() => setShowStartAt(true)}>
                    <ContentButton>+</ContentButton>
                  </IconButton>
                </Row>
                {showStartAt && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={(data) => changeStartAt(data)}
                  />
                )}
                <Row>
                  <Label>Final: </Label>
                  <DateSelected>
                    {endAt.toTimeString().split(' ')[0]}
                  </DateSelected>
                  <IconButton onPress={() => setShowEndAt(true)}>
                    <ContentButton>+</ContentButton>
                  </IconButton>
                </Row>
                {showEndAt && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={(data) => changeEndAt(data)}
                  />
                )}
                <ContetMultiSelect>
                  <SelectMultipleStyled
                    items={listCollaborators}
                    selectedItems={collaborators}
                    onSelectionsChange={onSelectionsChange}
                  />
                </ContetMultiSelect>
                {errosWitoutFormik.collaborators && (
                  <Error>{errosWitoutFormik.collaborators}</Error>
                )}
              </Body>
              <Footer>
                <Button
                  type="primary"
                  title={isUpdate ? 'ALTERAR' : 'SALVAR'}
                  size={windowWidth - 40}
                  action={handleSubmit}
                />
              </Footer>
            </ContentForm>
          )}
        </Formik>
      )}
    </Container>
  );
};

export default MeetingForm;
